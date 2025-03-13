<template>
    <div class="background">
        <h1 class="title_sign_up">Sign Up </h1>

        <div class="signUp">
            <input type="text" v-model="username" placeholder="Enter Username" />
            <input type="email" v-model="email" placeholder="Enter Email" />
            <input type="date" v-model="birthday" placeholder="Enter Birthday" />
            <input type="password" v-model="password" placeholder="Enter Password" />
            <button v-on:click="signup">Sign Up </button>
        </div>

    </div>

</template>
<script>

import axios from 'axios';

export default {
    name: 'SignUp',
    data() {
        return {
            username: '',
            email: '',
            birthday: '',
            password: ''
        }
    },
    methods: {
        async signup() {
            let result = await axios.post('https://movie-api-lina-834bc70d6952.herokuapp.com/users/signup', {
                Username: this.username,
                Email: this.email,
                Birthday: this.birthday,
                Password: this.password
            },
                {
                    headers: { 'Content-Type': 'application/json' }
                });

            console.warn(result);
            // console.warn("signup", this.username, this.password, this.email, this.birthday);
            if (result.status === 201) {
                localStorage.setItem('user', JSON.stringify(result.data))
                this.$router.push({ name: 'HomePage' });
            } else if (result.status === 422) {
                alert(`Validation error: ${result.data.errors}`);
            } else if (result.status === 409) {
                alert('User with thise username already exist, please choose another username')
            } else {
                alert('sign up failed')
            }
        }
    },
    mounted() {
        let userData = localStorage.getItem('user')
        // when user data found in localstorage, redirect to homepage
        if (userData) {
            this.$router.push({ name: 'HomePage' });
        }
    }
}
</script>

<style>
.background {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url('../assets/final.webp');
    height: 100vh;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.signUp input {
    width: 300px;
    height: 30px;
    padding-left: 20px;
    display: block;
    margin-bottom: 10px;
    border: 2px solid aqua;
    border-radius: 5px;
}

.signUp button {
    width: 200px;
    height: 30px;
    background-color: aqua;
    border-radius: 5px;
    border: none;
    cursor: pointer;
}

.title_sign_up {
    padding-bottom: 100px;
    color: white;
}
</style>