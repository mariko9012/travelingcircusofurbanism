(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{259:function(t,e,o){"use strict";o(45),o(24),o(30);var n=o(250),r=o(260),c=o(106),l={components:{ContentFooter:n.a,PostList:r.a,BlueBanner:c.a},props:{postListTitle:{required:!0},posts:{required:!0},marker:{required:!1}},scrollToTop:!0,data:function(){return{skippingToFirstPost:!1,clientLanguage:this.$i18n.locale}},computed:{isMobile:function(){return this.$store.state.isMobile},isDev:function(){return this.$store.state.viewingAsDev},userLanguage:function(){return this.$i18n.locale},showablePosts:function(){var t=this;return this.posts.filter(function(p){return t.$store.state.currentShowablePosts.includes(p)})}},beforeDestroy:function(){this.$store.commit("setHighlight")},created:function(){if(1===this.showablePosts.length){this.$store.commit("setHighlight"),this.$store.commit("setViewPolygons"),this.skippingToFirstPost=!0;var t=this.showablePosts[0];return this.$router.replace({path:this.localePath({name:"city-post",params:{city:t.city,post:t.slug}})})}},mounted:function(){if(!this.skippingToFirstPost)if(this.clientLanguage=(window?window.navigator.userLanguage||window.navigator.language:"en").substring(0,2),this.$el.parentElement.scrollTop=0,this.$store.commit("setPan",!1),this.marker)this.$store.commit("setView",this.marker),this.$store.commit("setHighlight",this.marker);else{this.$store.commit("setView",this.showablePosts);var t=this.showablePosts.map(function(p){return p.polygons}).filter(function(p){return p}).reduce(function(t,p){return t.concat(p)},[]);t.length>0&&this.$store.commit("setViewPolygons",t),this.$store.commit("setHighlight",this.showablePosts)}},methods:{}},h=o(1),component=Object(h.a)(l,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[0===t.showablePosts.length&&t.clientLanguage===t.$i18n.locale?o("BlueBanner",{scopedSlots:t._u([{key:"ja",fn:function(){return[t._v("\n      ここの日本語の記事はまだありません。\n      "),o("nuxt-link",{attrs:{to:t.localePath("index"),exact:""}},[t._v("ホームに戻る")]),t._v("と日本語での記事があります！\n    ")]},proxy:!0}],null,!1,1802923211)},[t._v("\n    There are no English posts here yet!\n    "),o("nuxt-link",{attrs:{to:t.localePath("index"),exact:""}},[t._v("Check out our home page")]),t._v(" "),o("span",[t._v("to find articles in English.")])],1):t._e(),t._v(" "),o("section",{key:Date.now(),staticClass:"content"},[o("PostList",{attrs:{posts:t.showablePosts,title:t.postListTitle}}),t._v(" "),o("ContentFooter")],1)],1)},[],!1,null,"6e989fce",null);e.a=component.exports},310:function(t,e,o){"use strict";o.r(e);o(45);var n=o(259),r=o(39).capitalize,c={components:{PostListPage:n.a},scrollToTop:!0,head:function(){var t="Urbanist case studies, interviews, and stories from ".concat(this.capitalize(this.city)," on the Traveling Circus of Urbanism."),meta=[{property:"og:title",content:"".concat(this.capitalize(this.city)," | Traveling Circus of Urbanism")},{hid:"description",name:"description",content:t},{hid:"og:description",property:"og:description",content:t},{hid:"og:url",property:"og:url",content:"https://www.travelingcircusofurbanism.com/".concat(this.city)},{hid:"og:image",property:"og:image",content:this.posts[0]?"http"===this.posts[0].image.substring(0,4)?this.posts[0].image:"https://www.travelingcircusofurbanism.com".concat(this.posts[0].image):"https://www.travelingcircusofurbanism.com/assets/sitethumbnail.jpg"}];return this.posts&&0!==this.posts.length||meta.push({rel:"canonical",href:"https://www.travelingcircusofurbanism.com".concat(this.switchLocalePath("ja"===this.$i18n.locale?"en":"ja"))}),{title:this.capitalize(this.city),meta:meta}},asyncData:function(t){var e=t.route,o=t.redirect,n=t.error,r=t.store,c=t.app,l=decodeURIComponent(decodeURIComponent(e.path)).replace("/ja/","/").replace(/\//g,"").replace(/\/$/,"").replace(/%2F/g,"/").toLowerCase(),h=(r.viewingAsDev?r.state.allPosts:r.state.currentShowablePosts).filter(function(p){return p.city.toLowerCase()===l});return"404"==l?n({statusCode:404,message:"Page not found."}):1===h.length?o(c.localePath({name:"city-post",params:{city:l,post:h[0].slug}})):{posts:h,city:l}},data:function(){},computed:{},created:function(){this.$store.commit("setBreadcrumbs",[{label:this.city,url:this.localePath({name:"city",params:{city:this.city}})}])},methods:{capitalize:r}},l=o(1),component=Object(l.a)(c,function(){var t=this.$createElement;return(this._self._c||t)("PostListPage",{attrs:{postListTitle:this.city,posts:this.posts}})},[],!1,null,"13e4f37a",null);e.default=component.exports}}]);