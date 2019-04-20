<template>
  <el-container class="home_container">
    <el-header class="home_header">
      <el-button circle class="iconfont icon-hanbaobao hanbaobao" @click="switchList()"></el-button>
      <span>品优购后台管理系统</span>
      <el-button type="danger" round size="mini" class="logout" @click="logout()">退出</el-button>
    </el-header>
    <el-container class="home_aside">
      <el-aside :width="collapse? '65px': '180px'">
        <el-menu
          :collapse="collapse"
          :collapse-transition="false"
          style="height: 100%"
          background-color="#333744"
          text-color="#fff"
          active-text-color="#ffd04b"
          >
          <el-submenu index="1" style="overflow: hidden">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main class="home_main">
        <p>欢迎您来到品优购电商项目后台管理系统。</p>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      collapse: false
    };
  },
  methods: {
    switchList() {
      this.collapse = !this.collapse;
    },
    logout() {
      this.$router.push('login')
    }
  }
};
</script>

<style>
.home_container {
  height: 100%;
}
.home_header {
  background-color: #373d41;
  line-height: 60px;
}
.icon-hanbaobao {
  color: #fff;
}
.hanbaobao {
  background-color: #909399;
  vertical-align: middle;
  border: none;
}
.home_header span {
  font-size: 18px;
  color: #eee;
  margin-left: 20px;
}
.logout {
  float: right;
  margin-top: 15px;
}
.logout span {
  margin-left: 0px;
  font-size: 12px;
  color: #fff;
}
.home_aside {
  height: 100%;
}
.home_main {
  background-color: #eee;
}
.home_main p {
  font-size: 24px;
  margin-top: 15%;
  text-align: center;
}
</style>
