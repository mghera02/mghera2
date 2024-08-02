<template>
    <div id="createAccount">
        <routeBtn :site="'Exit'" id="exitBtn"/>
        <h1>{{ name }}</h1>
        <h6>Permissions Level: {{ permissionConversion[permission] }}</h6>
        <h6>Email: {{ email }}</h6>
        <button @click="signOut()">Sign Out</button>
        <div v-if="permission == 3" id="allItems">
            <div class="itemCell" v-for="item, idx in allItems" :key="idx">
                <div class="itemInfo">
                    {{item}}
                </div>
                <div class="permissionChanger" @click="promote(item.id)">
                    +
                </div>
                <div class="permissionChanger" @click="demote(item.id)">
                    -
                </div>
            </div>
        </div>
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
                email: "",
                permission: "",
                permissionConversion: {1: "Default", 2: "Trusted", 3: "Admin"},
                allItems: []
             }
         },
         methods: {
            setCookie(cookieName, value) {
                let expires = "";
                let date = new Date();
                date.setTime(date.getTime() + (100 * 365 * 24 * 60 * 60 * 1000)); // 100 years
                expires = "; expires=" + date.toUTCString();
                document.cookie = cookieName + "=" + (value || "") + expires + "; path=/; secure; SameSite=Strict";
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
                    console.log('Success1:', data);
                    this.name = data.name;
                    this.email = data.user;
                    this.permission = data.permission;
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
            },
            signOut() {
                this.setCookie("id", 0);
                window.location = "SignIn"
            },
            getAllItems() {
                const data = { user: this.email, attr: 'permission', val: this.permission + 1};
                fetch('http://mghera.com:8083/get-all-items', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Success2:', data);
                    this.allItems = data;
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
            },
            promote(item) {
                console.log(item);
            }

         },
         props: {
         },
         components: {
             routeBtn
         },
         computed: {
         },
         mounted: async function () {
            this.id = this.getCookie("id");
            this.getAccountDetails();
            await this.getAllItems();
         },
     }
 </script>
 
 <style>
    @import url('https://fonts.googleapis.com/css2?family=Iceland');

    #allItems {
        border:solid;
        border-color: blue;
        display: flex;
        flex-direction: column;

    }

    .itemCell {
        border: solid;
        border-color: red;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .itemInfo {
        border: solid;
        border-color: orange;
        width: 90%;
    }

    .permissionChanger {
        border: solid;
        border-color: green;
        width: 5%;
        text-align: center;
        cursor: pointer;
    }
 </style>