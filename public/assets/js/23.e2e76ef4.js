(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{500:function(t,s,a){"use strict";a.r(s);var e=a(0),i=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#逻辑回归与线性回归的比较"}},[t._v("逻辑回归与线性回归的比较")])]),a("li",[a("a",{attrs:{href:"#逻辑回归函数的代码与图像"}},[t._v("逻辑回归函数的代码与图像")])]),a("li",[a("a",{attrs:{href:"#判定边界"}},[t._v("判定边界")])]),a("li",[a("a",{attrs:{href:"#逻辑回归的损失函数"}},[t._v("逻辑回归的损失函数")]),a("ul",[a("li",[a("a",{attrs:{href:"#推导过程"}},[t._v("推导过程")])])])]),a("li",[a("a",{attrs:{href:"#高级优化"}},[t._v("高级优化")])]),a("li",[a("a",{attrs:{href:"#多类别分类-一对多"}},[t._v("多类别分类: 一对多")])])])]),a("p"),t._v(" "),a("h1",{attrs:{id:"什么是逻辑回归"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是逻辑回归"}},[t._v("#")]),t._v(" 什么是逻辑回归?")]),t._v(" "),a("blockquote",[a("p",[t._v("在之前我们一直在介绍线性回归来拟合数据间的函数.这种拟合函数的方式会给我们直接求出想要的"),a("code",[t._v("值")]),t._v(".")]),t._v(" "),a("blockquote",[a("p",[t._v("那我们该如何解决"),a("code",[t._v("分类问题")]),t._v("呢?")])])]),t._v(" "),a("blockquote",[a("p",[t._v("什么是分类问题?")]),t._v(" "),a("blockquote",[a("p",[t._v("如判断一个照片是猫/狗/老鼠\n即相当于给你几个盒子,选一个正确的盒子将当前数据放进去,即完成一次分类.$\\Theta_{0} $")])])]),t._v(" "),a("p",[a("code",[t._v("对于线性回归模型,我们只能预测连续的值,然而对于分类问题.我们只需要回答0/1,否/是.")])]),t._v(" "),a("p",[t._v("       假设当我们的模型"),a("code",[t._v("h")]),t._v("：")]),t._v(" "),a("p",{staticClass:"katex-block math-block"},[a("span",{staticClass:"katex-display"},[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mo",{attrs:{fence:"true"}},[t._v("{")]),a("mtable",{attrs:{rowspacing:"0.3599999999999999em",columnalign:"left left",columnspacing:"1em"}},[a("mtr",[a("mtd",[a("mstyle",{attrs:{scriptlevel:"0",displaystyle:"false"}},[a("mrow",[a("msub",[a("mi",[t._v("h")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v("Θ")])],1),a("mo",{attrs:{stretchy:"false"}},[t._v("(")]),a("mi",[t._v("x")]),a("mo",{attrs:{stretchy:"false"}},[t._v(")")]),a("mo",[t._v(">")]),a("mo",[t._v("=")]),a("mn",[t._v("0.5")]),a("mo",{attrs:{separator:"true"}},[t._v(",")])],1)],1)],1),a("mtd",[a("mstyle",{attrs:{scriptlevel:"0",displaystyle:"false"}},[a("mrow",[a("mi",[t._v("y")]),a("mo",[t._v("=")]),a("mn",[t._v("1")])],1)],1)],1)],1),a("mtr",[a("mtd",[a("mstyle",{attrs:{scriptlevel:"0",displaystyle:"false"}},[a("mrow")],1)],1)],1),a("mtr",[a("mtd",[a("mstyle",{attrs:{scriptlevel:"0",displaystyle:"false"}},[a("mrow",[a("msub",[a("mi",[t._v("h")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v("Θ")])],1),a("mo",{attrs:{stretchy:"false"}},[t._v("(")]),a("mi",[t._v("x")]),a("mo",{attrs:{stretchy:"false"}},[t._v(")")]),a("mo",[t._v("<")]),a("mn",[t._v("0.5")]),a("mo",{attrs:{separator:"true"}},[t._v(",")])],1)],1)],1),a("mtd",[a("mstyle",{attrs:{scriptlevel:"0",displaystyle:"false"}},[a("mrow",[a("mi",[t._v("y")]),a("mo",[t._v("=")]),a("mn",[t._v("0")])],1)],1)],1)],1)],1)],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("\\begin{cases} h_{\\Theta}(x) >= 0.5, & y=1 \\\\\\\\ h_{\\Theta}(x) < 0.5, & y=0 \\end{cases}\n")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"4.32em","vertical-align":"-1.9100000000000001em"}}),a("span",{staticClass:"minner"},[a("span",{staticClass:"mopen"},[a("span",{staticClass:"delimsizing mult"},[a("span",{staticClass:"vlist-t vlist-t2"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"2.35002em"}},[a("span",{staticStyle:{top:"-2.19999em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3.15em"}}),a("span",{staticClass:"delimsizinginner delim-size4"},[a("span",[t._v("⎩")])])]),a("span",{staticStyle:{top:"-2.19499em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3.15em"}}),a("span",{staticClass:"delimsizinginner delim-size4"},[a("span",[t._v("⎪")])])]),a("span",{staticStyle:{top:"-2.20499em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3.15em"}}),a("span",{staticClass:"delimsizinginner delim-size4"},[a("span",[t._v("⎪")])])]),a("span",{staticStyle:{top:"-3.15001em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3.15em"}}),a("span",{staticClass:"delimsizinginner delim-size4"},[a("span",[t._v("⎨")])])]),a("span",{staticStyle:{top:"-4.2950099999999996em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3.15em"}}),a("span",{staticClass:"delimsizinginner delim-size4"},[a("span",[t._v("⎪")])])]),a("span",{staticStyle:{top:"-4.30501em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3.15em"}}),a("span",{staticClass:"delimsizinginner delim-size4"},[a("span",[t._v("⎪")])])]),a("span",{staticStyle:{top:"-4.60002em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3.15em"}}),a("span",{staticClass:"delimsizinginner delim-size4"},[a("span",[t._v("⎧")])])])]),a("span",{staticClass:"vlist-s"},[t._v("​")])]),a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"1.8500199999999998em"}},[a("span")])])])])]),a("span",{staticClass:"mord"},[a("span",{staticClass:"mtable"},[a("span",{staticClass:"col-align-l"},[a("span",{staticClass:"vlist-t vlist-t2"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"2.41em"}},[a("span",{staticStyle:{top:"-4.41em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3.008em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathdefault"},[t._v("h")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t vlist-t2"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.32833099999999993em"}},[a("span",{staticStyle:{top:"-2.5500000000000003em","margin-left":"0em","margin-right":"0.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mtight"},[a("span",{staticClass:"mord mtight"},[t._v("Θ")])])])])]),a("span",{staticClass:"vlist-s"},[t._v("​")])]),a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.15em"}},[a("span")])])])])]),a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord mathdefault"},[t._v("x")]),a("span",{staticClass:"mclose"},[t._v(")")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}}),a("span",{staticClass:"mrel"},[t._v(">")]),a("span",{staticClass:"mrel"},[t._v("=")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}}),a("span",{staticClass:"mord"},[t._v("0")]),a("span",{staticClass:"mord"},[t._v(".")]),a("span",{staticClass:"mord"},[t._v("5")]),a("span",{staticClass:"mpunct"},[t._v(",")])])]),a("span",{staticStyle:{top:"-2.97em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3.008em"}}),a("span",{staticClass:"mord"})]),a("span",{staticStyle:{top:"-1.5300000000000002em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3.008em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathdefault"},[t._v("h")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t vlist-t2"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.32833099999999993em"}},[a("span",{staticStyle:{top:"-2.5500000000000003em","margin-left":"0em","margin-right":"0.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mtight"},[a("span",{staticClass:"mord mtight"},[t._v("Θ")])])])])]),a("span",{staticClass:"vlist-s"},[t._v("​")])]),a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.15em"}},[a("span")])])])])]),a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord mathdefault"},[t._v("x")]),a("span",{staticClass:"mclose"},[t._v(")")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}}),a("span",{staticClass:"mrel"},[t._v("<")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}}),a("span",{staticClass:"mord"},[t._v("0")]),a("span",{staticClass:"mord"},[t._v(".")]),a("span",{staticClass:"mord"},[t._v("5")]),a("span",{staticClass:"mpunct"},[t._v(",")])])])]),a("span",{staticClass:"vlist-s"},[t._v("​")])]),a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"1.9099999999999997em"}},[a("span")])])])]),a("span",{staticClass:"arraycolsep",staticStyle:{width:"1em"}}),a("span",{staticClass:"col-align-l"},[a("span",{staticClass:"vlist-t vlist-t2"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"2.41em"}},[a("span",{staticStyle:{top:"-4.41em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3.008em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.03588em"}},[t._v("y")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}}),a("span",{staticClass:"mrel"},[t._v("=")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}}),a("span",{staticClass:"mord"},[t._v("1")])])]),a("span",{staticStyle:{top:"-1.5299999999999998em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3.008em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.03588em"}},[t._v("y")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}}),a("span",{staticClass:"mrel"},[t._v("=")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}}),a("span",{staticClass:"mord"},[t._v("0")])])])]),a("span",{staticClass:"vlist-s"},[t._v("​")])]),a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"1.9100000000000001em"}},[a("span")])])])])])]),a("span",{staticClass:"mclose nulldelimiter"})])])])])])]),t._v(" "),a("p",[t._v("       当我们针对上述方案使用线性回归模型时,会出现远离[0,1]的情况,所以我们很难量化远离的程度对结果的影响.这时我们就需要借助一个新的模型来将"),a("code",[t._v("结果约束在[0,1]")]),t._v("之间.故引出了"),a("code",[t._v("逻辑回归")]),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"逻辑回归与线性回归的比较"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#逻辑回归与线性回归的比较"}},[t._v("#")]),t._v(" 逻辑回归与线性回归的比较")]),t._v(" "),a("blockquote",[a("p",[t._v("线性回归模型:")]),t._v(" "),a("blockquote",[a("p",[t._v("\\begin{equation}h_{\\Theta }\\left ( x \\right ) = \\Theta _{0} + \\Theta _{1}x\\end{equation}")])])]),t._v(" "),a("blockquote",[a("p",[t._v("逻辑回归模型:")]),t._v(" "),a("blockquote",[a("p",[t._v("\\begin{equation}\\begin{cases}h_{\\Theta}(x)=g(\\Theta^{T}X) \\\\ \\frac{1}{1+e^{-z}}\\end{cases}\\end{equation}")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("X")]),t._v("代表特征向量,"),a("code",[t._v("g")]),t._v("代表逻辑函数,又称"),a("code",[t._v("S函数")]),t._v(",即"),a("code",[t._v("Sigmoid函数")]),t._v(".")])])])]),t._v(" "),a("h2",{attrs:{id:"逻辑回归函数的代码与图像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#逻辑回归函数的代码与图像"}},[t._v("#")]),t._v(" 逻辑回归函数的代码与图像")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" numpy "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" np\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sigmoid")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("z"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" \n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" np"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("z"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("       图像:")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://cdn.be-sunshine.cn/13.jpg",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"判定边界"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#判定边界"}},[t._v("#")]),t._v(" 判定边界")]),t._v(" "),a("p",[t._v("       我们引入"),a("code",[t._v("判定边界")]),t._v("来明确逻辑回归到底在预测什么.")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",[t._v("对于分类问题,我们知道分类即将一组数据判定为一个种类.")]),t._v(" "),a("p",[t._v("而对于不同种类,广义上应该存在着一个边界,即越界即为不同的类别.")])]),t._v(" "),a("p",[t._v("       例如:")]),t._v(" "),a("blockquote",[a("p",[t._v("线性边界")])]),t._v(" "),a("p",[a("img",{attrs:{src:"http://cdn.be-sunshine.cn/14.jpg",alt:""}})]),t._v(" "),a("blockquote",[a("p",[t._v("多项式边界(如圆)")])]),t._v(" "),a("p",[a("img",{attrs:{src:"http://cdn.be-sunshine.cn/15.jpg",alt:""}})]),t._v(" "),a("p",[t._v("       根据之前给出的"),a("code",[t._v("Sigmoid-逻辑回归")]),t._v("模型的式子,不难推出:")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://cdn.be-sunshine.cn/16.jpg",alt:""}})]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",[t._v("sigmoid并不是直接求出一个准确的类别整数")]),t._v(" "),a("p",[t._v("而是给出一个明确对半分的边界,以及上下限来使得结果可以轻松的量化成")]),t._v(" "),a("p",[t._v("1/0 是/否")]),t._v(" "),a("p",[t._v("而"),a("code",[t._v("实际边界")]),t._v("的绘制,则是sigmoid函数"),a("code",[t._v("嵌套的")]),t._v("\n\\begin{equation}\n\\Theta_{0} + \\Theta_{1}X_{1}^{1} + … + \\Theta_{2}X_{2}^{2} + …\n\\end{equation}")]),t._v(" "),a("blockquote",[a("p",[t._v("反正就是"),a("code",[t._v("g(边界函数)")])])])]),t._v(" "),a("p",[t._v("       上面第组数据的判定边界函数:")]),t._v(" "),a("p",[t._v("\\begin{equation}\n\\Theta_{0} + \\Theta_{1}X_{1} + \\Theta_{2}X_{2} + \\Theta_{3}X_{1}^{2} + \\Theta_{4}X_{2}^{2}\n\\end{equation}")]),t._v(" "),a("p",[t._v("       其模型为:")]),t._v(" "),a("p",[t._v("\\begin{equation}\nh_{\\Theta}(x) = g(\\Theta_{0} + \\Theta_{1}X_{1} + \\Theta_{2}X_{2} + \\Theta_{3}X_{1}^{2} + \\Theta_{4}X_{2}^{2} )\n\\end{equation}")]),t._v(" "),a("h2",{attrs:{id:"逻辑回归的损失函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#逻辑回归的损失函数"}},[t._v("#")]),t._v(" 逻辑回归的损失函数")]),t._v(" "),a("p",[t._v("       与前面相同,我们需要找到所有θ的解来使得损失函数最小化.")]),t._v(" "),a("p",[t._v("       所以我们需要定义这个损失函数,之后才能对θ进行优化.")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://cdn.be-sunshine.cn/17.jpg",alt:""}})]),t._v(" "),a("p",[t._v("       在线性回归中,我们定义其损失函数是所有模型误差的平方和.但如果我们在逻辑回归中也用这个损失函数,函数本身存在最优解,但损失函数并非"),a("code",[t._v("凸函数")]),t._v(",即"),a("code",[t._v("非凸函数")]),t._v(",存在复数个局部最优解,所以我们使用梯度下降法时只能找到局部最优解.")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://cdn.be-sunshine.cn/18.jpg",alt:""}})]),t._v(" "),a("p",[t._v("       我们定义逻辑回归的损失函数,使其能够接近上面的右图:")]),t._v(" "),a("p",[t._v("\\begin{equation}\nJ(\\Theta) = \\frac{1}{m}\\sum_{1}^{n}Cost(h_{\\Theta}(x^{(i)}),y^{(i)})\n\\end{equation}")]),t._v(" "),a("p",[t._v("       其中Cost()函数原型如下:")]),t._v(" "),a("p",[t._v("\\begin{equation}\nCost(h_{\\Theta}(x),y) =\\begin{cases} -log(h_{\\Theta}(x))， & if(y=1) \\\\ -log(1-h_{\\Theta}(x)), & if(y=0) \\end{cases}\n\\end{equation}")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://cdn.be-sunshine.cn/20.jpg",alt:""}})]),t._v(" "),a("p",[t._v("       这样构建的𝐶𝑜𝑠𝑡(ℎ𝜃(𝑥), 𝑦)函数的特点是：当实际的 𝑦 = 1 且ℎ𝜃(𝑥)也为 1 时误差为 0，当 𝑦 = 1 但ℎ𝜃(𝑥)不为 1 时误差随着ℎ𝜃(𝑥)变小而变大；当实际的 𝑦 = 0 且ℎ𝜃(𝑥)也为 0 时代价为 0，当𝑦 = 0 但ℎ𝜃(𝑥)不为 0 时误差随着 ℎ𝜃(𝑥)的变大而变大。")]),t._v(" "),a("blockquote",[a("p",[t._v("其左右函数如上图所示,将其改成非分段函数格式如下:")])]),t._v(" "),a("p",[a("img",{attrs:{src:"http://cdn.be-sunshine.cn/21.jpg",alt:""}})]),t._v(" "),a("p",[a("code",[t._v("根据:")])]),t._v(" "),a("p",[t._v("\\begin{equation}\n\\Theta_{j} := \\Theta{j} - \\alpha \\frac{\\partial}{\\partial x}J(\\Theta)\n\\end{equation}")]),t._v(" "),a("p",[t._v("推片导公式,得梯度下降公式:\n"),a("img",{attrs:{src:"http://cdn.be-sunshine.cn/22.jpg",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"推导过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#推导过程"}},[t._v("#")]),t._v(" 推导过程")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://cdn.be-sunshine.cn/23.jpg",alt:""}})]),t._v(" "),a("p",[t._v("       注：虽然得到的梯度下降算法表面上看上去与线性回归的梯度下降算法一样，但是这里的ℎ𝜃(𝑥) = 𝑔(𝜃^𝑇𝑋)与线性回归中不同，所以实际上是不一样的。另外，在运行梯度下降算法之前，进行特征缩放依旧是非常必要的。")]),t._v(" "),a("h2",{attrs:{id:"高级优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#高级优化"}},[t._v("#")]),t._v(" 高级优化")]),t._v(" "),a("p",[t._v("       当我们使用梯度下降时,我们的学习率该如何选择?而且每次进行梯度下降都会有很多次.而我们为了求参数Theta,必然会有更多的选择,当然,某些选择非常的复杂,"),a("code",[t._v("(针对这节主要是了解,关键还是使用梯度下降,所以我直接复制粘贴吴恩达老师的话)")])]),t._v(" "),a("p",[t._v("而梯度下降并不是我们可以使用的唯一算法，还有其他一些算法，更高级、更复杂。如果我们能用这些方法来计算代价函数𝐽(𝜃)和偏导数项𝜕𝜕𝜃𝑗 𝐽(𝜃)两个项的话，那么这些算法就是为我们优化代价函数的不同方法，共轭梯度法 BFGS (变尺度法) 和 L-BFGS (限制变尺度法) 就是其中一些更高级的优化算法，它们需要有一种方法来计算 𝐽(𝜃)，以及需要一种方法计算导数项，然后使用比梯度下降更复杂的算法来最小化代价函数。这三种算法的具体细节超出了本门课程的范畴。实际上你最后通常会花费很多天，或几周时间研究这些算法，你可以专门学一门课来提高数值计算能力，不过让我来告诉你他们的一些特性：")]),t._v(" "),a("p",[t._v("这三种算法有许多优点：")]),t._v(" "),a("p",[t._v("一个是使用这其中任何一个算法，你通常不需要手动选择学习率 𝛼，所以对于这些算法的一种思路是，给出计算导数项和代价函数的方法，你可以认为算法有一个智能的内部循环，而且，事实上，他们确实有一个智能的内部循环，称为线性搜索(line search)算法，它可以"),a("code",[t._v("自动尝试不同的学习速率 𝛼，并自动选择一个好的学习速率 𝑎")]),t._v("，因此它甚至可以为每次迭代选择不同的学习速率，那么你就不需要自己选择。这些算法实际上在做更复杂的事情，而不仅仅是选择一个好的学习率，所以它们往往最终收敛得远远快于梯度下降，不过关于它们到底做什么的详细讨论，已经超过了本门课程的范围。")]),t._v(" "),a("p",[t._v("实际上，我过去使用这些算法已经很长一段时间了，也许超过十年了，使用得相当频繁，而直到几年前我才真正搞清楚共轭梯度法 BFGS 和 L-BFGS 的细节。我们实际上完全有可能成功使用这些算法，并应用于许多不同的学习问题，而不需要真正理解这些算法的内环间在做什么，如果说这些算法有缺点的话，那么我想说主要缺点是它们比梯度下降法复杂多了，特别是你最好不要使用 L-BGFS、BFGS 这些算法，除非你是数值计算方面的专家。实际上，我不会建议你们编写自己的代码来计算数据的平方根，或者计算逆矩阵，因为对于这些算法，我还是会建议你直接使用一个软件库，比如说，要求一个平方根，我们所能做的就是调用一些别人已经写好用来计算数字平方根的函数。")]),t._v(" "),a("h2",{attrs:{id:"多类别分类-一对多"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多类别分类-一对多"}},[t._v("#")]),t._v(" 多类别分类: 一对多")]),t._v(" "),a("blockquote",[a("p",[t._v("我们知道,对于Logistic回归目前只能适用于"),a("code",[t._v("二元分类")]),t._v(",即"),a("code",[t._v("0/1")])])]),t._v(" "),a("blockquote",[a("blockquote",[a("p",[t._v("那么我们如何使用逻辑回归来实现多分类问题呢?")])])]),t._v(" "),a("p",[a("code",[t._v("什么是多分类?")])]),t._v(" "),a("p",[a("img",{attrs:{src:"http://cdn.be-sunshine.cn/24.jpg",alt:""}})]),t._v(" "),a("p",[t._v("       如上图,此时的数据类别并不是只有两组类别,而是出现了多组类别.那么我们该如何使用逻辑回归解决多分类问题呢?"),a("strong",[t._v('我们可以创建一个"伪"训练集,即将Class1看做A类,将Class2和Class3合并成B类')]),t._v(",这样我们就完成了一次分类.")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://cdn.be-sunshine.cn/25.jpg",alt:""}})]),t._v(" "),a("p",[t._v("       同理,可以对其他的也进行同样的操作.")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://cdn.be-sunshine.cn/26.jpg",alt:""}})]),t._v(" "),a("p",[t._v("       然后我们对每个分类器都进行一次输入与输出,然后选择一个使模型最大的方案.这就是解决多分类问题的方法.")])])}),[],!1,null,null,null);s.default=i.exports}}]);