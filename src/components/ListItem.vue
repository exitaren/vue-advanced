<template>
  <div>
    <ul class="news-list">
      <li v-for="(item, idx) in listItems" :key="idx" class="post">
        <!-- 포인트 영역 -->
        <div class="points">
          {{ item.points || 0 }}
        </div>
        <!-- 기타 정보 영역 -->
        <div>
          <!-- 타이틀 영역 -->
          <p class="news-title">
            <template v-if="item.domain">
              <a v-bind:href="item.url">
                {{ item.title }}
              </a>
            </template>
            <template v-else>
              <router-link :to="`/item/${item.id}`">
                {{ item.title }}
              </router-link>
            </template>
          </p>
          <small class="link-text">
            {{ item.time_ago }}
            <a v-if="item.domain" :href="item.url" target="_blank">
              {{ item.domain }}
            </a>
            <router-link v-else :to="`/user/${item.user}`" class="link-text">
              {{ item.user }}
            </router-link>
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    //   ...mapGetters(['fetchedNews'])
    listItems() {
      return this.$store.state.list;
      // const name = this.$route.name;
      // if (name === 'news') {
      //   return this.$store.state.news;
      // } else if (name === 'ask') {
      //   return this.$store.state.ask;
      // } else if (name === 'jobs') {
      //   return this.$store.state.jobs;
      // }
    }
  }
};
</script>

<style scoped>
.news-list {
  margin: 0;
  padding: 0;
}
.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.points {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b883;
}
.news-title {
  margin: 0;
}
.link-text {
  color: #828282;
}
</style>
