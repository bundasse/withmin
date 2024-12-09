<script setup>
// import store from '@/store';
import {auth} from '@/firebase';
import {ref} from 'vue';
import { RouterLink } from 'vue-router'
import router from '@/router';
import store from '@/store';

const idValue = ref()
const passwordValue = ref()

function loginCommand() {
    auth.signInWithEmailAndPassword(idValue.value, passwordValue.value).then(res => {

      localStorage.setItem("refreshToken",res.user.refreshToken)
      localStorage.setItem("username",res.user.displayName)
      store.commit('setUsername',res.user.displayName)
      router.replace("/")
    }) 

}

</script>

<template>
  <div>
    <div class="loginPage">
        <div>
            <label for="txtId">이메일</label>
            <input type="text" id="txtId" v-model="idValue">
        </div>
        <div>
            <label for="txtPassword">비밀번호</label>
            <input type="password" id="txtPassword" v-model="passwordValue">
        </div>
        <button @click="loginCommand">로그인</button>
        <div class="linkTo">
          <RouterLink to="/join">회원가입</RouterLink>
        </div>
    </div>
  </div>
</template>
