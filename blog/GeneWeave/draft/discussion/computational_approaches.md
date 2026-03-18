# 计算方法：从基因预测连接

## 目录

1. [概述](#概述)
2. [双线性模型（Bilinear Models）](#双线性模型bilinear-models)
3. [图神经网络方法](#图神经网络方法)
4. [生成模型](#生成模型)
5. [符号回归与可解释模型](#符号回归与可解释模型)
6. [数据整合策略](#数据整合策略)
7. [评估与验证](#评估与验证)

---

## 概述

将基因表达数据转化为连接预测是连接组学的核心挑战之一。本文档总结了当前主要的计算方法，特别关注如何从转录组数据预测神经元之间的连接模式。

### 核心假设

**遗传决定论假设**：
```
神经元i和神经元j之间的连接概率 = f(基因表达_i, 基因表达_j)
```

**关键问题**：
1. 如何表示基因表达？（单个基因 vs 基因组合）
2. 如何建模交互？（线性 vs 非线性）
3. 如何处理稀疏性？（大多数神经元对不连接）
4. 如何整合其他信息？（空间位置、形态、谱系）

---

## 双线性模型（Bilinear Models）

### 基本原理

双线性模型假设连接概率由突触前和突触后神经元的基因表达通过一个交互矩阵决定。

### 数学形式

**标准双线性模型**：
```
P(i → j) = σ(g_i^T W g_j + b)
```

其中：
- `g_i`：神经元i的基因表达向量
- `g_j`：神经元j的基因表达向量
- `W`：基因-基因交互矩阵（可学习参数）
- `σ`：sigmoid函数
- `b`：偏置项

**物理意义**：
- `W[a,b]`：基因a（突触前）和基因b（突触后）的交互强度
- 正值：促进连接
- 负值：抑制连接

### 代表性工作

#### 1. Barabási实验室的C. elegans研究

**论文**：Kovács et al., "Uncovering the genetic blueprint of the C. elegans nervous system", PNAS 2020

**方法**：
```
A_ij = Σ_α Σ_β W_αβ g_i^α g_j^β
```

**发现**：
- 少数基因对（~100对）可以解释大部分连接模式
- 某些基因对具有强促进或抑制作用
- 模型可以预测未观察到的连接

**优势**：
- 可解释性强：可以识别关键基因对
- 参数效率高：相比全连接网络
- 生物学合理：符合配体-受体配对机制

#### 2. Mu Qiao的扩展模型

**论文**：Qiao et al., "Deciphering the Genetic Code of Neuronal Type Connectivity: A Bilinear Modeling Approach", eLife 2023

**创新点**：
1. **多层双线性模型**：
   ```
   P(i → j) = σ(Σ_k w_k · (g_i^T W_k g_j))
   ```
   - 多个交互矩阵的加权组合
   - 捕捉不同生物学过程（引导、识别、稳定）

2. **正则化策略**：
   - L1正则：促进稀疏性
   - 结构化正则：利用基因功能注释

3. **处理细胞类型**：
   - 在细胞类型水平建模
   - 考虑类型内变异性

**结果**：
- 提高预测准确率
- 识别出与已知SAM一致的基因对
- 发现新的候选连接基因

### 实现考虑

**数据预处理**：
```python
# 基因表达归一化
g_normalized = log(TPM + 1)  # 对数变换
g_normalized = (g - mean) / std  # 标准化

# 特征选择
# 方法1：高变异基因
top_genes = select_highly_variable_genes(expression_matrix, n=2000)

# 方法2：已知连接相关基因
candidate_genes = ['neurexin', 'neuroligin', 'dscam', 'side', 'beat', ...]
```

**模型训练**：
```python
# 损失函数
loss = BCE(predictions, true_connections) + λ₁||W||₁ + λ₂||W||²

# 处理类别不平衡
# 连接是稀疏的（正样本 << 负样本）
pos_weight = n_negative / n_positive
loss = weighted_BCE(predictions, labels, pos_weight)
```

**挑战**：
1. **过拟合**：参数多，需要强正则化
2. **负样本选择**：如何定义"不连接"
3. **批次效应**：不同数据集的整合

---

## 图神经网络方法

### 动机

神经元不是孤立的，它们嵌入在网络中。图神经网络（GNN）可以利用网络结构信息。

### 架构设计

#### 1. 基于节点嵌入的方法

**流程**：
```
基因表达 → GNN编码器 → 节点嵌入 → 连接预测
```

**GNN编码器**：
```python
# 消息传递
h_i^(l+1) = σ(W^(l) h_i^(l) + Σ_{j∈N(i)} M^(l)(h_i^(l), h_j^(l)))

# 其中M是消息函数，例如：
M(h_i, h_j) = MLP([h_i || h_j || e_ij])
```

**连接预测**：
```python
# 方法1：点积
score_ij = h_i^T h_j

# 方法2：双线性
score_ij = h_i^T W h_j

# 方法3：MLP
score_ij = MLP([h_i || h_j])
```

#### 2. 图注意力网络（GAT）

**优势**：
- 自动学习邻居的重要性权重
- 适合异质网络（不同类型的边）

**应用**：
- Struct2Graph：蛋白质-蛋白质相互作用预测
- 可迁移到神经元连接预测

#### 3. 多关系图网络

**场景**：同时建模多种关系
- 化学突触
- 电突触（gap junction）
- 神经肽信号
- 空间邻近

**方法**：
```python
# 每种关系类型有独立的参数
h_i^(l+1) = σ(Σ_r W_r^(l) Σ_{j∈N_r(i)} h_j^(l))
```

### 代表性工作

**基因调控网络推断**：
- SCENIC+：单细胞多组学数据的调控网络
- LINGER：整合外部图谱数据

**连接组预测**：
- 将GRN方法迁移到连接预测
- 挑战：连接组数据更稀疏

---

## 生成模型

### 随机生成模型

#### Schneidman实验室的工作

**论文**：Richter & Schneidman, "Building a small brain with a simple stochastic generative model", bioRxiv 2024

**思路**：
- 不直接预测连接，而是学习生成连接的随机过程
- 捕捉连接的统计规律

**模型**：
```
P(连接 | 神经元属性) = 
  f(类型, 空间位置, 基因表达, 发育时间)
```

**优势**：
- 可以生成整个网络
- 捕捉高阶统计特性（motifs, 度分布）
- 量化不确定性

#### 应用场景

**虚拟连接组生成**：
- 用于测试假设
- 探索参数空间
- 数据增强

**进化模拟**：
- 模拟基因突变对连接的影响
- 理解连接的进化约束

---

## 符号回归与可解释模型

### 动机

深度学习模型是"黑箱"，难以提取生物学洞见。符号回归寻找可解释的数学公式。

### 方法

#### 1. 遗传编程

**PySR（Python Symbolic Regression）**：
```python
from pysr import PySRRegressor

model = PySRRegressor(
    niterations=100,
    binary_operators=["+", "*", "/", "-"],
    unary_operators=["exp", "log", "sqrt"],
    constraints={'exp': 2, 'log': 2}  # 限制复杂度
)

# 输入：基因表达特征
# 输出：连接概率
model.fit(X_features, y_connectivity)

# 获得最佳公式
best_formula = model.sympy()
print(best_formula)
# 例如：P = exp(0.5*gene_A*gene_B - 0.3*gene_C)
```

#### 2. Kolmogorov-Arnold Networks (KAN)

**论文**：Liu et al., "KAN: Kolmogorov-Arnold Networks", arXiv 2024

**思路**：
- 用可学习的单变量函数替代固定激活函数
- 更容易提取符号表达式

**应用**：
```
P(i → j) = Φ(Σ_k φ_k(g_i[k]) · ψ_k(g_j[k]))
```

其中φ和ψ是可学习的单变量函数，训练后可以拟合为简单函数（多项式、指数等）。

### 期望输出

**理想的符号公式**：
```
P(连接) = sigmoid(
    α₁ · neurexin_pre · neuroligin_post +
    α₂ · side_pre · beat_post +
    α₃ · exp(-distance/λ) +
    α₄ · same_lineage
)
```

**优势**：
- 直接可解释
- 可以指导实验设计
- 揭示未知的基因组合规则

---

## 数据整合策略

### 多模态数据融合

#### 1. 早期融合（Early Fusion）

**方法**：在特征层面整合
```python
features = concatenate([
    gene_expression,
    spatial_coordinates,
    morphology_features,
    lineage_info
])

model = Predictor(features)
```

**优势**：简单直接
**劣势**：不同模态的尺度和噪声特性不同

#### 2. 晚期融合（Late Fusion）

**方法**：每个模态独立建模，最后整合预测
```python
pred_gene = GeneModel(gene_expression)
pred_spatial = SpatialModel(coordinates)
pred_morphology = MorphologyModel(morphology)

final_pred = weighted_average([pred_gene, pred_spatial, pred_morphology])
```

**优势**：模块化，易于调试
**劣势**：可能错过跨模态交互

#### 3. 注意力融合

**方法**：学习不同模态的重要性权重
```python
# 对每个神经元对，动态决定哪个模态更重要
attention_weights = softmax([
    score_gene(i, j),
    score_spatial(i, j),
    score_morphology(i, j)
])

final_score = Σ_k attention_weights[k] * pred_k(i, j)
```

### 跨数据集学习

#### 迁移学习策略

**场景**：从数据丰富的物种/系统迁移到数据稀缺的系统

**方法1：预训练-微调**
```
1. 在C. elegans上预训练（连接组完整）
2. 在Drosophila上微调（部分连接组）
3. 应用到小鼠（连接组稀疏）
```

**方法2：域适应**
```python
# 对齐不同物种的基因表达空间
aligned_expression = domain_adaptation(
    source_expression,  # C. elegans
    target_expression,  # Drosophila
    ortholog_mapping
)
```

### 处理缺失数据

**连接组不完整**：
- 半监督学习
- 主动学习（选择最有信息量的连接去验证）

**基因表达缺失**：
- 插补方法（MAGIC, scVI）
- 利用基因调控网络推断

---

## 评估与验证

### 评估指标

#### 1. 连接预测准确率

**二分类指标**：
```python
# 精确率-召回率
precision = TP / (TP + FP)
recall = TP / (TP + FN)
F1 = 2 * precision * recall / (precision + recall)

# AUROC, AUPRC
auroc = roc_auc_score(y_true, y_pred)
auprc = average_precision_score(y_true, y_pred)
```

**注意**：连接是稀疏的，AUPRC比AUROC更有意义

#### 2. 网络拓扑保真度

**度分布**：
```python
# 预测网络和真实网络的度分布是否匹配
ks_statistic = ks_test(degree_pred, degree_true)
```

**Motif频率**：
```python
# 三节点motifs（前馈、反馈、互惠等）
motif_counts_pred = count_motifs(predicted_network)
motif_counts_true = count_motifs(true_network)
correlation = pearsonr(motif_counts_pred, motif_counts_true)
```

**社区结构**：
```python
# 模块化程度
modularity_pred = compute_modularity(predicted_network)
modularity_true = compute_modularity(true_network)
```

#### 3. 生物学有效性

**基因重要性排序**：
- 模型识别的重要基因是否与已知SAM一致？
- 新发现的基因是否有生物学合理性？

**可解释性**：
- 模型学到的规则是否符合已知机制？
- 能否提出可测试的假设？

### 交叉验证策略

#### 1. 随机划分

**标准k-fold**：
- 随机划分神经元对
- 问题：可能泄露信息（同一神经元出现在训练和测试中）

#### 2. 神经元级别划分

**Leave-neurons-out**：
```python
# 测试集中的神经元在训练集中完全未见过
train_neurons = neurons[:800]
test_neurons = neurons[800:]

train_pairs = [(i,j) for i in train_neurons for j in train_neurons]
test_pairs = [(i,j) for i in test_neurons for j in test_neurons]
```

**挑战**：测试更严格，性能通常更低

#### 3. 细胞类型级别划分

**Leave-cell-types-out**：
- 训练时不包含某些细胞类型
- 测试模型的泛化能力

### 消融实验

**目的**：理解不同特征/模块的贡献

**实验设计**：
```python
# 基线：所有特征
model_full = train(gene + spatial + morphology)

# 消融：逐个移除
model_no_gene = train(spatial + morphology)
model_no_spatial = train(gene + morphology)
model_no_morphology = train(gene + spatial)

# 比较性能下降
importance_gene = performance(model_full) - performance(model_no_gene)
```

---

## 实际应用案例

### 案例1：预测果蝇视觉系统连接

**数据**：
- FlyWire连接组（完整）
- Fly Cell Atlas转录组（单细胞）

**流程**：
1. 将连接组神经元与转录组细胞类型匹配
2. 提取每个细胞类型的平均基因表达
3. 训练双线性模型预测类型间连接概率
4. 验证：与电镜连接对比

**结果**：
- 识别出Side/Beat家族的重要性
- 预测新的候选连接基因

### 案例2：人类皮层连接预测

**数据**：
- Allen Human Brain Atlas（基因表达）
- 扩散MRI（结构连接）

**挑战**：
- 空间分辨率低
- 连接是区域级别，不是单神经元

**方法**：
- 基因表达梯度 + 空间距离
- 预测区域间连接强度

**论文**：
- "Topographic Axes of Wiring Space Converge to Genetic Topography", J Neurosci 2024

---

## 开源工具与资源

### 数据资源

**连接组**：
- FlyWire: https://flywire.ai
- MICrONS: https://www.microns-explorer.org
- C. elegans: https://wormwiring.org

**转录组**：
- Fly Cell Atlas: https://flycellatlas.org
- Allen Brain Atlas: https://portal.brain-map.org
- BRAIN Initiative Cell Census: https://biccn.org

### 计算工具

**图分析**：
- NetworkX: Python图分析库
- igraph: 高性能图算法

**机器学习**：
- PyTorch Geometric: 图神经网络
- scikit-learn: 传统机器学习

**符号回归**：
- PySR: https://github.com/MilesCranmer/PySR
- gplearn: 遗传编程

**可视化**：
- Neuroglancer: 3D连接组可视化
- Cytoscape: 网络可视化

---

## 未来挑战

### 1. 数据挑战

- **配对数据稀缺**：同时有连接组和转录组的系统很少
- **批次效应**：不同实验室、技术平台的数据整合
- **时间动态**：发育过程中的连接变化

### 2. 模型挑战

- **可解释性 vs 性能**：复杂模型性能好但难解释
- **稀疏性**：大多数神经元对不连接，正负样本极不平衡
- **因果推断**：相关性不等于因果性

### 3. 验证挑战

- **实验验证成本高**：电镜重建耗时耗力
- **功能验证**：预测的连接是否功能性？
- **跨物种验证**：模型能否泛化？

### 4. 生物学挑战

- **随机性**：连接形成有内在随机性
- **活动依赖**：经验和活动影响连接
- **多尺度**：从分子到回路的跨尺度整合

---

*文档整理：基于GeneWeave项目的方法学调研*  
*最后更新：2026年3月*
