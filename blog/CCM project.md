
brain simulation


## proposal 
We plan to build a human connectome-constrained artificial neural network(ANN). 
\\

Each brain region will serve as a node in a graph-like neural network and each node will be a multi-layer convolutional neural network(Exploring Randomly Wired Neural Networks for Image Recognition https://arxiv.org/abs/1904.01569). Those nodes will be connected based on the functional connectivity from fMRI or structural connectivity from DWI. 
\\

We will use the dataset of fMRI and eye gaze recording(A studyforrest extension, simultaneous fMRI and eye gaze recordings during prolonged natural stimulation https://www.nature.com/articles/sdata201692). The input of ANN will be the video simulation for the participant, and the output will be the attention heatmap for the eye gaze. 
\\

After the training of the ANN, we want to evaluate the correlation between fMRI activity and node activity. Here, the node activity might be defined as the difference between the input and the output(Generalized Shape Metrics on Neural Representations https://arxiv.org/abs/2110.14739). 





## method



## code: 
**!!! the structure**  
[Exploring Randomly Wired Neural Networks for Image Recognition](https://arxiv.org/abs/1904.01569)  
Saining Xie, Alexander Kirillov, Ross Girshick, Kaiming He

**!!! the loss function of fMRI**  
[ReAlnet: Achieving More Human Brain-Like Vision via Human Neural Representational Alignment](https://arxiv.org/abs/2401.17231)



## data: 

**!!!**  
[eye gaze and fMRI](https://www.nature.com/articles/sdata201692)  
A studyforrest extension, simultaneous fMRI and eye gaze recordings during prolonged natural stimulation
https://openfmri.org/dataset/ds000113d/ 
Simultaneous fMRI/eyetracking while movie watching, plus visual localizers



**!!!**  
[audio movie](https://www.nature.com/articles/sdata20143)
A high-resolution 7-Tesla fMRI dataset from complex natural stimulation with an audio movie
https://openfmri.org/dataset/ds000113/  


Diffusion-weighted imaging (DWI)
https://www.studyforrest.org/explore.html



Multi-resolution 7T fMRI data on the representation of visual orientation
https://openfmri.org/dataset/ds000113c/

other eye gaze and fMRI paper:

[Evaluating fMRI-Based Estimation of Eye Gaze During Naturalistic Viewing](https://academic.oup.com/cercor/article/30/3/1171/5583730)

[Eyes on me: an fMRI study of the effects of social gaze on action control](https://academic.oup.com/scan/article/6/4/393/1649259)

[Processing social aspects of human gaze: A combined fMRI-DTI study](https://www.sciencedirect.com/science/article/pii/S1053811910014631)


## Reference
[Connectome inspired neural network](https://lengyuner.github.io/blog/connectome%20inspired%20neural%20network.html)


[The structural connectome constrains fast brain dynamics](https://elifesciences.org/articles/67400)



[Predicting eye movement patterns from fMRI responses to natural scenes](https://www.nature.com/articles/s41467-018-07471-9)



## others

saccade 

![alt text](image.png)
https://www.nature.com/articles/eye2014284/figures/1

Superior Colliculus



![alt text](image-1.png)
https://www.sciencedirect.com/science/article/pii/S0959438810000255?via%3Dihub

 

attention map
https://www.mdpi.com/ijgi/ijgi-10-00664/article_deploy/html/images/ijgi-10-00664-g003.png