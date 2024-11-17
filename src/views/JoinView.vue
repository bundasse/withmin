<script setup>
import {ref} from 'vue';
import { auth, db } from '@/firebase';


const idValue = ref()
const passwordValue = ref()
const usernameValue = ref()
const pikminNameValue = ref()
const userpicUrl = ref()
const twitterValue = ref()

const errFlgId = ref(false)
const errFlgPassword = ref(false)
const errMsgId = ref('')
const errMsgPassword = ref('')

async function joinCommand() {
  await auth.createUserWithEmailAndPassword(idValue.value,passwordValue.value).then(async res => {
    await res.user.updateProfile({
      displayName:usernameValue.value,
      photoURL:userpicUrl.value,
    })
    await db.collection("user").add({
      userId:idValue.value,
      password:passwordValue.value,
      userName:usernameValue.value,
      twitId:twitterValue.value,
      pikName:pikminNameValue.value,
      chkMush:false,
    })
  })
    console.log(idValue.value, passwordValue.value)
}

</script>

<template>
  <div>
    <div class="joinPage">
        <div>
          <p class="desc">*표시는 필수 입력 사항입니다</p>
          <div class="inputField">
            <label for="txtId">이메일*</label>
            <div class="inputId">
              <input type="email" id="txtId" v-model="idValue">
              <button class="checkButton">중복확인</button>
            </div>
          </div>
          <p class="errMsgField" v-if="errFlgId">{{ errMsgId }}</p>
        </div>
        <div>
          <div class="inputField">
            <label for="txtPassword">비밀번호*</label>
            <input type="password" placeholder="영문/숫자 6글자 이상" id="txtPassword" v-model="passwordValue">
          </div>
          <p class="errMsgField" v-if="errFlgPassword">{{ errMsgPassword }}</p>
        </div>
        <div class="inputField">
          <label for="txtUsername">닉네임*</label>
          <input type="text" id="txtUsername" v-model="usernameValue">
        </div>
        <div class="inputField">
            <label for="txtPikminName">피크민 닉네임</label>
            <input type="text" id="txtPikminName" v-model="pikminNameValue">
        </div>
        <div class="inputField">
            <label for="txtTwitter">트위터 아이디</label>
            <input type="text" id="txtTwitter" v-model="twitterValue">
        </div>
        <button class="joinButton" @click="joinCommand">가입</button>
    </div>

  </div>
</template>
