<script setup>
import {ref} from 'vue';
import  {auth, db}from '@/firebase';
import errorlist from '@/assets/errors.json'

const idValue = ref()
const passwordValue = ref()
const usernameValue = ref()
const pikminNameValue = ref()
const twitterValue = ref()

const errFlg = ref(false)
const errMsg = ref('')

async function joinCommand() {
  let check = joinCheck()
  if(!check) return
  await auth.createUserWithEmailAndPassword(idValue.value,passwordValue.value).then(async res => {
    await res.user.updateProfile({
      displayName:usernameValue.value,
    }).catch(err =>{
      errFlg.value = true
      let error = errorlist.filter(e => e.error == err.code)
      if(error.length>0){
        errMsg.value =error[0].text
        return
      }else{
        errMsg.value ='에러가 발생했습니다. 코드:'+err.code
        return
      }
    })
    await db.collection("user").add({
      userId:idValue.value,
      password:passwordValue.value,
      userName:usernameValue.value,
      twitId:twitterValue.value,
      pikName:pikminNameValue.value,
      chkMush:false,
      friendList:[]
    })
  })
}

function joinCheck() {
  const regexId = new RegExp(/^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/);
  const regexPass = new RegExp(/[a-zA-Z0-9]/);
  if(idValue.value == null || idValue.value == ''){
    errFlg.value = true;
    errMsg.value = '이메일은 필수 입력 사항입니다.'
    return false
  }
  if(passwordValue.value == null || passwordValue.value == ''){
    errFlg.value = true;
    errMsg.value = '비밀번호는 필수 입력 사항입니다.'
    return false
  }else if(passwordValue.value.length <6||!regexPass.test(passwordValue.value)){
    errFlg.value = true;
    errMsg.value = '비밀번호는 영문/숫자 조합의 6글자 이상이 되어야 합니다.'
    return false
  }
  if(usernameValue.value == null || usernameValue.value == ''){
    errFlg.value = true;
    errMsg.value = '닉네임은 필수 입력 사항입니다.'
    return false
  }
  if(!regexId.test(idValue.value)){
    errFlg.value = true;
    errMsg.value = '올바른 이메일 형식이 아닙니다.'
    return false
  }
    
  errFlg.value = false;
  return true
}

</script>

<template>
  <div>
    <div class="joinPage">
        <div>
          <p class="desc">*표시는 필수 입력 사항입니다</p>
          <div class="inputField">
            <label for="txtId">이메일*</label>
            <input type="email" id="txtId" v-model="idValue">
          </div>
          <div class="inputField">
            <label for="txtPassword">비밀번호*</label>
            <input type="password" placeholder="영문/숫자 6글자 이상" id="txtPassword" v-model="passwordValue">
          </div>
          <div class="inputField">
            <label for="txtUsername">닉네임*</label>
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
          <p class="errMsgField" v-if="errFlg">{{ errMsg }}</p>
        </div>
        <button class="joinButton" @click="joinCommand">가입</button>
    </div>
  </div>
</template>
