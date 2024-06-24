<template>
   <div>
    <routeBtn :site="'Exit'" id="exitBtn"/>
    <iframe src="https://oe.ink/l/ux1ev3WpVx" id="printerLivestream"></iframe>
    </div>
</template>

<script>
    import routeBtn from './routeBtn.vue'

    export default {
        name: '3DPrintPage',
        meta: [
            { name: 'description', content: "Matthew Ghera's Website" },
        ],
        data() {
            return {
            }
        },
        methods: {
        },
        props: {
        },
        components: {
            routeBtn
        },
        computed: {
        },
        mounted: function () {
        },
    }
</script>

<style>
    #printerLivestream {
        display: block;
        position: relative;
        top: 100px;
        margin: auto;
        width:580px !important;
        height:930px !important;
    }
</style>