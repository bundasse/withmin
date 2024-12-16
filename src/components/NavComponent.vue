<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router'
import {auth} from '@/firebase';
import router from '@/router';
import store from '@/store';

const userMenuFlg = ref(false)
const nowMenu = ref('home')
function setUserMenuFlg(value) {
    userMenuFlg.value = value
}

function setNowMenu(value) {
    nowMenu.value = value
}
function logOutCommand() {
    auth.signOut(localStorage.getItem('userId')).then(()=>{
        localStorage.removeItem('userId')
        localStorage.removeItem('username')
        localStorage.removeItem('token')
        router.replace("/login")
    })
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
            setUserMenuFlg(true)
        }
    }else{
        if(userMenuFlg.value){
            if(!e.composedPath().includes(document.querySelector(".userNavMenu"))){
                setUserMenuFlg(false)
            }
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
                {{ store.state.username }}
            </div>
            <ul v-if="userMenuFlg" class="userNavMenu">
                <li @click="logOutCommand">로그아웃</li>
            </ul>
        </div>
    </div>
  </template>
  
  <style>

  </style>
  