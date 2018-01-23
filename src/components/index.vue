<template>
  <el-container>
    <el-header>
      <h2>后台管理系统</h2>
      <span class="exit" @click="exit">退出登录</span>
      <!--<span>{{token}}</span>-->
    </el-header>
    <el-container>
      <el-aside>
        <el-row class="tac">
          <el-col style="height:100%;">
            <el-menu
              mode="vertical"
              default-active="/index/1-1"
              class="el-menu-vertical-demo"
              :unique-opened="true"
              :router="true"
              @open="handleOpen"
              @close="handleClose"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b"
              style="height:100%;">
              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>导航一</span>
                </template>
                <el-menu-item-group>
                  <router-link to="/index/1-1">
                    <el-menu-item index="/index/1-1">选项1</el-menu-item>
                  </router-link>
                  <router-link to="/index/1-2">
                    <el-menu-item index="/index/1-2">选项2</el-menu-item>
                  </router-link>
                  <router-link to="/index/1-3">
                    <el-menu-item index="/index/1-3">选项3</el-menu-item>
                  </router-link>
                  <router-link to="/index/1-4">
                    <el-menu-item index="/index/1-4" >选项4</el-menu-item>
                  </router-link>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="2">
                <template slot="title">
                  <i class="el-icon-menu"></i>
                  <span>导航二</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="2-1">选项1</el-menu-item>
                  <el-menu-item index="2-2">选项2</el-menu-item>
                  <el-menu-item index="2-3">选项3</el-menu-item>
                  <el-menu-item index="2-4">选项4</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="3">
                <template slot="title">
                  <i class="el-icon-setting"></i>
                  <span>导航三</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="3-1">选项1</el-menu-item>
                  <el-menu-item index="3-2">选项2</el-menu-item>
                  <el-menu-item index="3-3">选项3</el-menu-item>
                  <el-menu-item index="3-4">选项4</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <router-view></router-view>
            </el-menu>
          </el-col>
        </el-row>
      </el-aside>
      <el-main>
        <router-view name="views"></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
export default {
  name: 'index',
  data () {
    return {
      permissions: true
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    exit () {
      this.$router.push('/')
    }
  },
  mounted () {
    console.log(this)
    this.$ajax({
      url: 'http://192.168.188.26:1111/yatai/admin',
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }).then(response => {
      console.log(response)
    }).catch(error => {
      console.log(error)
    })
  }
}
</script>
<style scoped>
  .el-container.is-vertical{
    width:100%;
    height:100%;
  }
  .el-header{
    width:100%;
    height:10%!important;
    background-color: rgb(130,140,150);
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding:0 30px;
  }
  .el-header h2{
    font-size:24px;
    color:rgb(255,208,75);
    font-weight:600;
  }
  .el-header .exit{
    color:#fff;
    cursor:pointer;
  }
  .el-aside{
    width: 15% !important;
  }
  .el-row{
    width:100%;
    height:100%;
  }
  .el-main{
    width:85% !important;
  }
  .el-main .box{
    height:100%;
    width:100%;
  }
</style>
