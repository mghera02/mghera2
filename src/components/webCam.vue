<template>
    <img id="webcamVid" src="http://10.0.0.25:8082" allowfullscreen="true"/>
</template>

<script>
    export default {
        name: 'webcam',
    }
</script>

<style>
    @media (max-width: 1000px) {
        #webcamVid {
            width: 100vw;
        }
    }

    @media (min-width: 1000px) {
        #webcamVid {
            width: 20vw;
        }
    }
</style>