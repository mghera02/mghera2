<template>
    <iframe id="webcamVid" src="http://aquanet.ddnsfree.com:8082" height="240" width="320"></iframe>
</template>

<script>
    export default {
        name: 'webcam',
    }
</script>

<style>
    iframe {
        border: .2rem solid black;
        box-shadow: 0px 0px 4rem 2rem black;
    }
</style>