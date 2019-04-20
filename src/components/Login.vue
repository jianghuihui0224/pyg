<template>
  <div class="login_container">
    <div class="box">
      <img src="../assets/images/logo.png" alt="logo">

      <el-form :model="form">
        <el-form-item>
          <el-input prefix-icon="iconfont icon-user-fill" placeholder="请输入您的用户名" v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input prefix-icon="iconfont icon-key" type="password" placeholder="请输入您的密码" v-model="form.region"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button>重置</el-button>
          <el-button type="primary">登录</el-button>
        </el-form-item>
      </el-form>

    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      form: {
        username: "",
        password: ""
      }
    };
  }
};
</script>

<style>
.login_container {
  height: 100%;
  background: linear-gradient(45deg, #fff, rgb(4, 138, 97));
}
.login_container .box {
  width: 400px;
  height: 250px;
  box-shadow: 0 0 10px #efefef;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -60%);
  background: linear-gradient(45deg, #eee, rgb(22, 119, 90));
  padding: 0px 20px;
}
.login_container .box img {
  display: block;
  margin: 15px auto;
}
</style>
