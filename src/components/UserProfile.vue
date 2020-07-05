<template>
  <div class="user-container">
    <div><font-awesome-icon class="fa-user" :icon="faUser" /></div>
    <div class="user-description">
      <!-- <div>username: {{ info.id }}</div> -->
      <slot name="username">
        <!-- 상위 컴포넌트에서 정의할 영역 -->
      </slot>
      <div class="time">
        <slot name="time">
          <!-- 상위 컴포넌트에서 정의할 영역 -->
        </slot>
        <slot name="karma">
          <!-- 상위 컴포넌트에서 정의할 영역 -->
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

export default {
  props: {
    info: Object
  },
  components: {
    FontAwesomeIcon
  },
  data() {
    return {
      faUser
    };
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
