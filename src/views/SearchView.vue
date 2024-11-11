<script setup>
import {ref} from 'vue';

const searchText = ref('')
const dataList = ref([])
function addFriendCommand(value) {
  console.log(value)
}
</script>

<template>
  <div>
    <div class="searchBox">
      <div class="inputContainer">
        <input type="text" class="searchBar" v-model="searchText">
        <button class="searchButton"></button>
      </div>
    </div>
    <div class="searchResults">
      <ul>
        <li v-for="(data,i) in dataList" :key="i">
          <div class="userIcon">
            <img src="https://placehold.co/50x50/orange/white" alt="usericon">
          </div>
          <p>
            닉네임
          </p>
          <button class="addFriend" @click="addFriendCommand(data)">추가</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<style>
</style>
