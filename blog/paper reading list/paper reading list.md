# paper reading list

## Table of Contents
- [paper reading list](#paper-reading-list)
  - [Table of Contents](#table-of-contents)
  - [Connectome](#connectome)
    - [connectome dataset](#connectome-dataset)
    - [technology of connectome](#technology-of-connectome)
      - [connection reconsturction](#connection-reconsturction)
    - [connectome analysis](#connectome-analysis)
    - [gap junction](#gap-junction)
    - [connectome and gene](#connectome-and-gene)
      - [RL and logical rule](#rl-and-logical-rule)
      - [gene data of Drosophila](#gene-data-of-drosophila)
      - [other methods to reconstruct connectome](#other-methods-to-reconstruct-connectome)
      - [human connectome](#human-connectome)
      - [experiment support](#experiment-support)
      - [GeneWeave application](#geneweave-application)
    - [cell-cell communication and interaction](#cell-cell-communication-and-interaction)
    - [protein interaction](#protein-interaction)
      - [experiment support](#experiment-support-1)
      - [deep learning methods](#deep-learning-methods)
      - [result verification](#result-verification)
    - [data mapping between transcriptome and connectome](#data-mapping-between-transcriptome-and-connectome)
      - [neural type](#neural-type)
      - [neural activity and connectivity](#neural-activity-and-connectivity)
    - [Morphology](#morphology)
      - [morphology data](#morphology-data)
      - [maximum weighted independent set (MWIS)](#maximum-weighted-independent-set-mwis)
      - [Maximum Dispersion](#maximum-dispersion)
    - [connectome visualization](#connectome-visualization)
    - [gene data](#gene-data)
      - [gene data for Drosophila](#gene-data-for-drosophila)
      - [other gene dataset](#other-gene-dataset)
      - [review](#review)
      - [analysis](#analysis)
      - [logical gene for connectome](#logical-gene-for-connectome)
      - [gene regulatory network](#gene-regulatory-network)
      - [review paper](#review-paper)
      - [sota models](#sota-models)
      - [application](#application)
    - [gene normalization](#gene-normalization)
    - [functional and structure conenctome](#functional-and-structure-conenctome)
    - [other connectome model:](#other-connectome-model)
  - [Reinforcement learning (RL)](#reinforcement-learning-rl)
  - [graph](#graph)
    - [Link prediction](#link-prediction)
      - [review](#review-1)
    - [Graph Embedding](#graph-embedding)
    - [review](#review-2)
    - [](#)
    - [disease gene](#disease-gene)
    - [graph and connectome](#graph-and-connectome)
    - [other](#other)
    - [olfactory system](#olfactory-system)
    - [mean field](#mean-field)
  - [NeuroAI](#neuroai)
    - [Connectome \& ANN](#connectome--ann)
    - [geometry](#geometry)
    - [Brain simulation / activity prediction](#brain-simulation--activity-prediction)
      - [model](#model)
    - [Network analysis](#network-analysis)
    - [synapse plasticity](#synapse-plasticity)
      - [STDP](#stdp)
      - [BTSP](#btsp)
  - [neural data recording](#neural-data-recording)
    - [whole brain imaging](#whole-brain-imaging)
      - [drosophila data](#drosophila-data)
      - [other data](#other-data)
    - [cell tracking](#cell-tracking)
    - [wormid](#wormid)
  - [neural data analysis \& modeling](#neural-data-analysis--modeling)
    - [reivew](#reivew)
    - [high dimensional data](#high-dimensional-data)
    - [dimensional reduction](#dimensional-reduction)
    - [manifold reconstriction](#manifold-reconstriction)
    - [activity analysis](#activity-analysis)
    - [head direction](#head-direction)
  - [encoding and decoding](#encoding-and-decoding)
    - [deep learning method](#deep-learning-method)
      - [fundation model](#fundation-model)
      - [diffusion model/ visual Stimulus](#diffusion-model-visual-stimulus)
  - [behavior](#behavior)
    - [oscilation](#oscilation)
    - [place cell and grid cell](#place-cell-and-grid-cell)
  - [vision](#vision)
    - [drosophila](#drosophila)
  - [others](#others)
    - [diffusion model](#diffusion-model)
    - [ML](#ml)
    - [hippocamus](#hippocamus)
    - [gene](#gene)
    - [cognition](#cognition)
      - [attention](#attention)
      - [learning and memory](#learning-and-memory)
      - [decision making](#decision-making)
    - [DS \& OR](#ds--or)
      - [Quadratic assignment problem](#quadratic-assignment-problem)
      - [similarity matrix](#similarity-matrix)
    - [ML](#ml-1)
      - [NAS](#nas)
      - [CNN kernel](#cnn-kernel)
    - [sparse decoding](#sparse-decoding)
    - [others](#others-1)
    - [wiki](#wiki)
- [TODO](#todo)

---

wiki of drosophila:
https://www.sdbonline.org/sites/fly/aimorph/brain3.htm
The Interactive Fly

Genes involved in tissue and organ development

## Connectome

- [FlyWire for College Classrooms](https://codex.flywire.ai/academy_home#college)


- [Not everything, not everywhere, not all at once: a study of brain-wide encoding of movement](https://www.biorxiv.org/content/10.1101/2023.06.08.544257v1)





- [Accelerating with FlyBrainLab the discovery of the functional logic of the Drosophila brain in the connectomic and synaptomic era](https://elifesciences.org/articles/62362)


- [Deciphering the Genetic Code of Neuronal Type Connectivity: A Bilinear Modeling Approach](https://elifesciences.org/reviewed-preprints/91532#tab-content)
bilinear + Mu Qiao


- [How deep is the brain? The shallow brain hypothesis](https://www.nature.com/articles/s41583-023-00756-z)



- [Generating brain-wide connectome using synthetic axonal morphologies](https://www.biorxiv.org/content/10.1101/2024.10.04.616605v2)
Blue Brain Project

- [The cell-type underpinnings of the human functional cortical connectome](https://www.nature.com/articles/s41593-024-01812-2)

- [Evolution of connectivity architecture in the Drosophila mushroom body](https://www.biorxiv.org/content/10.1101/2023.02.10.528036v3)

- [The connectome of the adult Drosophila mushroom body provides insights into function](https://elifesciences.org/articles/62576)


- [Fly connectome over the wire](https://www.nature.com/articles/s41583-024-00879-x)
**Review, October 2024**


### connectome dataset
- [Neuronal wiring diagram of an adult brain](https://www.nature.com/articles/s41586-024-07558-y)
**flywire, female**
- [Whole-brain annotation and multi-connectome cell typing of Drosophila](https://www.nature.com/articles/s41586-024-07686-5)  Nature 2024
FlyWire
- [Neuronal parts list and wiring diagram for a visual system](https://www.nature.com/articles/s41586-024-07981-1) FlyWire

- [The connectome of an insect brain](https://www.science.org/doi/10.1126/science.add9330)
**larval brain**


- [Synaptic architecture of leg and wing premotor control networks in Drosophila](https://www.nature.com/articles/s41586-024-07600-z)  John C. Tuthill
**motor**

- [Mapping of neuronal and glial primary cilia contactome and connectome in the human cerebral cortex](https://www.cell.com/neuron/fulltext/S0896-6273(23)00719-5)
human

- [Connectomic reconstruction from hippocampal CA3 reveals spatially graded mossy fiber inputs and selective feedforward inhibition to pyramidal cells](https://www.biorxiv.org/content/10.1101/2025.07.09.663979v1)
H. Sebastian Seung, David W. Tank


 
- [Connectome-driven neural inventory of a complete visual system](https://www.nature.com/articles/s41586-025-08746-0)
- [bioRxiv 2024](https://www.biorxiv.org/content/10.1101/2024.04.16.589741v2)
Janelia, 2025, Nature, 
a new connectome of the **right optic lobe** from a male Drosophila central nervous system FIB-SEM volume and a comprehensive inventory of the fly’s visual neurons

- [Eye structure shapes neuron function in Drosophila motion vision](https://www.nature.com/articles/s41586-025-09276-5)
Janelia, 2025, Nature,  
Davi D. Bock & Michael B. Reiser 

- [Waves of differentiation in the fly visual system](https://www.sciencedirect.com/science/article/pii/S0012160613001875)
Developmental Biology

**MICrONS Project**  
- [Collection: The MICrONS Project](https://www.nature.com/collections/bdigiaicbd)  
- [Functional connectomics spanning multiple areas of mouse visual cortex](https://www.nature.com/articles/s41586-025-08790-w)  
- [Functional connectomics reveals general wiring rule in mouse visual cortex](https://www.nature.com/articles/s41586-025-08840-3)  
- [Inhibitory specificity from a connectomic census of mouse visual cortex](https://www.nature.com/articles/s41586-024-07780-8)

- [A Complete Electron Microscopy Volume of the Brain of Adult Drosophila melanogaster](<https://www.cell.com/cell/pdf/S0092-8674(18)30787-6.pdf>)

### technology of connectome
- [Bridging the Gap: Point Clouds for Merging Neurons in Connectomics](https://openreview.net/forum?id=lHDVYDy5S9l)  
MIDL 2022

- [Automatic detection of synaptic partners in a whole-brain Drosophila electron microscopy data set](https://www.nature.com/articles/s41592-021-01183-7)

- [3D reconstruction of cell nuclei in a full Drosophila brain](https://www.biorxiv.org/content/10.1101/2021.11.04.467197v1.abstract)

- [Neurotransmitter classification from electron microscopy images at synaptic sites in Drosophila melanogaster](https://www.cell.com/cell/fulltext/S0092-8674(24)00307-6) 2024
Machine learning identifies synaptic transmitters from electron micrographs


#### connection reconsturction
- [Reconstruction of Sparse Circuits Using Multi-neuronal Excitation (RESCUME)](https://arxiv.org/abs/1210.1544)

- [Light-microscopy-based connectomic reconstruction of mammalian brain tissue](https://www.nature.com/articles/s41586-025-08985-1)
 


### connectome analysis

- [Network statistics of the whole-brain connectome of Drosophila](https://www.nature.com/articles/s41586-024-07968-y)
**Mala Murthy, Nature**

- [Whole-brain annotation and multi-connectome cell typing quantifies circuit stereotypy in Drosophila](https://www.biorxiv.org/content/10.1101/2023.06.27.546055v2)
**hemibrain and flywire**

- [A connectome and analysis of the adult Drosophila central brain](https://elifesciences.org/articles/57443) **hemibrain**

- [Brain rewiring during developmental transitions: A Comparative Analysis of **Larva and Adult** Drosophila melanogaster](https://www.biorxiv.org/content/10.1101/2024.05.01.592061v1)

- [Connectomic analysis of the Drosophila lateral neuron clock cells reveals the synaptic basis of functional pacemaker classes](https://elifesciences.org/articles/79139)

- [Cross-species functional alignment reveals evolutionary hierarchy within the connectome](https://www.sciencedirect.com/science/article/pii/S1053811920308326)

- [A connectome of the Drosophila central complex reveals network motifs suitable for flexible navigation and context-dependent action selection](https://elifesciences.org/articles/66039)


- [Identifying Inputs to Visual Projection Neurons in Drosophila Lobula by Analyzing Connectomic Data](https://www.eneuro.org/content/9/2/ENEURO.0053-22.2022)

- [Hue selectivity from recurrent circuitry in Drosophila](https://www.nature.com/articles/s41593-024-01640-4)

- [Multilayer network analysis of **C. elegans**: Looking into the locomotory circuitry](https://www.sciencedirect.com/science/article/pii/S0925231220317926)
- [The Multilayer Connectome of Caenorhabditis **elegans**](https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1005283)


- [Exploring the Brain Characteristics of Structure-informed Functional Connectivity through Graph Attention Network](https://www.biorxiv.org/content/10.1101/2023.11.30.569343v1.abstract)


- [The fly connectome reveals a path to the **effectome**](https://www.nature.com/articles/s41586-024-07982-0)  
Gregory S. X. E. Jefferis, Mala Murthy & Jonathan W. Pillow 
From connectome to effectome: learning the causal interaction map of the fly brain


- [Hierarchical Modular Structure of the Drosophila Connectome](https://www.jneurosci.org/content/43/37/6384)
We defined analogous measures for cell types. To identify cell types that may be partitioned into dense subnetworks, we introduce the Fraction of Type measure,

$$
FT(T;X) = \sum_{c \in C(X)} (\frac{n_{c \And T}}{n_T})^2
$$

- [Visual Columns Map](https://codex.flywire.ai/app/visual_columns_map?dataset=fafb)
A comprehensive mapping of the 31 columnar cell types in the compound eye has been achieved using a computational optimization technique based on synaptic connectivity. A manuscript describing the resource and methodology is currently in preparation. The quality of this mapping can be evaluated through specially developed visualizations available below.


- [The Connectome Interpreter Toolkit](https://www.biorxiv.org/content/10.1101/2025.09.29.679410v2.full.pdf)
https://www.biorxiv.org/content/10.1101/2025.09.29.679410v2

### gap junction
- [Intercellular Communication: the Drosophila Innexin Multiprotein Family of Gap Junction Proteins](https://www.cell.com/article/S1074-5521(05)00072-4/fulltext)
Review, 2005


### connectome and gene

**review**
- [The cell biology of synapse formation](https://rupress.org/jcb/article/220/7/e202103052/212258/The-cell-biology-of-synapse-formationMechanisms-of) **SAM**  
Review, 2021, from [Thomas C. Südhof](https://med.stanford.edu/sudhoflab.html)  
![alt text](figs/synaptic adhesion molecules.png)
synaptic adhesion molecules.png

- [Towards an Understanding of Synapse Formation](https://www.sciencedirect.com/science/article/pii/S0896627318308420)
Review, 2018, from Thomas C. Südhof

- [The Dynamic Synapse](https://www.cell.com/neuron/fulltext/S0896-6273(13)00916-1) Review, 2013, Neuron, Daniel Choquet, Antoine Triller


- [Making Connections in the Fly Visual System](https://www.sciencedirect.com/science/article/pii/S0896627302008760)
Review, 2002, [Thomas R Clandinin](https://flyvisionlab.weebly.com/), S.Lawrence Zipursky 


- [Synaptic Connectivity and Neuronal Morphology: Two Sides of the Same Coin](https://www.cell.com/fulltext/S0896-6273(04)00498-2)


- [Beyond Molecular Codes: Simple Rules to Wire Complex Brains](https://www.sciencedirect.com/science/article/pii/S0092867415011939) 
Review, 2015, Bassem A. Hassan, P. Robin Hiesinger

- [Principles of synaptogenesis: Insights from Caenorhabditis elegans](https://www.sciencedirect.com/science/article/pii/S095943882500087X)
Elisa B. Frankel, Peri T. Kurshan, 2025, Current Opinion in Neurobiology



- [Chemoaffinity Revisited: Dscams, Protocadherins, and Neural Circuit Assembly](<https://www.cell.com/fulltext/S0092-8674(10)01145-1>)
Teview, 2010, S. Lawrence Zipursky, Joshua R. Sanes

- [Architectures of neuronal circuits](https://www.science.org/doi/full/10.1126/science.abg7285)
reivew, 2021, Science, Liqun Luo
![alt text](<https://www.science.org/cms/10.1126/science.abg7285/asset/59d561d9-7d95-456d-97e5-1b811c05023f/assets/images/large/science.abg7285-f5.jpg>)

**computational methods**
- **bilinear:** [Uncovering the genetic blueprint of the C. elegans nervous system](https://www.pnas.org/doi/full/10.1073/pnas.2009093117) 
István A. Kovács, Dániel L. **Barabási**, and Albert-László **Barabási**  PNAS

- [Graph similarity learning for cross-level interactions](https://www.sciencedirect.com/science/article/pii/S0306457324002917)
“Incorporates direction attributes via a bilinear model for better adaptability to data.”

- **biclique motifs** [A Genetic Model of the Connectome](https://www.sciencedirect.com/science/article/pii/S0896627319309262)
Dániel L. Barabási, Albert-László Barabási

- **bilinear** [Deciphering the Genetic Code of Neuronal Type Connectivity: A Bilinear Modeling Approach](https://elifesciences.org/reviewed-preprints/91532)
**Mu Qiao**

- [**Constructive connectomics**: How neuronal axons get from here to there using gene- expression maps derived from their family trees](https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1010382) 

- [Building a small brain with a simple **stochastic generative model**](https://www.biorxiv.org/content/10.1101/2024.07.01.601562v1)
  Oren Richter, Elad Schneidman

- [The structure and function of neural connectomes are shaped by a small number of design principles](https://www.biorxiv.org/content/10.1101/2023.03.15.532611v1)
Elad Schneidman

- [Cell lineage predicts neural connectivity beyond cell type](https://www.biorxiv.org/content/10.1101/2022.11.01.514680v1.abstract) C. elegans  
Konrad P. Kording, 


- [A framework for modeling the growth and development of neurons and networks](https://www.frontiersin.org/journals/computational-neuroscience/articles/10.3389/neuro.10.025.2009/full)
Frederic Zubler and Rodney Douglas(ETH Zurich), 2009 


**experimental test**
- [Rewiring an olfactory circuit by altering the combinatorial code of cell-surface proteins](https://www.biorxiv.org/content/10.1101/2025.03.01.640986v1)
**application** Liqun Luo

- [Biased cell adhesion organizes the Drosophila visual motion integration circuit](https://www.cell.com/developmental-cell/fulltext/S1534-5807(24)00638-5)   
- Yannick Carrier, .., Filipe Pinto-Teixeira, 2025, Developmental Cell
Beat/Side interactions are not required for synapse formation  
Beat/Side interactions contribute to synaptic specificity  
Beat/Side interactions bias cellular adjacency prior to synaptogenesis

- [Brain wiring determinants uncovered by integrating connectomes and transcriptomes](https://www.sciencedirect.com/science/article/pii/S0960982223010631)
**Yoo2023** T4_T5

- [Molecular topography of an entire nervous system](https://www.sciencedirect.com/science/article/pii/S0092867421007583)
**key_and_lock**

- [The Prop1-like homeobox gene unc-42 specifies the identity of synaptically connected neurons](https://elifesciences.org/articles/64903#metrics)
**C. elegans**

- [Cell-type-Specific Patterned Stimulus-Independent Neuronal Activity in the Drosophila Visual System during Synapse Formation](https://www.sciencedirect.com/science/article/pii/S0896627319300091)
**S. Lawrence Zipursky** 



- [Genome-wide identification of neuronal activity-regulated genes in Drosophila](https://elifesciences.org/articles/19942)


- [Dissecting origins of wiring specificity in dense cortical connectomes](https://www.biorxiv.org/content/10.1101/2024.12.14.628490v1)

- [Connectome gradient dysfunction in major depression and its association with gene expression profiles and treatment outcomes](https://www.nature.com/articles/s41380-022-01519-5)


data:
- [Hub connectivity, neuronal diversity, and gene expression in the Caenorhabditis elegans connectome](https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1005989)


**other spicies:**
- [Constrained roads to complex brains](https://www.science.org/doi/10.1126/science.adv2609)
perspective, Neural development and brain circuit evolution converged in birds and **mammals**

- [Evolutionary convergence of sensory circuits in the pallium of amniotes](https://www.science.org/doi/10.1126/science.adp3411)

- [Enhancer-driven cell type comparison reveals similarities between the mammalian and bird pallium](https://www.science.org/doi/10.1126/science.adp3957)
- [Developmental origins and evolution of pallial cell types and structures in birds](https://www.science.org/doi/10.1126/science.adp5182)


#### RL and logical rule 
- [Differentiable Learning of Logical Rules for Knowledge Base Reasoning](https://arxiv.org/abs/1702.08367)
2017

- [Finding Rule-Interpretable Non-Negative Data Representation](https://arxiv.org/abs/2206.01483)
Matej Mihelčić, Pauli Miettinen


#### gene data of Drosophila
[gene data of Drosophila](gene_data.md)



#### other methods to reconstruct connectome


- [Building a small brain with a simple stochastic generative model](https://www.biorxiv.org/content/10.1101/2024.07.01.601562v1)
Oren Richter, Elad Schneidman

- [Neurotransmitter classification from electron microscopy images at synaptic sites in Drosophila melanogaster](https://www.cell.com/cell/fulltext/S0092-8674(24)00307-6)
Six transmitters predicted across the whole fly brain connectome: 
https://www.cell.com/cms/10.1016/j.cell.2024.03.016/asset/24723725-eb0b-40f7-b29d-10f859442e2b/main.assets/gr5_lrg.jpg
Schematic of a neuron broken into its neuronal compartments. Inset, the proportion of presynapses in each of the four compartment types.



#### human connectome

- [Topographic Axes of Wiring Space Converge to Genetic Topography in Shaping the Human Cortical Layout](https://www.jneurosci.org/content/45/7/e1510242024)
**3GCs(global connectopies)**

- [A practical guide to linking brain-wide gene expression and neuroimaging data](https://www.sciencedirect.com/science/article/pii/S1053811919300114) 
seven major steps to link expression measures and neuroimaging data

- [Molecular logic of neocortical projection neuron specification, development and diversity](https://www.nature.com/articles/nrn3586), Neocortical projection neurons  
<!-- ![alt text|200pt](<figs/Neocortical projection neurons.png>) -->
![alt text|200pt](https://media.springernature.com/full/springer-static/image/art%3A10.1038%2Fnrn3586/MediaObjects/41583_2013_Article_BFnrn3586_Fig1_HTML.jpg?as=webp)




- [**Benchmarking methods for mapping functional connectivity in the brain**](https://www.biorxiv.org/content/10.1101/2024.05.07.593018v1)
Here we use a library of **239 pairwise statistics** to benchmark canonical features of **FC networks**, including hub mapping, weight–distance trade-offs, structure–function coupling, correspondence with other neurophysiological networks, individual fingerprinting and brain–behavior prediction. 


#### experiment support

- [Complex formation of immunoglobulin superfamily molecules Side-IV and Beat-IIb regulates synaptic specificity](https://www.sciencedirect.com/science/article/pii/S2211124724001268)  
2023, Cell Reports
  - Side-IV binding to Beat-IIb regulates synaptic specificity in vivo
  - Side-IV/Beat-IIb forms complex with Kirre and Dsyd-1


- [DIP/Dpr interactions and the evolutionary design of specificity in protein families](https://www.nature.com/articles/s41467-020-15981-8)
binding specificity of **DIP/Dpr** subgroups is controlled by "negative constraints", which interfere with binding


- [A Conserved Role for Drosophila Neuroglian and Human L1-CAM in Central-Synapse Formation](https://www.sciencedirect.com/science/article/pii/S0960982205014715)  
2006, Current Biology

- [Spatial patterning controls neuron numbers in the Drosophila visual system](https://www.sciencedirect.com/science/article/pii/S1534580724001485?via%3Dihub)


- [Whole-cortex in situ sequencing reveals input-dependent area identity](https://www.nature.com/articles/s41586-024-07221-6)
Zador lab



- [Cell-type-Specific Patterned Stimulus-Independent Neuronal Activity in the Drosophila Visual System during Synapse Formation](https://www.sciencedirect.com/science/article/pii/S0896627319300091)

- [Pattern formation in the Drosophila eye](https://www.sciencedirect.com/science/article/pii/S0959437X07000937)  
2007, Review, 2007, Richard W Carthew, Northwestern University

- [Novel brain wiring functions for classical morphogens: a role as graded positional cues in axon guidance](https://journals.biologists.com/dev/article/132/10/2251/42750/Novel-brain-wiring-functions-for-classical)  
morphogen gradients also serve to guide axonal pathfinding during development of the nervous system


- [Ig Superfamily Ligand and Receptor Pairs Expressed in Synaptic Partners in Drosophila](https://www.sciencedirect.com/science/article/pii/S0092867415015019)
S. Lawrence Zipursky 2015, Cell


- [The developmental emergence of reliable cortical representations](https://www.nature.com/articles/s41593-024-01857-3)
we examined this ‘nature–nurture transform’ at the single-trial level using chronic in vivo calcium imaging in **ferret** visual cortex.



#### GeneWeave application 
- [Stochastic Wiring of Cell Types Enhances Fitness by Generating Phenotypic Variability](https://www.biorxiv.org/content/10.1101/2024.08.07.606541v1) 
Divyansha Lachi, Ann Huang, Augustine N. Mavor-Parker, Arna Ghosh, Blake Richards, Anthony Zador

connection probabilities between discrete cell types are genetically specified, to investigate
the benefits of stochasticity in the development of neural wiring 
 


### cell-cell communication and interaction
- [CellPhoneDB: inferring **cell–cell communication** from combined expression of multi-subunit ligand–receptor complexes](https://www.nature.com/articles/s41596-020-0292-x)

- [Deciphering cell–cell interactions and communication from gene expression](https://www.nature.com/articles/s41576-020-00292-x)

- [Deciphering cell–cell communication at single-cell resolution for spatial transcriptomics with subgraph-based graph attention network](https://www.nature.com/articles/s41467-024-51329-2)



- [Cell2Cell: Explorative Cell Interaction Analysis in Multi-Volumetric Tissue Data](https://vcg.seas.harvard.edu/publications/cell2cell)

- [Inference and analysis of cell-cell communication using CellChat](https://www.nature.com/articles/s41467-021-21246-9)


### protein interaction
- [PPI (Protein-Protein Interactions (PPI))](https://paperswithcode.com/dataset/ppi)

#### experiment support
- [Nematode Extracellular Protein Interactome Expands Connections between Signaling Pathways](https://www.biorxiv.org/content/10.1101/2024.07.08.602367v2)

- [An Extracellular Interactome of Immunoglobulin and LRR Proteins Reveals Receptor-Ligand Networks](https://www.sciencedirect.com/science/article/pii/S0092867413007083)
cell, 2013
![alt text|200pt](<https://ars.els-cdn.com/content/image/1-s2.0-S0092867413007083-gr3_lrg.jpg>)

- [A comprehensive dataset of protein-protein interactions and ligand binding pockets for advancing drug discovery](https://www.nature.com/articles/s41597-024-03233-z)
**PPIs**


- [Attentive cross-modal paratope prediction](https://arxiv.org/abs/1806.04398)
Antibodies 

- [Principles of branch dynamics governing shape characteristics of cerebellar Purkinje cell dendrites](https://journals.biologists.com/dev/article/139/18/3442/45247/Principles-of-branch-dynamics-governing-shape)
Growing dendrites are retracted or stalled by contacts with other dendrites. 


- [Neuropil Pattern Formation and Regulation of Cell Adhesion Molecules in Drosophila Optic Lobe Development Depend on Synaptobrevin](https://www.jneurosci.org/content/19/17/7548)
1999

#### deep learning methods
- paper with code: https://paperswithcode.com/dataset/ppi


- [Powerful antibiotics discovered using AI](https://www.nature.com/articles/d41586-020-00018-3)

- [Struct2Graph: a graph attention network for structure based predictions of protein–protein interactions](https://link.springer.com/article/10.1186/s12859-022-04910-9)

- [Accurate protein function prediction via graph attention networks with predicted structure information](https://academic.oup.com/bib/article/23/1/bbab502/6457163)


#### result verification 

- [A conserved fertilization complex bridges sperm and egg in vertebrates](https://www.cell.com/cell/fulltext/S0092-8674(24)01093-6) **AlphaFold-Multimer**
    This approach employs structural predictions of pairwise protein-protein interactions between each bait protein and the candidate proteins. A high interface-predicted template modeling score (**ipTM score**) reflects high confidence in the relative positioning of the interfaces.

<!-- ![alt text|200pt](<figs/sperm and egg.png>) -->
![alt text|200pt](https://www.cell.com/cms/10.1016/j.cell.2024.09.035/asset/94c10a25-098f-4905-a883-7b118075f5de/main.assets/fx1_lrg.jpg)

### data mapping between transcriptome and connectome

- [Integrated Morphoelectric and Transcriptomic Classification of Cortical GABAergic Cells](https://www.sciencedirect.com/science/article/pii/S009286742031254X)
Cell2020, **all kinds of neurons!!!**

- [Bicoid gradient formation and function in the Drosophila pre-syncytial blastoderm](https://elifesciences.org/articles/13222)

- [An anteroposterior Dorsal gradient in theDrosophila embryo](https://genesdev.cshlp.org/content/11/15/1963)

- [Variation in the Dorsal Gradient Distribution Is a Source for Modified Scaling of Germ Layers in Drosophila](https://www.sciencedirect.com/science/article/pii/S0960982213003333)

- [Gradient-Based DNA Transcription Control in Animals](https://www.nature.com/scitable/topicpage/gradient-based-dna-transcription-control-in-animals-1062/)


- [Inferring causal connectivity from pairwise recordings and optogenetics](https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1011574)
Konrad P. Kording

- [Opportunities and challenges of single-cell and spatially resolved genomics methods for neuroscience discovery](https://www.nature.com/articles/s41593-024-01806-0)

#### neural type  

[my blog on connectivity_to_type](../connectivity_to_type.md)

- [Automatic discovery of cell types and microcircuitry from neural connectomics](https://elifesciences.org/articles/04250)  
Eric Jonas, Konrad Kording   
It combines the information traditionally used by biologists in a principled and probabilistically coherent manner, including connectivity, cell body location, and the spatial distribution of synapses. 


- [Evidence from spatial transcriptomics for the mosaic hypothesis and pure cell types in the cortex](https://www.cell.com/cell-reports/fulltext/S2211-1247(25)01134-9)
Uygar Sümbül
Allen 

Spatial transcriptomic data provide evidence for the mosaic hypothesis in the mouse cortex  
Somata of neurons of the same type appear to avoid spatial proximity with each other


- [Connectivity of single neurons classifies cell subtypes in mouse brains](https://www.nature.com/articles/s41592-024-01806-0)
Neuronal Connectivity as a Determinant of Cell Types and Subtypes

- [Bayesian Sparse Regression Analysis Documents the Diversity of Spinal Inhibitory Interneurons](https://www.sciencedirect.com/science/article/pii/S0092867416300034)  
[SI](https://ars.els-cdn.com/content/image/1-s2.0-S0092867416300034-mmc2.pdf) **Bayesian method**
$$
p(\mathbf{y} \mid Q, \mathbf{f}) \propto e^{-\frac{1}{2} \mathbf{f}^{\prime} \mathbf{M f}+\mathbf{y}^{\prime} Q \mathbf{f}}
$$

- [Molecularly defined and spatially resolved cell atlas of the whole mouse brain](https://www.nature.com/articles/s41586-023-06808-9)
Xiaowei Zhuang 

- [Morphological diversity of single neurons in molecularly defined cell types](https://www.nature.com/articles/s41586-021-03941-1) 2021 Nature, Hongkui Zeng, Allen Institute

- [Probabilistic cell typing enables fine mapping of closely related cell types in situ](https://www.nature.com/articles/s41592-019-0631-4)

- [Single-neuron models linking electrophysiology, morphology, and transcriptomics across cortical cell types](https://www.sciencedirect.com/science/article/pii/S2211124722009895) 
  9,200 models are generated that capture multimodal single-cell datasets

#### neural activity and connectivity
- [Homogenized C. elegans Neural Activity and Connectivity Data](https://arxiv.org/pdf/2411.12091)

- [Homogenized C. elegans Neural Activity and Connectivity Data](https://arxiv.org/pdf/2411.12091)
https://arxiv.org/abs/2411.12091
Konrad P Kording, Edward S Boyden


### Morphology
- [Mapping Function Onto Neuronal Morphology](https://journals.physiology.org/doi/full/10.1152/jn.00865.2006)
Klaus M. Stiefel, Terrence J. Sejnowski  
We used a Lindenmayer-system (L-system) (Lindenmayer 1968) for the algorithmic construction of model neuron morphologies. Simulations of electrophysiological dynamics were carried out in the neuronal simulation language NEURON (version 5.7) (Hines and Carnevale 1997, 2000).



- [Neuronal contact predicts connectivity in the C. elegans brain](<https://www.cell.com/current-biology/fulltext/S0960-9822(23)00553-5>)  
Peters’ rule explains synaptic specificity throughout the C. elegans nervous system

- [Development of Dendritic Form and Function](https://www.annualreviews.org/content/journals/10.1146/annurev-cellbio-100913-013020)  
Review paper, 2015, Julie L. Lefebvre, Joshua R. Sanes, and Jeremy N. Kay

- [One Rule to Grow Them All: A General Theory of Neuronal Branching and Its Practical Application](https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1000877)  
Hermann Cuntz ,Friedrich Forstner,Alexander Borst,Michael Häusser, 2010

- [Molecular mechanisms of dendrite morphogenesis](https://www.frontiersin.org/journals/cellular-neuroscience/articles/10.3389/fncel.2012.00061/full) 
Review, 2012, Jyothi Arikkath

- [Automated analysis of neuronal morphology, synapse number and synaptic recruitment](https://www.sciencedirect.com/science/article/pii/S0165027010006758)

- [L-Measure: a web-accessible tool for the analysis, comparison and search of digital reconstructions of neuronal morphologies](https://www.nature.com/articles/nprot.2008.51)

- [TreeMoCo: Contrastive Neuron Morphology Representation Learning](https://openreview.net/forum?id=p6hArCtwLAU)


- [Principles of branch dynamics governing shape characteristics of cerebellar Purkinje cell dendrites](https://journals.biologists.com/dev/article/139/18/3442/45247/Principles-of-branch-dynamics-governing-shape)
Growing dendrites are retracted or stalled by contacts with other dendrites. 

#### morphology data
[NeuroMorpho.Org](https://neuromorpho.org/) is a centrally curated inventorys of digitally reconstructed neurons and glia


#### maximum weighted independent set (MWIS)
- [Exactly Solving the Maximum Weight Independent Set Problem on Large Real-World Graphs](https://arxiv.org/abs/1810.10834)

- [A note on greedy algorithms for the maximum weighted independent set problem](https://www.sciencedirect.com/science/article/pii/S0166218X02002056)

Graph compression or sparsification
- [Vertex Sparsification for Edge Connectivity](https://arxiv.org/pdf/2007.07862.pdf)

#### Maximum Dispersion
Maximum Diversity Problem (MDP)
- [Dispersion on Trees](https://arxiv.org/abs/1706.09185)
- [Estimating Pairwise Distances in Large Graphs](https://ieeexplore.ieee.org/document/7004250)

- [Approximation Algorithms for Dispersion Problems](https://www.sciencedirect.com/science/article/pii/S0196677400911453)

- [Approximation Algorithms for Maximum Dispersion](https://www.sciencedirect.com/science/article/pii/S0167637797000345)
- [Obnoxious Facility Location on Graphs](https://epubs.siam.org/doi/10.1137/0404048)

- [变邻域搜索(VNS)算法求解Max-Mean Dispersion Problem](https://zhuanlan.zhihu.com/p/101724381)

- [On memetic search for the max-mean dispersion problem](https://arxiv.org/abs/1503.00980)
- [Tabu search for the Max–Mean Dispersion Problem](https://www.sciencedirect.com/science/article/pii/S0950705115001860)

<!-- - [Exact Solution of P-dispersion Problems](https://www.semanticscholar.org/paper/Exact-Solution-of-P-dispersion-Problems-Pisinger/1eb3810077c0af9d46ed5ff2b0819d954c97dcae) -->
- [Upper bounds and exact algorithms for p-dispersion problems
](https://www.sciencedirect.com/science/article/pii/S0305054804002552)
http://yalma.fime.uanl.mx/~roger/work/teaching/class_tso/docs_project/problems/PDP/cor-2006-Pisinger.pdf

- [A review on discrete diversity and dispersion maximization from an OR perspective](https://www.sciencedirect.com/science/article/pii/S0377221721006548)

- [Heuristic and special case algorithms for dispersion problems](https://pubsonline.informs.org/doi/abs/10.1287/opre.42.2.299)


- [A network flow solution to some nonlinear 0-1 programming problems, with applications to graph theory](https://onlinelibrary.wiley.com/doi/abs/10.1002/net.3230120206)


### connectome visualization

- [FlyWire visualization tools](https://flywire.ai/apps)

- [CAVE: Connectome Annotation Versioning Engine](https://www.biorxiv.org/content/10.1101/2023.07.26.550598v1)
https://vcg.seas.harvard.edu/publications/cave

- [NeuroCave: A web-based immersive visualization platform for exploring connectome datasets](https://direct.mit.edu/netn/article/2/3/344/5434/NeuroCave-A-web-based-immersive-visualization)

- [SmartEM: machine-learning guided electron microscopy](https://www.biorxiv.org/content/10.1101/2023.10.05.561103v1)

- BOOK: [Visualization in Connectomics](https://link.springer.com/chapter/10.1007/978-1-4471-6497-5_21)

- [A Unified attentional bottleneck in the human brain](https://www.pnas.org/doi/full/10.1073/pnas.1103583108)
connection bottleneck


- [Computation and visualization of cell–cell signaling topologies in single-cell systems data using Connectome](https://www.nature.com/articles/s41598-022-07959-x)

- ViMO [ - Visual Analysis of Neuronal Connectivity Motifs](https://ieeexplore.ieee.org/document/10298029)

- [Network Repository](https://networkrepository.com/). An Interactive Scientific Network Data Repository.
the first scientific network data repository with interactive visual analytics.
new GraphVis: interactive visual graph mining and machine learning 


**human connectome** 
- [NeuroCave: A web-based immersive visualization platform for exploring connectome datasets](https://doi.org/10.1162/netn_a_00044)


- [Visualizing the PHATE of Neural Networks](https://arxiv.org/abs/1908.02831)   
[Table 1. A survey of neuroimaging connectomic software. ](https://direct.mit.edu/view-large/figure/1188158/00044fx01.tif)

### gene data
- [Opportunities and challenges of single-cell and spatially resolved genomics methods for neuroscience discovery](https://www.nature.com/articles/s41593-024-01806-0)  
Nature Neuroscience volume 27, pages 2292-2309 (2024)  
Review

#### gene data for Drosophila 

- [Fly Cell Atlas: A single-nucleus transcriptomic atlas of the adult fruit fly](https://www.science.org/doi/abs/10.1126/science.abk2432)  
2022, science 

- [A Single-Cell Transcriptome Atlas of the Aging Drosophila Brain](https://www.sciencedirect.com/science/article/pii/S0092867418307207)
- [A Single-Cell Transcriptome Atlas of the Aging Drosophila Brain](https://www.cell.com/cell/fulltext/S0092-8674(18)30720-7)
Cell, 2018

- [Transcriptional Programs of Circuit Assembly in the Drosophila Visual System](https://www.cell.com/neuron/fulltext/S0896-6273(20)30774-1) 
**S. Lawrence Zipursky**

- [Neuronal diversity and convergence in a visual system developmental atlas](https://www.nature.com/articles/s41586-020-2879-3)
Claude Desplan NYU, 2020

- [Morphological and functional convergence of visual projection neurons from diverse neurogenic origins in Drosophila](https://www.nature.com/articles/s41467-025-56059-7)
Mehmet Neset Özel & Claude Desplan, January 2025,Nature Communications  


- [Decoding gene regulation in the fly brain](https://www.nature.com/articles/s41586-021-04262-z)
Stein Aerts, Nature, 2022

- [A complete temporal **transcription factor** series in the fly visual system](https://www.nature.com/articles/s41586-022-04564-w)
Claude Desplan 

- [A High-Resolution Atlas of the Brain Predicts Lineage and Birth Order Underly Neuronal Identity](https://www.biorxiv.org/content/10.1101/2025.06.04.657818v1.abstract)
Stephen F. Goodwin, 2025   
we generate the first high-resolution, single-cell transcriptomic atlas of the adult Drosophila melanogaster central brain by integrating multiple datasets, achieving an unprecedented tenfold coverage of every neuron in this complex tissue.


- [A genetic, genomic, and computational resource for exploring neural circuit function](https://elifesciences.org/articles/50901)
eLife, 2020
We used these tools to build a resource of high-resolution transcriptomes for 100 driver lines covering 67 cell types



#### other gene dataset


- [Isoforms of Terminal Selector Mamo Control Axon Guidance during Adult Drosophila Memory Center Construction via Semaphorin-1a](https://www.sciencedirect.com/science/article/abs/pii/S001216062400160X)


- [Cross-platform normalization enables machine learning model training on microarray and RNA-seq data simultaneously](https://www.nature.com/articles/s42003-023-04588-6)

- [Science Forum: The Human Cell Atlas](https://elifesciences.org/articles/27041)


#### review
- [Opportunities and challenges of single-cell and spatially resolved genomics methods for neuroscience discovery](https://www.nature.com/articles/s41593-024-01806-0)
two new axes of biological variation: cell-intrinsic regulation of cell states and expression programs and interactions between cells.  
nature neuroscience review 2024

#### analysis

- [SURGE: uncovering context-specific genetic-regulation of gene expression from single-cell RNA sequencing using latent-factor models](https://genomebiology.biomedcentral.com/articles/10.1186/s13059-023-03152-z)

- [Inference of cell state transitions and cell fate plasticity from single-cell with MARGARET](https://academic.oup.com/nar/article/50/15/e86/6593121?login=false)

- [Single-cell RNA sequencing technologies and applications: A brief overview](https://onlinelibrary.wiley.com/doi/10.1002/ctm2.694)

- [Methods and applications for single-cell and spatial multi-omics](https://www.nature.com/articles/s41576-023-00580-2)
Nature Reviews Genetics (2023)

- [Gene2vec: distributed representation of genes based on co-expression](https://bmcgenomics.biomedcentral.com/articles/10.1186/s12864-018-5370-x)

#### logical gene for connectome 
- [Regulatory logic of neuronal identity specification in Drosophila](https://www.biorxiv.org/content/10.1101/2025.09.01.673531v1)  
Rose Coyne, McKenzie Treese, Yen-Chung Chen, ..., Claude Desplan, Mehmet Neset Özel, 2025, biorxiv


- [Discovering Symbolic Models from Deep Learning with Inductive Biases](https://arxiv.org/abs/2006.11287)

- [On scientific understanding with artificial intelligence](https://www.nature.com/articles/s42254-022-00518-3)

- [End-to-end symbolic regression with transformers](https://arxiv.org/abs/2204.10532)

- [interpretable Machine Learning for Science with PySR and SymbolicRegression.jl](https://arxiv.org/abs/2305.01582)

- [KAN: Kolmogorov-Arnold Networks](https://arxiv.org/abs/2404.19756)

#### gene regulatory network 

- [Chapter Four - Gene regulatory networks during the development of the Drosophila visual system](https://www.sciencedirect.com/science/article/pii/S0070215320300363)
Yen-Chung Chen, Claude Desplan, 2020, Current Topics in Developmental Biology
> recent advances in technology have allowed electrophysiological features and gene expression to be systematically compared and have demonstrated that similarity in gene expression correlates with similarity in firing patterns (Cadwell et al., 2016; Fuzik et al., 2016).
> The visual system of Drosophila is an ideal platform to learn about gene regulatory networks and to bridge the gap between development and terminal features that establish diversity in the nervous system. First, the neurons of the visual system have been studied extensively for decades, and as a result, the morphology and the choice of neurotransmitter of a large proportion of the neurons are characterized (Fischbach, 1989; Raghu & Borst, 2011; Raghu, Claussen, & Borst, 2013; Varija Raghu, Reiff, & Borst, 2011). Second, the high-resolution connectivity of most neuropils within the optic lobe has been actively determined by electron microscopy (Rivera-Alba et al., 2011; Shinomiya et al., 2019; Takemura et al., 2013, Takemura et al., 2015, Takemura et al., 2017).

- [Decoding gene regulation in the fly brain](https://www.nature.com/articles/s41586-021-04262-z)

- [Inferring transcription factor regulatory networks from single-cell ATAC-seq data based on graph neural networks](https://www.nature.com/articles/s42256-022-00469-5)
Nature Machine Intelligence, 2022


- [Genome-wide identification of neuronal activity-regulated genes in Drosophila](https://elifesciences.org/articles/19942) Brandeis
eLife, 2016


- [Control of Gene Regulatory Networks Using Bayesian Inverse Reinforcement Learning](https://ieeexplore.ieee.org/abstract/document/8350274)

- [Shared regulation and functional relevance of local gene co-expression revealed by single cell analysis](https://www.nature.com/articles/s42003-022-03831-w)  
gene coexpression in scCOP and bulkCOP
$$
\begin{array}{|c|c|c|} \hline \text { Gene pairs } & \text { scCOPs } & \neg \text { scCOPs } \\
\hline \text { bulkCOPs } & 313 & 2993 \\ \hline \neg \text { bulkCOPs } & 3245 & 232603 \\ \hline \end{array}
$$

- [Multiomic foundation model predicts epigenetic regulation by zero-shot](https://www.biorxiv.org/content/10.1101/2024.12.19.629561v1)

- [An atlas of gene regulatory elements in adult mouse cerebrum](https://www.nature.com/articles/s41586-021-03604-1)
An anatomically comprehensive atlas of the adult human brain transcriptome
https://www.nature.com/articles/nature11405

#### review paper 

- [Gene regulatory network inference in the era of single-cell multi-omics](https://www.nature.com/articles/s41576-023-00618-5)Julio Saez-Rodriguez 
Nature Reviews Genetics, 2023

- [Gene regulatory network reconstruction: harnessing the power of single-cell multi-omic data](https://www.nature.com/articles/s41540-023-00312-6)
npj Systems Biology and Applications, review, 2023

- [A comprehensive survey of regulatory network inference methods using single cell RNA sequencing data](https://academic.oup.com/bib/article/22/3/bbaa190/5904505)
Briefings in Bioinformatics, 2021

#### sota models
- [SCENIC: single-cell regulatory network inference and clustering](https://www.nature.com/articles/nmeth.4463)  
- [SCENIC+: single-cell multiomic inference of enhancers and gene regulatory networks](https://www.nature.com/articles/s41592-023-01938-4)

- LINGER: [Inferring gene regulatory networks from single-cell multiome data using atlas-scale external data](https://www.nature.com/articles/s41587-024-02182-7)


#### application
- [Encoding innate ability through a genomic bottleneck](https://www.biorxiv.org/content/10.1101/2021.03.16.435261v2)

- [The Genomic Code: The genome instantiates a generative model of the organism](https://arxiv.org/abs/2407.15908)


- [TrajectoryNet: A Dynamic Optimal Transport Network for Modeling Cellular Dynamics](https://arxiv.org/abs/2002.04461)


- [A Comprehensive Drosophila melanogaster Transcription Factor Interactome](https://www.sciencedirect.com/science/article/pii/S2211124719304012)
 
### gene normalization 
- [Scanpy – Single-Cell Analysis in Python](https://scanpy.readthedocs.io/en/stable/)
- [scanpy Preprocessing and clustering](https://scanpy.readthedocs.io/en/stable/tutorials/basics/clustering.html)
- [scanpy highly_variable_genes](https://scanpy.readthedocs.io/en/stable/generated/scanpy.pp.highly_variable_genes.html)

- [seurat Normalize Data](https://satijalab.org/seurat/reference/normalizedata)

- [RNA-seq analysis is easy as 1-2-3 with limma, Glimma and edgeR](https://bioconductor.org/packages/release/workflows/vignettes/RNAseq123/inst/doc/limmaWorkflow.html)


- [Integrating single-cell transcriptomic data across different conditions, technologies, and species](https://www.nature.com/articles/nbt.4096)


### functional and structure conenctome
- [Integrating multimodal and multiscale connectivity blueprints of the human cerebral cortex in health and disease](https://journals.plos.org/plosbiology/article?id=10.1371/journal.pbio.3002314)


- [The cell-type underpinnings of the human functional cortical connectome](https://www.nature.com/articles/s41593-024-01812-2)




- [Complex brain networks: graph theoretical analysis of structural and functional systems](https://www.nature.com/articles/nrn2575)
Ed Bullmore & Olaf Sporns (2009). Nature Reviews Neuroscience

- [Intrinsic coupling modes: multiscale interactions in ongoing brain activity](https://www.cell.com/neuron/fulltext/S0896-6273(13)00847-4)
Engel, A. K., Gerloff, C., Hilgetag, C. C., & Nolte, G. (2013). Neuron, 80(4), 867-886.

- [Functional connectivity in the motor cortex of resting human brain using echo-planar mri](https://onlinelibrary.wiley.com/doi/abs/10.1002/mrm.1910340409)
Biswal, B., F. Zerrin Yetkin, Victor M. Haughton, James S. Hyde (1995). Magnetic Resonance in Medicine 34(4): 537-541.

- [A weighted and directed interareal connectivity matrix for macaque cerebral cortex](https://academic.oup.com/cercor/article/24/1/17/311346)
Markov NT, et al. (2014). Cereb Cortex 24:17–36.

- [Using diffusion tractography to predict cortical connection strength and distance: a quantitative comparison with tracers in the monkey](https://www.jneurosci.org/content/36/21/6758)
Donahue, C.J., Sotiropoulos, S.N., Jbabdi, S., Hernandez-Fernandez, M., Behrens, T.E., Dyrby, T.B., Coalson, T., Kennedy, H., Knoblauch, K., Van Essen, D.C., Glasser, M.F. (2016). J. Neurosci. 36, 6758–6770.

- [Can structure predict function in the human brain?](https://www.sciencedirect.com/science/article/pii/S1053811910002344)
Honey, C., Thivierge JP, Sporns O (2010). Neuroimage 52(3): 766-776.

- [Identification of optimal structural connectivity using functional connectivity and neural modeling](https://www.jneurosci.org/content/34/23/7910)
Deco, G., McIntosh, A. R., Shen, K., Hutchison, R. M., Menon, R. S., Everling, S., Hagmann, P., & Jirsa, V. K. (2014). The Journal of neuroscience, 34(23), 7910–7916.

- [Evaluation and calibration of functional network modeling methods based on known anatomical connections](https://www.sciencedirect.com/science/article/pii/S1053811913000260)
Dawson, DA, Cha K, Lewis LB, Mendola JD, Shmuel A (2013). Neuroimage 67: 331-343.

- [Predicting brain structural network using functional connectivity](https://www.sciencedirect.com/science/article/abs/pii/S1361841522001104)
multi-GCN based GAN, AD (2022). Medical Image Analysis, 79, 102463.

- [Prediction of brain sex from EEG: using large-scale heterogeneous dataset for developing a highly accurate and interpretable ML model](https://www.sciencedirect.com/science/article/pii/S1053811923006456)
(2023). NeuroImage

- [Topographic Axes of Wiring Space Converge to Genetic Topography in Shaping the Human Cortical Layout](https://www.jneurosci.org/content/45/7/e1510242024#page=14.33)
(2024). Journal of Neuroscience

- [A practical guide to linking brain-wide gene expression and neuroimaging data](https://www.sciencedirect.com/science/article/abs/pii/S1053811919300114)
(2019). NeuroImage


### other connectome model:
- [Modelling brain connectomes networks: Solv is a worthy competitor to hyperbolic geometry!](https://openreview.net/forum?id=dqWobzlAGb)

## Reinforcement learning (RL)
- [Learning Symbolic Rules for Interpretable Deep Reinforcement Learning](https://arxiv.org/abs/2103.08228)

- [Applying Logical Rules to Reinforcement Learning for Interpretable Knowledge Graph Reasoning](https://ieeexplore.ieee.org/abstract/document/10650177)

- [A Logical Framework to Reinforcement Learning Using Hybrid Probabilistic Logic Programs](https://link.springer.com/chapter/10.1007/978-3-540-87993-0_27)

- [A Policy Search Method For Temporal Logic Specified Reinforcement Learning Tasks](https://ieeexplore.ieee.org/document/8431181)

- [Interpretable Model-based Hierarchical Reinforcement Learning using Inductive Logic Programming](https://arxiv.org/abs/2106.11417)

- [Reinforcement Logic Rule Learning for Temporal Point Processes](https://arxiv.org/abs/2308.06094)



## graph

- JC: https://docs.google.com/spreadsheets/d/10R6poOIIqA4OCsiSGs5mK4Zkq9pm8aPxk1IQ3Zl0NPU

- datasests: [Gephi sample datasets](https://github.com/gephi/gephi/wiki/datasets)

- DGL 2.0: [Streamlining Your GNN Data Pipeline from Bottleneck to Boost](https://www.dgl.ai/)  
[github](https://github.com/dmlc/dgl/blob/master/examples/README.md#agnn)


- [The Graph Neural Network Model](https://ieeexplore.ieee.org/document/4700287)

- [Variational Graph Auto-Encoders](https://arxiv.org/abs/1611.07308)
Bayesian Deep Learning Workshop (NIPS 2016)  [code](https://github.com/DaehanKim/vgae_pytorch)


- [Graph Attention Networks](https://arxiv.org/abs/1710.10903)
Yoshua Bengio

- [Graph Attention Networks](https://petar-v.com/GAT/)

- [Attention-based Graph Neural Network for Semi-supervised Learning](https://arxiv.org/abs/1803.03735)


- [GraphFM: A Scalable Framework for Multi-Graph Pretraining](https://arxiv.org/abs/2407.11907)

- [A Survey on Learning from Graphs with Heterophily: Recent Advances and Future Directions](https://github.com/gongchenghua/Papers-Graphs-with-Heterophily)

- [Revisiting Self-Supervised Heterogeneous Graph Learning from Spectral Clustering Perspective](https://arxiv.org/abs/2412.00742)
within-community connection prediction

### Link prediction
https://paperswithcode.com/task/link-prediction

- [Link Prediction via Matrix Factorization](https://link.springer.com/chapter/10.1007/978-3-642-23783-6_28)
- 

- GraphSAGE: [Inductive Representation Learning on Large Graphs](https://arxiv.org/abs/1706.02216v4)
GraphSAGE, a general, inductive framework that leverages node feature information (e.g., text attributes) to efficiently generate node embeddings for previously unseen data.

- [Inductive Link Prediction via Interactive Learning Across Relations in Multiplex Networks](https://ieeexplore.ieee.org/document/9787711)

- [Community-guided link prediction in **multiplex** networks](https://www.sciencedirect.com/science/article/abs/pii/S1751157721000493)

#### review 
- [A Survey of Link Prediction in Complex Networks](https://dl.acm.org/doi/10.1145/3012704)
 
- [Link prediction in complex networks: A survey](https://www.sciencedirect.com/science/article/abs/pii/S037843711000991X)

### Graph Embedding
- [LINE: Large-scale Information Network Embedding](https://arxiv.org/abs/1503.03578)
 
- [GraphVite - graph embedding at high speed and large scale](https://arxiv.org/abs/1903.00757)  
[GraphVite github](https://github.com/DeepGraphLearning/graphvite)

### review 
- [A Comprehensive Survey of Graph Embedding](https://arxiv.org/abs/1709.07604)

- [Network Structure Inference, A Survey: Motivations, Methods, and Applications](https://dl.acm.org/doi/10.1145/3154524)
 
- [A Comprehensive Survey on Graph Neural Networks](https://arxiv.org/abs/1901.00596)
Cited by 11155

- [Graph neural networks: A review of methods and applications](https://www.sciencedirect.com/science/article/pii/S2666651021000012)
Cited by 6966

- [Graph Learning: A Survey](https://ieeexplore.ieee.org/abstract/document/9416834)

- [papers with code: Graph Models](https://paperswithcode.com/methods/category/graph-models) 



###  
- [Are we really making much progress? Revisiting, benchmarking, and refining heterogeneous graph neural networks](https://arxiv.org/abs/2112.14936)
we construct the Heterogeneous Graph Benchmark (HGB), consisting of 11 diverse datasets with three tasks.
```
| Dataset | Nodes | Node Types | Edges | Edge Types | Target |
|---------|-------|------------|-------|------------|--------|
| Amazon  | 10,099| 1          | 148,659| 2          | product-product |
| LastFM  | 20,612| 3          | 141,521| 3          | user-artist |
| PubMed  | 63,109| 4          | 244,986| 10         | disease-disease |
```

### disease gene
- [GANLDA: Graph attention network for lncRNA-disease associations prediction](https://www.sciencedirect.com/science/article/pii/S0925231221011012)

- [Genome-wide prediction of dominant and recessive neurodevelopmental disorder risk genes](https://www.biorxiv.org/content/10.1101/2022.11.21.517436v1)

- [Mantis-ml: Disease-Agnostic Gene Prioritization from High-Throughput Genomic Screens by Stochastic Semi-supervised Learning](https://www.cell.com/ajhg/fulltext/S0002-9297(20)30108-7)

### graph and connectome
BrainGNN: Interpretable Brain Graph Neural Network for fMRI Analysis
https://www.sciencedirect.com/science/article/abs/pii/S1361841521002784

Graph Neural Networks for Brain Graph Learning: A Survey
https://arxiv.org/abs/2406.02594
2024

### other

- [The frequency of nerve action potentials generated by applied currents](https://royalsocietypublishing.org/doi/abs/10.1098/rspb.1967.0013#)
R. B. Stein and Alan Lloyd Hodgkin 

- [Fractional Spiking Neuron: Fractional Leaky Integrate-and-Fire Circuit Described with Dendritic Fractal Model](https://ieeexplore.ieee.org/abstract/document/9933612)

- [A Dendritic Compartment Model Neuron](https://ieeexplore.ieee.org/abstract/document/4120609)



### olfactory system
- [A computational model of conditioning inspired by Drosophila olfactory system](https://www.sciencedirect.com/science/article/pii/S0893608016301666)

- [Predictive olfactory learning in Drosophila](https://www.nature.com/articles/s41598-021-85841-y)
  
- [A vector-based strategy for **olfactory** navigation in Drosophila](https://www.biorxiv.org/content/10.1101/2025.02.15.638426v1.abstract)  L.F. Abbott, Vanessa Ruta

- [Neural dynamics for working memory and evidence integration during olfactory navigation in Drosophila](https://www.biorxiv.org/content/10.1101/2024.10.05.616803v1.abstract)
- [Generating parallel representations of position and identity in the olfactory system](https://www.cell.com/cell/fulltext/S0092-8674(23)00472-5)

- [Olfactory Information Processing in Drosophila](https://www.sciencedirect.com/science/article/pii/S0960982209013013) Gregory S.X.E. Jefferis, 2009

- [Diversity and wiring variability of olfactory local interneurons in the Drosophila antennal lobe](https://www.nature.com/articles/nn.2489)

- [Information flow, cell types and stereotypy in a full **olfactory** connectome](https://elifesciences.org/articles/66018)
Gregory S X E Jefferis

- [Subpopulations of Projection Neurons in the Olfactory Bulb](https://www.frontiersin.org/journals/neural-circuits/articles/10.3389/fncir.2020.561822/full)
REVIEW article,Front. Neural Circuits, 27 August 2020

- [Teneurins instruct synaptic partner matching in an olfactory map](https://www.nature.com/articles/nature10926)
Weizhe Hong, Timothy J. Mosca & Liqun Luo    
Teneurins instruct matching specificity between synaptic partners through homophilic attraction.


### mean field 
 
- [Dynamics of Sparsely Connected Networks of Excitatory and Inhibitory Spiking Neurons](https://link.springer.com/article/10.1023/A:1008925309027) 
Brunel, 2000, JofCNS
 
   
- [Macroscopic Description for Networks of Spiking Neurons](https://journals.aps.org/prx/abstract/10.1103/PhysRevX.5.021028)
Ernest Montbrió, Diego Pazó, and Alex Roxin, 2015  
Quadratic IF neuron 

- [Towards a theory of cortical columns: From spiking neurons to interacting neural populations of finite size](https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1005507) 
Schwalger etal., 2017 

- [The Cell-Type Specific Cortical Microcircuit: Relating Structure and Activity in a Full-Scale Spiking Network Model](https://academic.oup.com/cercor/article/24/3/785/398560)
Potjans & Diesmann, 2014, Cerebral Cortex  
Mean field for Mesocsopic 



## NeuroAI

- [In vitro neurons learn and exhibit sentience when embodied in a simulated game-world](https://www.cell.com/neuron/fulltext/S0896-6273(22)00806-6#%20)
- [Brain organoid reservoir computing for artificial intelligence](https://www.nature.com/articles/s41928-023-01069-w)

- [The Forward-Forward Algorithm: Some Preliminary Investigations](https://arxiv.org/abs/2212.13345)
Geoffrey Hinton

- [Constraining computational models using electron microscopy wiring diagrams](https://www.sciencedirect.com/science/article/pii/S0959438818302174)
Ashok Litwin-Kumar , Srinivas C Turaga  
Review, Current Opinion in Neurobiology, 2019

- [NeuroMechFly v2: simulating embodied **sensorimotor** control in adult Drosophila](https://www.nature.com/articles/s41592-024-02497-y)  Pavan Ramdya 


### Connectome & ANN


[connectome inspired neural network](<connectome inspired neural network.md>)    
html [connectome inspired neural network](https://lengyuner.github.io/blog/connectome%20inspired%20neural%20network.html)


- [Deep Connectomics Networks: Neural Network Architectures Inspired by Neuronal Networks](https://arxiv.org/abs/1912.08986)


- [Forecasting Whole-Brain Neuronal Activity from Volumetric Video](https://arxiv.org/abs/2503.00073)
ZAPBench
 
- [Foundation model of neural activity predicts response to new stimulus types](https://www.nature.com/articles/s41586-025-08829-y) 
Eric Y. Wang, ... , Xaq Pitkow, Fabian H. Sinz & Andreas S. Tolias, 2025, Nature

### geometry
- [Modelling brain connectomes networks: Solv is a worthy competitor to hyperbolic geometry!](https://openreview.net/forum?id=dqWobzlAGb)
ICLR 2024 Conference Submission

### Brain simulation / activity prediction
- [AMAG: Additive, Multiplicative and Adaptive Graph Neural Network For Forecasting Neuron Activity](https://openreview.net/forum?id=7ntI4kcoqG)
NeurIPS 2023 poster

#### model
- [Learning to Simulate Complex Physics with Graph Networks](https://arxiv.org/abs/2002.09405)  
为了做这个，我们需要什么样的data。有wide field and the 2p microscope，是不是就可以模拟一些基础规律了

### Network analysis
BOOK [Fundamentals of Brain Network Analysis](https://www.sciencedirect.com/book/9780124079083/fundamentals-of-brain-network-analysis)

BOOK [Chapter 3 - Connectivity Matrices and Brain Graphs](https://www.sciencedirect.com/science/article/pii/B9780124079083000030)

Review [Neural Networks With Motivation](https://www.frontiersin.org/articles/10.3389/fnsys.2020.609316/full)


- [Modeling small networks](https://www.researchgate.net/publication/2267079_Modeling_Small_Networks)
1998, L F Abbott, Eve Marder

### synapse plasticity
#### STDP
nearest neighbor STDP (Izhikevich, 2003)  
- [Relating STDP to BCM](https://doi.org/10.1162/089976603321891783)

- [Tensor formalism for predicting synaptic connections with ensemble modeling or optimization](https://arxiv.org/abs/2310.20309)   
Tirthabir Biswas, Tianzhi Lambus Li, James E. Fitzgerald

- [Inhibitory and Excitatory Spike-Timing-Dependent Plasticity in the Auditory Cortex](<https://www.cell.com/neuron/fulltext/S0896-6273(15)00210-X>)
Inhibitory potentiation occurs when either pre- or postsynaptic spikes come first  
Excitatory and inhibitory inputs become bound together by postsynaptic spiking
 
#### BTSP
- [Behavioral time scale synaptic plasticity underlies CA1 place fields](https://www.science.org/doi/10.1126/science.aan3846)
A different form of synaptic plasticity

## neural data recording


### whole brain imaging

#### drosophila data 
- [The spatial and temporal structure of neural activity across the fly brain](https://www.nature.com/articles/s41467-023-41261-2) 
swept confocally-aligned planar excitation (SCAPE) microscopy,  
1419 ± 78 stable, single-cell ROIs per animal, contained nearly all neurons within 70 μm of the dorsal surface  
https://springernature.figshare.com/articles/dataset/Flygenvectors_The_spatial_and_temporal_structure_of_neural_activity_across_the_fly_brain/23749074

- [Whole-Brain Calcium Imaging Reveals an Intrinsic Functional Network in Drosophila](https://www.cell.com/current-biology/fulltext/S0960-9822(17)30813-8) 
Current Bilogy
https://data.mendeley.com/datasets/8b6nw2xxhn/1

- [Mapping the neural dynamics of locomotion across the Drosophila brain](https://www.cell.com/current-biology/fulltext/S0960-9822(23)01763-3)


#### other data

- [In vivo autofluorescence lifetime imaging of the Drosophila brain captures metabolic shifts associated with memory formation](https://www.biorxiv.org/content/10.1101/2025.01.27.635185v1.full)

- [The spatial and temporal structure of neural activity across the fly brain](https://www.nature.com/articles/s41467-023-41261-2)
Evan S. Schaffer ... L. F. Abbott & Richard Axel 

- [Imaging whole-brain activity to understand behaviour](https://www.nature.com/articles/s42254-022-00430-w?fromPaywallRec=false)
Review Article

- [Wide-field fluorescence lifetime imaging of neuron spiking and subthreshold activity in vivo](https://www.science.org/doi/full/10.1126/science.adf9725)

- [Mapping the neural dynamics of locomotion across the Drosophila brain](https://www.cell.com/current-biology/fulltext/S0960-9822(23)01763-3)

- [Correspondence of the brain's functional architecture during activation and rest](https://www.pnas.org/doi/full/10.1073/pnas.0905267106)

- [Fast near-whole–brain imaging in adult Drosophila during responses to stimuli and behavior](https://journals.plos.org/plosbiology/article?id=10.1371/journal.pbio.2006732) 
Plos Biology


- [Imaging through the Whole Brain of Drosophila at λ/20 Super-resolution](https://www.cell.com/iscience/fulltext/S2589-0042(19)30091-4)

- [Coupling of activity, metabolism and behaviour across the Drosophila brain](https://www.nature.com/articles/s41586-021-03497-0) Surya Ganguli & Thomas R. Clandinin 

- [Multiphoton fluorescence microscopy for in vivo imaging](https://www.cell.com/cell/article/S0092-8674(24)00830-4/fulltext)
Na Ji jina@berkeley.edu, 2024


### cell tracking
- [EMC2: A versatile algorithm for robust tracking of calcium dynamics from individual neurons in behaving animals](https://www.biorxiv.org/content/10.1101/2020.06.22.165696v3.full)

- [3DeeCellTracker, a deep learning-based pipeline for segmenting and tracking cells in 3D time lapse images](https://elifesciences.org/articles/59187)

### wormid

- [Unifying community whole-brain imaging datasets enables robust neuron identification and reveals determinants of neuron position in C. elegans](https://www.sciencedirect.com/science/article/pii/S2667237524003540)
Daniel Y. Sprague,..., Saul Kato

## neural data analysis & modeling

- [Spatiotemporal conditional inference and hypothesis tests for neural ensemble spiking precision](https://direct.mit.edu/neco/article/27/1/104/8035/Spatiotemporal-Conditional-Inference-and)

- [Maximum entropy models as a tool for building precise neural controls](https://www.sciencedirect.com/science/article/pii/S0959438816302689)
Cristina Savin, Gašper Tkačik

- [Unsupervised pretraining in biological neural networks](https://www.nature.com/articles/s41586-025-09180-y)
Lin Zhong, Scott Baptista, Rachel Gattoni, Jon Arnold, Daniel Flickinger, Carsen Stringer & Marius Pachitariu 
Nature (2025)


### reivew 
- [Neural data science: accelerating the experiment-analysis-theory cycle in large-scale neuroscience ](https://www.sciencedirect.com/science/article/pii/S0959438817302428)
ICCV, 2019

- [Analysis methods for large-scale neuronal recordings](https://www.science.org/doi/full/10.1126/science.adp7429)
Carsen Stringer, Marius Pachitariu  


- [How distributed is the brain-wide network that is recruited for cognition?](https://www.nature.com/articles/s41583-025-00992-5)
- 

### high dimensional data 
- [Spontaneous behaviors drive multidimensional, brainwide activity](https://www.science.org/doi/10.1126/science.aav7893)
Carsen Stringer

- [High-dimensional geometry of population responses in visual cortex](https://www.nature.com/articles/s41586-019-1346-5)
Carsen Stringer

- [Simultaneous, cortex-wide dynamics of up to **1 million neurons** reveal unbounded scaling of dimensionality with neuron number](https://www.sciencedirect.com/science/article/abs/pii/S0896627324001211)

### dimensional reduction
- Phate: [Visualizing structure and transitions in high-dimensional biological data](https://www.nature.com/articles/s41587-019-0336-3)
Phate 

- [LFADS - Latent Factor Analysis via Dynamical Systems](https://arxiv.org/abs/1608.06315)
  

### manifold reconstriction
- [Approximation of Functions on Manifolds in High Dimension from Noisy Scattered Data](https://arxiv.org/abs/2012.13804)
**Manifold Locally Optimal Projection (MLOP)**

- [Manifold Repairing, Reconstruction and Denoising from Scattered Data in High-Dimension](https://arxiv.org/abs/2102.01750)
**Repairing Manifold Locally Optimal Projection (R-MLOP)**

- [Parameterization-free Projection for Geometry Reconstruction](https://www.cs.tau.ac.il/~dcor/articles/2007/Parameterization-free-Projection.pdf)

### activity analysis 
- [Neural signal propagation atlas of Caenorhabditis elegans](https://www.nature.com/articles/s41586-023-06683-4) Andrew M. Leifer

- [Dynamical constraints on neural population activity](https://www.nature.com/articles/s41593-024-01845-7)
Byron M. Yu & Aaron P. Batista

- [Preserved neural dynamics across animals performing similar behaviour](https://www.nature.com/articles/s41586-023-06714-0)

- [Dynamical constraints on neural population activity](https://www.nature.com/articles/s41593-024-01845-7)
Byron M. Yu & Aaron P. Batista 


### head direction
- [Global inhibition in head-direction neural circuits: a systematic comparison between connectome-based spiking neural circuit models](https://link.springer.com/article/10.1007/s00359-023-01615-z)
Ning Chang, Hsuan-Pei Huang & Chung-Chuan Lo (2023)

- [Estimating orientation in natural scenes: A spiking neural network model of the insect central complex](https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1011913)
Rachael Stentiford ,James C. Knight,Thomas Nowotny,Andrew Philippides,Paul Graham 2024

- [From Synapses to Dynamics: Obtaining Function from Structure in a Connectome Constrained Model of the Head Direction Circuit](https://www.biorxiv.org/content/10.1101/2025.05.26.655406v1.abstract)
Sunny Duan, Ling Liang Dong, Ila Fiete, 2025

## encoding and decoding

- [Neural Decoding of Visual Imagery During Sleep](https://www.science.org/doi/10.1126/science.1234330)

- [Locomotion Enhances Neural Encoding of Visual Stimuli in Mouse V1](https://www.jneurosci.org/content/37/14/3764.abstract)

- [Bayesian decoding using unsorted spikes in the rat hippocampus](https://journals.physiology.org/doi/full/10.1152/jn.01046.2012)
Fabian Kloosterman, Stuart P. Layton, Zhe Chen, and Matthew A. Wilson

- [Decoding the brain: From neural representations to mechanistic models](https://www.cell.com/cell/fulltext/S0092-8674(24)00980-2)

- [Hebbian instruction of axonal connectivity by endogenous correlated spontaneous activity](https://www.science.org/doi/10.1126/science.adh7814)


### deep learning method

- NEMO: [In vivo cell-type and brain region classification via multimodal contrastive learning](https://www.biorxiv.org/content/10.1101/2024.11.05.622159v1)

- [EEG2Rep: Enhancing Self-supervised EEG Representation Through Informative Masked Inputs](https://arxiv.org/abs/2402.17772)


- [GUST: Combinatorial Generalization by Unsupervised Grouping with Neuronal Coherence](https://openreview.net/forum?id=90O5cvFZkZ)
NeurIPS 2023 poster

#### fundation model 
- LFADS:[Inferring single-trial neural population dynamics using sequential auto-encoders](https://www.nature.com/articles/s41592-018-0109-9) LFADS [(method part)](https://arxiv.org/abs/1608.06315)

- MtM: [Towards a "Universal Translator" for Neural Dynamics at Single-Cell, Single-Spike Resolution](https://openreview.net/forum?id=nRRJsDahEg)
Yizi, Liam, Cole

- [POYO-1: A Unified, Scalable Framework for Neural Population Decoding](https://poyo-brain.github.io/)

 
#### diffusion model/ visual Stimulus
- [Decoding What People See from Where They Look: Predicting Visual Stimuli from Scanpaths](https://link.springer.com/chapter/10.1007/978-3-642-00582-4_2)

- [Natural scene reconstruction from fMRI signals using generative latent diffusion](https://www.nature.com/articles/s41598-023-42891-8)
Scientific Report, 2023

- [Neural Decoding of Visual Imagery During Sleep](https://www.science.org/doi/10.1126/science.1234330)
Science, 2013

- [Seeing Beyond the Brain: Conditional Diffusion Model with Sparse Masked Modeling for Vision Decoding](https://arxiv.org/abs/2211.06956)
CVPR, 2023



## behavior

- [**LISBET**: a machine learning model for the automatic segmentation of social behavior motifs](https://arxiv.org/abs/2311.04069)


- GLM-HMM: [Unsupervised identification of the internal states that shape natural behavior](https://www.nature.com/articles/s41593-019-0533-x)  
- [Mice alternate between discrete strategies during perceptual decision-making](https://www.nature.com/articles/s41593-021-01007-z)
Jonathan W. Pillow  

- [End-to-end Deep Prototype and Exemplar Models for Predicting Human Behavior](https://arxiv.org/abs/2007.08723)
Thomas L. Griffiths

- [Spatial vision in insects is facilitated by shaping the dynamics of visual input through behavioral action](https://www.frontiersin.org/articles/10.3389/fncir.2012.00108/full)

- [Arithmetic and local circuitry underlying dopamine prediction errors](https://www.nature.com/articles/nature14855)

- [A Neural Substrate of Prediction and Reward](https://www.science.org/doi/10.1126/science.275.5306.1593)

- [Dynamic Inverse Reinforcement Learning for Characterizing Animal Behavior](https://openreview.net/forum?id=nosngu5XwY9)  Zoe Ashwood, Aditi Jha, Jonathan W. Pillow  
NeurIPS 2022 

- [Spontaneous behaviour is structured by reinforcement without explicit reward](https://www.nature.com/articles/s41586-022-05611-2)
Sandeep Robert Datta 
 
- [The spinal premotor network driving scratching flexor and extensor alternation](https://www.biorxiv.org/content/10.1101/2025.01.08.631866v1.abstract)

### oscilation
- [Brain rhythms have come of age](https://www.sciencedirect.com/science/article/pii/S0896627323002143)

### place cell and grid cell 
- [medial entorhinal cortex](https://www.sciencedirect.com/topics/medicine-and-dentistry/medial-entorhinal-cortex)

- [The Tolman-Eichenbaum Machine: Unifying Space and Relational Memory through Generalization in the Hippocampal Formation](https://www.sciencedirect.com/science/article/pii/S009286742031388X)

- [Emergence of robust global modules from local interactions and smooth gradients](https://www.biorxiv.org/content/10.1101/2021.10.28.466284v5)

## vision
- [The limits of color awareness during active, real-world vision](https://www.pnas.org/doi/full/10.1073/pnas.1922294117)
using VR to test the color fade perception

- [A common evolutionary origin for the ON- and OFF-edge motion detection pathways of the Drosophila visual system](https://www.frontiersin.org/articles/10.3389/fncir.2015.00033/full)
Ian A. Meinertzhagen

- [Neuronal circuits integrating visual motion information in Drosophila](https://www.biorxiv.org/content/10.1101/2021.12.20.473513v1)
T4 and T5 neuron

- [Social state alters vision using three circuit mechanisms in Drosophila](https://www.nature.com/articles/s41586-024-08255-6) 
Vanessa Ruta & Gerald M. Rubin 

### drosophila
- [The Neural Substrate of Spectral Preference in Drosophila](https://www.sciencedirect.com/science/article/pii/S0896627308007058)

- [Neuronal circuits integrating visual motion information in Drosophila melanogaster](<https://www.cell.com/current-biology/fulltext/S0960-9822(22)01023-5>)

- [Morphological and functional convergence of visual projection neurons from diverse neurogenic origins in Drosophila](https://www.nature.com/articles/s41467-025-56059-7)

## others
### diffusion model
Diffusion and Score-Based Generative Models by Yang Song, Stanford University
https://www.youtube.com/watch?v=wMmqCMwuM2Q&ab_channel=MITCBMM 
- [Deep Unsupervised Learning using Nonequilibrium Thermodynamics](https://arxiv.org/abs/1503.03585) Surya Ganguli


### ML

- [Logic + Reinforcement Learning + Deep Learning: A Survey](https://www.pure.ed.ac.uk/ws/portalfiles/portal/322711194/Logic_Reinforcement_BUEFF_DOA22122022_AFV_CC_BY.pdf)
Review, 2023

- [Learning explanatory logical rules in non-linear domains: a neuro-symbolic approach](https://link.springer.com/article/10.1007/s10994-024-06538-7)
2024

- [Applying Logical Rules to Reinforcement Learning for Interpretable Knowledge Graph Reasoning](https://ieeexplore.ieee.org/document/10650177)

- [Neural Logic Reinforcement Learning](https://proceedings.mlr.press/v97/jiang19a.html)



### hippocamus
- [Network Dynamics Underlying the Formation of Sparse, Informative Representations in the Hippocampus](https://www.jneurosci.org/content/28/52/14271.short)

- [Sparse and distributed coding of episodic memory in neurons of the human hippocampus](https://www.pnas.org/doi/abs/10.1073/pnas.1408365111)

- [Synaptic properties of newly generated granule cells support sparse coding in the adult hippocampus](https://www.sciencedirect.com/science/article/pii/S0166432819303936)

### gene 


- [HyenaDNA: Long-Range Genomic Sequence Modeling at Single Nucleotide Resolution](https://arxiv.org/abs/2306.15794)   Transformer + gene

- [Synaptic Pruning by Microglia Is Necessary for Normal Brain Development](https://www.science.org/doi/10.1126/science.1202529)

### cognition

#### attention
#### learning and memory
- [How our understanding of memory replay evolves](https://journals.physiology.org/doi/full/10.1152/jn.00454.2022)

#### decision making
- [Bounded Integration in Parietal Cortex Underlies Decisions Even When Viewing Duration Is Dictated by the Environment](https://www.jneurosci.org/content/28/12/3017)

- [Dopamine pathways mediating affective state transitions after sleep loss](https://www.cell.com/neuron/fulltext/S0896-6273(23)00758-4)

### DS & OR
- [Association rule learning](https://en.wikipedia.org/wiki/Association_rule_learning)

#### Quadratic assignment problem
- [quadratic assignment problem](https://en.wikipedia.org/wiki/Quadratic_assignment_problem)

- [Sliced Gromov-Wasserstein](https://arxiv.org/abs/1905.10124)

- [ot.gromov](https://pythonot.github.io/gen_modules/ot.gromov.html#module-ot.gromov)
 Fused Gromov-Wasserstein transport

#### similarity matrix

- [Euclidean Distance Matrices: Essential Theory, Algorithms and Applications](https://arxiv.org/abs/1502.07541)

- [Representational similarity analysis – connecting the branches of systems neuroscience](https://www.frontiersin.org/articles/10.3389/neuro.06.004.2008/full)

- [Euclidean Distance Matrices: Essential Theory, Algorithms and Applications](https://arxiv.org/abs/1502.07541)

- **CCA** [Kernel and nonlinear canonical correlation analysis](https://www.worldscientific.com/doi/abs/10.1142/S012906570000034X)

- [Similarity of Neural Network Representations Revisited](https://arxiv.org/abs/1905.00414)
Simon Kornblith, Mohammad Norouzi, Honglak Lee, Geoffrey Hinton

- [Representational dissimilarity metric spaces for stochastic neural networks](https://arxiv.org/abs/2211.11665)
Lyndon R. Duong, Jingyang Zhou, Josue Nassar, Jules Berman, Jeroen Olieslagers, Alex H. Williams

### ML
- [Inverse Reinforcement Learning with the Average Reward Criterion](https://arxiv.org/abs/2305.14608)

- [Artificial Neural Networks for Neuroscientists: A Primer](https://www.cell.com/neuron/fulltext/S0896-6273(20)30705-4)

- [Attention Is All You Need](https://arxiv.org/abs/1706.03762)
**Transformer**

- [Convolutional LSTM Network: A Machine Learning Approach for Precipitation Nowcasting](https://arxiv.org/abs/1506.04214)
recurrent CNN


#### NAS
- [NAS-Bench-101: Towards Reproducible Neural Architecture Search](https://arxiv.org/abs/1902.09635)
Chris Ying, Aaron Klein, Esteban Real, Eric Christiansen, Kevin Murphy, Frank Hutter

#### CNN kernel
Clustering convolutional kernels

- [Framework for Automatic Selection of Kernels based on Convolutional Neural Networks and CkMeans Clustering Algorithm](https://www.worldscientific.com/doi/epdf/10.1142/S0219467819500190)

- [How convolutional neural network see the world - A survey of convolutional neural network visualization methods](https://arxiv.org/abs/1804.11191)

- [Visualizing and Understanding Convolutional Networks](https://arxiv.org/abs/1311.2901)

### sparse decoding 
- [Identifiable Deep Generative Models via Sparse Decoding](https://arxiv.org/abs/2110.10804)

UFLDL Tutorial
- [Sparse Coding](http://ufldl.stanford.edu/tutorial/unsupervised/SparseCoding/)

- [Sensing Matrix Optimization for Block-Sparse Decoding](https://ieeexplore.ieee.org/abstract/document/5872076)

- [A Tutorial on Decoding Techniques of Sparse Code Multiple Access](https://ieeexplore.ieee.org/abstract/document/9782313)

- [On the iterative decoding of sparse quantum codes](https://arxiv.org/abs/0801.1241)

### others

- [Mapping the developmental structure of stereotyped and individual-unique behavioral spaces in C. elegans](https://www.biorxiv.org/content/10.1101/2024.01.27.577215v1)

- [A sparse semismooth Newton based augmented Lagrangian method for large-scale support vector machines](https://arxiv.org/abs/1910.01312) SVM

- [Vestibular System: The Many Facets of a Multimodal Sense](https://www.annualreviews.org/doi/abs/10.1146/annurev.neuro.31.060407.125555)

- [Spatial modulation of hippocampal activity in freely moving macaques](https://www.sciencedirect.com/science/article/pii/S0896627321007054) 
Dora E. Angelaki

- [How Hubel and Wiesel Revolutionized Neuroscience and Made Me a Neuroscientist](https://www.brains-explained.com/how-hubel-and-wiesel-revolutionized-neuroscience/)
a story

- [Sleep and circadian rhythmicity as entangled processes serving homeostasis](https://www.nature.com/articles/s41583-023-00764-z)

- [Tuned geometries of hippocampal representations meet the computational demands of social memory](https://www.sciencedirect.com/science/article/pii/S0896627324000473)

- [Complex computation from developmental priors](https://www.nature.com/articles/s41467-023-37980-1)

- [A practical guide to linking brain-wide gene expression and neuroimaging data](https://www.sciencedirect.com/science/article/pii/S1053811919300114)
gene

### wiki
- wiki [Non-negative least squares](https://en.wikipedia.org/wiki/Non-negative_least_squares)

- wiki [Kronecker product](https://en.wikipedia.org/wiki/Kronecker_product)

- wiki [F-score](https://en.wikipedia.org/wiki/F-score)

- wiki [Precision_and_recall](https://en.wikipedia.org/wiki/Precision_and_recall)

# TODO
- [Synaptic gradients transform object location to action](https://www.nature.com/articles/s41586-022-05562-8)
S. Lawrence Zipursky & Gwyneth M. Card 
 

- [Whole brain alignment of spatial transcriptomics between humans and mice with BrainAlign](https://www.nature.com/articles/s41467-024-50608-2)

- [Cell2Sentence: Teaching Large Language Models the Language of Biology](https://www.biorxiv.org/content/10.1101/2023.09.11.557287v3)

- [Reversed graph embedding resolves complex single-cell trajectories](https://www.nature.com/articles/nmeth.4402)

- [Slingshot: cell lineage and pseudotime inference for single-cell transcriptomics](https://bmcgenomics.biomedcentral.com/articles/10.1186/s12864-018-4772-0)


- [viewpoint Your Students are Your legacy](https://dl.acm.org/doi/pdf/10.1145/1467247.1467259#page=1.25)



- [The central complex of the larval fruit fly brain](https://www.biorxiv.org/content/10.1101/2025.09.30.679510v1.full.pdf)
- [A data-driven biophysical network model reproduces C. elegans premotor neural dynamics](https://arxiv.org/abs/2501.00278)
- [Synchronization of two non-identical Chialvo neurons](https://arxiv.org/pdf/2404.07783)
- [Christopher Rozell](https://siplab.gatech.edu/people.html) 
- Quantitative understanding of brain activity, the connection between the brain and the body, and the effects of neural stimulation are grand challenges with the potential for enormous societal impact. Simultaneous advances in neural interfacing and data science have created a remarkable opportunity to reshape the way we think about the brain in health and disease 
- [Outlier exposure with confidence control for out-of-distribution detection](https://www.sciencedirect.com/science/article/abs/pii/S0925231221002393)
- [Drosophila as a model system for neurotransmitter measurements](https://pmc.ncbi.nlm.nih.gov/articles/PMC6093779/)
- [Episodic and associative memory from spatial scaffolds in the hippocampus](https://www.nature.com/articles/s41586-024-08392-y)
- [Universality in the Evolution of Orientation Columns in the Visual Cortex](https://www.science.org/doi/10.1126/science.1194869)
- [Mapping Individual Differences in the Topological Landscape of Naturalistic Brain Dynamics](https://www.biorxiv.org/content/10.1101/2024.06.20.599966v1)
- [A synthetic oscillatory network of transcriptional regulators](https://www.nature.com/articles/35002125)
- [The emergence of NeuroAI: bridging neuroscience and artificial intelligence](https://www.nature.com/articles/s41583-025-00954-x)
- [Dimensionality reduction simplifies synaptic partner matching in an olfactory circuit](https://www.science.org/doi/abs/10.1126/science.ads7633)
- [Enhanced whole-brain calcium imaging and cell identification in C. elegans reveal AWCOFF neuronal responses to 2-nonanone](https://link.springer.com/article/10.1007/s12038-025-00518-2)
- [Aligning Neural Population Patterns Facilitates Motor Learning Transfer](https://www.biorxiv.org/content/biorxiv/early/2025/05/21/2025.05.16.654614.1.full.pdf)

- [Denoising Diffusion Probabilistic Models](https://arxiv.org/pdf/2006.11239) 
- [Reverse Diffusion Sequential Monte Carlo Samplers](https://arxiv.org/pdf/2508.05926) 
- [STATE-SWITCHING NAVIGATION STRATEGIES IN C. elegans ARE BENEFICIAL FOR CHEMOTAXIS](https://arxiv.org/pdf/2508.00191)
