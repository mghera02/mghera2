<template>
    <div id="createAccount">
        <routeBtn :site="'Exit'" id="exitBtn"/>
        <h1>My Account</h1>
    </div>
 </template>
 
 <script>
     import routeBtn from './routeBtn.vue'
 
     export default {
         name: 'Account',
         meta: [
             { name: 'description', content: "Matthew Ghera's Website" },
         ],
         data() {
             return {
                id: "",
                name: "",
                permission: ""
             }
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
            getAccountDetails() {
                const data = { id: this.id };

                fetch('http://mghera.com:8083/get-info', {
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
            this.id = this.getCookie("id");
            this.getAccountDetails();
         },
     }
 </script>
 
 <style>
    @import url('https://fonts.googleapis.com/css2?family=Iceland');
 </style>