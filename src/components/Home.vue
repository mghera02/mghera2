<template>
    <div id="Home">
        <div v-for="magicRow in 50" :key="magicRow" class="magicRow">
            <div v-for="magicCol in 50" :key="magicCol" class="magicCol">
                <div class="magicItem" :style="brightenUp()" v-if="checkIfExists(magicRow,magicCol)"></div>
                <div class="oldMagicItem" :style="change()" v-else-if="checkIfExisted(magicRow,magicCol)"></div>
            </div>
        </div>
        <div id="mainTitle">
            <span id="firstWord">Welcome </span>
            <span id="secondWord">to </span>
            <br>
            <span id="thirdWord">Matthew </span>
            <span id="fourthWord">Ghera's </span>
            <br>
            <span id="fifthWord">Website </span>
        </div>
        <div id="enter" @click="goToNextPage()">
            ENTER
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Home',
        data() {
            return {
                randRow: [-1],
                randCol: [-1],
                lastHoriz: 'left',
                lastVert: 'down',
                oldRow: [-1],
                oldCol: [-1],
                magicInterval: null
            }
        },
        methods: {
            brightenUp() {
                return {
                    background: 'rgb(255,255,0)',
                    boxShadow: '0px 0px 3rem 1.5rem rgb(220,170,40)',
                }
            },
            change() {
                return {
                    background: 'rgb(255,255,150)',
                    boxShadow: '0px 0px 1rem .5rem rgb(255,200,100)',
                    animation: `flickerAnimation 1s infinite`,
                }
            },
            checkIfExisted(magicRow, magicCol) {
                let retVal = false;
                let rowIdx = []
                let overlap = false

                this.oldRow.forEach((row,index) => {
                    if(row == magicRow) {
                        rowIdx.push(index)
                    }
                })
                this.oldCol.forEach((col,index) => {
                    if(col == magicCol && rowIdx.includes(index)) {
                        overlap = true
                    }
                })
                if(this.oldRow.includes(magicRow) && this.oldCol.includes(magicCol) && overlap) {
                    retVal = true
                }

                return retVal
            },
            checkIfExists(magicRow, magicCol) {
                let retVal = false;
                let rowIdx = []
                let overlap = false

                this.randRow.forEach((row,index) => {
                    if(row == magicRow) {
                        rowIdx.push(index)
                    }
                })
                this.randCol.forEach((col,index) => {
                    if(col == magicCol && rowIdx.includes(index)) {
                        overlap = true
                    }
                })
                if(this.randRow.includes(magicRow) && this.randCol.includes(magicCol) && overlap) {
                    retVal = true
                }

                return retVal
            },
            goToNextPage() {
                //window.location = window.location.href + "#/HolocronPage"
                clearInterval(this.magicInterval);
                if(window.location.href.indexOf('#') > -1) {
                    window.location = window.location.href + "Gallery"
                } else {
                    window.location = window.location.href + "#/Gallery"
                }
            }
        },
        props: {
        },
        computed: {
        },
        mounted: function () {
        }
    }
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Iceland');

    #Home {
        z-index:-2;
        height: 100%;
        width:100%;
        display: flex;
        flex-direction: column;
        background: rgb(16,9,129);
        background: linear-gradient(180deg, rgba(14,5,120,1) 25%, rgba(20,0,230,1) 58%, rgba(130,0,200,1) 100%);
        overflow: hidden;
    }

    #mainTitle {
        position:relative;
        top: 10%;
        color:#ffff99;
        font-family: 'Iceland';
        font-size:4rem;
        text-align:center;
        text-shadow: 
            0rem 0rem .25rem #ffcc66,
            0rem 0rem .5rem #ffbb55, 
            0rem 0rem 1rem #ffaa44, 
            0rem 0rem 1.25rem #ff9933, 
            0rem 0rem 2rem #dd8822,   
            0rem 0rem 2.5rem #cc7711, 
            0rem 0rem 3rem #bb6600;
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
            top: 50%;
        }
    }

    @media (min-width: 1000px) {
        #mainTitle {
            font-size:9rem;
            
        }

        #enter {
            font-size:9rem; 
            top: 30%;
        }
    }

    #firstWord {
        animation: flickerNeonSign1 20s infinite alternate;   
    }
    #secondWord {
        animation: flickerNeonSign2 40s infinite alternate;   
    }
    #thirdWord {
        animation: flickerNeonSign3 30s infinite alternate;   
    }
    #fourthWord {
        animation: flickerNeonSign1 25s infinite alternate;   
    }
    #fifthWord {
        animation: flickerNeonSign2 44s infinite alternate;   
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

@keyframes flickerNeonSign1 {
    
  0%, 18%, 22%, 25%, 39%, 41%, 53%, 57%, 100% {

      text-shadow: 
            0rem 0rem .25rem #ffcc66,
            0rem 0rem .5rem #ffbb55, 
            0rem 0rem 1rem #ffaa44, 
            0rem 0rem 1.25rem #ff9933, 
            0rem 0rem 2rem #dd8822,   
            0rem 0rem 2.5rem #cc7711, 
            0rem 0rem 3rem #bb6600;
  }
  
  20%, 24%, 40%, 55% {        
      text-shadow: none;
  }    
}

@keyframes flickerNeonSign2 {
    
  0%, 12%, 14%, 31%, 33%, 63%, 65%, 82%, 84%, 98%, 100% {

      text-shadow: 
            0rem 0rem .25rem #ffcc66,
            0rem 0rem .5rem #ffbb55, 
            0rem 0rem 1rem #ffaa44, 
            0rem 0rem 1.25rem #ff9933, 
            0rem 0rem 2rem #dd8822,   
            0rem 0rem 2.5rem #cc7711, 
            0rem 0rem 3rem #bb6600;
  }
  
  13%, 32%, 64%, 83%, 99% {        
      text-shadow: none;
  }    
}

@keyframes flickerNeonSign3 {
    
  0%, 4%, 6%, 24%, 26%, 49%, 51%, 74%, 76%, 89%, 91% {

      text-shadow: 
            0rem 0rem .25rem #ffcc66,
            0rem 0rem .5rem #ffbb55, 
            0rem 0rem 1rem #ffaa44, 
            0rem 0rem 1.25rem #ff9933, 
            0rem 0rem 2rem #dd8822,   
            0rem 0rem 2.5rem #cc7711, 
            0rem 0rem 3rem #bb6600;
  }
  
  5%, 25%, 50%, 75%, 90% {        
      text-shadow: none;
  }    
}

@keyframes flickerAnimation {
    0%   { opacity:1; }
    50%  { opacity:.1; }
    100% { opacity:1; }
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