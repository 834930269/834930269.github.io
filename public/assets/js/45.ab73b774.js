(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{499:function(s,t,a){"use strict";a.r(t);var n=a(4),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#均值滤波器"}},[s._v("均值滤波器")])]),a("li",[a("a",{attrs:{href:"#matlab实现"}},[s._v("matlab实现")]),a("ul",[a("li",[a("a",{attrs:{href:"#注意"}},[s._v("注意")])]),a("li",[a("a",{attrs:{href:"#典型空域滤波器"}},[s._v("典型空域滤波器")])])])]),a("li",[a("a",{attrs:{href:"#非线性空域滤波"}},[s._v("非线性空域滤波")])]),a("li",[a("a",{attrs:{href:"#锐化空间过滤器"}},[s._v("锐化空间过滤器")]),a("ul",[a("li",[a("a",{attrs:{href:"#什么是锐化"}},[s._v("什么是锐化")])]),a("li",[a("a",{attrs:{href:"#差分"}},[s._v("差分")])]),a("li",[a("a",{attrs:{href:"#拉普拉斯算子"}},[s._v("拉普拉斯算子")])])])]),a("li",[a("a",{attrs:{href:"#用梯度进行图像增强"}},[s._v("用梯度进行图像增强")])]),a("li",[a("a",{attrs:{href:"#中值滤波-常用"}},[s._v("中值滤波 - 常用")])])])]),a("p"),s._v(" "),a("h1",{attrs:{id:"滤波器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#滤波器"}},[s._v("#")]),s._v(" 滤波器")]),s._v(" "),a("blockquote",[a("p",[s._v("3*3滤波器每次只改变滤波器中心所指向的值\n且卷积是线性移不变系统,中科大图像,P2-57:42")])]),s._v(" "),a("h2",{attrs:{id:"均值滤波器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#均值滤波器"}},[s._v("#")]),s._v(" 均值滤波器")]),s._v(" "),a("blockquote",[a("p",[s._v("3*3的滤波器,卷积方式进行,均值滤波器意在将滤波器范围内的值统一成一样的,即平均化.")]),s._v(" "),a("blockquote",[a("p",[s._v("同样也有带权重的均值滤波器.即并非是3*3里全是1.\n如:")])])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("\t  1 1 1\n\n1/9 * 1 1 1\n\n\t  1 1 1\n\n和\n\n\t   1 2 1\n\n1/16 * 2 4 2\n\n\t   1 2 1\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("h2",{attrs:{id:"matlab实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#matlab实现"}},[s._v("#")]),s._v(" matlab实现")]),s._v(" "),a("blockquote",[a("p",[s._v("imfilter实现")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("g = imfilter(f,w,filtering_mode,\n\t\t\t boundary_options,\n\t\t\t size_options)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("       其中"),a("strong",[s._v("f")]),s._v("为输入图像,"),a("strong",[s._v("w")]),s._v("为滤波淹模,"),a("strong",[s._v("g")]),s._v("为滤波结果,其他参数,"),a("strong",[s._v("filtering_mode")]),a("code",[s._v("是相关滤波,还是卷积")]),s._v(","),a("strong",[s._v("boundary_options")]),a("code",[s._v("是边界填充方式,p代表填0,还有三个参数不做概述")]),s._v(","),a("strong",[s._v("size_options")]),a("code",[s._v("full表示图像变胖,即不处理,same表示图像和原图像大小保持不变.")])]),s._v(" "),a("h3",{attrs:{id:"注意"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注意"}},[s._v("#")]),s._v(" 注意")]),s._v(" "),a("p",[s._v("       空域滤波前必须对图像进行im2double操作,因为计算并非是整数计算,会带有小数,而省去小数会造成误差.")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[s._v("f "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" imread"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'a.jpg'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nf1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" rgb2gray"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nf2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" im2double"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("f1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nw "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" ones"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("31")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\ngd "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" imfilter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("w"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nimshow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("gd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h3",{attrs:{id:"典型空域滤波器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#典型空域滤波器"}},[s._v("#")]),s._v(" 典型空域滤波器")]),s._v(" "),a("blockquote",[a("p",[s._v("即工具箱中预定义的滤波器\nw = fspecial('type',parameters)")])]),s._v(" "),a("p",[a("strong",[s._v("type")]),s._v("为筛选器类型,"),a("strong",[s._v("parameters")]),s._v("为进一步指定滤波器的参数")]),s._v(" "),a("ul",[a("li",[s._v("'average' 3*3均值滤波")]),s._v(" "),a("li",[s._v("'disk'")]),s._v(" "),a("li",[s._v("'laplacian' 拉普拉斯滤波")]),s._v(" "),a("li",[s._v("'gaussian' 高斯滤波")]),s._v(" "),a("li",[s._v("'log' 先高斯,再拉普拉斯")])]),s._v(" "),a("h2",{attrs:{id:"非线性空域滤波"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#非线性空域滤波"}},[s._v("#")]),s._v(" 非线性空域滤波")]),s._v(" "),a("blockquote",[a("p",[s._v("matlab提供了两个用于执行一般非线性滤波的函数")]),s._v(" "),a("blockquote",[a("p",[s._v("nlfilter和colfilt")]),s._v(" "),a("blockquote",[a("p",[s._v("colfilt速度快于nlfilter")])])])]),s._v(" "),a("h2",{attrs:{id:"锐化空间过滤器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#锐化空间过滤器"}},[s._v("#")]),s._v(" 锐化空间过滤器")]),s._v(" "),a("blockquote",[a("p",[s._v("个人感觉锐化的思路就是利用灰度间细微的差异扩大化")])]),s._v(" "),a("h3",{attrs:{id:"什么是锐化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是锐化"}},[s._v("#")]),s._v(" 什么是锐化")]),s._v(" "),a("ul",[a("li",[s._v("锐化的目的是突出图像的细节")]),s._v(" "),a("li",[s._v("通常是通过空间查分来完成的")]),s._v(" "),a("li",[s._v("数字函数的导数是用差分来定义的")]),s._v(" "),a("li",[s._v("对于一阶导数,我们要求他必须满足\n"),a("ul",[a("li",[s._v("平面段必须为零(灰度值恒定的区域)")]),s._v(" "),a("li",[s._v("在灰度阶跃或斜坡开始时必须非零")]),s._v(" "),a("li",[s._v("斜坡上一定是非零")])])]),s._v(" "),a("li",[s._v("对于二阶导数,我们要求他必须满足\n"),a("ul",[a("li",[s._v("在平坦段(灰度值恒定的区域)中必须为零")]),s._v(" "),a("li",[s._v("在灰度级阶跃或斜坡开始和结束时,必须是非零的")]),s._v(" "),a("li",[s._v("在坡度恒定的斜坡上必须为零.")])])])]),s._v(" "),a("h3",{attrs:{id:"差分"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#差分"}},[s._v("#")]),s._v(" 差分")]),s._v(" "),a("p",[s._v("       一维函数一阶导数的一个基本定义就是差分.")]),s._v(" "),a("p",[a("strong",[s._v("f对x的偏导")]),s._v("=f(x+1)-f(x)")]),s._v(" "),a("p",[s._v("       二阶导数:")]),s._v(" "),a("p",[a("strong",[s._v("对x二阶偏导")]),s._v("=f(x+1)+f(x-1)-2f(x)")]),s._v(" "),a("h3",{attrs:{id:"拉普拉斯算子"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#拉普拉斯算子"}},[s._v("#")]),s._v(" 拉普拉斯算子")]),s._v(" "),a("blockquote",[a("p",[a("strong",[s._v("f对x二阶偏导+f对y二阶偏导")]),s._v("=[f(x+1,y) + f(x-1,y) + f(x,y+1) + f(x,y-1)] - 4f(x,y)")])]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h4",{attrs:{id:"matlab实现-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#matlab实现-2"}},[s._v("#")]),s._v(" matlab实现")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[s._v("f "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" imread"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'a.jpg'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nf1"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" rgb2gray"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nw4 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" fspecial"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'laplacian'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nw8 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#自己构建的滤波器")]),s._v("\nf1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" im2double"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("f1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\ng4 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" f1"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("imfilter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("f1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("w4"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'replicate'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\ng8 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" f1"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("imfilter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("f1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("w8"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'replicate'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nimshow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nfigure"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("imshow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("g4"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nfigure"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("imshow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("g8"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("h2",{attrs:{id:"用梯度进行图像增强"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用梯度进行图像增强"}},[s._v("#")]),s._v(" 用梯度进行图像增强")]),s._v(" "),a("blockquote",[a("p",[s._v("即使用差分")])]),s._v(" "),a("h2",{attrs:{id:"中值滤波-常用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#中值滤波-常用"}},[s._v("#")]),s._v(" 中值滤波 - 常用")]),s._v(" "),a("blockquote",[a("p",[s._v("是减少图像中椒盐噪声的有效工具")])]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[s._v("f "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" imread"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'a.jpg'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nf1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" rgb2gray"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nfn"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("imnoise"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("f1"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'salt&pepper'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nimshow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("fn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\ngm "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" medfilt2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("fn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nimshow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("gm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#2")]),s._v("\ngms "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" medfilt2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("fn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'symmetric'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nimshow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("gms"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])])])}),[],!1,null,null,null);t.default=r.exports}}]);