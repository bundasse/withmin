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

const errFlg = ref(false)
const errMsg = ref('')

function loginCommand() {
    auth.signInWithEmailAndPassword(idValue.value, passwordValue.value).then(res => {
      localStorage.setItem("userId",res.user.email)
      localStorage.setItem("refreshToken",res.user.refreshToken)
      localStorage.setItem("username",res.user.displayName)
      store.commit('setUserId',idValue.value)
      store.commit('setUsername',res.user.displayName)
      errFlg.value = false
      router.replace("/")
    }).catch(err =>{
      errFlg.value = true
      let error = errorlist.filter(e => e.error == err.code)
      if(error.length>0){
        errMsg.value =error[0].text
        return
      }else{
        errMsg.value ='에러가 발생했습니다. 코드:'+err.code
        return
      }
    })

}

</script>

<template>
  <div>
    <div class="loginPage">
      <div>
        <div class="inputField">
            <label for="txtId">이메일</label>
            <input type="text" id="txtId" v-model="idValue">
        </div>
        <div class="inputField">
            <label for="txtPassword">비밀번호</label>
            <input type="password" id="txtPassword" v-model="passwordValue">
        </div>
        <p class="errMsgField" v-if="errFlg">{{ errMsg }}</p>
      </div>
        <button @click="loginCommand">로그인</button>
        <div class="linkTo">
          <RouterLink to="/join">회원가입</RouterLink>
        </div>
    </div>
  </div>
</template>
