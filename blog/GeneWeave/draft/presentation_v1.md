# 基因如何决定神经元形态、突触形成与神经连接

## Presentation Outline

---

## 1. 背景知识：从基因到神经连接的路径

### 1.1 神经元极性与轴突形成

**核心问题**：神经元如何从多个初生突起中选择一个成为轴突？

**分子机制**：

#### 信号通路与小GTP酶
- **PI3K/PTEN信号**：局部积累PIP3促进微管稳定
- **小GTP酶**（Rac, Rho, Cdc42）：控制actin/微管动力学
- **激酶**（LKB1, MARK, Par家族）：建立神经元极性

#### 转录因子调控
- 启动下游轴突生长相关基因表达
  - 微管稳定蛋白（MAPs）
  - 肌动蛋白调控因子
  - 细胞黏附分子
  - 引导分子受体

#### 细胞骨架重塑
- **微管系统**：MAP1, MAP2, Tau, Kinesin/Dynein
- **肌动蛋白系统**：局部富集促进轴突方向生长

#### 轴突初始段（AIS）
- Ankyrin-G, βIV-spectrin
- 维持轴突身份，防止反向信号

---

### 1.2 轴突生长与引导

**核心问题**：轴突如何找到正确的投射目标？

#### 引导分子-受体系统

| 引导分子 | 受体 | 作用 |
|---------|------|------|
| **Netrin** | DCC, UNC5 | 吸引/排斥 |
| **Slit** | Robo | 排斥 |
| **Semaphorin** | Plexin, Neuropilin | 排斥/吸引 |
| **Eph/Ephrin** | Eph receptors | 排斥（主要） |

#### 生长锥的信号转导
- Rho GTPases
- PI3K
- Calcium信号通路
- 将外界信号转换为细胞骨架重构

---

### 1.3 突触形成与连接特异性

**核心问题**：轴突到达目标区域后，如何选择正确的突触后伙伴？

#### 突触黏附分子（SAMs）
- **Neurexin/Neuroligin**：经典突触组装分子
- **Protocadherins**：提供神经元身份标签
- **Cell adhesion molecules**：介导细胞识别

#### 突触选择机制
- 前突触/后突触黏附分子的配对
- SNARE蛋白家族
- 突触囊泡蛋白
- 突触后受体/支架蛋白

---

### 1.4 活动依赖性重塑

**核心问题**：神经活动如何精细调整连接？

#### 活动依赖基因表达
- **即早基因**（Immediate early genes）
- **神经营养因子**
- **胞内信号分子**

#### 突触可塑性
- 连接强度调整
- 突触修剪
- 连接增强/削弱

---

### 完整流程图

```
发育信号/外部cue
    ↓
激活/抑制 转录因子/信号通路基因
    ↓
下游靶基因表达（细胞骨架、引导受体、黏附分子）
    ↓
某个neurite偏向性积累
    ↓
该neurite被指定为轴突
    ↓
轴突延伸（囊泡运输 + 骨架重构 + 细胞黏附）
    ↓
遇到引导信号 → 导向/拐弯/避让/趋向
    ↓
到达目标区域 → 分支/靶标识别/突触形成
    ↓
活动依赖性调控 → 连接稳定性/可塑性/修剪/成熟
```

---

## 2. 实验例子

### 2.1 Eph/Ephrin系统：拓扑映射的建立

#### 经典研究：视网膜-视顶盖投射

**论文**：Brown et al., "Topographic Mapping from the Retina to the Midbrain Is Controlled by Relative but Not Absolute Levels of EphA Receptor Signaling", Cell 2000

**系统**：
- 视网膜神经节细胞（RGC）→ 视顶盖（superior colliculus）
- 需要建立精确的拓扑地图

**分子机制**：

1. **环境梯度**：
   - Ephrin-A在视顶盖呈前低后高的浓度梯度
   - 作为膜结合配体

2. **受体表达梯度**：
   - EphA受体在视网膜RGC呈鼻低颞高的表达梯度
   - 决定对Ephrin-A的敏感性

3. **排斥机制**：
   - 高表达EphA的颞侧RGC → 对Ephrin-A极度敏感 → 停留在前端
   - 低表达EphA的鼻侧RGC → 对Ephrin-A不敏感 → 延伸到后端

**定量关系**：
$$
\text{投射位置} \propto \frac{\text{EphA表达量}}{\text{Ephrin-A浓度}}
$$

**关键发现**：
- 是"相对水平"而非"绝对水平"决定投射位置
- 支持竞争性机制

