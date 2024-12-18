<script setup>
import { ref, onMounted } from 'vue';
import {db} from '@/firebase';
import firebase from 'firebase/compat';
import router from '@/router';

const searchText = ref('')
const dataList = ref([])
const datalist = ref(['data'])
const friendList = ref([])
const userId = localStorage.getItem('userId');

function addFriendCommand(value) {
  if(value.added){
    db.collection("user").where("userId","==",userId).update({friendList:firebase.firestore.FieldValue.arrayRemove(value.userId)})
  }else{
    db.collection("user").where("userId","==",userId).update({friendList:firebase.firestore.FieldValue.arrayUnion(value.userId)})
  }
}

onMounted(() => {
  if(userId == null || userId == undefined){
    router.replace('/login')
  }else{
    getData()
  }
})
 
function getData() {

  db.collection("user").where("userId","==",userId).get().then(res => {
    let data
    res.forEach(doc => {
      data = doc.data()
    })
    friendList.value = data.friendList
  })
  db.collection("user").get().then(res => {
    let arr = []
    res.forEach(doc => {
      if(doc.data().userId != userId){
        arr.push(doc.data())
      }
    })
    datalist.value = arr
  })
}

function searchCommand() {
  if(searchText.value == '' || searchText.value == null){
    dataList.value = []
  }else{
    let arr = datalist.value.filter(e => {
      return e.userName.includes(searchText.value) || e.twitId.includes(searchText.value) || e.pikName.includes(searchText.value)
    })
    arr.forEach(e => {
      let id = e.userId
      let idx = friendList.value.findIndex(data => data.userId === id)
      if(idx != -1){
        e.added = true
      }

    })
    dataList.value = arr
  }
}
</script>

<template>
  <div>
    <div class="searchBox">
      <div class="inputContainer">
        <input type="text" class="searchBar" placeholder="닉네임, 트위터아이디, 피크민닉네임" v-model="searchText" @keyup.enter="searchCommand">
        <button class="searchButton" @click="searchCommand"><font-awesome-icon icon="fa-solid fa-magnifying-glass" size="2xl"/></button>
      </div>
    </div>
    <div class="searchResults">
      <div v-if="dataList.length == 0" class="searchResults_null">
        검색 결과가 없습니다
      </div>
      <ul v-else>
        <li v-for="(data,i) in dataList" :key="i">
          <div class="userProfile">
            <!-- <div class="userIcon">
              <img src="https://placehold.co/50x50/orange/white" alt="usericon">
            </div> -->
            <p>
              {{data.userName}}
            </p>
          </div>
          <button class="addFriend" :class="data.added && 'added'" @click="addFriendCommand(data)">{{data.added? '해제':'추가'}}</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<style>
</style>
