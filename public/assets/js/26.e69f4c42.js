(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{503:function(t,a,_){"use strict";_.r(a);var v=_(0),e=Object(v.a)({},(function(){var t=this,a=t.$createElement,_=t._self._c||a;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("p"),_("div",{staticClass:"table-of-contents"},[_("ul",[_("li",[_("a",{attrs:{href:"#模型表示"}},[t._v("模型表示")])]),_("li",[_("a",{attrs:{href:"#代价函数"}},[t._v("代价函数")])]),_("li",[_("a",{attrs:{href:"#梯度下降"}},[t._v("梯度下降")]),_("ul",[_("li",[_("a",{attrs:{href:"#学习率"}},[t._v("学习率")])]),_("li",[_("a",{attrs:{href:"#学习率的选取"}},[t._v("学习率的选取")])]),_("li",[_("a",{attrs:{href:"#梯度下降的线性回归"}},[t._v("梯度下降的线性回归")])])])])])]),_("p"),t._v(" "),_("h1",{attrs:{id:"单变量线性回归"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#单变量线性回归"}},[t._v("#")]),t._v(" 单变量线性回归")]),t._v(" "),_("h2",{attrs:{id:"模型表示"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#模型表示"}},[t._v("#")]),t._v(" 模型表示")]),t._v(" "),_("p",[_("img",{attrs:{src:"http://cdn.be-sunshine.cn/1.jpg",alt:""}})]),t._v(" "),_("p",[t._v("       所以什么叫线性回归?")]),t._v(" "),_("p",[t._v("       如上图所示,当我们对与房屋大小对其价格的影响时,即需要对一组数据集进行预测时。我们可以尝试预测最接近该数据集的函数,进而对后续输入数据进行预测。")]),t._v(" "),_("p",[t._v("       且每组数据均存在正确的答案。")]),t._v(" "),_("p",[_("img",{attrs:{src:"http://cdn.be-sunshine.cn/QQ%E6%88%AA%E5%9B%BE20200120160652.jpg",alt:""}})]),t._v(" "),_("p",[t._v("       如上图所示,在对数据集进行算法的训练后得出一个理论模型 "),_("code",[t._v("h")]),t._v(" -> "),_("code",[t._v("hypothesis(假设)")])]),t._v(" "),_("p",[t._v("       之后再将想要预测的房间大小输入模型即可对其价格进行预测。")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",[_("code",[t._v("单变量线性回归一般表达式为:\n")])])]),_("p",[t._v("\\begin{equation}\nh_{\\Theta }\\left ( x \\right ) = \\Theta _{0} + \\Theta _{1}x\n\\end{equation}")]),t._v(" "),_("h2",{attrs:{id:"代价函数"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#代价函数"}},[t._v("#")]),t._v(" 代价函数")]),t._v(" "),_("p",[t._v("       既然我们假设了一个函数可以用来拟合所给定的数据集,那我们该如何修改该函数的参数以及判断该函数的优劣呢?")]),t._v(" "),_("p",[t._v("       在此我们引入代价函数的概念。")]),t._v(" "),_("p",[_("code",[t._v("建模误差")]),t._v(":")]),t._v(" "),_("p",[_("img",{attrs:{src:"http://cdn.be-sunshine.cn/QQ%E6%88%AA%E5%9B%BE20200120162038.jpg",alt:""}})]),t._v(" "),_("p",[t._v("       如上图所示,当我们任意拟合一条直线在所有数据集之中,其数据必然会同该直线有一定的距离。我们将其叫做"),_("code",[t._v("建模误差")]),t._v(",其中 [拟合直线上的数据] 称之为"),_("code",[t._v("预测值")]),t._v(",建模误差即预测值与实际值的差距,我们用如下函数表示:")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",[_("code",[t._v("下面的函数表示误差的平方和最小,目标即为找到参数使得损失函数最小.\n")])])]),_("p",[t._v("\\begin{equation}\nJ\\left ( \\Theta_{0};\\Theta_{1}  \\right ) = \\frac{1}{2m}\\sum_{i=1}^{m}( h_{\\Theta }( x^{(i)}) - y^{(i)}  )^{2}\n\\end{equation}")]),t._v(" "),_("div",{staticClass:"custom-block tip"},[_("ol",[_("li",[t._v("这里为什么"),_("strong",[t._v("除以2m")]),t._v("而不是m?")])]),t._v(" "),_("p",[t._v("吴恩达老师给出的解释是为了后续更好的计算,因为存在一个平方,所以求导时就可以将2消去,因为"),_("strong",[t._v("损失函数只是为了衡量模型的好坏")]),t._v(",所以并不是一定要是固定的.")]),t._v(" "),_("ol",{attrs:{start:"2"}},[_("li",[t._v("损失函数是单个数据的,代价函数是整个数据组的")])])]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",[_("code",[t._v("以θ_0,θ_1和J(θ_0,θ_1)为坐标绘制等高线图:\n")])])]),_("p",[_("img",{attrs:{src:"http://cdn.be-sunshine.cn/2.jpg",alt:""}})]),t._v(" "),_("p",[t._v("       故将问题转化为: 找出等高线上的最低点. 那么接下来我们来讨论一下如何找到最低点.")]),t._v(" "),_("h2",{attrs:{id:"梯度下降"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#梯度下降"}},[t._v("#")]),t._v(" 梯度下降")]),t._v(" "),_("p",[t._v("       高数中可以对每个函数进行求导,而导数的几何意义可近似理解为极小的变化率(lim △x->0)时y的增长。而"),_("code",[t._v("梯度")]),t._v("恰恰是所有偏导数中最大的值.")]),t._v(" "),_("p",[t._v("       即几何意义为向着梯度下降最快的方向前进,可在局部找到最优解。")]),t._v(" "),_("p",[t._v("       **批量梯度下降(batch gradient descent)**公式:")]),t._v(" "),_("p",[t._v("repeat until convergence {\n\\begin{equation}\n\\Theta_{j} = \\Theta_{j} - \\alpha \\frac{\\partial }{\\partial \\Theta_{j}}J(\\Theta_{0};\\Theta_{1})\n(for j=0 and j=1)\n\\end{equation}\n}")]),t._v(" "),_("h3",{attrs:{id:"学习率"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#学习率"}},[t._v("#")]),t._v(" 学习率")]),t._v(" "),_("p",[t._v("       可以看到上述公式中存在一个变量\\begin{equation} \\alpha \\end{equation} ,这个变量决定了我们需要让损失函数沿着"),_("code",[t._v("梯度")]),t._v("的方向向下迈出多大的步子.")]),t._v(" "),_("p",[t._v("       在批量梯度下降中，我们每一次都同时让每一个的参数减去学习速率乘以代价函数对于该变量的偏导数。")]),t._v(" "),_("p",[_("img",{attrs:{src:"http://cdn.be-sunshine.cn/3.jpg",alt:""}})]),t._v(" "),_("p",[_("strong",[t._v("如上图中的temp0与temp1所示.")])]),t._v(" "),_("h3",{attrs:{id:"学习率的选取"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#学习率的选取"}},[t._v("#")]),t._v(" 学习率的选取")]),t._v(" "),_("p",[t._v("       既然"),_("code",[t._v("学习率")]),t._v("是决定了我们沿着能让代价函数下降程度最大的方向卖出的步子,那么当 𝑎 减小时,对于变量的影响也就越小,同理,𝑎越大时,对于变量的影响也就越大.")]),t._v(" "),_("p",[t._v("       另外一个问题，如果我们预先把𝜃1放在一个局部的最低点，下一步梯度下降法会怎样工作？ -- 因为其导数已经是0,所以变量的值将不会再改变.故亦不会改变参数的值.故𝑎 保持不变,参数依然可以收敛到最低点.")]),t._v(" "),_("p",[_("strong",[t._v("当然,前提是它有能够找到最低点,而不是无数次的在最低点附近徘徊,那样会导致导数的值得收敛速率过慢,而这个问题则有可能是学习率导致的.")])]),t._v(" "),_("p",[_("img",{attrs:{src:"http://cdn.be-sunshine.cn/4.jpg",alt:""}})]),t._v(" "),_("p",[t._v("       如上图,若绿色的点因为学习率过高而直接蹿过最低点,他就有可能一直在最低点附近震荡,而永远到达不了最低点.")]),t._v(" "),_("p",[t._v("       但如果学习率选择合理,则学习率的影响也可以慢慢变小,为什么呢? -- "),_("strong",[t._v("因为在逐渐向下减小到最低点的过程中,导数是逐渐收敛到0的.")])]),t._v(" "),_("p",[t._v("       通俗来讲,越往下走,迈的步子也就越小.")]),t._v(" "),_("h3",{attrs:{id:"梯度下降的线性回归"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#梯度下降的线性回归"}},[t._v("#")]),t._v(" 梯度下降的线性回归")]),t._v(" "),_("p",[_("img",{attrs:{src:"http://cdn.be-sunshine.cn/5.jpg",alt:""}})]),t._v(" "),_("p",[t._v("       上图即梯度下降法中线性回归的推导.")])])}),[],!1,null,null,null);a.default=e.exports}}]);