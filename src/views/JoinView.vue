<script setup>
import {ref} from 'vue';
const idValue = ref()
const passwordValue = ref()
const usernameValue = ref()
const pikminNameValue = ref()
const twitterValue = ref()

const errFlgId = ref(false)
const errFlgPassword = ref(false)
const errMsgId = ref('')
const errMsgPassword = ref('')

function joinCommand() {
    console.log(idValue.value, passwordValue.value)
}

</script>

<template>
  <div>
    <div class="joinPage">
        <div>
          <div class="inputField">
            <label for="txtId">아이디</label>
            <input type="text" placeholder="영문 5글자 이상" id="txtId" v-model="idValue">
            <button class="checkButton">중복확인</button>
          </div>
          <p class="errMsgField" v-if="errFlgId">{{ errMsgId }}</p>
        </div>
        <div>
          <div class="inputField">
            <label for="txtPassword">비밀번호</label>
            <input type="password" placeholder="영문/숫자 6글자 이상" id="txtPassword" v-model="passwordValue">
          </div>
          <p class="errMsgField" v-if="errFlgPassword">{{ errMsgPassword }}</p>
        </div>
        <div class="inputField">
          <label for="txtUsername">닉네임</label>
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
