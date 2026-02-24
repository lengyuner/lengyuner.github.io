如果空间位置改变，但是突触连接不变，那么neuron本身的形态就一定需要改变。
但是某些neuron，它的功能是和结构强相关的，比如视觉系统中的一些neuron: T4/T5，它们的样子类似于砍掉一半的树，用来整合物体边缘的运动方向。
如果改变了这些neuron的形态，那它自然就没办法执行原有的功能。

-----------------原回答2024.12⬆️-----------------
-----------------更新于2025.08⬇️-----------------

时隔半年，还能经常在timeline上看到这个问题，来重新思考更详细回答一下。
这个问题其实涉及到神经科学一个非常本质的问题，就是大脑中神经元网络，以及单个神经元到底是依靠什么执行独特功能的。
我们可以从大到小把现有的一些因素列举一下，然后逐一分析：
neuron level: neuron之间的连接，这里包括neurotransmitter，和对应的receptor种类。
synapse level: neuron内部的morphology，主要包括，synapse spatial location，以及如何整合不同branch的点位信息。
离子level: neuron的ion channel，不同的离子浓度（Na K Cl Ca Mg），同一种neurotransmitter对应的不同receptor的空间分布。

这些信息又可以重新分类为，
neurotransmitter和离子浓度变化，在synapse中以及neuron的不同branch之间相互作用，表现为neuron电位的变化。
不同neuron的电位变化，又有不同的firing pattern和firing rate，最后在population level表现出了对不同刺激有不同的反应。
对于后者，我们现在有的技术已经可以很好的记录。但是对于前者，in vivo的实验数据都很少。对于单个神经元，我们依然没办法很好的记录到各种需要的数据。

 
 

<!-- 和Artificial Neural Network有很大的不同的一点是，ANN通常不显式建模突触电流动力学和膜电导的时间过程；而在生物神经网络中，时间维度至关重要。 -->

和Artificial Neural Network有很大的不同的一点是，ANN是不需要考虑时间信息的，但是在brain中，时间非常重要。
不同neurotransmitter和 receptor 的时间差异很大：例如ACh的nAChRs receptor 为快速离子型（上升约1 ms、衰减数到十余ms），mAChRs型为慢速代谢型（100 ms到秒级）；Glutamate介导的AMPA receptor 电流上升0.2–1 ms、衰减2–10 ms，NMDA receptor 上升2–10 ms、衰减50–200 ms；抑制性GABA_A为快（约1–10 ms），GABA_B为慢（约100 ms–秒级）。

 
<!-- 如果一个神经元（或者一个brunch）先受到inhibitory的刺激，那么再接受excitatory的刺激，可能就不会再fire了。但是反过来，inh可能无法阻止exc的刺激，只能减弱一些电位。
同时，synapse在空间上的分布也会产生不同的结果，inh和exc靠近soma的前后顺序不同，会对最后结果产生一个二阶交叉项的的不同。
refer：'Dendritic computations captured by an effective point neuron model'
此时，来自presynapse neuron的neurotransmitter的时间就非常重要了，Ach会有1-10ms的延迟，Glu的两种主要receptor， AMPA和NMDA，分别有10-30，20-200ms的delay。
电位在dentries上的传导时间，如果只是5um，那只会导致不到1ms的delay，但是对于更大的neuron，长达100um（drosophila）1000um（human），尽管axon的传导速度会提高十倍，那此时也会有100ms的delay。
此时 -->
 
<!-- =============== -->
与此同时，电位在树突上的被动传播延时通常很小：例如5um路径的延时可忽略（<0.05ms）；100um一般<1ms；而1mm（人类大型神经元可见）多为1–10ms量级。
<!-- 相比之下，axon传导更快，但这里讨论的是树突内的局部传播，不应达到~100ms的量级。 -->

尽管这个时间相对于synapse来说可能非常短，但是这个时间尺度，已经能够影响神经元的计算了。

如果一个neuron（或者其中一个 branch）先受到抑制性输入，再在一个时间窗内接受兴奋性输入，shunting inhibition 会显著减小 EPSP 并可能阻止放电；若兴奋先到，随后到来的抑制更像truncation 或 compression of the spike，是否放电取决于时间窗与电导大小（大概几ms）。

另外，抑制解除可触发post-inhibitory rebound：由于T型Ca2+或Ih去失活等机制，抑制撤去后即可出现 rebound 去极化，甚至无需同时的兴奋也可能诱发 firing。

同时，synapse 在树突上的空间分布会产生非线性整合：例如靠近soma与在分叉点上的兴奋抑制输入时序不同，会导致不同的整合结果；局部 NMDA spikes 与树突 subunit 的非线性可显著改变远端输入对soma的影响。

这些精准的时间和空间信息，给神经元的计算带来了更多的复杂度。  
从传统的population encoding/decoding，到single neuron computation，再到dendritic computation。  
我们仍不知道这些更加细节的计算，能够给最终的信息传递过程带来什么样的影响。  
在一个复杂系统中，对初始值的微小扰动，可能会对结果产生特别大的影响，如果系统是robust的，那这些扰动可能对最终结果并没有太大的影响。
比如对于同一个刺激，在不同trial中，neuron的反应是不一样的，但是最后在population的层面，或者behavior的角度，这些刺激的结果又是一样的。

最后，如果非要把不同层级的信息整合起来，大概是这样的：
Ion channel → Synapse → Compartment → Neuron → Microcircuit → Network → Whole brain → Observables

我们至今还缺少一个好的工具来整个这些不同层次的信息，这也是目前从结构到功能的最大的障碍。



Li, S., Liu, N., Zhang, X., McLaughlin, D.W., Zhou, D. and Cai, D., 2019. [Dendritic computations captured by an effective point neuron model](https://www.pnas.org/doi/10.1073/pnas.1904463116). Proceedings of the National Academy of Sciences, 116(30), pp.15244-15252.   
Kleppe, I.C. and Robinson, H.P., 1999. [Determining the activation time course of synaptic AMPA receptors from openings of colocalized NMDA receptors](https://www.sciencedirect.com/science/article/pii/S0006349599769900). Biophysical Journal, 77(3), pp.1418-1427.

<!-- refer：'Dendritic computations captured by an effective point neuron model' -->
<!-- refer：'Dendritic computations captured by an effective point neuron model'
https://www.pnas.org/doi/10.1073/pnas.1904463116

refer: Determining the Activation Time Course of Synaptic AMPA Receptors from Openings of Colocalized NMDA Receptors
https://www.sciencedirect.com/science/article/pii/S0006349599769900 -->

<!-- 如果确实需要做一个数值试验来验证“空间位置改变但连接不变”的影响，可采用多腔室树突电缆模型（包含被动与关键主动通道，如Na、K、Ca与Ih），明确标注突触位置、受体动力学与电导大小，并加入距离相关的时延与衰减；对照组使用点神经元（或GLIF/EIF）仅含等效电导且无空间结构。比较两者在不同时序（兴奋/抑制到达时间差）、不同树突位置与电导条件下的放电概率、亚阈电位波形与信息传递度量。

如果，要把不同层级的信息整合起来，大概是这样的：
Ion channel → Synapse → Compartment → Neuron → Microcircuit → Network → Whole brain → Observables

-->

