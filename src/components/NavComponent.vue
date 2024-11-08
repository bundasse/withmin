<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router'

const userMenuFlg = ref(false)
const nowMenu = ref('home')
function setUserMenuFlg(value) {
    userMenuFlg.value = value
}

function setNowMenu(value) {
    nowMenu.value = value
}


document.addEventListener("click",(e)=>{
    const isUserMenu = e.composedPath().includes(document.querySelector(".userInfo"))
    if(isUserMenu){
        if(userMenuFlg.value){
            if(e.composedPath().includes(document.querySelector(".userNavMenu"))){
                return
            }else{
                setUserMenuFlg(false)
            }
        }else{
            userMenuFlg.value = true
        }
    }
})
</script>

<template>
    <div class="NavContainer">
        <div class="navigation">
            <h1 class="titleLogo">위드민</h1>
            <nav>
                <ul>
                    <li @click="setNowMenu('home')" :class="nowMenu == 'home' && 'nowMenu'">
                        <RouterLink to="/">Home</RouterLink>
                    </li>
                    <li @click="setNowMenu('search')" :class="nowMenu == 'search' && 'nowMenu'">
                        <RouterLink to="/search">검색</RouterLink>
                    </li>
                </ul>
            </nav>
        </div>
        <div class="userInfo">
            <div class="userMenu">
                <div class="userIcon">
                    <img src="https://placehold.co/200x200/orange/white" alt="usericon">
                </div>
                <p>username</p>
            </div>
            <ul v-if="userMenuFlg" class="userNavMenu">
                <li>로그아웃</li>
            </ul>
        </div>
    </div>
  </template>
  
  <style>

  </style>
  