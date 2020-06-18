(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{182:function(t,o,e){},194:function(t,o,e){"use strict";var n=e(182);e.n(n).a},195:function(t,o,e){"use strict";e.r(o);var n=e(14),s={data:function(){return{count:0}},methods:{increment:function(){this.count++},decrement:function(){this.count--}}},a=Object(n.a)(s,(function(){var t=this.$createElement,o=this._self._c||t;return o("div",{staticClass:"flex items-center"},[o("div",[o("button",{staticClass:"text-5xl w-16 bg-green-900 hover:bg-green-800 text-white rounded px-4 py-2",on:{click:this.decrement}},[this._v("-")])]),o("span",{staticClass:"text-5xl w-32 text-center ml-8"},[this._v(this._s(this.count))]),o("button",{staticClass:"text-5xl w-16 bg-green-900 hover:bg-green-800 text-white rounded px-4 py-2 ml-8",on:{click:this.increment}},[this._v("+")])])}),[],!1,null,null,null).exports,c={data:function(){return{show:!0}}},l=(e(194),Object(n.a)(c,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",[e("button",{staticClass:"bg-green-900 hover:bg-green-800 text-white px-4 py-2 rounded",on:{click:function(o){t.show=!t.show}}},[t._v("\n    Toggle\n  ")]),e("transition",{attrs:{name:"fade"}},[t.show?e("p",[t._v("hello")]):t._e()])],1)}),[],!1,null,"abdf8a92",null).exports),r=e(0);function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}r.a.config.optionMergeStrategies;var p={TestComponent:a,TransitionComponent:l,VueRemarkRoot:{name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}},F=function(t){var o=t.options.components=t.options.components||{},e=t.options.computed=t.options.computed||{};Object.keys(p).forEach((function(t){"object"===i(p[t])&&"function"==typeof p[t].render?o[t]=p[t]:e[t]=function(){return p[t]}}))},v=r.a.config.optionMergeStrategies,_="__vueRemarkFrontMatter",y={excerpt:"An example markdown page that has Vue Components inside of it!",title:"Vue Components in Markdown"};var D=function(t){t.options[_]&&(t.options[_]=y),r.a.util.defineReactive(t.options,_,y),t.options.computed=v.computed({$frontmatter:function(){return t.options[_]}},t.options.computed)},u=Object(n.a)({},(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("VueRemarkRoot",[e("p",[t._v("Below is a Vue Component from "),e("code",{pre:!0},[t._v("~/components/CounterComponent.vue")]),t._v(":")]),e("test-component"),e("hr"),e("p",[t._v("Here is another component from "),e("code",{pre:!0},[t._v("~/components/TransitionComponent.vue")]),t._v(":")]),e("transition-component"),e("hr"),e("p",[t._v("The ability to use Vue Components in Markdown was added in Gridsome v0.7 with the "),e("a",{attrs:{href:"https://gridsome.org/plugins/@gridsome/vue-remark",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("vue-remark")]),t._v(" plugin.")]),e("pre",{staticClass:"shiki",staticStyle:{"background-color":"#292D3E"}},[e("code",[e("span",{staticStyle:{color:"#89DDFF"}},[t._v("<")]),e("span",{staticStyle:{color:"#F07178"}},[t._v("template")]),e("span",{staticStyle:{color:"#89DDFF"}},[t._v(">")]),t._v("\n"),e("span",{staticStyle:{color:"#89DDFF"}},[t._v("  <")]),e("span",{staticStyle:{color:"#F07178"}},[t._v("Layout")]),e("span",{staticStyle:{color:"#89DDFF"}},[t._v(">")]),t._v("\n"),e("span",{staticStyle:{color:"#89DDFF"}},[t._v("    <")]),e("span",{staticStyle:{color:"#F07178"}},[t._v("div")]),e("span",{staticStyle:{color:"#89DDFF"}},[t._v(" ")]),e("span",{staticStyle:{color:"#C792EA"}},[t._v("class=")]),e("span",{staticStyle:{color:"#89DDFF"}},[t._v('"')]),e("span",{staticStyle:{color:"#C3E88D"}},[t._v("container-inner mx-auto my-16")]),e("span",{staticStyle:{color:"#89DDFF"}},[t._v('"')]),e("span",{staticStyle:{color:"#89DDFF"}},[t._v(">")]),t._v("\n"),e("span",{staticStyle:{color:"#89DDFF"}},[t._v("      <")]),e("span",{staticStyle:{color:"#F07178"}},[t._v("h1")]),e("span",{staticStyle:{color:"#89DDFF"}},[t._v(" ")]),e("span",{staticStyle:{color:"#C792EA"}},[t._v("class=")]),e("span",{staticStyle:{color:"#89DDFF"}},[t._v('"')]),e("span",{staticStyle:{color:"#C3E88D"}},[t._v("text-4xl font-bold leading-tight")]),e("span",{staticStyle:{color:"#89DDFF"}},[t._v('"')]),e("span",{staticStyle:{color:"#89DDFF"}},[t._v(">{{ $page.post.")]),e("span",{staticStyle:{color:"#A6ACCD"}},[t._v("title")]),e("span",{staticStyle:{color:"#89DDFF"}},[t._v(" }}</")]),e("span",{staticStyle:{color:"#F07178"}},[t._v("h1")]),e("span",{staticStyle:{color:"#89DDFF"}},[t._v(">")]),t._v("\n"),e("span",{staticStyle:{color:"#89DDFF"}},[t._v("      <")]),e("span",{staticStyle:{color:"#F07178"}},[t._v("div")]),e("span",{staticStyle:{color:"#89DDFF"}},[t._v(" ")]),e("span",{staticStyle:{color:"#C792EA"}},[t._v("class=")]),e("span",{staticStyle:{color:"#89DDFF"}},[t._v('"')]),e("span",{staticStyle:{color:"#C3E88D"}},[t._v("text-xl text-gray-600 mb-8")]),e("span",{staticStyle:{color:"#89DDFF"}},[t._v('"')]),e("span",{staticStyle:{color:"#89DDFF"}},[t._v(">{{ $page.post.")]),e("span",{staticStyle:{color:"#A6ACCD"}},[t._v("date")]),e("span",{staticStyle:{color:"#89DDFF"}},[t._v(" }}</")]),e("span",{staticStyle:{color:"#F07178"}},[t._v("div")]),e("span",{staticStyle:{color:"#89DDFF"}},[t._v(">")]),t._v("\n"),e("span",{staticStyle:{color:"#89DDFF"}},[t._v("      <")]),e("span",{staticStyle:{color:"#F07178"}},[t._v("div")]),e("span",{staticStyle:{color:"#89DDFF"}},[t._v(" ")]),e("span",{staticStyle:{color:"#C792EA"}},[t._v("class=")]),e("span",{staticStyle:{color:"#89DDFF"}},[t._v('"')]),e("span",{staticStyle:{color:"#C3E88D"}},[t._v("markdown-body")]),e("span",{staticStyle:{color:"#89DDFF"}},[t._v('"')]),e("span",{staticStyle:{color:"#89DDFF"}},[t._v(" ")]),e("span",{staticStyle:{color:"#C792EA"}},[t._v("v-html=")]),e("span",{staticStyle:{color:"#89DDFF"}},[t._v('"')]),e("span",{staticStyle:{color:"#C3E88D"}},[t._v("$page.post.content")]),e("span",{staticStyle:{color:"#89DDFF"}},[t._v('"')]),e("span",{staticStyle:{color:"#89DDFF"}},[t._v(" />")]),t._v("\n"),e("span",{staticStyle:{color:"#89DDFF"}},[t._v("    </")]),e("span",{staticStyle:{color:"#F07178"}},[t._v("div")]),e("span",{staticStyle:{color:"#89DDFF"}},[t._v(">")]),t._v("\n"),e("span",{staticStyle:{color:"#89DDFF"}},[t._v("  </")]),e("span",{staticStyle:{color:"#F07178"}},[t._v("Layout")]),e("span",{staticStyle:{color:"#89DDFF"}},[t._v(">")]),t._v("\n"),e("span",{staticStyle:{color:"#89DDFF"}},[t._v("</")]),e("span",{staticStyle:{color:"#F07178"}},[t._v("template")]),e("span",{staticStyle:{color:"#89DDFF"}},[t._v(">")])])]),e("pre",{staticClass:"shiki",staticStyle:{"background-color":"#292D3E"}},[e("code",[e("span",{staticStyle:{color:"#89DDFF"}},[t._v(".")]),e("span",{staticStyle:{color:"#FFCB6B"}},[t._v("test")]),e("span",{staticStyle:{color:"#FFFFFF"}},[t._v(" ")]),e("span",{staticStyle:{color:"#89DDFF"}},[t._v("{")]),t._v("\n"),e("span",{staticStyle:{color:"#FFFFFF"}},[t._v("  ")]),e("span",{staticStyle:{color:"#B2CCD6"}},[t._v("background")]),e("span",{staticStyle:{color:"#89DDFF"}},[t._v(":")]),e("span",{staticStyle:{color:"#FFFFFF"}},[t._v(" ")]),e("span",{staticStyle:{color:"#F78C6C"}},[t._v("white")]),e("span",{staticStyle:{color:"#89DDFF"}},[t._v(";")]),t._v("\n"),e("span",{staticStyle:{color:"#FFFFFF"}},[t._v("  ")]),e("span",{staticStyle:{color:"#B2CCD6"}},[t._v("color")]),e("span",{staticStyle:{color:"#89DDFF"}},[t._v(":")]),e("span",{staticStyle:{color:"#FFFFFF"}},[t._v(" ")]),e("span",{staticStyle:{color:"#F78C6C"}},[t._v("red")]),e("span",{staticStyle:{color:"#89DDFF"}},[t._v(";")]),t._v("\n"),e("span",{staticStyle:{color:"#89DDFF"}},[t._v("}")])])])],1)}),[],!1,null,null,null);"function"==typeof F&&F(u),"function"==typeof D&&D(u);o.default=u.exports}}]);