<template>
  <div id="login">
    <h2>登录</h2>
    <div class="container">
      <input type="text" class="username" placeholder="请输入您的用户名" v-model="username" @input="clearSpan1"/>
      <span class="span1">{{span1}}</span>
      <input type="password" class="password" placeholder="请输入您的密码" v-model="password" @input="clearSpan2"/>
      <span class="span2">{{span2}}</span>
      <label class="nextTime">
        <input type="checkbox" />
        <span>下次自动登录</span>
      </label>
      <a href="javascript:;" class="forget">忘记密码？</a>
      <button class="login" @click="login">登&nbsp;&nbsp;录</button>
      <p>还没有账号？<a href="javascript:;" class="toRegister" @click="toRegister">马上注册</a></p>
    </div>
  </div>
</template>

<script>
import store from '../store'
import Qs from 'qs'
export default {
  name: 'login',
  data () {
    return {
      username: '',
      password: '',
      span1: '',
      span2: '',
      token: ''
    }
  },
  computed: {
    tokens () {
      return store.state.token
    }
  },
  methods: {
    // 点击马上注册跳转到注册页面
    toRegister () {
      this.$router.push('./register')
    },
    // 调用接口传递数据
    logData () {
      this.$ajax({
        url: 'http://192.168.188.26:1111/yatai/auth/',
        method: 'POST',
        // 将数据转换成字符串的形式
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
        // 返回数据状态码：
        /*
        *  0:登录成功
        *  -101:用户不存在
        *  -95:密码错误
        * */
        if (response.data.status === -101) {
          this.span1 = '用户不存在！'
        } else if (response.data.status === -95) {
          this.span2 = '密码错误！'
        } else if (response.data.status === 0) {
          this.token = response.data.data.token
          store.commit('getToken', {
            token: this.token
          })
          this.$router.push('/index/1-1')
        }
      }).catch(error => {
        console.log(error)
      })
    },
    // 点击登录按钮调用接口传递数据
    login () {
      if (!this.username) {
        this.span1 = '不能为空！'
      } else if (!this.password) {
        this.span2 = '不能为空！'
      } else if (!this.username && !this.password) {
        this.span1 = '不能为空！'
        this.span2 = '不能为空！'
      }
      if (this.username && this.password) {
        this.logData()
      }
    },
    // 清除提示
    clearSpan1 () {
      this.span1 = ''
    },
    clearSpan2 () {
      this.span2 = ''
    }
  },
  mounted () {
    console.log(this)
  }
}
</script>

<style scoped>
  h2{
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
  .container .nextTime{
    height:30px;
    font-size:12px;
    float:left;
    margin-bottom:30px;
    line-height:30px;
  }
  .container .forget{
    font-size:12px;
    float:right;
    color:#d65959;
    padding-top:5px;
  }
  .container .login{
    clear:both;
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
  .container p .toRegister{
    color:#d65959;
    cursor:pointer;
  }
</style>
