## 目录
- [总结与对比](#总结与对比)
- [方法详解（按论文）](#方法详解按论文)
- [参考文献](#参考文献)

## 总结与对比
### 背景与范围
以连接（connectivity）为核心的类型化逐步从“形态种子/启发式”过渡到“连接驱动的自洽划分”，常见做法是用形态/分层做初始分组，再用连接特征完成细分并验证，目标是在末阶段仅凭连接即可维持类型自洽。

### 数据与特征
- 连接直方图：按脑区/层位统计输入与输出分布；入/出度与加权强度。
- 空间与形态先验：分层（stratification）、覆盖/重叠（overlap）、NBLAST/BlastNeuron 辅助种子与质控。
- 伙伴类型与二阶结构：类型配对概率、motif/子图特征、路径统计。

### 方法类别
- 相似度检索与聚类：CBLAST（连接分布相似度）、配合 NBLAST 进行形态参照。
- 统计生成模型：SBM/DC-SBM/MMSBM 估计“类型×类型”连接概率矩阵，具可解释性与不确定性。
- 图嵌入/深度学习：node2vec/LINE、GNN 与半监督标签传播，自监督对比学习以扩展规模与迁移。

### 对比表
| 工作/路线 | 数据与规模 | 主要特征 | 方法/模型 | 监督性 | 关键结论/用途 | 参考 |
|---|---|---|---|---|---|---|
| Jonas & Kording 2015 | 合成/理论与原型连接图 | 类型间概率结构 | 统计块模型（SBM/DC-SBM 等） | 无监督 | 连接可自动揭示类型与微电路结构 | [JK15] |
| Scheffer 2020（hemibrain） | 果蝇成人半脑EM | IO分布直方图、区域/层位约束 | CBLAST相似度＋聚类＋人工复核 | 半监督（形态种子） | 连接特征可达自洽；区分分层近而连接异的类型 | [Sch20] |
| Visual system 2024/2025 | 果蝇视叶EM（38500→227） | 仅连接特征（末阶段） | 特征工程＋聚类/判别 | 分阶段（形态种子→连接） | 最终仅用连接即可维持类型自洽 | [Vis24/25] |
| Peng 2025（小鼠） | 小鼠单元级连接 | 伙伴/区域/层位分布 | 连接特征＋机器学习 | 多为无/半监督 | 连接能区分细分亚型，具跨区域可用性 | [Peng25] |
| NBLAST/BlastNeuron | 形态数据 | 形态相似度 | 相似度检索＋聚类 | 无监督 | 形态可作为种子与质控，连接细分 | [Wan15] |
| 嵌入/GNN 路线 | 大规模节点-突触图 | 图嵌入/对比学习 | node2vec/LINE/GCN/GraphSAGE | 无/半监督 | 学到低维结构表征，便于下游聚类/分类 | [Grover16; Tang15; Kipf17; Hamilton17] |

### 局限与趋势
- 数据噪声与漏检、跨样本差异、长尾类型与不均衡。
- 正从“形态种子”迈向“全流程连接驱动”，以多模态做最终验证；生成式贝叶斯与GNN自监督用于规模化与迁移。

## 方法详解（按论文）
（说明：表中“嵌入/GNN 路线”对应的参考为通用图嵌入与图学习技术文献：node2vec [Grover16]、LINE [Tang15]、GCN [Kipf17]、GraphSAGE [Hamilton17]；在连接组落地时，常作为学习连接图表示与进行半监督标签传播的实现选择。）

### 最新进展（2023–2025，方法导向）
- 自监督/对比图学习用于连接组嵌入：以突触加权、有向邻接为基础，构造随机游走或扩散式对比视图，学习节点级表示；在无标签或少量标签条件下，对类型进行聚类或标签传播。典型技术路径包括 node2vec/LINE（无监督嵌入）与基于对比损失的GNN表征学习（如InfoNCE风格）。在连接组实践中，常叠加区域/层位one-hot或度量特征作为节点属性，提升可分性与跨数据集迁移。
- 半监督GNN类型传播：当少量类型/子类已知（由形态或专家标注提供“种子”）时，可采用 GCN/GraphSAGE 在突触图上进行标签传播与端到端判别，支持加入边权/方向性与正则（如保持类型×类型块结构的约束项）。
- 生成式与块模型迭代：将 DC-SBM/MMSBM 的块结构先验与GNN表征结合，以生成式-判别式混合训练，既保留可解释的“类型×类型”概率矩阵，又获得鲁棒的低维嵌入以服务下游聚类/可视分析。
- 评估与落地：建议采用（1）聚类一致性与稳定性评估；（2）连边预测/复建AUC/PR；（3）跨模态对照（形态/电生理/转录组）验证边界；（4）跨样本/批次的迁移泛化测试。

### [Automatic discovery of cell types and microcircuitry from neural connectomics](https://elifesciences.org/articles/04250)
Eric Jonas, Konrad Kording, 2015, eLife
 - 模型：统计块模型（SBM/DC-SBM 等）刻画“类型×类型”连接概率矩阵
 - 目标：无监督地同时发现细胞类型与微电路结构
 - 特点：生成式、可解释，并能量化不确定性


### [A connectome and analysis of the adult Drosophila central brain](https://elifesciences.org/articles/57443)


Louis K Scheffer, Janelia, 2020, eLife
 - 流程：形态/重叠/NBLAST 作为初始种子 → CBLAST 基于IO分布相似度聚类与审阅
 - 作用：在分层近似但连接不同的类型上具关键分辨力
 - 结果：类型在连接特征上可达自洽，支持连接驱动类型化
> Initial cell type groups are putatively defined using an initial set of features based on morphological overlap as in NBLAST and/or based on the distribution of inputs and outputs in defined brain regions. These initial groups are fed into CBLAST in which the user can visualize and analyze the results using plots such as that in Figure 14. Given the straightforward similarity measure, the user can look at the input and output connections for each neuron to better understand the decision made by the clustering algorithm. 


### [Neuronal parts list and wiring diagram for a visual system](https://www.nature.com/articles/s41586-024-07981-1)
- 
We effectively collapse 38,500 intrinsic neurons onto just 227 types
 - 分阶段：早期以形态/分层划分，末阶段仅用连接特征证明类型边界自洽
 - 特征：区域/层位的输入输出分布与连接规则
 - 结论：连接足以在末阶段维持类型自洽，具推广潜力

> We divide optic lobe intrinsic neurons into four broad classes: columnar, local interneuron, cross-neuropil tangential and cross-neuropil amacrine (Fig. 1a–c). Cells of the columnar class (Fig. 1a) have axons oriented parallel to the main axis of the visual columns (‘axon’ is defined in the  Methods). Following a previous study6, the arbour of a columnar neuron is allowed to be wider than a single column; what matters is the orientation of the axon, not the aspect ratio of the arbour. Photoreceptor cells are columnar but are not intrinsic to the optic lobe, strictly speaking, because they enter from the retina. Nevertheless, they will sometimes be included with intrinsic types in the following analyses.

> Interneurons constitute just 17% of optic lobe intrinsic neurons, but the majority of cell types

> Distinguishing cell types using connectivity
Features based on connectivity (Fig. 2a) enabled us to discriminate between cell types that stratify in very similar neuropil layers. Stratification constrains connectivity, because neurons cannot connect with each other unless they overlap in the same layers1. However, stratification does not completely determine connectivity, because neurons in the same layer may or may not connect with each other. Classical neuroanatomy, whether based on Golgi or genetic staining, relied on stratification because it could be seen with a light microscope. Now that we have electron microscopy data, we can rely on connectivity for cell typing, rather than settle for stratification as a proxy2.

> That being said, the present study used only connectivity at the final stage of cell typing, which was seeded by the morphological types identified during the first and second stages (Methods). It was possible to demonstrate self consistency of the final cell types using connectivity-based features only. We expect that it should be possible to eliminate all dependence on morphological typing, and base the approach on connectivity from start to finish. This challenge is left for future work.


> Eventually morphology became insufficient for further progress. Expert annotators, for example, struggled to classify Tm5 cells into the three known types, not knowing that there would turn out to be six Tm5 types. At this point, we were forced to transition to connectomic cell typing. In retrospect, this transition could have been made much earlier. As mentioned above, connectomic cell typing must be seeded with an initial set of types, but the seeding did not have to be as thorough as it ended up. **We leave for future work the challenge of extending the connectomic approach so it can be used from start to finish.**

### [Connectivity of single neurons classifies cell subtypes in mouse brains](https://www.nature.com/articles/s41592-025-02621-6)

Hanchuan Peng 
 - 特征：单神经元的伙伴/区域/层位分布等连接特征
 - 方法：统计/机器学习聚类与判别，验证跨区域/跨样本可用性
 - 作用：区分分层相近的细分亚型（mouse）


 CBLAST
 heminbrain
Scheffer, L. K. et al. A connectome and analysis of the adult Drosophila central brain. eLife 9, e57443 (2020).

Wan, Y. et al. BlastNeuron for automated comparison, retrieval and clustering of 3D neuron morphologies. Neuroinformatics 13, 487–499 (2015).

Gouwens, N. W. et al. Integrated morphoelectric and transcriptomic classification of cortical GABAergic cells. Cell 183, 935–953 (2020).

Zhang, M. et al. Molecularly defined and spatially resolved cell atlas of the whole mouse brain. Nature 624, 343–354 (2023).

Kalmbach, B. E. et al. Signature morpho-electric, transcriptomic, and dendritic properties of human layer 5 neocortical pyramidal neurons. Neuron 109, 2914–2927 (2021).


### [Neuronal cell-type classification: challenges, opportunities and the path forward](https://www.nature.com/articles/nrn.2017.85)
Hongkui Zeng, Joshua R. Sanes, 2017, Nat. Rev. Neurosci
review


### [Morphological diversity of single neurons in molecularly defined cell types](https://www.nature.com/articles/s41586-021-03941-1)

morphology based classification
 - 以形态为主的多样性刻画与类型比较，可与连接特征对照验证

Hanchuan Peng, Hongkui Zeng, nature 2021

## 参考文献
- [JK15] Jonas, E., and Kording, K. P. (2015). Automatic discovery of cell types and microcircuitry from neural connectomics. eLife 4:e04250. `https://elifesciences.org/articles/04250`
- [Sch20] Scheffer, L. K., et al. (2020). A connectome and analysis of the adult Drosophila central brain. eLife 9:e57443. `https://elifesciences.org/articles/57443`
- [Vis24/25] Neuronal parts list and wiring diagram for a visual system. Nature (2024/2025). `https://www.nature.com/articles/s41586-024-07981-1`
- [Peng25] Connectivity of single neurons classifies cell subtypes in mouse brains. Nature Methods (2025). `https://www.nature.com/articles/s41592-025-02621-6`
- [Wan15] Wan, Y., et al. (2015). BlastNeuron for automated comparison, retrieval and clustering of 3D neuron morphologies. Neuroinformatics 13, 487–499.
- [Gouwens20] Gouwens, N. W., et al. (2020). Integrated morpho-electric and transcriptomic classification of cortical GABAergic cells. Cell 183, 935–953.
- [Zhang23] Zhang, M., et al. (2023). Molecularly defined and spatially resolved cell atlas of the whole mouse brain. Nature 624, 343–354.
- [Kalmbach21] Kalmbach, B. E., et al. (2021). Signature morpho-electric, transcriptomic, and dendritic properties of human layer 5 neocortical pyramidal neurons. Neuron 109, 2914–2927.
- [ZengSanes17] Zeng, H., and Sanes, J. R. (2017). Neuronal cell-type classification: challenges, opportunities and the path forward. Nature Reviews Neuroscience 18, 530–546.
- [PengZeng21] Morphological diversity of single neurons in molecularly defined cell types. Nature (2021). `https://www.nature.com/articles/s41586-021-03941-1`
- [Grover16] Grover, A., and Leskovec, J. (2016). node2vec: Scalable Feature Learning for Networks. KDD. `https://dl.acm.org/doi/10.1145/2939672.2939754`
- [Tang15] Tang, J., et al. (2015). LINE: Large-scale Information Network Embedding. WWW. `https://dl.acm.org/doi/10.1145/2736277.2741093`
- [Kipf17] Kipf, T. N., and Welling, M. (2017). Semi-Supervised Classification with Graph Convolutional Networks. ICLR. `https://arxiv.org/abs/1609.02907`
- [Hamilton17] Hamilton, W., Ying, Z., and Leskovec, J. (2017). Inductive Representation Learning on Large Graphs (GraphSAGE). NeurIPS. `https://papers.nips.cc/paper_files/paper/2017/hash/5dd9db5e033da9c6fb5ba83c7a7ebea9-Abstract.html`


 
### TO BE ADDED


