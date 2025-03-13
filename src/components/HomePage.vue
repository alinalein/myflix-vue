<template>

    <h1>Homepage</h1>
</template>
<script>
export default {
    name: 'HomePage',
    mounted() {
        let userData = localStorage.getItem('user')
        // when no user data found in localstorage, redirect to homepage
        if (!userData) {
            this.$router.push({ name: 'SignUp' });
        }
    }
}

</script>
<style></style>