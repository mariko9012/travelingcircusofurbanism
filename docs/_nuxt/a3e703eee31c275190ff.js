(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{254:function(t,e,i){var o=i(255);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,i(5).default)("aa687e32",o,!0,{})},255:function(t,e,i){(t.exports=i(4)(!1)).push([t.i,"",""])},269:function(t,e,i){"use strict";i.r(e);var o=i(112),n=i.n(o),a=i(228);function s(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}const{capitalize:r}=i(20);var c={head(){return{title:this.capitalize(this.jaTitle),meta:[{property:"og:title",content:this.capitalize(this.jaTitle)},{hid:"og:type",property:"og:type",content:"article"},{hid:"og:description",property:"og:description",content:this.description},{property:"description",content:this.description,hid:"description"},{property:"og:url",content:`https://www.travelingcircusofurbanism.com${this.publicPath}`},{hid:"og:image",property:"og:image",content:this.image?"http"===this.image.substring(0,4)?this.image:`https://www.travelingcircusofurbanism.com${encodeURI(this.image)}`:"https://www.travelingcircusofurbanism.com/assets/sitethumbnail.jpg"}]}},components:{PostFullDisplay:a.a},asyncData({route:t,redirect:e,error:i,env:o,store:n}){const a=(t=>t.replace(/\/$/,""))(decodeURI(t.path)),r="/posts"+a.replace("/ja","")+"/",c=a+"/";let l=t.path.substring(1);l=decodeURI(l.substring(0,l.indexOf("/"))).toLowerCase();const p=n.state.allPosts.find(t=>l===t.city&&-1!==a.indexOf(t.slug));return p?p.languages.ja?function(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{},o=Object.keys(i);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(i).filter(function(t){return Object.getOwnPropertyDescriptor(i,t).enumerable}))),o.forEach(function(e){s(t,e,i[e])})}return t}({path:r,publicPath:c,slug:a,city:l,preview:p.preview},p,{mapPosition:p.mapPosition?Array.isArray(p.mapPosition)?p.mapPosition:[p.mapPosition]:[],polygons:p.polygons?p.polygons:null}):e(t.path.replace("/ja","")):i({statusCode:404,message:"Page not found."})},data:()=>({loading:!0,content:{en:null,ja:null}}),async created(){const t={validateStatus:t=>!0},e=[];try{this.languages.en&&e.push(n.a.get(this.path+"content.html",t).then(t=>{this.$set(this.content,"en",t.data)}).catch(t=>console.log(t))),this.languages.ja&&e.push(n.a.get(this.path+"ja.html",t).then(t=>{this.$set(this.content,"ja",t.data)}).catch(t=>console.log(t))),await Promise.all(e)}catch(t){return console.log(t),this.$router.push("/")}if(!this.content.en&&!this.content.ja)return this.$router.push("/");this.loading=!1},mounted(){},beforeDestroy(){},methods:{capitalize:r}},l=i(1);var p=function(t){i(254)},u=Object(l.a)(c,function(){var t=this,e=t.$createElement;return(t._self._c||e)("PostFullDisplay",{key:"ja"+t.title,attrs:{prioritizeLanguage:"ja",title:t.title,content:t.content,category:t.category,mapPosition:t.mapPosition,city:t.city,date:t.date,loading:t.loading,slug:t.slug,description:t.description,publicPath:t.publicPath,path:t.path,image:t.image,jaTitle:t.jaTitle,polygons:t.polygons,public:t.public,preview:t.preview}})},[],!1,p,"data-v-6fd9eef5",null);e.default=u.exports}}]);