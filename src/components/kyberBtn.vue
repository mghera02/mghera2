<template>
    <div id="crystal" @click="changeColor()">
        <div v-if="color == 'red'" @mouseover="enableBackground()" @mouseleave="disableBackground()">
            <div id="glow" :style="displayColor"></div>
            <img src="../assets/red.png" />
        </div>
        <div v-if="color == 'green'" @mouseover="enableBackground()" @mouseleave="disableBackground()">
            <div id="glow" :style="displayColor"></div>
            <img src="../assets/green.png" />
        </div>
        <div v-if="color == 'blue'" @mouseover="enableBackground()" @mouseleave="disableBackground()">
            <div id="glow" :style="displayColor"></div>
            <img src="../assets/blue.png" />
        </div>
        <div v-if="color == 'cyan'" @mouseover="enableBackground()" @mouseleave="disableBackground()">
            <div id="glow" :style="displayColor"></div>
            <img src="../assets/cyan.jpeg" />
        </div>
        <div v-if="color == 'magenta'" @mouseover="enableBackground()" @mouseleave="disableBackground()">
            <div id="glow" :style="displayColor"></div>
            <img src="../assets/magenta.png" />
        </div>
        <div v-if="color == 'lime'" @mouseover="enableBackground()" @mouseleave="disableBackground()">
            <div id="glow" :style="displayColor"></div>
            <img src="../assets/lime.png" />
        </div>
        <div v-if="color == 'white'" @mouseover="enableBackground()" @mouseleave="disableBackground()">
            <div id="glow" :style="displayColor"></div>
            <img src="../assets/white.png" />
        </div>
    </div>
</template>

<script>
    export default {
        name: 'kyberBtn',
        data() {
            return {
                background: false
            }
        },
        methods: {
            changeColor() {
                location.href = `http://aquanet.ddnsfree.com/php/${this.color}.php`;
            },
            enableBackground() {
                this.background = true;
            },
            disableBackground() {
                this.background = false;
            }
        },
        props: {
            color: {
                type: String,
                default: 'red'
            },
        },
        computed: {
            displayColor() {
                let anim = ''
                switch(this.color) {
                    case 'red':
                        anim = 'redFadeAnim'
                        break;
                    case 'green':
                        anim = 'greenFadeAnim'
                        break;
                    case 'blue':
                        anim = 'blueFadeAnim'
                        break;
                    case 'cyan':
                        anim = 'cyanFadeAnim'
                        break;
                    case 'magenta':
                        anim = 'magentaFadeAnim'
                        break;
                    case 'lime':
                        anim = 'limeFadeAnim'
                        break;
                    case 'white':
                        anim = 'whiteFadeAnim'
                        break;
                }
                if(this.background) {
                    return {
                        background: this.color,
                        boxShadow: `0px 0px 3rem 5rem ${this.color}`,
                        animation: `${anim} 4s infinite`,
                    }
                } else {
                    return {
                        background: 'rgba(0,0,0,0)',
                        boxShadow: `0px 0px rgba(0,0,0,0)`,
                    }
                }
            }
        }
    }
</script>

<style>
    #crystal {
        position:relative;
        display:flex;
        width:17rem;
        height:25rem;
        cursor:pointer;
        margin-right:5rem;
        margin-bottom: 5rem;
        overflow:hidden
    }
    #glow {
        position:relative;
        width: 1.5rem;
        height: 6rem;
        border-radius: 50%;
        left:7.5rem;
        top:9rem;
    }
    img {
        position:relative;
        left:-14rem;
        top:-6rem;
        width: 45rem;
        height: 25rem;
    }
    @keyframes redFadeAnim {
        0%   { box-shadow: 0px 0px 3rem 5rem red}
        50%  { box-shadow: 0px 0px 1rem 3rem red}
        100% { box-shadow: 0px 0px 3rem 5rem red}
    }
    @keyframes blueFadeAnim {
        0%   { box-shadow: 0px 0px 3rem 5rem blue}
        50%  { box-shadow: 0px 0px 2rem 3rem blue}
        100% { box-shadow: 0px 0px 3rem 5rem blue}
    }
    @keyframes greenFadeAnim {
        0%   { box-shadow: 0px 0px 3rem 5rem green}
        50%  { box-shadow: 0px 0px 2rem 3rem green}
        100% { box-shadow: 0px 0px 3rem 5rem green}
    }
    @keyframes cyanFadeAnim {
        0%   { box-shadow: 0px 0px 3rem 5rem cyan}
        50%  { box-shadow: 0px 0px 2rem 3rem cyan}
        100% { box-shadow: 0px 0px 3rem 5rem cyan}
    }
    @keyframes magentaFadeAnim {
        0%   { box-shadow: 0px 0px 3rem 5rem magenta}
        50%  { box-shadow: 0px 0px 2rem 3rem magenta}
        100% { box-shadow: 0px 0px 3rem 5rem magenta}
    }
    @keyframes limeFadeAnim {
        0%   { box-shadow: 0px 0px 3rem 5rem lime}
        50%  { box-shadow: 0px 0px 2rem 3rem lime}
        100% { box-shadow: 0px 0px 3rem 5rem lime}
    }
    @keyframes whiteFadeAnim {
        0%   { box-shadow: 0px 0px 3rem 5rem white}
        50%  { box-shadow: 0px 0px 2rem 3rem white}
        100% { box-shadow: 0px 0px 3rem 5rem white}
    }
</style>