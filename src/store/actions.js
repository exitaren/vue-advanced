import {
  fetchNewsList,
  fetchJobsList,
  fetchAskList,
  fetchList,
  fetchUserInfo,
  fetchCommenItem
} from '../api/index';

export default {
  // promise
  // FETCH_NEWS(context) {
  //   return fetchNewsList()
  //     .then(res => {
  //       console.log(res.data);
  //       context.commit('SET_NEWS', res.data);
  //       // state.news = res.data;
  //       return res;
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // },
  // async
  async FETCH_NEWS(context) {
    const res = await fetchNewsList();
    context.commit('SET_NEWS', res.data);
    return res;
  },
  // FETCH_JOBS({ commit }) {
  //   return fetchJobsList()
  //     .then(({ data }) => {
  //       commit('SET_JOBS', data);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // },
  async FETCH_JOBS({ commit }) {
    try {
      const res = await fetchJobsList();
      commit('SET_JOBS', res.data);
      return res;
    } catch (error) {
      console.log(error);
    }
  },
  // FETCH_ASK({ commit }) {
  //   return fetchAskList()
  //     .then(({ data }) => {
  //       commit('SET_ASK', data);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // },
  async FETCH_ASK({ commit }) {
    const res = await fetchAskList();
    commit('SET_ASK', res.data);
    return res;
  },
  // FETCH_USER({ commit }, name) {
  //   return fetchUserInfo(name)
  //     .then(({ data }) => {
  //       commit('SET_USER', data);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // },
  async FETCH_USER({ commit }, name) {
    const res = await fetchUserInfo(name);
    commit('SET_USER', res.data);
    return res;
  },
  // FETCH_ITEM({ commit }, id) {
  //   return fetchCommenItem(id)
  //     .then(({ data }) => {
  //       commit('SET_ITEM', data);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // },
  async FETCH_ITEM({ commit }, id) {
    const res = await fetchCommenItem(id);
    commit('SET_ITEM', res.data);
    return res;
  },
  async FETCH_LIST({ commit }, pageName) {
    const res = await fetchList(pageName);
    commit('SET_LIST', res.data);
    return res;
    // return fetchList(pageName)
    //   .then(({ data }) => {
    //     commit('SET_LIST', data);
    //     return data;
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  }
};
