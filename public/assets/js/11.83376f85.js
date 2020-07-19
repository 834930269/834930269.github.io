(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{489:function(v,_,t){"use strict";t.r(_);var e=t(0),a=Object(e.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#什么是分布式系统"}},[v._v("什么是分布式系统?")])]),t("li",[t("a",{attrs:{href:"#zookeeper特性"}},[v._v("zookeeper特性")])])])]),t("p"),v._v(" "),t("h1",{attrs:{id:"为什么要开分布式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为什么要开分布式"}},[v._v("#")]),v._v(" 为什么要开分布式?")]),v._v(" "),t("p",[v._v("       想要开发一个接口测试的App,以后做项目大概都是前后端分离了.如果每次都使用Postman感觉有点繁琐.")]),v._v(" "),t("h2",{attrs:{id:"什么是分布式系统"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是分布式系统"}},[v._v("#")]),v._v(" 什么是分布式系统?")]),v._v(" "),t("ul",[t("li",[v._v("很多计算机组成一个整体,一致对外处理同一请求")]),v._v(" "),t("li",[v._v("简而言之,类似于CDN,只不过逻辑层面上是一体的")]),v._v(" "),t("li",[v._v("内部的每台计算机都可以互相通讯")]),v._v(" "),t("li",[v._v("一次请求会经过多台计算机")]),v._v(" "),t("li",[v._v("分布式 < 集群")])]),v._v(" "),t("p",[v._v("       那么为什么要这样搞?")]),v._v(" "),t("details",{staticClass:"custom-block details"},[t("summary",[v._v("`点开查看答案`")]),v._v(" "),t("p",[v._v("有些时候一个电脑会无法处理同一时刻到来的请求.\n如该请求有几个需求:")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("需要处理图片")])]),v._v(" "),t("li",[t("p",[v._v("需要调用人工智障")])]),v._v(" "),t("li",[t("p",[v._v("..."),t("br"),v._v("\n一大堆的需求同时出现在一台电脑上是肯定无法完成任务的.\n所以可以考虑这种拆分方法:")])]),v._v(" "),t("li",[t("p",[v._v("将图片处理分配给一台电脑")])]),v._v(" "),t("li",[t("p",[v._v("将人工智障分配给一台电脑")])]),v._v(" "),t("li",[t("p",[v._v("...")])])]),v._v(" "),t("p",[v._v("√")])]),v._v(" "),t("h2",{attrs:{id:"zookeeper特性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#zookeeper特性"}},[v._v("#")]),v._v(" zookeeper特性")]),v._v(" "),t("ul",[t("li",[v._v("一致性: 数据一致性,数据按照顺序分批入库")]),v._v(" "),t("li",[v._v("原子性: 事务"),t("code",[v._v("要么成功要么失败")]),v._v(",不会局部化.")]),v._v(" "),t("li",[v._v("单一视图: 任何连接到集群上的机器所读取到的"),t("code",[v._v("状态都是一样的")])]),v._v(" "),t("li",[v._v("可靠性：每次对zk的操作状态都会保存在服务器,"),t("code",[v._v("可以回滚")])]),v._v(" "),t("li",[v._v("实时性: 客户端可以读取到zk服务端的最新数据")])])])}),[],!1,null,null,null);_.default=a.exports}}]);