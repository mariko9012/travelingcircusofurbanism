(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{218:function(t,e,n){var s=n(219);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,n(5).default)("f68df348",s,!0,{})},219:function(t,e,n){(t.exports=n(4)(!1)).push([t.i,"\n.breadcrumb[data-v-6fccaf36] {\n  background: #f7f6f3;\n  padding: 0;\n  width: 50vw;\n  white-space: nowrap;\n  position: relative;\n  border-bottom: 1px solid rgba(224, 223, 214, 0.5);\n  font-size: 0.9em;\n  position: relative;\n  z-index: 3;\n  overflow: hidden;\n}\n.breadcrumb > *[data-v-6fccaf36] {\n    z-index: 1;\n}\n.breadcrumb[data-v-6fccaf36]:after {\n    content: '';\n    pointer-events: none;\n    position: absolute;\n    right: 0;\n    bottom: 0;\n    top: 0;\n    left: 0;\n    background-image: linear-gradient(to right, rgba(247, 246, 243, 0) 90%, #f7f6f3 99.5%);\n    z-index: 2;\n}\n.crumb[data-v-6fccaf36] {\n  transition: all 0.2s;\n  color: #626262 !important;\n  position: relative;\n  margin: 0;\n  padding: 12px 24px;\n  color: #222;\n  text-decoration: none;\n  display: inline-block;\n}\n.crumb[data-v-6fccaf36]:hover {\n    color: #222 !important;\n}\n.crumb[data-v-6fccaf36]:first-of-type {\n    padding-left: 96px;\n    margin-left: -48px;\n}\n.crumb > *[data-v-6fccaf36] {\n    position: relative;\n    z-index: 4;\n    white-space: nowrap;\n}\n.crumb[data-v-6fccaf36]:before {\n    transition: all 0.2s;\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    transform: skew(-25deg);\n    border-right: 1px solid rgba(224, 223, 214, 0.7);\n    z-index: 3;\n}\n.crumb[data-v-6fccaf36]:last-of-type:before {\n    border-right: none;\n}\n.crumb[data-v-6fccaf36]:hover::before {\n    background: #f1efea !important;\n    z-index: 4;\n    box-shadow: 0px 2px 10px #cec8b6 !important;\n}\n",""])},220:function(t,e,n){"use strict";const{capitalize:s,softTruncate:i}=n(20);var o={props:{title:{required:!1}},computed:{isMobile(){return this.$store.state.isMobile},pathEls(){const t=this.$nuxt.$route.path.substring(1),e=[{label:"Home",url:"/"}];let n=t.substring(0,t.indexOf("/")),s=t.substring(t.indexOf("/")+1),i="";return"is"===n||"at"===n?i=n:""!==n&&e.push({label:this.capitalize(decodeURI(n)),url:`/${n}`}),e.push({label:this.title?this.softTruncate(this.title,70):`${i?i+": ":""}${this.capitalize(decodeURI(s.replace(/\/$/,"")))}`,url:`/${t}`}),e}},methods:{capitalize:s,softTruncate:i}},a=n(1);var r=function(t){n(218)},c=Object(a.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return!1===t.isMobile?n("div",{staticClass:"breadcrumb content-top-full"},t._l(t.pathEls,function(e,s){return n("nuxt-link",{key:s,staticClass:"crumb",class:(s===t.pathEls.length-1?"last ":"")+"gray"+s,attrs:{to:e.url,exact:""}},[n("span",[t._v(t._s(e.label))])])})):t._e()},[],!1,r,"data-v-6fccaf36",null);e.a=c.exports},252:function(t,e,n){var s=n(253);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,n(5).default)("85cfe5e0",s,!0,{})},253:function(t,e,n){(t.exports=n(4)(!1)).push([t.i,"",""])},268:function(t,e,n){"use strict";n.r(e);var s=n(211),i=n(223),o=n(220),a=n(221),r=n(224);const{capitalize:c}=n(20);var l={components:{ContentFooter:s.a,PostList:i.a,Breadcrumb:o.a,SearchSelector:a.a,LanguagePicker:r.a},head(){const t=`Urbanist case studies, interviews, and stories from ${this.capitalize(this.city)} on the Traveling Circus of Urbanism.`;return{title:this.capitalize(this.city),meta:[{property:"og:title",content:`${this.capitalize(this.city)} | Traveling Circus of Urbanism`},{hid:"description",name:"description",content:t},{hid:"og:description",property:"og:description",content:t},{property:"og:url",content:`https://www.travelingcircusofurbanism.com/${this.city}`},{property:"og:image",content:"http"===this.posts[0].image.substring(0,4)?this.posts[0].image:`https://www.travelingcircusofurbanism.com${this.posts[0].image}`}]}},asyncData({route:t,redirect:e,error:n,isStatic:s,store:i}){const o=decodeURI(t.path).replace(/\//g,"").replace(/\/$/,"").toLowerCase();let a=i.state.allPosts.filter(t=>t.city.toLowerCase()===o);return a&&0!==a.length?{posts:a,city:o}:n({statusCode:404,message:"Page not found."})},data:()=>({skippingToFirstPost:!1}),computed:{isMobile(){return this.$store.state.isMobile},isDev(){return this.$store.state.isDev},userLanguage(){return this.$store.state.language},onlyShowLanguage(){return this.$store.state.onlyShowLanguage},showablePosts(){return this.posts.filter(t=>this.$store.state.currentShowablePosts.includes(t))}},beforeDestroy(){this.$store.commit("setHighlight")},created(){if(1===this.showablePosts.length)return this.$store.commit("setHighlight"),this.$store.commit("setViewPolygons"),this.skippingToFirstPost=!0,this.$router.replace({path:this.showablePosts[0].url})},mounted(){if(this.skippingToFirstPost)return;this.$store.commit("setPan",!1),this.$store.commit("setView",this.showablePosts);const t=this.showablePosts.map(t=>t.polygons).filter(t=>t).reduce((t,e)=>t.concat(e),[]);t.length>0&&this.$store.commit("setViewPolygons",t),this.$store.commit("setHighlight",this.showablePosts)},methods:{capitalize:c}},p=n(1);var u=function(t){n(252)},h=Object(p.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"content"},[t.showablePosts.find(function(e){return e.languages["en"===t.userLanguage?"ja":"en"]})?n("LanguagePicker"):t._e(),t._v(" "),n("Breadcrumb"),t._v(" "),n("SearchSelector"),t._v(" "),n("PostList",{attrs:{posts:t.showablePosts,title:t.city}}),t._v(" "),n("ContentFooter")],1)},[],!1,u,"data-v-f5f5ed84",null);e.default=h.exports}}]);