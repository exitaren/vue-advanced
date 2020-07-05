<template>
  <div>
    <section>
      <!-- 사용자 정보 -->
      <user-profile :info="fetchedItem">
        <router-link slot="username" :to="`/user/${fetchedItem.user}`">
          {{ fetchedItem.user }}
        </router-link>
        <template slot="time">{{ 'Posted ' + fetchedItem.time_ago }}</template>
      </user-profile>
    </section>
    <section>
      <h2>{{ fetchedItem.title }}</h2>
    </section>
    <section>
      <!-- 질문 싱세 답 -->
      <div v-html="fetchedItem.content" />
    </section>
  </div>
</template>
<script
  src="https://kit.fontawesome.com/451c1961c9.js"
  crossorigin="anonymous"
></script>
<script>
import { mapGetters } from 'vuex';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import UserProfile from '@/components/UserProfile';

export default {
  components: {
    FontAwesomeIcon,
    UserProfile
  },
  data() {
    return {
      faUser
    };
  },
  computed: {
    ...mapGetters(['fetchedItem'])
    // items() {
    //   return this.$store.state.item;
    // }
  },
  created() {
    const itemId = this.$route.params.id;
    this.$store.dispatch('FETCH_ITEM', itemId);
  }
};
</script>

<style scoped>
.user-container {
  display: flex;
  align-items: center;
  padding: 0.5rem;
}
.fa-user {
  font-size: 2.5rem;
}
.user-description {
  padding-left: 8px;
}
.time {
  font-size: 0.7rem;
}
</style>
