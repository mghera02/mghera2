<template>
    <div id="Home">
        <!--<audio ref="audio" preload="auto" volume="1" loop>
          <source src="@/assets/homeMusic.mp3" />
        </audio>-->
        <div id="mainTitle">
            <span id="thirdWord">Matthew </span>
            <span id="fourthWord">Ghera </span>
        </div>
        <div id="terminalContainer">
            <div id="terminal">
            </div>
        </div>
        <div id="enter" @click="goToNextPage()">
            ENTER
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Home',
        meta: [
            { name: 'description', content: "Matthew Ghera's Website" },
        ],
        data() {
            return {
                randRow: [-1],
                randCol: [-1],
                lastHoriz: 'left',
                lastVert: 'down',
                oldRow: [-1],
                oldCol: [-1],
                playingAudio: false
            }
        },
        methods: {
            goToNextPage() {
                const portfolioBody = document.getElementById('portfolioBody');
                portfolioBody.scrollIntoView({ behavior: 'smooth', block: 'start' });
            },
            playAudio() {
                let audio = this.$refs.audio;
                audio.play();
                this.playingAudio = true;
            },
            startTypingInTerminal() {
                let count = 0;
                setInterval(() => {
                    if (count == 0) {
                        let terminalStr = '"This is where the fun begins." \b - Anakin Skywalker'
                        let terminal = document.getElementById("terminal");
                        if(terminal) {
                            let idx = 0
                            let strIdx = 0;
                            let newUnderline = document.createTextNode('_');
                            setInterval(() => {
                                if(idx < terminalStr.length * 2) {
                                    if(idx % 2 == 0) {
                                        let newChar = document.createTextNode(terminalStr[strIdx]);
                                        if (terminalStr[strIdx] == '\b') {
                                            newChar = document.createElement('br')
                                        }
                                        terminal.appendChild(newChar);
                                        terminal.appendChild(newUnderline);
                                        strIdx++;
                                    } else {
                                        terminal.removeChild(newUnderline);
                                    }
                                    idx++;
                                }
                            }, 80);   
                        }
                    }
                    count = 1;
                }, 2500);
            }
        },
        props: {
        },
        computed: {
        },
        mounted: function () {
            /*this.timer = setInterval(() => {
                this.playAudio()
            }, 1000);*/

            if (document.getElementById("terminal").childNodes.length == 0) {
                this.startTypingInTerminal();
            }

            document.getElementById("backgroundVid").playbackRate = 0.5;
        },
    }
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Iceland');
    @import url('https://fonts.googleapis.com/css2?family=Ubuntu+Mono');
    @import url('https://fonts.googleapis.com/css2?family=Orbitron');

    #Home {
        z-index:-2;
        height: 100vh;
        width:100%;
        display: flex;
        flex-direction: column;
        background: #000;
        /*animation: brightenUpBackground 30s ease-in; */
    }

    @font-face {
        font-family: 'Mandalore';
        src: url('@/assets/Mandalore-K77lD.otf') format('opentype');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'Mandalore-Half';
        src: url('@/assets/MandaloreHalftone-OVVBA.otf') format('opentype');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'Mandalore-Half';
        src: url('@/assets/MandaloreTitle-lggAe.otf') format('opentype');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'LedText';
        src: url('@/assets/LedSledStraightCondensed-roBB.otf') format('opentype');
        font-weight: normal;
        font-style: normal;
    }

    #mainTitle {
        position:relative;
        /*font-family: 'Iceland';*/
        font-family: 'Mandalore-Half';
        font-size:4rem;
        text-align:center;
        color: rgba(255,255,245,.6);
        background: linear-gradient(to right, #000 0, white 20%, #000 40%);
        -webkit-background-clip: text;
        background-position: 0;
        animation: shine 10s infinite linear;
        animation-fill-mode: forwards;
        text-shadow: 
              0rem 0rem 1rem #ffbb55, 
              0rem 0rem 2rem #ffaa44, 
              0rem 0rem 3rem #ff9933, 
              0rem 0rem 4rem #dd8822,   
              0rem 0rem 5rem #cc7711, 
              0rem 0rem 6rem #bb6600;
    }

    #terminalContainer {
        position:relative;
        left: 25%;
        top: 300px;
        width:50%;
        height: 100px
    }

    #terminal {
        float: left;
        font-family: 'orbitron';
        color: #11ee44;
        text-shadow: 
              0rem 0rem .2rem #11ee55, 
              0rem 0rem .4rem #11ff55;
        overflow: hidden;
        margin: 0 auto;
        letter-spacing: .15em;
    }
    
    @keyframes shine {
        0% {
            background-position: 0;
        }
        60% {
            background-position: 60vw;
        }
        100% {
            background-position: 100vw;
        }
    }

    #enter {
        position:relative;
        text-align:center;
        cursor:pointer;
        color:#aaddff;
        font-family: 'Iceland';
        font-size:5rem;
        animation: enterHover1 3s infinite;   
    }

    @media (max-width: 1000px) {
        #mainTitle {
            font-size:4rem;
        }
        #enter {
            font-size:5rem;
            top: 400px;
        }
        #terminal {
            font-size: 1rem;
        }
    }

    @media (min-width: 1000px) {
        #mainTitle {
            font-size:9rem;
            top: 75px;
        }

        #enter {
            font-size:9rem; 
            top: 450px;
        }

        #terminal {
            position: relative;
            font-size: 2.5rem;
            top: -100px;
        }
    }

    #firstWord,
    #secondWord,
    #thirdWord,
    #fourthWord,
    #fifthWord {
        animation: brightenUpMainTitle 30s ease-in;
    }
    
    #enter:hover {
        color: #ffff99;
        animation: enterHover2 3s infinite;   
    }
    #circle1 {
        background:#FF3333;
        width:10rem;
        height:10rem;
        border-radius:50%;
        position:relative;
        left: -12.5rem;
        top:25rem;
        box-shadow: 0rem 0rem 100rem 10rem #FF3333;
    }