**Figure建议**：
- 视网膜-视顶盖的拓扑映射示意图
- EphA和Ephrin-A的梯度分布
- 野生型 vs EphA突变体的投射模式对比

**相关论文**：
- Koike et al., "A data-driven framework linking the connectome to spatial gene expression gradients inspired by chemoaffinity theory", PNAS 2025
- "Topographic Axes of Wiring Space Converge to Genetic Topography in Shaping the Human Cortical Layout", J Neurosci 2024

---

### 2.2 Beat/Side系统：层特异性连接（果蝇视觉系统）

#### Zipursky实验室的系列工作

**论文1**：Yoo et al., "Brain wiring determinants uncovered by integrating connectomes and transcriptomics", Current Biology 2023

**系统**：
- T4/T5运动检测神经元（4个亚型对应4个运动方向）
- LPLC下游整合神经元

**实验流程**：
1. **连接组分析**：FlyWire电镜数据重建T4/T5→LPLC连接
2. **转录组分析**：单细胞RNA-seq鉴定差异表达基因
3. **相关性分析**：连接模式 vs 基因表达模式
4. **功能验证**：CRISPR敲除候选基因

**关键发现**：

**Side-II和Beat-VI的配对**：
```
T4a (前向运动) 表达Side-II → 连接到LPLC2 (表达Beat-VI)
T4b (后向运动) 不表达Side-II → 不连接LPLC2
```

**实验验证**：

| 基因型 | T4a→LPLC2连接 | T4b→LPLC2连接 |
|--------|--------------|--------------|
| 野生型 | 强连接 | 无连接 |
| Side-II KO | 连接减弱 | 无变化 |
| Beat-VI KO | 连接减弱 | 无变化 |
| 异位表达Side-II于T4b | 无变化 | 出现连接 |

**Figure建议**：
- T4/T5神经元的4个亚型及其投射模式
- Side-II和Beat-VI的表达模式
- 连接矩阵：哪些T4/T5亚型连接到哪些LPLC神经元
- 敲除实验的结果对比

---

**论文2**：Carrier et al., "Biased cell adhesion organizes the Drosophila visual motion integration circuit", Developmental Cell 2025

**关键发现**：

1. **Beat/Side不是突触形成的必需因素**
   - 敲除后突触仍能形成
   - 但突触的空间分布和特异性受影响

2. **Beat/Side影响细胞邻近性**
   - 表达互补Beat/Side的细胞倾向于相邻
   - 在突触形成之前就建立空间组织

3. **作用时间窗口**
   - 主要在发育早期（幼虫期）
   - 成虫期作用减弱

**模型**：
```
发育早期：Beat/Side → 细胞邻近性偏好 → 空间预组织
发育晚期：其他SAM → 突触形成 → 精细调整
```

**Figure建议**：
- 发育时间轴上Beat/Side的作用
- 野生型 vs 敲除的细胞空间分布
- 突触形成的时间进程

---

**论文3**：Tan, L. et al. "Ig superfamily ligand and receptor pairs expressed in synaptic partners in Drosophila." Cell, 163(7), 1756–1769 (2015).
Zipursky lab

**贡献**：
- 系统性鉴定果蝇中的Ig超家族配体-受体对
- 发现DIP/Dpr系统
- 建立了SAM配对的概念框架

**Figure建议**：
- Ig超家族分子的结构域组织
- DIP/Dpr配对网络
- 在不同神经元类型中的表达模式

---

### 2.3 Liqun Luo实验室：嗅觉回路的重编程

#### 论文：Zhu et al., "Rewiring an olfactory circuit by altering the combinatorial code of cell-surface proteins"

**发表**：
- bioRxiv 2025: https://www.biorxiv.org/content/10.1101/2025.03.01.640986v1
- Nature 2026: https://www.nature.com/articles/s41586-025-09769-3

**核心问题**：能否通过改变表面分子表达来"重编程"神经连接？

**系统**：
- 果蝇嗅觉受体神经元（ORN）
- 50多种ORN类型投射到触角叶的50个肾小球

**实验设计**：

1. **轴突引导部分**：
   - 不同ORN表达不同的转录因子（如Acj6）
   - 转录因子控制引导分子受体的表达
   - 决定轴突投射到哪个肾小球

2. **突触伙伴选择部分**：
   - 在肾小球内，ORN需要选择正确的投射神经元（PN）
   - 通过表面分子的配对实现

**重编程实验**：
1. 在ORN-A中异位表达ORN-B的表面分子组合
2. 观察轴突投射和突触后伙伴选择

**结果**：
- ✅ 改变了轴突投射目标
- ✅ 部分改变了突触后伙伴选择
- ✅ 证明表面分子"代码"的充分性

