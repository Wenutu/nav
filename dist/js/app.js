(function(){"use strict";var e=[,function(e,t,s){var o=s(144),a=function(){var e=this,t=e._self._c;return t("router-view")},n=[],i={name:"App"},l=i,r=s(713),c=(0,r.Z)(l,a,n,!1,null,null,null),g=c.exports,u=s(345),m=function(){var e=this,t=e._self._c;return t("div",{staticClass:"page-container"},[t("div",{staticClass:"sidebar-menu toggle-others fixed"},[t("div",{staticClass:"sidebar-menu-inner"},[e._m(0),t("ul",{staticClass:"main-menu",attrs:{id:"main-menu"}},e._l(e.items,(function(s,o){return t("li",{key:o},[s.call?t("a",{staticClass:"smooth",attrs:{href:s.call}},[t("i",{class:s.icon}),t("span",{staticClass:"title"},[e._v(e._s(e.transName(s)))]),t("span",{directives:[{name:"show",rawName:"v-show",value:s.is_hot,expression:"menu.is_hot"}],staticClass:"label label-pink pull-right hidden-collapsed"},[e._v("Hot")])]):t("a",{staticClass:"smooth",attrs:{href:"#"+e.transName(s)}},[t("i",{class:s.icon}),t("span",{staticClass:"title"},[e._v(e._s(e.transName(s)))]),t("span",{directives:[{name:"show",rawName:"v-show",value:s.is_hot,expression:"menu.is_hot"}],staticClass:"label label-pink pull-right hidden-collapsed"},[e._v("Hot")])]),s.children?t("ul",e._l(s.children,(function(s,o){return t("li",{key:o},[t("a",{staticClass:"smooth",attrs:{href:"#"+e.transName(s)}},[t("span",{staticClass:"title"},[e._v(e._s(e.transName(s)))]),t("span",{directives:[{name:"show",rawName:"v-show",value:s.is_hot,expression:"submenu.is_hot"}],staticClass:"label label-pink pull-right hidden-collapsed"},[e._v("Hot")])])])})),0):e._e()])})),0)])]),t("div",{staticClass:"main-content"},[t("nav",{staticClass:"navbar user-info-navbar",attrs:{role:"navigation"}},[t("ul",{staticClass:"user-info-menu left-links list-inline list-unstyled"},[e._m(1),t("li",{staticClass:"dropdown hover-line language-switcher"},[t("a",{staticClass:"dropdown-toggle",attrs:{href:"#","data-toggle":"dropdown"}},[t("img",{attrs:{src:e.lang.flag}}),e._v(" "+e._s(e.lang.name)+" ")]),t("ul",{staticClass:"dropdown-menu languages"},e._l(e.langList,(function(s){return t("li",{key:s.key,class:{active:s.key===e.lang.key}},[t("a",{attrs:{href:"#"},on:{click:function(t){e.lang=s}}},[t("img",{attrs:{src:s.flag}}),e._v(" "+e._s(s.name)+" ")])])})),0)])]),t("ul",{staticClass:"user-info-menu right-links list-inline list-unstyled"},[t("li",{staticClass:"hidden-sm hidden-xs"},["zh"===e.lang.key?t("a",{attrs:{href:"https://github.com/Wenutu/nav/issues",target:"_blank"}},[t("i",{staticClass:"fa-github"}),e._v(" 站点提交 ")]):t("a",{attrs:{href:"https://github.com/Wenutu/nav/issues",target:"_blank"}},[t("i",{staticClass:"fa-github"}),e._v(" Submit ")])])])]),t("SearchBox"),e._l(e.items,(function(s,o){return t("div",{key:o},[s.web?t("div",[t("WebItem",{attrs:{item:s,transName:e.transName}})],1):e._l(s.children,(function(s,o){return t("div",{key:o},[t("WebItem",{attrs:{item:s,transName:e.transName}})],1)}))],2)})),t("button",{staticClass:"scroll-to-top",on:{click:e.scrollToTop}},[t("i",{staticClass:"fa-solid fa-chevron-up"})]),t("button",{staticClass:"scroll-to-bottom",on:{click:e.scrollToBottom}},[t("i",{staticClass:"fa-solid fa-chevron-down"})]),t("Footer")],2)])},d=[function(){var e=this,t=e._self._c;return t("header",{staticClass:"logo-env"},[t("div",{staticClass:"mobile-menu-toggle visible-xs"},[t("a",{attrs:{href:"#","data-toggle":"user-info-menu"}},[t("i",{staticClass:"linecons-cog"})]),t("a",{attrs:{href:"#","data-toggle":"mobile-menu"}},[t("i",{staticClass:"fa-bars"})])])])},function(){var e=this,t=e._self._c;return t("li",{staticClass:"hidden-sm hidden-xs"},[t("a",{attrs:{href:"#","data-toggle":"sidebar"}},[t("i",{staticClass:"fa-bars"})])])}],h=function(){var e=this,t=e._self._c;return t("div",[t("h4",{staticClass:"text-gray"},[t("i",{staticClass:"linecons-tag",attrs:{id:e.transName(e.item)}}),e._v(e._s(e.transName(e.item))+" ")]),t("div",{staticClass:"row"},e._l(e.item.web,(function(s,o){return t("div",{key:o,staticClass:"col-sm-3"},[t("div",{staticClass:"xe-widget xe-conversations box2 label-info",attrs:{title:"","data-toggle":"tooltip","data-placement":"bottom","data-original-title":s.url},on:{click:function(t){return e.openweb(s.url)}}},[t("div",{staticClass:"xe-comment-entry"},[t("a",{staticClass:"xe-user-img"},[s.logo?t("img",{staticClass:"lozad img-circle",attrs:{src:s.logo,width:"40"}}):t("img",{staticClass:"lozad img-circle",attrs:{src:"/assets/images/nonetwork.png",width:"40"}})]),t("div",{staticClass:"xe-comment"},[t("a",{staticClass:"xe-user-name overflowClip_1",attrs:{href:"#"}},[t("strong",[e._v(e._s(s.title))])]),t("p",{staticClass:"overflowClip_2"},[e._v(e._s(s.desc))])])])])])})),0),t("br")])},p=[],f={name:"WebItem",props:{item:Object,transName:Function},methods:{openweb(e){window.open(e,"_blank")}}},v=f,w=(0,r.Z)(v,h,p,!1,null,"606ed410",null),b=w.exports,_=function(){var e=this;e._self._c;return e._m(0)},k=[function(){var e=this,t=e._self._c;return t("footer",{staticClass:"main-footer sticky footer-type-1"},[t("div",{staticClass:"footer-inner"},[t("div",{staticClass:"footer-text"},[e._v(" © 2023-2023 "),t("a",{attrs:{href:"https://wenutu.top"}},[t("strong",[e._v("Wenutu")])]),e._v(" theme by "),t("a",{attrs:{href:"https://github.com/WebStackPage/WebStackPage.github.io",target:"_blank"}},[t("strong",[e._v("Webstack")])])]),t("div",{staticClass:"go-up"},[t("a",{attrs:{href:"#",rel:"go-top"}},[t("i",{staticClass:"fa-angle-up"})])])])])}],C={name:"Footer"},y=C,x=(0,r.Z)(y,_,k,!1,null,null,null),P=x.exports,S=function(){var e=this,t=e._self._c;return t("div",{staticClass:"search-engine"},[t("div",e._l(e.categories,(function(s){return t("button",{key:s.id,class:{active:e.activeCategory===s.id},on:{click:function(t){return e.selectCategory(s.id)}}},[e._v(" "+e._s(s.name)+" ")])})),0),t("div",[t("div",[t("form",{staticClass:"width=100%",attrs:{action:e.searchUrl,method:"GET",target:"_blank"}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.searchText,expression:"searchText"}],attrs:{type:"text",name:"q",placeholder:e.searchPlaceholder},domProps:{value:e.searchText},on:{input:function(t){t.target.composing||(e.searchText=t.target.value)}}}),e._m(0)])]),t("div",e._l(e.activeSearchEngines,(function(s){return t("button",{key:s.id,class:{active:e.activeSearchEngine===s.id},on:{click:function(t){return e.selectSearchEngine(s.id)}}},[e._v(" "+e._s(s.name)+" ")])})),0)])])},j=[function(){var e=this,t=e._self._c;return t("button",{attrs:{type:"submit"}},[t("i",{staticClass:"fa fa-search"})])}],N={name:"SearchBox",data(){return{categories:[{id:1,name:"常用",searchEngines:[{id:11,name:"Google",url:"https://www.google.com/search?q=",placeholder:"google 一下"},{id:12,name:"Bing",url:"https://www.bing.com/search?q=",placeholder:"bing 两下"},{id:13,name:"百度",url:"https://www.baidu.com/s?wd=",placeholder:"无奈之举"}]},{id:2,name:"社区",searchEngines:[{id:21,name:"Github",url:"https://github.com/search?q=",placeholder:"Github"},{id:22,name:"Stackoverflow",url:"https://stackoverflow.com/search?q=",placeholder:"Stackoverflow"},{id:23,name:"Gitee",url:"https://search.gitee.com/?skin=rec&type=repository&q=",placeholder:"码云"}]},{id:3,name:"生活",searchEngines:[{id:31,name:"知乎",url:"https://www.zhihu.com/search?type=content&q=",placeholder:"知乎"},{id:32,name:"微博",url:"https://s.weibo.com/weibo?q=",placeholder:"微博"}]}],activeCategory:1,activeSearchEngine:11,searchText:""}},computed:{activeSearchEngines(){return this.categories.find((e=>e.id===this.activeCategory)).searchEngines},searchPlaceholder(){const e=this.activeSearchEngines.find((e=>e.id===this.activeSearchEngine));return e.placeholder},searchUrl(){if(this.activeCategory&&this.activeSearchEngine){const e=this.activeSearchEngines.find((e=>e.id===this.activeSearchEngine)),t=encodeURIComponent(this.searchText);return`${e.url}${t}`}return""}},methods:{selectCategory(e){this.activeCategory=e,this.activeSearchEngine=this.activeSearchEngines[0].id},selectSearchEngine(e){this.activeSearchEngine=e}}},T=N,O=(0,r.Z)(T,S,j,!1,null,null,null),E=O.exports,q=JSON.parse('[{"name":"常用推荐","en_name":"Recommended","icon":"fa-solid fa-star","web":[{"url":"https://wenutu.top","logo":"/assets/images/logos/main/wenutu.png","title":"站长主页","desc":"站长主页"},{"url":"https://console.cloud.tencent.com/","logo":"https://cloudcache.tencent-cloud.com/open_proj/proj_qcloud_v2/gateway/shareicons/cloud.png","title":"腾讯云","desc":"腾讯云控制台"}]},{"name":"编程必备","en_name":"Coding","icon":"fa-solid fa-laptop-code","is_hot":true,"call":"/code"},{"name":"社区资讯","en_name":"Information","icon":"fa-solid fa-rss","web":[{"url":"https://stackoverflow.com/","logo":"https://cdn.sstatic.net/Sites/stackoverflow/Img/apple-touch-icon@2.png?v=73d79a89bded","title":"Stack Overflow","desc":"友好的程序员交流社区"},{"url":"https://www.githubs.cn/","logo":"/assets/images/logos/main/github.png","title":"Github中文社区","desc":"Github项目推荐"},{"url":"https://discord.com/","logo":"/assets/images/logos/main/discord.png","title":"Discord","desc":"游戏、艺术社区"},{"url":"https://www.notion.so/","logo":"/assets/images/logos/main/notion.png","title":"Notion","desc":"笔记"}]},{"name":"素材资源","en_name":"Resources","icon":"fa-solid fa-box-archive","is_hot":true,"children":[{"name":"图标素材","en_name":"Icon","web":[{"url":"https://www.iconfinder.com","logo":"/assets/images/logos/main/Iconfinder.png","title":"Iconfinder","desc":"2,100,000+ free and premium vector icons"},{"url":"http://www.iconfont.cn","logo":"/assets/images/logos/main/iconfont.png","title":"iconfont","desc":"阿里巴巴矢量图标库"},{"url":"https://fontawesome.com/versions","logo":"/assets/images/logos/main/fa.png","title":"Font Awesome","desc":"前端常用font"}]},{"name":"摄影图库","en_name":"Free Photos","web":[{"url":" https://pixabay.com","logo":"/assets/images/logos/main/pixabay.png","title":"Pixabay","desc":"免费正版高清图片素材库，拥有超过2.7百万张优质图片和视频素材，让你轻松应对各种设计场景"}]},{"name":"PPT资源","en_name":"PPT","web":[{"url":"https://www.officeplus.cn/PPT/template/","logo":"/assets/images/logos/main/officeplus.png","title":"OfficePLUS","desc":"OfficePLUS，微软Office官方在线模板网站！"},{"url":"http://www.ypppt.com/","logo":"/assets/images/logos/main/ypppt.png","title":"优品PPT","desc":"高质量的模版，而且还有PPT图表，PPT背景图等资源"}]},{"name":"电子书资源","en_name":"Ebook","web":[{"url":"https://zlibrary.to","logo":"/assets/images/logos/main/zlibrary.png","title":"z-library","desc":"电子书合集"}]},{"name":"软件资源","en_name":"Software","web":[{"url":"https://decrypt.day/","logo":"https://decrypt.day/favicon/apple-touch-icon.png","title":"Decrypt","desc":"ipa资源站"}]}]},{"name":"网盘邮箱","en_name":"Driver Email","icon":"fa-solid fa-school","children":[{"name":"网盘","en_name":"Driver","web":[{"url":"https://www.aliyundrive.com/sign/in","logo":"/assets/images/logos/main/aliyun.png","title":"阿里云盘","desc":"不限速的网盘"},{"url":"https://pan.baidu.com/","logo":"/assets/images/logos/main/baidudisk.png","title":"百度云盘","desc":"百度网盘"},{"url":"https://drive.google.com/","logo":"https://ssl.gstatic.com/images/branding/product/2x/drive_2020q4_48dp.png","title":"Google Driver","desc":"谷歌云盘"}]},{"name":"邮箱","en_name":"Email","web":[{"url":"https://outlook.live.com/","logo":"/assets/images/logos/main/outlook.png","title":"Outlook","desc":"Outlook邮箱网页版"},{"url":"https://mail.google.com/","logo":"/assets/images/logos/main/gmail.png","title":"Gmail","desc":"Gmail Online"},{"url":"https://wx.mail.qq.com","logo":"https://mail.qq.com/zh_CN/htmledition/images/favicon/qqmail_favicon_32h.png","title":"QQ 邮箱","desc":"QQ 邮箱网页版"}]}]},{"name":"实用工具","en_name":"Tools","icon":"fa-solid fa-toolbox","children":[{"name":"排版编辑","en_name":"Typesetting","web":[{"url":"https://www.latexlive.com/","logo":"/assets/images/logos/main/latex.png","title":"Latex在线编辑器","desc":"在线等latex编辑器"},{"url":"https://www.mdeditor.tw/","logo":"/assets/images/logos/main/mdeditor.png","title":"MdEditor","desc":"Markdown语法和编辑器"}]},{"name":"图片编辑","en_name":"Photo","web":[{"url":"https://www.fotor.com/","logo":"https://www.fotor.com/_hub/_next/static/images/favicon-d4b8dbe4630a2bc790117e61267bbb33.png","title":"Fotor","desc":"简单的在线设计"}]},{"name":"VPN","en_name":"VPN","is_hot":true,"web":[{"url":"https://w1.v2free.top/auth/register?code=9OxL","logo":"https://w1.v2free.top/images/authlogo.jpg","title":"V2free","desc":"多终端，签到领流量，免费也可以很强大"}]}]},{"name":"博客友链","en_name":"Blog","icon":"fa-solid fa-blog","web":[{"url":"https://blog.wenutu.top","logo":"/assets/images/logos/main/wenutu.png","title":"站长博客","desc":"站长个人博客，仍在不断完善中"}]},{"name":"站长自用","en_name":"Private Use","icon":"fa-solid fa-user","children":[{"name":"Docker Build","en_name":"Docker Build","web":[{"url":"http://docker.wenutu.top","logo":"https://www.portainer.io/hubfs/crane-icon.svg","title":"Docker Portainer","desc":"Portainer面板 ——Docker"},{"url":"http://alist.wenutu.top","logo":"https://alist.nn.ci/logo.svg","title":"Docker Alist","desc":"Alist网盘聚合 ——Docker"},{"url":"http://xiaoya.wenutu.top","logo":"https://alist.nn.ci/logo.svg","title":"Docker xiaoya","desc":"xiaoya超集 ——Docker"}]},{"name":"网站运营","en_name":"Web Operations","web":[{"url":"https://umami.wenutu.top/","logo":"https://umami.is/favicon-32x32.png","title":"Docker Umami","desc":"站点统计"}]},{"name":"服务器","en_name":"Server","web":[{"url":"https://console.cloud.tencent.com/","logo":"https://cloudcache.tencent-cloud.com/open_proj/proj_qcloud_v2/gateway/shareicons/cloud.png","title":"腾讯云","desc":"腾讯云控制台"},{"url":"https://console.dnspod.cn/","logo":"https://cloudcache.tencent-cloud.com/open_proj/proj_qcloud_v2/gateway/shareicons/cloud.png","title":"腾讯云DNS","desc":"腾讯云DNS控制台"}]}]}]'),D=JSON.parse('[{"name":"返回上级","en_name":"Back To Main","icon":"fa-thin fa-arrow-left","call":"/"},{"name":"前端","en_name":"Frontend","icon":"fa-solid fa-language","children":[{"name":"框架","en_name":"Framework","web":[{"url":"https://cn.vuejs.org/","logo":"https://vuejs.org/images/logo.png","title":"Vue","desc":"易学易用，性能出色，适用场景丰富的 Web 前端框架"},{"url":"https://router.vuejs.org/","logo":"https://router.vuejs.org/logo.svg","title":"Vue Router","desc":"Expressive, configurable and convenient routing for Vue.js"},{"url":"https://reactjs.org/","logo":"https://reactjs.org/logo-180x180.png","title":"React","desc":"用于构建用户界面的 JavaScript 库"},{"url":"https://angular.io/","logo":"https://angular.io/assets/images/favicons/favicon-32x32.png","title":"Angular","desc":"现代 Web 开发平台"}]},{"name":"工程化","en_name":"Project","web":[{"url":"https://webpack.docschina.org/","logo":"https://webpack.docschina.org/icon_192x192.png","title":"Webpack","desc":"静态模块打包工具"},{"url":"https://vitejs.dev/","logo":"https://vitejs.dev/logo.svg","title":"Vite","desc":"Next Generation Frontend Tooling"}]},{"name":"设计","en_name":"Design","web":[{"url":"https://getbootstrap.com/","logo":"https://getbootstrap.com/docs/5.3/assets/img/favicons/favicon-32x32.png","title":"Bootstrap","desc":"使用 Bootstrap 构建快速、响应迅速的网站"}]}]},{"name":"后端","en_name":"Backend","icon":"fa-solid fa-terminal","children":[{"name":"c/c++","en_name":"c/c++","web":[{"url":"https://cplusplus.com/","logo":"","title":"cplusplus","desc":""}]},{"name":"python","en_name":"python","web":[{"url":"https://fastapi.tiangolo.com/","logo":"https://fastapi.tiangolo.com/img/favicon.png","title":"Fastapi","desc":"现代、快速（高性能）的 Web 框架"}]}]},{"name":"算法","en_name":"Algorithms","icon":"fa-solid fa-cube","is_hot":true,"web":[{"url":"https://oi-wiki.org/","logo":"/assets/images/logos/code/oi-wiki.png","title":"Oi wiki","desc":"OI Wiki 致力于成为一个免费开放且持续更新的 编程竞赛 (competitive programming) 知识整合站点"}]},{"name":"可视化网站","en_name":"Visualization Web","icon":"fa-solid fa-eye","is_hot":true,"web":[{"url":"https://algorithm-visualizer.org/","logo":"/assets/images/logos/code/visual.png","title":"Algorithm-visualizer","desc":"算法可视化"},{"url":"https://www.cs.usfca.edu/~galles/visualization/Algorithms.html","logo":"/assets/images/logos/code/visual.png","title":"Data Structure Visualizations","desc":"算法可视化"},{"url":"https://visualgo.net/zh","logo":"https://visualgo.net/img/favicon.png","title":"visualgo","desc":"算法可视化"}]},{"name":"刷题","en_name":"Oj","is_hot":true,"icon":"fa-solid fa-code","web":[{"url":"https://leetcode.cn/","logo":"/assets/images/logos/code/leetcode.png","title":"Leetcode","desc":"刷题～"},{"url":"https://codeforces.com/","logo":"https://codeforces.org/s/0/apple-icon-60x60.png","title":"Codeforces","desc":"刷题和测试"}]},{"name":"开源项目","en_name":"Open Source Project","icon":"fa-solid fa-diagram-project","children":[{"name":"编程书籍","en_name":"Programming Books","web":[{"url":"https://github.com/justjavac/free-programming-books-zh_CN","logo":"","title":"free-programming-books-zh_CN","desc":"免费的计算机编程类中文书籍"}]}]},{"name":"镜像网站","en_name":"Mirror Web","icon":"linecons-diamond","web":[{"url":"https://mirrors.tuna.tsinghua.edu.cn","logo":"/assets/images/logos/code/tuna.png","title":"清华大学开源软件镜像站","desc":"清华大学开源软件镜像站"},{"url":"https://pkgs.org/","logo":"","title":"Pkgs","desc":"最大的linux和unix操作系统存储库和各种语言软件包"},{"url":"http://cdimage.ubuntu.com/ ","logo":"/assets/images/logos/code/ubuntu.png","title":"ubuntu镜像","desc":"所有版本的ubuntu这里都有"}]}]'),W={name:"Index",props:{sites:String},components:{WebItem:b,Footer:P,SearchBox:E},data(){return{items:[],lang:{},langList:[{key:"zh",name:"简体中文",flag:"./assets/images/flags/flag-cn.png"},{key:"en",name:"English",flag:"./assets/images/flags/flag-us.png"}]}},created(){switch(this.lang=this.langList[0],this.sites){case"main":this.items=q;break;case"code":this.items=D;break;default:this.items=q}},methods:{transName(e){return"en"===this.lang.key?e.en_name:e.name},scrollToTop(){window.scrollTo(0,0)},scrollToBottom(){window.scrollTo(0,document.body.scrollHeight)}}},z=W,B=(0,r.Z)(z,m,d,!1,null,null,null),F=B.exports;o.ZP.config.productionTip=!1,o.ZP.use(u.ZP);const I=[{path:"/",component:F,props:G("main")},{path:"/code",component:F,props:G("code")}];function G(e){return{sites:String(e)}}const Z=new u.ZP({routes:I,mode:"history"});new o.ZP({render:e=>e(g),router:Z}).$mount("#app")}],t={};function s(o){var a=t[o];if(void 0!==a)return a.exports;var n=t[o]={exports:{}};return e[o](n,n.exports,s),n.exports}s.m=e,function(){var e=[];s.O=function(t,o,a,n){if(!o){var i=1/0;for(g=0;g<e.length;g++){o=e[g][0],a=e[g][1],n=e[g][2];for(var l=!0,r=0;r<o.length;r++)(!1&n||i>=n)&&Object.keys(s.O).every((function(e){return s.O[e](o[r])}))?o.splice(r--,1):(l=!1,n<i&&(i=n));if(l){e.splice(g--,1);var c=a();void 0!==c&&(t=c)}}return t}n=n||0;for(var g=e.length;g>0&&e[g-1][2]>n;g--)e[g]=e[g-1];e[g]=[o,a,n]}}(),function(){s.d=function(e,t){for(var o in t)s.o(t,o)&&!s.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};s.O.j=function(t){return 0===e[t]};var t=function(t,o){var a,n,i=o[0],l=o[1],r=o[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(a in l)s.o(l,a)&&(s.m[a]=l[a]);if(r)var g=r(s)}for(t&&t(o);c<i.length;c++)n=i[c],s.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return s.O(g)},o=self["webpackChunkwebstack"]=self["webpackChunkwebstack"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=s.O(void 0,[998],(function(){return s(1)}));o=s.O(o)})();
//# sourceMappingURL=app.js.map