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
                window.location = window.location.href + "#/HolocronPage"
            }
        },
        props: {
        },
        computed: {
        },
        mounted: function () {
            //let counter = 0;
            setInterval(() => {
                //console.log(counter)
                const d = new Date();
                console.log('seconds since:', d.getUTCMilliseconds()-this.time)
                this.time = d.getUTCMilliseconds();
                console.log(this.oldRow.length)
                if(this.randRow[0] == -1 || this.randCol[0] == -1) {
                    this.randRow[0] = Math.floor(Math.random() * 25) + 12;
                    this.randCol[0] = Math.floor(Math.random() * 25) + 12;
                    for(let i = 0; i < 10; i++) {
                        const randDeg = ((Math.random() * 360))
                        let x = Math.cos(randDeg * Math.PI/180) * ((Math.random() * 8) + 1);
                        let y = Math.sin(randDeg * Math.PI/180) * ((Math.random() * 12) + 1);
                        this.randRow.push(Math.floor(this.randRow[0] + y));
                        this.randCol.push(Math.floor(this.randCol[0] + x));
                    }
                } else {
                    let upDown = Math.floor(Math.random() * 20) + 1;
                    let leftRight = Math.floor(Math.random() * 20) + 1;

                    if(this.randRow[0] == 50) {
                        this.randRow[0] -= 1;
                        this.lastVert = 'down'
                    } else if(this.randRow[0] == 0) {
                        this.randRow[0] += 1;
                        this.lastVert = 'up'
                    } else {
                        if(this.lastVert == 'down') {
                            if(upDown <= 19) {
                                this.randRow[0] -= 1;
                                this.lastVert = 'down'
                            } else {
                                this.randRow[0] += 1;
                                this.lastVert = 'up'
                            }
                        } else {
                            if(upDown <= 19) {
                                this.randRow[0] += 1;
                                this.lastVert = 'up'
                            } else {
                                this.randRow[0] -= 1;
                                this.lastVert = 'down'
                            }
                        }
                    }

                    if(this.randCol[0] == 50) {
                        this.randCol[0] -= 1;
                        this.lastHoriz = 'left'
                    } else if(this.randCol[0] == 0) {
                        this.randCol[0] += 1;
                        this.lastHoriz = 'right'
                    } else {
                        if(this.lastHoriz == 'left') {
                            if(leftRight <= 19) {
                                this.randCol[0] -= 1;
                                this.lastHoriz = 'left'
                            } else {
                                this.randCol[0] += 1;
                                this.lastHoriz = 'right'
                            }
                        } else {
                            if(leftRight <= 19) {
                                this.randCol[0] += 1;
                                this.lastHoriz = 'right'
                            } else {
                                this.randCol[0] -= 1;
                                this.lastHoriz = 'left'
                            }
                        }
                    }
                    
                    this.randRow.forEach((row,idx) => {
                        if(idx) {
                            if(this.randRow[idx] - this.randRow[0] > 4) {
                                this.randRow[idx] -= 5;
                            } else if(this.randRow[idx] - this.randRow[0] < -4) {
                                this.randRow[idx] += 5;
                            } else {
                                this.randRow[idx] += (Math.floor(Math.random() * 3) - 1);
                            }

                            if(this.randCol[idx] - this.randCol[0] > 4) {
                                this.randCol[idx] -= 5;
                            } else if(this.randCol[idx] - this.randCol[0] < -4) {
                                this.randCol[idx] += 5;
                            } else {
                                this.randCol[idx] += (Math.floor(Math.random() * 3) - 1);
                            }
                        }

                        let randNum = (Math.floor(Math.random() * 50))
                        if (randNum < 6) {
                            this.oldRow.push(this.randRow[idx])
                            this.oldCol.push(this.randCol[idx])
                        }
                        if(this.oldRow.length > 40) {
                            this.oldRow.shift()
                            this.oldCol.shift()
                        }
                    })
                }
                //counter++;
            }, 10)
        },
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
        background: radial-gradient(rgb(80,80,160) 0%, rgb(40,40,90) 40%, rgb(25,25,60)60%);
        overflow: hidden;
        /*background-image: url('../assets/bricks.jpg');
        background-repeat: no-repeat;
        background-size: cover;*/
    }
    .magicRow {
        height: 10%;
        width:100%;
        display: flex;
        flex-direction: row;
    }
    .magicCol {
        width: 10%;
        height:100%;
        border-radius: 50%;
    }
    .magicItem {
        width:30%;
        height:60%;
        border-radius: 50%;
    }
    .oldMagicItem {
        width:15%;
        height:30%;
        border-radius: 50%;
        z-index:2;
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
    #mainTitle {
        position:absolute;
        top:27.5%;
        left:30%;
        color:#ffccee;
        font-family: 'Iceland';
        font-size:9rem;
        text-align:center;
        text-shadow: 
            0rem 0rem 1rem #ff7788,
            0rem 0rem 2rem #ff5566, 
            0rem 0rem 4rem #ff4444, 
            0rem 0rem 6rem #ff2222, 
            0rem 0rem 8rem #ff0000,   
            0rem 0rem 10rem #ff0000, 
            0rem 0rem 12rem #ff0000;
    }
    #enter {
        position:absolute;
        top:80%;
        cursor:pointer;
        left:41.75%;
        color:#60a0ff;
        font-family: 'Iceland';
        font-size:9rem;
        text-shadow: 
            0rem 0rem 1rem #60a0ff,
            0rem 0rem 2rem #5080ff, 
            0rem 0rem 4rem #4070ff, 
            0rem 0rem 6rem #3060ff, 
            0rem 0rem 8rem #2050ff,   
            0rem 0rem 10rem #1040ff, 
            0rem 0rem 12rem #0030ff;
    }
    #enter:hover {
        animation: enterHover 3s infinite;   
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
            0rem 0rem 1rem #ff7788,
            0rem 0rem 2rem #ff5566, 
            0rem 0rem 4rem #ff4444, 
            0rem 0rem 6rem #ff2222, 
            0rem 0rem 8rem #ff0000,   
            0rem 0rem 10rem #ff0000, 
            0rem 0rem 12rem #ff0000;
  
  }
  
  20%, 24%, 40%, 55% {        
      text-shadow: none;
  }    
}

