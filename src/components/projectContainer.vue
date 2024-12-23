<template>
    <div id="projectContainer">
        <div v-if="itemPermission <= permission">
            <popUp v-if="likesPopUpVisible" title="Sign in to like" mainMessage="In order to like this project, you must sign in first." btnMessage="Sign in" btnLink="signIn" @hidePopUp="hidePopUp($event)"></popUp>
            <div class="topBanner">
                <div id="title" :style="getTitleColor()">
                    {{title}}
                </div>
                <div class="likeBtn" @click="handleLike()">
                    <img v-if="!liked" src="../assets/like.png" class="likeImg">
                    <img v-if="liked" src="../assets/liked.png" class="likeImg">
                    {{ likes }}
                </div>
            </div>
            <div class="year">{{year}}</div>
            <hr :style="getHRColor()">
            <div id="body" v-if="itemPermission != 3">
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
            <div id="altBody" v-if="itemPermission == 3">
                <div v-if="videoLandscape" id="altVideo">
                    <div v-html="video" :style="getBorderColor()"></div>
                </div>
            </div>
            <div v-if="itemPermission != 3">
                <span id="skills" v-for="skill in skills" :key="skill">
                    <span><skillTag :skill="skill" :color="color"/></span>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
    import skillTag from './skillTag.vue'
    import popUp from './popUp.vue'

    export default {
        name: 'projectContainer',
        data() {
            return {
                video: "",
                video2: "",
                id: "",
                likes: 0,
                liked: false,
                likesPopUpVisible: false
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
                    this.likers = data.item.likers;
                    console.log('Success:', this.likers);
                    this.likes = this.likers.length;
                    if(this.likers.includes(this.id)) {
                        this.liked = true;
                    }
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
            },
            handleLike() {
                if(this.id) {
                    if(!this.liked) {
                        this.like();
                    } else {
                        this.unlike();
                    }
                } else {
                    this.likesPopUpVisible = true;
                }
            },
            like() {
                this.likers.push(this.id);
                const data = { password: this.id, proj: this.title, likers:  this.likers};
                console.log("liking: ", this.likers);
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
                this.likers = this.likers.filter(item => item !== this.id);
                const data = { password: this.id, proj: this.title, likers:  this.likers};
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
            },
            hidePopUp(hide) {
                this.likesPopUpVisible = !hide;
            },
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
            link: Object,
            itemPermission: Number,
            permission: Number,
        },
        computed: {
        },
        components: {
            skillTag,
            popUp
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
            console.log(this.permission, this.itemPermission)
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

        .likeBtn {
            width: 70px;
            height: 50px !important;
            height: 3em;
            font-size: 3em;
        }

        .likeImg {
            width: 40px;
            height: 40px;
        }

        .topBanner {
            width: 100%;
            flex-wrap: wrap;
        }

        #altVideo {
            position: relative;
            left: -50px;
            width: 350px;
            height: 350px;
            padding: 50px;
        }

        #altBody {
            padding-bottom: 150px;
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

        #altVideo {
            left: 5%;
            width: 1100px;
            height: 590px;
            padding: 50px;
        }

        #altBody {
            position: relative;
            left: 5%;
            width: 90%;
            padding-bottom: 100px;
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

        #altVideo {
            left: 5%;
            width: 1100px;
            height: 590px;
            padding: 50px;
        }

        #altBody {
            position: relative;
            left: 5%;
            width: 90%;
            padding-bottom: 100px;
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

    #altBody {
        position: relative;
        left: 5%;
        width: 90%;
    }

    .topBanner {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .likeBtn {
        display: flex;
        flex-direction: row;
        text-align:center;
        filter: invert();
        cursor: pointer;
        color: black;
        font-family: 'Iceland';
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