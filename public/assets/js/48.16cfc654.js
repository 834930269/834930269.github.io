(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{525:function(_,t,v){"use strict";v.r(t);var a=v(0),s=Object(a.a)({},(function(){var _=this,t=_.$createElement,v=_._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("p"),v("div",{staticClass:"table-of-contents"},[v("ul",[v("li",[v("a",{attrs:{href:"#图形数据库概念"}},[_._v("图形数据库概念")]),v("ul",[v("li",[v("a",{attrs:{href:"#图示例"}},[_._v("图示例")])]),v("li",[v("a",{attrs:{href:"#节点"}},[_._v("节点")])]),v("li",[v("a",{attrs:{href:"#标签"}},[_._v("标签")])]),v("li",[v("a",{attrs:{href:"#关系"}},[_._v("关系")])]),v("li",[v("a",{attrs:{href:"#关系类型"}},[_._v("关系类型")])]),v("li",[v("a",{attrs:{href:"#属性"}},[_._v("属性")])]),v("li",[v("a",{attrs:{href:"#遍历和路径"}},[_._v("遍历和路径")])]),v("li",[v("a",{attrs:{href:"#模式"}},[_._v("模式")])]),v("li",[v("a",{attrs:{href:"#索引"}},[_._v("索引")])]),v("li",[v("a",{attrs:{href:"#限制"}},[_._v("限制")])]),v("li",[v("a",{attrs:{href:"#命名规则和推荐的命名规则"}},[_._v("命名规则和推荐的命名规则")])])])])])]),v("p"),_._v(" "),v("h1",{attrs:{id:"neo4j"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#neo4j"}},[_._v("#")]),_._v(" neo4j")]),_._v(" "),v("blockquote",[v("p",[_._v("译自官方文档.")])]),_._v(" "),v("h2",{attrs:{id:"图形数据库概念"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#图形数据库概念"}},[_._v("#")]),_._v(" 图形数据库概念")]),_._v(" "),v("p",[v("em",[_._v("本章将介绍图形数据库的基本概念")])]),_._v(" "),v("h3",{attrs:{id:"图示例"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#图示例"}},[_._v("#")]),_._v(" 图示例")]),_._v(" "),v("p",[_._v("我们将使用下面这张图示的图结构来介绍图的基本概念\n"),v("img",{attrs:{src:"http://cdn.be-sunshine.cn/graph_1.jpg",alt:""}})]),_._v(" "),v("h3",{attrs:{id:"节点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#节点"}},[_._v("#")]),_._v(" 节点")]),_._v(" "),v("p",[_._v("节点经常被用于代表一个"),v("code",[_._v("实体")]),_._v(",下面这个示例是一个单节点.\n"),v("img",{attrs:{src:"http://cdn.be-sunshine.cn/graph_2.jpg",alt:""}})]),_._v(" "),v("h3",{attrs:{id:"标签"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#标签"}},[_._v("#")]),_._v(" 标签")]),_._v(" "),v("p",[_._v("我们常用一个标签来代替一组数据集,标签随着创建节点时添加的标签信息一同创建.")]),_._v(" "),v("p",[_._v("例如,你们可以指定一个新的用户通过给"),v("code",[_._v("节点")]),_._v("一个新的"),v("code",[_._v("标签")]),_._v(" "),v("code",[_._v(":User")]),_._v(".当然,你们也可以寻找自己的想要的用户节点,通过指定一个用户名.")]),_._v(" "),v("p",[_._v("标签可以在运行时被移除或者添加,这些节点可以添加一个临时状态,"),v("code",[_._v(":Suspended")]),_._v(" 标签可以被用于标记这些.")]),_._v(" "),v("p",[_._v("一个节点可以有一个或多个标签.这群节点被标记为 "),v("code",[_._v("Person")]),_._v(" 和 "),v("code",[_._v("Movie")]),_._v(", 但其实我们也可以给一个节点标记更多地的标签.")]),_._v(" "),v("p",[_._v("下面这张图展示了一个节点内可以存在多个标签.")]),_._v(" "),v("p",[v("img",{attrs:{src:"http://cdn.be-sunshine.cn/graph_3.jpg",alt:""}})]),_._v(" "),v("h3",{attrs:{id:"关系"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#关系"}},[_._v("#")]),_._v(" 关系")]),_._v(" "),v("p",[_._v("一个关系用于连接两个节点,关系的出现使得大量节点可以通过关系变成一个结构. 故,我们允许一个图可以重塑成一个列表,一个树,图,或者一个"),v("code",[_._v("复合实体(多个节点组合成一个实体)")]),_._v("—或者其他的更加复杂的的结构."),v("br"),_._v("\n下面将展示关系:\n"),v("img",{attrs:{src:"http://cdn.be-sunshine.cn/graph_4.jpg",alt:""}})]),_._v(" "),v("h3",{attrs:{id:"关系类型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#关系类型"}},[_._v("#")]),_._v(" 关系类型")]),_._v(" "),v("p",[_._v("一个关系必须至少包含一个关系.")]),_._v(" "),v("p",[_._v("我们的例子使用"),v("code",[_._v("ACTED_IN")]),_._v("和"),v("code",[_._v("DIRECTED")]),_._v(" 作为关系属性,并且"),v("code",[_._v("ACTED_IN")]),_._v("关系类型中包含一个命名为"),v("code",[_._v("roles")]),_._v("的数组属性.")]),_._v(" "),v("p",[_._v("且该关系必须是有向图.")]),_._v(" "),v("p",[v("img",{attrs:{src:"http://cdn.be-sunshine.cn/graph_5.jpg",alt:""}})]),_._v(" "),v("p",[_._v("我们可以看到"),v("code",[_._v("Tom Hanks")]),_._v("有一个出边,当"),v("code",[_._v("Forrest Gump")]),_._v("节点则有一个入边.")]),_._v(" "),v("p",[_._v("关系一定存在一个方向,所以,你需要注意哪些方向是有用的,这就意味着尽量不要添加一些没意义或者重复的关系,除非这个关系是必要的.")]),_._v(" "),v("p",[_._v("比如: "),v("code",[_._v("Tom Hanks Knows")]),_._v(" himself")]),_._v(" "),v("p",[v("img",{attrs:{src:"http://cdn.be-sunshine.cn/graph_6.jpg",alt:""}})]),_._v(" "),v("h3",{attrs:{id:"属性"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#属性"}},[_._v("#")]),_._v(" 属性")]),_._v(" "),v("p",[_._v("属性是键值对,可以添加在节点或者关系上.")]),_._v(" "),v("p",[_._v("在我们的示例图中,我们将属性"),v("code",[_._v("name")]),_._v("和"),v("code",[_._v("born")]),_._v("添加到"),v("code",[_._v("Person")]),_._v("节点上,"),v("code",[_._v("title")]),_._v("和"),v("code",[_._v("released")]),_._v("添加到"),v("code",[_._v("Movie")]),_._v("节点上,并且将"),v("code",[_._v("roles")]),_._v("属性添加到关系"),v("code",[_._v(":ACTED_IN")]),_._v("上.")]),_._v(" "),v("p",[_._v("这些属性的值可以有不同的类型,如"),v("code",[_._v("number")]),_._v(","),v("code",[_._v("string")]),_._v(",以及"),v("code",[_._v("boolean")]),_._v(".对于其他的可用类型,参考Cypher语法手册(官网里).")]),_._v(" "),v("h3",{attrs:{id:"遍历和路径"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#遍历和路径"}},[_._v("#")]),_._v(" 遍历和路径")]),_._v(" "),v("p",[_._v("(Traversals and paths)")]),_._v(" "),v("p",[_._v('一个遍历代表的是如何查询一个图来寻找您想要的答案,一般可以用一个通俗的语言来表达,如: "什么音乐我的朋友喜欢,但我还没有拥有." "What music do my friends like that I don\'t yet own?",或者 "如果电源中断,哪些网站服务会受到影响?" "What web services are affected if this power supply goes down?"')]),_._v(" "),v("p",[_._v("遍历意味着以某种方式(规则)访问节点,通常访问的将是图的一个子集.")]),_._v(" "),v("p",[_._v("如果我们想要找到哪个电影"),v("code",[_._v("Tom Hanks")]),_._v("表演过的,遍历将从"),v("code",[_._v("Tom Hanks")]),_._v("节点开始,紧接着将通过"),v("code",[_._v(":ACTED_IN")]),_._v("关系连接到下一个节点"),v("code",[_._v("Movie")]),_._v(",最终将返回一个"),v("code",[_._v("Forrest Gump")]),_._v("电影 （遍历结束).")]),_._v(" "),v("p",[v("img",{attrs:{src:"http://cdn.be-sunshine.cn/graph_7.jpg",alt:""}})]),_._v(" "),v("p",[_._v("这个遍历将会返回一个只含有一条路径的结果:")]),_._v(" "),v("p",[v("img",{attrs:{src:"http://cdn.be-sunshine.cn/graph_8.jpg",alt:""}})]),_._v(" "),v("p",[_._v("其中返回的图中,最少的路径长度为0,它代表的是只包含一个节点且没有关系,如:")]),_._v(" "),v("p",[v("img",{attrs:{src:"http://cdn.be-sunshine.cn/graph_9.jpg",alt:""}})]),_._v(" "),v("p",[_._v("节点与长度都是一:")]),_._v(" "),v("p",[v("img",{attrs:{src:"http://cdn.be-sunshine.cn/graph_10.jpg",alt:""}})]),_._v(" "),v("h3",{attrs:{id:"模式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#模式"}},[_._v("#")]),_._v(" 模式")]),_._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",[_._v("模式(Schema),在关系数据库的理论中一般是位于"),v("code",[_._v("数据库")]),_._v("之上的一层,通常在关系数据库中模式会分为三层.")]),_._v(" "),v("p",[_._v("外模式: 面向应用程序提供的视图或者存储过程(即一部分数据库的结构)")]),_._v(" "),v("p",[_._v("模式: 整个数据表的集合")]),_._v(" "),v("p",[_._v("内模式: 数据表的实际物理存储和底层数据结构,数据库管理者不需要看到这部分.")])]),_._v(" "),v("p",[_._v("在neo4j中,你没有必要去添加模式,但是它是存在的,一个neo4j中的模式依赖于索引(indexes)和限制(constraints).")]),_._v(" "),v("h3",{attrs:{id:"索引"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#索引"}},[_._v("#")]),_._v(" 索引")]),_._v(" "),v("p",[_._v("索引一般用来提高检索效率,这部分放在手册介绍.")]),_._v(" "),v("h3",{attrs:{id:"限制"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#限制"}},[_._v("#")]),_._v(" 限制")]),_._v(" "),v("p",[_._v("限制同关系数据库的实体完整性(即属性是有限制的) - "),v("code",[_._v("这一个在介绍中没说,所以不做肯定")])]),_._v(" "),v("h3",{attrs:{id:"命名规则和推荐的命名规则"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#命名规则和推荐的命名规则"}},[_._v("#")]),_._v(" 命名规则和推荐的命名规则")]),_._v(" "),v("p",[_._v("节点标签和关系属性以及属性都是区分大小写的.")]),_._v(" "),v("blockquote",[v("p",[_._v("推荐")])]),_._v(" "),v("p",[v("img",{attrs:{src:"http://cdn.be-sunshine.cn/graph_11.jpg",alt:""}})])])}),[],!1,null,null,null);t.default=s.exports}}]);