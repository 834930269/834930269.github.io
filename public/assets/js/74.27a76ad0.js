(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{549:function(t,a,s){"use strict";s.r(a);var e=s(0),v=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#如何存储xls中的数据"}},[t._v("如何存储xls中的数据")])]),s("li",[s("a",{attrs:{href:"#如何加坐标轴的标签"}},[t._v("如何加坐标轴的标签")])]),s("li",[s("a",{attrs:{href:"#如何用最小二乘法判断拟合曲线与样本点的接近程度"}},[t._v("如何用最小二乘法判断拟合曲线与样本点的接近程度?")])]),s("li",[s("a",{attrs:{href:"#一次拟合"}},[t._v("一次拟合")])]),s("li",[s("a",{attrs:{href:"#匿名函数"}},[t._v("匿名函数")])]),s("li",[s("a",{attrs:{href:"#求均值"}},[t._v("求均值")])]),s("li",[s("a",{attrs:{href:"#评价拟合好坏"}},[t._v("评价拟合好坏")])])])]),s("p"),t._v(" "),s("h1",{attrs:{id:"曲线拟合"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#曲线拟合"}},[t._v("#")]),t._v(" 曲线拟合")]),t._v(" "),s("blockquote",[s("p",[t._v("插值和拟合的区别")])]),t._v(" "),s("blockquote",[s("p",[t._v("插值容易出现龙格现象,拟合不一定非要所有的点都在曲线上")])]),t._v(" "),s("h2",{attrs:{id:"如何存储xls中的数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何存储xls中的数据"}},[t._v("#")]),t._v(" 如何存储xls中的数据")]),t._v(" "),s("blockquote",[s("p",[t._v("详见在拟合1的那期视频8:21s时")])]),t._v(" "),s("p",[t._v("a. 在工作区右键新建,这些数据就是内存中存储的数据\nb. 将xls中的数据复制到工作区的对应变量中(不能带属性名)\nc. 可以保存为mat文件\nd. 直接load就可以.")]),t._v(" "),s("h2",{attrs:{id:"如何加坐标轴的标签"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何加坐标轴的标签"}},[t._v("#")]),t._v(" 如何加坐标轴的标签")]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("加标签")]),t._v(" "),s("div",{staticClass:"language-matlab line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-matlab"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("xlabel")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("string"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ylabel")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("string"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])])]),t._v(" "),s("h2",{attrs:{id:"如何用最小二乘法判断拟合曲线与样本点的接近程度"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何用最小二乘法判断拟合曲线与样本点的接近程度"}},[t._v("#")]),t._v(" 如何用最小二乘法判断拟合曲线与样本点的接近程度?")]),t._v(" "),s("p",[t._v("       首先,最小二乘法就是"),s("code",[t._v("样本点与拟合曲线间纵坐标差的平方和的最小值")])]),t._v(" "),s("blockquote",[s("p",[t._v("最简单的定义中就是让这个值最小化,越小越接近.")])]),t._v(" "),s("blockquote",[s("p",[t._v("其实一开始也有使用绝对值的.")]),t._v(" "),s("blockquote",[s("p",[t._v("但是使用绝对值会产生转折点不可导的问题,所以用平方更稳")])])]),t._v(" "),s("p",[s("code",[t._v("不好求导")])]),t._v(" "),s("h2",{attrs:{id:"一次拟合"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一次拟合"}},[t._v("#")]),t._v(" 一次拟合")]),t._v(" "),s("p",[t._v("       即拟合为 "),s("code",[t._v("y = kx+b")])]),t._v(" "),s("blockquote",[s("p",[t._v("这是个定理,用就可以了. 即对于求一次拟合而言,只需要对两个参数"),s("code",[t._v("k")]),t._v("和"),s("code",[t._v("b")]),t._v("求"),s("code",[t._v("一次偏导 equals to 0")]),t._v("即可.")])]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("一次拟合")])]),t._v(" "),s("h2",{attrs:{id:"匿名函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#匿名函数"}},[t._v("#")]),t._v(" 匿名函数")]),t._v(" "),s("blockquote",[s("p",[t._v("25:00左右")]),t._v(" "),s("blockquote",[s("p",[t._v("可以实现 "),s("code",[t._v("z(x,y) = x^2+y^2")]),t._v(" [即直接在匿名函数中使用^2,后面会自动解析成power]")])])]),t._v(" "),s("h2",{attrs:{id:"求均值"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#求均值"}},[t._v("#")]),t._v(" 求均值")]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("matlab求均值")]),t._v(" "),s("div",{staticClass:"language-matlab line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-matlab"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])])]),t._v(" "),s("h2",{attrs:{id:"评价拟合好坏"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#评价拟合好坏"}},[t._v("#")]),t._v(" 评价拟合好坏")]),t._v(" "),s("blockquote",[s("p",[t._v("拟合优度 (只能用于线性函数)")]),t._v(" "),s("blockquote",[s("p",[t._v("分三个值 : [SST,SSE,SSR]\n28:54")])])]),t._v(" "),s("blockquote",[s("p",[t._v("至于其他函数比较拟合的好坏,可以直接看SSE")])]),t._v(" "),s("blockquote",[s("p",[t._v("R^2一般只用于 "),s("code",[t._v("参数为一次函数的情况下")])]),t._v(" "),s("blockquote",[s("p",[t._v("如 y=a*sin(b-x) "),s("code",[t._v("就不可以用R^2")])])])]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("matlab计算拟合优度")])])])}),[],!1,null,null,null);a.default=v.exports}}]);