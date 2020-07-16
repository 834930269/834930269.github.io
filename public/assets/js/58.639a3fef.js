(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{536:function(t,s,a){"use strict";a.r(s);var n=a(0),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#线性系统理论"}},[t._v("线性系统理论")])]),a("li",[a("a",{attrs:{href:"#卷积"}},[t._v("卷积")])]),a("li",[a("a",{attrs:{href:"#傅里叶变换"}},[t._v("傅里叶变换")])])])]),a("p"),t._v(" "),a("h1",{attrs:{id:"变换"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#变换"}},[t._v("#")]),t._v(" 变换")]),t._v(" "),a("h2",{attrs:{id:"线性系统理论"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#线性系统理论"}},[t._v("#")]),t._v(" 线性系统理论")]),t._v(" "),a("p",[t._v("       1. 线性系统")]),t._v(" "),a("p",[t._v("              许多图形处理系统都可以用一个线性系统作为模型:")]),t._v(" "),a("p",[t._v("       若系统满足:")]),t._v(" "),a("ul",[a("li",[t._v("aX->aY (a常数) -- 齐次性")]),t._v(" "),a("li",[t._v("x_1 ± x_2 -> y_1 ± y_2 -- 叠加性")]),t._v(" "),a("li",[t._v("a1X1 ± a2X2 -> a1Y1 ± a2Y2 (a1、a2常数) -- 线性性质")])]),t._v(" "),a("p",[t._v("       即称为线性系统,否则即为非线性系统.")]),t._v(" "),a("h2",{attrs:{id:"卷积"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#卷积"}},[t._v("#")]),t._v(" 卷积")]),t._v(" "),a("blockquote",[a("p",[t._v("这个讲的比较好: "),a("a",{attrs:{href:"https://www.zhihu.com/question/22298352",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.zhihu.com/question/22298352"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"傅里叶变换"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#傅里叶变换"}},[t._v("#")]),t._v(" 傅里叶变换")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("img "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" imread"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'men.bmp'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nsubplot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nimshow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("img"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ntitle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'原图'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nf "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" rgb2gray"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("img"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" 对RGB或BMP图像进行灰度化\nF"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("fft2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" 二维傅里叶变换\nF1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" log"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("abs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("F"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" 取模并进行缩放"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("将复数转换成实数"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("模"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nsubplot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nimshow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("F1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ntitle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'傅里叶变换频谱图'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nFs "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" fftshift"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("F"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v("将频谱图中零频率成分移至频谱图中心\nS "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" log"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("abs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Fs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v("取模缩放\nsubplot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("imshow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("S"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("title"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'频动后的频谱图'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nfr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" real"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ifft2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ifftshift"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Fs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v("频率反变换到空间域"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("取实部\nret "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" im2uint8"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mat2gray"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v("更换图片类型\nsubplot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("imshow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ret"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("title"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'逆傅里叶变换'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br")])]),a("blockquote",[a("p",[t._v("为何abs(Fs)要加一,因为取模后图像矩阵的数值一般会很大，（比如Fs有一个极小值，那么log就会近似无穷大,所以+1缩放）")])])])}),[],!1,null,null,null);s.default=r.exports}}]);