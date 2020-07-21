(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{523:function(e,s,a){"use strict";a.r(s);var t=a(0),r=Object(t.a)({},(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#cypher"}},[e._v("Cypher")])]),a("li",[a("a",{attrs:{href:"#最简单的例子"}},[e._v("最简单的例子")])]),a("li",[a("a",{attrs:{href:"#节点语法"}},[e._v("节点语法")])]),a("li",[a("a",{attrs:{href:"#关系语法"}},[e._v("关系语法")])]),a("li",[a("a",{attrs:{href:"#模式语法"}},[e._v("模式语法")])]),a("li",[a("a",{attrs:{href:"#模式变量"}},[e._v("模式变量")])]),a("li",[a("a",{attrs:{href:"#操作词"}},[e._v("操作词")])]),a("li",[a("a",{attrs:{href:"#练习"}},[e._v("练习")]),a("ul",[a("li",[a("a",{attrs:{href:"#创建数据"}},[e._v("创建数据")])]),a("li",[a("a",{attrs:{href:"#匹配节点-match"}},[e._v("匹配节点(Match)")])]),a("li",[a("a",{attrs:{href:"#查询基础上添加新的结构"}},[e._v("查询基础上添加新的结构")])])])])])]),a("p"),e._v(" "),a("h1",{attrs:{id:"neo4j指令集cypher"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#neo4j指令集cypher"}},[e._v("#")]),e._v(" neo4j指令集Cypher")]),e._v(" "),a("h2",{attrs:{id:"cypher"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cypher"}},[e._v("#")]),e._v(" Cypher")]),e._v(" "),a("p",[e._v("graph query language "),a("code",[e._v("Cypher")])]),e._v(" "),a("h2",{attrs:{id:"最简单的例子"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#最简单的例子"}},[e._v("#")]),e._v(" 最简单的例子")]),e._v(" "),a("p",[e._v("A Person "),a("code",[e._v("LIVES_IN")]),e._v(" a City or a City is PART_OF a Country;")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("(Person) -[:LIVES_IN]->(City)-[:PART_OF]->(:Country)\n\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("h2",{attrs:{id:"节点语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#节点语法"}},[e._v("#")]),e._v(" 节点语法")]),e._v(" "),a("p",[e._v("Cypher使用"),a("code",[e._v("()")]),e._v("代表一个节点,在一个节点中,提供的属性有")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('()\n(matrix)\n(:Movie)\n(matrix:Movie)\n(matrix:Movie{title: "The Matrix"})\n(matrix:Movie{title: "The Matrix",released: 1997})\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br")])]),a("ul",[a("li",[a("code",[e._v("()")]),e._v(": 代表一个匿名，未定义的节点,如果我们想要使用该节点,我们需要对它添加一个名字")]),e._v(" "),a("li",[a("code",[e._v("(matrix)")]),e._v(": 代表添加了一个名字")]),e._v(" "),a("li",[a("code",[e._v(":Movie")]),e._v(": 代表声明了该节点的标签")]),e._v(" "),a("li",[a("code",[e._v('{title:"SAD"}')]),e._v(": 以逗号分割,均为属性")])]),e._v(" "),a("h2",{attrs:{id:"关系语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关系语法"}},[e._v("#")]),e._v(" 关系语法")]),e._v(" "),a("p",[e._v("Cypher使用 "),a("code",[e._v("--")]),e._v(" 代表无向的关系."),a("br"),e._v("\n有向的关系以三角箭头作为端点. "),a("code",[e._v("<--,--\x3e")]),a("br"),e._v("\n其中"),a("code",[e._v("[...]")]),e._v("代表关系的细节,它可以包括属性,变量以及类型的信息.")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('--\x3e\n-[role]->\n-[:ACTED_IN]->\n-[role:ACTED_IN]->\n-[role:ACTED_IN {roles: ["Neo"]}] ->\n\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br")])]),a("h2",{attrs:{id:"模式语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模式语法"}},[e._v("#")]),e._v(" 模式语法")]),e._v(" "),a("p",[e._v("将关系与节点连接起来我们称之为模式."),a("br"),e._v("\n常见的模式:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('(keanu: Person:Actor {name: "Keanu Reeves"})\n-[role:ACTED)IN  {roles: ["Neo"]}]->\n(matrix:Movie {title: "The Matrix"})\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("h2",{attrs:{id:"模式变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模式变量"}},[e._v("#")]),e._v(" 模式变量")]),e._v(" "),a("p",[e._v("为了提高模块化与减少重复,Cypher允许新建一个变量存储结果.")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("MATCH a_in = (:Person)-[:ACTED_IN]->(:Movie) return a_in;\n//返回路径\n\nMATCH a_in = (:Person)-[:ACTED_IN]->(:Movie) return length(a_in);\n\n//返回每条路径的长度\n\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br")])]),a("h2",{attrs:{id:"操作词"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#操作词"}},[e._v("#")]),e._v(" 操作词")]),e._v(" "),a("ul",[a("li",[e._v("create 和 match")]),e._v(" "),a("li",[e._v("filter,project,sort,or paginate 结果")]),e._v(" "),a("li",[e._v("组合")])]),e._v(" "),a("h2",{attrs:{id:"练习"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#练习"}},[e._v("#")]),e._v(" 练习")]),e._v(" "),a("h3",{attrs:{id:"创建数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建数据"}},[e._v("#")]),e._v(" 创建数据")]),e._v(" "),a("blockquote",[a("p",[e._v("neo4j自带的数据库里有一个比较完整的Movie和Person")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('CREATE (:Movie{title:"The Matrix",released:1997})\n\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[e._v("创建的时候也可以返回新创建的节点:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('CREATE (p:Person { name:"Keanu Reeves", born:1964 })\nRETURN p;\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[e._v("如果我们想创建多于一个的节点,我们需要用逗号分割开节点,或者用多个"),a("code",[e._v("create")]),e._v("子句.")]),e._v(" "),a("p",[e._v("当然,我们也可以创建更复杂的结构,如一个"),a("code",[e._v("ACTED_IN")]),e._v("关系,或者一个"),a("code",[e._v("DIRECTED")]),e._v("代表导演.")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('CREATE (a:Person {name: "Tom Hanks",born:1956}) - [r:ACTED_IN{roles:["Forrest"]}]->(m:Movie {title: "Forrest Gump",released:1994})\n\nCREATE (d:Person {name: "Robert Zemeckis",born:1951}) - [:DIRECTED]->(m)\n\nRETURN a,d,r,m;\n\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br")])]),a("blockquote",[a("p",[e._v("结果如下所示"),a("br"),e._v(" "),a("img",{attrs:{src:"http://cdn.be-sunshine.cn/graph_12.jpg",alt:""}})])]),e._v(" "),a("p",[a("img",{attrs:{src:"http://cdn.be-sunshine.cn/graph_13.jpg",alt:""}})]),e._v(" "),a("p",[e._v("但是在大部分的案例中,我们会想要将一个新的数据连接到一个已存在的结构,这就需要我们去寻找存在的图数据.")]),e._v(" "),a("h3",{attrs:{id:"匹配节点-match"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#匹配节点-match"}},[e._v("#")]),e._v(" 匹配节点(Match)")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("blockquote",[a("p",[e._v("一个"),a("code",[e._v("MATCH")]),e._v("语句将寻找所有满足匹配条件的路径,并且返回每一行.")])])]),e._v(" "),a("blockquote",[a("p",[e._v("查找所有带有"),a("code",[e._v("Movie")]),e._v("标签的数据")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("MATCH (m:Movie)\nRETURN m\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("blockquote",[a("p",[e._v("带属性匹配(表中必须存在)")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('MATCH (p:Person { name: "Keanu Reeves"})\nRETURN p\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[e._v("你必须提供足够确定节点的信息,并非必须提供全部的属性,某些类似于"),a("code",[e._v("关系数据库中的主键")]),e._v("可以作为查找目标")]),e._v(" "),a("blockquote",[a("p",[e._v("当然,我们也可以找到更多有趣的连接(路径),如Tom Hanks表演的电影以及他饰演的角色.")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('MATCH (p:Person {name:"Tom Hanks"}) - [r:ACTED_IN]->(m:Movie)\nRETURN m.title,r.roles\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[e._v("它会返回一个表.")]),e._v(" "),a("h3",{attrs:{id:"查询基础上添加新的结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查询基础上添加新的结构"}},[e._v("#")]),e._v(" 查询基础上添加新的结构")]),e._v(" "),a("p",[e._v("我们知道,查询会返回一个路径结构,")]),e._v(" "),a("p",[e._v("比如,我们可以先匹配上一个存在的节点,然后基于这个节点新建一个新的节点和连接.")]),e._v(" "),a("p",[e._v("比如,TomHanks在新电影Cloud Atlas中饰演Zachry")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('MATCH (p:Person { name:"Tom Hanks" })\nCREATE (m:Movie { title:"Cloud Atlas",released:2012 })\nCREATE (p)-[r:ACTED_IN { roles: [\'Zachry\']}]->(m)\nRETURN p,r,m\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br")])]),a("div",{staticClass:"custom-block tip"},[a("p",[e._v("无论我们是"),a("code",[e._v("CREATE")]),e._v("还是"),a("code",[e._v("MATCH")]),e._v("得到的节点,我们都可以对其进行操作")])]),e._v(" "),a("blockquote",[a("p",[e._v("一般的,当我们在关系数据库中添加/更新数据是,我们一般会先检查是否存在,如果存在,则直接合并到存在的上面.")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('MERGE (m:Movie { title: "Cloud Atlas"}) ON CREATE SET m.released=2013 RETURN m\n\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[e._v("上述语句开头谓词是"),a("code",[e._v("MERGE")]),e._v(",它会使得当m表创建的时候才会更改released为2013,但因为数据库中存在title为Cloud Atlas的Movie,所以找到了,所以不更改."),a("br"),e._v("\n除非这个Movie不存在才会为2013.")]),e._v(" "),a("p",[e._v("p13")])])}),[],!1,null,null,null);s.default=r.exports}}]);