(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{230:function(t,a,e){"use strict";e.r(a);var v=e(0),r=Object(v.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#用途"}},[t._v("用途")])]),e("li",[e("a",{attrs:{href:"#接口规范"}},[t._v("接口规范")])]),e("li",[e("a",{attrs:{href:"#基本实现"}},[t._v("基本实现")]),e("ul",[e("li",[e("a",{attrs:{href:"#选用存储数据结构来实现pq"}},[t._v("选用存储数据结构来实现PQ")])]),e("li",[e("a",{attrs:{href:"#完全二叉堆"}},[t._v("完全二叉堆")])]),e("li",[e("a",{attrs:{href:"#结构性"}},[t._v("结构性")])]),e("li",[e("a",{attrs:{href:"#堆序性"}},[t._v("堆序性")])]),e("li",[e("a",{attrs:{href:"#上滤实现插入"}},[t._v("上滤实现插入")])])])])])]),e("p"),t._v(" "),e("h1",{attrs:{id:"优先队列"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#优先队列"}},[t._v("#")]),t._v(" 优先队列")]),t._v(" "),e("h2",{attrs:{id:"用途"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#用途"}},[t._v("#")]),t._v(" 用途")]),t._v(" "),e("ul",[e("li",[t._v("Huffman编码")]),t._v(" "),e("li",[t._v("基于扫描线的算法,需要取出最临近的事件完成处理")])]),t._v(" "),e("h2",{attrs:{id:"接口规范"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#接口规范"}},[t._v("#")]),t._v(" 接口规范")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("template <typename T> struct PQ{ //priority queue\n\tvirtual void insert(T) = 0; //按照优先级次序插入词条(数据项)\n\tvirtual T getMax() = 0; // 取出优先级最高的词条\n\tvirtual T delMax() = 0; // 删除优先级最高的词条\n};//与其说PQ是数据结构,不如说是ADT\n")])])]),e("h2",{attrs:{id:"基本实现"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基本实现"}},[t._v("#")]),t._v(" 基本实现")]),t._v(" "),e("h3",{attrs:{id:"选用存储数据结构来实现pq"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#选用存储数据结构来实现pq"}},[t._v("#")]),t._v(" 选用存储数据结构来实现PQ")]),t._v(" "),e("blockquote",[e("p",[t._v("向量"),e("code",[t._v("vector")])]),t._v(" "),e("blockquote",[e("p",[t._v("否,插入与获取最大值均O(n)")])])]),t._v(" "),e("blockquote",[e("p",[t._v("有序向量"),e("code",[t._v("sorted vector")])]),t._v(" "),e("blockquote",[e("p",[t._v("否,插入需要O(n)")])])]),t._v(" "),e("blockquote",[e("p",[t._v("列表"),e("code",[t._v("List")])]),t._v(" "),e("blockquote",[e("p",[t._v("基本同向量")])])]),t._v(" "),e("p",[t._v("       我们为了实现这个数据结构,只需要查找"),e("code",[t._v("极值元")]),t._v(",不必维护所有元素之间的"),e("code",[t._v("全序")]),t._v("关系,"),e("code",[t._v("偏序")]),t._v("足矣.")]),t._v(" "),e("blockquote",[e("p",[t._v("全序,所有元素之间的关系,偏序,两两之间\n故不需要使用BBST或者AVL之类的高级数据结构")])]),t._v(" "),e("h3",{attrs:{id:"完全二叉堆"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#完全二叉堆"}},[t._v("#")]),t._v(" 完全二叉堆")]),t._v(" "),e("p",[t._v("       使用"),e("code",[t._v("Vector")]),t._v("和"),e("code",[t._v("Tree")]),t._v("的结合.即"),e("code",[t._v("Complete Binary Tree")]),t._v(",平衡因子处处非负的"),e("code",[t._v("AVL")]),t._v(".")]),t._v(" "),e("ul",[e("li",[t._v("平衡因子为0,则左子树为满树")]),t._v(" "),e("li",[t._v("平衡因子为1,右子树为满树")])]),t._v(" "),e("h3",{attrs:{id:"结构性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#结构性"}},[t._v("#")]),t._v(" 结构性")]),t._v(" "),e("ul",[e("li",[t._v("定义父子关系")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("#define Parent(i) ((i-1)>>1)\n#define LChild(i) (1+((i)<<1))//奇数\n#define RChild(i) ((1+(i))<<1)//偶数\n")])])]),e("ul",[e("li",[t._v("定义模板类")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("template <typename T> class PQ_ComplHeap : public PQ<T>,public Vector<T>{\nprotected: \n\tRank percolateDown(Rank n,Rank i);//下滤\n\tRank percolateUp(Rank i);//上滤\n\tvoid heapify(Rank n);//Floyd建堆算法\npublic:\n\tPQ_ComplHeap(T* A,Rank n)//批量构造\n\t\t{copyFrom(A,0,n);heapify(n);}\n\tvoid insert(T);//按照比较器确定的优先级次序,插入词条\n\tT getMax(){return _elem[0];}//读取优先级最高的词条\n\tT delMax();//删除优先级最高的词条\n}\n")])])]),e("h3",{attrs:{id:"堆序性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#堆序性"}},[t._v("#")]),t._v(" 堆序性")]),t._v(" "),e("p",[t._v("       数值上,只要0<i,必满足: "),e("code",[t._v("H[i] <= H[Parent(i)]")])]),t._v(" "),e("p",[t._v("       故H[0]必是全局最大元")]),t._v(" "),e("h3",{attrs:{id:"上滤实现插入"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#上滤实现插入"}},[t._v("#")]),t._v(" 上滤实现插入")]),t._v(" "),e("p",[t._v("       我们可以很简单的将元素直接插在最末尾,但是可能会出现破坏堆序性的问题,所以我们使用"),e("code",[t._v("上滤")]),t._v("来解决这个问题,即"),e("code",[t._v("不断地向上攀,只要比父节点大")]),t._v(".")])])}),[],!1,null,null,null);a.default=r.exports}}]);