<template>
    <div id="signIn">
        <routeBtn :site="'Exit'" id="exitBtn"/>
        <h1>Sign In (STILL IN DEVELOPMENT, NOT WORKING PROPERLY)</h1>
        <div id="signInForm">
            <div id="category">
                <label for="email">Email</label>
                <input type="text" id="email" name="email">
            </div>
            <div id="category">
                <label for="password">Password</label>
                <input type="password" id="password" name="password">
            </div>

            <button @click="submitAccountDetails()">Sign In</button>
        </div>
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
            submitAccountDetails() {
                const email = document.getElementById('email').value;
                const password = document.getElementById('password').value;

                const data = { user: email, password: password };

                fetch('http://mghera.com:8083/check-item', {
                    method: 'GET',
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
    @import url('https://fonts.googleapis.com/css2?family=Iceland');

    #signIn {
        font-family: 'Michroma'; 
    }

    h1 {
        text-align: center;
        font-size: 2em;
    }

    #signInForm {
        position: relative;
        top: 100px;
        display: flex;
        flex-direction: column;
        width: 600px;
        margin:auto;
        justify-content: center;
    }

    label {
        font-size: 1.8em;
        width: 80px;
    }

    #name, 
    #email,
    #password {
        border-color: red;
        display: inline-block;
        margin-bottom: 10px;
        margin-left: 150px;
        font-size: 1.5em;
    }

    #category {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
 </style>