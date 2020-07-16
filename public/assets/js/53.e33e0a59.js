(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{532:function(s,n,a){"use strict";a.r(n);var t=a(0),e=Object(t.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#任务"}},[s._v("任务")])]),a("li",[a("a",{attrs:{href:"#读取图像"}},[s._v("读取图像")])]),a("li",[a("a",{attrs:{href:"#像素间关系"}},[s._v("像素间关系")])]),a("li",[a("a",{attrs:{href:"#像素邻接"}},[s._v("像素邻接")])]),a("li",[a("a",{attrs:{href:"#距离"}},[s._v("距离")])]),a("li",[a("a",{attrs:{href:"#文件格式"}},[s._v("文件格式")])]),a("li",[a("a",{attrs:{href:"#位图文件头-信息头"}},[s._v("位图文件头/信息头")])]),a("li",[a("a",{attrs:{href:"#一些概念-慢慢添加"}},[s._v("一些概念(慢慢添加)")])])])]),a("p"),s._v(" "),a("h1",{attrs:{id:"数字图像处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数字图像处理"}},[s._v("#")]),s._v(" 数字图像处理")]),s._v(" "),a("h2",{attrs:{id:"任务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#任务"}},[s._v("#")]),s._v(" 任务")]),s._v(" "),a("ul",[a("li",[s._v("提高图片质量,提供人眼主观满意或较满意的效果")]),s._v(" "),a("li",[s._v("提取目标某些特征,以便于后续分析或识别")]),s._v(" "),a("li",[s._v("图像压缩,便于存储和传输庞大的图像和视频信息")])]),s._v(" "),a("h2",{attrs:{id:"读取图像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#读取图像"}},[s._v("#")]),s._v(" 读取图像")]),s._v(" "),a("div",{staticClass:"language-matlab line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-matlab"}},[a("code",[s._v("I "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("imread")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v('"lenacolor'),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v('png"'),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("会自动打印出像素值\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("imshow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("I"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h2",{attrs:{id:"像素间关系"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#像素间关系"}},[s._v("#")]),s._v(" 像素间关系")]),s._v(" "),a("p",[s._v("       邻域:"),a("code",[s._v("n*n邻域")]),s._v("表示包含以"),a("code",[s._v("p")]),s._v("为中心在内的"),a("code",[s._v("n*n")]),s._v("的区域内的像素,如"),a("code",[s._v("以p为中心,4为大小的邻域")]),s._v("记为"),a("code",[s._v("N_4(P)")]),s._v("\n       对角邻域:"),a("code",[s._v("即四个对角方向")]),s._v("\n       八邻域:"),a("code",[s._v("相当于3*3邻域")]),s._v("\n       四邻域: 上下左右")]),s._v(" "),a("h2",{attrs:{id:"像素邻接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#像素邻接"}},[s._v("#")]),s._v(" 像素邻接")]),s._v(" "),a("p",[s._v("       即像素块之间相似的部分.这部分如何相连则被成为像素邻接.\n       4-邻接:2个像素p和q在V中取值.且q在p的4邻域中.\n       8-邻接\n       m-邻接:消除了四邻接可能出现的回路的问题")]),s._v(" "),a("p",[s._v("       有两个条件")]),s._v(" "),a("blockquote",[a("ul",[a("li",[s._v("是否接触")]),s._v(" "),a("li",[s._v("灰度值是否满足一个特定条件V(可认为是函数)")])])]),s._v(" "),a("h2",{attrs:{id:"距离"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#距离"}},[s._v("#")]),s._v(" 距离")]),s._v(" "),a("ul",[a("li",[s._v("城市距离")]),s._v(" "),a("li",[s._v("欧氏距离(平方和开方)")])]),s._v(" "),a("h2",{attrs:{id:"文件格式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文件格式"}},[s._v("#")]),s._v(" 文件格式")]),s._v(" "),a("blockquote",[a("ol",[a("li",[s._v("矢量图(vector)")])]),s._v(" "),a("blockquote",[a("p",[s._v("用数学公式描述的图像,用一系列绘图指令表示图像,图中每一个形状都是一个完整的公式.\n"),a("code",[s._v("优点")]),s._v(": a.文件数据量很小\nb.图片质量与分辨率无关\n对矢量图来说,无论图像放大或缩小多少倍,总是能以显示器允许的最大清晰度显示.\n"),a("code",[s._v("缺点")]),s._v(": a.不易制作色调丰富多彩变化太多的图像\nb.绘出来的图像不是很逼真\nc.不易在不同的软件间交换文件")])]),s._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[s._v("位图(Bitmap)")])]),s._v(" "),a("blockquote",[a("p",[s._v("即像素点表示的图像\n优点是读取速度快\n缺点是数据量较大")])])]),s._v(" "),a("p",[s._v("       位图分类:\na. 线画稿 - 即二值图,只有黑白\nb. 灰度图像 - 从技术上来说,就是从黑到白的若干灰度表示的单色图像,通常说的黑白图像就是灰度图像\nc. 真彩色图像 - RGBA\nd. 索引颜色图像 - 即已经设定好的颜色集,一般最多只能显示256种颜色.")]),s._v(" "),a("p",[s._v("       图像文件格式:\n       即包含仅图像数据外和其他数据的总和.格式由对应的公司决定.")]),s._v(" "),a("h2",{attrs:{id:"位图文件头-信息头"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#位图文件头-信息头"}},[s._v("#")]),s._v(" 位图文件头/信息头")]),s._v(" "),a("blockquote",[a("p",[s._v("来自CSDN")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v(" 位图文件头BITMAPFILEHEADER，是一个结构，其定义如下：\ntypedef struct tagBITMAPFILEHEADER {\nWORD           bfType; \nDWORD bfSize; \nWORD           bfReserved1; \nWORD           bfReserved2; \nDWORD bfOffBits; \n} BITMAPFILEHEADER; \n这个结构的长度是固定的，为14个字节(WORD为无符号16位整数，DWORD为无符号32位整数)，各个域的说明如下：\nbfType\n指定文件类型，必须是0x424D，即字符串“BM”，也就是说所有.bmp文件的头两个字节都是“BM”。\nbfSize\n指定文件大小，包括这14个字节。\nbfReserved1，bfReserved2      \n为保留字，不用考虑\nbfOffBits\n为从文件头到实际的位图数据的偏移字节数\n\n\n\n位图信息头BITMAPINFOHEADER，也是一个结构，其定义如下：\ntypedef struct tagBITMAPINFOHEADER{\nDWORD  biSize; \nLONG            biWidth; \nLONG            biHeight; \nWORD           biPlanes; \nWORD           biBitCount \nDWORD  biCompression; \nDWORD  biSizeImage; \nLONG            biXPelsPerMeter; \nLONG            biYPelsPerMeter; \nDWORD  biClrUsed; \nDWORD  biClrImportant; \n} BITMAPINFOHEADER; \n这个结构的长度是固定的，为40个字节(LONG为32位整数)，各个域的说明如下：\nbiSize\n指定这个结构的长度，为40。\nbiWidth\n指定图象的宽度，单位是象素。\nbiHeight\n指定图象的高度，单位是象素。\nbiPlanes\n必须是1，不用考虑。\nbiBitCount \n指定表示颜色时要用到的位数，常用的值为1(黑白二色图), 4(16色图), 8(256色), 24(真彩色图)(新的.bmp格式支持32位色，这里就不做讨论了)。\nbiCompression\n指定位图是否压缩，有效的值为BI_RGB，BI_RLE8，BI_RLE4，BI_BITFIELDS(都是一些Windows定义好的常量)。要说明的是，Windows位图可以采用RLE4，和RLE8的压缩格式，但用的不多。我们今后所讨论的只有第一种不压缩的情况，即biCompression为BI_RGB的情况。\nbiSizeImage\n指定实际的位图数据占用的字节数，其实也可以从以下的公式中计算出来：\nbiSizeImage=biWidth’ × biHeight\n要注意的是：上述公式中的biWidth’必须是4的整倍数(所以不是biWidth，而是biWidth’，表示大于或等于biWidth的，最接近4的整倍数。举个例子，如果biWidth=240，则biWidth’=240；如果biWidth=241，biWidth’=244)。\n如果biCompression为BI_RGB，则该项可能为零\nbiXPelsPerMeter\n指定目标设备的水平分辨率，单位是每米的象素个数，关于分辨率的概念。\nbiYPelsPerMeter\n指定目标设备的垂直分辨率，单位同上。\nbiClrUsed\n指定本图象实际用到的颜色数，如果该值为零，则用到的颜色数为2biBitCount。\nbiClrImportant\n指定本图象中重要的颜色数，如果该值为零，则认为所有的颜色都是重要的。 \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br")])]),a("p",[s._v("       调色板Palette")]),s._v(" "),a("blockquote",[a("p",[s._v("真彩色图像文件信息头后就是图像数据,不需要调色板")])]),s._v(" "),a("h2",{attrs:{id:"一些概念-慢慢添加"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一些概念-慢慢添加"}},[s._v("#")]),s._v(" 一些概念(慢慢添加)")]),s._v(" "),a("blockquote",[a("p",[s._v("反色: 即255-原图像的RGB值")])])])}),[],!1,null,null,null);n.default=e.exports}}]);