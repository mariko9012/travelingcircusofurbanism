(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{340:function(t,e,n){"use strict";n.r(e);var r=n(3),o=(n(35),n(43),n(33),n(31),n(17),n(53),n(178)),c=n.n(o),l=n(286),h=n(49).capitalize,m={components:{PostListPage:l.a},scrollToTop:!0,layout:"default",head:function(){var meta=[{property:"og:title",content:"".concat(this.capitalize(this.tag)," | Traveling Circus of Urbanism")},{property:"og:url",content:"https://www.travelingcircusofurbanism.com/tag/".concat(this.tag)},{hid:"og:image",property:"og:image",content:this.posts[0]?"http"===this.posts[0].image.substring(0,4)?this.posts[0].image:"https://www.travelingcircusofurbanism.com".concat(this.posts[0].image):"https://www.travelingcircusofurbanism.com/assets/sitethumbnail.jpg"}];return this.posts&&0!==this.posts.length||(meta.push({rel:"canonical",href:"https://www.travelingcircusofurbanism.com".concat(this.switchLocalePath("ja"===this.$i18n.locale?"en":"ja"))}),meta.push({name:"robots",content:"noindex"})),{title:this.capitalize(this.tag),meta:meta}},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o,l,h,m,f,d,w;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.route,r=t.redirect,o=t.error,l=t.store,h=t.app,m=decodeURIComponent(decodeURIComponent(n.path)).replace("/ja/","/").replace("/tag/","").replace(/%2F/g,"/").toLowerCase(),f=[],e.next=8;break;case 8:return e.prev=8,d={validateStatus:function(t){return!0}},e.next=12,c.a.get("/generated/tags.json",d).then((function(t){return f=t.data})).catch((function(t){return console.log(t)}));case 12:e.next=18;break;case 14:return e.prev=14,e.t0=e.catch(8),console.log(e.t0),e.abrupt("return",o({statusCode:404,message:"Page not found."}));case 18:if(f.includes(m)){e.next=20;break}return e.abrupt("return",o({statusCode:404,message:"Page not found."}));case 20:if(1!==(w=(w=l.viewingAsDev?l.state.allPosts:l.state.currentShowablePosts).filter((function(p){return p.tags&&p.tags.find((function(t){return t.toLowerCase()===m}))}))).length){e.next=24;break}return e.abrupt("return",r(h.localePath({name:"city-post",params:{city:w[0].city,post:w[0].slug}})));case 24:return e.abrupt("return",{posts:w,tag:m});case 25:case"end":return e.stop()}}),e,null,[[8,14]])})))()},created:function(){this.$store.commit("setBreadcrumbs",[{label:"#"+this.tag,url:this.localePath({name:"tag-tag",params:{tag:this.tag}})}])},methods:{capitalize:h}},f=n(2),component=Object(f.a)(m,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("PostListPage",{attrs:{postListTitle:"#"+t.tag,posts:t.posts}})}),[],!1,null,"d92387fa",null);e.default=component.exports}}]);