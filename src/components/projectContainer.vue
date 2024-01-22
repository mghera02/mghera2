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
            <div>
                <div v-if="videoLandscape" id="video">
                <div v-html="video" :style="getBorderColor()"></div>
                </div>
                <div v-if="videoLandscape2" id="video">
                    <div v-html="video2" :style="getBorderColor()"></div>
                </div>
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
                video: "",
                video2: ""
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
            videoLandscape: String,
            videoVertical: String,
            videoLandscape2: String,
            videoVertical2: String,
            skills: Array,
            link: Object
        },
        computed: {
        },
        components: {
            skillTag
        },
        mounted: function () {
            console.log(window.innerWidth)
            if(window.innerWidth >= 1400) {
                this.video = this.videoLandscape;
                this.video2 = this.videoLandscape2;
            } else {
                this.video = this.videoVertical;
                this.video2 = this.videoVertical2;
            }
        },
    }
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Iceland');
    @import url('https://fonts.googleapis.com/css2?family=Michroma');

    @media (max-width: 1100px) {
        #body {
            position:relative;
            top: 1rem;
            padding-bottom: 4rem;
            font-family: 'Michroma';
        }

        #projectContainer {
            width: 400px;
        }

        #title {
            font-size:2rem;
        }

        #description {
            font-size: .7rem;
            position:relative;
            left: 1%;
            padding-bottom:1.5rem;
            width: 98%;
        }

        #video {
            left: 6%;
            width: 350px;
            height: 300px;
        }

        .gitHubLink, .projectLink {
            font-size: 1rem;
        }
    }

    @media (min-width: 1100px) {
        #body {
            position:relative;
            top: 1rem;
            display: flex;
            flex-direction: row;
            padding-bottom: 4rem;
            font-family: 'Michroma';
        }

        #projectContainer {
            width: 700px;
        }

        #title {
            font-size:2rem;
        }

        #description {
            font-size: .7rem;
            position:relative;
            width: 50%;
            left: 1%;
            padding-bottom:1.5rem;
        }

        #video {
            width: 350px;
            height: 300px;
            left: 10px;
            top:-20px;
            padding: 30px;
        }

        .gitHubLink, .projectLink {
            font-size: 1rem;
        }
    }

    @media (min-width: 1400px) {
        #body {
            position:relative;
            top: 1rem;
            display: flex;
            flex-direction: row;
            padding-bottom: 4rem;
            font-family: 'Michroma';
        }

        #projectContainer {
            width: 1300px;
        }

        #title {
            font-size:3rem;
        }

        #description {
            font-size: 1.4rem;
            position:relative;
            width: 50%;
            left: 1%;
            padding-bottom:1.5rem;
        }

        #video {
            left: 5%;
            width: 500px;
            padding: 50px;
        }

        .gitHubLink, .projectLink {
            font-size: 2rem;
        }
    }

    #projectContainer {
        position:relative;
        margin:auto;
        border-radius: 1rem;
        background-image:linear-gradient(135deg, #040015 0%, #222244 10%, #040015 30%);
        box-shadow:0px 0px 2rem .5rem #282848 inset;
        margin-bottom: 5rem;
        animation: loadIn 2s;   
    }

    #title {
        margin-left:1rem;
        font-family: 'Michroma';
        font-weight: 700; 
    }

    #video {
        position:relative;
    }

    .flex-break {
        flex-basis: 100%;
        height: 0;
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