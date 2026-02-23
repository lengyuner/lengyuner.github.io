
# Ripple
## data

- [Infrequent strong connections constrain connectomic predictions of neuronal function](https://www.cell.com/cell/fulltext/S0092-8674(25)00518-5)
Timothy A. Currier, Thomas R. Clandinin


Raw imaging data, relevant connectome data, and partially processed visual responses for all 571 ROIs are available on Dryad:
https://datadryad.org/dataset/doi:10.5061/dryad.pg4f4qs1j  
https://datadryad.org/dataset/doi:10.5061/dryad.bnzs7h4ns
https://datadryad.org/dataset/doi:10.5061/dryad.kh18932k1  


### The MICrONS Project
https://www.nature.com/collections/bdigiaicbd

The MICrONS Project set out to create a massively dense reconstruction of the **structural connections and functions** of an entire millimeter volume of **mouse visual cortex**, along with new artificial intelligence-driven tools.



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

### Spiking neural network, SNN
- [Exploring Loss Functions for Time-based Training Strategy in Spiking Neural Networks](https://openreview.net/pdf?id=8IvW2k5VeA)


### single neuron dynamics

modeling:
- [Dendritic computations captured by an effective point neuron model](https://www.bilibili.com/video/BV1S64y117m9)
Songting Li, 2019, PNAS

- [An arithmetic rule for **spatial summation of excitatory and inhibitory inputs** in pyramidal neurons](https://www.pnas.org/doi/full/10.1073/pnas.0912022106)
Xiaohui Zhang, bnu, 2009, PNAS




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

<!-- senn 2014 neuron multiplex -->



- [Impact of dendritic size and dendritic topology on burst firing in pyramidal cells](https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1000781)
E. van, A. J. Ronald and A. Ooyen,PLoS Comput. Biol., 2010    
Morphologically simplified cells, the set of 23 neurons

- [Distinguishing theoretical synaptic potentials computed for different soma-dendritic distributions of synaptic input](https://journals.physiology.org/doi/abs/10.1152/jn.1967.30.5.1138)
W. Rall, J. Neurophysiol., 1967

- [Models of Neocortical Layer 5b Pyramidal Cells Capturing a Wide Range of Dendritic and Perisomatic Active Properties](https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1002107)
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

- [A computational framework linking synaptic adaptation to circuit behaviors in the early visual system](https://www.biorxiv.org/content/10.1101/2022.08.27.505287v1)

- [**Global and Multiplexed Dendritic Computations under In Vivo-like Conditions**](https://www.cell.com/neuron/fulltext/S0896-6273(18)30737-2)
Ujfalussy et al., 2018  
Balázs B. Ujfalussy, Judit K. Makara, Máté Lengyel, Tiago Branco 
[Tiago Branco](https://scholar.google.com/citations?hl=en&user=PJ7kIFMAAAAJ)

hLN


- [Dendritic Morphology Affects the Velocity and Amplitude of Back-propagating Action Potentials](https://link.springer.com/article/10.1007/s12264-022-00931-9)
Wu Tian, Luxin Peng, Mengdi Zhao, Louis Tao, Peng Zou & Yan Zhang, 2022, Neuroscience Bulletin
By taking advantage of Optopatch, an all-optical electrophysiological method, we made detailed recordings of the real-time propagation of bpAPs in dendritic trees.   
In addition, when bpAPs passed through a dendritic branch point, their velocity decreased significantly.

- [**Voltage compartmentalization in dendritic spines in vivo**](https://www.science.org/doi/10.1126/science.abg0501)
Victor Hugo Cornejo, Netanel Ofer, Rafael Yuste,  2021, Science

dentrits level voltage recording for in vivo


- [Cell-type–specific inhibition of the dendritic plateau potential in striatal spiny projection neurons](https://www.pnas.org/doi/abs/10.1073/pnas.1704893114)
Kai Du, ..., Jeanette Hellgren Kotaleski, 2017, PNAS 





### Blue Brain Project
Reconstruction and Simulation of Neocortical Microcircuitry 

### experiment support
- [**Voltage compartmentalization in dendritic spines in vivo**](https://www.science.org/doi/10.1126/science.abg0501)
Victor Hugo Cornejo, Netanel Ofer, Rafael Yuste,  2021, Science
dentrits level voltage recording for in vivo

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

To address this challenge, several studies have described automated parameter fitting approaches with multicompartment conductance-based models 9,10,11,12,13,14,15,16,17.


#### Multicompartment Hodgkin-Huxley model
- [Real-time **multicompartment Hodgkin-Huxley** neuron emulation on SoC FPGA](https://www.frontiersin.org/journals/neuroscience/articles/10.3389/fnins.2024.1457774/full)

- [Multi-compartmental Models of Neurons](https://link.springer.com/chapter/10.1007/978-94-007-3858-4_7)
- Chapter,  First Online: 01 January 2012
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





## parameter optimization
[parameter optimization methods](parameter_optimization_methods.md)


## review
- [Modeling Small Networks]
L F Abbott, Eve Marder, 1998

Modeling small networks. Methods in Neuronal Modeling: From Ions to Networks, Second Edition.

- [Modeling Single-Neuron Dynamics and Computations: A Balance of Detail and Abstraction](https://www.science.org/doi/10.1126/science.1127240)
4 levels models - review 2006

- [Dynamics of compartmental model neurons](https://www.sciencedirect.com/science/article/abs/pii/S0893608005801649)

- [What Is the Most Realistic Single-Compartment Model of Spike Initiation?](https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1004114) 

- [深度复盘：AI 与脑科学的错位](https://yuanzhuo.bnu.edu.cn/article/745)
- [大脑精细模拟重塑 NeuroAI 范式](https://swarma.org/?p=55123)
- [A GPU-based computational framework that bridges neuron simulation and artificial intelligence](https://www.nature.com/articles/s41467-023-41553-7)

**temporal inhibition**  
**timing-dependent inhibition**




## others
Jun 2017 Nature Neuropixels: DOI 10.1038/nature24636
Chen 2013 Nature GCaMP6: DOI 10.1038/nature12354
Logothetis 2008 Nature fMRI综述: DOI 10.1038/nature06976
Hardie 1989 Nature（组胺Cl−通道）: DOI 10.1038/339704a0
Haag 2017 eLife（T4/T5共同方向调谐）: DOI 10.7554/eLife.29044
Gruntman 2019 eLife（OFF通路）: DOI 10.7554/eLife.50706
下面这些需要从官方页精准确认（卷期页码/DOI或作者全名单），否则我不会改，以避免误引：
### Lappalainen 2024 Nature（Connectome-constrained networks…）
Connectome-constrained networks predict neural activity across the fly visual system
Janne K Lappalainen 1 2 3, Fabian D Tschopp 3, Sridhama Prakhya 3, Mason McGill 3 4, Aljoscha Nern 3, Kazunori Shinomiya 3, Shin-Ya Takemura 3, Eyal Gruntman 3 5, Jakob H Macke 1 2 6, Srinivas C Turaga 7
Affiliations Expand
PMID: 39261740 PMCID: PMC11525180 DOI: 10.1038/s41586-024-07939-3


### Cowley 2024 Nature（Mapping model units…）
Nature
. 2024 May;629(8014):1100-1108. doi: 10.1038/s41586-024-07451-8. Epub 2024 May 22.
Mapping model units to visual neurons reveals population code for social behaviour
Benjamin R Cowley 1 2, Adam J Calhoun 3, Nivedita Rangarajan 3, Elise Ireland 3, Maxwell H Turner 4, Jonathan W Pillow 3, Mala Murthy 5
Affiliations Expand
PMID: 38778103 PMCID: PMC11136655 DOI: 10.1038/s41586-024-07451-8

### Schlegel 2024 Nature（Whole-brain annotation…）
Whole-brain annotation and multi-connectome cell typing of Drosophila
Philipp Schlegel 1 2, Yijie Yin 2, Alexander S Bates 1 3 4, Sven Dorkenwald 5 6, Katharina Eichler 2, Paul Brooks 2, Daniel S Han 1 7, Marina Gkantia 2, Marcia Dos Santos 2, Eva J Munnelly 2, Griffin Badalamente 2, Laia Serratosa Capdevila 2, Varun A Sane 2, Alexandra M C Fragniere 2, Ladann Kiassat 2, Markus W Pleijzier 1, Tomke Stürner 1 2, Imaan F M Tamimi 2, Christopher R Dunne 2, Irene Salgarella 2, Alexandre Javier 2, Siqi Fang 2, Eric Perlman 8, Tom Kazimiers 9, Sridhar R Jagannathan 2, Arie Matsliah 6, Amy R Sterling 6 10, Szi-Chieh Yu 6, Claire E McKellar 6; FlyWire Consortium; Marta Costa 2, H Sebastian Seung 5 6, Mala Murthy 6, Volker Hartenstein 11, Davi D Bock 12, Gregory S X E Jefferis 13 14
Collaborators, Affiliations Expand
PMID: 39358521 PMCID: PMC11446831 DOI: 10.1038/s41586-024-07686-5


### Eschbach 2024 Nature（A Drosophila computational brain model…）
A Drosophila computational brain model reveals sensorimotor processing
Philip K Shiu 1 2, Gabriella R Sterne 3 4, Nico Spiller 5, Romain Franconville 6, Andrea Sandoval 3, Joie Zhou 3, Neha Simha 3, Chan Hyuk Kang 7, Seongbong Yu 7, Jinseop S Kim 7, Sven Dorkenwald 8 9, Arie Matsliah 8, Philipp Schlegel 10 11, Szi-Chieh Yu 8, Claire E McKellar 8, Amy Sterling 8, Marta Costa 10, Katharina Eichler 9, Alexander Shakeel Bates 11 12 13, Nils Eckstein 6, Jan Funke 6, Gregory S X E Jefferis 10 11, Mala Murthy 8, Salil S Bidaye 5, Stefanie Hampel 14, Andrew M Seeds 14, Kristin Scott 3
Affiliations Expand
PMID: 39358519 PMCID: PMC11446845 DOI: 10.1038/s41586-024-07763-9

### MICrONS 2025 Nature（Functional connectomics spanning multiple areas…）
Functional connectomics spanning multiple areas of mouse visual cortex
MICrONS Consortium
Collaborators Expand
PMID: 40205214 PMCID: PMC11981939 DOI: 10.1038/s41586-025-08790-w

### Seung 2024 Nature（Predicting visual function…）
Predicting visual function by interpreting a neuronal wiring diagram
H Sebastian Seung 1
Affiliations Expand
PMID: 39358524 PMCID: PMC11446822 DOI: 10.1038/s41586-024-07953-5


### Groschner 2022 Nature（single neuron multiplication）
A biophysical account of multiplication by a single neuron
Lukas N Groschner # 1, Jonatan G Malis # 2, Birte Zuidinga 2, Alexander Borst 3
Affiliations Expand
PMID: 35197635 PMCID: PMC8891015 DOI: 10.1038/s41586-022-04428-3

### Billeh 2020 Neuron（Allen V1）
Systematic Integration of Structural and Functional Data into Multi-scale Models of Mouse Primary Visual Cortex
Yazan N Billeh 1, Binghuang Cai 2, Sergey L Gratiy 2, Kael Dai 2, Ramakrishnan Iyer 2, Nathan W Gouwens 2, Reza Abbasi-Asl 3, Xiaoxuan Jia 2, Joshua H Siegle 2, Shawn R Olsen 2, Christof Koch 2, Stefan Mihalas 2, Anton Arkhipov 4
Affiliations Expand
PMID: 32142648 DOI: 10.1016/j.neuron.2020.01.040

### Deistler 2024 bioRxiv（Jaxley）
Jaxley: Differentiable simulation enables large-scale training of detailed biophysical models of neural dynamics
 View ORCID ProfileMichael Deistler,  View ORCID ProfileKyra L. Kadhim,  View ORCID ProfileMatthijs Pals,  View ORCID ProfileJonas Beck,  View ORCID ProfileZiwei Huang,  View ORCID ProfileManuel Gloeckler,  View ORCID ProfileJanne K. Lappalainen,  View ORCID ProfileCornelius Schröder,  View ORCID ProfilePhilipp Berens,  View ORCID ProfilePedro J. Gonçalves,  View ORCID ProfileJakob H. Macke
doi: https://doi.org/10.1101/2024.08.21.608979

### jun2017neuropixels
Fully integrated silicon probes for high-density recording of neural activity
James J Jun 1, Nicholas A Steinmetz 2 3 4, Joshua H Siegle 5, Daniel J Denman 5, Marius Bauza 6 7, Brian Barbarits 1, Albert K Lee 1, Costas A Anastassiou 5 8, Alexandru Andrei 9, Çağatay Aydın 10 11, Mladen Barbic 1, Timothy J Blanche 5 12, Vincent Bonin 9 10 11 13, João Couto 10 11, Barundeb Dutta 9, Sergey L Gratiy 5, Diego A Gutnisky 1, Michael Häusser 3 14, Bill Karsh 1, Peter Ledochowitsch 5, Carolina Mora Lopez 9, Catalin Mitelut 5 8, Silke Musa 9, Michael Okun 2 3 15, Marius Pachitariu 2 3, Jan Putzeys 9, P Dylan Rich 1, Cyrille Rossant 2 3, Wei-Lung Sun 1, Karel Svoboda 1, Matteo Carandini 4, Kenneth D Harris 2 3, Christof Koch 5, John O'Keefe 6 7, Timothy D Harris 1
Affiliations Expand
PMID: 29120427 PMCID: PMC5955206 DOI: 10.1038/nature24636


### billeh2020systematic
Systematic Integration of Structural and Functional Data into Multi-scale Models of Mouse Primary Visual Cortex
Yazan N Billeh 1, Binghuang Cai 2, Sergey L Gratiy 2, Kael Dai 2, Ramakrishnan Iyer 2, Nathan W Gouwens 2, Reza Abbasi-Asl 3, Xiaoxuan Jia 2, Joshua H Siegle 2, Shawn R Olsen 2, Christof Koch 2, Stefan Mihalas 2, Anton Arkhipov 4
Affiliations Expand
PMID: 32142648 DOI: 10.1016/j.neuron.2020.01.040

### eschbach2024drosophila
Circuits for integrating learned and innate valences in the insect brain
Claire Eschbach # 1 2 3, Akira Fushiki # 1 4, Michael Winding 1 2 3, Bruno Afonso 1, Ingrid V Andrade 1 5, Benjamin T Cocanougher 1 3, Katharina Eichler 1 3, Ruben Gepner 6, Guangwei Si 7 8, Javier Valdes-Aleman 1 3 5, Richard D Fetter 1, Marc Gershow 6 9 10, Gregory Sxe Jefferis 2 3, Aravinthan Dt Samuel 7 8, James W Truman 1 11, Albert Cardona 1 2 12, Marta Zlatic 1 2 3
Affiliations Expand
PMID: 34755599 PMCID: PMC8616581 DOI: 10.7554/eLife.62567

### deistler2024differentiable
Jaxley: Differentiable simulation enables large-scale training of detailed biophysical models of neural dynamics
 View ORCID ProfileMichael Deistler,  View ORCID ProfileKyra L. Kadhim,  View ORCID ProfileMatthijs Pals,  View ORCID ProfileJonas Beck,  View ORCID ProfileZiwei Huang,  View ORCID ProfileManuel Gloeckler,  View ORCID ProfileJanne K. Lappalainen,  View ORCID ProfileCornelius Schröder,  View ORCID ProfilePhilipp Berens,  View ORCID ProfilePedro J. Gonçalves,  View ORCID ProfileJakob H. Macke
doi: https://doi.org/10.1101/2024.08.21.608979  

