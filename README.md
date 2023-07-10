# GBDT4CTRVis
ChinaVis2023接收论文
ChinaVis2023 accepted paper

该项目为前后端分离开发，代码存于实验室服务器中，正在整理上线。
The project is developed in a front-end-back-end separation, and the code is stored on the lab's servers. We are currently organizing it for open source.

可通过以下视频简单了解我们的工作：

<iframe src="//player.bilibili.com/player.html?aid=700809239&bvid=BV1Wm4y1E7Q1&cid=1191589155&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>


# 视频文案
【背景介绍】
点击率预测能够有效提高广告投放效果，增加广告受益。目前主流的模型是GBDT-based model。其复杂的工作机理使得广告分析师难以进行model tuning。

Click-through rate prediction can improve the effectiveness of advertisement delivery and increase the benefit of advertising. Currently, the mainstream model is GBDT-based model, whose complex working mechanism makes it difficult for advertising analysts to tuning the model.

【系统概览】
我们的系统提供了三个级别的视图设计和一个控制面板来帮助帮助广告分析师理解GBDT-based CTR prediction model的工作机制，简化模型调优的过程。
在实例级视图中，允许用户从数据概览（B）、数据统计(C)和数据详情(D)三个层面探索广告数据实例的预测结果。
特征级视图：展现了在线广告数据的特征的重要性（E）及其间的关系(F)。
模型级视图：用于展示最有代表性的K棵决策树（G）、观察树的大小演变(H)、呈现模型预测过程中的信息增益的演变情况(I)。
控制面板(A)：提供了一个调整模型超参数、筛选特征和评估模型性能的接口。

Our system provides three levels of Views and a Control Panel to help advertising analysts understand the working mechanism of the GBDT-based CTR prediction model and simplify the process of model tuning.
Instance-level Views can Explore the prediction results of advertising data samples at three levels: data overview , data statistics and data details.
Feature-level Views Present the importance of the features of online advertising data and the correlations between them.
Model-level Views Display the most representative K decision trees, observe the evolution of the tree size, and present the evolution of the information gain during model traing. 
Control Panel Enable to tune model hyperparameters, filter features and evaluate model performance.

【交互】
当我们对一个训练好的模型进行分析时，我们可以从Data Overview View出发，概览模型的预测效果。选中某个感兴趣的数据集群后，可在Data Statistic View中检查该数据集群的特征分布，并在Data List View中上下或左右滑动查看详细的数值进行分析。
进一步地，点击某个数据实例后，模型视图中更新相应的河流图，鼠标悬浮在代表性决策树的第一行标签时高亮节点分裂特征的类型，并在河流图中突出这棵树的位置及信息增益。
鼠标悬浮在第二行标签时，在河流图中展示该聚类中的所有决策树。
此外，在河流图中点击代表性决策树对应的线段后，会在冰柱图中展示其决策路径。
在右侧的特征重要性视图中，点击某个特征后，在冰柱图和下方的特征关联视图中会高亮相应的特征。在特征关联视图中，点击两个节点之间的线段会展示具体关联信息。

Next, we introduce the interaction and usage scenario of the system.
When we analyze a trained model, we can start from Data Overview View to get an overview of the prediction results. After selecting a data cluster of interest, you can check the feature distribution of the data cluster in the Data Statistic View, and slide in the Data List View to see the details.
Further, after clicking on a data instance, the corresponding Streamgraph View is updated. When the mouse hovers over the first row label of the representative decision tree, the type of node splitting feature is highlighted, and the location of this tree and information gain is highlighted in the Streamgraph View.
Mouse hovering over the second row label displays all decision trees in that cluster in the Streamgraph View.
In addition, clicking on the line corresponding to a representative decision tree in the Streamgraph View displays its decision path in the Icicle View.
In the Feature Importance View on the right, after clicking on a feature, the corresponding feature is highlighted in the Icicle View and in the Feature Correlation View below. In the Feature Correlation View, clicking on a line between two nodes will display the specific correlation information.

【使用场景】
从当前的河流图中可发现模型的拟合程度可能还不够，我们可以通过调整学习率来让模型学到更多知识。（我们通过控制面板，将学习率调整到0.1）
（暂停-换下一段视频）
在返回的结果中我们发现三个指标都得到了提升。
查看某数据实例实例的河流图，可发现河流图的收敛效果更好。
点击排名前三的特征，可从提升树模型结构视图（根据相应特征进行分裂的矩形会高亮）中发现这些特征确实多次被用作决策树节点分裂的依据，从特征关联视图（相应的特征节点会放大）中发现这些特征分布于视图外围，与其他特征之间没有明显的相关性，说明这些特征更有区分度。
类似地，我们可以根据这些信息，通过控制面板进行特征选择或进行其他调整，进一步分析模型的性能。

From the Streamgraph View, we can find that the model may not fit well enough, and we can tune the learning rate to make the model learn more. 
We tune the learning rate to 0.1 through the control panel.
In the returned results we find that all three indicators have been improved.
Checking the Streamgraph View of a data instance, we can find that the Streamgraph View converges better.
Click on the top three features. We can see from the Icicle View(the rectangles that split according to the corresponding features are highlighted) that these features are indeed used as split nodes in the decision tree multiple times. From the Feature Correlation View (the corresponding feature nodes are highlighted) we find that these features are distributed in the periphery of the view and there is no obvious correlation between them and other features, indicating that these features are more differentiated.
Similarly, we can further analyze the performance of the model by filtering feature or making other tunings through the control panel based on this information.
