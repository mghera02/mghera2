<template>
    <div id="projectContainer">
        <div id="title" :style="getTitleColor()">
            {{title}}
        </div>
        <hr :style="getHRColor()">
        <div id="body">
            <div id="description">
                {{description}}
                <br>
                <div v-if="link.link">
                    <a v-if="link.github" :href="link.link" target="_blank" class="gitHubLink">Go to the GitHub</a>
                    <a v-else :href="link.link" target="_blank" class="projectLink" :style="getTitleColor()">Go to the Project!</a>
                </div>
            </div>
            <div id="video">
                <div v-html="video" :style="getBorderColor()"></div>
            </div>
        </div>
        <span id="skills" v-for="skill in skills" :key="skill">
            <span><skillTag :skill="skill" :color="color"/></span>
        </span>
    </div>
</template>

<script>
    import skillTag from './skillTag.vue'

    export default {
        name: 'projectContainer',
        data() {
            return {
            }
        },
        methods: {
            getTitleColor() {
                return {
                    'color': this.color,
                    'textShadow': 
                        `0rem 0rem 2rem ${this.color}, 0rem 0rem 5rem ${this.color}`
                }  
            },
            getHRColor() {
                return {
                    'height': '0.2rem',
                    'border': 'none',
                    'background-color': this.color,
                }  
            },
            getBorderColor() {
                return {
                    boxShadow: `0px 0px 1.5rem .75rem ${this.color}`,
                }  
            }
        },
        props: {
            title: String,
            color: String,
            description: String,
            video: String,
            skills: Array,
            link: Object
        },
        computed: {
        },
        components: {
            skillTag
        },
        mounted: function () {
        },
    }
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Iceland');
    @import url('https://fonts.googleapis.com/css2?family=Michroma');

    #projectContainer {
        position:relative;
        margin:auto;
        width: 1700px;
        border-radius: 1rem;
        background-image:linear-gradient(135deg, #040015 0%, #222244 10%, #040015 30%);
        box-shadow:0px 0px 2rem .5rem #282848 inset;
        margin-bottom: 5rem;
        animation: loadIn 2s;   
    }

    #title {
        margin-left:1rem;
        font-size:2rem;
        font-family: 'Michroma';
        font-weight: 700; 
    }

    #body {
        position:relative;
        top: 1rem;
        display: flex;
        flex-direction: row;
        padding-bottom: 4rem;
        font-family: 'Michroma';
    }

    #description {
        position:relative;
        width: 50%;
        font-size: 1.4rem;
        left: 1%;
        padding-bottom:1.5rem;
    }

    #video {
        position:relative;
        left: 10%;
    }

    .gitHubLink {
        font-size: 2rem;
    }

    .projectLink {
        font-size: 2rem;
    }

    @keyframes loadIn {
    0% { 
        opacity:0; 
        transform: translateY(-50px);
        transition: 1s all ease;
    }
    100% { 
        opacity:1; 
    }
}
</style>