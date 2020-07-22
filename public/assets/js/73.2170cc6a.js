(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{551:function(t,s,a){"use strict";a.r(s);var n=a(0),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#是算法"}},[t._v("是算法")])]),a("li",[a("a",{attrs:{href:"#是定义"}},[t._v("是定义")])]),a("li",[a("a",{attrs:{href:"#是性质"}},[t._v("是性质")])]),a("li",[a("a",{attrs:{href:"#是代码"}},[t._v("是代码")])]),a("li",[a("a",{attrs:{href:"#是效果"}},[t._v("是效果")])])])]),a("p"),t._v(" "),a("h1",{attrs:{id:"cantor三分集"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cantor三分集"}},[t._v("#")]),t._v(" Cantor三分集")]),t._v(" "),a("blockquote",[a("p",[t._v("今天开始学习分形了,之前申请的一个需要写分形的.")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("之前看Mandelbrot集的时候被迷住了...感觉好震撼")])])])]),t._v(" "),a("blockquote",[a("p",[t._v("书用的是: 《分形算法与程序设计: Java实现》")]),t._v(" "),a("blockquote",[a("p",[t._v("但是因为JDK 11 里把JAdapter删掉了,所以用Java得重新学习Java Swing"),a("br"),t._v("\n想了想,还是用比较简单的 Processing 吧...")])])]),t._v(" "),a("h2",{attrs:{id:"是算法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#是算法"}},[t._v("#")]),t._v(" 是算法")]),t._v(" "),a("p",[t._v("Cantor 三分集就是一条线段不断地三分(去除掉中间的线段)"),a("br"),t._v("\n主要是用来介绍递归生成分形图的方式")]),t._v(" "),a("h2",{attrs:{id:"是定义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#是定义"}},[t._v("#")]),t._v(" 是定义")]),t._v(" "),a("blockquote",[a("p",[t._v("分型也可以认为是分维,即每次分形都意味着一个新的维度被创建了出来,日常中的闪电/树的分支/等许多现象都存在着分形.")])]),t._v(" "),a("h2",{attrs:{id:"是性质"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#是性质"}},[t._v("#")]),t._v(" 是性质")]),t._v(" "),a("ul",[a("li",[t._v("自相似性: 局部与整体相似,即局部是整体的缩影")]),t._v(" "),a("li",[t._v("自仿射性: 局部到整体在不同方向上不等比例变换,即非等比例缩放")]),t._v(" "),a("li",[t._v("精细结构: 如Koch曲线,如果使用数学放大镜观察,无论发达多少倍,都一定能看到与整体相似的结构.")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",[t._v("一尺之锤,日取其半,万世不竭. - 庄子 《天下篇》")])]),t._v(" "),a("h2",{attrs:{id:"是代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#是代码"}},[t._v("#")]),t._v(" 是代码")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setup")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    size"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("900")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("400")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("draw")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    drawShape"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("800")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("drawShape")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ax"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("ay"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("bx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("by"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    c"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Minimum length of line segment")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bx"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("ax"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# The last layer")]),t._v("\n        line"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ax"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("ay"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("bx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("by"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        cx "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cy "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" dx "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" dy "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n        line"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ax"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("ay"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("bx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("by"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        cx "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ax "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bx "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" ax"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\n        cy "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ay "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),t._v("\n        dx "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" bx "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bx "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" ax"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\n        dy "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" by "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),t._v("\n        ay "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ay "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),t._v("\n        by "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" by "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#Recursive call function")]),t._v("\n        drawShape"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ax"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("ay"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("cx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("cy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        drawShape"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("dy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("bx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("by"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br")])]),a("h2",{attrs:{id:"是效果"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#是效果"}},[t._v("#")]),t._v(" 是效果")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://cdn.be-sunshine.cn/Cantor%E4%B8%89%E5%88%86%E9%9B%86.jpg",alt:""}})])])}),[],!1,null,null,null);s.default=r.exports}}]);