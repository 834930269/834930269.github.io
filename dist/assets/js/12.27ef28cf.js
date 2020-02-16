(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{209:function(t,_,v){"use strict";v.r(_);var a=v(0),s=Object(a.a)({},(function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("p"),v("div",{staticClass:"table-of-contents"},[v("ul",[v("li",[v("a",{attrs:{href:"#_1-生物神经元"}},[t._v("1. 生物神经元")]),v("ul",[v("li",[v("a",{attrs:{href:"#结构"}},[t._v("结构")])]),v("li",[v("a",{attrs:{href:"#信息处理机制"}},[t._v("信息处理机制")])])])]),v("li",[v("a",{attrs:{href:"#_2-m-p模型-麦卡洛克-皮特斯模型"}},[t._v("2. M-P模型(麦卡洛克-皮特斯模型)")]),v("ul",[v("li",[v("a",{attrs:{href:"#多层神经元诞生的意义"}},[t._v("多层神经元诞生的意义")])])])]),v("li",[v("a",{attrs:{href:"#_3-多层感知器中的激活函数"}},[t._v("3. 多层感知器中的激活函数")]),v("ul",[v("li",[v("a",{attrs:{href:"#常见的激活函数"}},[t._v("常见的激活函数")])])])]),v("li",[v("a",{attrs:{href:"#_4-交叉熵损失函数"}},[t._v("4. 交叉熵损失函数")])]),v("li",[v("a",{attrs:{href:"#_5-梯度下降"}},[t._v("5. 梯度下降")])]),v("li",[v("a",{attrs:{href:"#_6-多分类问题-softmax激活函数与softmax交叉熵损失函数"}},[t._v("6. 多分类问题 - softmax激活函数与softmax交叉熵损失函数")])]),v("li",[v("a",{attrs:{href:"#_7-cnn-卷积神经网络"}},[t._v("7. CNN - 卷积神经网络")])])])]),v("p"),t._v(" "),v("h1",{attrs:{id:"神经网络"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#神经网络"}},[t._v("#")]),t._v(" 神经网络")]),t._v(" "),v("h2",{attrs:{id:"_1-生物神经元"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-生物神经元"}},[t._v("#")]),t._v(" 1. 生物神经元")]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),v("p",[t._v("以下对生物神经元的描述并非完全,仅做参考")])]),t._v(" "),v("h3",{attrs:{id:"结构"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#结构"}},[t._v("#")]),t._v(" 结构")]),t._v(" "),v("p",[v("img",{attrs:{src:"http://cdn.be-sunshine.cn/NN.jpg",alt:""}})]),t._v(" "),v("ul",[v("li",[v("code",[t._v("细胞体")]),t._v(": 神经元主体,由细胞核、细胞质、细胞膜等组成,细胞膜"),v("code",[t._v("对细胞液中的不同离子")]),t._v(" 的 "),v("code",[t._v("通透性不同")]),t._v(",使得产生离子浓度差,从而出现内负外正的静息电位")]),t._v(" "),v("li",[v("code",[t._v("树突")]),t._v(": 通过树突"),v("code",[t._v("接收来自其他神经元的输入信号")])]),t._v(" "),v("li",[v("code",[t._v("轴突")]),t._v(": "),v("code",[t._v("传出")]),t._v("细胞体产生的输出电化学信号")]),t._v(" "),v("li",[v("code",[t._v("突触")]),t._v(": 神经元间通过一个的轴突末梢和其他神经元的细胞体或者树突进行通信连接,相当于接口")])]),t._v(" "),v("h3",{attrs:{id:"信息处理机制"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#信息处理机制"}},[t._v("#")]),t._v(" 信息处理机制")]),t._v(" "),v("ul",[v("li",[v("code",[t._v("信息产生")]),t._v(": 在某一给定时刻,神经元"),v("code",[t._v("总是处于静息、兴奋和抑制")]),t._v("三种状态之一。在外界的刺激下,当神经元的兴奋程度"),v("code",[t._v("大于某个阈电位")]),t._v("时,神经元被激发而"),v("code",[t._v("发出神经脉冲")]),t._v(".")]),t._v(" "),v("li",[v("code",[t._v("传递与接收")]),t._v(": "),v("code",[t._v("神经脉冲信号")]),t._v("沿轴突传向其末端的各个分支,通过"),v("code",[t._v("突触")]),t._v("完成传递与接收。突触有"),v("code",[t._v("兴奋性突触")]),t._v("和"),v("code",[t._v("抑制性突触")]),t._v("两种,当兴奋性突触的点位"),v("code",[t._v("超过某个阈电位")]),t._v("时,"),v("code",[t._v("后一个神经元就有神经脉冲输出")]),t._v(",从而把前一个神经元的信息传递给了后一个神经元。")]),t._v(" "),v("li",[v("code",[t._v("信息整合")]),t._v(": "),v("code",[t._v("接收各个轴突传来的脉冲输入")]),t._v(",根据输入可到达神经元的不同部位,输入部位不同,对神经元影响的权重也不同。在同一时刻产生的刺激所引起的电位变化大致等于各单独刺激"),v("code",[t._v("引起的电位变化的代数和")]),t._v("神经元对空间和时间上"),v("code",[t._v("对输入进行积累和整合加工")]),t._v(",从而"),v("code",[t._v("决定输出的时机和强弱")]),t._v(".")])]),t._v(" "),v("h2",{attrs:{id:"_2-m-p模型-麦卡洛克-皮特斯模型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-m-p模型-麦卡洛克-皮特斯模型"}},[t._v("#")]),t._v(" 2. M-P模型(麦卡洛克-皮特斯模型)")]),t._v(" "),v("p",[t._v("       1943年心理学家"),v("code",[t._v("McCulloch")]),t._v("和数学家"),v("code",[t._v("W·Pitts")]),t._v("基础生物神经元的基础特点抽象与提出了"),v("code",[t._v("M-P模型")]),t._v(",这个模型对生物神经元信息处理过程进行了简化和概括.")]),t._v(" "),v("p",[v("img",{attrs:{src:"http://cdn.be-sunshine.cn/M-P.jpg",alt:""}})]),t._v(" "),v("blockquote",[v("p",[t._v("四个特性:")]),t._v(" "),v("blockquote",[v("ul",[v("li",[v("code",[t._v("多输入单输出")])]),t._v(" "),v("li",[v("code",[t._v("不同输入权重不同")])]),t._v(" "),v("li",[v("code",[t._v("多输入累加整合")])]),t._v(" "),v("li",[v("code",[t._v("阈值特性")])])])])]),t._v(" "),v("h3",{attrs:{id:"多层神经元诞生的意义"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#多层神经元诞生的意义"}},[t._v("#")]),t._v(" 多层神经元诞生的意义")]),t._v(" "),v("blockquote",[v("p",[t._v("在单层神经元时代,因为一层的神经元无法解决"),v("code",[t._v("异或问题")])]),t._v(" "),v("blockquote",[v("p",[t._v("异或我们都知道,相同为0,不同为1")])])]),t._v(" "),v("p",[t._v("       那么什么是异或问题呢?")]),t._v(" "),v("ul",[v("li",[t._v("男和女才能生小孩")]),t._v(" "),v("li",[t._v("找两张图片间的不同")]),t._v(" "),v("li",[t._v("异或来压缩影音,将连续的部分帧中相同的部分只存一次")]),t._v(" "),v("li",[t._v("寻找超级远外的哪些星发生了移动")])]),t._v(" "),v("p",[t._v("       如抽象人类看静止或者运动缓慢的事物不会特别在意,但对一只向你俯冲而来的老鹰却格外在意.是否可以理解为异或差距很大.")]),t._v(" "),v("p",[t._v("       另外也可以通过异或来判断两个id间的距离.异或得到的值越小,这两个ID越接近。")]),t._v(" "),v("pre",[v("code",[t._v("ID1：01000\nID2：01010\n异或值：00010表示ID1和ID2比较相近\n")])]),t._v(" "),v("blockquote",[v("p",[t._v("为了解决这个问题,多层神经网络便诞生了")]),t._v(" "),v("blockquote",[v("p",[v("code",[t._v("可以通过多个单层组合成异或神经网络")])])])]),t._v(" "),v("h2",{attrs:{id:"_3-多层感知器中的激活函数"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-多层感知器中的激活函数"}},[t._v("#")]),t._v(" 3. 多层感知器中的激活函数")]),t._v(" "),v("p",[v("code",[t._v("注意区分激活函数和损失函数")]),t._v("\n       生物的神经元一层一层连接起来,当神经信号达到某一个条件"),v("code",[t._v("(阈值)")]),t._v(",这个神经元就会激活,然后继续传递信息下去")]),t._v(" "),v("p",[t._v("       为了使用神经网络来解决非线性可分性的问题,采取神经网络的输入端和输出端"),v("code",[t._v("插入更多的神经元")]),t._v(".")]),t._v(" "),v("p",[t._v("       但是注意,如果插入的部分都是简单的"),v("code",[t._v("ax+b")]),t._v(",那么就会产生一种问题就是无论插入多少层,最终结果都是线性的:")]),t._v(" "),v("blockquote",[v("p",[t._v("例:")]),t._v(" "),v("blockquote",[v("p",[t._v("y = ax+b\nx = cz+d\ny = acz+(ad+b) - "),v("code",[t._v("依然是线性的")])])])]),t._v(" "),v("p",[v("strong",[t._v("故引入激活函数")])]),t._v(" "),v("h3",{attrs:{id:"常见的激活函数"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#常见的激活函数"}},[t._v("#")]),t._v(" 常见的激活函数")]),t._v(" "),v("h4",{attrs:{id:"relu"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#relu"}},[t._v("#")]),t._v(" relu")]),t._v(" "),v("p",[v("img",{attrs:{src:"http://cdn.be-sunshine.cn/relu.jpg",alt:""}})]),t._v(" "),v("p",[t._v("       当x小于0,则信号被屏蔽掉,x大于0则原样输出,比较常用")]),t._v(" "),v("h4",{attrs:{id:"sigmoid"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#sigmoid"}},[t._v("#")]),t._v(" sigmoid")]),t._v(" "),v("p",[v("img",{attrs:{src:"http://cdn.be-sunshine.cn/sigmoid.jpg",alt:""}}),t._v("\n       范围在[-1,1]间,一般是用来算概率的,但是 - "),v("code",[t._v("因为sigmoid在值极大或极小时会产生梯度几乎为0的情况,所以sigmoid并不常用于中间层")])]),t._v(" "),v("h4",{attrs:{id:"tanh"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#tanh"}},[t._v("#")]),t._v(" tanh")]),t._v(" "),v("p",[v("img",{attrs:{src:"http://cdn.be-sunshine.cn/tanh.jpg",alt:""}})]),t._v(" "),v("h4",{attrs:{id:"leak-relu"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#leak-relu"}},[t._v("#")]),t._v(" Leak relu")]),t._v(" "),v("p",[v("img",{attrs:{src:"http://cdn.be-sunshine.cn/leake_relu.jpg",alt:""}})]),t._v(" "),v("p",[v("code",[t._v("常用在生成网络中,如gan")])]),t._v(" "),v("h2",{attrs:{id:"_4-交叉熵损失函数"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-交叉熵损失函数"}},[t._v("#")]),t._v(" 4. 交叉熵损失函数")]),t._v(" "),v("p",[v("a",{attrs:{href:"http://www.be-sunshine.cn/dist/ai/ml/Logistic_Regression",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://www.be-sunshine.cn/dist/ai/ml/Logistic_Regression"),v("OutboundLink")],1)]),t._v(" "),v("blockquote",[v("p",[t._v("交叉熵损失函数在keras中的命名为: "),v("code",[t._v("binary_crossentropy")])])]),t._v(" "),v("h2",{attrs:{id:"_5-梯度下降"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5-梯度下降"}},[t._v("#")]),t._v(" 5. 梯度下降")]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),v("p",[t._v("很多地方讲的很差劲")]),t._v(" "),v("p",[t._v("一张图:\n"),v("img",{attrs:{src:"https://pic3.zhimg.com/80/v2-c96e284f4ab319a02fdd762367b58774_hd.jpg",alt:""}})])]),t._v(" "),v("h2",{attrs:{id:"_6-多分类问题-softmax激活函数与softmax交叉熵损失函数"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_6-多分类问题-softmax激活函数与softmax交叉熵损失函数"}},[t._v("#")]),t._v(" 6. 多分类问题 - softmax激活函数与softmax交叉熵损失函数")]),t._v(" "),v("blockquote",[v("p",[t._v("sigmoid解决的是二分类问题,输出一个概率值")]),t._v(" "),v("blockquote",[v("p",[t._v("那么如何解决多分类问题呢?\n一个思路是运用多次二分类\n但有一个比较直接的模型 - "),v("code",[t._v("softmax模型")])])])]),t._v(" "),v("p",[t._v("       神经网络的原始输出不是一个概率值，实质上只是输入的数值做了复杂的加权和与非线性处理之后的一个值而已，那么如何将这个输出变为概率分布？")]),t._v(" "),v("p",[v("strong",[t._v("Softmax模型")]),t._v(" "),v("img",{attrs:{src:"http://cdn.be-sunshine.cn/softmax.jpg",alt:""}})]),t._v(" "),v("p",[t._v("       输入是向量,其功能是将数值概率化,最终结果是在所有的标签中找一个概率最大的结果.那个结果对应的标签就是答案. 且 "),v("code",[t._v("softmax各样本分量之和为 1,当只有两个类别时，与对数几率回归完全相同")])]),t._v(" "),v("p",[t._v("       对于softmax的激活函数,有两种比较常用的损失函数,即softmax交叉熵")]),t._v(" "),v("p",[t._v("在tf.keras里，对于多分类问题我们使用")]),t._v(" "),v("ul",[v("li",[t._v("categorical_crossentropy")]),t._v(" "),v("li",[t._v("sparse_categorical_crossentropy\n来计算softmax交叉熵")])]),t._v(" "),v("blockquote",[v("p",[t._v("其中第一个是用在one-hot编码\n第二个则是用在输出标签的情况下")]),t._v(" "),v("blockquote",[v("p",[t._v("使用tf.keras将顺序编码转成one-hot\ntf.keras.utils.to_categorical()")])])]),t._v(" "),v("h2",{attrs:{id:"_7-cnn-卷积神经网络"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_7-cnn-卷积神经网络"}},[t._v("#")]),t._v(" 7. CNN - 卷积神经网络")])])}),[],!1,null,null,null);_.default=s.exports}}]);