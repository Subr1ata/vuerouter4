<script setup>
import { RouterView, RouterLink } from 'vue-router';
</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <RouterLink to="/contact">Contact</RouterLink>
    <RouterLink to="/posts">Posts</RouterLink>
  </nav>
  <RouterView/>
</template>

<style scoped>

nav{
  width: 100%;
  font-size: 24px;
  border-bottom: 1px solid red;
}

nav a{
  display: inline-block;
  padding: 5px 10px;
  text-decoration: none;
}

</style>
