<template>
  <div>
    <list-item></list-item>
    <!-- <ul class="news-list">
      <li v-for="(job, idx) in fetchedJobs" :key="idx" class="post">
        <div class="points">
          {{ job.points || 0 }}
        </div>
        <div>
          <p class="news-title">
            <a :href="job.url" target="_blank">
              {{ job.title }}
            </a>
          </p>
          <small class="link-text">
            {{ job.time_ago }},
            <a :href="job.url" target="_blank">
              {{ job.domain }}
            </a>
          </small>
        </div>
      </li>
    </ul> -->
  </div>
</template>

<script>
// import { mapState, mapGetters } from 'vuex';
import ListItem from '@/components/ListItem';
// import bus from '@/utils/bus.js';
import ListMixin from '@/mixins/ListMixin.js';

export default {
  components: {
    ListItem
  },
  // mounted() {
  //   bus.$emit('end:spinner');
  // }
  // computed: {
  //   ...mapGetters(['fetchedJobs'])
  // },
  mixins: [ListMixin]
  // created() {
  //   console.log('bus', bus);
  //   bus.$emit('start:spinner');
  //   this.$store
  //     .dispatch('FETCH_JOBS')
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
