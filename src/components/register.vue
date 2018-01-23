<template>
  <div id="register">
    <h2>注册</h2>
    <div class="container">
      <input type="text" class="username" placeholder="请输入您的用户名" v-model="username" @input="clearSpan1"/>
      <span class="span1">{{span1}}</span>
      <input type="password" class="password" placeholder="请输入您的密码" v-model="password" />
      <span class="span2">{{span2}}</span>
      <input type="password" class="repeatPsw" placeholder="请再次输入您的密码" v-model="repeatPsw" @input="clearSpan2"/>
      <span class="span3">{{span3}}</span>
      <button class="register" @click="register">注&nbsp;&nbsp;册</button>
      <p>已有账号？<a href="javascript:;" class="toLogin" @click="toLogin">马上登录</a></p>
    </div>
  </div>
</template>

<script>
import Qs from 'qs'
export default {
  name: 'register',
  data () {
    return {
      username: '',
      password: '',
      repeatPsw: '',
      span1: '',
      span2: '',
      span3: ''
    }
  },
  methods: {
    // 点击马上注册跳转到登录页面
    toLogin () {
      this.$router.push('/')
    },
    // 调用接口传递数据
    postData () {
      // axios.post('http://192.168.188.26:1111/yatai/auth/register', {
      //   userAccount: this.username,
      //   userPassword: this.password
      // }).then(response => {
      //   console.log(response)
      // }).catch(error => {
      //   console.log(error)
      // })

      this.$ajax({
        url: 'http://192.168.188.26:1111/yatai/auth/register',
        method: 'POST',
        // 将参数转化成字符串的形式
        data: Qs.stringify({
          userAccount: this.username,
          userPassword: this.password
        }),
        // 在跨域请求时不带凭证
        withCredentials: false,
        // 头信息
        headers: {
          // 'X-Requested-With': 'XMLHttpRequest',
          // Authorization: 'Basic ' + btoa(this.username + ':' + this.password),
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(response => {
        console.log(response)
        // 请求数据获取状态码：
        /*
        *  0:注册成功
        *  -100:用户已存在
        * */
        if (response.data.status === -100) {
          this.span1 = '用户已存在！'
        } else if (response.data.status === 0) {
          this.$router.push('/regSuccess')
        }
      }).catch(error => {
        console.log(error)
      })
    },
    // 点击注册按钮调用方法
    register () {
      this.postData()
    },
    // 判断两次密码是否输入一致
    repPsw () {
      console.log(this.repeatPsw)
      if (this.password === this.repeatPsw) {
        console.log('密码正确')
        this.span3 = ''
      } else {
        this.span3 = '两次密码不一致'
      }
    },
    // 清除提示
    clearSpan1 () {
      this.span1 = ''
    },
    // 清除提示
    clearSpan2 () {
      this.span2 = ''
    }
  },
  mounted () {
  }
}
</script>

<style scoped>
  h2 {
    padding-top:50px;
    font-size:60px;
    margin-bottom:50px;
  }
  .container{
    width:300px;
    height:360px;
    background-color: #e8d3bc;
    border-radius:10px;
    margin:0 auto;
    padding:50px;
    box-sizing:border-box;
  }
  .container .username{
    display: block;
    width:200px;
    height:30px;
    font-size:16px;
    text-indent: 1em;
    outline-color: aqua;
    outline-width:5px;
    border:none;
  }
  .container .span1{
    display: block;
    width:200px;
    height:30px;
    font-size:14px;
    color:red;
    line-height:30px;
    text-align: left;
  }
  .container .password{
    display: block;
    width:200px;
    height:30px;
    font-size:16px;
    text-indent: 1em;
    outline-color:aqua;
    outline-width:5px;
    border:none;
  }
  .container .span2{
    display: block;
    width:200px;
    height:30px;
    font-size:14px;
    color:red;
    line-height:30px;
    text-align: left;
  }
  .container .repeatPsw{
    display: block;
    width:200px;
    height:30px;
    font-size:16px;
    text-indent: 1em;
    outline-color:aqua;
    outline-width:5px;
    border:none;
  }
  .container .span3{
    display: block;
    width:200px;
    height:30px;
    font-size:14px;
    color:red;
    line-height:30px;
    text-align: left;
  }
  .container .register{
    width:200px;
    height:40px;
    border:none;
    outline:none;
    background-color: #19be6b;
    margin-bottom:30px;
    cursor:pointer;
    font-size:18px;
  }
  .container p{
    font-size:14px;
  }
  .container p .toLogin{
    color:#d65959;
    cursor:pointer;
  }
</style>
