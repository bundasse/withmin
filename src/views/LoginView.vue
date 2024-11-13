<script setup>
import {ref} from 'vue';
const idValue = ref()
const passwordValue = ref()

function loginCommand() {
    console.log(idValue.value, passwordValue.value)
}

</script>

<template>
  <div>
    <div class="loginPage">
        <div>
            <label for="txtId">아이디</label>
            <input type="text" id="txtId" v-model="idValue">
        </div>
        <div>
            <label for="txtPassword">비밀번호</label>
            <input type="password" id="txtPassword" v-model="passwordaValue">
        </div>
        <button @click="loginCommand">로그인</button>
    </div>

  </div>
</template>
