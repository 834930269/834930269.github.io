(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{220:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#欧拉公式与初等群论"}},[t._v("欧拉公式与初等群论")]),a("ul",[a("li",[a("a",{attrs:{href:"#简要概述"}},[t._v("简要概述")])]),a("li",[a("a",{attrs:{href:"#复数运算法则与编码"}},[t._v("复数运算法则与编码")])]),a("li",[a("a",{attrs:{href:"#单位根"}},[t._v("单位根")])]),a("li",[a("a",{attrs:{href:"#多项式乘法"}},[t._v("多项式乘法")])]),a("li",[a("a",{attrs:{href:"#离散傅里叶变换dft-discrete-fourier-transform"}},[t._v("离散傅里叶变换DFT (Discrete Fourier Transform)")])]),a("li",[a("a",{attrs:{href:"#快速傅里叶变换-fft"}},[t._v("快速傅里叶变换 FFT")])])])]),a("li",[a("a",{attrs:{href:"#参考时发现的一个比较好的博客"}},[t._v("参考时发现的一个比较好的博客")])])])]),a("p"),t._v(" "),a("h1",{attrs:{id:"快速傅里叶变换"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#快速傅里叶变换"}},[t._v("#")]),t._v(" 快速傅里叶变换")]),t._v(" "),a("h2",{attrs:{id:"欧拉公式与初等群论"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#欧拉公式与初等群论"}},[t._v("#")]),t._v(" 欧拉公式与初等群论")]),t._v(" "),a("hr"),t._v(" "),a("h3",{attrs:{id:"简要概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简要概述"}},[t._v("#")]),t._v(" 简要概述")]),t._v(" "),a("p",[t._v("       何谓初等群论:")]),t._v(" "),a("p",[t._v("Groups <-> Symmetry - 组 <-> 对称群")]),t._v(" "),a("blockquote",[a("p",[t._v("对称群,比如一个正方形可以沿着某个轴做任意的旋转\n每次旋转都是关于该轴对称,即称为对称群")])]),t._v(" "),a("p",[t._v("       同样的还有"),a("code",[t._v("旋转群")]),t._v(","),a("code",[t._v("立方体对称群")]),t._v(",...\n       然后我们考虑"),a("code",[t._v("等加群变换")]),t._v(",比如一个长方形"),a("code",[t._v("任意旋转360度")]),t._v(","),a("code",[t._v("旋转10度,再反向旋转370度")]),t._v(","),a("code",[t._v("旋转0度")]),t._v(",这一系列的"),a("code",[t._v("作用的最终结果相同")]),t._v(",即等价,数学中的"),a("code",[t._v("加法,乘法等概念也由此递推得来.")])]),t._v(" "),a("p",[t._v("       我们前置需要介绍的群即"),a("code",[t._v("数群")]),t._v("-"),a("code",[t._v("复数群")]),t._v(",如下图所示:\n"),a("img",{attrs:{src:"http://cdn.be-sunshine.cn/groups.png",alt:""}})]),t._v(" "),a("p",[a("code",[t._v("其中加法和乘法可以认作为作用叠加")]),t._v(",什么叫作用叠加?"),a("code",[t._v("加法群中的式子: 0-2= -2 的叠加效果")]),t._v("如下图所示")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://cdn.be-sunshine.cn/%E5%8A%A0%E6%B3%95%E7%BE%A4%E4%BD%9C%E7%94%A8%E5%8F%A0%E5%8A%A0.png",alt:""}})]),t._v(" "),a("p",[t._v("       如图所示,加法群主要作用即平移,"),a("code",[t._v("乘法群则为缩放 - 固定0点(原点)的缩放")])]),t._v(" "),a("h4",{attrs:{id:"向量群简述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#向量群简述"}},[t._v("#")]),t._v(" 向量群简述")]),t._v(" "),a("p",[t._v("       举个栗子:")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3314892396,2934033990&fm=11&gp=0.jpg",alt:""}})]),t._v(" "),a("p",[t._v("       如上图所示,A = (4,3),我们知道,该等式又满足: A = (4,0) + (0,3),即两个向量相加(作用的叠加),则向量加法的定义即将这些作用相加,最终的结果即(4,3)，向右移动四位,向上移动三位...可以认为"),a("code",[t._v("将原点右移四位,向上移动三位")]),t._v("后原点的位置即A的位置,向量乘法可以类比.")]),t._v(" "),a("h4",{attrs:{id:"复空间群"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#复空间群"}},[t._v("#")]),t._v(" 复空间群")]),t._v(" "),a("p",[t._v("       何谓复空间?即纵坐标为"),a("code",[t._v("i的倍数")]),t._v(",横坐标"),a("code",[t._v("为整数")]),t._v(",至于i的定义,由后续的定义来表示.")]),t._v(" "),a("blockquote",[a("p",[t._v("复空间加法: 与向量的加法类似,只不过因为向量是单纯的数字,所以加法不能简单地用一个值来作为标量,而复数则可以加起来.")])]),t._v(" "),a("p",[a("img",{attrs:{src:"http://cdn.be-sunshine.cn/%E5%A4%8D%E7%A9%BA%E9%97%B4%E5%8A%A0%E6%B3%95.png",alt:""}})]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("复数乘法群")]),t._v(": 先做一个图示:")])]),t._v(" "),a("p",[a("img",{attrs:{src:"http://cdn.be-sunshine.cn/%E5%A4%8D%E6%95%B0%E4%B9%98%E6%B3%95%E7%BE%A4.png",alt:""}})]),t._v(" "),a("p",[t._v("       我们想象一下,假设"),a("code",[t._v("有一个钉子钉住了原点")]),t._v(",那么我们抓住"),a("code",[t._v("1")]),t._v("这一点拉扯到任意地方(假设全激怒会等比例缩放),那当我们将"),a("code",[t._v("1")]),t._v("拉到"),a("code",[t._v("1i")]),t._v("时,"),a("code",[t._v("坐标轴即旋转了90度")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("blockquote",[a("p",[t._v("发现了么?")])]),t._v(" "),a("p",[t._v("1 -> 1i 就等于旋转了90度")]),t._v(" "),a("p",[t._v("所以 复数乘法定义中: 1*i 即旋转90度")]),t._v(" "),a("p",[t._v("同理: 我们知道平常学习复数时, i*i = -1")]),t._v(" "),a("p",[t._v("为什么?")]),t._v(" "),a("p",[t._v("由图可知,当我们再乘上一个·i·时就再次旋转90度")]),t._v(" "),a("p",[t._v("而"),a("code",[t._v("1i到-1")]),t._v("的角度为90度.")]),t._v(" "),a("p",[t._v("即 "),a("code",[t._v("i*i = -1")])])]),t._v(" "),a("blockquote",[a("p",[t._v("旋转30度的复数乘法群如下所示:")])]),t._v(" "),a("p",[a("img",{attrs:{src:"http://cdn.be-sunshine.cn/30%E5%BA%A6%E5%A4%8D%E6%95%B0%E4%B9%98%E6%B3%95%E7%BE%A4.png",alt:""}})]),t._v(" "),a("blockquote",[a("p",[t._v("可以发现其角度是由实部与虚部共同作用产生的")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[a("code",[t._v("插播一个理论")]),t._v(": 同构")]),t._v(" "),a("p",[t._v("简单的同构(在这里)即代表"),a("code",[t._v("加法与乘法的共同作用")]),t._v(",并且在共同作用下保持结构不发生变化")]),t._v(" "),a("p",[t._v("如复指数群\n"),a("img",{attrs:{src:"http://cdn.be-sunshine.cn/%E5%A4%8D%E6%8C%87%E6%95%B0%E7%BE%A4.png",alt:""}})]),t._v(" "),a("blockquote",[a("p",[t._v("这里将复指数群定义为 左侧加法群中平移i的倍数同样映射到右侧乘法群中单位圆上的点,单位元的弧即为加法群中的纵轴"),a("code",[t._v("(i轴)")])]),t._v(" "),a("blockquote",[a("p",[t._v("如 2^i 映射到右图约为0.693弧度值的旋转\n5^i 约为1.609弧度的旋转\n而 "),a("code",[t._v("e")]),t._v("的独特之处在于: e^i 即左侧加法群向上移动一个"),a("code",[t._v("unit")]),t._v(",右侧乘法群同步"),a("code",[t._v("旋转一个弧度")])]),t._v(" "),a("blockquote",[a("p",[t._v("且 e^(πi)刚好相当于右侧单位元旋转180度,即"),a("code",[t._v("π弧度")])])])])])]),t._v(" "),a("blockquote",[a("p",[t._v("这就是为什么 e^(πi) = -1")])]),t._v(" "),a("blockquote",[a("p",[t._v("而这就是欧拉定理,"),a("code",[t._v("e^(θi) 所等价的复空间的点就是旋转θ度的单位圆上的点")]),t._v(" , 如 e^(π*i/2) = i")])]),t._v(" "),a("hr"),t._v(" "),a("h3",{attrs:{id:"复数运算法则与编码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#复数运算法则与编码"}},[t._v("#")]),t._v(" 复数运算法则与编码")]),t._v(" "),a("blockquote",[a("p",[t._v("知道了上述内容,我们可以得到如下运算关系")])]),t._v(" "),a("p",[a("img",{attrs:{src:"http://cdn.be-sunshine.cn/%E5%A4%8D%E6%95%B0%E4%B8%8Ee.png",alt:""}})]),t._v(" "),a("blockquote",[a("p",[t._v("代码如下:")])]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("#"),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("<stdc++.h>")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("using")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" std"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Complex")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//实部,虚部")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("double")]),t._v(" r"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Complex")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" r "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Complex")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("double")]),t._v(" real"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("double")]),t._v(" imag"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("r")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("real"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("i")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("imag"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nComplex "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("operator")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Complex a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Complex b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Complex")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("r "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("r"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nComplex "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("operator")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Complex a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Complex b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Complex")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("r "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("r"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nComplex "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("operator")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Complex a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Complex b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Complex")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("r "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("r "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("r"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("r "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"单位根"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#单位根"}},[t._v("#")]),t._v(" 单位根")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("z = x + yi = r(cosθ+isinθ)=re^(iθ)")]),t._v(" "),a("blockquote",[a("p",[t._v("θ为辐角(旋转度数),r为模(长度)")])])]),t._v(" "),a("p",[t._v("       棣莫弗定理： z^2 = r^2"),a("em",[t._v("e(i")]),t._v("(θ1+θ2))")]),t._v(" "),a("blockquote",[a("p",[t._v("单位根:")]),t._v(" "),a("blockquote",[a("p",[t._v("z^n = 1 = r^n*e^(nθi) 的根")]),t._v(" "),a("blockquote",[a("p",[t._v("因为单位根的n次方为"),a("code",[t._v("1")]),t._v(",所以单位根的模r一定等于"),a("code",[t._v("r=1")]),t._v("\n又因为单位根的n次方都落在点1处,所以 "),a("code",[t._v("nθ=2kπ")]),t._v("\n联立上述两个方程组找到 z^n 的所有解\n为: "),a("code",[t._v("θ=2kπ/n r=1")]),t._v(" 即 z(n,k) = e^(i * 2kπ/n)")])])])]),t._v(" "),a("p",[t._v("       将上述公式使用欧拉定理写成实部/虚部的形式:")]),t._v(" "),a("p",[a("code",[t._v("z(n,k) = cos(2kπ/n) + i*sin(2kπ/n) k=(0,1,2,...,n-1)")]),t._v(" 详见下图:")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://cdn.be-sunshine.cn/%E5%8D%95%E4%BD%8D%E6%A0%B9.png",alt:""}})]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("单位根三引理:")])])]),t._v(" "),a("p",[a("img",{attrs:{src:"http://cdn.be-sunshine.cn/%E5%8D%95%E4%BD%8D%E6%A0%B9%E4%B8%89%E5%BC%95%E7%90%86.png",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"多项式乘法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多项式乘法"}},[t._v("#")]),t._v(" 多项式乘法")]),t._v(" "),a("blockquote",[a("p",[t._v("多项式乘法可以认为是离散的卷积,而fft在竞赛中常用来计算卷积或者多项式乘法.\n朴素多项式乘法是O(n^2)复杂度\n但是O(n^2)复杂度是基于"),a("code",[t._v("系数表示")]),t._v("情况下的\n如果将其转换为"),a("code",[t._v("点值表示")]),t._v(",则可以使用FFT优化到O(nlgn)")])]),t._v(" "),a("h4",{attrs:{id:"多项式的点值表示"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多项式的点值表示"}},[t._v("#")]),t._v(" 多项式的点值表示")]),t._v(" "),a("ul",[a("li",[t._v("把多项式放到平面直角坐标系里面，看成一个函数")]),t._v(" "),a("li",[t._v("把n个不同的x代入，会得出n个不同的y，在坐标系内就是n个不同的点")]),t._v(" "),a("li",[t._v("那么这n个点唯一确定该多项式，也就是有且仅有一个多项式满足∀k,f(x_k)=y_k")])]),t._v(" "),a("p",[t._v("那么f(x)还可以用f(x)={(x0,f(x0)),(x1,f(x1)),(x2,f(x2)),...,(xn−1,f(xn−1))}来表示")]),t._v(" "),a("p",[t._v("这就是点值表示法,"),a("code",[t._v("即n个点唯一确定一个n次函数")])]),t._v(" "),a("h4",{attrs:{id:"点值表示下的多项式乘法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#点值表示下的多项式乘法"}},[t._v("#")]),t._v(" 点值表示下的多项式乘法")]),t._v(" "),a("blockquote",[a("p",[t._v("用朴素方法来做复杂度是O(n^2)\n用点值则只需要O(n)")])]),t._v(" "),a("p",[a("img",{attrs:{src:"http://cdn.be-sunshine.cn/%E7%82%B9%E5%80%BC%E8%A1%A8%E8%BE%BE%E5%BC%8F.png",alt:""}})]),t._v(" "),a("p",[a("code",[t._v("故使用FFT来求系数多项式的点值形式,后直接将两式相乘就可以唯一确定相乘后的多项式,之后求值可以用插值,也可以逆变换回系数再进行求值(这个复杂度就高了)")])]),t._v(" "),a("h3",{attrs:{id:"离散傅里叶变换dft-discrete-fourier-transform"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#离散傅里叶变换dft-discrete-fourier-transform"}},[t._v("#")]),t._v(" 离散傅里叶变换DFT (Discrete Fourier Transform)")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("DFT是为了将系数形式转换为点值形式")])]),t._v(" "),a("p",[t._v("       既然多项式点值是随便取值,那就随便选择n个数带入就好了,那么代入哪些数呢?如果带入一个整数x,求取x的幂的复杂度依然是平方级别的,"),a("code",[t._v("傅里叶选择带入单位根")]),t._v(",至于为什么,可以看这个博客:")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://blog.csdn.net/enjoy_pascal/article/details/81478582",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://blog.csdn.net/enjoy_pascal/article/details/81478582"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("       离散傅里叶变换可以看做是一个将离散值从"),a("code",[t._v("时域")]),t._v("转换到"),a("code",[t._v("频域")]),t._v("的方式\n       离散傅里叶变换是对一个向量进行变换,可以将这个向量看做一个"),a("code",[t._v("n-1次多项式")]),t._v(",并在每个单位根处求值,得出向量y:")]),t._v(" "),a("p",[t._v("A(x) = lambda(i=0,n-1)ai*x^i")]),t._v(" "),a("p",[t._v("在w(n,0),w(n,1),...,w(n,n-1)处的值y0,y1,...,y(n-1)")]),t._v(" "),a("p",[t._v("yi = A(w(n,i)) = lambda(j=0,n-1)w(n,i×j)*aj")]),t._v(" "),a("p",[t._v("记为: y = DFT_{n}(a)")]),t._v(" "),a("p",[t._v("正常求值(多项式乘法)的话时间复杂度O(n^2)")]),t._v(" "),a("h3",{attrs:{id:"快速傅里叶变换-fft"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#快速傅里叶变换-fft"}},[t._v("#")]),t._v(" 快速傅里叶变换 FFT")]),t._v(" "),a("blockquote",[a("p",[t._v("O(nlgn) - 根据单位根的性质和分治思想来优化DFT")])]),t._v(" "),a("p",[t._v("       第一步,将A(x)拆分为奇数项与偶数项,然后想办法将A(x,a)与A(x,a_奇数),A(x,a_偶数)项联立")]),t._v(" "),a("ul",[a("li",[a("ol",[a("li",[t._v("将偶数项与奇数项同时替换参数x为x^2")])])]),t._v(" "),a("li",[a("ol",{attrs:{start:"2"}},[a("li",[t._v("奇数项乘上x")])])])]),t._v(" "),a("p",[a("img",{attrs:{src:"http://cdn.be-sunshine.cn/FFT1.png",alt:""}})]),t._v(" "),a("p",[t._v("       根据单位根的消去引理和折半引理可以将上式简化:")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://cdn.be-sunshine.cn/FFT2.png",alt:""}})]),t._v(" "),a("p",[a("code",[t._v("上图最后两个式子为带入两个具体的值后的表达式")]),t._v(",又因为:")]),t._v(" "),a("p",[t._v("\\begin{equation}\n\\omega "),a("em",[t._v("{n}^{k+\\frac{n}{2}} = e^{i\\frac{2*(\\frac{n}{2}+k)\\pi }{n}} = e^{i\\pi}e^{\\frac{i2k\\pi}{n}}=-1\\omega")]),t._v("{n}^{k}\n\\end{equation}")]),t._v(" "),a("p",[t._v("       所以:")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://cdn.be-sunshine.cn/FFT4.png",alt:""}})]),t._v(" "),a("p",[t._v("       问题转换成了在各个(奇偶)n/2次单位根上的值.这两个问题是原问题一半的子问题")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("至于为什么要求上面两个式子\n可以发现这两个式子只有后面的一个符号不同\n"),a("code",[t._v("即我们只需要求A1(ω(k,n/2))和A0(ω(k,n/2))的值,我们就可以同时得到两个A的值")])]),t._v(" "),a("p",[t._v("我们就只需要求两个 n/2 项的A,就可以得到两个n项的A")])]),t._v(" "),a("h2",{attrs:{id:"参考时发现的一个比较好的博客"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考时发现的一个比较好的博客"}},[t._v("#")]),t._v(" 参考时发现的一个比较好的博客")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://blog.csdn.net/enjoy_pascal/article/details/81478582",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://blog.csdn.net/enjoy_pascal/article/details/81478582"),a("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);