**意义**：
- 支持"分子代码"假说
- 为人工设计神经回路提供思路
- 展示了基因表达如何编码连接信息

**Figure建议**：
- 嗅觉系统的组织：触角 → 触角叶 → 高级脑区
- 野生型ORN-A和ORN-B的投射模式
- 重编程后的ORN-A投射模式
- 表面分子表达的变化
- 突触后伙伴选择的变化

---

## 3. 计算模型

### 3.1 双线性模型（Bilinear Model）

#### 基本原理

**假设**：连接概率由突触前和突触后神经元的基因表达通过交互矩阵决定。

**数学形式**：

$$
P(i \rightarrow j) = \sigma\left(\sum_{\alpha}\sum_{\beta} W_{\alpha\beta} \cdot g_i^\alpha \cdot g_j^\beta + b\right)
$$

或简写为：

$$
A_{ij} = \sum_{\alpha}\sum_{\beta} W_{\alpha\beta} \cdot g_i^\alpha \cdot g_j^\beta
$$

其中：
- $g_i^\alpha$：神经元$i$的基因$\alpha$的表达量
- $g_j^\beta$：神经元$j$的基因$\beta$的表达量
- $W_{\alpha\beta}$：基因$\alpha$（突触前）和基因$\beta$（突触后）的交互强度
- $\sigma$：sigmoid函数
- $b$：偏置项

**物理意义**：
- $W_{\alpha\beta} > 0$：基因对促进连接
- $W_{\alpha\beta} < 0$：基因对抑制连接

---

#### 代表性工作1：Barabási实验室

**论文**：Kovács et al., "Uncovering the genetic blueprint of the C. elegans nervous system", PNAS 2020

**系统**：C. elegans神经系统（302个神经元）

**方法**：
1. 输入：每个神经元的基因表达谱
2. 输出：神经元对之间的连接概率
3. 学习：优化$W$矩阵以拟合已知连接

**关键发现**：
- **少数基因对**（~100对）可以解释大部分连接模式
- 某些基因对具有强促进作用（如Neurexin-Neuroligin）
- 某些基因对具有强抑制作用
- 模型可以预测未观察到的连接

**优势**：
- 可解释性强：可以识别关键基因对
- 参数效率高：相比全连接神经网络
- 生物学合理：符合配体-受体配对机制

**Figure建议**：
- C. elegans连接组的可视化
- 学习到的$W$矩阵的热图
- 重要基因对的排序
- 预测准确率 vs 使用的基因对数量

---

#### 代表性工作2：Mu Qiao的扩展

**论文**：Qiao et al., "Deciphering the Genetic Code of Neuronal Type Connectivity: A Bilinear Modeling Approach", eLife 2023

**创新点**：

1. **多层双线性模型**：
$$
P(i \rightarrow j) = \sigma\left(\sum_k w_k \cdot \left(\sum_{\alpha}\sum_{\beta} W_k^{\alpha\beta} \cdot g_i^\alpha \cdot g_j^\beta\right)\right)
$$
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

---

### 3.2 Biclique Motif模型

**论文**：Barabási et al., "A Genetic Model of the Connectome", Neuron 2019

**核心思想**：连接组中存在大量"双团"结构（biclique）

**定义**：
- 一组突触前神经元$A = \{a_1, a_2, ..., a_m\}$
- 一组突触后神经元$B = \{b_1, b_2, ..., b_n\}$
- $A$中所有神经元连接到$B$中所有神经元

**遗传模型**：

如果：
- 神经元组$A$都表达基因集$X = \{x_1, x_2, ..., x_p\}$
- 神经元组$B$都表达基因集$Y = \{y_1, y_2, ..., y_q\}$
- $X$和$Y$互补配对（如配体-受体）

则：
- $A$中所有神经元连接到$B$中所有神经元

**数学表示**：

$$
\text{Biclique}(A, B) \Leftrightarrow \text{Match}(\text{Genes}(A), \text{Genes}(B))
$$

**发现**：
- C. elegans连接组中存在大量biclique结构
- 这些结构可能由共同的基因模块控制
- 提供了连接的模块化组织原理

**Figure建议**：
- Biclique结构的示意图
- C. elegans连接组中检测到的biclique
- 基因表达与biclique的对应关系

---

### 3.3 模型比较

| 模型 | 优势 | 劣势 | 适用场景 |
|------|------|------|---------|
| **双线性模型** | 可解释，参数少 | 线性假设 | 识别关键基因对 |
| **Biclique模型** | 捕捉模块化结构 | 需要预定义模块 | 理解组织原理 |
| **深度学习** | 高准确率 | 黑箱，需大数据 | 复杂模式识别 |

