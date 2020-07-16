(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{525:function(s,a,e){"use strict";e.r(a);var n=e(0),t=Object(n.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#前言"}},[s._v("前言")])]),e("li",[e("a",{attrs:{href:"#语法补充"}},[s._v("语法补充")]),e("ul",[e("li",[e("a",{attrs:{href:"#where"}},[s._v("where")])]),e("li",[e("a",{attrs:{href:"#like"}},[s._v("LIKE")])]),e("li",[e("a",{attrs:{href:"#union"}},[s._v("UNION")])]),e("li",[e("a",{attrs:{href:"#排序"}},[s._v("排序")])]),e("li",[e("a",{attrs:{href:"#group-by"}},[s._v("Group By")])]),e("li",[e("a",{attrs:{href:"#join-操作集"}},[s._v("JOIN 操作集")])]),e("li",[e("a",{attrs:{href:"#null-值处理"}},[s._v("NULL 值处理")])]),e("li",[e("a",{attrs:{href:"#mysql正则"}},[s._v("Mysql正则")])]),e("li",[e("a",{attrs:{href:"#事务"}},[s._v("事务")])])])]),e("li",[e("a",{attrs:{href:"#架构图-来自mooc-java工程师"}},[s._v("架构图 - 来自mooc Java工程师")])])])]),e("p"),s._v(" "),e("h1",{attrs:{id:"mysql"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mysql"}},[s._v("#")]),s._v(" mysql")]),s._v(" "),e("h2",{attrs:{id:"前言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),e("blockquote",[e("p",[s._v("偶尔需要用到")])]),s._v(" "),e("h2",{attrs:{id:"语法补充"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#语法补充"}},[s._v("#")]),s._v(" 语法补充")]),s._v(" "),e("h3",{attrs:{id:"where"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#where"}},[s._v("#")]),s._v(" where")]),s._v(" "),e("p",[s._v("查询语句中你可以使用一个或者多个表，表之间使用逗号, 分割，并使用WHERE语句来设定查询条件。")]),s._v(" "),e("blockquote",[e("p",[s._v("BINARY 指定区分大小写")])]),s._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" runoob_tbl "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BINARY")]),s._v(" runoob_author"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'runoob.com'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h4",{attrs:{id:"双表非嵌套查询"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#双表非嵌套查询"}},[s._v("#")]),s._v(" 双表非嵌套查询")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("select * from user,hall where user.id=hall.Hall_create_id;\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"like"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#like"}},[s._v("#")]),s._v(" LIKE")]),s._v(" "),e("p",[s._v("WHERE 子句中可以使用等号 = 来设定获取数据的条件，如 \"runoob_author = 'RUNOOB.COM'\"。")]),s._v(" "),e("p",[s._v('但是有时候我们需要获取 runoob_author 字段含有 "COM" 字符的所有记录，这时我们就需要在 WHERE 子句中使用 SQL LIKE 子句。')]),s._v(" "),e("p",[s._v("SQL LIKE 子句中使用百分号 %字符来表示任意字符，类似于UNIX或正则表达式中的星号 *。")]),s._v(" "),e("p",[s._v("如果没有使用百分号 %, LIKE 子句与等号 = 的效果是一样的。")]),s._v(" "),e("blockquote",[e("p",[s._v("举例子:")])]),s._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" runoob_tbl  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" runoob_author "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("LIKE")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%COM'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h4",{attrs:{id:"模糊匹配语义集"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#模糊匹配语义集"}},[s._v("#")]),s._v(" 模糊匹配语义集")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("'%a'     //以a结尾的数据\n'a%'     //以a开头的数据\n'%a%'    //含有a的数据\n'_a_'    //三位且中间字母是a的\n'_a'     //两位且结尾字母是a的\n'a_'     //两位且开头字母是a的\n\n%：表示任意 0 个或多个字符。可匹配任意类型和长度的字符，有些情况下若是中文，请使用两个百分号（%%）表示。\n\n_：表示任意单个字符。匹配单个任意字符，它常用来限制表达式的字符长度语句。\n\n[]：表示括号内所列字符中的一个（类似正则表达式）。指定一个字符、字符串或范围，要求所匹配对象为它们中的任一个。\n\n[^] ：表示不在括号所列之内的单个字符。其取值和 [] 相同，但它要求所匹配对象为指定字符以外的任一个字符。\n\n查询内容包含通配符时,由于通配符的缘故，导致我们查询特殊字符 “%”、“_”、“[” 的语句无法正常实现，而把特殊字符用 “[ ]” 括起便可正常查询。\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br")])]),e("h3",{attrs:{id:"union"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#union"}},[s._v("#")]),s._v(" UNION")]),s._v(" "),e("p",[s._v("MySQL UNION 操作符用于"),e("code",[s._v("连接两个以上的 SELECT 语句的结果组合到一个结果集合中")]),s._v("。多个 SELECT 语句会删除重复的数据。")]),s._v(" "),e("p",[s._v("Union并非嵌套查询,而是组合")]),s._v(" "),e("blockquote",[e("p",[s._v("这点很重要: 连接两个和两个以上的select语句的结果")]),s._v(" "),e("blockquote",[e("p",[s._v("所以,如果不需要嵌套查询的话,直接where就可以了")])])]),s._v(" "),e("h4",{attrs:{id:"语法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[s._v("#")]),s._v(" 语法")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("SELECT expression1, expression2, ... expression_n\nFROM tables\n[WHERE conditions]\nUNION [ALL | DISTINCT]\nSELECT expression1, expression2, ... expression_n\nFROM tables\n[WHERE conditions];\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("ul",[e("li",[e("p",[s._v("expression1, expression2, ... expression_n: 要检索的列。")])]),s._v(" "),e("li",[e("p",[s._v("tables: 要检索的数据表。")])]),s._v(" "),e("li",[e("p",[s._v("WHERE conditions: 可选， 检索条件。")])]),s._v(" "),e("li",[e("p",[s._v("DISTINCT: 可选，删除结果集中重复的数据。默认情况下 UNION 操作符已经删除了重复数据，所以 DISTINCT 修饰符对结果没啥影响。")])]),s._v(" "),e("li",[e("p",[s._v("ALL: 可选，返回所有结果集，包含重复数据。")])])]),s._v(" "),e("h3",{attrs:{id:"排序"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#排序"}},[s._v("#")]),s._v(" 排序")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("SELECT field1, field2,...fieldN FROM table_name1, table_name2...\nORDER BY field1 [ASC [DESC][默认 ASC]], [field2...] [ASC [DESC][默认 ASC]]\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("ul",[e("li",[s._v("你可以使用任何字段来作为排序的条件，从而返回排序后的查询结果。")]),s._v(" "),e("li",[s._v("你可以设定多个字段来排序。")]),s._v(" "),e("li",[s._v("你可以使用 ASC 或 DESC 关键字来设置查询结果是按升序或降序排列。 默认情况下，它是按升序排列。")]),s._v(" "),e("li",[s._v("你可以添加 WHERE...LIKE 子句来设置条件。")])]),s._v(" "),e("p",[s._v("如果字符集采用的是 utf8(万国码)，需要先对字段进行转码然后排序：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("SELECT * \nFROM runoob_tbl\nORDER BY CONVERT(runoob_title using gbk);\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("h3",{attrs:{id:"group-by"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#group-by"}},[s._v("#")]),s._v(" Group By")]),s._v(" "),e("p",[s._v("GROUP BY 语句根据一个或多个列对结果集进行分组。")]),s._v(" "),e("p",[s._v("在分组的列上我们可以使用 COUNT, SUM, AVG,等函数。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("SELECT column_name, function(column_name)\nFROM table_name\nWHERE column_name operator value\nGROUP BY column_name;\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("h4",{attrs:{id:"数据"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数据"}},[s._v("#")]),s._v(" 数据")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("SET NAMES utf8;\nSET FOREIGN_KEY_CHECKS = 0;\n\n-- ----------------------------\n--  Table structure for `employee_tbl`\n-- ----------------------------\nDROP TABLE IF EXISTS `employee_tbl`;\nCREATE TABLE `employee_tbl` (\n  `id` int(11) NOT NULL,\n  `name` char(10) NOT NULL DEFAULT '',\n  `date` datetime NOT NULL,\n  `singin` tinyint(4) NOT NULL DEFAULT '0' COMMENT '登录次数',\n  PRIMARY KEY (`id`)\n) ENGINE=InnoDB DEFAULT CHARSET=utf8;\n\n-- ----------------------------\n--  Records of `employee_tbl`\n-- ----------------------------\nBEGIN;\nINSERT INTO `employee_tbl` VALUES ('1', '小明', '2016-04-22 15:25:33', '1'), ('2', '小王', '2016-04-20 15:25:47', '3'), ('3', '小丽', '2016-04-19 15:26:02', '2'), ('4', '小王', '2016-04-07 15:26:14', '4'), ('5', '小明', '2016-04-11 15:26:40', '4'), ('6', '小明', '2016-04-04 15:26:54', '2');\nCOMMIT;\n\nSET FOREIGN_KEY_CHECKS = 1;\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br")])]),e("h4",{attrs:{id:"按名字分组"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#按名字分组"}},[s._v("#")]),s._v(" 按名字分组")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("SELECT name, COUNT(*) FROM   employee_tbl GROUP BY name;\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("h4",{attrs:{id:"with-rollup"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#with-rollup"}},[s._v("#")]),s._v(" WITH ROLLUP")]),s._v(" "),e("p",[s._v("WITH ROLLUP 可以实现在分组统计数据基础上再进行相同的统计（SUM,AVG,COUNT…）。")]),s._v(" "),e("p",[s._v("这句话什么意思,就是说,如下:")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("SELECT name, SUM(singin) as singin_count FROM  employee_tbl GROUP BY name WITH ROLLUP;\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("一个SUM会返回所有的singin的和,然后添加WITH ROULLUP后最后一行会多出一个元祖,代表的是每个元祖上signin的"),e("code",[s._v("和的总和")]),s._v(".")]),s._v(" "),e("p",[s._v("AVG同理.")]),s._v(" "),e("p",[s._v("但最后会得出如下的值.名称为null.")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("+--------+--------------+\n| name   | singin_count |\n+--------+--------------+\n| 小丽 |            2 |\n| 小明 |            7 |\n| 小王 |            7 |\n| NULL   |           16 |\n+--------+--------------+\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("p",[s._v("如何给null赋值:")]),s._v(" "),e("h4",{attrs:{id:"coalesce"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#coalesce"}},[s._v("#")]),s._v(" coalesce")]),s._v(" "),e("blockquote",[e("p",[s._v("使用coalesce(属性,默认值)")]),s._v(" "),e("blockquote",[e("p",[s._v("遇到该属性值为空时返回默认值")])])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("SELECT coalesce(name, '总数'), SUM(singin) as singin_count FROM  employee_tbl GROUP BY name WITH ROLLUP;\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"join-操作集"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#join-操作集"}},[s._v("#")]),s._v(" JOIN 操作集")]),s._v(" "),e("ul",[e("li",[s._v("INNER JOIN（内连接,或等值连接）：获取两个表中字段匹配关系的记录。")]),s._v(" "),e("li",[s._v("LEFT JOIN（左连接）：获取左表所有记录，即使右表没有对应匹配的记录。")]),s._v(" "),e("li",[s._v("RIGHT JOIN（右连接）： 与 LEFT JOIN 相反，用于获取右表所有记录，即使左表没有对应匹配的记录。")])]),s._v(" "),e("blockquote",[e("p",[s._v("我觉得菜鸟的这节讲得很好,其实三种join就是三种不同的交集")])]),s._v(" "),e("p",[e("a",{attrs:{href:"https://www.runoob.com/mysql/mysql-join.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://www.runoob.com/mysql/mysql-join.html"),e("OutboundLink")],1)]),s._v(" "),e("h3",{attrs:{id:"null-值处理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#null-值处理"}},[s._v("#")]),s._v(" NULL 值处理")]),s._v(" "),e("ul",[e("li",[s._v("IS NULL: 当列的值是 NULL,此运算符返回 true。")]),s._v(" "),e("li",[s._v("IS NOT NULL: 当列的值不为 NULL, 运算符返回 true。")]),s._v(" "),e("li",[s._v("<=>: 比较操作符（不同于 = 运算符），当比较的的两个值相等或者都为 NULL 时返回 true。")])]),s._v(" "),e("p",[s._v("关于 NULL 的条件比较运算是比较特殊的。你不能使用 = NULL 或 != NULL 在列中查找 NULL 值 。")]),s._v(" "),e("p",[s._v("在 MySQL 中，NULL 值与任何其它值的比较（即使是 NULL）永远返回 NULL，即 NULL = NULL 返回 NULL 。")]),s._v(" "),e("p",[s._v("MySQL 中处理 NULL 使用 IS NULL 和 IS NOT NULL 运算符。")]),s._v(" "),e("div",{staticClass:"custom-block tip"},[e("blockquote",[e("p",[s._v("select * , columnName1+ifnull(columnName2,0) from tableName;")])]),s._v(" "),e("p",[s._v("columnName1，columnName2 为 int 型，当 columnName2 中，有值为 null 时，columnName1+columnName2=null， ifnull(columnName2,0) 把 columnName2 中 null 值转为 0。")])]),s._v(" "),e("p",[s._v("IS NULL 与 IS NOT NULL")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("SELECT * from runoob_test_tbl WHERE runoob_count IS NOT NULL;\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("h3",{attrs:{id:"mysql正则"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mysql正则"}},[s._v("#")]),s._v(" Mysql正则")]),s._v(" "),e("h3",{attrs:{id:"事务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#事务"}},[s._v("#")]),s._v(" 事务")]),s._v(" "),e("p",[s._v("MySQL 事务主要用于处理操作量大，复杂度高的数据。比如说，在人员管理系统中，你删除一个人员，你既需要删除人员的基本资料，也要删除和该人员相关的信息，如信箱，文章等等，这样，这些数据库操作语句就构成一个事务！")]),s._v(" "),e("h2",{attrs:{id:"架构图-来自mooc-java工程师"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#架构图-来自mooc-java工程师"}},[s._v("#")]),s._v(" 架构图 - 来自mooc Java工程师")]),s._v(" "),e("p",[e("code",[s._v("建议Download到本地...")])]),s._v(" "),e("p",[e("img",{attrs:{src:"http://cdn.be-sunshine.cn/mysql-1.png",alt:""}})])])}),[],!1,null,null,null);a.default=t.exports}}]);