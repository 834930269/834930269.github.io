(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{217:function(t,a,n){"use strict";n.r(a);var s=n(0),e=Object(s.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p"),n("div",{staticClass:"table-of-contents"},[n("ul",[n("li",[n("a",{attrs:{href:"#多变量线性回归的梯度下降"}},[t._v("多变量线性回归的梯度下降")])]),n("li",[n("a",{attrs:{href:"#特征缩放与归一化"}},[t._v("特征缩放与归一化")])]),n("li",[n("a",{attrs:{href:"#复特征梯度下降法的学习率"}},[t._v("复特征梯度下降法的学习率")])]),n("li",[n("a",{attrs:{href:"#特征值的选取与多项式回归"}},[t._v("特征值的选取与多项式回归")])]),n("li",[n("a",{attrs:{href:"#正规方程"}},[t._v("正规方程")])])])]),n("p"),t._v(" "),n("h1",{attrs:{id:"多变量线性回归"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#多变量线性回归"}},[t._v("#")]),t._v(" 多变量线性回归")]),t._v(" "),n("p",[t._v("       上述例子均在介绍单变量线性回归,但是单变量线性回归的可利用广度并不高(因为变量不一定只有一个).故引入多变量线性回归.")]),t._v(" "),n("p",[t._v("       我们引入下述例子:")]),t._v(" "),n("p",[n("img",{attrs:{src:"http://cdn.be-sunshine.cn/7.jpg",alt:""}})]),t._v(" "),n("p",[t._v("       如上图所示,数据集中所存在的数据并非只有一个变量,而是有许多个变量,假设这些变量都会影响价格,则我们使用**假设 h(多变量线性回归)**作为模型,其公式如下:")]),t._v(" "),n("p",[t._v("\\begin{equation}\nh_{\\Theta}(x) = \\Theta_{0}+\\Theta_{1}x_{1}+\\Theta_{2}x_{2}+…+\\Theta_{n}x_{n}\n\\end{equation}")]),t._v(" "),n("p",[t._v("       其中每个"),n("strong",[t._v("x")]),t._v("代表一个特征,"),n("strong",[t._v("n")]),t._v("则代表特征的数量.我们用\\begin{equation}x^{(i)}\\end{equation}代表第"),n("strong",[t._v("i")]),t._v("组数据所表示的"),n("strong",[t._v("向量")]),t._v("，表示形式如下所示.")]),t._v(" "),n("p",[t._v("\\begin{equation}\nx^{(2)} = \\begin{bmatrix}\n1416\\\\ 3\\\\ 2\\\\ 40\n\\end{bmatrix}\n\\end{equation}\n\\begin{equation}\nx_{j}^{(i)}\\text{代表第i组数据中的第j个特征}\\\\\n\\text{为了方便,我们引入}x_{0}=1\\text{,即矩阵转换为}\n\\Theta = \\begin{bmatrix}\n\\Theta_{0}\\\\ \\Theta_{1}\\\\ \\Theta_{2}\\\\ \\Theta_{3}\n\\end{bmatrix}\nx = \\begin{bmatrix}\nx_{0}\\\\ x_{1}\\\\ x_{2}\\\\ x_{3}\n\\end{bmatrix}\\\\\n\\text{其中}x_{0}=1\\text{即为多变量线性回归中常数项的x=0}\n\\end{equation}")]),t._v(" "),n("h2",{attrs:{id:"多变量线性回归的梯度下降"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#多变量线性回归的梯度下降"}},[t._v("#")]),t._v(" 多变量线性回归的梯度下降")]),t._v(" "),n("p",[t._v("       多变量回归的损失函数函数本质上与单变量的并无不同,其损失函数构造如下:")]),t._v(" "),n("p",[t._v("\\begin{equation}\nJ(\\Theta)=\\frac{1}{2m}\\sum_{i=1}^{m}(h_{\\Theta}(x^{(i)})-y^{(i)})^2\n\\end{equation}")]),t._v(" "),n("p",[t._v("       其中对于"),n("strong",[t._v("预测函数h(即训练模型)")]),t._v(":")]),t._v(" "),n("p",[t._v("\\begin{equation}\nh_{\\Theta}(x) = \\Theta^TX=\\Theta_{0}+\\Theta_{1}x_{1}+\\Theta_{2}x_{2}+…+\\Theta_{n}x_{n}\n\\end{equation}")]),t._v(" "),n("p",[t._v("       目的一致,为了找到可以使当前损失函数达到最小值时的参数组合.")]),t._v(" "),n("p",[t._v("       其批量梯度下降算法如下:\n"),n("img",{attrs:{src:"http://cdn.be-sunshine.cn/8.jpg",alt:""}})]),t._v(" "),n("p",[t._v("       且"),n("strong",[t._v("一开始使用随机值作为参数,α同样是学习率,迭代直到收敛为止.代码如下:")])]),t._v(" "),n("div",{staticClass:"language-python extra-class"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("computeCost")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("X"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("y"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("theta"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\tinner "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" np"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("power"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("X"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("theta"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("T"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" y"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" np"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("sum")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("inner"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("len")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("X"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("h2",{attrs:{id:"特征缩放与归一化"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#特征缩放与归一化"}},[t._v("#")]),t._v(" 特征缩放与归一化")]),t._v(" "),n("p",[t._v("       当我们面对多特征问题时,有时我们需要保证特征具有相同的尺度这样可以帮助梯度下降更快的收敛.")]),t._v(" "),n("p",[t._v("       以房价问题为例，假设我们使用两个特征，房屋的尺寸和房间的数量，尺寸的值为 0-2000 平方英尺，而房间数量的值则是 0-5，以两个参数分别为横纵坐标，绘制代价函数的等高线图能，看出图像会显得很扁，梯度下降算法需要非常多次的迭代才能收敛。")]),t._v(" "),n("p",[n("img",{attrs:{src:"http://cdn.be-sunshine.cn/9.jpg",alt:""}})]),t._v(" "),n("p",[t._v("       解决的方法是尝试将所有特征的尺度都尽量缩放到-1 到 1 之间。如图：")]),t._v(" "),n("p",[n("img",{attrs:{src:"http://cdn.be-sunshine.cn/10.jpg",alt:""}})]),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),n("p",[t._v("有很多种方法可以完成归一化")]),t._v(" "),n("p",[t._v("如:\n\\begin{equation}\nx_{n}=\\frac{x_{n}-\\eta_{n}}{s_{n}}\n\\end{equation}\nμ和s分别为平均值和标准差.")]),t._v(" "),n("p",[t._v("还可以通过最大值与最小值的差以及到最小值间的距离比来做归一化处理.")])]),t._v(" "),n("h2",{attrs:{id:"复特征梯度下降法的学习率"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#复特征梯度下降法的学习率"}},[t._v("#")]),t._v(" 复特征梯度下降法的学习率")]),t._v(" "),n("p",[n("strong",[t._v("常用学习率有如下几个")]),t._v("\nα = 0.01，0.03，0.1，0.3，1，3，10")]),t._v(" "),n("h2",{attrs:{id:"特征值的选取与多项式回归"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#特征值的选取与多项式回归"}},[t._v("#")]),t._v(" 特征值的选取与多项式回归")]),t._v(" "),n("p",[n("img",{attrs:{src:"http://cdn.be-sunshine.cn/11.jpg",alt:""}})]),t._v(" "),n("p",[t._v("       如房价预测问题,如上图所示,我们可以选择宽与高作为价格的特征值来构造线性回归模型."),n("strong",[t._v("(tip: 选择宽与高后就不应再选面积为特征值,因为这几个特征一定是线性相关的)")])]),t._v(" "),n("p",[t._v("       但线性回归并不能代表所有的数据.有些数据的分布并非是线性的,极有可能是曲线的,这时我们就需要引入多项式回归.")]),t._v(" "),n("p",[t._v("       三次方模型:\n\\begin{equation}\nh_{\\Theta}(x) = \\Theta_{0}+\\Theta_{1}x_{1}+\\Theta_{2}x_{2}^{2}+\\Theta_{3}x_{3}^{3}\n\\end{equation}")]),t._v(" "),n("p",[n("img",{attrs:{src:"http://cdn.be-sunshine.cn/12.jpg",alt:""}})]),t._v(" "),n("p",[t._v("       同样是上面房价问题,我们选择大小作为特征,会发现数据的分布并非直线,当我们尝试用曲线拟合时,二次曲线是会达到顶点后退回,而根据常识房价不太可能跌(除非泡沫),故可以试着用三次函数进行拟合.")]),t._v(" "),n("div",{staticClass:"custom-block warning"},[n("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),n("p",[t._v("       那么有一个小问题来了,指数级的不同就导致各个特征对于指数的影响不同,如10000的一次方,二次方,三次方的差距就极为明显,吴恩达老师说"),n("strong",[t._v("多项式中缩放的意义极为重要")]),t._v(",但回想思考一个问题,次方的不同是否可以表示重要性的不同?而重要性的不同是否就导致不同幂次的特征需要根据对结果的影响程度来分配呢?")])]),t._v(" "),n("pre",[n("code",[t._v("当然,多项式回归的幂次也可以是 (1/2)分数之类的幂次.\n")])]),t._v(" "),n("h2",{attrs:{id:"正规方程"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#正规方程"}},[t._v("#")]),t._v(" 正规方程")]),t._v(" "),n("p",[t._v("       高数学的稍微好一点的大概都会明白,找到函数的最低点并没有那么困难,只需要求导=0即可.")]),t._v(" "),n("p",[t._v("       复特征时则只需要偏导均为0(连续函数下,而建模一般只考虑连续函数8)即可. - "),n("strong",[t._v("即联立求方程组解θ")])]),t._v(" "),n("hr"),t._v(" "),n("p",[n("strong",[t._v("待补充")])])])}),[],!1,null,null,null);a.default=e.exports}}]);