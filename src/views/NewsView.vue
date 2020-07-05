<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
import ListItem from '@/components/ListItem';
// import bus from '@/utils/bus.js';
// import { mapGetters } from 'vuex';
import ListMixin from '@/mixins/ListMixin.js';

export default {
  components: {
    ListItem
  },
  // mounted() {
  //   bus.$emit('end:spinner');
  // }
  mixins: [ListMixin]
  // created() {
  //   console.log('bus', bus);
  //   bus.$emit('start:spinner');
  //   this.$store
  //     .dispatch('FETCH_NEWS')
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
