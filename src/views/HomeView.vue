<script setup>
</script>

<template>
  <div>
    <div class="myBoard">
      <input type="checkbox" name="mushroomEnd" id="mushroomEnd">
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
  </div>
</template>
