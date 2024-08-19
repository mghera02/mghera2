<template>
    <div class="popUp">
        <div class="greyBackground"></div>
        <div class="popUpBox">
            <div class="topSection">
                <img src="../assets/remove.png" class="xIcon" @click="hidePopUp"/>
                <div class="title"> {{ title }} </div>
            </div>
            <div class="popUpBody"> {{ mainMessage }} </div>
            <a :href="btnLink" class="popUpLink"> {{ btnMessage }} </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'popUp',
        data() {
            return {
            };
        },
        methods: {
            hidePopUp() {
                this.$emit('hidePopUp', true);
            }
        },
        props: {
            title: String,
            mainMessage: String,
            btnMessage: String,
            btnLink: String
        },
        mounted() {
        }
    }
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Iceland');
@import url('https://fonts.googleapis.com/css2?family=Michroma');

.popUp {
    position: absolute;
    width: 100%;
    height: 100%;
    font-family: 'michroma';
}

.greyBackground {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 2;
    background-color: rgba(0,0,0,.8);
}

.popUpBox {
    position: absolute;
    width: 90%;
    height: 30%;
    left: 5%;
    top: 5%;
    display: flex;
    flex-direction: column;
    background: black;
    z-index: 3;
}

.topSection {
    position: relative;
    width: 100%;
    height: 25%;
    border-bottom: solid;
    border-color: white;
}

.xIcon {
    position: absolute;
    filter: invert();
    width: 70px;
    height: 70px;
    display: inline;
    float: left;
    cursor: pointer;
    z-index: 4;
}

.title {
    position: relative;
    display: block;
    font-size: 2.5em;
    text-align: center;
    width: 100%;
    padding-top: 25px;
}

.popUpBody {
    margin-top: 20px;
    font-size: 1.8em;
    text-align: center;
    width: 100%;
    height: 30%; 
}

.popUpLink {
    background: white;
    color: black;
    width: 200px;
    font-size: 2em;
    height: 50px;
    margin:auto;
    border-radius: 15px;
    text-decoration: none;
    text-align: center;
}
</style>
