(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{216:function(t,e,s){var i=s(217);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,s(5).default)("d68c5dc4",i,!0,{})},217:function(t,e,s){(t.exports=s(4)(!1)).push([t.i,"\n.breadcrumb[data-v-8b08fc8c] {\n  background: #f7f6f3;\n  padding: 0;\n  width: 50vw;\n  white-space: nowrap;\n  position: relative;\n  border-bottom: 1px solid rgba(224, 223, 214, 0.5);\n  font-size: 0.9em;\n  position: relative;\n  z-index: 3;\n  overflow: hidden;\n}\n.breadcrumb > *[data-v-8b08fc8c] {\n    z-index: 1;\n}\n.breadcrumb[data-v-8b08fc8c]:after {\n    content: '';\n    pointer-events: none;\n    position: absolute;\n    right: 0;\n    bottom: 0;\n    top: 0;\n    left: 0;\n    background-image: linear-gradient(to right, rgba(247, 246, 243, 0) 90%, #f7f6f3 99.5%);\n    z-index: 2;\n}\n.crumb[data-v-8b08fc8c] {\n  transition: all 0.2s;\n  color: #595959 !important;\n  position: relative;\n  margin: 0;\n  padding: 12px 24px;\n  color: #1a1a1a;\n  text-decoration: none;\n  display: inline-block;\n}\n.crumb[data-v-8b08fc8c]:hover {\n    color: #1a1a1a !important;\n}\n.crumb[data-v-8b08fc8c]:first-of-type {\n    padding-left: 96px;\n    margin-left: -48px;\n}\n.crumb > *[data-v-8b08fc8c] {\n    position: relative;\n    z-index: 4;\n    white-space: nowrap;\n}\n.crumb[data-v-8b08fc8c]:before {\n    transition: all 0.2s;\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    transform: skew(-25deg);\n    border-right: 1px solid rgba(224, 223, 214, 0.7);\n    z-index: 3;\n}\n.crumb[data-v-8b08fc8c]:last-of-type:before {\n    border-right: none;\n}\n.crumb[data-v-8b08fc8c]:hover::before {\n    background: #f1efea !important;\n    z-index: 4;\n    box-shadow: 0px 2px 10px #cec8b6 !important;\n}\n",""])},218:function(t,e,s){"use strict";const{capitalize:i,softTruncate:o}=s(21);var n={props:{title:{required:!1}},computed:{isMobile(){return this.$store.state.isMobile},pathEls(){const t=this.$nuxt.$route.path.substring(1),e=[{label:"Home",url:"/"}];let s=t.substring(0,t.indexOf("/")),i=t.substring(t.indexOf("/")+1),o="";return"is"===s||"at"===s?o=s+": ":"tag"===s?o="#":""!==s&&e.push({label:this.capitalize(decodeURI(s)),url:`/${s}`}),e.push({label:this.title?this.capitalize(this.softTruncate(this.title,70)):`${o||""}${this.capitalize(decodeURI(i.replace(/\/$/,"")))}`,url:`/${t}`}),e}},methods:{capitalize:i,softTruncate:o}},a=s(1);var r=function(t){s(216)},c=Object(a.a)(n,function(){var t=this,e=t.$createElement,s=t._self._c||e;return!1===t.isMobile?s("div",{staticClass:"breadcrumb content-top-full"},t._l(t.pathEls,function(e,i){return s("nuxt-link",{key:i,staticClass:"crumb",class:(i===t.pathEls.length-1?"last ":"")+"gray"+i,attrs:{to:e.url,exact:""}},[s("span",[t._v(t._s(e.label))])])})):t._e()},[],!1,r,"data-v-8b08fc8c",null);e.a=c.exports},219:function(t,e,s){var i=s(220);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,s(5).default)("3ac47476",i,!0,{})},220:function(t,e,s){(t.exports=s(4)(!1)).push([t.i,"",""])},221:function(t,e,s){"use strict";var i=s(209),o=s(224),n=s(218),a=s(222),r=s(225);const{capitalize:c}=s(21);var l={components:{ContentFooter:i.a,PostList:o.a,Breadcrumb:n.a,SearchSelector:a.a,LanguagePicker:r.a},props:{postListTitle:{required:!0},posts:{required:!0},marker:{required:!1}},scrollToTop:!0,data:()=>({skippingToFirstPost:!1}),computed:{isMobile(){return this.$store.state.isMobile},isDev(){return this.$store.state.viewingAsDev},userLanguage(){return this.$store.state.language},onlyShowLanguage(){return this.$store.state.onlyShowLanguage},showablePosts(){return this.posts.filter(t=>this.$store.state.currentShowablePosts.includes(t))}},beforeDestroy(){this.$store.commit("setHighlight")},created(){if(1===this.showablePosts.length)return this.$store.commit("setHighlight"),this.$store.commit("setViewPolygons"),this.skippingToFirstPost=!0,this.$router.replace({path:this.showablePosts[0].url})},mounted(){if(!this.skippingToFirstPost)if(this.$store.commit("setPan",!1),this.marker)this.$store.commit("setView",this.marker),this.$store.commit("setHighlight",this.marker);else{this.$store.commit("setView",this.showablePosts);const t=this.showablePosts.map(t=>t.polygons).filter(t=>t).reduce((t,e)=>t.concat(e),[]);t.length>0&&this.$store.commit("setViewPolygons",t),this.$store.commit("setHighlight",this.showablePosts)}},methods:{capitalize:c}},p=s(1);var u=function(t){s(219)},h=Object(p.a)(l,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{key:Date.now(),staticClass:"content"},[t.showablePosts.find(function(e){return e.languages["en"===t.userLanguage?"ja":"en"]})?s("LanguagePicker"):t._e(),t._v(" "),s("Breadcrumb"),t._v(" "),s("SearchSelector"),t._v(" "),s("PostList",{attrs:{posts:t.showablePosts,title:t.postListTitle}}),t._v(" "),s("ContentFooter")],1)},[],!1,u,"data-v-c145c61a",null);e.a=h.exports},247:function(t,e,s){var i=s(248);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,s(5).default)("ba0865d4",i,!0,{})},248:function(t,e,s){(t.exports=s(4)(!1)).push([t.i,"",""])},278:function(t,e,s){"use strict";s.r(e);var i=s(221);const{capitalize:o}=s(21);var n={components:{PostListPage:i.a},scrollToTop:!0,head(){const t=`Urbanist case studies, interviews, and stories from ${this.capitalize(this.location)} on the Traveling Circus of Urbanism.`;return{title:this.capitalize(this.location),meta:[{property:"og:title",content:`${this.capitalize(this.location)} | Traveling Circus of Urbanism`},{hid:"description",name:"description",content:t},{hid:"og:description",property:"og:description",content:t},{property:"og:url",content:`https://www.travelingcircusofurbanism.com/at/${this.location}`},{hid:"og:image",property:"og:image",content:this.posts[0]&&this.posts[0].image?"http"===this.posts[0].image.substring(0,4)?this.posts[0].image:`https://www.travelingcircusofurbanism.com${this.posts[0].image}`:""}]}},asyncData({route:t,redirect:e,error:s,isStatic:i,store:o}){const n=decodeURI(t.path).replace("/at/","").replace(/\/$/,"").toLowerCase();let a=o.state.allPosts;if(!a||0===a.length)return s({statusCode:404,message:"Page not found."});let r={};return{posts:a=a.filter(t=>{const e=(Array.isArray(t.mapPosition)?t.mapPosition:[t.mapPosition]).concat(t.polygons).filter(t=>t);if(e.length>0){const t=e.find(t=>t.location&&t.location.toLowerCase()===n);return t&&(r=t),t}}),location:n,marker:r}},methods:{capitalize:o}},a=s(1);var r=function(t){s(247)},c=Object(a.a)(n,function(){var t=this.$createElement;return(this._self._c||t)("PostListPage",{attrs:{postListTitle:this.location,posts:this.posts,marker:this.marker}})},[],!1,r,"data-v-212717ca",null);e.default=c.exports}}]);