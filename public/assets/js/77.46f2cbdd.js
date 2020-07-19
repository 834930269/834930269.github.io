(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{487:function(t,a,_){"use strict";_.r(a);var v=_(0),r=function(t){t.options.__data__block__={flowchart_382ee1e8:"s=>start: 源代码\nprocess=>operation: 解释器\ne=>end: 目标程序\n\ns->process->e",flowchart_382ee208:"s=>operation: 源程序\nc1=>operation: 第一次编译\nm1=>operation: 中间代码\nc2=>operation: 第二次编译 + 其他的输入\ninput=>operation: 输入\nvm=>subroutine: 虚拟机\ne=>end: 输出\n\ns->c1->m1->c2->vm->e  ",flowchart_64a570a8:"process=>operation: var a = 1 + 4*5\ne=>end: var|a|=|1|+|4|*|5\n\nprocess->e"}},e=Object(v.a)({},(function(){var t=this,a=t.$createElement,_=t._self._c||a;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("p"),_("div",{staticClass:"table-of-contents"},[_("ul",[_("li",[_("a",{attrs:{href:"#什么事编译原理"}},[t._v("什么事编译原理")])]),_("li",[_("a",{attrs:{href:"#编译器和解释器"}},[t._v("编译器和解释器")])]),_("li",[_("a",{attrs:{href:"#编译器的工作流程"}},[t._v("编译器的工作流程")]),_("ul",[_("li",[_("a",{attrs:{href:"#词法分析"}},[t._v("词法分析")])]),_("li",[_("a",{attrs:{href:"#语法分析"}},[t._v("语法分析")])]),_("li",[_("a",{attrs:{href:"#生成机器码"}},[t._v("生成机器码")])]),_("li",[_("a",{attrs:{href:"#运行时环境"}},[t._v("运行时环境")])])])]),_("li",[_("a",{attrs:{href:"#编译器两大过程"}},[t._v("编译器两大过程")])]),_("li",[_("a",{attrs:{href:"#分层设计"}},[t._v("分层设计")])])])]),_("p"),t._v(" "),_("h1",{attrs:{id:"为什么要学编译原理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#为什么要学编译原理"}},[t._v("#")]),t._v(" 为什么要学编译原理?")]),t._v(" "),_("blockquote",[_("p",[t._v("照轮子哥所说的那样,学编译原理最主要的是学 parser和codegen")])]),t._v(" "),_("p",[t._v("为什么放在GraphQL中呢?")]),t._v(" "),_("blockquote",[_("p",[t._v("如果说GraphQL是一种前端写请求数据,后端解析gql然后返回的Json的处理方式,那么GQL的设计与解析就是必不可少的.所以需要学习编译原理.")])]),t._v(" "),_("p",[t._v("课程: 慕课 程序员三大浪漫")]),t._v(" "),_("blockquote",[_("p",[t._v("并不偏理论,注重的是实践")])]),t._v(" "),_("h2",{attrs:{id:"什么事编译原理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#什么事编译原理"}},[t._v("#")]),t._v(" 什么事编译原理")]),t._v(" "),_("p",[t._v("       研究"),_("code",[t._v("翻译")]),t._v("的科学,将一种机器语言逐渐地抽象成高级语言.")]),t._v(" "),_("ul",[_("li",[t._v("硬件语言VHDL(专门编译电路的,编译出来的可以用莫名其妙的东西打印出来)")]),t._v(" "),_("li",[t._v("专家系统(prolog)")]),t._v(" "),_("li",[t._v("内置脚本(lua,javascript)")]),t._v(" "),_("li",[t._v("领域建模(HTML,SQL,业务语言)")])]),t._v(" "),_("details",{staticClass:"custom-block details"},[_("summary",[t._v("编译原理翻译是什么")]),t._v(" "),_("p",[t._v("编译原理的编译只能用在"),_("code",[t._v("形式语言")]),t._v("上"),_("br"),t._v("\n而非"),_("code",[t._v("自然语言")]),_("br"),t._v("\n自然语言: 如现实世界说的话")])]),t._v(" "),_("h2",{attrs:{id:"编译器和解释器"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#编译器和解释器"}},[t._v("#")]),t._v(" 编译器和解释器")]),t._v(" "),_("blockquote",[_("p",[_("code",[t._v("什么事编译器")])])]),t._v(" "),_("FlowChart",{attrs:{id:"flowchart_382ee1e8",code:t.$dataBlock.flowchart_382ee1e8,preset:"vue"}}),_("details",{staticClass:"custom-block details"},[_("summary",[t._v("什么事解释器")]),t._v(" "),_("p",[t._v("源代码+输入->解释器->输出")])]),t._v(" "),_("blockquote",[_("p",[t._v("什么是混合编译器??????")])]),t._v(" "),_("FlowChart",{attrs:{id:"flowchart_382ee208",code:t.$dataBlock.flowchart_382ee208,preset:"vue"}}),_("blockquote",[_("p",[t._v("这种方式会提供虚拟机,用来编译,且其中各个部分基本都可以进行优化"),_("br"),t._v("\n中间语言的存在更利于编译"),_("br"),t._v("\n让虚拟机处理复杂的执行环境(跨平台)")])]),t._v(" "),_("details",{staticClass:"custom-block details"},[_("summary",[t._v("即时编译器 JIT")]),t._v(" "),_("p",[t._v("一种"),_("code",[t._v("提高效率的方法")]),t._v(",中间代码不是直接执行,而是先被编译成机器码再执行.")]),t._v(" "),_("p",[t._v("如现在的Java,第一次编译会直接编译成机器码,第二次就不需要编译了"),_("br"),t._v("\n还有node.js")])]),t._v(" "),_("details",{staticClass:"custom-block details"},[_("summary",[t._v("交叉编译")]),t._v(" "),_("p",[t._v("在一个平台编译产生多个平台的可执行代码")])]),t._v(" "),_("h2",{attrs:{id:"编译器的工作流程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#编译器的工作流程"}},[t._v("#")]),t._v(" 编译器的工作流程")]),t._v(" "),_("blockquote",[_("p",[t._v("关注度分离")])]),t._v(" "),_("h3",{attrs:{id:"词法分析"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#词法分析"}},[t._v("#")]),t._v(" 词法分析")]),t._v(" "),_("p",[t._v("词法分析是一个分词断句+判断词性的过程")]),t._v(" "),_("FlowChart",{attrs:{id:"flowchart_64a570a8",code:t.$dataBlock.flowchart_64a570a8,preset:"vue"}}),_("blockquote",[_("p",[t._v("之后会生成一个词法表")])]),t._v(" "),_("ul",[_("li",[t._v("var: Keyword")]),t._v(" "),_("li",[t._v("a: Variable")]),t._v(" "),_("li",[t._v("=: Operator")]),t._v(" "),_("li",[t._v("1: Integer")]),t._v(" "),_("li",[t._v("+: Operator")]),t._v(" "),_("li",[t._v("4: Integer")]),t._v(" "),_("li",[t._v("*: Operator")]),t._v(" "),_("li",[t._v("5: Integer")])]),t._v(" "),_("h3",{attrs:{id:"语法分析"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#语法分析"}},[t._v("#")]),t._v(" 语法分析")]),t._v(" "),_("blockquote",[_("p",[t._v("将词法分析得到的结果 生成为一个抽象语法树(Abstract Syntax Tree, ab. AST)的过程")])]),t._v(" "),_("p",[t._v("语法分析器常常被称作 Parser")]),t._v(" "),_("h4",{attrs:{id:"语义分析"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#语义分析"}},[t._v("#")]),t._v(" 语义分析")]),t._v(" "),_("blockquote",[_("p",[t._v("通过语义分析对抽象语法树进行语法检查非常重要"),_("br"),t._v("\n如字符串不能和整数相加")])]),t._v(" "),_("h4",{attrs:{id:"翻译-中间代码"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#翻译-中间代码"}},[t._v("#")]),t._v(" 翻译: 中间代码")]),t._v(" "),_("blockquote",[_("p",[t._v("需要接近与CPU能接受的表达式")])]),t._v(" "),_("p",[t._v("如: var a=1+4*5")]),t._v(" "),_("p",[t._v("翻译成:")]),t._v(" "),_("p",[t._v("t1 = 4*5"),_("br"),t._v("\nt2 = 1+t1"),_("br"),t._v("\nvar a = t2"),_("br"),t._v(" "),_("code",[t._v("总共有三个地址")])]),t._v(" "),_("h3",{attrs:{id:"生成机器码"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#生成机器码"}},[t._v("#")]),t._v(" 生成机器码")]),t._v(" "),_("p",[t._v("翻译结束后就需要生成机器码了")]),t._v(" "),_("ul",[_("li",[t._v("机器不懂高级语言")]),t._v(" "),_("li",[t._v("机器像卡片机一样,不断读取下一条指令并执行")]),t._v(" "),_("li",[t._v("这种简单的设计就是今天复杂的计算机")])]),t._v(" "),_("h3",{attrs:{id:"运行时环境"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#运行时环境"}},[t._v("#")]),t._v(" 运行时环境")]),t._v(" "),_("blockquote",[_("p",[t._v("将代码编译成机器码,按照操作系统的约定编译成一个应用.运行时称为操作系统的"),_("code",[t._v("进程")]),t._v("\n有的编译器将代码编译成中间代码,用一个"),_("code",[t._v("虚拟容器")]),t._v("(进程)执行它")])]),t._v(" "),_("h2",{attrs:{id:"编译器两大过程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#编译器两大过程"}},[t._v("#")]),t._v(" 编译器两大过程")]),t._v(" "),_("ul",[_("li",[t._v("分析\n"),_("ul",[_("li",[t._v("词法分析")]),t._v(" "),_("li",[t._v("语法分析")]),t._v(" "),_("li",[t._v("语义分析")]),t._v(" "),_("li",[t._v("翻译")])])]),t._v(" "),_("li",[t._v("综合\n"),_("ul",[_("li",[t._v("中间语言")]),t._v(" "),_("li",[t._v("代码优化")]),t._v(" "),_("li",[t._v("机器码生成")]),t._v(" "),_("li",[t._v("运行环境及其他")])])])]),t._v(" "),_("h2",{attrs:{id:"分层设计"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#分层设计"}},[t._v("#")]),t._v(" 分层设计")]),t._v(" "),_("ul",[_("li",[t._v("难点1: 关注度分离")]),t._v(" "),_("li",[t._v("难点2: 层足够强大,每一层,都是"),_("code",[t._v("[优质的]")]),t._v("算法与数据结构,架构技巧解决大量共性的问题")])])],1)}),[],!1,null,null,null);"function"==typeof r&&r(e);a.default=e.exports}}]);