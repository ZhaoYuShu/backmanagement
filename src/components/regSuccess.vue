<template>
  <div class="success">
    <h2>恭喜您，注册成功！<span class="seconds">{{seconds}}</span>秒后自动跳转到登录页面...</h2>
  </div>
</template>

<script>
export default {
  name: 'reg-success',
  data () {
    return {
      seconds: 5
    }
  },
  methods: {
    countDown () {
      let timer = setInterval(() => {
        this.seconds -= 1
        if (this.seconds === 0) {
          clearInterval(timer)
        }
      }, 1000)
    }
  },
  mounted () {
    this.countDown()
    setTimeout(() => {
      this.$router.push('/')
    }, 6000)
  }
}
</script>

<style scoped>
h2{
  font-size:30px;
  font-weight:600;
  padding-top:200px;
}
.seconds{
  color:red;
}
</style>
