(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{229:function(t,a,n){"use strict";n.r(a);var e=n(0),s=Object(e.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p"),n("div",{staticClass:"table-of-contents"},[n("ul",[n("li",[n("a",{attrs:{href:"#任务"}},[t._v("任务")])]),n("li",[n("a",{attrs:{href:"#读取图像"}},[t._v("读取图像")])]),n("li",[n("a",{attrs:{href:"#像素间关系"}},[t._v("像素间关系")])]),n("li",[n("a",{attrs:{href:"#像素邻接"}},[t._v("像素邻接")])]),n("li",[n("a",{attrs:{href:"#距离"}},[t._v("距离")])]),n("li",[n("a",{attrs:{href:"#文件格式"}},[t._v("文件格式")])]),n("li",[n("a",{attrs:{href:"#位图文件头-信息头"}},[t._v("位图文件头/信息头")])]),n("li",[n("a",{attrs:{href:"#一些概念-慢慢添加"}},[t._v("一些概念(慢慢添加)")])])])]),n("p"),t._v(" "),n("h1",{attrs:{id:"数字图像处理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#数字图像处理"}},[t._v("#")]),t._v(" 数字图像处理")]),t._v(" "),n("h2",{attrs:{id:"任务"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#任务"}},[t._v("#")]),t._v(" 任务")]),t._v(" "),n("ul",[n("li",[t._v("提高图片质量,提供人眼主观满意或较满意的效果")]),t._v(" "),n("li",[t._v("提取目标某些特征,以便于后续分析或识别")]),t._v(" "),n("li",[t._v("图像压缩,便于存储和传输庞大的图像和视频信息")])]),t._v(" "),n("h2",{attrs:{id:"读取图像"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#读取图像"}},[t._v("#")]),t._v(" 读取图像")]),t._v(" "),n("div",{staticClass:"language-matlab extra-class"},[n("pre",{pre:!0,attrs:{class:"language-matlab"}},[n("code",[t._v("I "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("imread")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v('"lenacolor'),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v('png"'),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("会自动打印出像素值\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("imshow")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("I"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),n("h2",{attrs:{id:"像素间关系"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#像素间关系"}},[t._v("#")]),t._v(" 像素间关系")]),t._v(" "),n("p",[t._v("       邻域:"),n("code",[t._v("n*n邻域")]),t._v("表示包含以"),n("code",[t._v("p")]),t._v("为中心在内的"),n("code",[t._v("n*n")]),t._v("的区域内的像素,如"),n("code",[t._v("以p为中心,4为大小的邻域")]),t._v("记为"),n("code",[t._v("N_4(P)")]),t._v("\n       对角邻域:"),n("code",[t._v("即四个对角方向")]),t._v("\n       八邻域:"),n("code",[t._v("相当于3*3邻域")]),t._v("\n       四邻域: 上下左右")]),t._v(" "),n("h2",{attrs:{id:"像素邻接"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#像素邻接"}},[t._v("#")]),t._v(" 像素邻接")]),t._v(" "),n("p",[t._v("       即像素块之间相似的部分.这部分如何相连则被成为像素邻接.\n       4-邻接:2个像素p和q在V中取值.且q在p的4邻域中.\n       8-邻接\n       m-邻接:消除了四邻接可能出现的回路的问题")]),t._v(" "),n("p",[t._v("       有两个条件")]),t._v(" "),n("blockquote",[n("ul",[n("li",[t._v("是否接触")]),t._v(" "),n("li",[t._v("灰度值是否满足一个特定条件V(可认为是函数)")])])]),t._v(" "),n("h2",{attrs:{id:"距离"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#距离"}},[t._v("#")]),t._v(" 距离")]),t._v(" "),n("ul",[n("li",[t._v("城市距离")]),t._v(" "),n("li",[t._v("欧氏距离(平方和开方)")])]),t._v(" "),n("h2",{attrs:{id:"文件格式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#文件格式"}},[t._v("#")]),t._v(" 文件格式")]),t._v(" "),n("blockquote",[n("ol",[n("li",[t._v("矢量图(vector)")])]),t._v(" "),n("blockquote",[n("p",[t._v("用数学公式描述的图像,用一系列绘图指令表示图像,图中每一个形状都是一个完整的公式.\n"),n("code",[t._v("优点")]),t._v(": a.文件数据量很小\nb.图片质量与分辨率无关\n对矢量图来说,无论图像放大或缩小多少倍,总是能以显示器允许的最大清晰度显示.\n"),n("code",[t._v("缺点")]),t._v(": a.不易制作色调丰富多彩变化太多的图像\nb.绘出来的图像不是很逼真\nc.不易在不同的软件间交换文件")])]),t._v(" "),n("ol",{attrs:{start:"2"}},[n("li",[t._v("位图(Bitmap)")])]),t._v(" "),n("blockquote",[n("p",[t._v("即像素点表示的图像\n优点是读取速度快\n缺点是数据量较大")])])]),t._v(" "),n("p",[t._v("       位图分类:\na. 线画稿 - 即二值图,只有黑白\nb. 灰度图像 - 从技术上来说,就是从黑到白的若干灰度表示的单色图像,通常说的黑白图像就是灰度图像\nc. 真彩色图像 - RGBA\nd. 索引颜色图像 - 即已经设定好的颜色集,一般最多只能显示256种颜色.")]),t._v(" "),n("p",[t._v("       图像文件格式:\n       即包含仅图像数据外和其他数据的总和.格式由对应的公司决定.")]),t._v(" "),n("h2",{attrs:{id:"位图文件头-信息头"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#位图文件头-信息头"}},[t._v("#")]),t._v(" 位图文件头/信息头")]),t._v(" "),n("blockquote",[n("p",[t._v("来自CSDN")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v(" 位图文件头BITMAPFILEHEADER，是一个结构，其定义如下：\ntypedef struct tagBITMAPFILEHEADER {\nWORD           bfType; \nDWORD bfSize; \nWORD           bfReserved1; \nWORD           bfReserved2; \nDWORD bfOffBits; \n} BITMAPFILEHEADER; \n这个结构的长度是固定的，为14个字节(WORD为无符号16位整数，DWORD为无符号32位整数)，各个域的说明如下：\nbfType\n指定文件类型，必须是0x424D，即字符串“BM”，也就是说所有.bmp文件的头两个字节都是“BM”。\nbfSize\n指定文件大小，包括这14个字节。\nbfReserved1，bfReserved2      \n为保留字，不用考虑\nbfOffBits\n为从文件头到实际的位图数据的偏移字节数\n\n\n\n位图信息头BITMAPINFOHEADER，也是一个结构，其定义如下：\ntypedef struct tagBITMAPINFOHEADER{\nDWORD  biSize; \nLONG            biWidth; \nLONG            biHeight; \nWORD           biPlanes; \nWORD           biBitCount \nDWORD  biCompression; \nDWORD  biSizeImage; \nLONG            biXPelsPerMeter; \nLONG            biYPelsPerMeter; \nDWORD  biClrUsed; \nDWORD  biClrImportant; \n} BITMAPINFOHEADER; \n这个结构的长度是固定的，为40个字节(LONG为32位整数)，各个域的说明如下：\nbiSize\n指定这个结构的长度，为40。\nbiWidth\n指定图象的宽度，单位是象素。\nbiHeight\n指定图象的高度，单位是象素。\nbiPlanes\n必须是1，不用考虑。\nbiBitCount \n指定表示颜色时要用到的位数，常用的值为1(黑白二色图), 4(16色图), 8(256色), 24(真彩色图)(新的.bmp格式支持32位色，这里就不做讨论了)。\nbiCompression\n指定位图是否压缩，有效的值为BI_RGB，BI_RLE8，BI_RLE4，BI_BITFIELDS(都是一些Windows定义好的常量)。要说明的是，Windows位图可以采用RLE4，和RLE8的压缩格式，但用的不多。我们今后所讨论的只有第一种不压缩的情况，即biCompression为BI_RGB的情况。\nbiSizeImage\n指定实际的位图数据占用的字节数，其实也可以从以下的公式中计算出来：\nbiSizeImage=biWidth’ × biHeight\n要注意的是：上述公式中的biWidth’必须是4的整倍数(所以不是biWidth，而是biWidth’，表示大于或等于biWidth的，最接近4的整倍数。举个例子，如果biWidth=240，则biWidth’=240；如果biWidth=241，biWidth’=244)。\n如果biCompression为BI_RGB，则该项可能为零\nbiXPelsPerMeter\n指定目标设备的水平分辨率，单位是每米的象素个数，关于分辨率的概念。\nbiYPelsPerMeter\n指定目标设备的垂直分辨率，单位同上。\nbiClrUsed\n指定本图象实际用到的颜色数，如果该值为零，则用到的颜色数为2biBitCount。\nbiClrImportant\n指定本图象中重要的颜色数，如果该值为零，则认为所有的颜色都是重要的。 \n")])])]),n("p",[t._v("       调色板Palette")]),t._v(" "),n("blockquote",[n("p",[t._v("真彩色图像文件信息头后就是图像数据,不需要调色板")])]),t._v(" "),n("h2",{attrs:{id:"一些概念-慢慢添加"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一些概念-慢慢添加"}},[t._v("#")]),t._v(" 一些概念(慢慢添加)")]),t._v(" "),n("blockquote",[n("p",[t._v("反色: 即255-原图像的RGB值")])])])}),[],!1,null,null,null);a.default=s.exports}}]);