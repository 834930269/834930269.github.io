(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{531:function(t,s,a){"use strict";a.r(s);var n=a(0),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#方法"}},[t._v("方法")])]),a("li",[a("a",{attrs:{href:"#空域处理"}},[t._v("空域处理")]),a("ul",[a("li",[a("a",{attrs:{href:"#变换"}},[t._v("变换")])]),a("li",[a("a",{attrs:{href:"#数学表示"}},[t._v("数学表示")])]),a("li",[a("a",{attrs:{href:"#幂律变换"}},[t._v("幂律变换")])]),a("li",[a("a",{attrs:{href:"#对数变换"}},[t._v("对数变换")])]),a("li",[a("a",{attrs:{href:"#对比拉伸变换"}},[t._v("对比拉伸变换")])]),a("li",[a("a",{attrs:{href:"#直方图"}},[t._v("直方图")])])])]),a("li",[a("a",{attrs:{href:"#椒盐噪声"}},[t._v("椒盐噪声")])]),a("li",[a("a",{attrs:{href:"#来源"}},[t._v("来源")])])])]),a("p"),t._v(" "),a("h1",{attrs:{id:"图像增强"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#图像增强"}},[t._v("#")]),t._v(" 图像增强")]),t._v(" "),a("h2",{attrs:{id:"方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方法"}},[t._v("#")]),t._v(" 方法")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://cdn.be-sunshine.cn/image_strong.png",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"空域处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#空域处理"}},[t._v("#")]),t._v(" 空域处理")]),t._v(" "),a("h3",{attrs:{id:"变换"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#变换"}},[t._v("#")]),t._v(" 变换")]),t._v(" "),a("blockquote",[a("p",[t._v("不同于操作一个函数生成一个新的值\n而是操作一个新的函数生成一个新的函数")])]),t._v(" "),a("h3",{attrs:{id:"数学表示"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数学表示"}},[t._v("#")]),t._v(" 数学表示")]),t._v(" "),a("p",[t._v("\\begin{equation}\ng(x,y) = T[f(x,y)]\n\\end{equation}")]),t._v(" "),a("p",[t._v("       f(x,y): 输入图像\n       g(x,y): 输出图像\n       T: 在f(x,y)上操作,定义在(x,y)的某个邻域上")]),t._v(" "),a("ul",[a("li",[t._v("T可以再一组图像上进行操作,例如噪声消除")]),t._v(" "),a("li",[t._v("方形和矩形"),a("code",[t._v("邻域")]),t._v("是使用最多的,因为它们易实现,也可使用圆形区域")])]),t._v(" "),a("blockquote",[a("p",[t._v("T最简单的情况是邻域大小 "),a("code",[t._v("1*1")]),t._v("。这时g只依赖于f在(x,y)处的值,即")]),t._v(" "),a("blockquote",[a("center",[t._v("s=T(r)")])],1),t._v(" "),a("p",[t._v("我们称之为"),a("code",[t._v("灰度变换")]),t._v("或"),a("code",[t._v("两度变换")]),t._v(",其中s与r分别为输出与输入的亮度值")])]),t._v(" "),a("h3",{attrs:{id:"幂律变换"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#幂律变换"}},[t._v("#")]),t._v(" 幂律变换")]),t._v(" "),a("blockquote",[a("p",[t._v("比如"),a("code",[t._v("伽马校正")]),t._v(" "),a("code",[t._v("对比度增强,伽马越小,越亮(对比度越高)")]),t._v("如果图片亮度过高,也可以让伽马变大")]),t._v(" "),a("blockquote",[a("p",[t._v("至于"),a("code",[t._v("对比度增强")]),t._v(",也可以用分段线性函数")])])]),t._v(" "),a("p",[t._v("       matlab实现:")]),t._v(" "),a("blockquote",[a("p",[t._v("幂律变换函数实现的是imadjust(图像,[low_in,high_in],[low_out,high_out])\n其中low_in,high_in 映射到 low_out,high_out\n不填Gamma就是最简单的直方图映射\n[0.1] [1 0]就是反色\n[] [] 2 gamma=2 前两个参数代表的是原图映射,但是gamma=2,即改成抛物线映射")])]),t._v(" "),a("div",{staticClass:"language-matlab line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-matlab"}},[a("code",[t._v("G"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("imadjust")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("I"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n# 反色调"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("第三个参数缺省\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("imshow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\nG "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("imadjust")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("I"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n# 伽马"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("即 "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("I")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("每个像素"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("imshow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("h3",{attrs:{id:"对数变换"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#对数变换"}},[t._v("#")]),t._v(" 对数变换")]),t._v(" "),a("p",[t._v("\\begin{equation}")]),t._v(" "),a("p",[t._v("s = clog(1+r)")]),t._v(" "),a("p",[t._v("\\end{equation}")]),t._v(" "),a("ul",[a("li",[t._v("其中c是常数")]),t._v(" "),a("li",[t._v("该变幻的形状类似于gamma曲线")]),t._v(" "),a("li",[t._v("请注意,伽马曲线的形状是"),a("code",[t._v("可变的")]),t._v(",而对数函数的形状是"),a("code",[t._v("固定的")])]),t._v(" "),a("li",[t._v("加一防止出现0的情况")])]),t._v(" "),a("p",[a("strong",[t._v("对数变换常用于处理傅里叶变换后的频谱,使频谱的对比度更高,细节更清晰,傅里叶变换前通常需要对数变换")])]),t._v(" "),a("blockquote",[a("p",[t._v("傅里叶谱在[0,1e6]的范围内并不少见,当显示在一个线性缩放到8位的显示器上时,高值占据了显示器的主导地位,从而丢失了低强度值的视觉细节频谱。通过计算log,动态范围可以减小到大约14,更易于显示管理\n在执行对数转换时,通常希望将压缩后的值恢复到"),a("code",[t._v("全部显示范围")]),t._v(",对于8位,在Matlab中最简单的方法是使用:")])]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("gs "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" im2uint8"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mat2gray"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("g"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("blockquote",[a("p",[t._v("使用"),a("code",[t._v("mat2gray")]),t._v("将值映射到[0,1]范围内,而im2uint8将值映射到[0,255]范围\n使用对数变换的方式:")])]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("gs "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" im2uint8"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mat2gray"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("log"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("double"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nimshow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("blockquote",[a("p",[t._v("结果(中间是低频):\n"),a("img",{attrs:{src:"http://cdn.be-sunshine.cn/fft_log.png",alt:""}})])]),t._v(" "),a("h3",{attrs:{id:"对比拉伸变换"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#对比拉伸变换"}},[t._v("#")]),t._v(" 对比拉伸变换")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("m = 128\nr=0:255\nfigure\nfor E = 0.1:1:20\n    s=1./(1+(m./r).^E)\n    plot(r,s)\n    hold on\nend\n% 初值0.1,步长1\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])]),a("p",[t._v(".")]),t._v(" "),a("h3",{attrs:{id:"直方图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#直方图"}},[t._v("#")]),t._v(" 直方图")]),t._v(" "),a("blockquote",[a("p",[t._v("h=imhist(f,b)")]),t._v(" "),a("blockquote",[a("p",[t._v("f为输入图像\nh为输入图像的直方图,b为生成直方图所用的量化级别的数目\n如参数不包含b,则默认为256\n量化级别是对亮度范围的一种子划分")])])]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("f"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("imread"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Fig3 8 a.tif'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nimhist"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 归一化直方图")]),t._v("\np "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" imhist"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("number"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[t._v("       使用柱状图绘制直方图，可使用matlab函数bar(horz,v,width)实现")]),t._v(" "),a("ul",[a("li",[t._v("其中v是一个行向量,包含要绘制的纵坐标")]),t._v(" "),a("li",[t._v("horz是一个维数与v相同的向量,它包含水平尺度的增量,如省略了horz,则水平轴的单位是从0到长度v的长度")]),t._v(" "),a("li",[t._v("宽度介于0~1之间")])]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" 绘制直方图\nI "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" imread"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'lenacolor.png'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nI1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" rgb2gray"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("I"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nh1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" imhist"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("I1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("255")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nhorz "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("255")]),t._v("\nbar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("horz"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("h1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\nI "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" imread"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"lenacolor.png"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nI1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" rgb2gray"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("I"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nimshow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("I1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfigure"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("imhist"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("I1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nylim"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'auto'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nI2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" histeq"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("I1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("256")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfigure"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("imshow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("I2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfigure"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("imhist"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("I2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nylim"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'auto'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br")])]),a("blockquote",[a("p",[t._v("也可以用setm画\n"),a("img",{attrs:{src:"http://cdn.be-sunshine.cn/stem.png",alt:""}})])]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" 绘制直方图\nI "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" imread"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'lenacolor.png'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nI1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" rgb2gray"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("I"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nh1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" imhist"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("I1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("255")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v("horz "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("255")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v("bar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("horz"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("h1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nstem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("h1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'r-o'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'fill'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("blockquote",[a("p",[t._v("可以用plot画曲线")])]),t._v(" "),a("h4",{attrs:{id:"直方图均衡化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#直方图均衡化"}},[t._v("#")]),t._v(" 直方图均衡化")]),t._v(" "),a("blockquote",[a("p",[t._v("普通")])]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("I "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" imread"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"lenacolor.png"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nI1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" rgb2gray"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("I"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nI2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" histeq"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("I1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("256")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nimshow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("I2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("blockquote",[a("p",[t._v("g=histeq(f,nlev)")]),t._v(" "),a("blockquote",[a("p",[t._v("f: 输入图像 nlev为输出图像指定亮度级别数,256即正常灰度")])])]),t._v(" "),a("blockquote",[a("p",[t._v("但是普通均衡化的效果不是很理想\n可以用高斯双峰优化")])]),t._v(" "),a("h2",{attrs:{id:"椒盐噪声"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#椒盐噪声"}},[t._v("#")]),t._v(" 椒盐噪声")]),t._v(" "),a("p",[t._v("       椒盐噪声的实现原理为，随机地将图像中的一定比例的像素值取极大或者极小：")]),t._v(" "),a("p",[t._v("       这里给出 Python 下的一种实现，可简单地转换为其他：")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("salt_and_pepper_noise")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" v"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# x 表示原始无噪图像，行数表示图像的个数，列数表示单幅图像的像素数。")]),t._v("\n    x_noise "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("copy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    n_features "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("shape"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    mn "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("min")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    mx "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("max")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" sample "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("enumerate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        mask "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" np"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("random"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("randint"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" n_features"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" v"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" m "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" mask"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" np"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("random"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rand"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mn\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mx\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" x_noise\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br")])]),a("h2",{attrs:{id:"来源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#来源"}},[t._v("#")]),t._v(" 来源")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.bilibili.com/video/BV1ME411G7b3?p=2",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.bilibili.com/video/BV1ME411G7b3?p=2"),a("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=r.exports}}]);