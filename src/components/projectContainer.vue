<template>
    <div id="projectContainer">
        <div class="topBanner">
            <div id="title" :style="getTitleColor()">
                {{title}}
            </div>
            <div class="likeBtn">
                <img v-if="!liked" src="../assets/like.png" class="likeImg">
                <img v-if="liked" src="../assets/liked.png" class="likeImg">
                {{ likes }}
            </div>
        </div>
        <div class="year">{{year}}</div>
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
                video2: "",
                id: "",
                likes: 0,
                liked: false
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
            },
            getCookie(cookieName) {
                let nameEQ = cookieName + "=";
                let ca = document.cookie.split(';');
                for (let i = 0; i < ca.length; i++) {
                    let c = ca[i];
                    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
                    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
                }
                return null;
            },
            getLikes() {
                const data = { password: this.id, proj: this.title };

                fetch('http://mghera.com:8083/get-proj-likes', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data.item.likers);
                    this.likes = data.item.likers.length;
                    if(data.item.likers.includes(this.id)) {
                        this.liked = true;
                    }
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
            },
            handleLike() {
                if(!this.liked) {
                    this.like();
                } else {
                    this.unlike();
                }
            },
            like() {
                const data = { password: this.id, proj: this.title, likes:  this.likes + 1};
                console.log("liking");
                fetch('http://mghera.com:8083/like-proj', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Like success', data);
                    this.likes = this.likes + 1;
                    this.liked = true;
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
            },
            unlike() {
                const data = { password: this.id, proj: this.title, likes:  this.likes - 1};
                console.log("unliking");

                fetch('http://mghera.com:8083/like-proj', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Like success', data);
                    this.likes = this.likes - 1;
                    this.liked = false;
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
            }
        },
        props: {
            title: String,
            year: String,
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
        mounted: async function () {
            console.log(window.innerWidth)
            if(window.innerWidth >= 1400) {
                this.video = this.videoLandscape;
                this.video2 = this.videoLandscape2;
            } else {
                this.video = this.videoVertical;
                this.video2 = this.videoVertical2;
            }
            this.id = this.getCookie("id");
            console.log("got id: ", this.id);
            await this.getLikes();
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
            padding-bottom: 50px;
            font-family: 'Michroma';
        }

        #projectContainer {
            width: 300px;
        }

        #title {
            font-size:2rem;
        }

        .year {
            font-size:1.5rem;
            margin-left:1rem;
            font-family: 'Michroma';
            font-weight: 700; 
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
            width: 250px;
            height: 300px;
            margin-bottom: 10px;
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
            padding-bottom: 120px;
            font-family: 'Michroma';
        }

        #projectContainer {
            width: 700px;
        }

        #title {
            font-size:2rem;
        }

        .year {
            font-size:1.5rem;
            margin-left:1rem;
            font-family: 'Michroma';
            font-weight: 700; 
        }

        #description {
            font-size: .7rem;
            position:relative;
            width: 50%;
            left: 1%;
            padding-bottom:1.5rem;
        }

        #video {
            width: 315px;
            height: 300px;
            left: 10px;
            top:-20px;
            padding: 30px;
            margin-bottom: 50px;
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
            padding-bottom: 120px;
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
            width: 600px;
            height: 315px;
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

    .topBanner {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .likeBtn {
        display: flex;
        flex-direction: row;
        width: 100px;
        padding-top: 10px;
        height: 75px !important;
        text-align:center;
        height: 3em;
        filter: invert();
        cursor: pointer;
        color: black;
        font-size: 4em;
        font-family: 'Iceland';
    }

    .likeImg {
        width: 50px;
        height: 50px;
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