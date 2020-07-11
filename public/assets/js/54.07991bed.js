(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{530:function(t,a,s){"use strict";s.r(a);var _=s(0),v=Object(_.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#概述"}},[t._v("概述")])]),s("li",[s("a",{attrs:{href:"#直方图均匀化"}},[t._v("直方图均匀化")])]),s("li",[s("a",{attrs:{href:"#直方图规定化"}},[t._v("直方图规定化")])]),s("li",[s("a",{attrs:{href:"#图像相与"}},[t._v("图像相与")])]),s("li",[s("a",{attrs:{href:"#灰度变换"}},[t._v("灰度变换")]),s("ul",[s("li",[s("a",{attrs:{href:"#意义"}},[t._v("意义")])]),s("li",[s("a",{attrs:{href:"#对比度"}},[t._v("对比度")])]),s("li",[s("a",{attrs:{href:"#线性灰度级变换"}},[t._v("线性灰度级变换")])])])]),s("li",[s("a",{attrs:{href:"#图像变换"}},[t._v("图像变换")]),s("ul",[s("li",[s("a",{attrs:{href:"#放大下的插值算法"}},[t._v("放大下的插值算法")])])])])])]),s("p"),t._v(" "),s("h1",{attrs:{id:"灰度直方图"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#灰度直方图"}},[t._v("#")]),t._v(" 灰度直方图")]),t._v(" "),s("h2",{attrs:{id:"概述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),s("blockquote",[s("p",[t._v("直方图: 表示数字图像中每一个灰度级像素出现的频次(该灰度级的像素数目)\nP(k)=n_k n_k是第k个灰度级的像素总数\n或 P(r_k)=(n_k)/k")])]),t._v(" "),s("blockquote",[s("p",[t._v("如下: 先分出灰度级,后统计\n"),s("img",{attrs:{src:"http://cdn.be-sunshine.cn/grey.png",alt:""}})])]),t._v(" "),s("p",[t._v("       性质:")]),t._v(" "),s("ul",[s("li",[t._v("无空间信息")]),t._v(" "),s("li",[t._v("直方图与图像是一对多的关系")]),t._v(" "),s("li",[t._v("可叠加性(全图与子位图)")])]),t._v(" "),s("h2",{attrs:{id:"直方图均匀化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#直方图均匀化"}},[t._v("#")]),t._v(" 直方图均匀化")]),t._v(" "),s("p",[t._v("       均匀化的目的是为了将图像的分布改造成均匀分布的直方图.\n       直方图均衡化后使得直方图显得很平滑,各个灰度级的分布很均匀,就像"),s("code",[t._v("更清晰")]),t._v("了.\n       我们需要找到一个变换函数"),s("code",[t._v("s=T(r)")]),t._v(",使直方图变成平直,"),s("code",[t._v("r")]),t._v("为原灰度值,"),s("code",[t._v("且灰度等级不能变")]),t._v("\n       如图: 即映射到另一个范围内(即归一化0~1)后的灰度等级."),s("code",[t._v("这里的变换有一个前提,即相同灰度的数量不能增减")]),t._v(" "),s("img",{attrs:{src:"http://cdn.be-sunshine.cn/grey_avg.png",alt:""}})]),t._v(" "),s("p",[t._v("       公式如下:\n"),s("img",{attrs:{src:"http://cdn.be-sunshine.cn/grey_avg2.png",alt:""}})]),t._v(" "),s("p",[t._v("       对于数字图像(离散像素点)来说:\n"),s("img",{attrs:{src:"http://cdn.be-sunshine.cn/grey_avg3.png",alt:""}})]),t._v(" "),s("p",[t._v("       注意s_k为什么是从0累加到k,即前k个灰度级概率的和.可以理解为"),s("code",[t._v("将要映射到新的灰度级内后的灰度直方图是平直的,所以我只需要找到一个映射使得该直方图变得平直即可.")]),t._v("故由脂肪均匀化的第一张图可以知道,"),s("code",[t._v("从0到r的积分等于s即可,其中r是灰度直方图中的灰度范围上界,s为平直直方图的灰度范围上界,但是因为其纵坐标为1,所以直接等于s即可")])]),t._v(" "),s("blockquote",[s("p",[t._v("计算过程")])]),t._v(" "),s("p",[s("img",{attrs:{src:"http://cdn.be-sunshine.cn/grey_avg4.png",alt:""}})]),t._v(" "),s("blockquote",[s("p",[t._v("映射到新的直方图中")])]),t._v(" "),s("p",[s("img",{attrs:{src:"http://cdn.be-sunshine.cn/grey_avg5.png",alt:""}})]),t._v(" "),s("blockquote",[s("p",[t._v("最后结果并不是平直的,只能是近似的")])]),t._v(" "),s("blockquote",[s("p",[t._v("示例,图中会出现伪轮廓:")])]),t._v(" "),s("p",[s("img",{attrs:{src:"http://cdn.be-sunshine.cn/grey_avg6.png",alt:""}})]),t._v(" "),s("p",[t._v("       在matlab中的接口为:")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('I1 = imread("a.jpg")\nI2 = histeq(I1)\nimhist(I2)\n\n//改进的均衡化算法\nI2 = adapthisteq(I1)\n')])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("blockquote",[s("p",[t._v("改进的均衡化算法会考虑到很多位置信息,灰度直方图在有些场景也是不适用的.")])]),t._v(" "),s("h2",{attrs:{id:"直方图规定化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#直方图规定化"}},[t._v("#")]),t._v(" 直方图规定化")]),t._v(" "),s("blockquote",[s("p",[t._v("修改一幅图像的直方图,与另一幅图像的直方图匹配或具有一种预先规定的函数图像\n目的: 突出感兴趣的灰度范围,使图像质量改善")])]),t._v(" "),s("p",[t._v("       思路:\n       对两个图像的直方图进行均衡化,然后以两者均衡化后的直方图来达到目的")]),t._v(" "),s("h2",{attrs:{id:"图像相与"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#图像相与"}},[t._v("#")]),t._v(" 图像相与")]),t._v(" "),s("blockquote",[s("p",[t._v("标准归零化操作,即相同部分互与为0,故不同部分会被提取出来")]),t._v(" "),s("blockquote",[s("p",[t._v("如工业化上的瑕疵检测")])])]),t._v(" "),s("h2",{attrs:{id:"灰度变换"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#灰度变换"}},[t._v("#")]),t._v(" 灰度变换")]),t._v(" "),s("h3",{attrs:{id:"意义"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#意义"}},[t._v("#")]),t._v(" 意义")]),t._v(" "),s("blockquote",[s("p",[t._v("曝光不足或过度,或由于成像设备的非线性和图像记录设备动态范围太窄等因素,会产生对比度不足的特征.")])]),t._v(" "),s("h3",{attrs:{id:"对比度"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#对比度"}},[t._v("#")]),t._v(" 对比度")]),t._v(" "),s("blockquote",[s("p",[t._v("对比度是最白与最黑亮度单位的相除值。白色越亮,黑色越暗,对比度就越高.\n灰度级变化(点运算)定义:")]),t._v(" "),s("blockquote",[s("p",[t._v("像素灰度值变换: g(x,y) = T(f(x,y)) - [f(x,y)为灰度值,g(x,y)为新灰度值]\n灰度值变换函数: R=T(r)")])])]),t._v(" "),s("h3",{attrs:{id:"线性灰度级变换"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#线性灰度级变换"}},[t._v("#")]),t._v(" 线性灰度级变换")]),t._v(" "),s("blockquote",[s("p",[t._v("g(x,y) = T[f(x,y)]\nT[-] 线性变换函数")]),t._v(" "),s("blockquote",[s("p",[t._v("g(x,y) = f(x,y) ± C (+C等于提升亮度,-C等于降低亮度)\n颜色反转\ng(x,y) = 255 - f(x,y)\nmatlab: "),s("code",[t._v("bc = imcomplement(b);")]),t._v("\n乘常数\ng(x,y) = Cf(x,y)\n分段线性变换\n将感兴趣的灰度范围扩展,相对抑制不感兴趣的灰度范围\ny = (b_(i+1)-b_i)/(a_(i+1)-a_i) *（x-a_i）+ b_i\n削波(扩展分段线性变换)\n将感兴趣的范围扩展出来,不感兴趣的削去\n阈值化\n某一个阈值, 小于的为0,大于的为255 - 将灰度图像转为二值图像\n灰度窗口变换\n将某一区间的灰度级和其他部分(背景)分开\n还有一种是保留背景的灰度窗口变换\n非线性变换")]),t._v(" "),s("ol",[s("li",[t._v("对数变换 : g(x,y) = a + ln[f(x,y) + 1] / b*lnC (a,b,c为可调参数)")]),t._v(" "),s("li",[t._v("指数变换 : g(x,y)=b^(c*[f(x,y)-a])-1")]),t._v(" "),s("li",[t._v("幂函数 : x^r (r念为gamma)")]),t._v(" "),s("li",[t._v("LUT : (Look Up Table)映射变换 - 查找表变换")])])])]),t._v(" "),s("h2",{attrs:{id:"图像变换"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#图像变换"}},[t._v("#")]),t._v(" 图像变换")]),t._v(" "),s("h3",{attrs:{id:"放大下的插值算法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#放大下的插值算法"}},[t._v("#")]),t._v(" 放大下的插值算法")]),t._v(" "),s("h4",{attrs:{id:"最临近插值"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#最临近插值"}},[t._v("#")]),t._v(" 最临近插值")]),t._v(" "),s("blockquote",[s("p",[t._v("重复最邻近的点 - 漏掉的点离哪个点最近,就取对应像素点的值")])]),t._v(" "),s("h4",{attrs:{id:"双线性插值"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#双线性插值"}},[t._v("#")]),t._v(" 双线性插值")]),t._v(" "),s("blockquote",[s("p",[t._v("双线性插值法是对最近邻法的一种改进,即用线性内插方法,根据点的四个相邻点的灰度值,分别在x和y上进行两次差值,计算新值")])]),t._v(" "),s("h4",{attrs:{id:"三次立方插值"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三次立方插值"}},[t._v("#")]),t._v(" 三次立方插值")]),t._v(" "),s("blockquote",[s("p",[t._v("用三次多项式s(x)来逼近理论上的最佳插值函数sin(x)/x,进行插值")])])])}),[],!1,null,null,null);a.default=v.exports}}]);