<template>
    <div id="crystal" @click="changeColor()">
        <div v-if="color == 'red'" @mouseover="enableBackground()" @mouseleave="disableBackground()">
            <div id="glow" :style="displayColor"></div>
            <img id = "kyberImg" src="../assets/red.png" />
        </div>
        <div v-if="color == 'green'" @mouseover="enableBackground()" @mouseleave="disableBackground()">
            <div id="glow" :style="displayColor"></div>
            <img id = "kyberImg" src="../assets/green.png" />
        </div>
        <div v-if="color == 'blue'" @mouseover="enableBackground()" @mouseleave="disableBackground()">
            <div id="glow" :style="displayColor"></div>
            <img id = "kyberImg" src="../assets/blue.png" />
        </div>
        <div v-if="color == 'cyan'" @mouseover="enableBackground()" @mouseleave="disableBackground()">
            <div id="glow" :style="displayColor"></div>
            <img id = "kyberImg" src="../assets/cyan.jpeg" />
        </div>
        <div v-if="color == 'magenta'" @mouseover="enableBackground()" @mouseleave="disableBackground()">
            <div id="glow" :style="displayColor"></div>
            <img id = "kyberImg" src="../assets/magenta.png" />
        </div>
        <div v-if="color == 'lime'" @mouseover="enableBackground()" @mouseleave="disableBackground()">
            <div id="glow" :style="displayColor"></div>
            <img id = "kyberImg" src="../assets/lime.png" />
        </div>
        <div v-if="color == 'white'" @mouseover="enableBackground()" @mouseleave="disableBackground()">
            <div id="glow" :style="displayColor"></div>
            <img id = "kyberImg" src="../assets/white.png" />
        </div>
    </div>
</template>

<script>
    export default {
        name: 'kyberBtn',
        data() {
            return {
                background: false,
                apiIP: "http://98.45.135.99:8083"
            }
        },
        methods: {
            changeColor() {
                const apiUrl = `${this.apiIP}/${this.color}`;
                console.log(`request to ${apiUrl}`)
                fetch(apiUrl).then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                }).then(data => {
                    console.log(data);
                }).catch(error => {
                    console.error('There was a problem with the fetch operation:', error);
                });
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
        },
        mounted: function () {
            const isLocalNetwork = async () => {
                try {
                    await fetch('http://98.45.135.99:8082', { mode: 'no-cors' });
                    return true;  // Assume local network if resource is accessible
                } catch (error) {
                    return false;  // Assume external network if resource is not accessible
                }
            }

            const setServerIP = async () => {
                const localNetwork = await isLocalNetwork();
                this.apiIP = localNetwork ?  'http://98.45.135.99:8083': 'http://10.0.0.25:8083';
                console.log('Using server IP:', this.apiIP);
            }

            setServerIP();
        },
    }
</script>

<style>
    @media (max-width: 1000px) {
        #crystal {
            width:15rem;
            height:30rem;
        }

        #kyberImg {
            left:-14rem;
            top:-6rem;
            width: 50rem;
            height: 30rem;
        }
    }

    @media (min-width: 1000px) {
        #crystal {
            width:17rem;
            height:25rem;
        }

        #kyberImg {
            left:-14rem;
            top:-6rem;
            width: 45rem;
            height: 25rem;
        }
    }
    #crystal {
        position:relative;
        display:flex;
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
    #kyberImg {
        position:relative;
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