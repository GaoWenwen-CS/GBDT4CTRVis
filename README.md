# GBDT4CTRVis
ChinaVis2023 accepted paper

The project is developed in a front-end-back-end separation. We are currently organizing it for open source.


You can get a brief understanding of our work through the following video:

https://www.bilibili.com/video/BV1Wm4y1E7Q1/?share_source=copy_web&vd_source=6fa160bf363986e81156ad82da533f06

<iframe src="//player.bilibili.com/player.html?aid=700809239&bvid=BV1Wm4y1E7Q1&cid=1191589155&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

# Video Description

Click-through rate prediction can improve the effectiveness of advertisement delivery and increase the benefit of advertising. Currently, the mainstream model is GBDT-based model, whose complex working mechanism makes it difficult for advertising analysts to tuning the model.

Our system provides three levels of Views and a Control Panel to help advertising analysts understand the working mechanism of the GBDT-based CTR prediction model and simplify the process of model tuning.
Instance-level Views can Explore the prediction results of advertising data samples at three levels: data overview , data statistics and data details.
Feature-level Views Present the importance of the features of online advertising data and the correlations between them.
Model-level Views Display the most representative K decision trees, observe the evolution of the tree size, and present the evolution of the information gain during model traing. 
Control Panel Enable to tune model hyperparameters, filter features and evaluate model performance.

Next, we introduce the interaction and usage scenario of the system.
When we analyze a trained model, we can start from Data Overview View to get an overview of the prediction results. After selecting a data cluster of interest, you can check the feature distribution of the data cluster in the Data Statistic View, and slide in the Data List View to see the details.
Further, after clicking on a data instance, the corresponding Streamgraph View is updated. When the mouse hovers over the first row label of the representative decision tree, the type of node splitting feature is highlighted, and the location of this tree and information gain is highlighted in the Streamgraph View.
Mouse hovering over the second row label displays all decision trees in that cluster in the Streamgraph View.
In addition, clicking on the line corresponding to a representative decision tree in the Streamgraph View displays its decision path in the Icicle View.
In the Feature Importance View on the right, after clicking on a feature, the corresponding feature is highlighted in the Icicle View and in the Feature Correlation View below. In the Feature Correlation View, clicking on a line between two nodes will display the specific correlation information.

From the Streamgraph View, we can find that the model may not fit well enough, and we can tune the learning rate to make the model learn more. 
We tune the learning rate to 0.1 through the control panel.
In the returned results we find that all three indicators have been improved.
Checking the Streamgraph View of a data instance, we can find that the Streamgraph View converges better.
Click on the top three features. We can see from the Icicle View(the rectangles that split according to the corresponding features are highlighted) that these features are indeed used as split nodes in the decision tree multiple times. From the Feature Correlation View (the corresponding feature nodes are highlighted) we find that these features are distributed in the periphery of the view and there is no obvious correlation between them and other features, indicating that these features are more differentiated.
Similarly, we can further analyze the performance of the model by filtering feature or making other tunings through the control panel based on this information.
