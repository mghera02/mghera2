<template>
    <div id="createAccount">
        <routeBtn :site="'Exit'" id="exitBtn"/>
        <h1>{{ name }}</h1>
        <div id="personalInfo">
            <h6>Permissions Level: {{ permissionConversion[permission] }}</h6>
            <h6>Email: {{ email }}</h6>
        </div>
        <button @click="signOut()" id="signOutBtn">Sign Out</button>
        <div v-if="permission == 3" id="allItems">
            <div class="itemCell" v-for="item, idx in allItems" :key="idx">
                <div class="itemInfo">
                    {{item}}
                </div>
                <div class="permissionChanger" @click="promote(item.user, item.permission)">
                    +
                </div>
                <div class="permissionChanger" @click="demote(item.user, item.permission)">
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
            document.cookie = cookieName + "=" + (value || "") + expires + "; path=/; same_site=none";
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
        async signOut() {
            this.setCookie("id", 0);
            window.location = "SignIn"
        },
        async getAllItems() {
            const data = { password: this.id };
            try {
                const response = await fetch('http://mghera.com:8083/get-all-items', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                });
                const responseData = await response.json();
                console.log('Success2:', responseData);
                this.allItems = responseData;
            } catch (error) {
                console.error('Error:', error);
            }
        },
        async promote(item, permission) {
            const data = { user: item, attr: 'permission', val: permission + 1, password: this.id };
            try {
                const response = await fetch('http://mghera.com:8083/update-item', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                });
                const responseData = await response.json();
                console.log('Success2:', responseData);
                this.allItems = responseData;
            } catch (error) {
                console.error('Error:', error);
            }
        },
        async demote(item, permission) {
            const data = { user: item, attr: 'permission', val: permission - 1, password: this.id };
            try {
                const response = await fetch('http://mghera.com:8083/update-item', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                });
                const responseData = await response.json();
                console.log('Success2:', responseData);
                this.allItems = responseData;
            } catch (error) {
                console.error('Error:', error);
            }
        }
    },
    components: {
        routeBtn
    },
    mounted: async function () {
        this.id = this.getCookie("id");
        await this.getAccountDetails();
        if (this.permission == 3) {
            console.log("permission was 3 so requesting all items")
            await this.getAllItems();
        }
    },
}
</script>

 
 <style>
    @import url('https://fonts.googleapis.com/css2?family=Iceland');

    @media (max-width: 1100px) {
        #personalInfo {
            position: relative;
            top: 50px;
            width: 80%;
            left: 10%;
        }

        #signOutBtn {
            position: relative;
            top: 50px;
        }

        #allItems {
            top: 100px;
        }
    }

    @media (min-width: 1400px) {
        #allItems {
            top: 0px;
        }
    }

    #allItems {
        position: relative;
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
        word-wrap: break-word;
        display: block;
    }

    .permissionChanger {
        border: solid;
        border-color: green;
        width: 5%;
        text-align: center;
        cursor: pointer;
    }
 </style>