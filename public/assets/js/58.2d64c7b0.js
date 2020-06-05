(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{511:function(a,n,s){"use strict";s.r(n);var t=s(4),e=Object(t.a)({},(function(){var a=this,n=a.$createElement,s=a._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#产生随机数"}},[a._v("产生随机数")])]),s("li",[s("a",{attrs:{href:"#四舍五入"}},[a._v("四舍五入")])])])]),s("p"),a._v(" "),s("h1",{attrs:{id:"cftool"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cftool"}},[a._v("#")]),a._v(" cftool")]),a._v(" "),s("p",[s("strong",[a._v("APP -> Curve Fitting")])]),a._v(" "),s("blockquote",[s("p",[a._v("展开下面获取使用cftool进行拟合的操作方法\n可以生成代码")])]),a._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[a._v("cftool操作")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("进入曲线拟合工具箱界面“Curve Fitting tool”\n（1）点击“Data”按钮，弹出“Data”窗口；\n（2）利用X data和Y data的下拉菜单读入数据x,y，可修改数据集名“Data set name”，然后点击“Create data set”按钮，退出“Data”窗口，返回工具箱界面，这时会自动画出数据集的曲线图；\n（3）点击“Fitting”按钮，弹出“Fitting”窗口；\n（4）点击“New fit”按钮，可修改拟合项目名称“Fit name”，通过“Data set”下拉菜单选择数据集，然后通过下拉菜单“Type of fit”选择拟合曲线的类型，工具箱提供的拟合类型有：\nCustom Equations：用户自定义的函数类型\nExponential：指数逼近，有2种类型， a*exp(b*x) 、 a*exp(b*x) + c*exp(d*x)\nFourier：傅立叶逼近，有7种类型，基础型是 a0 + a1*cos(x*w) + b1*sin(x*w)\nGaussian：高斯逼近，有8种类型，基础型是 a1*exp(-((x-b1)/c1)^2)\nInterpolant：插值逼近，有4种类型，linear、nearest neighbor、cubic spline、shape-preserving\nPolynomial：多形式逼近，有9种类型，linear ~、quadratic ~、cubic ~、4-9th degree ~\nPower：幂逼近，有2种类型，a*x^b 、a*x^b + c\nRational：有理数逼近，分子、分母共有的类型是linear ~、quadratic ~、cubic ~、4-5th degree ~；此外，分子还包括constant型\nSmoothing Spline：平滑逼近（翻译的不大恰当，不好意思）\nSum of Sin Functions：正弦曲线逼近，有8种类型，基础型是 a1*sin(b1*x + c1)\nWeibull：只有一种，a*b*x^(b-1)*exp(-a*x^b)\n选择好所需的拟合曲线类型及其子类型，并进行相关设置：\n——如果是非自定义的类型，根据实际需要点击“Fit options”按钮，设置拟合算法、修改待估计参数的上下限等参数；\n——如果选Custom Equations，点击“New”按钮，弹出自定义函数等式窗口，有“Linear Equations线性等式”和“General Equations构造等式”两种标签。\n在本例中选Custom Equations，点击“New”按钮，选择“General Equations”标签，输入函数类型y=a*x*x + b*x，设置参数a、b的上下限，然后点击OK。\n（5）类型设置完成后，点击“Apply”按钮，就可以在Results框中得到拟合结果，如下例：\ngeneral model:\nf(x) = a*x*x+b*x\nCoefficients (with 95% confidence bounds):\na = 0.009194 (0.009019, 0.00937)\nb = 1.78e-011 (fixed at bound)\nGoodness of fit:\nSSE: 6.146\nR-square: 0.997\nAdjusted R-square: 0.997\nRMSE: 0.8263\n同时，也会在工具箱窗口中显示拟合曲线。\n这样，就完成一次曲线拟合啦，十分方便快捷。当然，如果你觉得拟合效果不好，还可以在“Fitting”窗口点击“New fit”按钮，按照步骤（4）~（5）进行一次新的拟合。\n不过，需要注意的是，cftool 工具箱只能进行单个变量的曲线拟合，即待拟合的公式中，变量只能有一个。对于混合型的曲线，例如 y = a*x + b/x ，工具箱的拟合效果并不好。\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br"),s("span",{staticClass:"line-number"},[a._v("18")]),s("br"),s("span",{staticClass:"line-number"},[a._v("19")]),s("br"),s("span",{staticClass:"line-number"},[a._v("20")]),s("br"),s("span",{staticClass:"line-number"},[a._v("21")]),s("br"),s("span",{staticClass:"line-number"},[a._v("22")]),s("br"),s("span",{staticClass:"line-number"},[a._v("23")]),s("br"),s("span",{staticClass:"line-number"},[a._v("24")]),s("br"),s("span",{staticClass:"line-number"},[a._v("25")]),s("br"),s("span",{staticClass:"line-number"},[a._v("26")]),s("br"),s("span",{staticClass:"line-number"},[a._v("27")]),s("br"),s("span",{staticClass:"line-number"},[a._v("28")]),s("br"),s("span",{staticClass:"line-number"},[a._v("29")]),s("br"),s("span",{staticClass:"line-number"},[a._v("30")]),s("br"),s("span",{staticClass:"line-number"},[a._v("31")]),s("br"),s("span",{staticClass:"line-number"},[a._v("32")]),s("br"),s("span",{staticClass:"line-number"},[a._v("33")]),s("br"),s("span",{staticClass:"line-number"},[a._v("34")]),s("br")])])]),a._v(" "),s("h2",{attrs:{id:"产生随机数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#产生随机数"}},[a._v("#")]),a._v(" 产生随机数")]),a._v(" "),s("blockquote",[s("p",[a._v("1-10之间,大小为2*5的随机数矩阵,"),s("code",[a._v("i为int")]),a._v("\nrandi(10,2,5)")])]),a._v(" "),s("blockquote",[s("p",[a._v("0-1之间随机分布的 1*5的矩阵\nrand(1,5)")])]),a._v(" "),s("blockquote",[s("p",[a._v("a-b之间随机矩阵,大小为1*5\ns4 = a+(b-a)*rand(1,5)")])]),a._v(" "),s("blockquote",[s("p",[a._v("正态分布随机数,均值为0,标准差为2,3*4\ns5 = normrnd(0,2,3,4)")])]),a._v(" "),s("h2",{attrs:{id:"四舍五入"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四舍五入"}},[a._v("#")]),a._v(" 四舍五入")]),a._v(" "),s("blockquote",[s("p",[a._v("roundn - 任意位置四舍五入")])])])}),[],!1,null,null,null);n.default=e.exports}}]);