(function(){"use strict";var e={6023:function(e,t,o){var r=o(9242),i=o(3396);function n(e,t,o,r,n,a){return(0,i.wg)(),(0,i.j4)((0,i.LL)(a.currentView))}var a=o.p+"media/stars2.ba53b324.mp4";const l=(0,i._)("video",{autoplay:"",muted:"",loop:"",id:"backgroundVid"},[(0,i._)("source",{src:a,type:"video/mp4"})],-1),s={id:"Home"},d=(0,i.uE)('<div id="mainTitle"><span id="thirdWord">Matthew </span><span id="fourthWord">Ghera </span></div><div id="terminalContainer"><div id="terminal"></div></div>',2);function c(e,t,o,r,n,a){return(0,i.wg)(),(0,i.iD)(i.HY,null,[l,(0,i._)("div",s,[d,(0,i._)("div",{id:"enter",onClick:t[0]||(t[0]=e=>a.goToNextPage())}," ENTER ")])],64)}var u={name:"Home",data(){return{randRow:[-1],randCol:[-1],lastHoriz:"left",lastVert:"down",oldRow:[-1],oldCol:[-1],magicInterval:null,playingAudio:!1}},methods:{goToNextPage(){clearInterval(this.magicInterval),window.location.href.indexOf("#")>-1?window.location=window.location.href+"Gallery":window.location=window.location.href+"#/Gallery"},playAudio(){let e=this.$refs.audio;e.play(),this.playingAudio=!0},startTypingInTerminal(){let e=0;setInterval((()=>{if(0==e){let e='"This is where the fun begins." \b - Anakin Skywalker',t=document.getElementById("terminal"),o=0,r=0,i=document.createTextNode("_");setInterval((()=>{if(o<2*e.length){if(o%2==0){let o=document.createTextNode(e[r]);"\b"==e[r]&&(console.log("here"),o=document.createElement("br")),t.appendChild(o),t.appendChild(i),r++}else t.removeChild(i);o++}}),80)}e=1}),2500)}},props:{},computed:{},mounted:function(){0==document.getElementById("terminal").childNodes.length&&this.startTypingInTerminal(),document.getElementById("backgroundVid").playbackRate=.5}},m=o(89);const p=(0,m.Z)(u,[["render",c]]);var h=p;const g={id:"Gallery"},b=(0,i._)("div",{id:"galleryTitle"},"The Gallery",-1);function w(e,t,o,r,n,a){const l=(0,i.up)("routeBtn"),s=(0,i.up)("projectContainer");return(0,i.wg)(),(0,i.iD)("div",g,[(0,i.Wm)(l,{site:"Exit",id:"exitBtn"}),b,((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(n.projects,(e=>((0,i.wg)(),(0,i.iD)("div",{key:e},[(0,i.Wm)(s,{title:e.title,color:e.color,description:e.description,videoLandscape:e.videoLandscape,videoVertical:e.videoVertical,skills:e.skills,link:e.link},null,8,["title","color","description","videoLandscape","videoVertical","skills","link"])])))),128))])}var f=o(7139);const v={id:"projectContainer"},y={id:"body"},k={id:"description"},C=(0,i._)("br",null,null,-1),S={key:0},T=["href"],D=["href"],x={id:"video"},B=["innerHTML"];function M(e,t,o,r,n,a){const l=(0,i.up)("skillTag");return(0,i.wg)(),(0,i.iD)("div",v,[(0,i._)("div",{id:"title",style:(0,f.j5)(a.getTitleColor())},(0,f.zw)(o.title),5),(0,i._)("hr",{style:(0,f.j5)(a.getHRColor())},null,4),(0,i._)("div",y,[(0,i._)("div",k,[(0,i.Uk)((0,f.zw)(o.description)+" ",1),C,o.link.link?((0,i.wg)(),(0,i.iD)("div",S,[o.link.github?((0,i.wg)(),(0,i.iD)("a",{key:0,href:o.link.link,target:"_blank",class:"gitHubLink"},"Go to the GitHub",8,T)):((0,i.wg)(),(0,i.iD)("a",{key:1,href:o.link.link,target:"_blank",class:"projectLink",style:(0,f.j5)(a.getTitleColor())},"Go to the Project!",12,D))])):(0,i.kq)("",!0)]),(0,i._)("div",x,[(0,i._)("div",{innerHTML:n.video,style:(0,f.j5)(a.getBorderColor())},null,12,B)])]),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(o.skills,(e=>((0,i.wg)(),(0,i.iD)("span",{id:"skills",key:e},[(0,i._)("span",null,[(0,i.Wm)(l,{skill:e,color:o.color},null,8,["skill","color"])])])))),128))])}function I(e,t,o,r,n,a){return(0,i.wg)(),(0,i.iD)("div",{id:"skillTag",style:(0,f.j5)(a.getColor())},(0,f.zw)(o.skill),5)}var P={name:"skillTag",data(){return{}},methods:{getColor(){let e="white";return"White"!=this.color&&"Yellow"!=this.color||(e="rgb(130,130,130)"),{color:e,background:this.color,boxShadow:`0px 0px .75rem .125rem ${this.color}`}}},props:{skill:String,color:String},computed:{},mounted:function(){}};const _=(0,m.Z)(P,[["render",I]]);var j=_,A={name:"projectContainer",data(){return{video:""}},methods:{getTitleColor(){return{color:this.color,textShadow:`0rem 0rem 2rem ${this.color}, 0rem 0rem 5rem ${this.color}`}},getHRColor(){return{height:"0.2rem",border:"none","background-color":this.color}},getBorderColor(){return{boxShadow:`0px 0px 1.5rem .75rem ${this.color}`}}},props:{title:String,color:String,description:String,videoLandscape:String,videoVertical:String,skills:Array,link:Object},computed:{},components:{skillTag:j},mounted:function(){console.log(window.screen.width),window.screen.width>=1e3?this.video=this.videoLandscape:this.video=this.videoVertical}};const H=(0,m.Z)(A,[["render",M]]);var L=H;function R(e,t,o,r,n,a){return(0,i.wg)(),(0,i.iD)("div",{id:"routeBtn",onClick:t[0]||(t[0]=e=>a.changeRoute())},(0,f.zw)(o.site),1)}var V={name:"routeBtn",data(){return{}},methods:{changeRoute(){let e="";"Exit"!=this.site&&(e=this.site),window.location="http://seanet.asuscomm.com/#/"+e}},props:{site:{type:String}},computed:{}};const E=(0,m.Z)(V,[["render",R]]);var W=E,O=JSON.parse('{"q":[{"title":"S3 Integration Dashboard","color":"White","description":"Throughout my Amazon AWS internship, I spent my time designing and creating a Ruby-based dashboard that will help drastically decrease the mitigation time for operators when solving Lustre-specific tickets. This dashboard utilizes the AWS CloudWatch API to display metrics on a per-filesystem basis for AutoExport, AutoImport, HSM, and other metrics. Not only are these graphs customizable and easily extendable, they will also help operators quickly find correlations between metrics. To further aid in both decreased mitigation time and reducing manual SSH access, I also developed bash script commands that will bypass the need for operators to SSH into file systems and still execute the respective command. Through the process of creating this dashboard, I gained experience learning a lot about AWS, its infrastructure, and its tools, and I learned more about being a developer. Unfortunately, I won\'t be able to share a video of the working dashboard, but trust me, it was cool.","videoLandscape":"","videoVertical":"","link":{"link":"","github":false},"skills":["Ruby","Haml","Bash","AWS","S3","EC2","CloudWatch","Lustre File Systems","JavaScript","CSS"]},{"title":"Dum-E","color":"Yellow","description":"Dum-E is an Iron Man inspired robot. It uses a Raspberry Pi to drive it, and is programmed in Python. It also uses OpenCV to track faces, and three servo motors to follow the tracked face, so that it can move in 3-dimensions. If the room is too dark to detect faces, an led face-light will automatically turn on so that a face can be detected. It has integrated speakers and a microphone to be given audible commands and output audible responses along with playing some music. Dum-E also has an LCD screen to display responses and errors.","videoLandscape":"<iframe width=\'560\' height=\'315\' src=\'https://www.youtube.com/embed/_Io_BHvZyO4\' title=\'YouTube video player\' frameborder=\'0\' allow=\'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\' allowfullscreen></iframe>","videoVertical":"<iframe width=\'160\' height=\'160\' src=\'https://www.youtube.com/embed/_Io_BHvZyO4\' title=\'YouTube video player\' frameborder=\'0\' allow=\'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\' allowfullscreen></iframe>","link":{"link":"https://github.com/mghera02/Dum-E-Bot","github":true},"skills":["Raspberry Pi","Robotics","Motor Control","Python","OpenCV","CAD","3D-Printing","Circuit Design"]},{"title":"Accessible Partner Account Explorer","color":"White","description":"The Accessible Partner Account Explorer is a webpage that I designed, created, and pushed to production during my 2022 internship at Amazon. This is an internal page built for customer support and developers for the sellerCentral Amazon site.","videoLandscape":"<iframe width=\'560\' height=\'315\' src=\'https://www.youtube.com/embed/0Me9P6x6LBU\' title=\'YouTube video player\' frameborder=\'0\' allow=\'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\' allowfullscreen></iframe>","videoVertical":"<iframe width=\'160\' height=\'160\' src=\'https://www.youtube.com/embed/0Me9P6x6LBU\' title=\'YouTube video player\' frameborder=\'0\' allow=\'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\' allowfullscreen></iframe>","link":{"link":"","github":false},"skills":["Vue.js","HTML","CSS","JavaScript","Web Design","unit testing","Jest"]},{"title":"H4-KR","color":"Green","description":"H4-KR is a Star Wars inspired droid with a design based off of Chopper from Rebels. H4-KR uses 2 arduinos programmed in C++. Its features are as follows: remote controlled movement via IR remote, semi-autonomous movement using ultrasonic sensor, 10+ diagnostic LEDs, temperature sensor, head movement via servo, hacking capabilities using a ATtiny85.","videoLandscape":"<iframe width=\'560\' height=\'315\' src=\'https://www.youtube.com/embed/rc-0-Qx7w10\' title=\'YouTube video player\' frameborder=\'0\' allow=\'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\' allowfullscreen></iframe>","videoVertical":"<iframe width=\'160\' height=\'160\' src=\'https://www.youtube.com/embed/rc-0-Qx7w10\' title=\'YouTube video player\' frameborder=\'0\' allow=\'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\' allowfullscreen></iframe>","link":{"link":"https://github.com/mghera02/starwarsDroid","github":true},"skills":["Arduino","Robotics","C++","CAD","3D-Printing","Motor Control","Circuit Design"]},{"title":"Sith Holocron","color":"Red","description":"This is a Star Wars inspired IoT project. The sith holocron is built using the same Raspberry Pi that is hosting this website. Through the website, users can control the lights and motors embedded in the device and see the output through a live webcam.","videoLandscape":"<iframe width=\'560\' height=\'315\' src=\'https://www.youtube.com/embed/4KzuhPVkj2g\' title=\'YouTube video player\' frameborder=\'0\' allow=\'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\' allowfullscreen></iframe>","videoVertical":"<iframe width=\'160\' height=\'160\' src=\'https://www.youtube.com/embed/4KzuhPVkj2g\' title=\'YouTube video player\' frameborder=\'0\' allow=\'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\' allowfullscreen></iframe>","link":{"link":"http://seanet.asuscomm.com/#/HolocronPage","github":false},"skills":["Raspberry Pi","PHP","HTML","CSS","JS","Vue.js","CAD","3D-Printing","Motor Control","Circuit Design","Server Management"]},{"title":"SchedLink","color":"Red","description":"SchedLink is a student and teacher portal used to keep track of bell schedules, extracurricular activities, class updates, and digital hall passes. As the CEO and founder, I Identified the business need and technical solution to aid students and faculty, and developed the initial vision, mission, and project management structure for the team.I was also a full stack developer, so I designed and implemented front and back-end systems including: notifications, settings, sign in, create account, extracurricular management, and creating/signing up for classes. SchedLink Achieved 10k unique views/day and eliminated costs for administration by having a free, multi-tool site.","videoLandscape":"<iframe width=\'560\' height=\'315\' src=\'https://www.youtube.com/embed/HQGwd_BH2-Y\' title=\'YouTube video player\' frameborder=\'0\' allow=\'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\' allowfullscreen></iframe>","videoVertical":"<iframe width=\'160\' height=\'160\' src=\'https://www.youtube.com/embed/HQGwd_BH2-Y\' title=\'YouTube video player\' frameborder=\'0\' allow=\'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\' allowfullscreen></iframe>","link":{"link":"https://schedlink.com/fishers/","github":false},"skills":["HTML","PHP","JS","CSS","Server Management","Project Management","Leadership","Entrepreneurship"]}]}'),Y={name:"Gallery",data(){return{projects:O.q,scrollPosition:0}},components:{projectContainer:L,routeBtn:W},methods:{},props:{},computed:{}};const G=(0,m.Z)(Y,[["render",w]]);var z=G;const Z={id:"holocronPage"},q={id:"starCollection"},$={id:"kyberCollection"};function K(e,t,o,r,n,a){const l=(0,i.up)("routeBtn"),s=(0,i.up)("star"),d=(0,i.up)("webcam"),c=(0,i.up)("kyberBtn");return(0,i.wg)(),(0,i.iD)("div",Z,[(0,i.Wm)(l,{site:"Gallery",id:"routeBtn"}),(0,i._)("div",q,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(n.starPos,((e,t)=>((0,i.wg)(),(0,i.iD)("div",{key:t},[(0,i.Wm)(s,{style:(0,f.j5)(a.getPos(e))},null,8,["style"])])))),128))]),(0,i.Wm)(d,{id:"webcamBox"}),(0,i._)("div",$,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(n.kyberColors,((e,t)=>((0,i.wg)(),(0,i.iD)("div",{key:t},[(0,i.Wm)(c,{color:e},null,8,["color"])])))),128))])])}function F(e,t,o,r,n,a){return(0,i.wg)(),(0,i.iD)("div",{style:(0,f.j5)([a.starColorSize,a.animationAlter])},null,4)}var N={name:"star-comp",data(){return{star:"star"}},computed:{starColorSize(){const e=Math.floor(100*Math.random())+1;let t,o=Math.floor(1e4*Math.random())/2e3;return t=e<=1?"rgb(255,50,15)":e<=8?"rgb(120,170,255)":e<=18?"rgb(255,180,255)":e<=38?"rgb(255,230,180)":"white",o>=4.6&&(o*=Math.floor(5*Math.random())),{background:t,boxShadow:`0px 0px ${1.1*o}px ${o}px ${t}`,height:o+"px",width:o+"px",borderRadius:"50%"}},animationAlter(){const e=(Math.floor(1e3*Math.random())+1)/10+3;return{animation:`flickerAnimation ${e}s infinite`}}}};const J=(0,m.Z)(N,[["render",F]]);var Q=J;const U={id:"webcamVid",src:"http://seanet.asuscomm.com:8082",allowfullscreen:"true"};function X(e,t,o,r,n,a){return(0,i.wg)(),(0,i.iD)("img",U)}var ee={name:"webcam"};const te=(0,m.Z)(ee,[["render",X]]);var oe=te,re=o.p+"img/red.7817f488.png",ie=o.p+"img/green.71bc50c6.png",ne=o.p+"img/blue.19380f52.png",ae=o.p+"img/cyan.3aa2613f.jpeg",le=o.p+"img/magenta.d7d9507c.png",se=o.p+"img/lime.6659e0fa.png",de=o.p+"img/white.0dbcaa89.png";const ce=(0,i._)("img",{id:"kyberImg",src:re},null,-1),ue=(0,i._)("img",{id:"kyberImg",src:ie},null,-1),me=(0,i._)("img",{id:"kyberImg",src:ne},null,-1),pe=(0,i._)("img",{id:"kyberImg",src:ae},null,-1),he=(0,i._)("img",{id:"kyberImg",src:le},null,-1),ge=(0,i._)("img",{id:"kyberImg",src:se},null,-1),be=(0,i._)("img",{id:"kyberImg",src:de},null,-1);function we(e,t,o,r,n,a){return(0,i.wg)(),(0,i.iD)("div",{id:"crystal",onClick:t[14]||(t[14]=e=>a.changeColor())},["red"==o.color?((0,i.wg)(),(0,i.iD)("div",{key:0,onMouseover:t[0]||(t[0]=e=>a.enableBackground()),onMouseleave:t[1]||(t[1]=e=>a.disableBackground())},[(0,i._)("div",{id:"glow",style:(0,f.j5)(a.displayColor)},null,4),ce],32)):(0,i.kq)("",!0),"green"==o.color?((0,i.wg)(),(0,i.iD)("div",{key:1,onMouseover:t[2]||(t[2]=e=>a.enableBackground()),onMouseleave:t[3]||(t[3]=e=>a.disableBackground())},[(0,i._)("div",{id:"glow",style:(0,f.j5)(a.displayColor)},null,4),ue],32)):(0,i.kq)("",!0),"blue"==o.color?((0,i.wg)(),(0,i.iD)("div",{key:2,onMouseover:t[4]||(t[4]=e=>a.enableBackground()),onMouseleave:t[5]||(t[5]=e=>a.disableBackground())},[(0,i._)("div",{id:"glow",style:(0,f.j5)(a.displayColor)},null,4),me],32)):(0,i.kq)("",!0),"cyan"==o.color?((0,i.wg)(),(0,i.iD)("div",{key:3,onMouseover:t[6]||(t[6]=e=>a.enableBackground()),onMouseleave:t[7]||(t[7]=e=>a.disableBackground())},[(0,i._)("div",{id:"glow",style:(0,f.j5)(a.displayColor)},null,4),pe],32)):(0,i.kq)("",!0),"magenta"==o.color?((0,i.wg)(),(0,i.iD)("div",{key:4,onMouseover:t[8]||(t[8]=e=>a.enableBackground()),onMouseleave:t[9]||(t[9]=e=>a.disableBackground())},[(0,i._)("div",{id:"glow",style:(0,f.j5)(a.displayColor)},null,4),he],32)):(0,i.kq)("",!0),"lime"==o.color?((0,i.wg)(),(0,i.iD)("div",{key:5,onMouseover:t[10]||(t[10]=e=>a.enableBackground()),onMouseleave:t[11]||(t[11]=e=>a.disableBackground())},[(0,i._)("div",{id:"glow",style:(0,f.j5)(a.displayColor)},null,4),ge],32)):(0,i.kq)("",!0),"white"==o.color?((0,i.wg)(),(0,i.iD)("div",{key:6,onMouseover:t[12]||(t[12]=e=>a.enableBackground()),onMouseleave:t[13]||(t[13]=e=>a.disableBackground())},[(0,i._)("div",{id:"glow",style:(0,f.j5)(a.displayColor)},null,4),be],32)):(0,i.kq)("",!0)])}var fe={name:"kyberBtn",data(){return{background:!1}},methods:{changeColor(){location.href=`http://seanet.asuscomm.com/php/${this.color}.php`},enableBackground(){this.background=!0},disableBackground(){this.background=!1}},props:{color:{type:String,default:"red"}},computed:{displayColor(){let e="";switch(this.color){case"red":e="redFadeAnim";break;case"green":e="greenFadeAnim";break;case"blue":e="blueFadeAnim";break;case"cyan":e="cyanFadeAnim";break;case"magenta":e="magentaFadeAnim";break;case"lime":e="limeFadeAnim";break;case"white":e="whiteFadeAnim";break}return this.background?{background:this.color,boxShadow:`0px 0px 3rem 5rem ${this.color}`,animation:`${e} 4s infinite`}:{background:"rgba(0,0,0,0)",boxShadow:"0px 0px rgba(0,0,0,0)"}}}};const ve=(0,m.Z)(fe,[["render",we]]);var ye=ve,ke={name:"HolocronPage",data(){return{starPos:[],kyberColors:["red","green","blue","cyan","magenta","lime","white"]}},components:{star:Q,webcam:oe,kyberBtn:ye,routeBtn:W},computed:{},methods:{getPos(e){return{position:"absolute",top:e[0]+"%",left:e[1]+"%"}}},mounted(){for(let e=0;e<2500;e++){const e=Math.floor(1e4*Math.random())/100,t=Math.floor(1e4*Math.random())/100;this.starPos.push([e,t])}}};const Ce=(0,m.Z)(ke,[["render",K]]);var Se=Ce;const Te={"":h,"/":h,"#/":h,"/Gallery":z,"/HolocronPage":Se};var De={data(){return{currentPath:window.location.hash}},computed:{currentView(){return Te[this.currentPath.slice(1)||"/"]}},mounted(){window.addEventListener("hashchange",(()=>{this.currentPath=window.location.hash}))}};const xe=(0,m.Z)(De,[["render",n]]);var Be=xe,Me=o(8970);(0,r.ri)(Be).use(Me.ZP,{config:{id:"G-0RRKBDQ9B3"}}).mount("#app")}},t={};function o(r){var i=t[r];if(void 0!==i)return i.exports;var n=t[r]={exports:{}};return e[r](n,n.exports,o),n.exports}o.m=e,function(){var e=[];o.O=function(t,r,i,n){if(!r){var a=1/0;for(c=0;c<e.length;c++){r=e[c][0],i=e[c][1],n=e[c][2];for(var l=!0,s=0;s<r.length;s++)(!1&n||a>=n)&&Object.keys(o.O).every((function(e){return o.O[e](r[s])}))?r.splice(s--,1):(l=!1,n<a&&(a=n));if(l){e.splice(c--,1);var d=i();void 0!==d&&(t=d)}}return t}n=n||0;for(var c=e.length;c>0&&e[c-1][2]>n;c--)e[c]=e[c-1];e[c]=[r,i,n]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){o.p="/"}(),function(){var e={143:0};o.O.j=function(t){return 0===e[t]};var t=function(t,r){var i,n,a=r[0],l=r[1],s=r[2],d=0;if(a.some((function(t){return 0!==e[t]}))){for(i in l)o.o(l,i)&&(o.m[i]=l[i]);if(s)var c=s(o)}for(t&&t(r);d<a.length;d++)n=a[d],o.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return o.O(c)},r=self["webpackChunkmghera2"]=self["webpackChunkmghera2"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=o.O(void 0,[998],(function(){return o(6023)}));r=o.O(r)})();
//# sourceMappingURL=app.5577c9a9.js.map