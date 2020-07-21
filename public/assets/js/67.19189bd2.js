(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{544:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#插值原理"}},[t._v("插值原理")])]),a("li",[a("a",{attrs:{href:"#拉格朗日插值法"}},[t._v("拉格朗日插值法")])]),a("li",[a("a",{attrs:{href:"#牛顿插值"}},[t._v("牛顿插值")])]),a("li",[a("a",{attrs:{href:"#hermite插值"}},[t._v("Hermite插值")])]),a("li",[a("a",{attrs:{href:"#上面一些都常用分段来做-为了杜绝龙格现象"}},[t._v("上面一些都常用分段来做,为了杜绝龙格现象")]),a("ul",[a("li",[a("a",{attrs:{href:"#分段三次埃尔米特插值"}},[t._v("分段三次埃尔米特插值")])]),a("li",[a("a",{attrs:{href:"#三次样条插值"}},[t._v("三次样条插值")])]),a("li",[a("a",{attrs:{href:"#n维数据的插值"}},[t._v("n维数据的插值")])]),a("li",[a("a",{attrs:{href:"#小例子-人口预测"}},[t._v("小例子: 人口预测")])])])])])]),a("p"),t._v(" "),a("h1",{attrs:{id:"插值算法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#插值算法"}},[t._v("#")]),t._v(" 插值算法")]),t._v(" "),a("p",[t._v('       数模比赛中,常常需要根据已知的函数点进行数据、模型的处理和分析,而有时候现有的数据是极少的,不足以支撑分析的进行,这时就需要使用一些数学的方法,"模拟产生"一些新的但又比较靠谱的值来满足需求,这就是插值的作用. '),a("code",[t._v("(预测新值)")])]),t._v(" "),a("h2",{attrs:{id:"插值原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#插值原理"}},[t._v("#")]),t._v(" 插值原理")]),t._v(" "),a("p",[t._v("       就是选择n+1个"),a("code",[t._v("互不相同")]),t._v("的节点,则唯一存在一个多项式可以拟合这些离散的点")]),t._v(" "),a("blockquote",[a("p",[t._v("详见隔壁范德蒙行列式")])]),t._v(" "),a("p",[t._v("多项式可以表示为范德蒙矩阵的形式")]),t._v(" "),a("h2",{attrs:{id:"拉格朗日插值法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#拉格朗日插值法"}},[t._v("#")]),t._v(" 拉格朗日插值法")]),t._v(" "),a("blockquote",[a("p",[t._v("高次拉格朗日容易出现"),a("code",[t._v("龙格现象")]),t._v(" -> 即过于拟合,一丁点变化会导致误差显著增大")])]),t._v(" "),a("h2",{attrs:{id:"牛顿插值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#牛顿插值"}},[t._v("#")]),t._v(" 牛顿插值")]),t._v(" "),a("blockquote",[a("p",[t._v("牛顿插值,具有继承性,但是牛顿差值也存在龙格现象")])]),t._v(" "),a("h2",{attrs:{id:"hermite插值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hermite插值"}},[t._v("#")]),t._v(" Hermite插值")]),t._v(" "),a("blockquote",[a("p",[t._v("连倒数也要满足")])]),t._v(" "),a("h2",{attrs:{id:"上面一些都常用分段来做-为了杜绝龙格现象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#上面一些都常用分段来做-为了杜绝龙格现象"}},[t._v("#")]),t._v(" 上面一些都常用分段来做,为了杜绝龙格现象")]),t._v(" "),a("h3",{attrs:{id:"分段三次埃尔米特插值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分段三次埃尔米特插值"}},[t._v("#")]),t._v(" 分段三次埃尔米特插值")]),t._v(" "),a("blockquote",[a("p",[t._v("在实际应用中,我们通常使用三次Hermite插值PCHIP")])]),t._v(" "),a("p",[t._v("       在matlab中,有内置的函数")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("p "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" pchip"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("new_x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[a("code",[t._v("x")]),t._v("是已知的样本点的横坐标;"),a("code",[t._v("y")]),t._v("是已知样本点的纵坐标;"),a("code",[t._v("new_x")]),t._v("是要插入处对应的横坐标")]),t._v(" "),a("p",[t._v("例如:")]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("点击查看代码")]),t._v(" "),a("div",{staticClass:"language-matlab line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-matlab"}},[a("code",[t._v("x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pi")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pi")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("y"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nnew_x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pi")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pi")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\np "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("pchip")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("new_x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("plot")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'o'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("new_x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'r-'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])])]),t._v(" "),a("blockquote",[a("p",[t._v("plot函数的用法")])]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("See More")]),t._v(" "),a("p",[t._v("plot(x1,y1,x2,y2)\n线方式: "),a("code",[t._v("-")]),t._v("实线 "),a("code",[t._v(":")]),t._v("点线 "),a("code",[t._v("-.")]),t._v("虚点线 "),a("code",[t._v("- -")]),t._v("波折线\n点方式: "),a("code",[t._v(".")]),t._v("圆点 "),a("code",[t._v("+")]),t._v("加号 "),a("code",[t._v("*")]),t._v("星号 "),a("code",[t._v("x")]),t._v("x形 "),a("code",[t._v("o")]),t._v(" 小圆\n颜色: y r g b(蓝) w k(黑) m(紫) c(青)")]),t._v(" "),a("p",[t._v("散点图直接用 "),a("code",[t._v("o")]),t._v(" 就可以了")])]),t._v(" "),a("h3",{attrs:{id:"三次样条插值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三次样条插值"}},[t._v("#")]),t._v(" 三次样条插值")]),t._v(" "),a("blockquote",[a("p",[t._v("相比于hermit插值,样条插值规定了还要满足二阶导数相同的情况.其所生成的插值曲线是接近于光滑的函数曲线")])]),t._v(" "),a("blockquote",[a("p",[t._v("但是要注意,样条插值的要求是二阶可微")])]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("样条插值与Hermit插值对比")]),t._v(" "),a("div",{staticClass:"language-matlab line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-matlab"}},[a("code",[t._v("x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pi")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pi")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("y"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nnew_x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pi")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pi")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\np "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("pchip")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("new_x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("% 三次Hermit插值")]),t._v("\np1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("spline")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("new_x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("% 三次样条插值")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("plot")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'*'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("new_x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'r-'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("new_x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("p1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'b-'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])])]),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("图片上用来参数标注的问题")])])]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("图片标注")]),t._v(" "),a("p",[t._v("基于以上代码")]),t._v(" "),a("div",{staticClass:"language-matlab line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-matlab"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("legend")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'样本点'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'三次埃尔米特插值'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'三次样条插值'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Location'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'SouthEast'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("%说明")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("% LEGEND(string1,string2,string3,...)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("% 分别将字符串1,字符串2,字符串3标注在图中")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("% 其中对应的是plot中的每种参数(图标,连接线颜色等)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("% 没有Location参数的话默认在图中的右上角")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])])]),t._v(" "),a("h3",{attrs:{id:"n维数据的插值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#n维数据的插值"}},[t._v("#")]),t._v(" n维数据的插值")]),t._v(" "),a("blockquote",[a("p",[t._v("48:36")]),t._v(" "),a("blockquote",[a("p",[t._v("短期没多大意义")])])]),t._v(" "),a("h3",{attrs:{id:"小例子-人口预测"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#小例子-人口预测"}},[t._v("#")]),t._v(" 小例子: 人口预测")]),t._v(" "),a("p",[t._v("       这个问题是用来介绍使用插值进行预测的方式")]),t._v(" "),a("p",[a("strong",[t._v("短期预测")])]),t._v(" "),a("h4",{attrs:{id:"问题规约"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问题规约"}},[t._v("#")]),t._v(" 问题规约")]),t._v(" "),a("blockquote",[a("p",[t._v("题目:")])]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("人口预测")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("根据过去10年的中国人口数据，预测接下来三年的人口数据：\npopulation=[133126,133770,134413,135069,135738,136427,137122,137866,138639, 139538];\nyear = 2009:2018;\n")])])])]),t._v(" "),a("h4",{attrs:{id:"短期预测"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#短期预测"}},[t._v("#")]),t._v(" 短期预测")]),t._v(" "),a("p",[t._v("       根据以上问题,我们可以的值2009到2018年的人口数据,根据这些数据,我们可以通过构建插值函数短期预测人口数据")]),t._v(" "),a("blockquote",[a("p",[t._v("使用三次Hermit和三次样条")])]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("插值预测代码")]),t._v(" "),a("div",{staticClass:"language-matlab line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-matlab"}},[a("code",[t._v("population"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("133126")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("133770")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("134413")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("135069")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("135738")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("136427")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("137122")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("137866")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("138639")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("139538")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nyear "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2009")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2018")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\npPP "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("pchip")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("year"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" population"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2019")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2021")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("%分段三次埃尔米特插值预测")]),t._v("\npP "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("spline")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("year"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" population"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2019")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2021")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("%三次样条插值预测")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("plot")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("year"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" population"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'o'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2019")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2021")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("pPP"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'r*-'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2019")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2021")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("pP"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bx-'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("legend")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'样本点'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'三次埃尔米特插值预测'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'三次样条插值预测'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Location'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'SouthEast'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);