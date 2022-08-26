<template>
    <div :style="[starColorSize, animationAlter]">
    </div>
</template>

<script>
    export default {
        name: 'star-comp',
        data() {
            return {
                star: 'star'
            }
        },
        computed: {
            starColorSize() {
                const randColor = Math.floor(Math.random() * 100) + 1;

                let randSize = (Math.floor(Math.random() * 10000))/2000;
                
                let background;
                if(randColor <= 1) {
                    background = 'rgb(255,50,15)'
                } else if(randColor <= 8) {
                    background = 'rgb(120,170,255)'
                } else if(randColor <= 18) {
                    background = 'rgb(255,180,255)'
                } else if(randColor <= 38) {
                    background = 'rgb(255,230,180)'
                } else {
                    background = 'white'
                }

                if(randSize >= 4.6) {
                    randSize *= (Math.floor(Math.random() * 5));
                }

                return {
                    background: background,
                    boxShadow: `0px 0px ${randSize * 1.1}px ${randSize}px ${background}`,
                    height: randSize + 'px',
                    width: randSize + 'px',
                    borderRadius: '50%'
                }
            },
            animationAlter() {
                const randNum = (Math.floor(Math.random() * 1000) + 1)/10 + 3;
                return {
                    animation: `flickerAnimation ${randNum}s infinite`
                }
            }
        }
    }
</script>

<style>
    @keyframes flickerAnimation {
    0%   { opacity:1; }
    50%  { opacity:.1; }
    100% { opacity:1; }
    }
</style>