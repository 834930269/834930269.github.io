(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{567:function(s,t,a){"use strict";a.r(t);var n=a(0),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#_2"}},[s._v("2")])]),a("li",[a("a",{attrs:{href:"#解题思路"}},[s._v("解题思路")])]),a("li",[a("a",{attrs:{href:"#ac代码"}},[s._v("AC代码")])])])]),a("p"),s._v(" "),a("h1",{attrs:{id:"leetcode-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#leetcode-2"}},[s._v("#")]),s._v(" leetcode 2")]),s._v(" "),a("h2",{attrs:{id:"_2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2"}},[s._v("#")]),s._v(" 2")]),s._v(" "),a("blockquote",[a("p",[s._v("Add Two Numbers")])]),s._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[s._v("题目")]),s._v(" "),a("p",[s._v("You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.")]),s._v(" "),a("p",[s._v("You may assume the two numbers do not contain any leading zero, except the number 0 itself.")])]),s._v(" "),a("h2",{attrs:{id:"解题思路"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解题思路"}},[s._v("#")]),s._v(" 解题思路")]),s._v(" "),a("blockquote",[a("p",[s._v("考虑进位和最后一位进位即可\n这道题主要考C++的链表操作,之前一直wrong在链表的连接操作")])]),s._v(" "),a("p",[s._v("主要贴一下别人最精简的代码,还有自己没有丝毫鲁棒性的代码")]),s._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[s._v("精简代码")]),s._v(" "),a("div",{staticClass:"language-cpp line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token macro property"}},[s._v("#"),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("include")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("<bits/stdc++.h>")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("using")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("namespace")]),s._v(" std"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ListNode")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" val"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    ListNode "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("next"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ListNode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("val")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("NULL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ListNode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\nListNode"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("addTwoNumbers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ListNode"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" l1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" ListNode"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" l2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    ListNode head"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("tail "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("head"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" carry "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("l1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" l2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" carry"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" l1val "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" l1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v(" l1"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),s._v("val "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" l2val "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" l2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v(" l2"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),s._v("val "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" sum "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" l1val "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" l2val "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" carry"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        carry "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" sum"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        ListNode"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" node "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ListNode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("sum "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        tail"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),s._v("next "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        tail "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("l1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n            l1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" l1"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),s._v("next"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n         "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("l2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n            l2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" l2"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),s._v("next"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" head"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("next"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    ListNode"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" l1"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ListNode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    l1"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),s._v("next "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ListNode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    l1"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),s._v("next"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),s._v("next"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ListNode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    ListNode"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" l2"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ListNode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    l2"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),s._v("next "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ListNode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    l2"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),s._v("next"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),s._v("next"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ListNode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    cout"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"44"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v("endl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    ListNode"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" l3 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("addTwoNumbers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("l1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("l2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br")])])]),s._v(" "),a("h2",{attrs:{id:"ac代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ac代码"}},[s._v("#")]),s._v(" AC代码")]),s._v(" "),a("div",{staticClass:"language-cpp line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n * Definition for singly-linked list.\n * struct ListNode {\n *     int val;\n *     ListNode *next;\n *     ListNode(int x) : val(x), next(NULL) {}\n * };\n */")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Solution")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n    ListNode"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("addTwoNumbers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ListNode"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" l1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" ListNode"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" l2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" temp "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t    ListNode l3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("head1"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("l1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("head2"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("l2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("head3"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("l3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" val "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" head1"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),s._v("val"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("head2"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),s._v("val"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("temp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t        temp"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("val"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t        ListNode"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" l4"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ListNode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("val"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t        head3"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),s._v("next "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" l4"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t        head3"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("l4"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t        head1"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("head1"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),s._v("next"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t        head2"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("head2"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),s._v("next"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("head1"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("NULL")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" head2"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("NULL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t\n\t    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("head1"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("NULL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" val "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" head1"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),s._v("val"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("temp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t        temp"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("val"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t        ListNode"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" l4"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ListNode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("val"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t        head3"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),s._v("next "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" l4"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t        head3"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("l4"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t        head1"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("head1"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),s._v("next"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\t\n\t    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("head2"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("NULL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" val "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" head2"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),s._v("val"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("temp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t        temp"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("val"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t        ListNode"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" l4"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ListNode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("val"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t        head3"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),s._v("next "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" l4"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t        head3"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("l4"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t        head2"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("head2"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),s._v("next"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\t    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("temp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t        ListNode"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" l4"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ListNode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("temp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t        head3"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),s._v("next "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" l4"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\t    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" l3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("next"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);