<script setup>
import Logo from './Logo.vue'
import MenuBars from './MenuBars.vue'
</script>

<template>
    <header>
        <Logo />
        <MenuBars />
    </header>
</template>

<style scoped>
    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1rem;
        height: 4rem;
    }
</style>