@keyframes flickerNeonSign2 {
    
  0%, 12%, 14%, 31%, 33%, 63%, 65%, 82%, 84%, 98%, 100% {

      text-shadow: 
            0rem 0rem 1rem #ff7788,
            0rem 0rem 2rem #ff5566, 
            0rem 0rem 4rem #ff4444, 
            0rem 0rem 6rem #ff2222, 
            0rem 0rem 8rem #ff0000,   
            0rem 0rem 10rem #ff0000, 
            0rem 0rem 12rem #ff0000;
  
  }
  
  13%, 32%, 64%, 83%, 99% {        
      text-shadow: none;
  }    
}

@keyframes flickerNeonSign3 {
    
  0%, 4%, 6%, 24%, 26%, 49%, 51%, 74%, 76%, 89%, 91% {

      text-shadow: 
            0rem 0rem 1rem #ff7788,
            0rem 0rem 2rem #ff5566, 
            0rem 0rem 4rem #ff4444, 
            0rem 0rem 6rem #ff2222, 
            0rem 0rem 8rem #ff0000,   
            0rem 0rem 10rem #ff0000, 
            0rem 0rem 12rem #ff0000;
  
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

@keyframes enterHover {
    
  0%, 50%, 100% {

      text-shadow: 
            0rem 0rem 1rem #60a0ff,
            0rem 0rem 2rem #5080ff, 
            0rem 0rem 4rem #4070ff, 
            0rem 0rem 6rem #3060ff, 
            0rem 0rem 8rem #2050ff,   
            0rem 0rem 10rem #1040ff, 
            0rem 0rem 12rem #0030ff;
  
  }

  25%, 75% {

      text-shadow: 
            0rem 0rem .25rem #60a0ff,
            0rem 0rem .5rem #5080ff, 
            0rem 0rem 1rem #4070ff, 
            0rem 0rem 1.25rem #3060ff, 
            0rem 0rem 2rem #2050ff,   
            0rem 0rem 2.5rem #1040ff, 
            0rem 0rem 3rem #0030ff;
  
  }

}

</style>