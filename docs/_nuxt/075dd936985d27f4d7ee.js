(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{241:function(t,e,o){var content=o(250);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(17).default)("586d25dc",content,!0,{sourceMap:!1})},249:function(t,e,o){"use strict";var r=o(241);o.n(r).a},250:function(t,e,o){(t.exports=o(16)(!1)).push([t.i,'.breadcrumb[data-v-3b16be55]{background:#f7f6f3;padding:0;width:50vw;white-space:nowrap;border-bottom:1px solid rgba(224,223,214,.5);font-size:.9em;position:relative;z-index:3;overflow:hidden}.breadcrumb>*[data-v-3b16be55]{z-index:1}.breadcrumb[data-v-3b16be55]:after{content:"";pointer-events:none;position:absolute;right:0;bottom:0;top:0;left:0;background-image:linear-gradient(90deg,rgba(247,246,243,0) 90%,#f7f6f3 99.5%);z-index:2}.crumb[data-v-3b16be55]{transition:all .2s;color:#5e5e5e!important;position:relative;margin:0;padding:12px 24px;color:#1f1f1f;text-decoration:none;display:inline-block}.crumb[data-v-3b16be55]:hover{color:#1f1f1f!important}.crumb[data-v-3b16be55]:first-of-type{padding-left:96px;margin-left:-48px}.crumb>*[data-v-3b16be55]{position:relative;z-index:4;white-space:nowrap}.crumb[data-v-3b16be55]:before{transition:all .2s;content:"";position:absolute;top:0;left:0;width:100%;height:100%;transform:skew(-25deg);border-right:1px solid rgba(224,223,214,.7);z-index:3}.crumb[data-v-3b16be55]:last-of-type:before{border-right:none}.crumb[data-v-3b16be55]:hover:before{background:#f1efea!important;z-index:4;box-shadow:0 2px 10px #cec8b6!important}',""])},251:function(t,e,o){"use strict";var r=o(10),n=o(45),c={props:{title:{required:!1}},computed:{isMobile:function(){return this.$store.state.isMobile},breadcrumbs:function(){return this.$store.state.breadcrumbs},pathEls:function(){return[{label:"Home",url:this.localePath("index")}].concat(Object(r.a)(this.breadcrumbs))}},methods:{capitalize:n.capitalize,softTruncate:n.softTruncate}},l=(o(249),o(2)),component=Object(l.a)(c,function(){var t=this,e=t.$createElement,o=t._self._c||e;return!1===t.isMobile&&t.breadcrumbs&&t.breadcrumbs.length>0?o("div",{staticClass:"breadcrumb content-top-full"},t._l(t.pathEls,function(path,e){return o("nuxt-link",{key:e,staticClass:"crumb",class:(e===t.pathEls.length-1?"last ":"")+"gray"+e,attrs:{to:path.url,exact:""}},[o("span",[t._v(t._s(t.capitalize(path.label)))])])}),1):t._e()},[],!1,null,"3b16be55",null);e.a=component.exports},253:function(t,e,o){"use strict";o(39),o(24),o(40);var r=o(242),n=o(255),c=o(251),l=o(254),h={components:{ContentFooter:r.a,PostList:n.a,Breadcrumb:c.a,SearchSelector:l.a},props:{postListTitle:{required:!0},posts:{required:!0},marker:{required:!1}},scrollToTop:!0,data:function(){return{skippingToFirstPost:!1}},computed:{isMobile:function(){return this.$store.state.isMobile},isDev:function(){return this.$store.state.viewingAsDev},userLanguage:function(){return this.$i18n.locale},showablePosts:function(){var t=this;return this.posts.filter(function(p){return t.$store.state.currentShowablePosts.includes(p)})}},beforeDestroy:function(){this.$store.commit("setHighlight")},created:function(){if(1===this.showablePosts.length){this.$store.commit("setHighlight"),this.$store.commit("setViewPolygons"),this.skippingToFirstPost=!0;var t=this.showablePosts[0];return this.$router.replace({path:this.localePath({name:"city-post",params:{city:t.city,post:t.slug}})})}},mounted:function(){if(!this.skippingToFirstPost)if(this.$store.commit("setPan",!1),this.marker)this.$store.commit("setView",this.marker),this.$store.commit("setHighlight",this.marker);else{this.$store.commit("setView",this.showablePosts);var t=this.showablePosts.map(function(p){return p.polygons}).filter(function(p){return p}).reduce(function(t,p){return t.concat(p)},[]);t.length>0&&this.$store.commit("setViewPolygons",t),this.$store.commit("setHighlight",this.showablePosts)}},methods:{}},m=o(2),component=Object(m.a)(h,function(){var t=this.$createElement,e=this._self._c||t;return e("section",{key:Date.now(),staticClass:"content"},[e("Breadcrumb"),this._v(" "),e("SearchSelector"),this._v(" "),e("PostList",{attrs:{posts:this.showablePosts,title:this.postListTitle}}),this._v(" "),e("ContentFooter")],1)},[],!1,null,"2f629f38",null);e.a=component.exports},300:function(t,e,o){"use strict";o.r(e);o(41),o(39);var r=o(253),n=o(45).capitalize,c={components:{PostListPage:r.a},scrollToTop:!0,head:function(){var t="Urbanist case studies, interviews, and stories from ".concat(this.capitalize(this.location)," on the Traveling Circus of Urbanism.");return{title:this.capitalize(this.location),meta:[{property:"og:title",content:"".concat(this.capitalize(this.location)," | Traveling Circus of Urbanism")},{hid:"description",name:"description",content:t},{hid:"og:description",property:"og:description",content:t},{property:"og:url",content:"https://www.travelingcircusofurbanism.com/at/".concat(this.location)},{hid:"og:image",property:"og:image",content:this.posts[0]&&this.posts[0].image?"http"===this.posts[0].image.substring(0,4)?this.posts[0].image:"https://www.travelingcircusofurbanism.com".concat(this.posts[0].image):""}]}},asyncData:function(t){var e=t.route,o=t.redirect,r=t.error,n=t.store,c=t.app,l=decodeURIComponent(decodeURIComponent(e.path)).replace("/ja/","/").replace("/at/","").replace(/\/$/,"").toLowerCase(),h=n.state.allPosts;if(!h||0===h.length)return r({statusCode:404,message:"Page not found."});var marker={};return 1===(h=h.filter(function(p){var t=(Array.isArray(p.mapPosition)?p.mapPosition:[p.mapPosition]).concat(p.polygons).filter(function(p){return p});if(t.length>0){var e=t.find(function(t){return t.location&&t.location.toLowerCase()===l});return e&&(marker=e),e}})).length?o(c.localePath({name:"city-post",params:{city:h[0].city,post:h[0].slug}})):{posts:h,location:l,marker:marker}},created:function(){this.$store.commit("setBreadcrumbs",[{label:"at: "+this.location,url:this.localePath({name:"at-location",params:{location:this.location}})}])},methods:{capitalize:n}},l=o(2),component=Object(l.a)(c,function(){var t=this.$createElement;return(this._self._c||t)("PostListPage",{attrs:{postListTitle:this.location,posts:this.posts,marker:this.marker}})},[],!1,null,"1a1dfb60",null);e.default=component.exports}}]);