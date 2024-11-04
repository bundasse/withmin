<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <div class="NavContainer">
        <div class="navigation">
            <h1 class="titleLogo">위드민</h1>
            <nav>
                <ul>
                    <li>
                        <RouterLink to="/">Home</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/search">검색</RouterLink>
                    </li>
                </ul>
            </nav>
        </div>
        <div class="userInfo">
            <div class="userIcon">
                <img src="https://placehold.co/200x200/orange/white" alt="usericon">
            </div>
            <p>username</p>
            <ul class="userNavMenu">
                <li>로그아웃</li>
            </ul>
        </div>
    </div>
  </template>
  
  <style>
  @media (min-width: 1024px) {
    .about {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
  }
  </style>
  