(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{377:function(t,s,a){"use strict";a.r(s);var r=a(26),e=Object(r.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"数据结构之-树"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据结构之-树"}},[t._v("#")]),t._v(" 数据结构之“树”")]),t._v(" "),a("h2",{attrs:{id:"什么是树"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是树"}},[t._v("#")]),t._v(" 什么是树")]),t._v(" "),a("blockquote",[a("p",[t._v("一种分层数据的抽象模型，前端工作中常见的树包括：DOM, 树, 级联选择, 树形控件....")])]),t._v(" "),a("ul",[a("li",[t._v("JS 中没有树，但可以用Object 和 Array 构建树")]),t._v(" "),a("li",[t._v("树的常用操作： 深度/广度优先遍历、先中后序遍历")])]),t._v(" "),a("h2",{attrs:{id:"什么是深度优先遍历"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是深度优先遍历"}},[t._v("#")]),t._v(" 什么是深度优先遍历")]),t._v(" "),a("blockquote",[a("p",[t._v("深度优先遍历：尽可能深的搜索树的分支")])]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"/img/shendu.jpg",width:"200"}})]),t._v(" "),a("ul",[a("li",[t._v("访问根节点")]),t._v(" "),a("li",[t._v("对跟节点的 children 挨个进行深度优先遍历")])]),t._v(" "),a("iframe",{attrs:{src:"https://tool.lu/coderunner/embed/9UH.html",width:"650",height:"550",frameborder:"0",mozallowfullscreen:"",webkitallowfullscreen:"",allowfullscreen:""}}),t._v(" "),a("h2",{attrs:{id:"什么是广度优先遍历"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是广度优先遍历"}},[t._v("#")]),t._v(" 什么是广度优先遍历")]),t._v(" "),a("blockquote",[a("p",[t._v("广度优先遍历：先访问离根节点最近的节点")])]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"/img/guangdu.png",width:"200"}})]),t._v(" "),a("ul",[a("li",[t._v("新建一个队列，把跟节点入队")]),t._v(" "),a("li",[t._v("把对头出对并访问")]),t._v(" "),a("li",[t._v("把对头的 children 挨个入队")]),t._v(" "),a("li",[t._v("重复第二、三步，直到队列为空")])]),t._v(" "),a("iframe",{attrs:{src:"https://tool.lu/coderunner/embed/9UI.html",width:"650",height:"550",frameborder:"0",mozallowfullscreen:"",webkitallowfullscreen:"",allowfullscreen:""}}),t._v(" "),a("h2",{attrs:{id:"什么是二叉树"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是二叉树"}},[t._v("#")]),t._v(" 什么是二叉树")]),t._v(" "),a("blockquote",[a("p",[t._v("二叉树是一种特殊的树，它的子节点个数不超过两个, 在 JS 中通常用 Object 来模拟二叉树")])]),t._v(" "),a("ul",[a("li",[t._v("二叉树的两个节点分别叫做做节点和右节点")]),t._v(" "),a("li",[t._v("二叉搜索树（BST）：二叉树的一种，它只允许在左侧节点存储比父节点小的值，在右侧节点存储比父节点大或相等的值。")])]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"/img/tree.webp"}})]),t._v(" "),a("h2",{attrs:{id:"二叉树的示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二叉树的示例"}},[t._v("#")]),t._v(" 二叉树的示例")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" binaryTree "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    val"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    left"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      val"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      left"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      right"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    right"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      val"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      left"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      right"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br")])]),t._v(" "),a("comment-comment")],1)}),[],!1,null,null,null);s.default=e.exports}}]);