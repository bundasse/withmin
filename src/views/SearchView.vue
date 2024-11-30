<script setup>
import {ref, onMounted} from 'vue';
import { db } from '@/firebase';

const searchText = ref('')
const dataList = ref([])
const datalist = ref(['data'])
function addFriendCommand(value) {
  console.log(value)
}

onMounted(() => {
  getData()
})
 
function getData() {
  db.collection("user").get().then(res => {
    datalist.value = res.data
  })
}
function searchCommand() {
  if(searchText.value == '' || searchText.value == null){
    dataList.value = []
  }else{
    let arr = datalist.value.filter(e => {
      return e.userName.includes(searchText.value) || e.twitId.includes(searchText.value) || e.pikName.includes(searchText.value)
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
            <div class="userIcon">
              <img src="https://placehold.co/50x50/orange/white" alt="usericon">
            </div>
            <p>
              {{data.userName}}
            </p>
          </div>
          <button class="addFriend" @click="addFriendCommand(data)">추가</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<style>
</style>
