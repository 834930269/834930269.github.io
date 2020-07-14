(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{547:function(t,s,a){"use strict";a.r(s);var n=a(0),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#是算法"}},[t._v("是算法")])]),a("li",[a("a",{attrs:{href:"#是代码"}},[t._v("是代码")])]),a("li",[a("a",{attrs:{href:"#是效果"}},[t._v("是效果")])])])]),a("p"),t._v(" "),a("h1",{attrs:{id:"koch曲线"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#koch曲线"}},[t._v("#")]),t._v(" Koch曲线")]),t._v(" "),a("blockquote",[a("p",[t._v("科赫曲线")])]),t._v(" "),a("h2",{attrs:{id:"是算法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#是算法"}},[t._v("#")]),t._v(" 是算法")]),t._v(" "),a("blockquote",[a("p",[t._v("之后用手书写一下,")]),t._v(" "),a("blockquote",[a("p",[t._v("即")])])]),t._v(" "),a("ul",[a("li",[t._v("一个线段三分")]),t._v(" "),a("li",[t._v("第二段绕着分点旋转60度")]),t._v(" "),a("li",[t._v("不断地在每一条线上进行这个操作")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",[t._v("并非每次计算都是按照60度计算,"),a("br"),t._v("\n可以选择使用 cos(角度)*L(第二段长度) 来计算下一个点的坐标"),a("br"),t._v("\n但是!"),a("br"),t._v("\n每一段都是基于之前旋转过的角度而继续旋转的,这就出现了一个问题,你需要在之后的旋转角度上加上之前的旋转角度,然后继续旋转60度,这是最重要的")]),t._v(" "),a("p",[t._v("说起来很绕口,之后手书出来")])]),t._v(" "),a("h2",{attrs:{id:"是代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#是代码"}},[t._v("#")]),t._v(" 是代码")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setup")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    size"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("900")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("400")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("draw")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    Kochv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("800")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v("'''\n    if  mousePressed:\n        fill(0)\n    else:\n        fill(255)\n    ellipse(mouseX, mouseY, 80, 80)\n    '''")]),t._v("\n    \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Kochv")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ax"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("ay"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("bx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("by"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    c"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Minimum length of line segment")]),t._v("\n    cx "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cy "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" dx "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" dy "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ex "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ey "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n    l "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" alpha_ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bx"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("ax"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bx"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("ax"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("by"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("ay"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("by"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("ay"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        line"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ax"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("ay"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("bx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("by"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        cx "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ax "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bx"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("ax"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\n        cy "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ay "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("by"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("ay"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\n        ex "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" bx "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bx"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("ax"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\n        ey "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" by "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("by"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("ay"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\n        l "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" sqrt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ex"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("cx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ex"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("cx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ey"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("cy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ey"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("cy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        alpha_ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" atan"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ey "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" cy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ex"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("cx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("alpha_"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("and")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ex"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("cx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("or")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("alpha_"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("and")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ex"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("cx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            alpha_ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" alpha_ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.14159")]),t._v("\n        dy "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cy "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" sin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("alpha_"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.14159")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" l\n        dx "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cx "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" cos"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("alpha_ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.14159")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("l\n        \n        Kochv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ax"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("ay"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("cx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("cy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        Kochv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("ey"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("bx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("by"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        Kochv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("cy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("dx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("dy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        Kochv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("dy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("ex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("ey"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br"),a("span",{staticClass:"line-number"},[t._v("28")]),a("br"),a("span",{staticClass:"line-number"},[t._v("29")]),a("br"),a("span",{staticClass:"line-number"},[t._v("30")]),a("br"),a("span",{staticClass:"line-number"},[t._v("31")]),a("br"),a("span",{staticClass:"line-number"},[t._v("32")]),a("br"),a("span",{staticClass:"line-number"},[t._v("33")]),a("br"),a("span",{staticClass:"line-number"},[t._v("34")]),a("br"),a("span",{staticClass:"line-number"},[t._v("35")]),a("br"),a("span",{staticClass:"line-number"},[t._v("36")]),a("br"),a("span",{staticClass:"line-number"},[t._v("37")]),a("br")])]),a("h2",{attrs:{id:"是效果"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#是效果"}},[t._v("#")]),t._v(" 是效果")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://cdn.be-sunshine.cn/%E7%A7%91%E8%B5%AB%E6%9B%B2%E7%BA%BF.jpg",alt:""}})])])}),[],!1,null,null,null);s.default=r.exports}}]);