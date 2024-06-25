<template>
    <div>
        <routeBtn :site="'Exit'" id="exitBtn"/>
        <h1>Sign In (STILL IN DEVELOPMENT, NOT WORKING PROPERLY)</h1>
        <form action="/signin" method="post" id="signInForm">
            <label for="username">Username</label>
            <input type="text" id="username" name="username" required>

            <label for="password">Password</label>
            <input type="password" id="password" name="password" required>

            <input type="submit" value="Sign In">
        </form>
        <a href="CreateAccount">Create Account</a>
    </div>
 </template>
 
 <script>
     import routeBtn from './routeBtn.vue'
 
     export default {
         name: 'SignIn',
         meta: [
             { name: 'description', content: "Matthew Ghera's Website" },
         ],
         data() {
             return {
             }
         },
         methods: {
         },
         props: {
         },
         components: {
             routeBtn
         },
         computed: {
         },
         mounted: function () {
         },
     }
 </script>
 
 <style>
    #signInForm {
        position: relative;
        top: 100px;
    }
 </style>