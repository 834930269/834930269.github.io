(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{533:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#频域性质"}},[t._v("频域性质")])]),a("li",[a("a",{attrs:{href:"#可分离性"}},[t._v("可分离性")])]),a("li",[a("a",{attrs:{href:"#旋转性质"}},[t._v("旋转性质")])]),a("li",[a("a",{attrs:{href:"#对灰度图像fft"}},[t._v("对灰度图像fft")])])])]),a("p"),t._v(" "),a("h1",{attrs:{id:"频域"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#频域"}},[t._v("#")]),t._v(" 频域")]),t._v(" "),a("h2",{attrs:{id:"频域性质"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#频域性质"}},[t._v("#")]),t._v(" 频域性质")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://cdn.be-sunshine.cn/1.png",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"可分离性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#可分离性"}},[t._v("#")]),t._v(" 可分离性")]),t._v(" "),a("blockquote",[a("p",[t._v("对图像f(x,y)每一行计算其一维傅里叶变换得到F(u,y)\n对图像F(u,y)在进行一维离散傅里叶变换")])]),t._v(" "),a("h2",{attrs:{id:"旋转性质"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#旋转性质"}},[t._v("#")]),t._v(" 旋转性质")]),t._v(" "),a("blockquote",[a("p",[t._v("令 x=rcosθ, y=rsinθ, u=ωcosφ, v=ωsinφ\nf(r,θ+θ0) <=> F(ω,φ+θ0)")])]),t._v(" "),a("blockquote",[a("p",[t._v("对一维二维都一样")])]),t._v(" "),a("h2",{attrs:{id:"对灰度图像fft"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#对灰度图像fft"}},[t._v("#")]),t._v(" 对灰度图像fft")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("f "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" imread"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a.tif'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nF"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("fft2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nS"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("abs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("F"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 傅里叶频谱")]),t._v("\nimshow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("S"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("blockquote",[a("p",[t._v("将低频放在中心")])]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("Fc "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" fftshitf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("F"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nimshow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("abs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Fc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("blockquote",[a("p",[t._v("结果同之前输入图像乘上 (-1)^(x+y)")])]),t._v(" "),a("blockquote",[a("p",[t._v("因为其亮度范围差距过大,所以大部分地方会很暗\n直接对频域图像使用对数变换压缩亮度范围")])]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("S2"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("log"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("abs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Fc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nimshow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("S2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("blockquote",[a("p",[t._v("反傅里叶")])]),t._v(" "),a("p",[a("strong",[t._v("f=ifft2(F)")])]),t._v(" "),a("blockquote",[a("p",[t._v("实际操作中,因为ifft2通常具有舍入误差引起的非常小的虚部.所以需要取一下实部")])]),t._v(" "),a("p",[a("strong",[t._v("f=real(ifft2(F))")])]),t._v(" "),a("blockquote",[a("p",[t._v("在matlab中两个矩阵元素间乘积为 "),a("em",[a("em",[t._v("G=H .")]),t._v(" F")]),t._v("*")])])])}),[],!1,null,null,null);s.default=e.exports}}]);