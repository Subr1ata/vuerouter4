<script setup>
import { useRoute } from 'vue-router';
const route = useRoute();
</script>

<template>
    <h1>Post Detail Page params Object: {{ route.params }}</h1>
    <h1>Post Detail Page ID: {{ route.params.id }}</h1>
</template>
