(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{528:function(e,t,v){"use strict";v.r(t);var _=v(0),r=Object(_.a)({},(function(){var e=this,t=e.$createElement,v=e._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("p"),v("div",{staticClass:"table-of-contents"},[v("ul",[v("li",[v("a",{attrs:{href:"#比如"}},[e._v("比如")])]),v("li",[v("a",{attrs:{href:"#ioc-控制反转"}},[e._v("IOC 控制反转")])])])]),v("p"),e._v(" "),v("h1",{attrs:{id:"依赖注入"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#依赖注入"}},[e._v("#")]),e._v(" 依赖注入")]),e._v(" "),v("blockquote",[v("p",[e._v("依赖注入是Spring里最经典的东西,在node的nest框架中也有.")])]),e._v(" "),v("p",[e._v("其实依赖注入的思想很简单,就是在一个"),v("code",[e._v("类中放入一个Key-Value的字典")]),e._v(",其中"),v("code",[e._v("Key是数据类型,Value是实际数据")]),e._v(".故可以实现"),v("code",[e._v("运行时注入对象")]),e._v(",并且"),v("code",[e._v("对象的控制操作可以隐藏起来")]),e._v(".")]),e._v(" "),v("p",[e._v("比如我们获取了一个请求,该请求传递进来一个"),v("code",[e._v("对象")]),e._v(",那么我们就可以直接操作这个对象,而"),v("code",[e._v("不需要自己去从请求的body中装配该对象")]),e._v(".为什么呢?")]),e._v(" "),v("p",[e._v("因为框架自己在后台根据参数将注入的"),v("code",[e._v("DTO")]),e._v("装配好,并直接返回给你了."),v("code",[e._v("这个过程是对你隐藏的")]),e._v(".")]),e._v(" "),v("p",[e._v("而对于Java一类的实现依赖注入时还需要考虑线程安全,如多个线程取数据时可能会出现注入的对象存取混乱的现象.那时候就需要用到"),v("code",[e._v("线程安全的容器")]),e._v(".")]),e._v(" "),v("h2",{attrs:{id:"比如"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#比如"}},[e._v("#")]),e._v(" 比如")]),e._v(" "),v("p",[e._v("这位大佬视频演示的依赖注入,他是用C#写的")]),e._v(" "),v("p",[v("a",{attrs:{href:"https://www.bilibili.com/video/BV1ck4y1r79C?from=search&seid=5345133825384057644",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://www.bilibili.com/video/BV1ck4y1r79C?from=search&seid=5345133825384057644"),v("OutboundLink")],1)]),e._v(" "),v("p",[e._v("Nest在Provider小节提到了依赖注入的问题.")]),e._v(" "),v("h2",{attrs:{id:"ioc-控制反转"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#ioc-控制反转"}},[e._v("#")]),e._v(" IOC 控制反转")]),e._v(" "),v("p",[e._v("控制反转的意思是将对象的生杀允夺交给框架运行时来做,这其实与依赖注入的意思相同.就是同一个思想的不同用处与解释.")])])}),[],!1,null,null,null);t.default=r.exports}}]);