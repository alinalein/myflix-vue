<template>
    <!-- <AppNavigation /> -->
    <h1>test</h1>

</template>

<script>
// import AppNavigation from './AppNavigation.vue';

export default {
    name: 'HomePage',
    // components: { AppNavigation },
    mounted() {
        let userData = localStorage.getItem('user')
        // when no user data found in localstorage, redirect to homepage
        if (!userData) {
            this.$router.push({ name: 'LogIn' });
        }
    }
}
</script>
<style></style>