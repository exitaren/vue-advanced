<template>
  <div>
    <list-item></list-item>
    <!-- <ul class="news-list">
      <li v-for="(item, idx) in fetchedAsk" :key="idx" class="post">
        <div class="points">
          {{ item.points }}
        </div>
        <div>
          <p class="news-title">
            <router-link :to="`/item/${item.id}`">
              {{ item.title }}
            </router-link>
          </p>
          <small class="link-text">
            {{ item.time_ago }}
            <router-link :to="`/user/${item.user}`" class="link-text">
              {{ item.user }}
            </router-link>
          </small>
        </div>
      </li>
    </ul> -->
  </div>
</template>

<script>
import ListItem from '@/components/ListItem';
// import { mapState, mapGetters } from 'vuex';
// import bus from '@/utils/bus.js';
import ListMixin from '@/mixins/ListMixin.js';

export default {
  components: {
    ListItem
  },
  mixins: [ListMixin],
  computed: {
    // 1. mapGetters
    // ...mapGetters(['fetchedAsk'])
    // 2. MapState
    // ...mapState({
    //   fetchedAsk: state => state.ask
    // })
    // 3.computed 할당
    // ask() {
    //   return this.$store.state.ask;
    // }
  }
  // mounted() {
  //   bus.$emit('end:spinner');
  // }
  // created() {
  //   console.log('bus', bus);
  //   bus.$emit('start:spinner');
  //   this.$store
  //     .dispatch('FETCH_ASK')
  //     .then(() => {
  //       console.log('fetched');
  //       bus.$emit('end:spinner');
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // }
};
</script>
