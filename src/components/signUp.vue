<template>
    <div class="background" >
        <h1 class="title_sign_up">Sign Up </h1>

        <div class="signUp">
<input type="text" placeholder="Enter First Name" />
<input type="text" placeholder="Enter Last Name" />
<input type="date" placeholder="Enter Birthdate" />
<input type="password" placeholder="Enter Password" />
<button>Sign Up </button>
        </div>

    </div>
  
</template>
<script>
export default {
    name: 'signUp'
}
</script>
<style>

.background {
    background-size: cover;
    background-repeat:no-repeat ;
    background-position: center;
    background-image: url('../assets/final.webp');
    height: 100vh;
 padding: 10px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
}

.signUp input
{
   width: 300px;
   height: 30px;
   padding-left: 20px;
   display: block;
   margin-bottom: 10px;
   border: 2px solid aqua;
   border-radius: 5px;
}
.signUp button
{
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