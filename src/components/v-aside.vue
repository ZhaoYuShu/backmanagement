<template>
  <el-contanier>
    <el-row class="tac">
      <el-col style="height:100%;">
        <el-menu
          mode="vertical"
          :default-active="$router.path"
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
              <el-menu-item index="/index/1-1" :route="{path:'/index/1-1'}">选项1</el-menu-item>
              <el-menu-item index="/index/1-2" :route="{path:'/index/1-2'}">选项2</el-menu-item>
              <el-menu-item index="/index/1-3" :route="{path:'/index/1-3'}">选项3</el-menu-item>
              <el-menu-item index="/index/1-4" :route="{path:'/index/1-4'}">选项4</el-menu-item>
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
        </el-menu>
      </el-col>
    </el-row>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-contanier>
</template>

<script>
export default {
  name: 'v-aside',
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style scoped>

</style>
