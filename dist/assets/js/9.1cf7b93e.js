(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{211:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#安装tensorflow-gpu"}},[t._v("安装Tensorflow-gpu")]),s("ul",[s("li",[s("a",{attrs:{href:"#安装失败解决方案"}},[t._v("安装失败解决方案")])]),s("li",[s("a",{attrs:{href:"#为什么使用gpu"}},[t._v("为什么使用GPU?")])]),s("li",[s("a",{attrs:{href:"#检查是否装好"}},[t._v("检查是否装好")])]),s("li",[s("a",{attrs:{href:"#使用gpu进行运算"}},[t._v("使用gpu进行运算")])]),s("li",[s("a",{attrs:{href:"#限制gpu使用大小"}},[t._v("限制gpu使用大小")])])])])])]),s("p"),t._v(" "),s("h1",{attrs:{id:"tesnorflow2-开篇"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tesnorflow2-开篇"}},[t._v("#")]),t._v(" Tesnorflow2 开篇")]),t._v(" "),s("h2",{attrs:{id:"安装tensorflow-gpu"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装tensorflow-gpu"}},[t._v("#")]),t._v(" 安装Tensorflow-gpu")]),t._v(" "),s("blockquote",[s("p",[t._v("前置条件: GPU算力必须在3.0以上")])]),t._v(" "),s("ol",[s("li",[t._v("首先要安装cuda和cudnn")]),t._v(" "),s("li",[t._v("cuda必须是10.0或者往下,建议就只用10.0.")]),t._v(" "),s("li",[t._v("cudnn要7.4.6+，这之后的cudnn对GPU进行深度学习运算进行了优化")]),t._v(" "),s("li",[t._v("Python - 3.7")]),t._v(" "),s("li",[t._v("conda install tensorflow-gpu==2.0.0")])]),t._v(" "),s("h3",{attrs:{id:"安装失败解决方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装失败解决方案"}},[t._v("#")]),t._v(" 安装失败解决方案")]),t._v(" "),s("blockquote",[s("p",[t._v("一般都是因为VS的插件安装错误")]),t._v(" "),s("blockquote",[s("p",[t._v("第一步: 控制面板中全删掉(包括Nvidia的显卡驱动,Cuda10安装中将驱动也安装了)\n第二步: C:/ProgramData ProgramFile ProgramFile(x86)中包含和Nvidia的全删掉\n第三部: 重启,安装(建议关掉360)")])])]),t._v(" "),s("h3",{attrs:{id:"为什么使用gpu"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么使用gpu"}},[t._v("#")]),t._v(" 为什么使用GPU?")]),t._v(" "),s("blockquote",[s("p",[t._v("因为神经网络是使用矩阵进行运算,恰巧GPU也是使用矩阵进行运算(游戏中的渲染),通过GPU对神经网络的运算过程进行优化是再好不过的了.")])]),t._v(" "),s("h3",{attrs:{id:"检查是否装好"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#检查是否装好"}},[t._v("#")]),t._v(" 检查是否装好")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" tensorflow "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" tf\ntf"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("test"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("is_gpu_available"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("返回True即表示已经装好了")]),t._v(" "),s("h3",{attrs:{id:"使用gpu进行运算"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用gpu进行运算"}},[t._v("#")]),t._v(" 使用gpu进行运算")]),t._v(" "),s("blockquote",[s("p",[t._v("Tip: TF2只要检测到有gpu,直接就使用它了,不需要设置.")]),t._v(" "),s("blockquote",[s("p",[t._v("实在放不下心,就调用下面的代码")])])]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" os\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 选择编号为0的GPU")]),t._v("\nos"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("environ"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"CUDA_VISIBLE_DEVICES"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0"')]),t._v("\n")])])]),s("blockquote",[s("p",[t._v("其中"),s("code",[t._v("0")]),t._v("为要是用的gpu的编号")])]),t._v(" "),s("h3",{attrs:{id:"限制gpu使用大小"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#限制gpu使用大小"}},[t._v("#")]),t._v(" 限制gpu使用大小")]),t._v(" "),s("p",[t._v("默认是完全使用gpu进行运算(如果找到的话)")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" os\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置tf2-gpu按需增长")]),t._v("\ngpus "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" tf"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("experimental"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("list_physical_devices"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("device_type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'GPU'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" gpu "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" gpus"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    tf"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("experimental"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("set_memory_growth"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gpu"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);