---

## 4. 应用前景

### 4.1 理解发育的随机性与适应性

**论文**：Lachi et al., "Stochastic Wiring of Cell Types Enhances Fitness by Generating Phenotypic Variability", bioRxiv 2024

**作者**：Divyansha Lachi, Ann Huang, Augustine N. Mavor-Parker, Arna Ghosh, Blake Richards, Anthony Zador

**核心问题**：
- 连接概率是遗传决定的
- 但个体间存在变异
- 这种随机性有什么功能意义？

**研究发现**：

1. **随机布线增强适应性**：
   - 在变化的环境中，随机性产生表型多样性
   - 增加种群的适应能力
   - 类似于遗传多样性的作用

2. **最优随机性水平**：
   - 太少随机性：缺乏多样性
   - 太多随机性：失去有用的遗传信息
   - 存在最优平衡点

3. **进化意义**：
   - 随机性可能是进化选择的结果
   - 不是噪声，而是特征

**应用方向**：

#### 神经修复
- 理解个体差异
- 设计鲁棒的治疗策略
- 利用可塑性

#### 人工智能
- 神经网络的随机初始化
- 集成学习
- 鲁棒性设计

#### 合成生物学
- 设计具有适应性的神经回路
- 平衡确定性和随机性
- 优化功能和鲁棒性

---

### 4.2 其他应用方向

#### 疾病机制理解
- **自闭症谱系障碍**：Neurexin/Neuroligin突变
- **精神分裂症**：连接异常
- **神经退行性疾病**：突触丢失

#### 脑机接口
- 理解如何与神经回路整合
- 设计更好的电极-神经元界面
- 促进功能性连接

#### 类脑计算
- 提取连接的计算原理
- 设计高效的神经形态芯片
- 稀疏连接网络

#### 人工设计回路
- 通过改变基因表达重编程连接
- 合成神经系统
- 治疗性回路

---

## 5. 总结与展望

### 核心信息

1. **基因决定连接的多层机制**：
   - 转录因子 → 引导分子受体 → 轴突投射
   - SAM配对 → 突触特异性
   - 活动依赖 → 精细调整

2. **实验证据**：
   - Eph/Ephrin：拓扑映射
   - Beat/Side：层特异性
   - 重编程实验：分子代码的充分性

3. **计算模型**：
   - 双线性模型：可解释的预测
   - Biclique模型：模块化组织
   - 深度学习：高准确率

4. **应用前景**：
   - 理解发育和疾病
   - 神经修复和脑机接口
   - 人工智能和合成生物学

### 未来方向

**短期（1-3年）**：
- 完善分子图谱
- 改进预测模型
- 技术突破

**中期（3-5年）**：
- 时间动态研究
- 跨物种比较
- 理论框架

**长期（5-10年）**：
- 全脑连接组
- 人工设计回路
- 类脑计算

---

## 参考文献

### 背景与综述
1. Südhof TC, "The cell biology of synapse formation", J Cell Biol 2021
2. Sanes & Zipursky, "Synaptic Specificity, Recognition Molecules, and Assembly of Neural Circuits", Cell 2020
3. Luo, "Architectures of neuronal circuits", Science 2021

### Eph/Ephrin系统
4. Brown et al., "Topographic Mapping from the Retina to the Midbrain", Cell 2000
5. Koike et al., "A data-driven framework linking the connectome to spatial gene expression gradients", PNAS 2025
6. "Topographic Axes of Wiring Space Converge to Genetic Topography", J Neurosci 2024

### Beat/Side系统
7. Yoo et al., "Brain wiring determinants uncovered by integrating connectomes and transcriptomics", Current Biology 2023
8. Carrier et al., "Biased cell adhesion organizes the Drosophila visual motion integration circuit", Dev Cell 2025
9. Zipursky, "Ig Superfamily Ligand and Receptor Pairs", Cell 2015

### 嗅觉回路重编程
10. Zhu et al., "Rewiring an olfactory circuit", Nature 2026

### 计算模型
11. Kovács et al., "Uncovering the genetic blueprint of the C. elegans nervous system", PNAS 2020
12. Qiao et al., "Deciphering the Genetic Code of Neuronal Type Connectivity", eLife 2023
13. Barabási et al., "A Genetic Model of the Connectome", Neuron 2019

### 应用
14. Lachi et al., "Stochastic Wiring of Cell Types Enhances Fitness", bioRxiv 2024

---

*Presentation草稿 v1*  
*创建时间：2026年3月17日*
