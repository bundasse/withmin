<script setup>
import router from '@/router';
import {ref, onMounted} from 'vue';
import {db} from '@/firebase';
import store from '@/store';

const usedFlg = ref(false);
const popupFlg = ref(false)

const friendList = ref([])
const userId = localStorage.getItem('userId');
onMounted(()=>{
  if(userId == null|| userId==undefined){
    router.replace('/login')
  }else{
    const username = localStorage.getItem('username')
    store.commit('setUserId',userId)
    store.commit('setUsername',username)
    db.collection("user").where("userId","==",userId).get().then(res => {
      let checked = todayMushChecked(res.data.lastChkMush)
      if(res.data.chkMush && checked){
        usedFlg.value = true
      }
      friendList.value = res.data.friendList
    })
    getFriendMush()
  }
})

function getFriendMush() {
  friendList.value.forEach(e => {
    db.collection("user").where("userId","==",e).get().then(res => {
      let checked = todayMushChecked(res.data.lastChkMush)
      if(res.data.chkMush && checked){
        e.chkMush = true
      }else{
        e.chkMush = false
      }
    })
  })

}

function todayMushChecked(value) {
  let date = new Date(value)
  let today = new Date()
  return date.getFullYear() == today.getFullYear() && date.getMonth() == today.getMonth() && date.getDate() == today.getDate()
}

function checkMushroom() {
  usedFlg.value = true
  db.collection("user").whereEqualTo("userId",userId).update({
    chkMush:true,
    lastChkMush:new Date()
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
          <!-- <div class="userIcon" :style="user.chkMush && 'opacity:0.5'">
            <img src="https://placehold.co/50x50/orange/white" alt="usericon">
          </div> -->
          <p :style="user.chkMush && 'opacity:0.5'">
            {{user.userName}}
          </p>
        </li>
      </ul>
    </div>
    <div v-if="popupFlg" class="popupWrapper">
      <div class="popUpBox">
        <p>오늘의 버섯 3회를 모두 완료하셨나요?</p>
        <div class="buttonContainer">
          <button @click="checkMushroom()">네</button>
          <button @click="setPopupFlg(false)">아니오</button>
        </div>
      </div>
    </div>
  </div>
</template>
