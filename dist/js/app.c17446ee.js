(function(){"use strict";var e={4680:function(e,o,t){var i=t(9242),r=t(3396);function n(e,o,t,i,n,a){return(0,r.wg)(),(0,r.j4)((0,r.LL)(a.currentView))}var a=t.p+"media/stars2.ba53b324.mp4";const l=(0,r._)("video",{autoplay:"",muted:"",loop:"",id:"backgroundVid"},[(0,r._)("source",{src:a,type:"video/mp4"})],-1),s={id:"Home"},d=(0,r.uE)('<div id="mainTitle"><span id="thirdWord">Matthew </span><span id="fourthWord">Ghera </span></div><div id="terminalContainer"><div id="terminal"></div></div>',2);function c(e,o,t,i,n,a){return(0,r.wg)(),(0,r.iD)(r.HY,null,[l,(0,r._)("div",s,[d,(0,r._)("div",{id:"enter",onClick:o[0]||(o[0]=e=>a.goToNextPage())}," ENTER ")])],64)}var u={name:"Home",meta:[{name:"description",content:"Matthew Ghera's Website"}],data(){return{randRow:[-1],randCol:[-1],lastHoriz:"left",lastVert:"down",oldRow:[-1],oldCol:[-1],magicInterval:null,playingAudio:!1}},methods:{goToNextPage(){clearInterval(this.magicInterval),window.location.href.indexOf("#")>-1?window.location=window.location.href+"Gallery":window.location=window.location.href+"#/Gallery"},playAudio(){let e=this.$refs.audio;e.play(),this.playingAudio=!0},startTypingInTerminal(){let e=0;setInterval((()=>{if(0==e){let e='"This is where the fun begins." \b - Anakin Skywalker',o=document.getElementById("terminal"),t=0,i=0,r=document.createTextNode("_");setInterval((()=>{if(t<2*e.length){if(t%2==0){let t=document.createTextNode(e[i]);"\b"==e[i]&&(console.log("here"),t=document.createElement("br")),o.appendChild(t),o.appendChild(r),i++}else o.removeChild(r);t++}}),80)}e=1}),2500)}},props:{},computed:{},mounted:function(){0==document.getElementById("terminal").childNodes.length&&this.startTypingInTerminal(),document.getElementById("backgroundVid").playbackRate=.5}},m=t(89);const h=(0,m.Z)(u,[["render",c]]);var p=h;const g={id:"Gallery"},w=(0,r._)("div",{id:"galleryTitle"},"The Gallery",-1);function b(e,o,t,i,n,a){const l=(0,r.up)("mediaMedallion"),s=(0,r.up)("routeBtn"),d=(0,r.up)("projectContainer");return(0,r.wg)(),(0,r.iD)("div",g,[(0,r.Wm)(l,{class:"githubMedallion",medallionType:n.github.name,medallionColor:n.github.color,medallionLink:n.github.link},null,8,["medallionType","medallionColor","medallionLink"]),(0,r.Wm)(l,{class:"linkedInMedallion",medallionType:n.linkedIn.name,medallionColor:n.linkedIn.color,medallionLink:n.linkedIn.link},null,8,["medallionType","medallionColor","medallionLink"]),(0,r.Wm)(s,{site:"Exit",id:"exitBtn"}),w,((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(n.projects,(e=>((0,r.wg)(),(0,r.iD)("div",{key:e},[(0,r.Wm)(d,{title:e.title,color:e.color,description:e.description,videoLandscape:e.videoLandscape,videoVertical:e.videoVertical,videoLandscape2:e.videoLandscape2,videoVertical2:e.videoVertical2,skills:e.skills,link:e.link,year:e.year},null,8,["title","color","description","videoLandscape","videoVertical","videoLandscape2","videoVertical2","skills","link","year"])])))),128))])}var f=t(7139);const v={id:"projectContainer"},y={class:"year"},k={id:"body"},C={id:"description"},S=(0,r._)("br",null,null,-1),T={key:0},M=["href"],D=["href"],I={key:0,id:"video"},P=["innerHTML"],x={key:1,id:"video"},L=["innerHTML"];function A(e,o,t,i,n,a){const l=(0,r.up)("skillTag");return(0,r.wg)(),(0,r.iD)("div",v,[(0,r._)("div",{id:"title",style:(0,f.j5)(a.getTitleColor())},(0,f.zw)(t.title),5),(0,r._)("div",y,(0,f.zw)(t.year),1),(0,r._)("hr",{style:(0,f.j5)(a.getHRColor())},null,4),(0,r._)("div",k,[(0,r._)("div",C,[(0,r.Uk)((0,f.zw)(t.description)+" ",1),S,t.link.link?((0,r.wg)(),(0,r.iD)("div",T,[t.link.github?((0,r.wg)(),(0,r.iD)("a",{key:0,href:t.link.link,target:"_blank",class:"gitHubLink"},"Go to the GitHub",8,M)):((0,r.wg)(),(0,r.iD)("a",{key:1,href:t.link.link,target:"_blank",class:"projectLink",style:(0,f.j5)(a.getTitleColor())},"Go to the Project!",12,D))])):(0,r.kq)("",!0)]),(0,r._)("div",null,[t.videoLandscape?((0,r.wg)(),(0,r.iD)("div",I,[(0,r._)("div",{innerHTML:n.video,style:(0,f.j5)(a.getBorderColor())},null,12,P)])):(0,r.kq)("",!0),t.videoLandscape2?((0,r.wg)(),(0,r.iD)("div",x,[(0,r._)("div",{innerHTML:n.video2,style:(0,f.j5)(a.getBorderColor())},null,12,L)])):(0,r.kq)("",!0)])]),((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(t.skills,(e=>((0,r.wg)(),(0,r.iD)("span",{id:"skills",key:e},[(0,r._)("span",null,[(0,r.Wm)(l,{skill:e,color:t.color},null,8,["skill","color"])])])))),128))])}function B(e,o,t,i,n,a){return(0,r.wg)(),(0,r.iD)("div",{id:"skillTag",style:(0,f.j5)(a.getColor())},(0,f.zw)(t.skill),5)}var j={name:"skillTag",data(){return{}},methods:{getColor(){let e="white";return"White"!=this.color&&"Yellow"!=this.color||(e="rgb(130,130,130)"),{color:e,background:this.color,boxShadow:`0px 0px .75rem .125rem ${this.color}`}}},props:{skill:String,color:String},computed:{},mounted:function(){}};const E=(0,m.Z)(j,[["render",B]]);var _=E,H={name:"projectContainer",data(){return{video:"",video2:""}},methods:{getTitleColor(){return{color:this.color,textShadow:`0rem 0rem 2rem ${this.color}, 0rem 0rem 5rem ${this.color}`}},getHRColor(){return{height:"0.2rem",border:"none","background-color":this.color}},getBorderColor(){return{boxShadow:`0px 0px 1.5rem .75rem ${this.color}`}}},props:{title:String,year:String,color:String,description:String,videoLandscape:String,videoVertical:String,videoLandscape2:String,videoVertical2:String,skills:Array,link:Object},computed:{},components:{skillTag:_},mounted:function(){console.log(window.innerWidth),window.innerWidth>=1400?(this.video=this.videoLandscape,this.video2=this.videoLandscape2):(this.video=this.videoVertical,this.video2=this.videoVertical2)}};const O=(0,m.Z)(H,[["render",A]]);var V=O;function R(e,o,t,i,n,a){return(0,r.wg)(),(0,r.iD)("div",{id:"routeBtn",onClick:o[0]||(o[0]=e=>a.changeRoute())},(0,f.zw)(t.site),1)}var W={name:"routeBtn",data(){return{}},methods:{changeRoute(){let e="";"Exit"!=this.site&&(e=this.site),window.location="http://www.mghera.com/#/"+e}},props:{site:{type:String}},computed:{}};const z=(0,m.Z)(W,[["render",R]]);var U=z,G=t.p+"img/githubLogo.9696fe4f.png",Y=t.p+"img/linkedInLogo.a91f899f.png";const F=["href"],N={key:0,class:"picture",src:G},Z={key:1,class:"picture",src:Y};function K(e,o,t,i,n,a){return(0,r.wg)(),(0,r.iD)("a",{id:"medallion",style:(0,f.j5)(a.getBorderColor()),href:t.medallionLink,target:"”_blank”"},["github"==t.medallionType?((0,r.wg)(),(0,r.iD)("img",N)):(0,r.kq)("",!0),"linkedIn"==t.medallionType?((0,r.wg)(),(0,r.iD)("img",Z)):(0,r.kq)("",!0)],12,F)}var q={name:"MediaMedallion",data(){return{}},methods:{getBorderColor(){return{background:`${this.medallionColor}`,boxShadow:`0px 0px 1rem .3rem ${this.medallionColor}`}}},props:{medallionType:String,medallionColor:String,medallionLink:String},computed:{}};const Q=(0,m.Z)(q,[["render",K]]);var $=Q,J=JSON.parse('{"q":[{"title":"M.O.U.S.E","color":"Blue","year":"2024-Present","description":"For my senior design project, I, alongside my team of 3 computer engineering colleagues, am building a mobile surveillance robot. MOUSE is a mobile surveillance robot intended for indoor use, in corporate office or residential environments. MOUSE will be powered by four motors, each controlling its own wheel for mobility. There will be a large 18V battery allowing MOUSE to perform surveillance overnight without needing to have its battery replaced. When the battery does die, it will need to be recharged manually. MOUSE will have the ability for the motors to have variable speed control through the use of PWM signals. MOUSE will also have a custom circuit to step down the 18V from the battery to 5V for motors, sensors and ICs, as well as 5V to 3.3V for the microprocessor. To complete its surveillance functionality, MOUSE will have PIR sensors on all four sides, allowing for the detection of movement. While stationary, MOUSE will use these sensors to detect any movement in its vicinity. Finally, there will be a viewable UI on a webpage to use MOUSE movement controls and display if any objects have been detected. MOUSE and the web interface will send data wirelessly through WiFi via a web server. The block diagram below represents the connections between the described functional components of MOUSE. Additionally, we have the following stretch goals for the functionality of MOUSE. The PIR sensors may be mounted to a motor to ensure 360 degree coverage, instead of simply mounting four separate sensors to each side of MOUSE. MOUSE may be able to follow a predetermined path set by the user. On the right, you can scroll through my progress journal to see my individual contributions (updated as of 2/22/24).","videoLandscape":"<iframe width=\'500\' height=\'600\' src=\'/progress3.html\'></iframe>","videoVertical":"<iframe width=\'250\' height=\'300\' src=\'/progress3.html\'></iframe>","link":{"link":"https://github.com/cmiotto20/477Grp2","github":true},"skills":["ESP32","Microcontrollers","C++","Circuit Design","PCB Design","HTML","CSS","JS","Web Socket","Motor Control"]},{"title":"KTT","color":"Green","year":"2023-Present","description":"I am part of an organization at Purdue, called EPICS (Engineering Projects In Community Service). Within this organization, I am on a team, called DKC (Deaf Kids Code). The project I have been working on in this team is called KTT (Keep the Tempo) where I have been the design lead for a few semesters. This project is based around designing a deaf and hard of hearing accessible solution to a commonly used device for swimmers, called a tempo trainer. I and my team have designed a two piece solution that uses a WiFi mesh to communciate between a remote and tempo trainer that emits light instead of sound.","videoLandscape":"<iframe width=\'500\' height=\'400\' src=\'/KTTDR.pdf#page=1&zoom=10\' />","videoVertical":"<iframe width=\'250\' height=\'300\' src=\'/KTTDR.pdf#view=FitH\' frameborder=\'0\' allowfullscreen />","videoLandscape2":"<iframe width=\'500\' height=\'400\' src=\'/KTTDD.pdf#page=1&zoom=60\' />","videoVertical2":"<iframe width=\'250\' height=\'300\' src=\'/KTTDD.pdf#view=FitH\' frameborder=\'0\' allowfullscreen />","link":{"link":"https://github.com/mghera02/IoTMesh","github":true},"skills":["Leadership","ESP8266","Microcontrollers","C++","Circuit Design","PCB Design","CAD","WIFI Mesh"]},{"title":"MIND Arduino Workshops","color":"Gold","year":"2023-2024","description":"As part of my work as the director of Research & Development in Purdue MIND (Medical, Innovation, Networking, Design), I created and led a series of workshops for the club. These workshops helped both new and experienced members learn more about how to prototype with Arduinos. These workshops covered circuit design, microcontroller programming, and how to interface with different external peripherals. The first workshop covers basic fundamentals of programming and circuit design with Arduinos and then begins to go into some more complex concepts like shift registers. The second workshop focuses on combining everything taught in the first workshop into one single device and mixes in some new concepts like external interrupts and I2C communication protocol.","videoLandscape2":"<iframe src=\'https://docs.google.com/presentation/d/e/2PACX-1vQ26FjL_BlO_p39iJjdhlZEsDAsEXsjRzxhxQfBPUX0blamZHzyJ2Q2EeHtJ3G8ma0ITAqr4NNyuUuS/embed?start=false&loop=false&delayms=3000\' frameborder=\'0\' width=\'500\' height=\'315\' allowfullscreen=\'true\' mozallowfullscreen=\'true\' webkitallowfullscreen=\'true\'></iframe>","videoVertical2":"<iframe src=\'https://docs.google.com/presentation/d/e/2PACX-1vQ26FjL_BlO_p39iJjdhlZEsDAsEXsjRzxhxQfBPUX0blamZHzyJ2Q2EeHtJ3G8ma0ITAqr4NNyuUuS/embed?start=false&loop=false&delayms=3000\' frameborder=\'0\' width=\'250\' height=\'300\' allowfullscreen=\'true\' mozallowfullscreen=\'true\' webkitallowfullscreen=\'true\'></iframe>","videoLandscape":"<iframe src=\'https://docs.google.com/presentation/d/e/2PACX-1vRjaGxFhnoHS7oOU7zxlY9Ql3FfwAlt-7OpmgU1kZ818PCM2wv-GgBN3EMbLQAgtBAQ2h31m3_rNzYa/embed?start=false&loop=false&delayms=3000\' frameborder=\'0\' width=\'500\' height=\'315\' allowfullscreen=\'true\' mozallowfullscreen=\'true\' webkitallowfullscreen=\'true\'></iframe>","videoVertical":"<iframe src=\'https://docs.google.com/presentation/d/e/2PACX-1vRjaGxFhnoHS7oOU7zxlY9Ql3FfwAlt-7OpmgU1kZ818PCM2wv-GgBN3EMbLQAgtBAQ2h31m3_rNzYa/embed?start=false&loop=false&delayms=3000\' frameborder=\'0\' width=\'250\' height=\'300\' allowfullscreen=\'true\' mozallowfullscreen=\'true\' webkitallowfullscreen=\'true\'></iframe>","link":{"link":"","github":false},"skills":["Leadership","Arduino","Microcontrollers","C++","Circuit Design"]},{"title":"S3 Integration Dashboard","color":"White","year":"2023","description":"Throughout my Amazon AWS internship, I spent my time designing and creating a Ruby-based dashboard that will help drastically decrease the mitigation time for operators when solving Lustre-specific tickets. This dashboard utilizes the AWS CloudWatch API to display metrics on a per-filesystem basis for AutoExport, AutoImport, HSM, and other metrics. Not only are these graphs customizable and easily extendable, they will also help operators quickly find correlations between metrics. To further aid in both decreased mitigation time and reducing manual SSH access, I also developed bash script commands that will bypass the need for operators to SSH into file systems and still execute the respective command. Through the process of creating this dashboard, I gained experience learning a lot about AWS, its infrastructure, and its tools, and I learned more about being a developer. Unfortunately, I won\'t be able to share a video of the working dashboard, but trust me, it was cool.","videoLandscape":"","videoVertical":"","link":{"link":"","github":false},"skills":["Ruby","Haml","Bash","AWS","S3","EC2","CloudWatch","Lustre File Systems","JavaScript","CSS"]},{"title":"Dum-E","color":"Yellow","year":"2022","description":"Dum-E is an Iron Man inspired robot. It uses a Raspberry Pi to drive it, and is programmed in Python. It also uses OpenCV to track faces, and three servo motors to follow the tracked face, so that it can move in 3-dimensions. If the room is too dark to detect faces, an led face-light will automatically turn on so that a face can be detected. It has integrated speakers and a microphone to be given audible commands and output audible responses along with playing some music. Dum-E also has an LCD screen to display responses and errors.","videoLandscape":"<iframe width=\'500\' height=\'315\' src=\'https://www.youtube.com/embed/_Io_BHvZyO4\' title=\'YouTube video player\' frameborder=\'0\' allow=\'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\' allowfullscreen></iframe>","videoVertical":"<iframe width=\'250\' height=\'300\' src=\'https://www.youtube.com/embed/_Io_BHvZyO4\' title=\'YouTube video player\' frameborder=\'0\' allow=\'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\' allowfullscreen></iframe>","link":{"link":"https://github.com/mghera02/Dum-E-Bot","github":true},"skills":["Raspberry Pi","Robotics","Motor Control","Python","OpenCV","CAD","3D-Printing","Circuit Design"]},{"title":"Accessible Partner Account Explorer","color":"White","year":"2022","description":"The Accessible Partner Account Explorer is a webpage that I designed, created, and pushed to production during my 2022 internship at Amazon. This is an internal page built for customer support and developers for the sellerCentral Amazon site.","videoLandscape":"<iframe width=\'500\' height=\'315\' src=\'https://www.youtube.com/embed/0Me9P6x6LBU\' title=\'YouTube video player\' frameborder=\'0\' allow=\'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\' allowfullscreen></iframe>","videoVertical":"<iframe width=\'250\' height=\'300\' src=\'https://www.youtube.com/embed/0Me9P6x6LBU\' title=\'YouTube video player\' frameborder=\'0\' allow=\'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\' allowfullscreen></iframe>","link":{"link":"","github":false},"skills":["Vue.js","HTML","CSS","JavaScript","Web Design","unit testing","Jest"]},{"title":"H4-KR","color":"Green","year":"2021","description":"H4-KR is a Star Wars inspired droid with a design based off of Chopper from Rebels. H4-KR uses 2 arduinos programmed in C++. Its features are as follows: remote controlled movement via IR remote, semi-autonomous movement using ultrasonic sensor, 10+ diagnostic LEDs, temperature sensor, head movement via servo, hacking capabilities using a ATtiny85.","videoLandscape":"<iframe width=\'500\' height=\'315\' src=\'https://www.youtube.com/embed/rc-0-Qx7w10\' title=\'YouTube video player\' frameborder=\'0\' allow=\'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\' allowfullscreen></iframe>","videoVertical":"<iframe width=\'250\' height=\'300\' src=\'https://www.youtube.com/embed/rc-0-Qx7w10\' title=\'YouTube video player\' frameborder=\'0\' allow=\'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\' allowfullscreen></iframe>","link":{"link":"https://github.com/mghera02/starwarsDroid","github":true},"skills":["Arduino","Robotics","C++","CAD","3D-Printing","Motor Control","Circuit Design"]},{"title":"Sith Holocron","color":"Red","year":"2020-2021","description":"This is a Star Wars inspired IoT project. The sith holocron is built using the same Raspberry Pi that used to host this website. Now it, the raspberry pi is hosting an API which users can use to control the lights and motors embedded in the device and see the output through a live webcam.","videoLandscape":"<iframe width=\'500\' height=\'315\' src=\'https://www.youtube.com/embed/4KzuhPVkj2g\' title=\'YouTube video player\' frameborder=\'0\' allow=\'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\' allowfullscreen></iframe>","videoVertical":"<iframe width=\'250\' height=\'300\' src=\'https://www.youtube.com/embed/4KzuhPVkj2g\' title=\'YouTube video player\' frameborder=\'0\' allow=\'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\' allowfullscreen></iframe>","link":{"link":"http://www.mghera.com/#/HolocronPage","github":false},"skills":["Raspberry Pi","PHP","HTML","CSS","JS","Vue.js","CAD","3D-Printing","Motor Control","Circuit Design","Server Management"]},{"title":"SchedLink","color":"Red","year":"2019-2021","description":"SchedLink is a student and teacher portal used to keep track of bell schedules, extracurricular activities, class updates, and digital hall passes. As the CEO and founder, I Identified the business need and technical solution to aid students and faculty, and developed the initial vision, mission, and project management structure for the team.I was also a full stack developer, so I designed and implemented front and back-end systems including: notifications, settings, sign in, create account, extracurricular management, and creating/signing up for classes. SchedLink Achieved 10k unique views/day and eliminated costs for administration by having a free, multi-tool site.","videoLandscape":"<iframe width=\'500\' height=\'315\' src=\'https://www.youtube.com/embed/HQGwd_BH2-Y\' title=\'YouTube video player\' frameborder=\'0\' allow=\'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\' allowfullscreen></iframe>","videoVertical":"<iframe width=\'250\' height=\'300\' src=\'https://www.youtube.com/embed/HQGwd_BH2-Y\' title=\'YouTube video player\' frameborder=\'0\' allow=\'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\' allowfullscreen></iframe>","link":{"link":"https://schedlink.com/fishers/","github":false},"skills":["HTML","PHP","JS","CSS","Server Management","Project Management","Leadership","Entrepreneurship"]}]}'),X={name:"Gallery",data(){return{projects:J.q,scrollPosition:0,github:{name:"github",color:"rgb(120,100,200)",link:"https://github.com/mghera02"},linkedIn:{name:"linkedIn",color:"rgb(50,65,255)",link:"https://www.linkedin.com/in/matthewghera/"}}},components:{projectContainer:V,routeBtn:U,mediaMedallion:$},methods:{},props:{},computed:{}};const ee=(0,m.Z)(X,[["render",b]]);var oe=ee;const te={id:"holocronPage"},ie={id:"starCollection"},re={id:"kyberCollection"};function ne(e,o,t,i,n,a){const l=(0,r.up)("routeBtn"),s=(0,r.up)("star"),d=(0,r.up)("webcam"),c=(0,r.up)("kyberBtn");return(0,r.wg)(),(0,r.iD)("div",te,[(0,r.Wm)(l,{site:"Gallery",id:"routeBtn"}),(0,r._)("div",ie,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(n.starPos,((e,o)=>((0,r.wg)(),(0,r.iD)("div",{key:o},[(0,r.Wm)(s,{style:(0,f.j5)(a.getPos(e))},null,8,["style"])])))),128))]),(0,r.Wm)(d,{id:"webcamBox"}),(0,r._)("div",re,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(n.kyberColors,((e,o)=>((0,r.wg)(),(0,r.iD)("div",{key:o},[(0,r.Wm)(c,{color:e},null,8,["color"])])))),128))])])}function ae(e,o,t,i,n,a){return(0,r.wg)(),(0,r.iD)("div",{style:(0,f.j5)([a.starColorSize,a.animationAlter])},null,4)}var le={name:"star-comp",data(){return{star:"star"}},computed:{starColorSize(){const e=Math.floor(100*Math.random())+1;let o,t=Math.floor(1e4*Math.random())/2e3;return o=e<=1?"rgb(255,50,15)":e<=8?"rgb(120,170,255)":e<=18?"rgb(255,180,255)":e<=38?"rgb(255,230,180)":"white",t>=4.6&&(t*=Math.floor(5*Math.random())),{background:o,boxShadow:`0px 0px ${1.1*t}px ${t}px ${o}`,height:t+"px",width:t+"px",borderRadius:"50%"}},animationAlter(){const e=(Math.floor(1e3*Math.random())+1)/10+3;return{animation:`flickerAnimation ${e}s infinite`}}}};const se=(0,m.Z)(le,[["render",ae]]);var de=se;const ce={id:"webcamVid",src:"http://seanet.asuscomm.com:8082",allowfullscreen:"true"};function ue(e,o,t,i,n,a){return(0,r.wg)(),(0,r.iD)("img",ce)}var me={name:"webcam"};const he=(0,m.Z)(me,[["render",ue]]);var pe=he,ge=t.p+"img/red.7817f488.png",we=t.p+"img/green.71bc50c6.png",be=t.p+"img/blue.19380f52.png",fe=t.p+"img/cyan.3aa2613f.jpeg",ve=t.p+"img/magenta.d7d9507c.png",ye=t.p+"img/lime.6659e0fa.png",ke=t.p+"img/white.0dbcaa89.png";const Ce=(0,r._)("img",{id:"kyberImg",src:ge},null,-1),Se=(0,r._)("img",{id:"kyberImg",src:we},null,-1),Te=(0,r._)("img",{id:"kyberImg",src:be},null,-1),Me=(0,r._)("img",{id:"kyberImg",src:fe},null,-1),De=(0,r._)("img",{id:"kyberImg",src:ve},null,-1),Ie=(0,r._)("img",{id:"kyberImg",src:ye},null,-1),Pe=(0,r._)("img",{id:"kyberImg",src:ke},null,-1);function xe(e,o,t,i,n,a){return(0,r.wg)(),(0,r.iD)("div",{id:"crystal",onClick:o[14]||(o[14]=e=>a.changeColor())},["red"==t.color?((0,r.wg)(),(0,r.iD)("div",{key:0,onMouseover:o[0]||(o[0]=e=>a.enableBackground()),onMouseleave:o[1]||(o[1]=e=>a.disableBackground())},[(0,r._)("div",{id:"glow",style:(0,f.j5)(a.displayColor)},null,4),Ce],32)):(0,r.kq)("",!0),"green"==t.color?((0,r.wg)(),(0,r.iD)("div",{key:1,onMouseover:o[2]||(o[2]=e=>a.enableBackground()),onMouseleave:o[3]||(o[3]=e=>a.disableBackground())},[(0,r._)("div",{id:"glow",style:(0,f.j5)(a.displayColor)},null,4),Se],32)):(0,r.kq)("",!0),"blue"==t.color?((0,r.wg)(),(0,r.iD)("div",{key:2,onMouseover:o[4]||(o[4]=e=>a.enableBackground()),onMouseleave:o[5]||(o[5]=e=>a.disableBackground())},[(0,r._)("div",{id:"glow",style:(0,f.j5)(a.displayColor)},null,4),Te],32)):(0,r.kq)("",!0),"cyan"==t.color?((0,r.wg)(),(0,r.iD)("div",{key:3,onMouseover:o[6]||(o[6]=e=>a.enableBackground()),onMouseleave:o[7]||(o[7]=e=>a.disableBackground())},[(0,r._)("div",{id:"glow",style:(0,f.j5)(a.displayColor)},null,4),Me],32)):(0,r.kq)("",!0),"magenta"==t.color?((0,r.wg)(),(0,r.iD)("div",{key:4,onMouseover:o[8]||(o[8]=e=>a.enableBackground()),onMouseleave:o[9]||(o[9]=e=>a.disableBackground())},[(0,r._)("div",{id:"glow",style:(0,f.j5)(a.displayColor)},null,4),De],32)):(0,r.kq)("",!0),"lime"==t.color?((0,r.wg)(),(0,r.iD)("div",{key:5,onMouseover:o[10]||(o[10]=e=>a.enableBackground()),onMouseleave:o[11]||(o[11]=e=>a.disableBackground())},[(0,r._)("div",{id:"glow",style:(0,f.j5)(a.displayColor)},null,4),Ie],32)):(0,r.kq)("",!0),"white"==t.color?((0,r.wg)(),(0,r.iD)("div",{key:6,onMouseover:o[12]||(o[12]=e=>a.enableBackground()),onMouseleave:o[13]||(o[13]=e=>a.disableBackground())},[(0,r._)("div",{id:"glow",style:(0,f.j5)(a.displayColor)},null,4),Pe],32)):(0,r.kq)("",!0)])}t(1703);var Le={name:"kyberBtn",data(){return{background:!1}},methods:{changeColor(){const e=`http://seanet.asuscomm.com:8083/${this.color}`;fetch(e).then((e=>{if(!e.ok)throw new Error("Network response was not ok");return e.json()})).then((e=>{console.log(e)})).catch((e=>{console.error("There was a problem with the fetch operation:",e)}))},enableBackground(){this.background=!0},disableBackground(){this.background=!1}},props:{color:{type:String,default:"red"}},computed:{displayColor(){let e="";switch(this.color){case"red":e="redFadeAnim";break;case"green":e="greenFadeAnim";break;case"blue":e="blueFadeAnim";break;case"cyan":e="cyanFadeAnim";break;case"magenta":e="magentaFadeAnim";break;case"lime":e="limeFadeAnim";break;case"white":e="whiteFadeAnim";break}return this.background?{background:this.color,boxShadow:`0px 0px 3rem 5rem ${this.color}`,animation:`${e} 4s infinite`}:{background:"rgba(0,0,0,0)",boxShadow:"0px 0px rgba(0,0,0,0)"}}}};const Ae=(0,m.Z)(Le,[["render",xe]]);var Be=Ae,je={name:"HolocronPage",data(){return{starPos:[],kyberColors:["red","green","blue","cyan","magenta","lime","white"]}},components:{star:de,webcam:pe,kyberBtn:Be,routeBtn:U},computed:{},methods:{getPos(e){return{position:"absolute",top:e[0]+"%",left:e[1]+"%"}}},mounted(){for(let e=0;e<2500;e++){const e=Math.floor(1e4*Math.random())/100,o=Math.floor(1e4*Math.random())/100;this.starPos.push([e,o])}}};const Ee=(0,m.Z)(je,[["render",ne]]);var _e=Ee;const He={"":p,"/":p,"#/":p,"/Gallery":oe,"/HolocronPage":_e};var Oe={data(){return{currentPath:window.location.hash}},computed:{currentView(){return He[this.currentPath.slice(1)||"/"]}},mounted(){window.addEventListener("hashchange",(()=>{this.currentPath=window.location.hash}))}};const Ve=(0,m.Z)(Oe,[["render",n]]);var Re=Ve,We=t(8970);(0,i.ri)(Re).use(We.ZP,{config:{id:"G-0RRKBDQ9B3"}}).mount("#app")}},o={};function t(i){var r=o[i];if(void 0!==r)return r.exports;var n=o[i]={exports:{}};return e[i](n,n.exports,t),n.exports}t.m=e,function(){var e=[];t.O=function(o,i,r,n){if(!i){var a=1/0;for(c=0;c<e.length;c++){i=e[c][0],r=e[c][1],n=e[c][2];for(var l=!0,s=0;s<i.length;s++)(!1&n||a>=n)&&Object.keys(t.O).every((function(e){return t.O[e](i[s])}))?i.splice(s--,1):(l=!1,n<a&&(a=n));if(l){e.splice(c--,1);var d=r();void 0!==d&&(o=d)}}return o}n=n||0;for(var c=e.length;c>0&&e[c-1][2]>n;c--)e[c]=e[c-1];e[c]=[i,r,n]}}(),function(){t.n=function(e){var o=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(o,{a:o}),o}}(),function(){t.d=function(e,o){for(var i in o)t.o(o,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:o[i]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)}}(),function(){t.p="/"}(),function(){var e={143:0};t.O.j=function(o){return 0===e[o]};var o=function(o,i){var r,n,a=i[0],l=i[1],s=i[2],d=0;if(a.some((function(o){return 0!==e[o]}))){for(r in l)t.o(l,r)&&(t.m[r]=l[r]);if(s)var c=s(t)}for(o&&o(i);d<a.length;d++)n=a[d],t.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return t.O(c)},i=self["webpackChunkmghera2"]=self["webpackChunkmghera2"]||[];i.forEach(o.bind(null,0)),i.push=o.bind(null,i.push.bind(i))}();var i=t.O(void 0,[998],(function(){return t(4680)}));i=t.O(i)})();
//# sourceMappingURL=app.c17446ee.js.map