<template>
    <div class="header">
      <h2>后台管理系统</h2>
      <span class="exit" @click="exit">退出登录</span>
    </div>
</template>

<script>
export default {
  name: 'v-header',
  methods: {
    exit () {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
  h2{
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color:rgb(255,208,75);
  }
</style>
