<template>
    <div id="signIn">
        <routeBtn :site="'Exit'" id="exitBtn"/>
        <h1>Sign In</h1>
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
            <a href="CreateAccount">Create Account</a>
        </div>
    </div>
 </template>
 
 <script>
     import routeBtn from './routeBtn.vue'
     import CryptoJS from "crypto-js";
 
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
            createSHA256Hash(inputString) {
                return CryptoJS.SHA256(inputString).toString(CryptoJS.enc.Hex);
            },
            submitAccountDetails() {
                const email = document.getElementById('email').value;
                const password = document.getElementById('password').value;
                let hash = this.createSHA256Hash(password);

                const data = { user: email, password: hash };

                fetch('http://mghera.com:8083/check-item', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:');
                    if(data.exists) {
                        console.log("correct password");
                        this.setCookie('id', hash);
                        window.location = "Account"
                    } else {
                        console.log("incorrect password");
                    }
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
            let id = this.getCookie("id");
            if(id) {
                console.log("id found");
                window.location = "Account"
            } else {
                console.log("id not found")
            }
         },
     }
 </script>
 
 <style>
    @import url('https://fonts.googleapis.com/css2?family=Iceland');

    @media (max-width: 1100px) {
        #signInForm {
            top: 50px !important;
            width: 200px !important;
        }

        label {
            font-size: 1.2em !important;
            width: 50px !important;
        }

        #name, 
        #email,
        #password {
            margin-bottom: 10px !important;
            margin-left: 100px !important;
            font-size: 1.2em !important;
            width: 150px !important;
        }

        #category {
            width: 200px;
        }
    }

    @media (min-width: 1400px) {
        #signInForm {
            top: 100px;
            width: 600px;
        }

        label {
            font-size: 1.8em;
            width: 80px;
        }

        #name, 
        #email,
        #password {
            margin-bottom: 10px;
            margin-left: 150px;
            font-size: 1.5em;
        }
    }

    #signIn {
        font-family: 'Michroma'; 
    }

    h1 {
        text-align: center;
        font-size: 2em;
    }

    #signInForm {
        position: relative;
        display: flex;
        flex-direction: column;
        margin:auto;
        justify-content: center;
    }

    #name, 
    #email,
    #password {
        border-color: red;
        display: inline-block;
    }

    #category {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
 </style>