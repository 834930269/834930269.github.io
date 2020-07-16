(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{493:function(s,a,e){"use strict";e.r(a);var t=e(0),r=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#什么是负载均衡"}},[s._v("什么是负载均衡")])]),e("li",[e("a",{attrs:{href:"#负载均衡分类"}},[s._v("负载均衡分类")])]),e("li",[e("a",{attrs:{href:"#负载均衡工具"}},[s._v("负载均衡工具")])]),e("li",[e("a",{attrs:{href:"#一个小问题-dubbo中也会看到负载均衡的说法"}},[s._v("一个小问题 dubbo中也会看到负载均衡的说法")])]),e("li",[e("a",{attrs:{href:"#负载均衡算法"}},[s._v("负载均衡算法")])]),e("li",[e("a",{attrs:{href:"#nginx负载均衡"}},[s._v("Nginx负载均衡")]),e("ul",[e("li",[e("a",{attrs:{href:"#反向代理"}},[s._v("反向代理")])]),e("li",[e("a",{attrs:{href:"#轮询-默认"}},[s._v("轮询(默认)")])]),e("li",[e("a",{attrs:{href:"#weight"}},[s._v("weight")])]),e("li",[e("a",{attrs:{href:"#信息丢失问题"}},[s._v("信息丢失问题")])]),e("li",[e("a",{attrs:{href:"#fair"}},[s._v("fair")])]),e("li",[e("a",{attrs:{href:"#url-hash（第三方）"}},[s._v("url_hash（第三方）")])]),e("li",[e("a",{attrs:{href:"#每台设备的状态设置"}},[s._v("每台设备的状态设置")])]),e("li",[e("a",{attrs:{href:"#实例"}},[s._v("实例")])])])])])]),e("p"),s._v(" "),e("h1",{attrs:{id:"负载均衡"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#负载均衡"}},[s._v("#")]),s._v(" 负载均衡")]),s._v(" "),e("blockquote",[e("p",[s._v("对于分布式的架构要用组件的方式去学...手上接触不到类似的项目,但这方面缺失极其薄弱.")])]),s._v(" "),e("p",[s._v("所以打算用组件式的学习方法.一个一个组件去学.")]),s._v(" "),e("blockquote",[e("p",[s._v("大部分摘自网络")])]),s._v(" "),e("h2",{attrs:{id:"什么是负载均衡"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#什么是负载均衡"}},[s._v("#")]),s._v(" 什么是负载均衡")]),s._v(" "),e("p",[s._v("Load balancing,即在多个计算机集群间选择当前的请求发送给哪一个服务器.")]),s._v(" "),e("blockquote",[e("p",[s._v("为什么成立呢? 之前有一个疑问,一个java或者什么语言写的服务器端一般只有一个服务器,那么怎么搞负载均衡?")]),s._v(" "),e("blockquote",[e("p",[s._v("以前想法很直白,难不成是通过一个应用程序来吧项目给拆掉.总之想得很复杂.")])])]),s._v(" "),e("p",[s._v("但其实对于编写的服务器而言,每一台服务器就算运行的同样的服务端程序也不会对接口产生任何影响.因为借口只负责处理任务.处理任务交给哪台电脑都可以,区别的是需要保证数据库内的数据不会出错.")]),s._v(" "),e("p",[s._v("那么什么是负载均衡?")]),s._v(" "),e("p",[s._v("比如nginx,当你在nginx中分配好负载均衡的服务器后,nginx会根据内部的算法将请求分配到不同的服务器上.而接口的请求其实只需要请求"),e("code",[s._v("主nginx")]),s._v("即可,它会自动的把请求分配出去.")]),s._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[s._v("摘自网络")]),s._v(" "),e("p",[s._v("意思是将负载（工作任务，访问请求）进行平衡、分摊到多个操作单元（服务器，组件）上进行执行。是解决高性能，单点故障（高可用），扩展性（水平伸缩）的终极解决方案。")])]),s._v(" "),e("p",[e("img",{attrs:{src:"https://img2018.cnblogs.com/blog/573911/201905/573911-20190528112846156-21585619.png",alt:""}})]),s._v(" "),e("h2",{attrs:{id:"负载均衡分类"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#负载均衡分类"}},[s._v("#")]),s._v(" 负载均衡分类")]),s._v(" "),e("p",[s._v("OSI网络七层结构,每层都可以有几个子层,OSI的七层从上到下分别是")]),s._v(" "),e("ul",[e("li",[s._v("应用层")]),s._v(" "),e("li",[s._v("表示层")]),s._v(" "),e("li",[s._v("会话层")]),s._v(" "),e("li",[s._v("传输层")]),s._v(" "),e("li",[s._v("网络层")]),s._v(" "),e("li",[s._v("数据链路层")]),s._v(" "),e("li",[s._v("物理层")])]),s._v(" "),e("p",[s._v("其中高层(应用层到传输层)定义应用程序的功能"),e("br"),s._v("\n下三层主要负责传输端到端的数据流")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://img2018.cnblogs.com/blog/573911/201905/573911-20190528140203987-590014396.png",alt:""}})]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[s._v("TELNET、HTTP、FTP、NFS、SMTP、DNS等属于第七层应用层的概念。\n\nTCP、UDP、SPX等属于第四层传输层的概念。\n\nIP、IPX等属于第三层网络层的概念。\n\nATM、FDDI等属于第二层数据链路层的概念。\n")])])]),e("p",[e("strong",[s._v("负载均衡是要在网络传输中做文章的")])]),s._v(" "),e("p",[s._v("所以针对不同层,可以对负载均衡进行分类")]),s._v(" "),e("ul",[e("li",[s._v("二层负载均衡: 负载均衡服务器对外提供一个Virtual IP(虚IP),集群中不同的机器采用相同的IP地址,但是机器的MAC地址不同,当"),e("code",[s._v("负载均衡服务器(协调者)")]),s._v("收到请求后,通过"),e("code",[s._v("改写报文的目标MAC地址")]),s._v("的方式将请求转发到目标机器实现负载均衡")]),s._v(" "),e("li",[s._v("三层负载均衡: 与二层相似,负载均衡服务器对"),e("code",[s._v("外依然提供一个VIP（虚IP）")]),s._v("，但是集群中"),e("code",[s._v("不同的机器采用不同的IP地址")]),s._v("。当负载均衡服务器接受到请求之后，根据不同的负载均衡算法，"),e("code",[s._v("通过IP将请求转发至不同的真实服务器")]),s._v("。")]),s._v(" "),e("li",[s._v("四层负载均衡: 四层负载均衡工作在OSI模型的传输层，由于在传输层，"),e("code",[s._v("只有TCP/UDP协议")]),s._v("，这两种协议中"),e("code",[s._v("除了包含源IP、目标IP以外，还包含源端口号及目的端口号")]),s._v("。四层负载均衡服务器在接受到客户端请求后，以后通过"),e("code",[s._v("修改数据包的地址信息（IP+端口号）")]),s._v("将流量转发到应用服务器。")]),s._v(" "),e("li",[s._v("七层负载均衡: 七层负载均衡工作在OSI模型的应用层，应用层协议较多，常用http、radius、dns等。七层负载就可以基于这些协议来负载。这些应用层协议中会包含很多有意义的内容。比如同一个Web服务器的负载均衡，除了根据IP加端口进行负载外，还可根据七层的URL、浏览器类别、语言来决定是否要进行负载均衡。")])]),s._v(" "),e("h2",{attrs:{id:"负载均衡工具"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#负载均衡工具"}},[s._v("#")]),s._v(" 负载均衡工具")]),s._v(" "),e("p",[s._v("市面上有很多开源的负载均衡的工具或软件，基本都是基于前面提到的方案实现的，大多数是工作在第七层和第四层的。Nginx/LVS/HAProxy是目前使用最广泛的三种负载均衡软件。")]),s._v(" "),e("p",[s._v("LVS ：LVS主要用来做四层负载均衡")]),s._v(" "),e("p",[s._v("LVS（Linux Virtual Server），也就是Linux虚拟服务器, 是一个由章文嵩博士发起的自由软件项目。使用LVS技术要达到的目标是：通过LVS提供的负载均衡技术和Linux操作系统实现一个高性能、高可用的服务器群集，它具有良好可靠性、可扩展性和可操作性。从而以低廉的成本实现最优的服务性能。")]),s._v(" "),e("p",[s._v("Nginx ：Nginx主要用来做七层负载均衡")]),s._v(" "),e("p",[s._v("Nginx（发音同engine x）是一个网页服务器，它能反向代理HTTP, HTTPS, SMTP, POP3, IMAP的协议链接，以及一个负载均衡器和一个HTTP缓存。。")]),s._v(" "),e("p",[s._v("HAProxy ：HAProxy主要用来做七层负载均衡")]),s._v(" "),e("p",[s._v("HAProxy是一个使用C语言编写的自由及开放源代码软件，其提供高可用性、负载均衡，以及基于TCP和HTTP的应用程序代理。")]),s._v(" "),e("h2",{attrs:{id:"一个小问题-dubbo中也会看到负载均衡的说法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一个小问题-dubbo中也会看到负载均衡的说法"}},[s._v("#")]),s._v(" 一个小问题 dubbo中也会看到负载均衡的说法")]),s._v(" "),e("blockquote",[e("p",[s._v("也就是说,软件层面也可以进行负载均衡的控制.")])]),s._v(" "),e("h2",{attrs:{id:"负载均衡算法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#负载均衡算法"}},[s._v("#")]),s._v(" 负载均衡算法")]),s._v(" "),e("p",[s._v("负载均衡算法可以分为两类：静态负载均衡算法和动态负载均衡算法。")]),s._v(" "),e("p",[s._v("1）.静态负载均衡算法包括：轮询，比率，优先权")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[s._v("轮询（Round Robin）：顺序循环将请求一次顺序循环地连接每个服务器。当其中某个服务器发生第二到第7 层的故障，BIG-IP 就把其从顺序循环队列中拿出，不参加下一次的轮询，直到其恢复正常。\n\n比率（Ratio）：给每个服务器分配一个加权值为比例，根椐这个比例，把用户的请求分配到每个服务器。当其中某个服务器发生第二到第7 层的故障，BIG-IP 就把其从服务器队列中拿出，不参加下一次的用户请求的分配, 直到其恢复正常。\n\n优先权（Priority）：给所有服务器分组,给每个组定义优先权，BIG-IP 用户的请求，分配给优先级最高的服务器组（在同一组内，采用轮询或比率算法，分配用户的请求）；当最高优先级中所有服务器出现故障，BIG-IP 才将请求送给次优先级的服务器组。这种方式，实际为用户提供一种热备份的方式。\n")])])]),e("p",[s._v("2).动态负载均衡算法包括: 最少连接数,最快响应速度，观察方法，预测法，动态性能分配，动态服务器补充，服务质量，服务类型，规则模式。")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[s._v("最少的连接方式（Least Connection）：传递新的连接给那些进行最少连接处理的服务器。当其中某个服务器发生第二到第7 层的故障，BIG-IP 就把其从服务器队列中拿出，不参加下一次的用户请求的分配, 直到其恢复正常。\n\n最快模式（Fastest）：传递连接给那些响应最快的服务器。当其中某个服务器发生第二到第7 层的故障，BIG-IP 就把其从服务器队列中拿出，不参加下一次的用户请求的分配，直到其恢复正常。\n\n观察模式（Observed）：连接数目和响应时间以这两项的最佳平衡为依据为新的请求选择服务器。当其中某个服务器发生第二到第7 层的故障，BIG-IP就把其从服务器队列中拿出，不参加下一次的用户请求的分配，直到其恢复正常。\n\n预测模式（Predictive）：BIG-IP利用收集到的服务器当前的性能指标，进行预测分析，选择一台服务器在下一个时间片内，其性能将达到最佳的服务器相应用户的请求。(被BIG-IP 进行检测)\n\n动态性能分配(Dynamic Ratio-APM)：BIG-IP 收集到的应用程序和应用服务器的各项性能参数，动态调整流量分配。\n\n动态服务器补充(Dynamic Server Act.)：当主服务器群中因故障导致数量减少时，动态地将备份服务器补充至主服务器群。\n\n服务质量(QoS）：按不同的优先级对数据流进行分配。\n\n服务类型(ToS)：按不同的服务类型（在Type of Field中标识）负载均衡对数据流进行分配。\n\n规则模式：针对不同的数据流设置导向规则，用户可自行。\n")])])]),e("p",[s._v("以上，就是目前实现负载均衡的主流算法。不同的负载均衡服务器会选择不同的算法。就像电影院和火车站可能会选用不同的引导策略一样。火车站可能会把行李少的旅客分配到一个专门的入口，可能给即将发车的旅客分派到特快入口，手持可扫描车票的用户单独分配到特殊入口等。")]),s._v(" "),e("h2",{attrs:{id:"nginx负载均衡"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nginx负载均衡"}},[s._v("#")]),s._v(" Nginx负载均衡")]),s._v(" "),e("h3",{attrs:{id:"反向代理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#反向代理"}},[s._v("#")]),s._v(" 反向代理")]),s._v(" "),e("blockquote",[e("p",[s._v("就是说有一个代理服务器(协调服务器),负责转发用户的请求到实际的服务器上去,这一过程就称之为反向代理")])]),s._v(" "),e("h3",{attrs:{id:"轮询-默认"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#轮询-默认"}},[s._v("#")]),s._v(" 轮询(默认)")]),s._v(" "),e("blockquote",[e("p",[s._v("每个请求逐一分配到不同的后端服务器,如果某一台down掉,能自动剔除")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("upstream backserver {\n    server 192.168.0.14;\n    server 192.168.0.15;\n}\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("blockquote",[e("p",[s._v("其中每个ip均为被代理的服务器")])]),s._v(" "),e("h3",{attrs:{id:"weight"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#weight"}},[s._v("#")]),s._v(" weight")]),s._v(" "),e("blockquote",[e("p",[s._v("指定轮训几率,weight和访问比率成正比,用于后端服务器性能不均的情况")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("upstream backserver {\n    server 192.168.0.14 weight=3;\n    server 192.168.0.15 weight=7;\n}\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[s._v("权重越高，在被访问的概率越大，如上例，分别是30%，70%。")]),s._v(" "),e("h3",{attrs:{id:"信息丢失问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#信息丢失问题"}},[s._v("#")]),s._v(" 信息丢失问题")]),s._v(" "),e("p",[s._v("上述方式均存在一个问题,就是如果用户第一次请求其中一台机器,信息记录在那台服务器上,但是第二次请求到了另一台服务器上了,这样信息就会丢失掉了.")]),s._v(" "),e("p",[s._v("有一种解决方法,就是设置ip_hash,如果用户已经访问了某个服务器,则当用户再次访问时,会通过ip_hash自动定位到上次访问的服务器上")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("upstream backserver {\n    ip_hash;\n    server 192.168.0.14:88;\n    server 192.168.0.15:80;\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("h3",{attrs:{id:"fair"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#fair"}},[s._v("#")]),s._v(" fair")]),s._v(" "),e("p",[s._v("按后端服务器的响应时间来分配请求，响应时间短的优先分配。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("upstream backserver {\n    server server1;\n    server server2;\n    fair;\n}\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("h3",{attrs:{id:"url-hash（第三方）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#url-hash（第三方）"}},[s._v("#")]),s._v(" url_hash（第三方）")]),s._v(" "),e("p",[s._v("按访问url的hash结果来分配请求，使每个url定向到同一个后端服务器，后端服务器为缓存时比较有效。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("upstream backserver {\n    server squid1:3128;\n    server squid2:3128;\n    hash $request_uri;\n    hash_method crc32;\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("h3",{attrs:{id:"每台设备的状态设置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#每台设备的状态设置"}},[s._v("#")]),s._v(" 每台设备的状态设置")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("down 表示单前的server暂时不参与负载")])]),s._v(" "),e("li",[e("p",[s._v("weight 默认为1.weight越大，负载的权重就越大。")])]),s._v(" "),e("li",[e("p",[s._v("max_fails：允许请求失败的次数默认为1.当超过最大次数时，返回 proxy_next_upstream模块定义的错误")])]),s._v(" "),e("li",[e("p",[s._v("fail_timeout:max_fails次失败后，暂停的时间。")])]),s._v(" "),e("li",[e("p",[s._v("backup： 其它所有的非backup机器down或者忙的时候，请求backup机器。所以这台机器压力会最轻。")])])]),s._v(" "),e("h3",{attrs:{id:"实例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#实例"}},[s._v("#")]),s._v(" 实例")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("#user  nobody;\nworker_processes  4;\nevents {\n    # 最大并发数\n    worker_connections  1024;\n}\nhttp{\n    # 待选服务器列表\n    upstream myproject{\n        # ip_hash指令，将同一用户引入同一服务器。\n        ip_hash;\n        server 125.219.42.4 fail_timeout=60s;\n        server 172.31.2.183;\n        }\n\n    server{\n                # 监听端口\n                listen 80;\n                # 根目录下\n                location / {\n                    # 选择哪个服务器列表\n                    proxy_pass http://myproject;\n                }\n\n            }\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br")])]),e("blockquote",[e("p",[s._v("可以发现,server配置里通过location自动定位到对应的服务器上")])])])}),[],!1,null,null,null);a.default=r.exports}}]);