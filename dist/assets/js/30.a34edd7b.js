(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{230:function(t,n,a){"use strict";a.r(n);var _=a(0),e=Object(_.a)({},(function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#安装finalik"}},[t._v("安装FinalIK")])])])]),a("p"),t._v(" "),a("hr"),t._v(" "),a("h1",{attrs:{id:"final-ik"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#final-ik"}},[t._v("#")]),t._v(" Final IK")]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("       就上节我们已经知道了如何在没有VR设备的条件下进行VR的编程,那么本节就一起来试着将人物模型与VRTK绑定起来实现"),a("code",[t._v("可控人物")]),t._v(",而非空气中漂浮的设备.")]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"安装finalik"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装finalik"}},[t._v("#")]),t._v(" 安装FinalIK")]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("       这里我提供一个FinalIK插件和人物模型(来自于siki学院老师在b站发布的教学视频,不过老师是在SteamVR上插入的,这里稍微拓展到VRTK上)")]),t._v(" "),a("p",[t._v("链接：https://pan.baidu.com/s/1_nZGv2fR-Camn9zEs-S3bw")]),t._v(" "),a("p",[t._v("提取码：w5ho")]),t._v(" "),a("p",[t._v("       当我们导入后项目中会多这两个文件夹:")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://cdn.be-sunshine.cn/ADD_Comp.png",alt:""}})]),t._v(" "),a("p",[t._v("       展开找到下图所指的文件夹,其中"),a("code",[t._v("kachujin_g_rosales_Fing")]),t._v("就是我们需要绑定的人物模型")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://cdn.be-sunshine.cn/mode.png",alt:""}})]),t._v(" "),a("p",[t._v("       将它拖入到场景中.")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://cdn.be-sunshine.cn/mode2.png",alt:""}})]),t._v(" "),a("p",[t._v("       然后将其做成prefab(预制体),以便添加组件(拖下去就可以了):")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://cdn.be-sunshine.cn/prefab.png",alt:""}})]),t._v(" "),a("p",[t._v("       在prefab中添加组件VRIK")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://cdn.be-sunshine.cn/VRIK.png",alt:""}})]),t._v(" "),a("p",[t._v("       VRIK是FinalIK下的一个子组件,专门用于VR的,VRIK会自动查找到所有的骨骼依赖,为什么可以实现这个功能呢?注意,这有一点是前置条件 "),a("code",[t._v("人物模型必须是骨骼结构,且其Inspector下的Rig-Animation Type必须是Humanoid类型的")]),t._v(".这两个前置条件达成VRIK就可以自己寻找到所有的骨骼结构了(比如腿,胳膊,手)")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://cdn.be-sunshine.cn/VRIKREF.png",alt:""}})]),t._v(" "),a("p",[t._v("       但是还有几个骨骼部分是需要自己添加的,因为这几个骨骼是依赖于VR的SDK的,其分别是"),a("code",[t._v("脖子")]),t._v(","),a("code",[t._v("左手")]),t._v(","),a("code",[t._v("右手")]),t._v(".常见的VR设备只需要添加这三个即可,在"),a("code",[t._v("Solver")]),t._v("下.其中"),a("code",[t._v("Spine")]),t._v("是头部\n"),a("img",{attrs:{src:"http://cdn.be-sunshine.cn/VRIKSOLVER.png",alt:""}})]),t._v(" "),a("p",[t._v("       那么这三个组件要在哪里呢?我们现在示范一下无设备下的VRSimulator,VRSimulator在默认场景的VRTK_SDKManager下,展开以后可以看到VRSimulator_CameraRig下有Neck,LeftHand,RightHand.这三个GameObject就是我们所需要的.首先我们需要在Neck下新建一个空的GameObject,同样命名为Neck即可,之后我们将它们分别拖入到对应的位置上.")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://cdn.be-sunshine.cn/VRTK2.png",alt:""}})]),t._v(" "),a("p",[t._v("       大功告成,进入游戏就可以看到自己能够控制人物了,头转动她也会转,手柄动了她也会动!")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://cdn.be-sunshine.cn/Emm.png",alt:""}})]),t._v(" "),a("p",[t._v("       Emmm...有丶惊悚啊...因为我们用的方式是鼠标键盘,所以实际上任何部位都可以无限拉伸,就导致了这种情况啦...")]),t._v(" "),a("p",[t._v("       那么问题来了,"),a("code",[t._v("如何在使用物理手柄的时候绑定VRIK呢?")])]),t._v(" "),a("p",[t._v("       其实道理一样,VRTK_SDKManager下有许多SDK,每个SDK下都有对应的Neck,LeftHand和RightHand,如法炮制即可.")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://cdn.be-sunshine.cn/VRTK_SDK.png",alt:""}})]),t._v(" "),a("p",[t._v("       至于如何实现切换设备的同时也可以让VRIK可以适配各种设备,其实有两种方法,一种方法是用代码切换,另一种比较暴力的方法就是在每个SDK下面放一个模型,并且配置好模型对应的脖子和手的GameObject依赖,当VRTK_SDK自动切换SDK时就会自动激活信的模型,并且隐藏旧的模型.")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://cdn.be-sunshine.cn/VRTK_SDK2.png",alt:""}})])])}),[],!1,null,null,null);n.default=e.exports}}]);