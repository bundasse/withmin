<script setup>
import router from '@/router';
import {ref, onMounted} from 'vue';
import { db } from '@/firebase';
const usedFlg = ref(false);
const popupFlg = ref(false)

const friendList = ref([])
const userId = localStorage.getItem('userId');
onMounted(()=>{
  if(userId == null){
    router.replace('/login')
  }else{
    db.collection("user").whereEqualTo("userId",userId).get().then(res => {
      if(res.data.chkMush){
        usedFlg.value = true
      }
      friendList.value = res.data.friendList
    })
  }
})

function checkMushroom() {
  usedFlg.value = true
  db.collection("user").whereEqualTo("userId",userId).update({
    chkMush:true,
  })
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
    <div class="myBoard" @click="setPopupFlg(true)">
      <input type="checkbox" name="mushroomEnd" id="mushroomEnd" @click.prevent v-model="usedFlg">
      <label for="mushroomEnd">
        오늘의 버섯 사용 완료
      </label>
    </div>
    <div class="friendBoard">
      <ul class="friendList">
        <li v-for="(user,i) in friendList" :key="i">
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
