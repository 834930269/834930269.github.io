(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{526:function(s,a,e){"use strict";e.r(a);var t=e(0),r=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#展示所有的权限"}},[s._v("展示所有的权限")])]),e("li",[e("a",{attrs:{href:"#展示所有用户"}},[s._v("展示所有用户")])]),e("li",[e("a",{attrs:{href:"#展示当前用户"}},[s._v("展示当前用户")])]),e("li",[e("a",{attrs:{href:"#创建新用户"}},[s._v("创建新用户")])]),e("li",[e("a",{attrs:{href:"#给用户添加权限"}},[s._v("给用户添加权限")])]),e("li",[e("a",{attrs:{href:"#新建一个root用户-并赋予管理员权限"}},[s._v("新建一个root用户,并赋予管理员权限")])])])]),e("p"),s._v(" "),e("h1",{attrs:{id:"neo4j权限控制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#neo4j权限控制"}},[s._v("#")]),s._v(" neo4j权限控制")]),s._v(" "),e("p",[s._v("Neo4j提供六种级别的权限")]),s._v(" "),e("ul",[e("li",[s._v("editor")]),s._v(" "),e("li",[s._v("reader")]),s._v(" "),e("li",[s._v("architect")]),s._v(" "),e("li",[s._v("Publisher")]),s._v(" "),e("li",[s._v("admin")]),s._v(" "),e("li",[s._v("PUBLIC")])]),s._v(" "),e("blockquote",[e("p",[s._v("注意,所有的权限操作必须在system库中进行")])]),s._v(" "),e("p",[e("img",{attrs:{src:"http://cdn.be-sunshine.cn/graph_19.jpg",alt:""}})]),s._v(" "),e("blockquote",[e("p",[s._v("在neo4j-operation手册 P433页,这里只记录暂时用到的")])]),s._v(" "),e("h2",{attrs:{id:"展示所有的权限"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#展示所有的权限"}},[s._v("#")]),s._v(" 展示所有的权限")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("CALL dbms.security.listRoles()\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"展示所有用户"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#展示所有用户"}},[s._v("#")]),s._v(" 展示所有用户")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("CALL dbms.security.listUsers()\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"展示当前用户"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#展示当前用户"}},[s._v("#")]),s._v(" 展示当前用户")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("CALL dbms.showCurrentUser()\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"创建新用户"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建新用户"}},[s._v("#")]),s._v(" 创建新用户")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("CALL dbms.security.createUser(username, password, requirePasswordChange)\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ul",[e("li",[s._v("username: String")]),s._v(" "),e("li",[s._v("password: String")]),s._v(" "),e("li",[s._v("requirePasswordChange: 是否更改密码,填false就好了")])]),s._v(" "),e("h2",{attrs:{id:"给用户添加权限"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#给用户添加权限"}},[s._v("#")]),s._v(" 给用户添加权限")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("CALL dbms.security.addRoleToUser('admin','root')\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"新建一个root用户-并赋予管理员权限"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#新建一个root用户-并赋予管理员权限"}},[s._v("#")]),s._v(" 新建一个root用户,并赋予管理员权限")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("CALL dbms.security.createUser('root','root',false);\nCALL dbms.security.addRoleToUser('admin','root');\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])])])}),[],!1,null,null,null);a.default=r.exports}}]);