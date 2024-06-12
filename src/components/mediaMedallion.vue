<template>
    <a class="medallion" :style="getBorderColor()" :href="medallionLink" target="_blank" :class="{ 'medallion-visible': visible }">
        <img class="picture" src="../assets/githubLogo.png" v-if="medallionType == 'github'">   
        <img class="picture" src="../assets/linkedInLogo.png" v-if="medallionType == 'linkedIn'">
        <img class="picture" src="../assets/emailLogo.png" v-if="medallionType == 'email'">   
        <img class="smallPicture" src="../assets/printer.png" v-if="medallionType == 'printer'">           
    </a>
</template>

<script>
    export default {
        name: 'MediaMedallion',
        data() {
            return {
                visible: false
            }
        },
        methods: {
            getBorderColor() {
                if(this.visible) {
                    return {
                        transform: 'translateY(0)',
                        background: `${this.medallionColor}`,
                        boxShadow: `0px 0px 1rem .3rem ${this.medallionColor}`,
                    }  
                }
            }
        },
        props: {
            medallionType: String,
            medallionColor: String,
            medallionLink: String
        },
        mounted() {
            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        this.visible = true;
                        observer.disconnect();
                    }
                });
            }, {
            });
            observer.observe(this.$el);
        }
    }
</script>

<style>
    @media (max-width: 1100px) {
        .medallion {
            display: block;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            cursor: pointer;
            pointer-events: visibleFill;
            z-index: 2;
        }

        .picture {
            display: block;
            filter: brightness(0%);
            width: 50px;
            height: 50px;
            cursor: pointer;
            z-index: 2;
            pointer-events: visibleFill;
        }
    }

    @media (min-width: 1100px) {
        .medallion {
            display: block;
            width: 80px;
            height: 80px;
            border-radius: 50%;
            cursor: pointer;
            pointer-events: visibleFill;
            z-index: 2;
        }

        .picture {
            display: block;
            filter: brightness(0%);
            width: 80px;
            height: 80px;
            cursor: pointer;
            z-index: 2;
            pointer-events: visibleFill;
        }

        .smallPicture {
            position: relative;
            display: block;
            filter: brightness(0%);
            width: 60px;
            height: 60px;
            left: 10px;
            top: 10px;
            cursor: pointer;
            z-index: 2;
            pointer-events: visibleFill;
        }
    }

    .medallion {
        background: rgba(0,0,0,0);
        box-shadow: 0px 0px 0rem 0rem rgba(0,0,0,0);
        transform: translateY(20px);
        transition: background 1.5s ease-out, box-shadow 1.5s ease-out, transform 1.5s ease-out;
    }
</style>
