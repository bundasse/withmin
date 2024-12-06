import { createStore } from "vuex";

export default createStore({
  state: {
    userId: null,
    username: null,
  },
  getters: {
    time2(state) {
      return state.counter * 2;
    }
  },
  mutations: {
    setUserId(state,value){
      state.userId = value
    },
    setUsername(state, value) {
      state.username = value;
    }
  }
});