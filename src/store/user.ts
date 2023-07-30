/* eslint-disable */
import { StoreOptions } from "vuex";

export default {
  namespace: true,
  state: () => ({
    loginUser: {
      userName: "未登录",
      userRole: "notLogin",
    },
  }),
  actions: {
    getLoginUser({ commit, state }, payload) {
      console.log(state);
      commit("updateUser", payload);
    },
  },
  mutations: {
    updateUser(state, payload) {
      state.loginUser = payload;
    },
  },
} as StoreOptions<any>;
