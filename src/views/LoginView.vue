<script setup>
// import store from '@/store';
import {auth} from '@/firebase';
import {ref} from 'vue';
import { RouterLink } from 'vue-router'
import router from '@/router';
import store from '@/store';
import errorlist from '@/assets/errors.json'

const idValue = ref()
const passwordValue = ref()

function loginCommand() {
    auth.signInWithEmailAndPassword(idValue.value, passwordValue.value).then(res => {
      localStorage.setItem("userId",res.user.email)
      localStorage.setItem("refreshToken",res.user.refreshToken)
      localStorage.setItem("username",res.user.displayName)
      store.commit('setUsername',res.user.displayName)
      router.replace("/")
    }).catch(err =>{
      let error = errorlist.filter(e => e.error == err.code)
      if(error.length>0){
        alert(error[0].text)
      }else{
        alert('에러가 발생했습니다. 코드:'+err.code)
      }
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
