(function(){"use strict";var e={6929:function(e,t,o){var r=o(9242),i=o(3396);function n(e,t,o,r,n,a){return(0,i.wg)(),(0,i.j4)((0,i.LL)(a.currentView))}var a=o(7139);const l={id:"Home"},s=(0,i.uE)('<div id="mainTitle"><span id="firstWord">Welcome </span><span id="secondWord">to </span><br><span id="thirdWord">Matthew </span><span id="fourthWord">Ghera&#39;s </span><br><span id="fifthWord">Website </span></div>',1);function d(e,t,o,r,n,d){return(0,i.wg)(),(0,i.iD)("div",l,[((0,i.wg)(),(0,i.iD)(i.HY,null,(0,i.Ko)(50,(e=>(0,i._)("div",{key:e,class:"magicRow"},[((0,i.wg)(),(0,i.iD)(i.HY,null,(0,i.Ko)(50,(t=>(0,i._)("div",{key:t,class:"magicCol"},[d.checkIfExists(e,t)?((0,i.wg)(),(0,i.iD)("div",{key:0,class:"magicItem",style:(0,a.j5)(d.brightenUp())},null,4)):d.checkIfExisted(e,t)?((0,i.wg)(),(0,i.iD)("div",{key:1,class:"oldMagicItem",style:(0,a.j5)(d.change())},null,4)):(0,i.kq)("",!0)]))),64))]))),64)),s,(0,i._)("div",{id:"enter",onClick:t[0]||(t[0]=e=>d.goToNextPage())}," ENTER ")])}var c={name:"Home",data(){return{randRow:[-1],randCol:[-1],lastHoriz:"left",lastVert:"down",oldRow:[-1],oldCol:[-1],magicInterval:null}},methods:{brightenUp(){return{background:"rgb(255,255,0)",boxShadow:"0px 0px 3rem 1.5rem rgb(220,170,40)"}},change(){return{background:"rgb(255,255,150)",boxShadow:"0px 0px 1rem .5rem rgb(255,200,100)",animation:"flickerAnimation 1s infinite"}},checkIfExisted(e,t){let o=!1,r=[],i=!1;return this.oldRow.forEach(((t,o)=>{t==e&&r.push(o)})),this.oldCol.forEach(((e,o)=>{e==t&&r.includes(o)&&(i=!0)})),this.oldRow.includes(e)&&this.oldCol.includes(t)&&i&&(o=!0),o},checkIfExists(e,t){let o=!1,r=[],i=!1;return this.randRow.forEach(((t,o)=>{t==e&&r.push(o)})),this.randCol.forEach(((e,o)=>{e==t&&r.includes(o)&&(i=!0)})),this.randRow.includes(e)&&this.randCol.includes(t)&&i&&(o=!0),o},goToNextPage(){clearInterval(this.magicInterval),window.location.href.indexOf("#")>-1?window.location=window.location.href+"Gallery":window.location=window.location.href+"#/Gallery"}},props:{},computed:{},mounted:function(){this.magicInterval=setInterval((()=>{if(-1==this.randRow[0]||-1==this.randCol[0]){this.randRow[0]=Math.floor(25*Math.random())+12,this.randCol[0]=Math.floor(25*Math.random())+12;for(let e=0;e<6;e++){const e=360*Math.random();let t=Math.cos(e*Math.PI/180)*(8*Math.random()+1),o=Math.sin(e*Math.PI/180)*(12*Math.random()+1);this.randRow.push(Math.floor(this.randRow[0]+o)),this.randCol.push(Math.floor(this.randCol[0]+t))}}else{let e=Math.floor(20*Math.random())+1,t=Math.floor(20*Math.random())+1;50==this.randRow[0]?(this.randRow[0]-=1,this.lastVert="down"):0==this.randRow[0]?(this.randRow[0]+=1,this.lastVert="up"):"down"==this.lastVert?e<=19?(this.randRow[0]-=1,this.lastVert="down"):(this.randRow[0]+=1,this.lastVert="up"):e<=19?(this.randRow[0]+=1,this.lastVert="up"):(this.randRow[0]-=1,this.lastVert="down"),50==this.randCol[0]?(this.randCol[0]-=1,this.lastHoriz="left"):0==this.randCol[0]?(this.randCol[0]+=1,this.lastHoriz="right"):"left"==this.lastHoriz?t<=19?(this.randCol[0]-=1,this.lastHoriz="left"):(this.randCol[0]+=1,this.lastHoriz="right"):t<=19?(this.randCol[0]+=1,this.lastHoriz="right"):(this.randCol[0]-=1,this.lastHoriz="left"),this.randRow.forEach(((e,t)=>{t&&(this.randRow[t]-this.randRow[0]>2?this.randRow[t]-=3:this.randRow[t]-this.randRow[0]<-2?this.randRow[t]+=3:this.randRow[t]+=Math.floor(2*Math.random())-1,this.randCol[t]-this.randCol[0]>2?this.randCol[t]-=3:this.randCol[t]-this.randCol[0]<-2?this.randCol[t]+=3:this.randCol[t]+=Math.floor(2*Math.random())-1);let o=Math.floor(50*Math.random());o<10&&(this.oldRow.push(this.randRow[t]),this.oldCol.push(this.randCol[t])),this.oldRow.length>40&&(this.oldRow.shift(),this.oldCol.shift())}))}}),0)}},u=o(89);const h=(0,u.Z)(c,[["render",d]]);var g=h;const p={id:"Gallery"},m=(0,i._)("div",{id:"galleryTitle"},"The Gallery",-1);function w(e,t,o,r,n,a){const l=(0,i.up)("routeBtn"),s=(0,i.up)("projectContainer");return(0,i.wg)(),(0,i.iD)("div",p,[(0,i.Wm)(l,{site:"Exit",id:"exitBtn"}),m,((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(n.projects,(e=>((0,i.wg)(),(0,i.iD)("div",{key:e},[(0,i.Wm)(s,{title:e.title,color:e.color,description:e.description,video:e.video,skills:e.skills,link:e.link},null,8,["title","color","description","video","skills","link"])])))),128))])}const f={id:"projectContainer"},b={id:"body"},k={id:"description"},v=(0,i._)("br",null,null,-1),y={key:0},C=["href"],M=["href"],R={id:"video"},D=["innerHTML"];function x(e,t,o,r,n,l){const s=(0,i.up)("skillTag");return(0,i.wg)(),(0,i.iD)("div",f,[(0,i._)("div",{id:"title",style:(0,a.j5)(l.getTitleColor())},(0,a.zw)(o.title),5),(0,i._)("hr",{style:(0,a.j5)(l.getHRColor())},null,4),(0,i._)("div",b,[(0,i._)("div",k,[(0,i.Uk)((0,a.zw)(o.description)+" ",1),v,o.link.link?((0,i.wg)(),(0,i.iD)("div",y,[o.link.github?((0,i.wg)(),(0,i.iD)("a",{key:0,href:o.link.link,target:"_blank",class:"gitHubLink"},"Go to the GitHub",8,C)):((0,i.wg)(),(0,i.iD)("a",{key:1,href:o.link.link,target:"_blank",class:"projectLink",style:(0,a.j5)(l.getTitleColor())},"Go to the Project!",12,M))])):(0,i.kq)("",!0)]),(0,i._)("div",R,[(0,i._)("div",{innerHTML:o.video,style:(0,a.j5)(l.getBorderColor())},null,12,D)])]),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(o.skills,(e=>((0,i.wg)(),(0,i.iD)("span",{id:"skills",key:e},[(0,i._)("span",null,[(0,i.Wm)(s,{skill:e,color:o.color},null,8,["skill","color"])])])))),128))])}function j(e,t,o,r,n,l){return(0,i.wg)(),(0,i.iD)("div",{id:"skillTag",style:(0,a.j5)(l.getColor())},(0,a.zw)(o.skill),5)}var P={name:"skillTag",data(){return{}},methods:{getColor(){let e="white";return"White"!=this.color&&"Yellow"!=this.color||(e="rgb(130,130,130)"),{color:e,background:this.color,boxShadow:`0px 0px .75rem .125rem ${this.color}`}}},props:{skill:String,color:String},computed:{},mounted:function(){}};const H=(0,u.Z)(P,[["render",j]]);var S=H,B={name:"projectContainer",data(){return{}},methods:{getTitleColor(){return{color:this.color,textShadow:`0rem 0rem 2rem ${this.color}, 0rem 0rem 5rem ${this.color}`}},getHRColor(){return{height:"0.2rem",border:"none","background-color":this.color}},getBorderColor(){return{boxShadow:`0px 0px 1.5rem .75rem ${this.color}`}}},props:{title:String,color:String,description:String,video:String,skills:Array,link:Object},computed:{},components:{skillTag:S},mounted:function(){}};const _=(0,u.Z)(B,[["render",x]]);var T=_;function I(e,t,o,r,n,l){return(0,i.wg)(),(0,i.iD)("div",{id:"routeBtn",onClick:t[0]||(t[0]=e=>l.changeRoute())},(0,a.zw)(o.site),1)}var A={name:"routeBtn",data(){return{}},methods:{changeRoute(){let e="";"Exit"!=this.site&&(e=this.site),window.location="http://aquanet.ddnsfree.com/#/"+e}},props:{site:{type:String}},computed:{}};const E=(0,u.Z)(A,[["render",I]]);var W=E,q=JSON.parse('{"q":[{"title":"Dum-E","color":"Yellow","description":"Dum-E is an Iron Man inspired robot. It uses a Raspberry Pi to drive it, and is programmed in Python. It also uses OpenCV to track faces, and three servo motors to follow the tracked face, so that it can move in 3-dimensions. If the room is too dark to detect faces, an led face-light will automatically turn on so that a face can be detected. It has integrated speakers and a microphone to be given audible commands and output audible responses along with playing some music. Dum-E also has an LCD screen to display responses and errors.","video":"<iframe width=\'560\' height=\'315\' src=\'https://www.youtube.com/embed/cBq_qrmsrXQ\' title=\'YouTube video player\' frameborder=\'0\' allow=\'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\' allowfullscreen></iframe>","link":{"link":"https://github.com/mghera02/Dum-E-Bot","github":true},"skills":["Raspberry Pi","Robotics","Motor Control","Python","OpenCV","CAD","3D-Printing","Circuit Design"]},{"title":"Accessible Partner Account Explorer","color":"White","description":"The Accessible Partner Account Explorer is a webpage that I designed, created, and pushed to production during my 2022 internship at Amazon. This is an internal page built for customer support and developers for the sellerCentral Amazon site.","video":"<iframe width=\'560\' height=\'315\' src=\'https://www.youtube.com/embed/0Me9P6x6LBU\' title=\'YouTube video player\' frameborder=\'0\' allow=\'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\' allowfullscreen></iframe>","link":{"link":"","github":false},"skills":["Vue.js","HTML","CSS","JavaScript","Web Design","unit testing","Jest"]},{"title":"H4-KR","color":"Green","description":"H4-KR is a Star Wars inspired droid with a design based off of Chopper from Rebels. H4-KR uses 2 arduinos programmed in C++. Its features are as follows: remote controlled movement via IR remote, semi-autonomous movement using ultrasonic sensor, 10+ diagnostic LEDs, temperature sensor, head movement via servo, hacking capabilities using a ATtiny85.","video":"<iframe width=\'560\' height=\'315\' src=\'https://www.youtube.com/embed/rc-0-Qx7w10\' title=\'YouTube video player\' frameborder=\'0\' allow=\'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\' allowfullscreen></iframe>","link":{"link":"https://github.com/mghera02/starwarsDroid","github":true},"skills":["Arduino","Robotics","C++","CAD","3D-Printing","Motor Control","Circuit Design"]},{"title":"Sith Holocron","color":"Red","description":"This is a Star Wars inspired IoT project. The sith holocron is built using the same Raspberry Pi that is hosting this website. Through the website, users can control the lights and motors embedded in the device and see the output through a live webcam.","video":"<iframe width=\'560\' height=\'315\' src=\'https://www.youtube.com/embed/4KzuhPVkj2g\' title=\'YouTube video player\' frameborder=\'0\' allow=\'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\' allowfullscreen></iframe>","link":{"link":"http://aquanet.ddnsfree.com/#/HolocronPage","github":false},"skills":["Raspberry Pi","PHP","HTML","CSS","JS","Vue.js","CAD","3D-Printing","Motor Control","Circuit Design","Server Management"]},{"title":"SchedLink","color":"Red","description":"SchedLink is a student and teacher portal used to keep track of bell schedules, extracurricular activities, class updates, and digital hall passes. As the CEO and founder, I Identified the business need and technical solution to aid students and faculty, and developed the initial vision, mission, and project management structure for the team.I was also a full stack developer, so I designed and implemented front and back-end systems including: notifications, settings, sign in, create account, extracurricular management, and creating/signing up for classes. SchedLink Achieved 10k unique views/day and eliminated costs for administration by having a free, multi-tool site.","video":"<iframe width=\'560\' height=\'315\' src=\'https://www.youtube.com/embed/HQGwd_BH2-Y\' title=\'YouTube video player\' frameborder=\'0\' allow=\'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\' allowfullscreen></iframe>","link":{"link":"https://schedlink.com/fishers/","github":false},"skills":["HTML","PHP","JS","CSS","Server Management","Project Management","Leadership","Entrepreneurship"]}]}'),z={name:"Gallery",data(){return{projects:q.q,scrollPosition:0}},components:{projectContainer:T,routeBtn:W},methods:{},props:{},computed:{}};const L=(0,u.Z)(z,[["render",w]]);var O=L;const V={id:"holocronPage"},Y={id:"starCollection"},G={id:"kyberCollection"};function $(e,t,o,r,n,l){const s=(0,i.up)("routeBtn"),d=(0,i.up)("star"),c=(0,i.up)("webcam"),u=(0,i.up)("kyberBtn");return(0,i.wg)(),(0,i.iD)("div",V,[(0,i.Wm)(s,{site:"Gallery",id:"routeBtn"}),(0,i._)("div",Y,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(n.starPos,((e,t)=>((0,i.wg)(),(0,i.iD)("div",{key:t},[(0,i.Wm)(d,{style:(0,a.j5)(l.getPos(e))},null,8,["style"])])))),128))]),(0,i.Wm)(c,{id:"webcamBox"}),(0,i._)("div",G,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(n.kyberColors,((e,t)=>((0,i.wg)(),(0,i.iD)("div",{key:t},[(0,i.Wm)(u,{color:e},null,8,["color"])])))),128))])])}function K(e,t,o,r,n,l){return(0,i.wg)(),(0,i.iD)("div",{style:(0,a.j5)([l.starColorSize,l.animationAlter])},null,4)}var Z={name:"star-comp",data(){return{star:"star"}},computed:{starColorSize(){const e=Math.floor(100*Math.random())+1;let t,o=Math.floor(1e4*Math.random())/2e3;return t=e<=1?"rgb(255,50,15)":e<=8?"rgb(120,170,255)":e<=18?"rgb(255,180,255)":e<=38?"rgb(255,230,180)":"white",o>=4.6&&(o*=Math.floor(5*Math.random())),{background:t,boxShadow:`0px 0px ${1.1*o}px ${o}px ${t}`,height:o+"px",width:o+"px",borderRadius:"50%"}},animationAlter(){const e=(Math.floor(1e3*Math.random())+1)/10+3;return{animation:`flickerAnimation ${e}s infinite`}}}};const F=(0,u.Z)(Z,[["render",K]]);var J=F;const N={id:"webcamVid",src:"http://aquanet.ddnsfree.com:8082",height:"240",width:"320"};function U(e,t,o,r,n,a){return(0,i.wg)(),(0,i.iD)("iframe",N)}var Q={name:"webcam"};const X=(0,u.Z)(Q,[["render",U]]);var ee=X,te=o.p+"img/red.7817f488.png",oe=o.p+"img/green.71bc50c6.png",re=o.p+"img/blue.19380f52.png",ie=o.p+"img/cyan.3aa2613f.jpeg",ne=o.p+"img/magenta.d7d9507c.png",ae=o.p+"img/lime.6659e0fa.png",le=o.p+"img/white.0dbcaa89.png";const se=(0,i._)("img",{src:te},null,-1),de=(0,i._)("img",{src:oe},null,-1),ce=(0,i._)("img",{src:re},null,-1),ue=(0,i._)("img",{src:ie},null,-1),he=(0,i._)("img",{src:ne},null,-1),ge=(0,i._)("img",{src:ae},null,-1),pe=(0,i._)("img",{src:le},null,-1);function me(e,t,o,r,n,l){return(0,i.wg)(),(0,i.iD)("div",{id:"crystal",onClick:t[14]||(t[14]=e=>l.changeColor())},["red"==o.color?((0,i.wg)(),(0,i.iD)("div",{key:0,onMouseover:t[0]||(t[0]=e=>l.enableBackground()),onMouseleave:t[1]||(t[1]=e=>l.disableBackground())},[(0,i._)("div",{id:"glow",style:(0,a.j5)(l.displayColor)},null,4),se],32)):(0,i.kq)("",!0),"green"==o.color?((0,i.wg)(),(0,i.iD)("div",{key:1,onMouseover:t[2]||(t[2]=e=>l.enableBackground()),onMouseleave:t[3]||(t[3]=e=>l.disableBackground())},[(0,i._)("div",{id:"glow",style:(0,a.j5)(l.displayColor)},null,4),de],32)):(0,i.kq)("",!0),"blue"==o.color?((0,i.wg)(),(0,i.iD)("div",{key:2,onMouseover:t[4]||(t[4]=e=>l.enableBackground()),onMouseleave:t[5]||(t[5]=e=>l.disableBackground())},[(0,i._)("div",{id:"glow",style:(0,a.j5)(l.displayColor)},null,4),ce],32)):(0,i.kq)("",!0),"cyan"==o.color?((0,i.wg)(),(0,i.iD)("div",{key:3,onMouseover:t[6]||(t[6]=e=>l.enableBackground()),onMouseleave:t[7]||(t[7]=e=>l.disableBackground())},[(0,i._)("div",{id:"glow",style:(0,a.j5)(l.displayColor)},null,4),ue],32)):(0,i.kq)("",!0),"magenta"==o.color?((0,i.wg)(),(0,i.iD)("div",{key:4,onMouseover:t[8]||(t[8]=e=>l.enableBackground()),onMouseleave:t[9]||(t[9]=e=>l.disableBackground())},[(0,i._)("div",{id:"glow",style:(0,a.j5)(l.displayColor)},null,4),he],32)):(0,i.kq)("",!0),"lime"==o.color?((0,i.wg)(),(0,i.iD)("div",{key:5,onMouseover:t[10]||(t[10]=e=>l.enableBackground()),onMouseleave:t[11]||(t[11]=e=>l.disableBackground())},[(0,i._)("div",{id:"glow",style:(0,a.j5)(l.displayColor)},null,4),ge],32)):(0,i.kq)("",!0),"white"==o.color?((0,i.wg)(),(0,i.iD)("div",{key:6,onMouseover:t[12]||(t[12]=e=>l.enableBackground()),onMouseleave:t[13]||(t[13]=e=>l.disableBackground())},[(0,i._)("div",{id:"glow",style:(0,a.j5)(l.displayColor)},null,4),pe],32)):(0,i.kq)("",!0)])}var we={name:"kyberBtn",data(){return{background:!1}},methods:{changeColor(){location.href=`http://aquanet.ddnsfree.com/php/${this.color}.php`},enableBackground(){this.background=!0},disableBackground(){this.background=!1}},props:{color:{type:String,default:"red"}},computed:{displayColor(){let e="";switch(this.color){case"red":e="redFadeAnim";break;case"green":e="greenFadeAnim";break;case"blue":e="blueFadeAnim";break;case"cyan":e="cyanFadeAnim";break;case"magenta":e="magentaFadeAnim";break;case"lime":e="limeFadeAnim";break;case"white":e="whiteFadeAnim";break}return this.background?{background:this.color,boxShadow:`0px 0px 3rem 5rem ${this.color}`,animation:`${e} 4s infinite`}:{background:"rgba(0,0,0,0)",boxShadow:"0px 0px rgba(0,0,0,0)"}}}};const fe=(0,u.Z)(we,[["render",me]]);var be=fe,ke={name:"HolocronPage",data(){return{starPos:[],kyberColors:["red","green","blue","cyan","magenta","lime","white"]}},components:{star:J,webcam:ee,kyberBtn:be,routeBtn:W},computed:{},methods:{getPos(e){return{position:"absolute",top:e[0]+"%",left:e[1]+"%"}}},mounted(){for(let e=0;e<2500;e++){const e=Math.floor(1e4*Math.random())/100,t=Math.floor(1e4*Math.random())/100;this.starPos.push([e,t])}}};const ve=(0,u.Z)(ke,[["render",$]]);var ye=ve;const Ce={"":g,"/":g,"#/":g,"/Gallery":O,"/HolocronPage":ye};var Me={data(){return{currentPath:window.location.hash}},computed:{currentView(){return Ce[this.currentPath.slice(1)||"/"]}},mounted(){window.addEventListener("hashchange",(()=>{this.currentPath=window.location.hash}))}};const Re=(0,u.Z)(Me,[["render",n]]);var De=Re;(0,r.ri)(De).mount("#app")}},t={};function o(r){var i=t[r];if(void 0!==i)return i.exports;var n=t[r]={exports:{}};return e[r](n,n.exports,o),n.exports}o.m=e,function(){var e=[];o.O=function(t,r,i,n){if(!r){var a=1/0;for(c=0;c<e.length;c++){r=e[c][0],i=e[c][1],n=e[c][2];for(var l=!0,s=0;s<r.length;s++)(!1&n||a>=n)&&Object.keys(o.O).every((function(e){return o.O[e](r[s])}))?r.splice(s--,1):(l=!1,n<a&&(a=n));if(l){e.splice(c--,1);var d=i();void 0!==d&&(t=d)}}return t}n=n||0;for(var c=e.length;c>0&&e[c-1][2]>n;c--)e[c]=e[c-1];e[c]=[r,i,n]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){o.p="/"}(),function(){var e={143:0};o.O.j=function(t){return 0===e[t]};var t=function(t,r){var i,n,a=r[0],l=r[1],s=r[2],d=0;if(a.some((function(t){return 0!==e[t]}))){for(i in l)o.o(l,i)&&(o.m[i]=l[i]);if(s)var c=s(o)}for(t&&t(r);d<a.length;d++)n=a[d],o.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return o.O(c)},r=self["webpackChunkmghera2"]=self["webpackChunkmghera2"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=o.O(void 0,[998],(function(){return o(6929)}));r=o.O(r)})();
//# sourceMappingURL=app.014b4cad.js.map