
# data
- [Infrequent strong connections constrain connectomic predictions of neuronal function](https://www.cell.com/cell/fulltext/S0092-8674(25)00518-5)
Timothy A. Currier, Thomas R. Clandinin


Raw imaging data, relevant connectome data, and partially processed visual responses for all 571 ROIs are available on Dryad:
https://datadryad.org/dataset/doi:10.5061/dryad.pg4f4qs1j  
https://datadryad.org/dataset/doi:10.5061/dryad.bnzs7h4ns
https://datadryad.org/dataset/doi:10.5061/dryad.kh18932k1  



## modeling -- dynamics system & Ripple 

[connectome inspired neural network](<connectome inspired neural network.md>)    
html [connectome inspired neural network](https://lengyuner.github.io/blog/connectome%20inspired%20neural%20network.html)

-[A model of a CA3 hippocampal pyramidal neuron incorporating voltage-clamp data on intrinsic conductances](https://journals.physiology.org/doi/abs/10.1152/jn.1991.66.2.635)
R. D. Traub,R. K. Wong,R. Miles, andH. Michelson, 1991
- [Intrinsic and network rhythmogenesis in a reduced traub model for CA3 neurons](https://link.springer.com/article/10.1007/BF00962717)
Paul F. Pinsky & John Rinzel, 1994
- [A **two compartment model** of a CA1 pyramidal neuron](https://www.math.uwaterloo.ca/~sacampbe/preprints/FergusonCampbell_CAMQ2009.pdf)
One compartment represents the soma and proximal dendrites, while the second represents the distal dendrites.

- **Hodgkin-Huxley Model**
- **Multi-Compartmental Model of a Purkinje Cell**


- [A Multi-Compartment Model for Interneurons in the Dorsal Lateral Geniculate Nucleus](https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1002160#s2)
Geir Halnes ,Sigita Augustinaite,Paul Heggelund,Gaute T. Einevoll,Michele Migliore, 2011, Plos Comp bio

GABAergic interneurons (INs) in the dorsal lateral geniculate nucleus (dLGN) 

- [An integrative data-driven model simulating **C. elegans** brain, body and environment interactions](https://www.nature.com/articles/s43588-024-00738-w)

Soma compartments and neurite compartments 

### Spiking neural network
- [Exploring Loss Functions for Time-based Training Strategy in Spiking Neural Networks](https://openreview.net/pdf?id=8IvW2k5VeA)


### single neuron dynamics
- [Learning by the Dendritic Prediction of Somatic Spiking](<https://www.cell.com/neuron/fulltext/S0896-6273(13)01127-6>)  
Robert Urbanczik, Walter Senn, 2014, Neuron

$$
\dot{U}=-g_{\mathrm{L}} U+g_{\mathrm{D}}\left(V_{\mathbf{w}}-U\right)+I_U^{\text {som }} \\
I_U^{\text {som }}(t)=g_{\mathrm{E}}(t)\left(E_{\mathrm{E}}-U\right)+g_{\mathrm{I}}(t)\left(E_{\mathrm{I}}-U\right) .
$$

- [Sparse bursts optimize information transmission in a multiplexed neural code](https://www.pnas.org/doi/full/10.1073/pnas.1720995115)  
Richard Naud, Henning Sprekeler
$$
\begin{gathered}
\frac{d}{d t} u_i^{(x)}=-\frac{u_i^{(x)}-E_L}{\tau_x}+\frac{g_x f\left(u_i^{(d)}\right)+c_x K\left(t-\hat{t}_i^{(s)}\right)+I_i^{(x)}+w_i^{(x)}}{C_x} \\
\frac{d}{d t} w_i^{(x)}=-w_i^{(x)} / \tau_w^{(x)}+a_w^{(x)}\left(u_i^{(x)}-E_L\right) / \tau_w^{(x)}+b_w^{(x)} S_i^{(x)},
\end{gathered}
$$

<!-- senn 2014 neuron
multiplex -->



- [Impact of dendritic size and dendritic topology on burst firing in pyramidal cells](https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1000781)
E. van, A. J. Ronald and A. Ooyen,PLoS Comput. Biol., 2010   
Morphologically simplified cells, the set of 23 neurons

- [Distinguishing theoretical synaptic potentials computed for different soma-dendritic distributions of synaptic input](https://journals.physiology.org/doi/abs/10.1152/jn.1967.30.5.1138)
W. Rall, J. Neurophysiol., 1967

- [Models of Neocortical Layer 5b Pyramidal Cells Capturing a Wide Range of Dendritic and Perisomatic Active Properties
](https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1002107)
Etay Hay ,Sean Hill,Felix Schürmann,Henry Markram,Idan Segev


![Models constrained only by BAC firing may fail to respond properly to perisomatic step current.|200pt](https://journals.plos.org/ploscompbiol/article/figure/image?size=large&id=10.1371/journal.pcbi.1002107.g001)



#### HH model

Hodgkin & Huxley 1952

### LIF

- [Neuronal Spike Timing Adaptation Described with a **Fractional Leaky Integrate-and-Fire Model**](https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1003526)

- [Generalized leaky integrate-and-fire models classify multiple neuron types](https://www.nature.com/articles/s41467-017-02717-4)
- [Linear leaky-integrate-and-fire neuron model based spiking neural networks and its mapping relationship to deep neural networks](https://www.frontiersin.org/journals/neuroscience/articles/10.3389/fnins.2022.857513/full)

**GLIF model**
<!-- - [Generalized leaky integrate-and-fire models classify multiple neuron types](https://www.nature.com/articles/s41467-017-02717-4) -->

- [Generalized leaky integrate-and-fire models classify multiple neuron types](https://www.nature.com/articles/s41467-017-02717-4)
Corinne Teeter, Ramakrishnan Iyer, Vilas Menon, Nathan Gouwens, David Feng, Jim Berg, Aaron Szafer, Nicholas Cain, Hongkui Zeng, Michael Hawrylycz, Christof Koch & Stefan Mihalas, 2018, Nature Communications  


- [An Adaptive Generalized Leaky Integrate-and-Fire Model for Hippocampal CA1 Pyramidal Neurons and Interneurons](https://link.springer.com/article/10.1007/s11538-023-01206-8)
2023

- [The Fractional order Leaky Integrate-and-Fire Model: Fractional differentiation-spiking properties](https://www.sciencedirect.com/science/article/pii/S0893608017301107)
Neural Networks, 2017 


### synapse
- [A role for NMDA-receptor channels in working memory](https://www.nature.com/articles/nn0898_273)
Xiao-Jing Wang,1998
- [Distinguishing theoretical synaptic potentials computed for different soma-dendritic distributions of synaptic input](https://journals.physiology.org/doi/abs/10.1152/jn.1967.30.5.1138) Wilfrid Rall, 1967
- [The Contribution of AMPA and NMDA Receptors to Persistent Firing in the Dorsolateral Prefrontal Cortex in Working Memory](https://www.jneurosci.org/content/40/12/2458) J Neurosci, 2020
-[Synaptic AMPA Receptor Plasticity and Behavior](<https://www.cell.com/neuron/fulltext/S0896-6273(09)00082-8>) neuron, review, 2009

- [Dendritic computations captured by an effective point neuron model](https://www.pnas.org/doi/full/10.1073/pnas.1904463116)
Songting Li, Nan Liu, Xiaohui Zhang, David W. McLaughlin, Douglas Zhou, and David Cai, 2019, PNAS 

We derive an effective point neuron model, which incorporates an additional synaptic integration current arising from the nonlinear interaction between synaptic currents across spatial dendrites. 

We then derive a form of synaptic integration current within the point neuron framework to capture dendritic effects.


- [**Global and Multiplexed Dendritic Computations under In Vivo-like Conditions**](https://www.cell.com/neuron/fulltext/S0896-6273(18)30737-2)
Ujfalussy et al., 2018  
Balázs B. Ujfalussy, Judit K. Makara, Máté Lengyel, Tiago Branco 
[Tiago Branco](https://scholar.google.com/citations?hl=en&user=PJ7kIFMAAAAJ)

hLN


- [Voltage compartmentalization in dendritic spines in vivo](https://www.science.org/doi/10.1126/science.abg0501)
Victor Hugo Cornejo, Netanel Ofer, Rafael Yuste,  2021, Science

### experiment support

- [Rethinking Single Neuron Electrical Compartmentalization: Dendritic Contributions to Network Computation In Vivo](https://www.sciencedirect.com/science/article/pii/S0306452221002852)  
Review; Valerio Francioni, Mark T. Harnett, 2022, Neuroscience

multiple recent studies indicate that dendritic activity in vivo is much less compartmentalized than what was previously hypothesized (Xu et al., 2012, Beaulieu-Laroche et al., 2019, Francioni et al., 2019, Kerlin et al., 2019, Voigts and Harnett, 2019).

The first demonstrated that somatic voltage fluctuations under an in vivo-like synaptic regime are well described by a global dendritic nonlinearity that can capture up to 90% of explained variance (Ujfalussy et al., 2018).

A general problem of hierarchical systems like the cortex is that computational units must encode both ascending (bottom-up) and descending (top-down) information simultaneously, possibly even routing specific information to different target units. Recent theoretical models suggest that L2/3 and L5 pyramidal neurons can multiplex bottom-up and top-down information into a single output stream in the form of simple and burst spiking, respectively (Naud and Sprekeler, 2018, Ujfalussy et al., 2018, Payeur, et al., 2020) 

- [The quest for multiscale brain modeling](https://www.cell.com/trends/neurosciences/fulltext/S0166-2236(22)00125-4)
Egidio D’Angelo， Viktor Jirsa， 2022， 

- [Illuminating dendritic function with computational models](https://www.nature.com/articles/s41583-020-0301-7)
Panayiota Poirazi & Athanasia Papoutsi, 2020, Nature Reviews Neuroscience


- [Introducing the Dendrify framework for incorporating dendrites to spiking neural networks](https://www.nature.com/articles/s41467-022-35747-8)

Michalis Pagkalos, Spyridon Chavlis & Panayiota Poirazi, 2023, Nature Communications 


- [Dendritic integration: 60 years of progress](https://www.nature.com/articles/nn.4157)
Greg J Stuart & Nelson Spruston, 2015, Nature Neuroscience 


- [Dendritic Excitability and Synaptic Plasticity In Vitro and In Vivo](https://www.sciencedirect.com/science/article/pii/S0306452221006722)
Review, Kevin C. Gonzalez, Attila Losonczy, Adrian Negrean, 2022


- [Systematic Integration of Structural and Functional Data into Multi-scale Models of Mouse Primary Visual Cortex](https://www.sciencedirect.com/science/article/pii/S0896627320300672)  
Yazan N. Billeh,.., Anton Arkhipov, 2020, Neuron
Two network models of the mouse primary visual cortex are developed and released  
One uses compartmental-neuron models and the other point-neuron models

- [Systematic generation of biophysically detailed models for diverse cortical neuron types](https://www.nature.com/articles/s41467-017-02718-3)
Nathan W. Gouwens, Jim Berg, David Feng, Staci A. Sorensen, Hongkui Zeng, Michael J. Hawrylycz, Christof Koch & Anton Arkhipov, 2018, Nature Communications  

To address this challenge, several studies have described automated parameter fitting approaches with multicompartment conductance-based models9,10,11,12,13,14,15,16,17.


### Multicompartment Hodgkin-Huxley model
- [Real-time **multicompartment Hodgkin-Huxley** neuron emulation on SoC FPGA](https://www.frontiersin.org/journals/neuroscience/articles/10.3389/fnins.2024.1457774/full)

- [Multi-compartmental Models of Neurons](https://link.springer.com/chapter/10.1007/978-94-007-3858-4_7)
- [The impact of Hodgkin–Huxley models on dendritic research](https://physoc.onlinelibrary.wiley.com/doi/full/10.1113/JP282756)

### tool
- **Jaxley**: [Differentiable simulation enables large-scale training of detailed biophysical models of neural dynamics](https://www.biorxiv.org/content/10.1101/2024.08.21.608979v2)   [jaxley_experiments](https://github.com/mackelab/jaxley_experiments)

- [Differentiable simulation enables large-scale training of detailed biophysical models of neural dynamics](https://www.biorxiv.org/content/10.1101/2024.08.21.608979v2)

Tool for neuron dynamics simulation (like brian2, spikingjelly)  
- [NEURON](https://nrn.readthedocs.io/en/latest/install/install_instructions.html#windows)
- [BrainPy](https://brainpy.readthedocs.io/en/latest/quickstart/simulation.html)


- [neuron morphology](https://neuron-morphology.readthedocs.io/en/latest/index.html)
is an open-source Python package for working with single-neuron morphological reconstruction data, such as those in the Allen Cell Types Database.

- [A GPU-based computational framework that bridges neuron simulation and artificial intelligence](https://www.nature.com/articles/s41467-023-41553-7)

- [A Python toolbox for neural circuit parameter inference](https://www.nature.com/articles/s41540-025-00527-9)
2025, npj Systems Biology and Applications 


- [Model Concept: Rebound firing](https://modeldb.science/ModelList/136252)
ModelDB 

### review
- [Modeling Single-Neuron Dynamics and Computations: A Balance of Detail and Abstraction](https://www.science.org/doi/10.1126/science.1127240)
4 levels models - review 2006

- [Dynamics of compartmental model neurons](https://www.sciencedirect.com/science/article/abs/pii/S0893608005801649)

- [What Is the Most Realistic Single-Compartment Model of Spike Initiation?](https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1004114) 

- [深度复盘：AI 与脑科学的错位](https://yuanzhuo.bnu.edu.cn/article/745)
- [大脑精细模拟重塑 NeuroAI 范式](https://swarma.org/?p=55123)
- [A GPU-based computational framework that bridges neuron simulation and artificial intelligence](https://www.nature.com/articles/s41467-023-41553-7)

**temporal inhibition**  
**timing-dependent inhibition**


- [An arithmetic rule for **spatial summation of excitatory and inhibitory inputs** in pyramidal neurons](https://www.pnas.org/doi/full/10.1073/pnas.0912022106)
Xiaohui Zhang, bnu, 2009, PNAS

modeling:
- [Dendritic computations captured by an effective point neuron model](https://www.bilibili.com/video/BV1S64y117m9)
Songting Li, 2019, PNAS

