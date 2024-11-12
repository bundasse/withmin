<script setup>
import {ref} from 'vue';

const searchText = ref('')
const dataList = ref(['data'])
function addFriendCommand(value) {
  console.log(value)
}
function searchCommand() {
  alert("!")
}
</script>

<template>
  <div>
    <div class="searchBox">
      <div class="inputContainer">
        <input type="text" class="searchBar" placeholder="닉네임, 트위터아이디 등으로 검색해보세요" v-model="searchText" @keyup.enter="searchCommand">
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
              닉네임
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
