(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{514:function(a,t,e){"use strict";e.r(t);var s=e(1),r=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#用途"}},[a._v("用途")])]),e("li",[e("a",{attrs:{href:"#接口规范"}},[a._v("接口规范")])]),e("li",[e("a",{attrs:{href:"#基本实现"}},[a._v("基本实现")]),e("ul",[e("li",[e("a",{attrs:{href:"#选用存储数据结构来实现pq"}},[a._v("选用存储数据结构来实现PQ")])]),e("li",[e("a",{attrs:{href:"#完全二叉堆"}},[a._v("完全二叉堆")])]),e("li",[e("a",{attrs:{href:"#结构性"}},[a._v("结构性")])]),e("li",[e("a",{attrs:{href:"#堆序性"}},[a._v("堆序性")])]),e("li",[e("a",{attrs:{href:"#上滤实现插入"}},[a._v("上滤实现插入")])])])])])]),e("p"),a._v(" "),e("h1",{attrs:{id:"优先队列"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#优先队列"}},[a._v("#")]),a._v(" 优先队列")]),a._v(" "),e("h2",{attrs:{id:"用途"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#用途"}},[a._v("#")]),a._v(" 用途")]),a._v(" "),e("ul",[e("li",[a._v("Huffman编码")]),a._v(" "),e("li",[a._v("基于扫描线的算法,需要取出最临近的事件完成处理")])]),a._v(" "),e("h2",{attrs:{id:"接口规范"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#接口规范"}},[a._v("#")]),a._v(" 接口规范")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("template <typename T> struct PQ{ //priority queue\n\tvirtual void insert(T) = 0; //按照优先级次序插入词条(数据项)\n\tvirtual T getMax() = 0; // 取出优先级最高的词条\n\tvirtual T delMax() = 0; // 删除优先级最高的词条\n};//与其说PQ是数据结构,不如说是ADT\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br")])]),e("h2",{attrs:{id:"基本实现"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基本实现"}},[a._v("#")]),a._v(" 基本实现")]),a._v(" "),e("h3",{attrs:{id:"选用存储数据结构来实现pq"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#选用存储数据结构来实现pq"}},[a._v("#")]),a._v(" 选用存储数据结构来实现PQ")]),a._v(" "),e("blockquote",[e("p",[a._v("向量"),e("code",[a._v("vector")])]),a._v(" "),e("blockquote",[e("p",[a._v("否,插入与获取最大值均O(n)")])])]),a._v(" "),e("blockquote",[e("p",[a._v("有序向量"),e("code",[a._v("sorted vector")])]),a._v(" "),e("blockquote",[e("p",[a._v("否,插入需要O(n)")])])]),a._v(" "),e("blockquote",[e("p",[a._v("列表"),e("code",[a._v("List")])]),a._v(" "),e("blockquote",[e("p",[a._v("基本同向量")])])]),a._v(" "),e("p",[a._v("       我们为了实现这个数据结构,只需要查找"),e("code",[a._v("极值元")]),a._v(",不必维护所有元素之间的"),e("code",[a._v("全序")]),a._v("关系,"),e("code",[a._v("偏序")]),a._v("足矣.")]),a._v(" "),e("blockquote",[e("p",[a._v("全序,所有元素之间的关系,偏序,两两之间\n故不需要使用BBST或者AVL之类的高级数据结构")])]),a._v(" "),e("h3",{attrs:{id:"完全二叉堆"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#完全二叉堆"}},[a._v("#")]),a._v(" 完全二叉堆")]),a._v(" "),e("p",[a._v("       使用"),e("code",[a._v("Vector")]),a._v("和"),e("code",[a._v("Tree")]),a._v("的结合.即"),e("code",[a._v("Complete Binary Tree")]),a._v(",平衡因子处处非负的"),e("code",[a._v("AVL")]),a._v(".")]),a._v(" "),e("ul",[e("li",[a._v("平衡因子为0,则左子树为满树")]),a._v(" "),e("li",[a._v("平衡因子为1,右子树为满树")])]),a._v(" "),e("h3",{attrs:{id:"结构性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#结构性"}},[a._v("#")]),a._v(" 结构性")]),a._v(" "),e("ul",[e("li",[a._v("定义父子关系")])]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("#define Parent(i) ((i-1)>>1)\n#define LChild(i) (1+((i)<<1))//奇数\n#define RChild(i) ((1+(i))<<1)//偶数\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br")])]),e("ul",[e("li",[a._v("定义模板类")])]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("template <typename T> class PQ_ComplHeap : public PQ<T>,public Vector<T>{\nprotected: \n\tRank percolateDown(Rank n,Rank i);//下滤\n\tRank percolateUp(Rank i);//上滤\n\tvoid heapify(Rank n);//Floyd建堆算法\npublic:\n\tPQ_ComplHeap(T* A,Rank n)//批量构造\n\t\t{copyFrom(A,0,n);heapify(n);}\n\tvoid insert(T);//按照比较器确定的优先级次序,插入词条\n\tT getMax(){return _elem[0];}//读取优先级最高的词条\n\tT delMax();//删除优先级最高的词条\n}\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br"),e("span",{staticClass:"line-number"},[a._v("9")]),e("br"),e("span",{staticClass:"line-number"},[a._v("10")]),e("br"),e("span",{staticClass:"line-number"},[a._v("11")]),e("br"),e("span",{staticClass:"line-number"},[a._v("12")]),e("br")])]),e("h3",{attrs:{id:"堆序性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#堆序性"}},[a._v("#")]),a._v(" 堆序性")]),a._v(" "),e("p",[a._v("       数值上,只要0<i,必满足: "),e("code",[a._v("H[i] <= H[Parent(i)]")])]),a._v(" "),e("p",[a._v("       故H[0]必是全局最大元")]),a._v(" "),e("h3",{attrs:{id:"上滤实现插入"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#上滤实现插入"}},[a._v("#")]),a._v(" 上滤实现插入")]),a._v(" "),e("p",[a._v("       我们可以很简单的将元素直接插在最末尾,但是可能会出现破坏堆序性的问题,所以我们使用"),e("code",[a._v("上滤")]),a._v("来解决这个问题,即"),e("code",[a._v("不断地向上攀,只要比父节点大")]),a._v(".")])])}),[],!1,null,null,null);t.default=r.exports}}]);