webpackJsonp([4],{"+kJY":function(t,e,i){var o=i("ors2");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,i("rjj0").default)("7c8c8493",o,!1,{sourceMap:!1})},"0sGR":function(t,e,i){var o=i("4R61");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,i("rjj0").default)("503b5ca1",o,!1,{sourceMap:!1})},"4R61":function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,".post-preview[data-v-a4266606]{padding-bottom:60px;display:grid;grid-template-columns:40% 1fr;grid-gap:30px;min-height:270px}.post-preview .previewimage[data-v-a4266606]{background:#e0dfd6;height:100%;width:100%;background-size:cover;background-repeat:no-repeat;background-position:50%}@media (max-width:1300px){.post-preview[data-v-a4266606]{grid-template-columns:1fr}.post-preview .previewimage[data-v-a4266606]{height:300px}}@media (max-width:768px){.post-preview[data-v-a4266606]{min-height:auto;grid-gap:18px}.post-preview .previewimage[data-v-a4266606]{height:180px}}.post-preview .titlelink[data-v-a4266606]{text-decoration:none}h4[data-v-a4266606]{color:#222!important;margin-top:0;margin-bottom:12px}",""])},"4kk+":function(t,e){},"6Bn+":function(t,e,i){"use strict";i.d(e,"a",function(){return o}),i.d(e,"b",function(){return a});var o=function(){var t=this.$createElement;this._self._c;return this._m(0)},a=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"footer"},[e("p",[this._v("\n     All content copyright Mariko Sugita, except where noted."),e("br"),this._v("\n     Static site built using "),e("a",{attrs:{href:"https://nuxtjs.org/guide",target:"_blank"}},[this._v("Nuxt.js")]),this._v(" and hosted with "),e("a",{attrs:{href:"https://github.com/mariko9012",target:"_blank"}},[this._v("Github Pages")]),this._v(".\n   ")])])}];o._withStripped=!0},A4bo:function(t,e,i){"use strict";var o=i("oir9"),a=i("zNXz"),n=i("XyMi"),s=!1;var r=function(t){s||i("0sGR")},c=Object(n.a)(o.a,a.a,a.b,!1,r,"data-v-a4266606",null);c.options.__file="components/PostPreview.vue",e.a=c.exports},BAfT:function(t,e,i){"use strict";var o=i("nNrl");i.n(o);e.a={props:["category","mapPosition","city","date"],computed:{cityIsLocation:function(){return this.mapPosition&&!Array.isArray(this.mapPosition)&&this.city&&this.mapPosition.location&&this.city.toLowerCase()===this.mapPosition.location.toLowerCase()}},methods:{capitalize:o.capitalize}}},EE7M:function(t,e,i){"use strict";i.d(e,"a",function(){return o}),i.d(e,"b",function(){return a});var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"selectorframe"},[i("h3",{staticClass:"sectionhead mini",on:{click:function(e){t.isOpen=!t.isOpen}}},[t._v("\n    "+t._s(t.capitalize(t.title))+"\n    "),t.isMobile?i("span",[t._v("("+t._s(t.orderedItems.length)+")")]):t._e(),t.isMobile?i("span",{staticClass:"toggle",class:{open:t.isOpen}},[t._v("►")]):t._e()]),!t.isMobile||t.isOpen?i("div",{staticClass:"selector"},[i("div",{staticClass:"buttonlist"},[t._l(t.itemsToShow,function(e,o){return i("nuxt-link",{key:o,staticClass:"button secondary mini",attrs:{to:"/"+t.urlPrefix+e,exact:""}},[t._v("\n        "+t._s(t.capitalize(e))+"\n      ")])}),t.orderedItems.length<t.responsiveCutoff&&t.moreHint?i("div",{staticClass:"sub"},[t._v("And more to come...")]):t._e(),t.orderedItems.length>t.responsiveCutoff&&!t.showAll?i("div",{staticClass:"button secondary mini showall",on:{click:function(e){t.showAll=!0}}},[t._v("\n        Show All Cities\n      ")]):t._e()],2)]):t._e()])},a=[];o._withStripped=!0},Envs:function(t,e,i){"use strict";var o=i("f3rP"),a=i("xSm0"),n=i("XyMi"),s=!1;var r=function(t){s||i("o+QU")},c=Object(n.a)(o.a,a.a,a.b,!1,r,"data-v-5264528e",null);c.options.__file="components/PostList.vue",e.a=c.exports},"GCp+":function(t,e,i){var o=i("I1WX");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,i("rjj0").default)("0886ecad",o,!1,{sourceMap:!1})},GTTH:function(t,e){t.exports=[{slug:"migration",city:"elsewhere",title:" Space of Migration",description:" \n - Great online journal about Space of Migration, to explore the local aspect of global migration: the places where migrants settle, form communities and networks, and establish economic and social spaces...",url:"/elsewhere/migration",public:!1,date:"8/08/2018",category:"essay",image:"/posts/elsewhere/migration/resized/",languages:{en:!0,ja:!1}},{slug:"theurbanistSF",city:"san francisco",title:" The urbanist SF",description:" \n\n\nThe Urbanist SF, which is everything we need to explore the city. I love the idea of having a starter kit for newcomers to the city, which is packed with all the passion/knowledge/love of the urbanist...",url:"/san francisco/theurbanistSF",public:!1,date:"7/11/2018",category:"interview",mapPosition:[{location:"Philz coffee",bearing:0,center:[-122.41433330000001,37.7523861],zoom:12,pitch:0},{location:"Mission district",bearing:0,center:[-122.41433330000001,37.7523861],zoom:12,pitch:0},{location:"The Women’s Building",bearing:0,center:[-122.4226539,37.7615596],zoom:12,pitch:0},{location:"Colpa press",bearing:0,center:[-122.41727709999998,37.7540722],zoom:12,pitch:0},{location:"Dolores Park",bearing:0,center:[-122.42585099999997,37.7613424],zoom:12,pitch:0},{location:"Birite Market",bearing:0,center:[-122.424711,37.761345],zoom:12,pitch:0},{location:"Timbuk2 ",bearing:0,center:[-122.41563300000001,37.7590263],zoom:12,pitch:0},{location:"Candi me",bearing:0,center:[-122.41975939999998,37.75871660000001],zoom:12,pitch:0},{location:"Balmy Alley",bearing:0,center:[-122.41241450000001,37.75180280000001],zoom:12,pitch:0},{location:"Clarion Alley",bearing:0,center:[-122.42079430000001,37.7629824],zoom:12,pitch:0}],image:"/posts/san francisco/theurbanistSF/resized/theurbanistSF03.jpg",languages:{en:!0,ja:!0}},{slug:"Introduction",city:"san francisco",title:" Things to do and read for urbanists @San Francisco",description:" \n\n Things to do, places/project to check out\n\n1. The Urbanist SF, which is everything we need to explore the city. I love the idea of having a starter kit for newcomers to the city, which is packed with...",url:"/san francisco/Introduction",public:!0,date:"7/03/2018",category:"place",mapPosition:[{location:"",bearing:0,center:[-122.41941550000001,37.7749295],zoom:12,pitch:0},{location:"SPUR",bearing:0,center:[-122.4012586,37.7871654],zoom:12,pitch:0},{location:"The Women’s Building",bearing:0,center:[-122.4226539,37.7615596],zoom:12,pitch:0}],image:"/posts/san francisco/Introduction/resized/sanfrancisco01.jpg",languages:{en:!0,ja:!1}},{slug:"hiphoparchitecture",city:"los angeles",title:" Hip-Hop architecture",description:' \nSeveral days ago I got to know a brand new theory (at least for me) that is called "Hip-Hop Architecture" by participating an event hosted by MOCA - The Museum of Contemporary Art, Los Angeles.\n\nIt featured...',url:"/los angeles/hiphoparchitecture",public:!0,date:"7/01/2018",category:"essay",image:"/posts/los angeles/hiphoparchitecture/resized/hiphop01.jpg",mapPosition:[{location:"",bearing:0,center:[-118.27631359999998,34.0543414],zoom:12,pitch:0}],languages:{en:!0,ja:!1}},{slug:"BlackBeverlyHills",city:"los angeles",title:" This is not about race, but it is - gentrification of The black Beverly Hills",description:'  Introduction\n\n\nFrank Ocean\'s song Sweet life depicts the life in Ladera Heights - "the black Beverly Hills".\n\n- about the event\n- About View Park\nhttps://la.curbed.com/2016/7/23/12254048/view-park-national...',url:"/los angeles/BlackBeverlyHills",public:!1,date:"6/29/2018",category:"place",mapPosition:[{location:"Ladera Heights",bearing:0,center:[-118.3725116,33.9871561],zoom:12,pitch:0},{location:"Augustus F. Hawkins natural park",bearing:0,center:[-118.34329990000003,33.99954839999999],zoom:12,pitch:0}],image:"/posts/los angeles/BlackBeverlyHills/resized/",languages:{en:!0,ja:!1}},{slug:"arcosanti",city:"arcosanti",title:" Arcosanti, an experimental urban laboratory and desert “utopia”",description:" \nA few weeks ago I had a great opportunity to visit Arcosanti.\n Soleri’s life-long pursuit of “arcology”\n\n\nIt felt almost surreal to visit this experimental town in the middle of nowhere - our car suddenly...",url:"/arcosanti/arcosanti",public:!0,date:"6/27/2018",category:"place",image:"/posts/arcosanti/arcosanti/resized/arcosanti00.jpg",mapPosition:{location:"Arcosanti",bearing:0,center:[-112.10055469999998,34.3425315],zoom:12,pitch:0},languages:{en:!0,ja:!0}},{slug:"littletokyo",city:"los angeles",title:" Little Tokyo",description:" \n<draft Introduction\n- about the event\n- Sekou Cooke\n- Keep Talking Kanye: An Architect's Defense of Kanye West\n What is Hip-Hop Architecture\n- Theory\nHip-Hop Architecture\n-\n Practices\n- Brandnu Design\n...",url:"/los angeles/littletokyo",public:!1,date:"6/26/2018",category:"place",mapPosition:[{location:"Bringing Back Broadway",bearing:0,center:[-118.481293,34.0250545],zoom:12,pitch:0}],image:"/posts/los angeles/littletokyo/resized/",languages:{en:!0,ja:!1}},{slug:"Games",city:"elsewhere",title:" The urbanist’s guide to video games!",description:" \nFew months ago a friend of mine showed me a very interesting website that blew my mind — Parable of Polygons: an playable post on the shape of society. It shows a simulation of segregation that is playfully...",url:"/elsewhere/Games",public:!0,date:"6/26/2018",category:"essay",image:"/posts/elsewhere/Games/resized/game03.jpg",languages:{en:!0,ja:!1}},{slug:"Introduction",city:"amsterdam",title:" Things to do and read for urbanists @Amsterdam",description:" \n\n Things to do, places/project to check out\n\n1.\n Read\n\n- a city made by people\n Organization / initiative\n\n13. Amsterdam-based CASCOLANDis an international network of artists, architects, designers and...",url:"/amsterdam/Introduction",public:!1,date:"6/26/2018",category:"place",mapPosition:[{location:"Bringing Back Broadway",bearing:0,center:[-118.481293,34.0250545],zoom:12,pitch:0},{location:"Augustus F. Hawkins natural park",bearing:0,center:[-118.2464493,33.9900691],zoom:12,pitch:0},{location:"EIGHTYTWO",bearing:0,center:[-118.23744390000002,34.0454001],zoom:12,pitch:0},{location:"HAUSER & WIRTH",bearing:0,center:[-118.23487999999998,34.046146],zoom:12,pitch:0},{location:"Art Share L.A.",bearing:0,center:[-118.23640720000003,34.0445952],zoom:12,pitch:0},{location:"GALLERIES AT SCI-ARC",bearing:0,center:[-118.23289219999998,34.0450119],zoom:12,pitch:0},{location:"Hollyhock House",bearing:0,center:[-118.29440799999998,34.0999515],zoom:12,pitch:0},{location:"Ennis House",bearing:0,center:[-118.29278959999999,34.1161926],zoom:12,pitch:0},{location:"Skid Row Housing Trust",bearing:0,center:[-118.2480433,34.0434704],zoom:12,pitch:0}],image:"/posts/amsterdam/Introduction/resized/",languages:{en:!0,ja:!1}},{slug:"Introduction",city:"los angeles",title:" Things to do and read for urbanists @Los Angeles",description:" \n\n Things to do, places/project to check out\n\n1. Downtown Los Angeles's Art Walk\n\n2. A public program that lets people to build a community parklet easily: People St program\n\n3. A 10-year economic development...",url:"/los angeles/Introduction",public:!0,date:"6/26/2018",category:"place",mapPosition:[{location:"Bringing Back Broadway",bearing:0,center:[-118.481293,34.0250545],zoom:12,pitch:0},{location:"Augustus F. Hawkins Natural Park",bearing:0,center:[-118.2464493,33.9900691],zoom:12,pitch:0},{location:"EIGHTYTWO",bearing:0,center:[-118.23744390000002,34.0454001],zoom:12,pitch:0},{location:"HAUSER & WIRTH",bearing:0,center:[-118.23487999999998,34.046146],zoom:12,pitch:0},{location:"Art Share L.A.",bearing:0,center:[-118.23640720000003,34.0445952],zoom:12,pitch:0},{location:"GALLERIES AT SCI-ARC",bearing:0,center:[-118.23289219999998,34.0450119],zoom:12,pitch:0},{location:"Hollyhock House",bearing:0,center:[-118.29440799999998,34.0999515],zoom:12,pitch:0},{location:"Ennis House",bearing:0,center:[-118.29278959999999,34.1161926],zoom:12,pitch:0},{location:"Skid Row Housing Trust",bearing:0,center:[-118.2480433,34.0434704],zoom:12,pitch:0}],image:"/posts/los angeles/Introduction/resized/losangeles02.jpg",languages:{en:!0,ja:!1}},{slug:"Introduction",city:"new york",title:" Things to do and read for urbanists @New York",description:" \n\n Things to do, places/project to check out\n\n1.\n Read\n\n11.\n Organization, initiative\n\n13. BMW Guggenheim Lab is an 'traveling' urban think tank/laboratory and community center. Unfortunately it's not...",url:"/new york/Introduction",public:!1,date:"6/26/2018",category:"place",mapPosition:[{location:"Van Alen Institute",bearing:0,center:[-73.99183089999997,40.74139729999999],zoom:12,pitch:0},{location:"",bearing:0,center:[-118.2464493,33.9900691],zoom:12,pitch:0},{location:"",bearing:0,center:[-118.23744390000002,34.0454001],zoom:12,pitch:0},{location:"",bearing:0,center:[-118.23487999999998,34.046146],zoom:12,pitch:0},{location:"",bearing:0,center:[-118.23640720000003,34.0445952],zoom:12,pitch:0},{location:"",bearing:0,center:[-118.23289219999998,34.0450119],zoom:12,pitch:0},{location:"",bearing:0,center:[-118.29440799999998,34.0999515],zoom:12,pitch:0},{location:"",bearing:0,center:[-118.29278959999999,34.1161926],zoom:12,pitch:0},{location:"",bearing:0,center:[-118.2480433,34.0434704],zoom:12,pitch:0}],image:"/posts/new york/Introduction/resized/",languages:{en:!0,ja:!1}},{slug:"Chapainterview",city:"austin",title:" Interview — Kristine Stiphany, a founder/director of Chapa urban studio",description:" \n\n\n\n\nThank you very much for your time. First of all, please introduce yourself and what you’re currently doing.\n\nStiphany:\n",url:"/austin/Chapainterview",public:!1,date:"6/03/2018",category:"interview",mapPosition:{location:"Texas Tech University",bearing:0,center:[-101.8782822,33.5842591],zoom:12,pitch:0},image:"/posts/austin/Chapainterview/resized/",languages:{en:!0,ja:!1}},{slug:"Introduction",city:"tokyo",title:" Things to do and read for urbanists @Tokyo",description:" \n\n Things to do, places/project to check out\n\n- Participate URBANING_U which is a two day camp, that let you learn more about Tokyo thorough urbanist's perspective.\n\n- If you're an cyclist and want to...",url:"/tokyo/Introduction",public:!0,date:"6/01/2018",category:"intro",mapPosition:[{location:"Art Center Ongoing",bearing:0,center:[139.58269240000004,35.7083691],zoom:12,pitch:0}],image:"/posts/tokyo/Introduction/resized/tokyo01.jpg",languages:{en:!0,ja:!1}},{slug:"Seaholm_EcoDistrict",city:"austin",title:" Seaholm EcoDistrict - Austin's sustainable urban renewal",description:" \nSeaholm EcoDistrict is an 85-acre urban development on the edge of downtown - it once used to be the city-owned power plant and a water treatment facility. After the power plant was decommissioned in...",url:"/austin/Seaholm_EcoDistrict",public:!0,date:"5/31/2018",category:"place",mapPosition:{location:"Seaholm EcoDistrict",bearing:0,center:[-97.7518561,30.2660292],zoom:12,pitch:0},image:"/posts/austin/Seaholm_EcoDistrict/resized/Seaholm01.jpg",languages:{en:!0,ja:!1}},{slug:"Mueller",city:"austin",title:" Mueller - a former industrial zone to a sustainable enclave",description:"  Mueller doesn't look like anywhere else in Austin\n\nDuring my stay in Austin, I had a chance to visit a neighborhood called Mueller - Austin's 700-acre wide 'showplace' of new urbanism and enlightened...",url:"/austin/Mueller",public:!0,date:"5/28/2018",category:"place",mapPosition:{location:"Mueller",bearing:0,center:[-97.70094159999996,30.29841529999999],zoom:12,pitch:0},image:"/posts/austin/Mueller/resized/Meuller01.jpg",languages:{en:!0,ja:!1}},{slug:"Introduction",city:"austin",title:" Urbanism-Related Things to do and read @Austin",description:" \n Things to do, places to go\n\n1. Austin’s “new urbanist enclave”, Mueller\nRead: How One City Turned Industrial Zones Into Green Enclaves\n\n2. Fostering conservation and reuse through creativity, education...",url:"/austin/Introduction",public:!0,date:"5/28/2018",category:"place",mapPosition:[{location:"Mueller",bearing:0,center:[-97.70094159999996,30.29841529999999],zoom:12,pitch:0},{location:"CRAFT",bearing:0,center:[-97.70247119999999,30.2526366],zoom:12,pitch:0},{location:"Movability",bearing:0,center:[-97.74069420000001,30.2682578],zoom:12,pitch:0},{location:"Austin Creative Reuse",bearing:0,center:[-97.708143,30.3266615],zoom:12,pitch:0}],image:"/posts/austin/Introduction/resized/Austin01.jpeg",languages:{en:!0,ja:!1}},{slug:"CreativeReuse",city:"austin",title:" Austin Creative Reuse",description:" \n\n\nI found this little place called Austin Creative Reuse, which is run by a nonprofit organization that collects, sells, and distributes donated articles. They focus on a community building for smarter...",url:"/austin/CreativeReuse",public:!0,date:"5/28/2018",category:"place",mapPosition:{location:"Austin Creative Reuse",bearing:0,center:[-97.708143,30.3266615],zoom:12,pitch:0},image:"/posts/austin/CreativeReuse/resized/CreativeReuse01.jpg",languages:{en:!0,ja:!1}},{slug:"Books",city:"elsewhere",title:" 9 beautiful books on urban analysis and research",description:" \nThere are many great books out there on urban planning and design, but I realized not many of them quite sum up the full scope of roles of urban analysis and research. I believe that analytical process...",url:"/elsewhere/Books",public:!0,date:"5/25/2018",category:"essay",image:"/posts/elsewhere/Books/resized/Book01.jpg",languages:{en:!0,ja:!1}},{slug:"renovationschooltokyo",city:"tokyo",title:" What I learned at “Renovation School” in Tokyo",description:" \n\nHave you ever heard of the “Renovation School” in Japan?\n\nYou might already know that Japan is experiencing a rapid degeneration due to the declining population. This decline raises a lot of social...",url:"/tokyo/renovationschooltokyo",public:!0,date:"5/14/2018",category:"essay",mapPosition:{location:"Ikegami",bearing:0,center:[139.7029729,35.5720944],zoom:12,pitch:0},image:"/posts/tokyo/renovationschooltokyo/resized/Renovationschool01.jpg",languages:{en:!0,ja:!1}},{slug:"HackMyCity",city:"tokyo",title:" Event report: “Hack My City” — Connecting the Urban Scales from XS to XL",description:" \n\n\nIn March 2018, some of my colleagues and I had an opportunity to invite some of the most prominent practitioners in the field of urban community planning in Japan to our one-day event “Hack my City”...",url:"/tokyo/HackMyCity",public:!0,date:"3/13/2018",category:"essay",mapPosition:{location:"100Banch",bearing:0,center:[139.7047394,35.6559546],zoom:12,pitch:0},image:"https://cdn-images-1.medium.com/max/2000/0*IEAJ4RS-SlSJcmKu.jpg",languages:{en:!0,ja:!1}},{slug:"alternativespot",city:"kuala lumpur",title:" 2 alternative spots to visit in Kuala Lumpur",description:" \n\nFew months ago I found this interesting website ALTERNATIVE ASIA, which introduces the interesting independent art spaces in the south east Asian countries. Most of these spaces are owned and managed...",url:"/kuala lumpur/alternativespot",public:!0,date:"2/16/2018",category:"place",mapPosition:[{location:"Fab Space",bearing:0,center:[101.711938,3.146229],zoom:12,pitch:0},{location:"APW Bangstar",bearing:0,center:[101.67408690000002,3.1243255],zoom:12,pitch:0}],image:"https://cdn-images-1.medium.com/max/8000/1*RWd-sME5koYGLTK8jrDlrA.jpeg",languages:{en:!0,ja:!1}},{slug:"urbanistmeetuptokyo",city:"tokyo",title:" Urbanist MeetUp Tokyo: Examining the role of “urbanists” in improving urban life in Tokyo",description:" \n\n\nLast year, I organized an “Urbanist Meetup Tokyo”, and this post aims to discuss the importance of interdisciplinary collaboration among the people who understand urbanity and love the cities we live...",url:"/tokyo/urbanistmeetuptokyo",public:!0,date:"12/12/2017",category:"essay",mapPosition:{location:"100Banch",bearing:0,center:[139.7047394,35.6559546],zoom:12,pitch:0},image:"https://cdn-images-1.medium.com/max/2000/1*KhR9gu4HI_5x8PeRTYHBdw.jpeg",languages:{en:!0,ja:!1}},{slug:"subjectivemapworkshop",city:"tokyo",title:" Subjective Map Workshop #Shibuya",description:" \nIn 2017 December, I organized a workshop to encourage people to make their own map based on their own subjective experiences of a city. This article explains the philosophy behind this workshop as well...",url:"/tokyo/subjectivemapworkshop",public:!0,date:"12/9/2017",category:"essay",mapPosition:{location:"Shibuya",bearing:0,center:[139.70405059999996,35.6617773],zoom:12,pitch:0},image:"https://cdn-images-1.medium.com/max/5248/1*aHOJjlyLmGAcIGlTtX3JIA.jpeg",languages:{en:!0,ja:!1}},{slug:"Interview Illutron",city:"Copenhagen",title:" Interview: ILLLUTRON, a maker space that moves across the Copenhagen port",description:" \n\n\nI manage to have an interview with Vanessa Carpenter— the co-founders of ILLUTRON, which is a maker space that is anchored at the port in Copenhagen, Denmark. It is a renovated 400-ton old ship and...",url:"/Copenhagen/Interview Illutron",public:!0,date:"9/26/2017",category:"interview",mapPosition:{location:"Illutron",bearing:0,center:[12.61235350000004,55.6930383],zoom:12,pitch:0},image:"/posts/Copenhagen/Interview Illutron/resized/illutron01.jpg",languages:{en:!0,ja:!1}},{slug:"globalgoalsjam17",city:"tokyo",title:" Design sprints for sustainable development goals: a recap from Global Goals Jam 2017 #Tokyo",description:" \n\n\nOn 16th-17th September 2017, I had the honor of hosting the first edition of the #GlobalGoalsJam — we invited various professionals, designers, creators, and students from more than 10 countries to...",url:"/tokyo/globalgoalsjam17",public:!0,date:"9/17/2017",category:"essay",mapPosition:{location:"100Banch",bearing:0,center:[139.7047394,35.6559546],zoom:12,pitch:0},image:"https://cdn-images-1.medium.com/max/1000/1*K1mn1ASdXth8VQYs1zMJ_w.jpeg",languages:{en:!0,ja:!1}},{slug:"Interview ChristianDimmer",city:"tokyo",title:" Interview — Christian Dimmer, Urban Studies Prof of Waseda University",description:" \nI had a great opportunity to interview Christian Dimmer, a space / environment designer who is teaching Urbanism at Waseda University. He has been living in Tokyo for over 15 years to understand Japanese...",url:"/tokyo/Interview ChristianDimmer",public:!0,date:"11/24/2016",category:"essay",mapPosition:{bearing:0,center:[139.7047394,35.6559546],zoom:12,pitch:0},image:"https://cdn-images-1.medium.com/max/2000/0*Y41HHAW-LzUp2QoP.jpg",languages:{en:!0,ja:!1}},{slug:"Introduction",city:"vienna",title:" Urbanism-Related Things to do and read @Vienna",description:" \n\n Things to do, places to go\n\n1. An art & cultural center in the bread factory — Brotfabrik. Perfect example for an adaptive reuse without being too touristic.\n\n2. Das Packhaus: The temporary use project...",url:"/vienna/Introduction",public:!0,date:"4/13/2015",category:"place",mapPosition:{location:"Vienna",bearing:0,center:[16.37381890000006,48.2081743],zoom:12,pitch:0},image:"/posts/vienna/Introduction/resized/jacek-dylag-579742-unsplash.jpg",languages:{en:!0,ja:!1}}]},I1WX:function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,"",""])},"JLJ+":function(t,e,i){"use strict";var o=i("yqLL"),a=i("Envs"),n=i("pTCL"),s=i("nNrl");i.n(s);e.a={head:function(){return{title:this.capitalize(this.category)}},components:{Footer:o.default,PostList:a.a,Selector:n.a},asyncData:function(t){var e=t.route,o=t.redirect,a=t.isStatic,n=e.path.replace("/is/","").replace("/","").replace("_"," ").replace("%20"," ").toLowerCase(),s=[];try{s=i("GTTH")}catch(t){console.log(t)}return a&&(s=s.filter(function(t){return t.public})),s&&0!==s.length?1===(s=s.filter(function(t){return t.category&&t.category.toLowerCase()===n})).length?o(s[0].url):{posts:s,category:n}:o("/")},computed:{isMobile:function(){return this.$store.state.isMobile}},mounted:function(){this.$store.commit("setMapMarkers",this.posts)},methods:{capitalize:s.capitalize}}},L5OA:function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,".footer[data-v-0d2d6594]{margin:-48px;margin-top:96px;color:#fff;background:#222;padding:48px}.footer [data-v-0d2d6594]{text-align:center}@media (max-width:768px){.footer[data-v-0d2d6594]{margin:-18px;margin-top:36px;padding:18px}}",""])},LkRW:function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,".selectorframe[data-v-531f34ba]{display:grid;grid-template-columns:120px 1fr;grid-gap:18px}.selectorframe .sectionhead[data-v-531f34ba]{margin:0;margin-top:9px}@media (max-width:768px){.selectorframe[data-v-531f34ba]{grid-template-columns:1fr;grid-gap:0}.selectorframe .sectionhead[data-v-531f34ba]{text-align:left;margin-top:0}}.selector[data-v-531f34ba]{margin-bottom:24px}@media (max-width:768px){.selector[data-v-531f34ba]{margin-bottom:12px}}.toggle[data-v-531f34ba]{margin-left:6px;opacity:.3;font-size:.7em;display:inline-block;-webkit-transition:all .2s;transition:all .2s;-webkit-transform:rotate(0deg);transform:rotate(0deg)}.toggle.open[data-v-531f34ba]{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.buttonlist[data-v-531f34ba]{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:stretch;-ms-flex-pack:stretch;justify-content:stretch;text-align:center}.buttonlist .sub[data-v-531f34ba]{border:2px solid transparent;padding:6px 9px;-webkit-box-shadow:none;box-shadow:none;-webkit-box-flex:1;-ms-flex:1;flex:1;white-space:nowrap}@media (max-width:768px){.buttonlist .sub[data-v-531f34ba]{padding:6px 0}}.button[data-v-531f34ba]{-ms-flex-negative:0;flex-shrink:0;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1}",""])},"MYt/":function(t,e,i){"use strict";i.d(e,"a",function(){return o}),i.d(e,"b",function(){return a});var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",{staticClass:"sub"},[i("nuxt-link",{staticClass:"sublink",attrs:{to:"/is/"+t.category.toLowerCase()}},[t._v(t._s(t.capitalize(t.category)))]),t._v(" ・\n\t\t"),t.mapPosition&&!Array.isArray(t.mapPosition)&&t.mapPosition.location?i("span",[i("nuxt-link",{staticClass:"sublink",attrs:{to:"/at/"+t.mapPosition.location.toLowerCase()}},[t._v(t._s(t.mapPosition.location))]),t._v(t._s(t.cityIsLocation?" ・ ":", ")+"\n\t\t")],1):t._e(),t.cityIsLocation?t._e():i("span",[i("nuxt-link",{staticClass:"sublink",attrs:{to:"/"+t.city}},[t._v(t._s(t.capitalize(t.city)))]),t._v(" ・\n\t\t")],1),t._v("\n\t\t"+t._s(new Date(t.date).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"}))+"\n\t")],1)},a=[];o._withStripped=!0},Xo8E:function(t,e,i){var o=i("LkRW");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,i("rjj0").default)("23ec7e33",o,!1,{sourceMap:!1})},f3rP:function(t,e,i){"use strict";var o=i("A4bo");e.a={props:{posts:{type:Array,required:!0},perPage:{type:Number,required:!1,default:5},title:{type:String,required:!1}},components:{PostPreview:o.a},data:function(){return{shownPostCount:this.perPage}},computed:{isDev:function(){return this.$store.state.isDev},showablePosts:function(){return this.isDev?this.posts:this.posts.filter(function(t){return!0===t.public})},totalPosts:function(){return this.showablePosts.length},postsToShow:function(){return this.showablePosts.slice(0,this.shownPostCount)}},mounted:function(){},methods:{}}},iayL:function(t,e,i){"use strict";var o=i("fZjL"),a=i.n(o),n=i("nNrl"),s=(i.n(n),i("GTTH"));e.a={props:{hide:{required:!1,type:String},type:{required:!1,type:String,default:"city"},title:{required:!1,default:"Cities"},urlPrefix:{required:!1,default:""},cutoff:{required:!1,type:Number,default:10},moreHint:{required:!1,type:Boolean,default:!0}},data:function(){return{showAll:!1,isOpen:!1}},computed:{isMobile:function(){return this.$store.state.isMobile},isDev:function(){return this.$store.state.isDev},usablePosts:function(){return this.isDev?s:s.filter(function(t){return t.public})},orderedItems:function(){var t=this,e={};return this.usablePosts.forEach(function(i){var o=i[t.type].toLowerCase();t.hide&&o===t.hide.toLowerCase()||(e[o]=e[o]?e[o]+1:1)}),a()(e).sort(function(t,i){return e[t]<e[i]})},responsiveCutoff:function(){return parseInt(this.cutoff/(this.isMobile?2:1))},itemsToShow:function(){return console.log(),this.showAll?this.orderedItems:this.orderedItems.slice(0,this.responsiveCutoff)}},methods:{capitalize:n.capitalize}}},lUD4:function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,".draft[data-v-5264528e]{opacity:.4}",""])},lnP0:function(t,e,i){var o=i("L5OA");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,i("rjj0").default)("c56fe6d0",o,!1,{sourceMap:!1})},msLx:function(t,e){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMzMzcHgiIGhlaWdodD0iMjM0cHgiIHZpZXdCb3g9IjAgMCAzMzMgMjM0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0My4xICgzOTAxMikgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+R3JvdXA8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz4KICAgICAgICA8cmVjdCBpZD0icGF0aC0xIiB4PSIwIiB5PSIwIiB3aWR0aD0iMzMzIiBoZWlnaHQ9IjIzNCI+PC9yZWN0PgogICAgPC9kZWZzPgogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9Ikdyb3VwIj4KICAgICAgICAgICAgPGcgaWQ9IlJlY3RhbmdsZSI+CiAgICAgICAgICAgICAgICA8dXNlIGZpbGw9IiNGRkZGRkYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+CiAgICAgICAgICAgICAgICA8cmVjdCBzdHJva2Utb3BhY2l0eT0iMC40NDAyNDU2OTciIHN0cm9rZT0iIzk3OTc5NyIgc3Ryb2tlLXdpZHRoPSIxMSIgeD0iNS41IiB5PSI1LjUiIHdpZHRoPSIzMjIiIGhlaWdodD0iMjIzIj48L3JlY3Q+CiAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPGNpcmNsZSBpZD0iT3ZhbCIgZmlsbD0iI0ZGMDAwMCIgY3g9IjE2NyIgY3k9IjExNyIgcj0iNjQiPjwvY2lyY2xlPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"},nGv6:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=i("JLJ+"),a=i("u7Qp"),n=i("XyMi"),s=!1;var r=function(t){s||i("+kJY")},c=Object(n.a)(o.a,a.a,a.b,!1,r,"data-v-1e9d4cb1",null);c.options.__file="pages/is/_category.vue",e.default=c.exports},nNrl:function(t,e){e.capitalize=function(t){return t?t.split(" ").map(function(t){return t.substring(0,1).toUpperCase()+t.substring(1)}).join(" "):""},e.log=function(t){for(var e,i={red:"[31m",green:"[32m",yellow:"[33m",blue:"[34m",magenta:"[35m",cyan:"[36m",white:"[37m"},o=arguments.length,a=Array(o>1?o-1:0),n=1;n<o;n++)a[n-1]=arguments[n];(e=console).log.apply(e,[i[t]||i.green].concat(a,["[0m"]))}},"o+QU":function(t,e,i){var o=i("lUD4");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,i("rjj0").default)("19adcc7a",o,!1,{sourceMap:!1})},oir9:function(t,e,i){"use strict";var o=i("nNrl"),a=(i.n(o),i("v6Qx"));e.a={props:["url","image","title","category","city","date","description","mapPosition","languages"],components:{PostDetails:a.a},computed:{currentLanguage:function(){return this.$store.state.language}},methods:{capitalize:o.capitalize,mouseOver:function(){this.$store.commit("setHighlight",this.mapPosition)},mouseOut:function(){this.$store.commit("setHighlight")}}}},ors2:function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,"",""])},pTCL:function(t,e,i){"use strict";var o=i("iayL"),a=i("EE7M"),n=i("XyMi"),s=!1;var r=function(t){s||i("Xo8E")},c=Object(n.a)(o.a,a.a,a.b,!1,r,"data-v-531f34ba",null);c.options.__file="components/Selector.vue",e.a=c.exports},u7Qp:function(t,e,i){"use strict";i.d(e,"a",function(){return o}),i.d(e,"b",function(){return a});var o=function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"content"},[e("div",{staticClass:"content-top-full mini gray"},[e("Selector",{attrs:{type:"category",title:"Categories",moreHint:!1,urlPrefix:"is/"}})],1),e("PostList",{attrs:{posts:this.posts,title:this.category}}),e("Footer")],1)},a=[];o._withStripped=!0},v6Qx:function(t,e,i){"use strict";var o=i("BAfT"),a=i("MYt/"),n=i("XyMi"),s=!1;var r=function(t){s||i("GCp+")},c=Object(n.a)(o.a,a.a,a.b,!1,r,"data-v-fc85e312",null);c.options.__file="components/PostDetails.vue",e.a=c.exports},xSm0:function(t,e,i){"use strict";i.d(e,"a",function(){return o}),i.d(e,"b",function(){return a});var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"post-list"},[t.title?i("h3",{staticClass:"sectionhead"},[t._v(t._s(t.title))]):t._e(),i("transition-group",{attrs:{name:"fade"}},t._l(t.postsToShow,function(e,o){return i("PostPreview",t._b({key:o,class:{draft:!0!==e.public}},"PostPreview",e,!1))})),t.shownPostCount<t.totalPosts?i("div",{staticClass:"button secondary full showall",on:{click:function(e){t.shownPostCount+=t.perPage}}},[t._v("\n\t\t\tShow more posts\n    ")]):t._e()],1)},a=[];o._withStripped=!0},yqLL:function(t,e,i){"use strict";var o=i("4kk+"),a=i.n(o),n=i("6Bn+"),s=i("XyMi"),r=!1;var c=function(t){r||i("lnP0")},l=Object(s.a)(a.a,n.a,n.b,!1,c,"data-v-0d2d6594",null);l.options.__file="components/Footer.vue",e.default=l.exports},zNXz:function(t,e,i){"use strict";i.d(e,"a",function(){return o}),i.d(e,"b",function(){return a});var o=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",t._g({staticClass:"post-preview"},{mouseover:t.mouseOver,mouseout:t.mouseOut}),[o("nuxt-link",{attrs:{to:t.url}},[o("div",{staticClass:"previewimage",style:{"background-image":"url('"+t.image+"')"}})]),o("div",[o("nuxt-link",{staticClass:"titlelink",attrs:{to:t.url}},[o("h4",[t._v(t._s(t.title))])]),"ja"===t.currentLanguage&&t.languages.ja?o("div",{staticClass:"japanese-available"},[o("img",{staticClass:"flag-icon",attrs:{src:i("msLx")}}),o("span",{staticClass:"sub"},[t._v("日本語版あり")])]):t._e(),o("PostDetails",{attrs:{category:t.category,mapPosition:t.mapPosition,city:t.city,date:t.date}}),o("div",[t._v("\n      "+t._s(t.description)+"\n      "),o("nuxt-link",{attrs:{to:t.url}},[t._v("Keep Reading →")])],1)],1)],1)},a=[];o._withStripped=!0}});