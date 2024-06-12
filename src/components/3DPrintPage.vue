<template>
   <div>
    <routeBtn :site="'Exit'" id="exitBtn"/>
    <iframe src="https://oe.ink/l/ux1ev3WpVx" width='550' height='550'></iframe>
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
</style>