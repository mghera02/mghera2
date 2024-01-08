<template>
    <div id="Gallery">
        <mediaMedallion class="githubMedallion" :medallionType='github.name' :medallionColor='github.color' :medallionLink='github.link'></mediaMedallion>
        <mediaMedallion class="linkedInMedallion" :medallionType='linkedIn.name' :medallionColor='linkedIn.color' :medallionLink='linkedIn.link'></mediaMedallion>
        <routeBtn :site="'Exit'" id="exitBtn"/>
        <div id="galleryTitle">The Gallery</div>
        <div v-for="project in projects" :key="project">
            <projectContainer 
                :title="project.title" 
                :color="project.color" 
                :description="project.description" 
                :videoLandscape="project.videoLandscape"
                :videoVertical="project.videoVertical"
                :skills="project.skills"
                :link="project.link"
            />
        </div>
    </div>
</template>

<script>
    import projectContainer from './projectContainer.vue'
    import routeBtn from './routeBtn.vue'
    import mediaMedallion from './mediaMedallion.vue'
    import data from '../data/projectData.json'

    export default {
        name: 'Gallery',
        data() {
            return {
                projects: data.projects,
                scrollPosition: 0,
                github:{name: "github", color: "rgb(120,100,200)", link: "https://github.com/mghera02"},
                linkedIn:{name: "linkedIn", color: "rgb(50,65,255)", link: "https://www.linkedin.com/in/matthewghera/"},
            }
        },
        components: {
            projectContainer,
            routeBtn,
            mediaMedallion
        },
        methods: {
        },
        props: {
        },
        computed: {
        },
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
    .githubMedallion {
        position: fixed;
        top:20px;
        right: 6%;
    } 
    .linkedInMedallion {
        position: fixed;
        top:140px;
        right: 6%;
    } 
</style>