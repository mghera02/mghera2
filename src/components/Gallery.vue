<template>
    <div id="Gallery" v-if="permission">
        <routeBtn :site="'Exit'" id="exitBtn"/>
        <div id="galleryTitle">The Gallery</div>
        <mediaMedallion class="medallion" :medallionType='signIn.name' :medallionColor='signIn.color' :medallionLink='signIn.link'></mediaMedallion>
        <div v-for="project in projects" :key="project" :id="project.title">
            <projectContainer 
                :title="project.title" 
                :color="project.color" 
                :description="project.description" 
                :videoLandscape="project.videoLandscape"
                :videoVertical="project.videoVertical"
                :videoLandscape2="project.videoLandscape2"
                :videoVertical2="project.videoVertical2"
                :skills="project.skills"
                :link="project.link"
                :year="project.year"
                :itemPermission="project.permission"
                :permission="permission"
            />
        </div>
    </div>
</template>

<script>
    import projectContainer from './projectContainer.vue'
    import routeBtn from './routeBtn.vue'
    import data from '../data/projectData.json'
    import { useRoute } from 'vue-router';
    import { onMounted } from 'vue';
    import mediaMedallion from './mediaMedallion.vue'

    export default {
        name: 'Gallery',
        data() {
            return {
                projects: data.projects,
                scrollPosition: 0,
                signIn:{name: "signIn", color: "rgb(230,40,10)", link: "SignIn"},
                id: "",
                permission: 0,
            }
        },
        components: {
            projectContainer,
            mediaMedallion,
            routeBtn
        },
        methods: {
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
            async getAccountDetails() {
                console.log(`id ${this.id}`)
                const data = { password: this.id };

                try {
                    const response = await fetch('http://mghera.com:8083/get-info', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(data)
                    });
                    const responseData = await response.json();
                    console.log('Success1:', responseData);
                    this.name = responseData.name;
                    this.email = responseData.user;
                    this.permission = responseData.permission;
                } catch (error) {
                    console.error('Error:', error);
                }
            },
        },
        props: {
        },
        computed: {
        },
        mounted: async function () {
            this.id = this.getCookie("id");
            await this.getAccountDetails();
            if(!this.id) {
                this.permission = 1;
            }
        },
        setup() {
            const route = useRoute();

            onMounted(() => {
                const elem = route.query.elem;
                if (elem) {
                    const element = document.getElementById(elem);
                    if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                    }
                }
            });
        }
    }
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Iceland');
    body,html {
        overflow-y: visible !important;
    }

    @media (max-width: 1100px) {
        #galleryTitle {
            font-size:5rem;
        }
    }

    @media (min-width:1100px) {
        #galleryTitle {
            font-size:9rem;
        }
    }

    #Gallery {
        display: flex;
        flex-direction: column;
        background: radial-gradient(rgb(80,80,160) 0%, rgb(40,40,90) 40%, rgb(25,25,60)60%);
        justify-content: center;
    }
    #galleryTitle {
        position:relative;
        text-align:center;
        margin-bottom:5rem;
        margin-top:3rem;
        color:#ffccee;
        font-family: 'Iceland';
        text-shadow: 
            0rem 0rem 1rem #ff7788,
            0rem 0rem 2rem #ff5566, 
            0rem 0rem 4rem #ff4444, 
            0rem 0rem 6rem #ff2222, 
            0rem 0rem 8rem #ff0000,   
            0rem 0rem 10rem #ff0000, 
            0rem 0rem 12rem #ff0000;
    }
    #exitBtn {
        position:absolute;
        top:0rem;
        left:1rem;
        font-size: 3rem;
        color:red;
        text-shadow: 0rem 0rem 1rem #ff0000, 0rem 0rem 2rem #ff0000;
        cursor:pointer;
        z-index: 2;
        font-family: 'Iceland';
    }
</style>