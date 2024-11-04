<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavComponent from '@/components/NavComponent.vue'
</script>

<template>
  <div class="wrapper">
    <header>
      <NavComponent/>
    </header>
    <div class="mainContainer">
      <RouterView />
    </div>
  </div>
</template>

<style>
</style>
