<template>
    <div id="routeBtn" @click="changeRoute()">{{ site }}</div>
</template>

<script>
    export default {
        name: 'routeBtn',
        data() {
            return {
            }
        },
        methods: {
            changeRoute() {
                let site = ""
                if(this.site != "Exit") {
                    site = this.site
                }
                window.location = "http://aquanet.ddnsfree.com/#/" + site
            }
        },
        props: {
            site: {
                type: String,
            },
        },
        computed: {
        }
    }
</script>

<style>
    #routeBtn {
        font-size: 3rem !important;
        color:red;
        text-shadow: 0rem 0rem 1rem #ff0000, 0rem 0rem 2rem #ff0000;
        cursor:pointer;
        z-index: 2;
        font-family: 'Iceland';
    }
</style>