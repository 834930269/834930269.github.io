(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{588:function(t,e,s){"use strict";s.r(e);var r=s(0),n=Object(r.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p"),s("div",{staticClass:"table-of-contents"},[s("ul")]),s("p"),t._v(" "),s("h1",{attrs:{id:"关于暴露模块"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#关于暴露模块"}},[t._v("#")]),t._v(" 关于暴露模块")]),t._v(" "),s("p",[t._v("类似于spring,对于单模块的服务(service)中可能会存在依赖注入了当前模块的module(如orm).出现这种情况时就会不允许在其它模块中直接进行依赖注入.因为其他模块找不到当前模块中依赖的其他被注入的模块.")]),t._v(" "),s("p",[t._v("故而就无法在根模块中将该service依赖注入到其他的模块(如中间件),因为做RBAC的时候中间件需要用到数据库.")]),t._v(" "),s("p",[t._v("但是可以通过将模块从子模块中export出去,这时就可以由根模块进行import")]),t._v(" "),s("p",[t._v("这就是跨模块依赖注入存在的意义.")])])}),[],!1,null,null,null);e.default=n.exports}}]);