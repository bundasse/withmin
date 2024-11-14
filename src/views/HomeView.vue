<script setup>
import {ref} from 'vue';
const usedFlg = ref(false);
const popupFlg = ref(false)

function checkMushroom() {
  usedFlg.value = true
  setPopupFlg(false)
}

function setPopupFlg(value) {
  if(value && usedFlg.value){
    return;
  }
  popupFlg.value = value
}
</script>

<template>
  <div>
    {{ store.state.userId }}
    <div class="myBoard" @click="setPopupFlg(true)">
      <input type="checkbox" name="mushroomEnd" id="mushroomEnd" @click.prevent v-model="usedFlg">
      <label for="mushroomEnd">
        오늘의 버섯 사용 완료
      </label>
    </div>
    <div class="friendBoard">
      <ul class="friendList">
        <li v-for="user in 5" :key="user">
          <div class="userIcon">
            <img src="https://placehold.co/50x50/orange/white" alt="usericon">
          </div>
          <p>
            닉네임
          </p>
        </li>
      </ul>
    </div>
    <div v-if="popupFlg" class="popupWrapper">
      <div class="popUpBox">
        <p>오늘의 버섯 3회를 모두 완료하셨나요?</p>
        <div class="buttonContainer">
          <button @click="checkMushroom()">확인</button>
          <button @click="setPopupFlg(false)">취소</button>
        </div>
      </div>
    </div>
  </div>
</template>
