# 果蝇连接组详细仿真与树突仿真问题

本文从现有的 [paper reading list](../paper%20reading%20list/paper%20reading%20list.md)、[Connectome Inspired Neural Network](../Connectome/Connectome_inspired_neural_network/Connectome%20Inspired%20Neural%20Network.md) 和 [Ripple](Ripple.md) 中筛选论文。这里把“详细”拆成两个维度：**突触级连接是否真实**与**单神经元生物物理是否详细**。目前没有一篇论文同时完整解决这两个维度以及身体闭环。

## 1. 果蝇连接组的详细模拟方案

### 最直接对应的论文

- [High performance, large-scale multi-compartment Hodgkin–Huxley simulation of Drosophila's whole-brain neural circuit model](https://doi.org/10.1101/2022.11.01.512969) — Higuchi et al., 2022, bioRxiv
  - 最接近“详细生物物理全脑仿真”：多区室 Hodgkin–Huxley 神经元、FlyCircuit 形态、Fugaku 大规模并行与接近实时的仿真。
  - 关键限制：连接主要由神经形态和 Peter's rule 推断，不是现代 FlyWire 的逐突触连接；也没有身体和环境闭环。

- [A Drosophila computational brain model reveals sensorimotor processing](https://www.nature.com/articles/s41586-024-07763-9) — Shiu et al., 2024, *Nature*
  - 最接近“真实连接组全脑仿真”：以全脑连接和神经递质身份构建超过 125,000 个神经元、约 5,000 万突触的 LIF 模型，并用于感觉—运动通路预测。
  - 关键限制：每个神经元是点神经元；忽略神经形态、受体动力学、缝隙连接、神经调质与部分基线状态。

### 全脑活动拟合与新近功能预测

- [Model-agnostic linear-memory online learning in spiking neural networks](https://www.nature.com/articles/s41467-026-68453-w) — Wang et al., 2026, *Nature Communications*
  - 提出 BrainTrace：一种内存随神经元数量线性增长的 SNN 在线学习框架。作者用它训练超过 125,000 个神经元、约 5,000 万连接的 FlyWire 全脑 LIF 模型，使模型拟合静息态全脑钙成像的脑区活动与功能连接。
  - 它解决的是“怎样在可接受显存下训练长时间、全脑尺度的脉冲网络”，而不是增加单神经元的树突和离子通道细节。
  - 关键限制：训练目标是低时间分辨率的脑区平均信号，而非单细胞膜电位或 spike train；模型还使用 GRU 生成外部输入，因此不能把拟合结果完全归因于连接组本身。

- [Connectome-constrained modeling identifies neurons and synapses that sustain spontaneous activity in Drosophila](https://www.biorxiv.org/content/10.64898/2026.08.21.745055v1) — Li et al., 2026, bioRxiv
  - 在 BrainTrace/FlyWire 全脑模型基础上拟合果蝇静息态钙成像，并在留出时间段上比较连接组模型和参数量匹配的 GRU。连接组模型对测试集功能连接的拟合更好，并重现了未直接作为训练目标的对数正态权重、神经雪崩和视觉细胞短时间常数。
  - 逐 neuropil、逐细胞与逐突触消融预测：一个由 14 个 neuropil 构成的核心网络，以及其中稀疏的抑制性 hub neurons 和互惠 E–I 突触，可能是维持全脑自发活动的必要成分。
  - 关键限制：主要结果来自一只果蝇的 neuropil 平均信号和多个随机初始化模型；未直接观测单细胞活动，而且 FlyWire 不含缝隙连接、渐变传递和神经调质。因此这些 hub neurons 是待在体验证的模型假说。

- [Connectome-Based Modelling Reveals Orientation Maps in the Drosophila Optic Lobe](https://arxiv.org/abs/2609.01330) — Liew et al., 2026, arXiv / NeurIPS 2025
  - 在完整果蝇连接图的 LIF 模型中，从 L1–L3 视觉神经元注入有方向的条形刺激，预测 medulla 中存在连续的方向选择图、pinwheel-like structures 和跨层方向柱。
  - 模型产生的方向偏好与由上游树突输入几何得到的结构预测平均相差约 $13.7^\circ$；消融进一步预测 Mi 神经元是方向调谐的重要输入。
  - 关键限制：尚无在体功能验证；简化 LIF 模型忽略非线性放电和递质效应，空间地图还依赖投影、局部平滑和选择标准。该结果应标记为探索性预测，而不是已经证实的果蝇视觉结构。

### 补足功能拟合和身体闭环的论文

- [Connectome-constrained networks predict neural activity across the fly visual system](https://www.nature.com/articles/s41586-024-07939-3) — Lappalainen et al., 2024, *Nature*
  - 用连接组约束的深度机制网络和视觉任务监督拟合单神经元活动。它不是全脑模型，但展示了如何把结构、动力学参数和功能数据结合起来。

- [NeuroMechFly v2: simulating embodied sensorimotor control in adult Drosophila](https://www.nature.com/articles/s41592-024-02497-y) — Wang-Chen et al., 2024, *Nature Methods*
  - 提供果蝇身体、感觉和运动控制的物理仿真平台，可作为脑模型的身体—环境接口；它本身不是全脑神经连接组模型。

- [Differentiable simulation enables large-scale training of detailed biophysical models of neural dynamics](https://www.biorxiv.org/content/10.1101/2024.08.21.608979v2) — Deistler et al., 2024, bioRxiv
  - Jaxley 提供可微分的多区室生物物理仿真和大规模参数训练工具，适合承担详细树突模型的计算与拟合层。

### 可执行的组合方案

一个较稳妥的路线不是直接把某篇论文照搬成“完整数字果蝇”，而是组合它们的长处：

1. 以 FlyWire/BANC 的逐突触连接、细胞类型和递质标注作为网络骨架。
2. 先复现 Shiu et al. 的全脑 LIF 模型，作为可运行的结构基线。
3. 只对研究问题涉及的关键细胞类型，用 Higuchi et al. 的多区室 HH 思路替换点神经元；其余神经元保持简化模型。
4. 先用 BrainTrace 或 Li et al. 的方法拟合全脑静息态活动，再用 Lappalainen et al. 的任务监督拟合特定感觉回路；用 Jaxley 做多区室参数优化或灵敏度分析。
5. 若问题涉及行为，再接入 NeuroMechFly v2；将脑内活动拟合与身体闭环验证分开报告。

这一路线的核心控制是同时保留三个版本：全点神经元基线、局部多区室混合模型、参数量匹配的随机或弱结构对照。否则无法判断性能提升来自树突机制、额外参数，还是训练数据。

## 2. 仿真树突会遇到的问题

### A. 空间位置和形态不能随意压缩

- [Distinguishing theoretical synaptic potentials computed for different soma-dendritic distributions of synaptic input](https://journals.physiology.org/doi/abs/10.1152/jn.1967.30.5.1138) — Rall, 1967
  - 同样的突触输入放在不同树突位置，会在胞体形成不同电位；点神经元会丢失电缆衰减、传播延迟和输入位置效应。

- [Dendritic Morphology Affects the Velocity and Amplitude of Back-propagating Action Potentials](https://link.springer.com/article/10.1007/s12264-022-00931-9) — Tian et al., 2022, *Neuroscience Bulletin*
  - 分支几何会改变反向传播动作电位的速度和幅度，尤其在分支点可出现明显减速。因此形态简化必须验证保留了哪些传播性质。

- [A comparison of manual neuronal reconstruction from biocytin histology or 2-photon imaging: morphometry and computer modeling](https://www.frontiersin.org/journals/neuroanatomy/articles/10.3389/fnana.2014.00065/full) — Blackman et al., 2014, *Frontiers in Neuroanatomy*
  - 对同一批神经元分别进行 biocytin histology 和双光子荧光重建，再建立 NEURON 模型。两种形态整体看起来相似，但双光子荧光重建系统性高估突起直径，并使相同突触刺激产生显著更小的 EPSP。
  - 反向传播动作电位在两种重建之间没有显著差异，说明形态误差是否重要取决于被检验的输出指标；“能够复现一种波形”不能证明整个形态模型准确。

### B. 树突具有局部、非线性且状态依赖的计算

- [Global and Multiplexed Dendritic Computations under In Vivo-like Conditions](https://www.cell.com/neuron/fulltext/S0896-6273(18)30737-2) — Ujfalussy et al., 2018, *Neuron*
  - 在体样突触背景下，树突既可能表现局部非线性，也可能出现全局耦合；只用离体刺激或单一输入模式校准，未必能推广到在体工作点。

- [Voltage compartmentalization in dendritic spines in vivo](https://www.science.org/doi/10.1126/science.abg0501) — Cornejo et al., 2021, *Science*
  - 树突棘可以形成局部电压区室。忽略 spine neck、电压依赖通道和局部输入，会错误估计突触整合与可塑性。

- [Dendritic computations captured by an effective point neuron model](https://www.pnas.org/doi/full/10.1073/pnas.1904463116) — Li et al., 2019, *PNAS*
  - 给出了把空间树突非线性压缩到有效点神经元的方案，同时也明确说明普通点神经元缺少跨树突突触电流的非线性交互项。

### C. 形态离散与细胞内钙机制会引入数值误差

- [Dendritic diameters affect the spatial variability of intracellular calcium dynamics in computer models](https://www.frontiersin.org/journals/cellular-neuroscience/articles/10.3389/fncel.2014.00168/full) — Anwar et al., 2014, *Frontiers in Cellular Neuroscience*
  - 树突直径通过表面积/体积比影响局部钙浓度；若钙池体积、径向扩散层数或树突区室直径处理错误，不同粗细的树突可能产生错误甚至相同的钙瞬变。
  - 把一个无分支段压成单个大区室会造成不真实的钙浓度跳变；更细的区室和随直径变化的径向 shell 数量更准确，但会明显增加运行时间。
  - 这说明数值实现误差可能被误认为树突的生物学非线性。模型应同时报告原始形态分辨率、区室划分、时间步长以及钙体积/扩散方案。

### D. 参数多、可辨识性弱

- [Systematic generation of biophysically detailed models for diverse cortical neuron types](https://www.nature.com/articles/s41467-017-02718-3) — Gouwens et al., 2018, *Nature Communications*
  - 多区室电导模型需要同时拟合形态、被动参数、离子通道密度和动力学；只匹配少量胞体波形，可能无法约束树突中的通道分布。

- [Multiple models to capture the variability in biological neurons and networks](https://www.nature.com/articles/nrn2958) — Marder & Taylor, 2011, *Nature Reviews Neuroscience*
  - 不同参数组合可以产生相似的胞体输出，即参数退化。模型拟合成功不等于找到了唯一或真实的通道参数。

### E. 计算成本、模型降阶与数值稳定性

- [Illuminating dendritic function with computational models](https://www.nature.com/articles/s41583-020-0301-7) — Poirazi & Papoutsi, 2020, *Nature Reviews Neuroscience*
  - 适合作为树突建模问题的总览：区室划分、主动电导、突触位置、跨尺度验证与模型复杂度之间必须做取舍。

- [An efficient analytical reduction of detailed nonlinear neuron models](https://www.nature.com/articles/s41467-019-13932-6) — Amsalem et al., 2020, *Nature Communications*
  - Neuron_Reduce 根据突触到胞体的 transfer impedance 压缩复杂形态，并将突触和主动膜通道映射到降阶模型。在包含 10,000–100,000 个突触的多种细胞模型中，报告约 40–250 倍加速，同时较好保留胞体电压和部分树突计算。
  - 降阶模型保留的是预先选定的电学输入—输出性质，而不是原始三维形态本身。局部 spine 电压、精细钙扩散或未纳入验证的树突机制仍可能丢失。

- [A GPU-based computational framework that bridges neuron simulation and artificial intelligence](https://www.nature.com/articles/s41467-023-41553-7) — Zhang et al., 2023, *Nature Communications*
  - 提出 DeepDendrite 和 Dendritic Hierarchical Scheduling，把 Hines 方程求解转化为依赖树上的调度问题，在 GPU 上并行处理树突区室，并保持与串行求解相同的数值结果。
  - 相比传统 CPU Hines 方法报告约 2–3 个数量级加速。它解决计算瓶颈，但不能修复形态重建误差、模型形式错误或参数不可辨识。

- [The Neural Analysis Toolkit Unifies Semi-Analytical Techniques to Simplify, Understand, and Simulate Dendrites](https://link.springer.com/article/10.1007/s12021-025-09766-x) — Wybo, 2026, *Neuroinformatics*
  - NEAT 用输入/传递阻抗、响应核和 resistance matrix 分析树突的功能区室，并据此构建降阶模型，而不是只按照几何外观合并树枝。
  - 工具支持 Hodgkin–Huxley 型通道和离子浓度动力学，可把完整或降阶模型导出到 NEURON/NEST，为“详细单细胞—大规模网络”之间提供可检查的中间层。

- [Differentiable simulation enables large-scale training of detailed biophysical models of neural dynamics](https://www.biorxiv.org/content/10.1101/2024.08.21.608979v2) — Deistler et al., 2024, bioRxiv
  - 可微分模拟缓解参数拟合和批量计算问题，但不会自动解决数据不足、模型错误或参数不可辨识。

## 建议阅读顺序

1. **果蝇全脑方案**：Higuchi 2022 → Shiu 2024 → BrainTrace 2026 → Li 2026。
2. **树突问题总览**：Poirazi & Papoutsi 2020。
3. **形态与数值误差**：Rall 1967 → Blackman 2014 → Anwar 2014 → Tian 2022。
4. **空间与非线性证据**：Ujfalussy 2018 → Cornejo 2021 → Li 2019。
5. **拟合与参数退化**：Gouwens 2018 → Marder & Taylor 2011 → Deistler 2024。
6. **规模化方案**：Amsalem 2020 → DeepDendrite 2023 → NEAT 2026。

## 结论边界

- Higuchi et al. 证明了多区室果蝇全脑模型在工程上可以扩展，但其推断连接不能替代突触分辨率连接组。
- Shiu et al. 证明了全脑逐突触结构可以驱动可检验的通路预测，但点神经元结果不能直接解释为树突层面的生物物理机制。
- BrainTrace 和 Li et al. 表明连接组全脑网络可以用功能数据训练并接受虚拟消融，但脑区级拟合和留出预测仍不能替代单细胞记录与在体扰动验证。
- Liew et al. 的方向图是一个适合实验检验的新预测；其空间平滑结果和 LIF 假设不应被直接解释为已发现的真实方向柱。
- 树突模型应优先服务于一个可检验问题，而不是默认给所有神经元增加全部形态和通道细节；否则计算量、参数退化和验证数据不足会同时恶化。
