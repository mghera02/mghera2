<template>
    <img id="webcamVid" src="http://aquanet.ddnsfree.com:8082" allowfullscreen="true"/>
</template>

<script>
    export default {
        name: 'webcam',
    }
</script>

<style>
    @media (max-width: 1000px) {
        img {
            width: 100vw;
        }
    }

    @media (min-width: 1000px) {
        img {
            width: 22vw;
        }
    }
</style>