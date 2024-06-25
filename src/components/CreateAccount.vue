<template>
    <div>
        <routeBtn :site="'Exit'" id="exitBtn"/>
        <h1>Create Account (STILL IN DEVELOPMENT, NOT WORKING PROPERLY)</h1>
        <div id="signInForm">
            <label for="username">Username</label>
            <input type="text" id="username" name="username">

            <label for="password">Password</label>
            <input type="password" id="password" name="password">

            <button @click="submitAccountDetails()">Sign In</button>
        </div>
    </div>
 </template>
 
 <script>
     import routeBtn from './routeBtn.vue'
 
     export default {
         name: 'CreateAccount',
         meta: [
             { name: 'description', content: "Matthew Ghera's Website" },
         ],
         data() {
             return {
             }
         },
         methods: {
            submitAccountDetails() {
                const key = document.getElementById('username').value;
                const value = document.getElementById('password').value;

                console.log(key, value)

                const data = { user: "testUser", key: key, value: value };

                fetch('http://mghera.com:8083/put-item', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
            }
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