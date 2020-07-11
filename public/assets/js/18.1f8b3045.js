(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{495:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#安装tensorflow-gpu"}},[t._v("安装Tensorflow-gpu")]),a("ul",[a("li",[a("a",{attrs:{href:"#安装失败解决方案"}},[t._v("安装失败解决方案")])]),a("li",[a("a",{attrs:{href:"#为什么使用gpu"}},[t._v("为什么使用GPU?")])]),a("li",[a("a",{attrs:{href:"#检查是否装好"}},[t._v("检查是否装好")])]),a("li",[a("a",{attrs:{href:"#使用gpu进行运算"}},[t._v("使用gpu进行运算")])]),a("li",[a("a",{attrs:{href:"#限制gpu使用大小"}},[t._v("限制gpu使用大小")])])])])])]),a("p"),t._v(" "),a("h1",{attrs:{id:"tesnorflow2-开篇"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tesnorflow2-开篇"}},[t._v("#")]),t._v(" Tesnorflow2 开篇")]),t._v(" "),a("h2",{attrs:{id:"安装tensorflow-gpu"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装tensorflow-gpu"}},[t._v("#")]),t._v(" 安装Tensorflow-gpu")]),t._v(" "),a("blockquote",[a("p",[t._v("前置条件: GPU算力必须在3.0以上")])]),t._v(" "),a("ol",[a("li",[t._v("首先要安装cuda和cudnn")]),t._v(" "),a("li",[t._v("cuda必须是10.0或者往下,建议就只用10.0.")]),t._v(" "),a("li",[t._v("cudnn要7.4.6+，这之后的cudnn对GPU进行深度学习运算进行了优化")]),t._v(" "),a("li",[t._v("Python - 3.7")]),t._v(" "),a("li",[t._v("conda install tensorflow-gpu==2.0.0")])]),t._v(" "),a("h3",{attrs:{id:"安装失败解决方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装失败解决方案"}},[t._v("#")]),t._v(" 安装失败解决方案")]),t._v(" "),a("blockquote",[a("p",[t._v("一般都是因为VS的插件安装错误")]),t._v(" "),a("blockquote",[a("p",[t._v("第一步: 控制面板中全删掉(包括Nvidia的显卡驱动,Cuda10安装中将驱动也安装了)\n第二步: C:/ProgramData ProgramFile ProgramFile(x86)中包含和Nvidia的全删掉\n第三部: 重启,安装(建议关掉360)")])])]),t._v(" "),a("h3",{attrs:{id:"为什么使用gpu"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么使用gpu"}},[t._v("#")]),t._v(" 为什么使用GPU?")]),t._v(" "),a("blockquote",[a("p",[t._v("因为神经网络是使用矩阵进行运算,恰巧GPU也是使用矩阵进行运算(游戏中的渲染),通过GPU对神经网络的运算过程进行优化是再好不过的了.")])]),t._v(" "),a("h3",{attrs:{id:"检查是否装好"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#检查是否装好"}},[t._v("#")]),t._v(" 检查是否装好")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" tensorflow "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" tf\ntf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("is_gpu_available"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("返回True即表示已经装好了")]),t._v(" "),a("h3",{attrs:{id:"使用gpu进行运算"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用gpu进行运算"}},[t._v("#")]),t._v(" 使用gpu进行运算")]),t._v(" "),a("blockquote",[a("p",[t._v("Tip: TF2只要检测到有gpu,直接就使用它了,不需要设置.")]),t._v(" "),a("blockquote",[a("p",[t._v("实在放不下心,就调用下面的代码")])])]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" os\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 选择编号为0的GPU")]),t._v("\nos"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("environ"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"CUDA_VISIBLE_DEVICES"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0"')]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("blockquote",[a("p",[t._v("其中"),a("code",[t._v("0")]),t._v("为要是用的gpu的编号")])]),t._v(" "),a("h3",{attrs:{id:"限制gpu使用大小"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#限制gpu使用大小"}},[t._v("#")]),t._v(" 限制gpu使用大小")]),t._v(" "),a("p",[t._v("默认是完全使用gpu进行运算(如果找到的话)")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" os\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置tf2-gpu按需增长")]),t._v("\ngpus "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" tf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("experimental"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("list_physical_devices"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("device_type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'GPU'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" gpu "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" gpus"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    tf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("experimental"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("set_memory_growth"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gpu"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);