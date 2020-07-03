(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{477:function(t,a,s){"use strict";s.r(a);var _=s(1),e=Object(_.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#_1-生物神经元"}},[t._v("1. 生物神经元")]),s("ul",[s("li",[s("a",{attrs:{href:"#结构"}},[t._v("结构")])]),s("li",[s("a",{attrs:{href:"#信息处理机制"}},[t._v("信息处理机制")])])])]),s("li",[s("a",{attrs:{href:"#_2-m-p模型-麦卡洛克-皮特斯模型"}},[t._v("2. M-P模型(麦卡洛克-皮特斯模型)")]),s("ul",[s("li",[s("a",{attrs:{href:"#多层神经元诞生的意义"}},[t._v("多层神经元诞生的意义")])])])]),s("li",[s("a",{attrs:{href:"#_3-多层感知器中的激活函数"}},[t._v("3. 多层感知器中的激活函数")]),s("ul",[s("li",[s("a",{attrs:{href:"#常见的激活函数"}},[t._v("常见的激活函数")])])])]),s("li",[s("a",{attrs:{href:"#_4-交叉熵损失函数"}},[t._v("4. 交叉熵损失函数")])]),s("li",[s("a",{attrs:{href:"#_5-梯度下降"}},[t._v("5. 梯度下降")])]),s("li",[s("a",{attrs:{href:"#_6-多分类问题-softmax激活函数与softmax交叉熵损失函数"}},[t._v("6. 多分类问题 - softmax激活函数与softmax交叉熵损失函数")])]),s("li",[s("a",{attrs:{href:"#_7-cnn-卷积神经网络"}},[t._v("7. CNN - 卷积神经网络")]),s("ul",[s("li",[s("a",{attrs:{href:"#卷积核-kernal"}},[t._v("卷积核(kernal)")])]),s("li",[s("a",{attrs:{href:"#通道-channel"}},[t._v("通道(channel)")])]),s("li",[s("a",{attrs:{href:"#filter"}},[t._v("filter")])]),s("li",[s("a",{attrs:{href:"#怎么实现一个图片最终序列化成一维向量"}},[t._v("怎么实现一个图片最终序列化成一维向量?")])]),s("li",[s("a",{attrs:{href:"#池化层是什么"}},[t._v("池化层是什么?")])]),s("li",[s("a",{attrs:{href:"#keras的globalaveragepooling2d"}},[t._v("keras的GlobalAveragePooling2D")])]),s("li",[s("a",{attrs:{href:"#激活函数与bias"}},[t._v("激活函数与bias")])]),s("li",[s("a",{attrs:{href:"#批标准化"}},[t._v("批标准化")])])])])])]),s("p"),t._v(" "),s("h1",{attrs:{id:"神经网络"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#神经网络"}},[t._v("#")]),t._v(" 神经网络")]),t._v(" "),s("h2",{attrs:{id:"_1-生物神经元"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-生物神经元"}},[t._v("#")]),t._v(" 1. 生物神经元")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",[t._v("以下对生物神经元的描述并非完全,仅做参考")])]),t._v(" "),s("h3",{attrs:{id:"结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#结构"}},[t._v("#")]),t._v(" 结构")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://cdn.be-sunshine.cn/NN.jpg",alt:""}})]),t._v(" "),s("ul",[s("li",[s("code",[t._v("细胞体")]),t._v(": 神经元主体,由细胞核、细胞质、细胞膜等组成,细胞膜"),s("code",[t._v("对细胞液中的不同离子")]),t._v(" 的 "),s("code",[t._v("通透性不同")]),t._v(",使得产生离子浓度差,从而出现内负外正的静息电位")]),t._v(" "),s("li",[s("code",[t._v("树突")]),t._v(": 通过树突"),s("code",[t._v("接收来自其他神经元的输入信号")])]),t._v(" "),s("li",[s("code",[t._v("轴突")]),t._v(": "),s("code",[t._v("传出")]),t._v("细胞体产生的输出电化学信号")]),t._v(" "),s("li",[s("code",[t._v("突触")]),t._v(": 神经元间通过一个的轴突末梢和其他神经元的细胞体或者树突进行通信连接,相当于接口")])]),t._v(" "),s("h3",{attrs:{id:"信息处理机制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#信息处理机制"}},[t._v("#")]),t._v(" 信息处理机制")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("信息产生")]),t._v(": 在某一给定时刻,神经元"),s("code",[t._v("总是处于静息、兴奋和抑制")]),t._v("三种状态之一。在外界的刺激下,当神经元的兴奋程度"),s("code",[t._v("大于某个阈电位")]),t._v("时,神经元被激发而"),s("code",[t._v("发出神经脉冲")]),t._v(".")]),t._v(" "),s("li",[s("code",[t._v("传递与接收")]),t._v(": "),s("code",[t._v("神经脉冲信号")]),t._v("沿轴突传向其末端的各个分支,通过"),s("code",[t._v("突触")]),t._v("完成传递与接收。突触有"),s("code",[t._v("兴奋性突触")]),t._v("和"),s("code",[t._v("抑制性突触")]),t._v("两种,当兴奋性突触的点位"),s("code",[t._v("超过某个阈电位")]),t._v("时,"),s("code",[t._v("后一个神经元就有神经脉冲输出")]),t._v(",从而把前一个神经元的信息传递给了后一个神经元。")]),t._v(" "),s("li",[s("code",[t._v("信息整合")]),t._v(": "),s("code",[t._v("接收各个轴突传来的脉冲输入")]),t._v(",根据输入可到达神经元的不同部位,输入部位不同,对神经元影响的权重也不同。在同一时刻产生的刺激所引起的电位变化大致等于各单独刺激"),s("code",[t._v("引起的电位变化的代数和")]),t._v("神经元对空间和时间上"),s("code",[t._v("对输入进行积累和整合加工")]),t._v(",从而"),s("code",[t._v("决定输出的时机和强弱")]),t._v(".")])]),t._v(" "),s("h2",{attrs:{id:"_2-m-p模型-麦卡洛克-皮特斯模型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-m-p模型-麦卡洛克-皮特斯模型"}},[t._v("#")]),t._v(" 2. M-P模型(麦卡洛克-皮特斯模型)")]),t._v(" "),s("p",[t._v("       1943年心理学家"),s("code",[t._v("McCulloch")]),t._v("和数学家"),s("code",[t._v("W·Pitts")]),t._v("基础生物神经元的基础特点抽象与提出了"),s("code",[t._v("M-P模型")]),t._v(",这个模型对生物神经元信息处理过程进行了简化和概括.")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://cdn.be-sunshine.cn/M-P.jpg",alt:""}})]),t._v(" "),s("blockquote",[s("p",[t._v("四个特性:")]),t._v(" "),s("blockquote",[s("ul",[s("li",[s("code",[t._v("多输入单输出")])]),t._v(" "),s("li",[s("code",[t._v("不同输入权重不同")])]),t._v(" "),s("li",[s("code",[t._v("多输入累加整合")])]),t._v(" "),s("li",[s("code",[t._v("阈值特性")])])])])]),t._v(" "),s("h3",{attrs:{id:"多层神经元诞生的意义"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#多层神经元诞生的意义"}},[t._v("#")]),t._v(" 多层神经元诞生的意义")]),t._v(" "),s("blockquote",[s("p",[t._v("在单层神经元时代,因为一层的神经元无法解决"),s("code",[t._v("异或问题")])]),t._v(" "),s("blockquote",[s("p",[t._v("异或我们都知道,相同为0,不同为1")])])]),t._v(" "),s("p",[t._v("       那么什么是异或问题呢?")]),t._v(" "),s("ul",[s("li",[t._v("男和女才能生小孩")]),t._v(" "),s("li",[t._v("找两张图片间的不同")]),t._v(" "),s("li",[t._v("异或来压缩影音,将连续的部分帧中相同的部分只存一次")]),t._v(" "),s("li",[t._v("寻找超级远外的哪些星发生了移动")])]),t._v(" "),s("p",[t._v("       如抽象人类看静止或者运动缓慢的事物不会特别在意,但对一只向你俯冲而来的老鹰却格外在意.是否可以理解为异或差距很大.")]),t._v(" "),s("p",[t._v("       另外也可以通过异或来判断两个id间的距离.异或得到的值越小,这两个ID越接近。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("ID1：01000\nID2：01010\n异或值：00010表示ID1和ID2比较相近\n")])])]),s("blockquote",[s("p",[t._v("为了解决这个问题,多层神经网络便诞生了")]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("可以通过多个单层组合成异或神经网络")])])])]),t._v(" "),s("h2",{attrs:{id:"_3-多层感知器中的激活函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-多层感知器中的激活函数"}},[t._v("#")]),t._v(" 3. 多层感知器中的激活函数")]),t._v(" "),s("p",[s("code",[t._v("注意区分激活函数和损失函数")]),t._v("\n       生物的神经元一层一层连接起来,当神经信号达到某一个条件"),s("code",[t._v("(阈值)")]),t._v(",这个神经元就会激活,然后继续传递信息下去")]),t._v(" "),s("p",[t._v("       为了使用神经网络来解决非线性可分性的问题,采取神经网络的输入端和输出端"),s("code",[t._v("插入更多的神经元")]),t._v(".")]),t._v(" "),s("p",[t._v("       但是注意,如果插入的部分都是简单的"),s("code",[t._v("ax+b")]),t._v(",那么就会产生一种问题就是无论插入多少层,最终结果都是线性的:")]),t._v(" "),s("blockquote",[s("p",[t._v("例:")]),t._v(" "),s("blockquote",[s("p",[t._v("y = ax+b\nx = cz+d\ny = acz+(ad+b) - "),s("code",[t._v("依然是线性的")])])])]),t._v(" "),s("p",[s("strong",[t._v("故引入激活函数")])]),t._v(" "),s("h3",{attrs:{id:"常见的激活函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常见的激活函数"}},[t._v("#")]),t._v(" 常见的激活函数")]),t._v(" "),s("h4",{attrs:{id:"relu"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#relu"}},[t._v("#")]),t._v(" relu")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://cdn.be-sunshine.cn/relu.jpg",alt:""}})]),t._v(" "),s("p",[t._v("       当x小于0,则信号被屏蔽掉,x大于0则原样输出,比较常用")]),t._v(" "),s("h4",{attrs:{id:"sigmoid"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sigmoid"}},[t._v("#")]),t._v(" sigmoid")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://cdn.be-sunshine.cn/sigmoid.jpg",alt:""}}),t._v("\n       范围在[-1,1]间,一般是用来算概率的,但是 - "),s("code",[t._v("因为sigmoid在值极大或极小时会产生梯度几乎为0的情况,所以sigmoid并不常用于中间层")])]),t._v(" "),s("h4",{attrs:{id:"tanh"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tanh"}},[t._v("#")]),t._v(" tanh")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://cdn.be-sunshine.cn/tanh.jpg",alt:""}})]),t._v(" "),s("h4",{attrs:{id:"leak-relu"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#leak-relu"}},[t._v("#")]),t._v(" Leak relu")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://cdn.be-sunshine.cn/leake_relu.jpg",alt:""}})]),t._v(" "),s("p",[s("code",[t._v("常用在生成网络中,如gan")])]),t._v(" "),s("h2",{attrs:{id:"_4-交叉熵损失函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-交叉熵损失函数"}},[t._v("#")]),t._v(" 4. 交叉熵损失函数")]),t._v(" "),s("p",[s("a",{attrs:{href:"http://www.be-sunshine.cn/dist/ai/ml/Logistic_Regression",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://www.be-sunshine.cn/dist/ai/ml/Logistic_Regression"),s("OutboundLink")],1)]),t._v(" "),s("blockquote",[s("p",[t._v("交叉熵损失函数在keras中的命名为: "),s("code",[t._v("binary_crossentropy")])])]),t._v(" "),s("h2",{attrs:{id:"_5-梯度下降"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-梯度下降"}},[t._v("#")]),t._v(" 5. 梯度下降")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",[t._v("很多地方讲的很差劲")]),t._v(" "),s("p",[t._v("一张图:\n"),s("img",{attrs:{src:"https://pic3.zhimg.com/80/v2-c96e284f4ab319a02fdd762367b58774_hd.jpg",alt:""}})])]),t._v(" "),s("h2",{attrs:{id:"_6-多分类问题-softmax激活函数与softmax交叉熵损失函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-多分类问题-softmax激活函数与softmax交叉熵损失函数"}},[t._v("#")]),t._v(" 6. 多分类问题 - softmax激活函数与softmax交叉熵损失函数")]),t._v(" "),s("blockquote",[s("p",[t._v("sigmoid解决的是二分类问题,输出一个概率值")]),t._v(" "),s("blockquote",[s("p",[t._v("那么如何解决多分类问题呢?\n一个思路是运用多次二分类\n但有一个比较直接的模型 - "),s("code",[t._v("softmax模型")])])])]),t._v(" "),s("p",[t._v("       神经网络的原始输出不是一个概率值，实质上只是输入的数值做了复杂的加权和与非线性处理之后的一个值而已，那么如何将这个输出变为概率分布？")]),t._v(" "),s("p",[s("strong",[t._v("Softmax模型")]),t._v(" "),s("img",{attrs:{src:"http://cdn.be-sunshine.cn/softmax.jpg",alt:""}})]),t._v(" "),s("p",[t._v("       输入是向量,其功能是将数值概率化,最终结果是在所有的标签中找一个概率最大的结果.那个结果对应的标签就是答案. 且 "),s("code",[t._v("softmax各样本分量之和为 1,当只有两个类别时，与对数几率回归完全相同")])]),t._v(" "),s("p",[t._v("       对于softmax的激活函数,有两种比较常用的损失函数,即softmax交叉熵")]),t._v(" "),s("p",[t._v("在tf.keras里，对于多分类问题我们使用")]),t._v(" "),s("ul",[s("li",[t._v("categorical_crossentropy")]),t._v(" "),s("li",[t._v("sparse_categorical_crossentropy\n来计算softmax交叉熵")])]),t._v(" "),s("blockquote",[s("p",[t._v("其中第一个是用在one-hot编码\n第二个则是用在输出标签的情况下")]),t._v(" "),s("blockquote",[s("p",[t._v("使用tf.keras将顺序编码转成one-hot\ntf.keras.utils.to_categorical()")])])]),t._v(" "),s("h2",{attrs:{id:"_7-cnn-卷积神经网络"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-cnn-卷积神经网络"}},[t._v("#")]),t._v(" 7. CNN - 卷积神经网络")]),t._v(" "),s("p",[t._v("       卷积主要概念分为卷积核,padding,移动步长,filter.")]),t._v(" "),s("h3",{attrs:{id:"卷积核-kernal"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#卷积核-kernal"}},[t._v("#")]),t._v(" 卷积核(kernal)")]),t._v(" "),s("blockquote",[s("p",[t._v("kernal即卷积核,一个卷积核相当于一个矩阵,通过卷积核来将原矩阵信息提取,简化.")])]),t._v(" "),s("h3",{attrs:{id:"通道-channel"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#通道-channel"}},[t._v("#")]),t._v(" 通道(channel)")]),t._v(" "),s("blockquote",[s("p",[t._v("通道即一个图片会被分为几个通道,如RGB则为三通道,RGBA可分为四通道")])]),t._v(" "),s("h3",{attrs:{id:"filter"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#filter"}},[t._v("#")]),t._v(" filter")]),t._v(" "),s("blockquote",[s("p",[t._v("可以理解为立体卷积,如一个立体物体可以在三个方向上移动.普通RNN可以认为是1D卷积,2D图像CNN可以认为是2D卷积,对立体物体的check可以认为是3D卷积.\n一般称为 Conv2D - Conv3D")])]),t._v(" "),s("h3",{attrs:{id:"怎么实现一个图片最终序列化成一维向量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#怎么实现一个图片最终序列化成一维向量"}},[t._v("#")]),t._v(" 怎么实现一个图片最终序列化成一维向量?")]),t._v(" "),s("blockquote",[s("p",[t._v("对于2D卷积,一层多个卷积核,每个卷积核将原图片信息提取到较小的矩阵中.")]),t._v(" "),s("blockquote",[s("p",[t._v("对于每个图片下一层继续多个卷积核.")]),t._v(" "),s("blockquote",[s("p",[t._v("直到最后一层的卷积核使得最终结果为1*1的矩阵.结合起来就是向量.")])])])]),t._v(" "),s("h3",{attrs:{id:"池化层是什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#池化层是什么"}},[t._v("#")]),t._v(" 池化层是什么?")]),t._v(" "),s("blockquote",[s("p",[t._v("池化层其实就是一个和卷积核比较相似的东西,不过池化层要比卷积核的复杂度低得多,它的作用主要使用来扩大视野,简化计算.\n比如最大池化,平均池化,就是直接在一个范围内圈定"),s("code",[t._v("最大值")]),t._v(","),s("code",[t._v("平均值")]),t._v(",作为提取出来的值.")]),t._v(" "),s("blockquote",[s("p",[t._v("stride: n  - 即每个步伐移动n步.")])])]),t._v(" "),s("div",{staticClass:"language-python line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("layers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MaxPooling2D"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pool_size"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("strides"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("padding"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'valid'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("data_format"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("**")]),t._v("kwargs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h3",{attrs:{id:"keras的globalaveragepooling2d"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#keras的globalaveragepooling2d"}},[t._v("#")]),t._v(" keras的GlobalAveragePooling2D")]),t._v(" "),s("blockquote",[s("p",[t._v("全局平均池化")]),t._v(" "),s("blockquote",[s("p",[t._v("Flatten层是将二维数据展开成一维.\nGAP - GlobalAveragePooling2D 也是将其转为一维,计算全局平均值转为一维.")]),t._v(" "),s("blockquote",[s("p",[t._v("如下图\n"),s("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/2540794-056655bd58670994.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1200",alt:""}})])])])]),t._v(" "),s("blockquote",[s("p",[t._v("在图像处理时,随着层数的增加,fliter的增加,最终会有一个很厚的数据集,如何将这些数据集引入到Dense(即普通全连接层)进行计算,"),s("code",[t._v("GAP")]),t._v("就担任了这样的一个角色.")])]),t._v(" "),s("h3",{attrs:{id:"激活函数与bias"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#激活函数与bias"}},[t._v("#")]),t._v(" 激活函数与bias")]),t._v(" "),s("blockquote",[s("p",[t._v("激活函数和bias(偏置变量)是直接作用在每一层数据上的.")]),t._v(" "),s("blockquote",[s("p",[t._v("如Relu(conv2D层),则是对该层的节点上二维数据中每一个数据都进行Relu")])])]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("一般卷积核我们选择3*3")]),t._v(" "),s("code",[t._v("为了防止过拟合,我们可以适当添加Dropout")])])]),t._v(" "),s("p",[t._v("s")]),t._v(" "),s("h3",{attrs:{id:"批标准化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#批标准化"}},[t._v("#")]),t._v(" 批标准化")]),t._v(" "),s("blockquote",[s("p",[t._v("标准化即归一化,批标准化是在每一层隐含层后面都进行标准化.")]),t._v(" "),s("blockquote",[s("p",[t._v("用来解决梯度消失和梯度爆炸\n使用批标准化之后可以使用更深的网络")])])]),t._v(" "),s("blockquote",[s("p",[t._v("一般批标准化放在激活函数前,层之后")])])])}),[],!1,null,null,null);a.default=e.exports}}]);