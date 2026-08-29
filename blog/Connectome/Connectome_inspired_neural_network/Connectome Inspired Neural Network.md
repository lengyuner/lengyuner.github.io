
# Connectome Inspired Neural Network

> **A Comprehensive Guide to Connectome-Based Modeling (2015-2026)**
> From complete EM reconstructions to predictive mechanistic models bridging structure and function
>
> Related notes: [Ripple](../../Ripple/Ripple.md)

---

## 📑 Table of Contents

### 📚 [Paper Collections by Organism](#paper-collections-by-organism)
- [🪰 Drosophila](#drosophila)
- [👤 Human](#human)
- [🐵 Monkey](#monkey)
- [🐭 Rodent](#rodent)
- [🪱 C. Elegans](#c-elegans)
- [🧬 Theory-Based](#theory-based)
- [🔬 Others](#others)

### 🔬 [Detailed Analysis of Connectome-Based Modeling](#detailed-analysis-of-connectome-based-modeling-approaches)

#### 🪰 **Drosophila Models** (Full EM Connectome)
1. [⭐️ Turaga et al., 2024 - Landmark Study](#1-turaga-et-al-2024---connectome-constrained-deep-mechanistic-networks-️-landmark-study)
   *Single-neuron prediction (r=0.7-0.9) from FlyWire connectome*
   
2. [Fiete et al., 2025 - Massive Parameter Reduction](#2-fiete-et-al-2025---head-direction-circuit-with-massive-parameter-reduction)
   *439 neurons → 57 parameters via cell-type constraints*
   
3. [Borst, 2024 - Temporal Filtering](#3-borst-2024---differential-temporal-filtering-in-optic-lobe)
   *Conductance-based optic lobe model*
   
4. [Full Brain LIF Model](#4-full-brain-lif-model-nature-2024)
   *140K neurons whole-brain sensorimotor processing*

#### 🪱 **C. elegans Models** (First Complete Connectome)
1. [⭐️ Zhao et al., 2024 - Most Comprehensive](#1-zhao-et-al-2024---integrative-brain-body-environment-model-️-most-comprehensive)  
   *Brain-body-environment closed loop with full biophysics*
   
2. [Morrison & Young, 2025 - Premotor Circuit](#2-morrison--young-2025---data-driven-premotor-network-model)  
   *Data-driven fit to calcium imaging*
   
3. [Creamer, Leifer & Pillow, 2024 - Theoretical Analysis](#3-creamer-leifer--pillow-2024---bridging-connectome-and-whole-brain-activity)  
   *Quantifies connectome insufficiency*

#### 🐭 **Mouse/Rat Models** (Partial EM + Statistical)
1. [MICrONS Consortium - Structure-Function Dataset](#1-microns-consortium-2025---functional-connectomics-️-game-changing-dataset)  
   *100K neurons with co-registered EM and functional data*
   
2. [Tolias et al., 2025 - Foundation Model](#2-tolias-et-al-2025---foundation-model-of-neural-activity)  
   *Transformer-based neural activity prediction*
   
3. [Rajan et al., 2020 - CURBD Method](#3-rajan-et-al-2020---data-constrained-rnns-curbd)  
   *Inferring effective connectivity from dynamics*
   
4. [⭐️ Blue Brain Project, 2015 - Mammalian Landmark](#4-blue-brain-project---neocortical-microcircuit-reconstruction-️-mammalian-landmark)  
   *First mammalian cortical simulation (31K neurons, statistical)*
   
5. [⭐️ Billeh et al., 2020 - Allen V1 Model](#5-billeh-et-al-2020---allen-institute-v1-biophysical-network-model)  
   *230K neurons with hybrid neuron models*
   
6. [Potjans & Diesmann, 2014 - Canonical Circuit](#6-potjans--diesmann-2014---canonical-cortical-microcircuit-model)  
   *Benchmark cortical microcircuit model*

### 🧬 [Theory & Principles](#-theory--principles-what-have-we-learned)
1. [Beiran & Litwin-Kumar - Theoretical Limits](#1-beiran--litwin-kumar-2024---theoretical-limits-of-connectome-constrained-prediction)  
   *Connectome alone has prediction floor*
   
2. [General Principles Across Species](#2-general-principles-from-cross-species-comparisons)  
   - Principle 1: Connectome Constrains Dynamics (Partially)
   - Principle 2: Cell-Type-Level Parameterization
   - Principle 3: Emergent Computation
   - Principle 4: Recurrent Amplification
   - Principle 5: Inhibitory Diversity
   
3. [The "Connectome Ladder"](#3-the-connectome-ladder-levels-of-abstraction)  
   *4 levels of modeling abstraction*

### 🔑 [Cross-Species Insights](#-cross-species-insights)
- [Common Principles](#common-principles-across-organisms)
- [Why Connectome Alone is Insufficient](#why-connectome-alone-is-insufficient)
- [Optimal Modeling Strategy](#the-optimal-modeling-strategy-synthesis)
- [Future Directions](#future-directions)

### 📊 [Summary Tables](#summary-table-key-papers-at-a-glance)
- [Drosophila Models Comparison](#drosophila-models)
- [C. elegans Models Comparison](#c-elegans-models)
- [Mammalian Cortex Models Comparison](#mammalian-cortex-models)
- [Theory & Principles Overview](#theory--principles)

### 🎯 [Synthesis & Future](#-synthesis-the-current-state-of-connectome-based-modeling)
- [Current State (2026)](#where-we-are-2026)
- [The "Connectome Equation"](#what-weve-learned-the-connectome-equation)
- [Model Taxonomy Decision Tree](#the-connectome-taxonomy-what-type-of-model-do-you-need)
- [Outstanding Challenges](#outstanding-questions--challenges)
- [Emerging Trends (2024-2026)](#emerging-trends-2024-2026)
- [Practical Recommendations](#practical-recommendations-for-researchers)
- [Why This Matters](#the-big-picture-why-this-matters)
- [Future Vision (2026-2035)](#future-vision-2026-2035)

### 📚 [Resources](#-additional-resources)
- [Software & Tools](#software--tools)
- [Databases](#databases)
- [Key Labs & Projects](#key-labs--projects)

---

## Paper Collections by Organism

### Drosophila

- [Neuronal wiring diagram of an adult brain](https://www.nature.com/articles/s41586-024-07558-y) — Dorkenwald et al., 2024, Nature.
  *FlyWire · adult brain · ~140K neurons · ~54.5M synapses*

- [Whole-brain annotation and multi-connectome cell typing of Drosophila](https://www.nature.com/articles/s41586-024-07686-5) — Schlegel et al., 2024, Nature.
  *cell typing · neurotransmitter · afferent/intrinsic/efferent*

- [Connectomic reconstruction of a female Drosophila ventral nerve cord](https://www.nature.com/articles/s41586-024-07389-x) — Azevedo et al., 2024, Nature.
  *FANC · motor-neuron–muscle atlas*

- [Comparative connectomics of Drosophila descending and ascending neurons](https://www.nature.com/articles/s41586-025-08925-z) — Stürner et al., 2025, Nature.
  *brain–VNC bridge · descending/ascending neurons*

- [Distributed control circuits across a brain-and-cord connectome](https://www.nature.com/articles/s41586-026-10735-w) — Bates, Phelps, Lee et al., 2026, Nature.
  *BANC · unified adult brain + VNC · distributed control*

- [Connectome-constrained deep mechanistic networks predict neural responses across the fly visual system at single-neuron resolution](https://doi.org/10.1101/2023.03.11.532232) 
- https://www.nature.com/articles/s41586-024-07939-3 
  Srinivas C. Turaga  
  **!!!**

- Previous work: [A Connectome Based Hexagonal Lattice Convolutional Network Model of the Drosophila Visual System](https://arxiv.org/abs/1806.04793)

- [One-to-one mapping between deep network units and real neurons uncovers a visual population code for social behavior](https://www.biorxiv.org/content/10.1101/2022.07.18.500505v2)  
  Jonathan W. Pillow, Mala Murthy

- [The connectome predicts resting-state functional connectivity across the Drosophila brain](https://www.sciencedirect.com/science/article/pii/S0960982221003432)
Maxwell H. Turner, Kevin Mann, Thomas R. Clandinin， 2021， Current Biology 

Functional correlations are predicted by structural connectivity in the connectome
•
Correlations are well captured by the number of cells connecting two regions
•
Mesoscale networks in the Drosophila brain share topological features with cortex
•
Indirect pathways differentially shape functional correlations across the brain

- [High performance, large-scale multi-compartment Hodgkin–Huxley simulation of Drosophila's whole-brain neural circuit model](https://doi.org/10.1101/2022.11.01.512969) — Higuchi et al., 2022, bioRxiv.
  *mcHH · FlyCircuit · inferred connectivity · Fugaku*

- [A Drosophila computational brain model reveals sensorimotor processing](https://www.nature.com/articles/s41586-024-07763-9)
LIF model  
> sHere we create a leaky integrate-and-fire computational model of the entire Drosophila brain, on the basis of neural connectivity and neurotransmitter identity.  
Limitation: We assume each neuron is either exclusively inhibitory or excitatory. We ignore neural morphology and receptor dynamics. The underlying synapses or neurotransmitter predictions may not be fully accurate. Gap junctions cannot be identified in the electron microscopy dataset, so we ignore their possibility. 

- [Neuromorphic Simulation of Drosophila Melanogaster Brain Connectome on Loihi 2](https://arxiv.org/abs/2508.16792) — Wang et al., 2025, arXiv.
  *whole-brain LIF · Loihi 2 · neuromorphic acceleration*


- eon system
The First Multi-Behavior Brain Upload
https://theinnermostloop.substack.com/p/the-first-multi-behavior-brain-upload



- [Connectome simulations identify a central pattern generator circuit for fly walking](https://www.biorxiv.org/content/10.1101/2025.09.12.675944v1)  
John C. Tuthill, Bingni W. Brunton

- [From Synapses to Dynamics: Obtaining Function from Structure in a Connectome Constrained Model of the Head Direction Circuit](https://www.biorxiv.org/content/10.1101/2025.05.26.655406v1.abstract)
Ila Fiete, 2025
$$
\tau \frac{d x_j^A(t)}{d t}=-\ell x_j^A(t)+\sigma\left(\sum_{B \in \mathcal{C}} \sum_k w_0\left(1+Z^{A B}\right) s g n^B C_{j k} x_k^B(t)+b^A+u_j(t)\right)
$$
reduces the number of optimized parameters from $439^{2} +439+1 = 193, 161$ to just $7^{2} +7+1 = 57$ parameters
Total Loss: Linear Consistency Loss, Stability Loss, Minimum Speed Loss, Entropy Loss, L1 and L2 Regularization


- [Differential temporal filtering in the fly optic lobe](https://www.biorxiv.org/content/10.1101/2024.12.16.628613v1)
Alexander Borst
Taking advantage of the known connectome I simulate a network of five adjacent optical columns each comprising 65 different cell types. Each neuron is modeled as an electrically compact single compartment, conductance-based element that receives input from other neurons within its column and from its neighboring columns according to the intra- and inter-columnar connectivity matrix. 

- [A competitive disinhibitory network for robust optic flow processing in Drosophila](https://www.nature.com/articles/s41593-025-01948-9) — Erginkaya et al., 2025, Nature Neuroscience.
  *HS/H2 → DNp15 · optic flow · steering*

- [Molecular gradients shape synaptic specificity of a visuomotor transformation](https://www.nature.com/articles/s41586-025-09037-4) — 2025, Nature.
  *retinotopy · visual projection neurons · descending neurons*

- [Eye structure shapes neuron function in Drosophila motion vision](https://www.nature.com/articles/s41586-025-09276-5) — Zhao et al., 2025, Nature.
  *compound-eye geometry · T4/T5 tuning · morphological computation*


- [NeuroMechFly v2: simulating embodied sensorimotor control in adult Drosophila](https://www.nature.com/articles/s41592-024-02497-y)
Sibo Wang-Chen, Victor Alfred Stimpfling, Thomas Ka Chung Lam, Pembe Gizem Özdil, Louise Genoud, Femke Hurtak & Pavan Ramdya, 2024, Nature Methods 

- [Whole-body physics simulation of fruit fly locomotion](https://www.nature.com/articles/s41586-025-09029-4)
Roman Vaxenburg, Igor Siwanowicz, Josh Merel, Alice A. Robie, Carmen Morrow, Guido Novati, Zinovia Stefanidi, Gert-Jan Both, Gwyneth M. Card, Michael B. Reiser, Matthew M. Botvinick, Kristin M. Branson, Yuval Tassa & Srinivas C. Turaga, 2025, Nature 

- [Musculoskeletal simulation of limb movement biomechanics in Drosophila melanogaster](https://arxiv.org/abs/2509.06426) — Özdil et al., 2025, arXiv.
  *Hill-type muscle · OpenSim + MuJoCo · muscle-actuated replay*

- [Whole-body 3D kinematics of freely behaving Drosophila](https://www.biorxiv.org/content/10.64898/2026.05.03.722293v1.abstract)
Bingni W. Brunton, John C. Tuthill, Robert Evan Johnson, 2026, biorxiv

- [Whole-Brain Connectomic Graph Model Enables Whole-Body Locomotion Control in Fruit Fly](https://arxiv.org/abs/2602.17997)
Zehao Jin, Yaoye Zhu, Chen Zhang, Yanan Sui


- [Connectome simulations identify a central pattern generator circuit for fly walking](https://www.biorxiv.org/content/10.1101/2025.09.12.675944v2)
John C. Tuthill, Bingni W. Brunton

**motif can generate the rhythm*
*

- [Selective presynaptic inhibition of leg proprioception in behaving Drosophila](https://www.nature.com/articles/s41586-025-09554-2) — Dallmann et al., 2025, Nature.
  *proprioception · efference copy · sensory gating*

- [Proprioceptive limit detectors contribute to sensorimotor control of the Drosophila leg](https://www.nature.com/articles/s41467-026-69333-z) — Pratt et al., 2026, Nature Communications.
  *hair plates · joint limits · premotor–motor reflex*

- [A neural algorithm for a fundamental computing problem](https://www.science.org/doi/10.1126/science.aam9868)
**Fly brain inspires computing algorithm**
2017, Science
Flies use an algorithmic neuronal strategy to sense and categorize odors. Dasgupta et al. applied insights from the fly system to come up with a solution to a computer science problem. On the basis of the algorithm that flies use to tag an odor and categorize similar ones, the authors generated a new solution to the nearest-neighbor search problem that underlies tasks such as searching for similar images on the web.

- [Predicting modular functions and neural coding of behavior from a synaptic wiring diagram](https://www.nature.com/articles/s41593-024-01784-3)
Ashwin Vishwanathan, Alex Sood, Jingpeng Wu, Alexandro D. Ramirez, Runzhe Yang, Nico Kemnitz, Dodam Ih, Nicholas Turner, Kisuk Lee, Ignacio Tartavull, William M. Silversmith, Chris S. Jordan, Celia David, Doug Bland, Amy Sterling, H. Sebastian Seung, Mark S. Goldman, Emre R. F. Aksay & the Eyewirers   
Nature Neuroscience volume 27, pages2443–2454 (2024)

- [Infrequent strong connections constrain connectomic predictions of neuronal function](https://www.cell.com/cell/fulltext/S0092-8674(25)00518-5)
Timothy A. Currier, Thomas R. Clandinin


- Raw imaging data, relevant connectome data, and partially processed visual responses for all 571 ROIs are available on Dryad:
https://datadryad.org/dataset/doi:10.5061/dryad.pg4f4qs1j  
https://datadryad.org/dataset/doi:10.5061/dryad.bnzs7h4ns
https://datadryad.org/dataset/doi:10.5061/dryad.kh18932k1  


### Human

- [Learning Dynamic Graph Representation of Brain Connectome with Spatio-Temporal Attention](https://openreview.net/forum?id=X7GEA3KiJiH)  
  Byung-Hoon Kim, Jong Chul Ye, Jae-Jin Kim  
  NeurIPS 2021 Poster

- [A Prefrontal Cortex-inspired Architecture for **Planning** in Large Language Models](https://arxiv.org/abs/2310.00194)  
  Ida Momennejad

- [BrainGNN: Interpretable Brain Graph Neural Network for fMRI Analysis](https://www.sciencedirect.com/science/article/pii/S1361841521002784)

- [sinergia connectomics summer school](https://sinergia-connectomics-summerschool-2021.github.io/)

- [Connectome-Based Attractor Dynamics Underlie Brain Activity in Rest, Task, and Disease](https://elifesciences.org/reviewed-preprints/98725v1)

- [Enhancer-driven cell type comparison reveals similarities between the mammalian and bird pallium](https://www.science.org/doi/10.1126/science.adp3957)


- [A Large-Scale Model of the Functioning Brain](https://www.science.org/doi/10.1126/science.1225266)
Daniel Rasmussen, 2012, Science


#### Perturbation

- [Mapping effective connectivity by virtually **perturbing** a surrogate brain](https://arxiv.org/abs/2301.00148)  
- [Effective Brain Connectome: the whole-brain effective connectivity from neural **perturbational** inference](https://arxiv.org/abs/2301.00148v1)  
  Quanying Liu

- [Mapping **dysfunctional** circuits in the frontal cortex using deep brain stimulation](https://www.nature.com/articles/s41593-024-01570-1)  
  Andreas Horn

- [Individualized **perturbation** of the human connectome reveals reproducible biomarkers of network dynamics relevant to cognition](https://www.pnas.org/doi/full/10.1073/pnas.1911240117)  
  TMS EEG

### Monkey
- [Compact deep neural network models of visual cortex](https://www.biorxiv.org/content/10.1101/2023.11.22.568315v1)  
Jonathan W. Pillow, Matthew A. Smith

### Rodent

- [Inferring brain-wide interactions using data-constrained recurrent neural network models](https://www.biorxiv.org/content/10.1101/2020.12.18.423348v2)  
  Kanaka Rajan, Mount Sinai  
  RNN  
  - CURBD allows the total activity of each region to be decomposed into a set of source currents from all other regions


#### [MICrONS]()
[Functional connectomics spanning multiple areas of mouse visual cortex](https://www.nature.com/articles/s41586-025-08790-w)  
The MICrONS Consortium

- [Foundation model of neural activity predicts response to new stimulus types](https://www.nature.com/articles/s41586-025-08829-y)
Andreas S. Tolias 
- [Functional connectomics reveals general wiring rule in mouse visual cortex](https://www.nature.com/articles/s41586-025-08840-3)
Andreas S. Tolias 




### C. Elegans

- [Elegans-AI: How the connectome of a living organism could model artificial neural networks](https://www.sciencedirect.com/science/article/pii/S0925231224003692)  
  Francesco Bardozzo, Andrea Terlizzi, Claudio Simoncini, Pietro Lió, Roberto Tagliaferri

- [Deep connectomics networks: Results from neural network architectures inspired from network neuroscience](https://openreview.net/forum?id=HygPD4H22N)  
  Nicholas Roberts, Vinay Uday Prabhu  
  ICML Deep Phenomena 2019

- [Deep Connectomics Networks: Neural Network Architectures Inspired by Neuronal Networks](https://openreview.net/forum?id=BJg6EmYL8B)  
  Nicholas Roberts, Dian Ang Yap, Vinay Uday Prabhu  
  Real Neurons & Hidden Units @ NeurIPS 2019 Poster  
  C. Elegans and the mouse visual cortex

- [Biological connectomes as a representation for the architecture of artificial neural networks](https://arxiv.org/abs/2209.14406)  
  Samuel Schmidgall, Catherine Schuman, Maryam Parsa  
  ICLR 2023 Conference Withdrawn Submission

- [A machine learning toolbox for the analysis of sharp-wave ripples reveals common waveform features across species](https://www.nature.com/articles/s42003-024-05871-w)  
  Analysis toolbox

- [Learning dynamic representations of the functional connectome in neurobiological networks](https://arxiv.org/abs/2402.14102v2)

- [Connectome-constrained Latent Variable Model of Whole-Brain Neural Activity](https://openreview.net/forum?id=CJzi3dRlJE-)  
 Lu Mi, .., Srinivas C Turaga

- [An integrative data-driven model simulating **C. elegans** brain, body and environment interactions](https://www.nature.com/articles/s43588-024-00738-w)
Nature Computational Science, 2024
Neuron models (Neurons were modeled by morphologically derived multicompartmental models with somatic Hodgkin–Huxley dynamics and passive neurites) + Graded synapse and gap junction models: 


- [Modular integration of neural connectomics, dynamics and biomechanics for identification of behavioral sensorimotor pathways in Caenorhabditis elegans](https://www.biorxiv.org/content/10.1101/724328v3)  
Eli Shlizerman


- [A data-driven biophysical network model reproduces C. elegans premotor neural dynamics](https://arxiv.org/abs/2501.00278)
Megan Morrison, Lai-Sang Young


- [Bridging the gap between the connectome and whole-brain activity in C. elegans](https://www.biorxiv.org/content/10.1101/2024.09.22.614271v4)
Matthew S. Creamer, Andrew M. Leifer, Jonathan W. Pillow, 2024



- [Neural sequences underlying directed turning in Caenorhabditis elegans](https://www.nature.com/articles/s41593-026-02257-5)

- [Mechanosensory encoding of surface mechanics optimizes locomotion](https://www.nature.com/articles/s41467-026-75352-7)

#### Dataset

- [Neural signal propagation atlas of Caenorhabditis elegans](https://www.nature.com/articles/s41586-023-06683-4)


### Theory-Based

- [Learning to Learn with Feedback and Local Plasticity](https://openreview.net/forum?id=HklfNQFL8H)  
  Real Neurons & Hidden Units @ NeurIPS 2019 Oral  
  Jack Lindsey, Columbia University

- [The Simplest Neural Model and a Hypothesis for Language](https://www.youtube.com/watch?v=Cn2HYpWg3GE&t=1404s&ab_channel=MITCBMM)  
  Daniel Mitropolsky, Columbia University

<!-- - [Prediction of neural activity in connectome-constrained recurrent networks](https://www.biorxiv.org/content/10.1101/2024.02.22.581667v2)   -->
[Prediction of neural activity in connectome-constrained recurrent networks](https://www.nature.com/articles/s41593-025-02080-4)
  Manuel Beiran, Ashok Litwin-Kumar

  - Is the connectome insufficient to constrain the dynamics?


- [Connectivity Structure and Dynamics of Nonlinear Recurrent Neural Networks](https://arxiv.org/abs/2409.01969)

- [Spatially embedded recurrent neural networks reveal widespread links between structural and functional neuroscience findings](https://www.nature.com/articles/s42256-023-00748-9)

- [Geometric Scaling Law in Real Neuronal Networks](https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.133.138401)  
  Gang Yan




#### Cognitive inspired

- [TopoNets: High performing vision and language models with brain-like topography](https://arxiv.org/abs/2501.16396)
 
**the following are collected by Ruizhe Zhou**
- [Bridging the data gap between children and large language models](https://www.sciencedirect.com/science/article/pii/S1364661323002036)   
   Frank, M. C. (2023)

- [Cognitive science in the era of artificial intelligence: A roadmap for reverse-engineering the infant language-learner](https://doi.org/10.1016/j.cognition.2017.11.008)  
   Dupoux, E. (2018)  

- [Findings of the BabyLM Challenge: Sample-Efficient Pretraining on Developmentally Plausible Corpora](https://aclanthology.org/2023.conll-babylm.1/)  
   Warstadt, A. et al. (2023) 

- [MEWL: Few-shot multimodal word learning](https://arxiv.org/abs/2306.00503)  
   Jiang, G. et al. (2023)

- [Lexicon-Level Contrastive Visual-Grounding Improves Language Modeling](https://arxiv.org/abs/2403.14551)  
   Zhuang, C. et al. (2024)

- [Visual Grounding Helps Learn Word Meanings in Low-Data Regimes](https://arxiv.org/abs/2310.13257)  
   Zhuang, C. et al. (2023)

- [Context Limitations Make Neural Language Models More Human-Like](https://arxiv.org/abs/2205.11463)  
   Kuribayashi, T. et al. (2022)

- [Does Vision Accelerate Hierarchical Generalization in Neural Language Learners?](https://arxiv.org/abs/2302.00667)  
   Kuribayashi, T. (2023)

- [Emergent Word Order Universals from Cognitively-Motivated Language Models](https://arxiv.org/abs/2402.12363) 
   Tatsuki Kuribayashi, Ryo Ueda, Ryo Yoshida, Yohei Oseki, Ted Briscoe, Timothy Baldwin 




### Others

<!-- - [Single cortical neurons as deep artificial neural networks](https://www.sciencedirect.com/science/article/pii/S0896627321005018)
  - Cortical neurons are well approximated by a deep neural network (DNN) with 5–8 layers
  - DNN’s depth arises from the interaction between NMDA receptors and dendritic morphology -->



- [The structural connectome constrains fast brain dynamics](https://elifesciences.org/articles/67400)


- [Towards Biologically Plausible Convolutional Networks](https://arxiv.org/abs/2106.13031)
NeurIPS 2021


Brain-inspired global-local learning incorporated with **neuromorphic** computing
https://www.nature.com/articles/s41467-021-27653-2

#### potential model
- [**Piecewise quadratic neuron model**: A tool for close-to-biology spiking neuronal network simulation on dedicated hardware](https://www.frontiersin.org/journals/neuroscience/articles/10.3389/fnins.2022.1069133/full)

#### Basic Architecture
- [Exploring Randomly Wired Neural Networks for Image Recognition](https://arxiv.org/abs/1904.01569)  
  Saining Xie, Alexander Kirillov, Ross Girshick, Kaiming He

- [Optimal structure and parameter learning of **Ising** models](https://www.science.org/doi/10.1126/sciadv.1700791)

#### Review

- [The digital sphinx: Can a worm brain control a fly body?](https://www.biorxiv.org/content/10.64898/2026.03.20.713233v1)
Bingni W. Brunton, ..., John C. Tuthill

> a connectome of the C. elegans nematode worm and a biomechanical model of the fly body

- [When brain-inspired AI meets AGI](https://www.sciencedirect.com/science/article/pii/S295016282300005X)  
  Meta-Radiology

- [Catalyzing next-generation Artificial Intelligence through NeuroAI](https://www.nature.com/articles/s41467-023-37180-x)

- [Deciphering the Blueprint of the Fruit Fly’s Brain](https://physics.aps.org/articles/v17/136)

- [人类智能如何从大脑中涌现？大脑精细模拟重塑 NeuroAI 范式](https://swarma.org/?p=55123)


#### Researcher (TODO)

- [Andreas Horn](http://www.netstim.org/)
 

## TODO



[A data and task-constrained mechanistic model of the mouse outer retina shows robustness to contrast variations](https://www.biorxiv.org/content/10.1101/2025.10.20.683356v1.abstract)

[A Network of Biologically Inspired Rectified Spectral Units (ReSUs) Learns Hierarchical Features Without Error Backpropagation](https://arxiv.org/abs/2512.23146)

we trained a two-layer ReSU network in a self-supervised regime on translating natural scenes. First-layer units, each driven by a single pixel, developed temporal filters resembling those of Drosophila post-photoreceptor neurons (L1/L2 and L3), including their empirically observed adaptation to signal-to-noise ratio (SNR). Second-layer units, which pooled spatially over the first layer, became direction-selective -- analogous to T4 motion-detecting cells -- with learned synaptic weight patterns approximating those derived from connectomic reconstructions.


[A Spatiotemporal Perspective on Dynamical Computation in Neural Information Processing Systems](https://arxiv.org/abs/2409.13669)

Spatiotemporal flows of neural activity, such as traveling waves  

recurrent traveling-wave-like dynamics are not just useful but necessary for accurate and stable processing of any signal undergoing such motion

for any non-trivial recurrent neural network



- [TRIBE: TRImodal Brain Encoder for whole-brain fMRI response prediction](https://arxiv.org/abs/2507.22229)
- Meta
TRIBE, the first deep neural network trained to predict brain responses to stimuli across multiple modalities, cortical areas and individuals




- [A critical initialization for biological neural networks](https://www.nature.com/articles/s41586-026-10528-1)


[Generating whole-brain neural activity and behavior through unified latent dynamics](https://www.biorxiv.org/content/10.64898/2026.06.05.730482v1)