@keyframes brightenUpMainTitle {
    0% {
        color: rgba(0,0,0,0);
        text-shadow: none;
    }
    25% {
        color: rgba(70,70,10,.3);
        text-shadow: 
              0rem 0rem .125rem #553300,
              0rem 0rem .25rem #552200, 
              0rem 0rem .5rem #551100, 
              0rem 0rem .6rem #550000, 
    }
    100% {
        color: rgba(255,255,230,.6);
        text-shadow: 
            0rem 0rem .5rem #ffcc66,
            0rem 0rem 1rem #ffbb55, 
            0rem 0rem 2rem #ffaa44, 
            0rem 0rem 2.5rem #ff9933, 
            0rem 0rem 4rem #dd8822,   
            0rem 0rem 5rem #cc7711, 
            0rem 0rem 6rem #bb6600;
    }
}

@keyframes brightenUpBackground {
    0% {
        background: #000;
    }
    100% {
        background: #0737ae;
    }
}

@keyframes enterHover1 {
  0%, 50%, 100% {
      text-shadow: 
            0rem 0rem 1rem #3070e0,
            0rem 0rem 2rem #2060d0, 
            0rem 0rem 4rem #1050c0, 
            0rem 0rem 6rem #0040b0, 
            0rem 0rem 8rem #0030a0,   
            0rem 0rem 10rem #002090, 
            0rem 0rem 12rem #001080;
  }
  25%, 75% {
      text-shadow: 
            0rem 0rem .25rem #3070e0,
            0rem 0rem .5rem #2060d0, 
            0rem 0rem 1rem #1050c0, 
            0rem 0rem 1.5rem #0040b0, 
            0rem 0rem 2rem #0030a0,   
            0rem 0rem 2.5rem #002090, 
            0rem 0rem 3rem #001080;
    }
  }

  @keyframes enterHover2 {
  0%, 50%, 100% {
      text-shadow: 
            0rem 0rem 2rem #ffcc66,
            0rem 0rem 4rem #ffbb55, 
            0rem 0rem 8rem #ffaa44, 
            0rem 0rem 12rem #ff9933, 
            0rem 0rem 16rem #dd8822,   
            0rem 0rem 20rem #cc7711, 
            0rem 0rem 24rem #bb6600;
  
  }
  25%, 75% {
      text-shadow: 
            0rem 0rem .25rem #ffcc66,
            0rem 0rem .5rem #ffbb55, 
            0rem 0rem 1rem #ffaa44, 
            0rem 0rem 1.25rem #ff9933, 
            0rem 0rem 2rem #dd8822,   
            0rem 0rem 2.5rem #cc7711, 
            0rem 0rem 3rem #bb6600;
    }
}
</style>