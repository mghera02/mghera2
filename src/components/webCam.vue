<template>
    <img id="webcamVid" :src="cameraIP" allowfullscreen="true"/>
</template>

<script>
    export default {
        name: 'webcam',
        data() {
            return {
                cameraIP: "http://10.0.0.25:8082"
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
                this.cameraIP = localNetwork ?  'http://98.45.135.99:8082': 'http://10.0.0.25:8082';
                console.log('Using server IP:', this.cameraIP);
            }

            setServerIP();
        },
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