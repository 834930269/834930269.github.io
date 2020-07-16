(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{497:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#理论部分"}},[t._v("理论部分")]),a("ul",[a("li",[a("a",{attrs:{href:"#分类问题与回归问题"}},[t._v("分类问题与回归问题")])])])]),a("li",[a("a",{attrs:{href:"#数据封装-tf-data"}},[t._v("数据封装 - tf.data")]),a("ul",[a("li",[a("a",{attrs:{href:"#常用api"}},[t._v("常用API")])]),a("li",[a("a",{attrs:{href:"#实战-手写数字识别"}},[t._v("实战 - 手写数字识别")])])])])])]),a("p"),t._v(" "),a("h1",{attrs:{id:"tensorflow2-开篇"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tensorflow2-开篇"}},[t._v("#")]),t._v(" Tensorflow2-开篇")]),t._v(" "),a("h2",{attrs:{id:"理论部分"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#理论部分"}},[t._v("#")]),t._v(" 理论部分")]),t._v(" "),a("blockquote",[a("p",[t._v("Tf-keras是什么?")])]),t._v(" "),a("ul",[a("li",[t._v("Tensorflow对keras API规范的实现")]),t._v(" "),a("li",[t._v("相对于以tensorflow为后端的keras,tensorflow-keras与Tensorflow结合更加紧密")]),t._v(" "),a("li",[t._v("实现在tf.keras空间下")])]),t._v(" "),a("blockquote",[a("p",[t._v("Tf-keras和keras联系")])]),t._v(" "),a("ul",[a("li",[t._v("基于同一套API\n"),a("ul",[a("li",[t._v("keras程序可以通过改导入方式轻松转为tf.keras程序")]),t._v(" "),a("li",[t._v("反之不可能")])])]),t._v(" "),a("li",[t._v("相同的JSON和HDF5模型序列化格式和语义")])]),t._v(" "),a("blockquote",[a("p",[t._v("区别")])]),t._v(" "),a("ul",[a("li",[t._v("Tf-keras 全面支持eager mode\n"),a("ul",[a("li",[t._v("只是用keras.Sequential和keras.Model无影响")]),t._v(" "),a("li",[t._v("自定义Model内部运算逻辑有影响\n"),a("ul",[a("li",[t._v("tf底层api可以通过使用keras的model.fit等抽象")]),t._v(" "),a("li",[t._v("适合研究人员")])])])])]),t._v(" "),a("li",[t._v("支持基于tf.data的模型训练")]),t._v(" "),a("li",[t._v("支持TPU训练")]),t._v(" "),a("li",[t._v("支持tf.distribution中的分布策略")]),t._v(" "),a("li",[t._v("其他特性\n"),a("ul",[a("li",[t._v("TF.keras可以与Tf中的estimator集成")]),t._v(" "),a("li",[t._v("可以用tf.save")])])])]),t._v(" "),a("h3",{attrs:{id:"分类问题与回归问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分类问题与回归问题"}},[t._v("#")]),t._v(" 分类问题与回归问题")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("分类问题预测的是类别,模型输出的是概率分布")]),t._v(" "),a("ul",[a("li",[t._v("三分类问题输出例子 : [0.2,0.7,0.1]")])])]),t._v(" "),a("li",[a("p",[t._v("回归问题预测的是值,模型的输出是一个实数值")])])]),t._v(" "),a("h4",{attrs:{id:"目标函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#目标函数"}},[t._v("#")]),t._v(" 目标函数")]),t._v(" "),a("blockquote",[a("p",[t._v("为什么需要目标函数?")])]),t._v(" "),a("ul",[a("li",[t._v("参数是逐步调整的")]),t._v(" "),a("li",[t._v("目标函数可以帮助衡量模型的好坏\n"),a("ul",[a("li",[t._v("Model A: [0.1,0.4,0.5]")]),t._v(" "),a("li",[t._v("Modle B: [0.1,0.2,0.7]")])])])]),t._v(" "),a("p",[t._v("       如上面两组结果,模型A与模型B都可以得出第三组数据为最终的结果,但这两组模型的效果是不同的,如第二组和第三组的概率差别较大,所以,当我们为了衡量魔性的好坏时,我们就需要用到目标函数.")]),t._v(" "),a("hr"),t._v(" "),a("blockquote",[a("p",[t._v("分类问题的目标函数")])]),t._v(" "),a("hr"),t._v(" "),a("ol",[a("li",[t._v("需要衡量目标类别与当前预测的差距\n"),a("ul",[a("li",[t._v("三分类问题输出例子: [0.2,0.7,0.1]")]),t._v(" "),a("li",[t._v("三分类真是类别: 2 -> one_hot -> [0,0,1]")])])]),t._v(" "),a("li",[t._v("one_hot,字面意思,某一个值为热点,即答案时,将其置位1,琦玉均为0.即真实值的分布.")]),t._v(" "),a("li",[t._v("通过损失函数(目标函数)来判断真实值与模型输出值得差距.")])]),t._v(" "),a("p",[a("code",[t._v("Tip: MarkdownPad上配置的Latex只能使用equation")]),t._v(" "),a("code",[t._v("下面损失函数中 y 均为真实值, Model(x)为预测值")])]),t._v(" "),a("p",[a("strong",[t._v("平方均差损失函数")])]),t._v(" "),a("p",[t._v("\\begin{equation}\n\\frac{1}{n} \\sum_{x,y} \\frac{1}{2}(y-Model(x))^2\n\\end{equation}")]),t._v(" "),a("p",[a("strong",[t._v("交叉熵损失函数")])]),t._v(" "),a("p",[t._v("\\begin{equation}\n\\frac{1}{n} \\sum_{x,y} y \\ln{(Model(x))}\n\\end{equation}")]),t._v(" "),a("hr"),t._v(" "),a("blockquote",[a("p",[t._v("回归问题的目标函数")])]),t._v(" "),a("hr"),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("因为回归问题输入输出均为值,所以只需要判断其预测值与真实值的差异即可.\n")])])]),a("ul",[a("li",[t._v("预测值与真实值的差异")]),t._v(" "),a("li",[t._v("平方差损失")]),t._v(" "),a("li",[t._v("绝对值损失")])]),t._v(" "),a("p",[a("strong",[t._v("模型的训练就是通过调整参数,使损失(目标)函数的值逐渐缩小的过程.")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",[t._v("VuePress中列表的层级必须用Tab,不能用空格")])]),t._v(" "),a("h2",{attrs:{id:"数据封装-tf-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据封装-tf-data"}},[t._v("#")]),t._v(" 数据封装 - tf.data")]),t._v(" "),a("p",[t._v("       在Tensorflow1中,数据是需要放在队列中.而Tf2引入keras后,同时简化数据的读取,可以直接放在tf.keras.Dataset中进行操作.")]),t._v(" "),a("h3",{attrs:{id:"常用api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用api"}},[t._v("#")]),t._v(" 常用API")]),t._v(" "),a("ol",[a("li",[t._v("从list中创建dataset")])]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" tensorflow "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" tf\ndataset "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" tf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Dataset"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("from_tensor_slices"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("遍历")])]),t._v(" "),a("p",[a("code",[t._v("会发现它其实是存放在tensor中的")])]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" elem indataset"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("elem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("ol",{attrs:{start:"3"}},[a("li",[t._v("转换成numpy")])]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#转换成numpy")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" elem "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" dataset"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("elem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("numpy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("ol",{attrs:{start:"4"}},[a("li",[t._v("二维示例")])]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("dataset "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" tf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Dataset"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("from_tensor_slices"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                                                   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n                                            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" elem "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" dataset"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("elem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("numpy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("[1 2]\n[3 4]\n[5 6]\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("ol",{attrs:{start:"5"}},[a("li",[t._v("不通过遍历取第一个元素")])]),t._v(" "),a("p",[a("code",[t._v("需要转换成迭代器后调用next()")])]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 取第一个元素")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("iter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dataset"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("take"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# .numpy()")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("ol",{attrs:{start:"6"}},[a("li",[t._v("打乱顺序")])]),t._v(" "),a("p",[t._v("       参数是混乱程度")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("dataset_c "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" dataset"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("shuffle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("ol",{attrs:{start:"7"}},[a("li",[t._v("数据重复")])]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("dataset_c "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" dataset_c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("repeat"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("ol",{attrs:{start:"8"}},[a("li",[t._v("每次取出一定数量的数据")])]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("dataset_c "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" dataset_c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("batch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" elem "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" dataset_c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("elem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("numpy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("ol",{attrs:{start:"9"}},[a("li",[t._v("将每个数据都变成平方(传递函数)")])]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("dataset "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" dataset"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("map")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("square"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" elem "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" dataset"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("elem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("numpy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("ol",{attrs:{start:"10"}},[a("li",[t._v("打包两组数据")])]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("dataset "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" tf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Dataset"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("from_tensor_slices"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ndataset2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" tf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Dataset"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("from_tensor_slices"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nds "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" tf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Dataset"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("zip")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dataset"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dataset2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("h3",{attrs:{id:"实战-手写数字识别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实战-手写数字识别"}},[t._v("#")]),t._v(" 实战 - 手写数字识别")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/ai/dl/project.html#_4-手写数字识别"}},[t._v("手写数字识别实例")])],1)])}),[],!1,null,null,null);s.default=e.exports}}]);