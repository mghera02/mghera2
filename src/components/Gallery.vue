<template>
    <div id="Gallery">
        <routeBtn :site="'Exit'" id="exitBtn"/>
        <div id="galleryTitle">The Gallery</div>
        <div v-for="project in projects" :key="project">
            <projectContainer 
                :title="project.title" 
                :color="project.color" 
                :description="project.description" 
                :video="project.video"
                :skills="project.skills"
                :link="project.link"
            />
        </div>
    </div>
</template>

<script>
    import projectContainer from './projectContainer.vue'
    import routeBtn from './routeBtn.vue'
    import data from '../data/projectData.json'

    export default {
        name: 'Gallery',
        data() {
            return {
                projects: data.projects,
                scrollPosition: 0,
            }
        },
        components: {
            projectContainer,
            routeBtn
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
        font-size:9rem;
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