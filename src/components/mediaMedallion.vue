<template>
    <a id="medallion" :style="getBorderColor()" :href="medallionLink" target=”_blank”>
        <img class="picture" src="../assets/githubLogo.png" v-if="medallionType == 'github'">   
        <img class="picture" src="../assets/linkedInLogo.png" v-if="medallionType == 'linkedIn'">             
    </a>
</template>

<script>
    export default {
        name: 'MediaMedallion',
        data() {
            return {
            }
        },
        methods: {
            getBorderColor() {
                return {
                    background: `${this.medallionColor}`,
                    boxShadow: `0px 0px 1rem .3rem ${this.medallionColor}`,
                }  
            }
        },
        props: {
            medallionType: String,
            medallionColor: String,
            medallionLink: String
        },
        computed: {
           
        }
    }
</script>

<style>
    @media (max-width: 1100px) {
        #medallion {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            cursor:pointer;
            pointer-events: visibleFill;
            z-index: 2;
        }

        .picture {
            filter: brightness(0%);
            max-width: 100%;
            max-height: 100%;
            cursor:pointer;
            z-index: 2;
            pointer-events: visibleFill;
        }
    }

    @media (min-width:1100px) {
        #medallion {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            cursor:pointer;
            pointer-events: visibleFill;
            z-index: 2;
        }

        .picture {
            filter: brightness(0%);
            max-width: 100%;
            max-height: 100%;
            cursor:pointer;
            z-index: 2;
            pointer-events: visibleFill;
        }
    }
</style>