<template>
  <div class="login_container">
    <div class="box">
      <img src="../assets/images/logo.png" alt="logo">

      <el-form :model="form" :rules="rules" ref="ruleForm">
        <el-form-item prop="username">
          <el-input prefix-icon="iconfont icon-user-fill" placeholder="请输入您的用户名" v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input prefix-icon="iconfont icon-key" type="password" placeholder="请输入您的密码" v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button>重置</el-button>
          <el-button type="primary" @click="submit()">登录</el-button>
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
      },
      //利用element-ui组件中的方式创建验证规则
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 8, message: "长度在 3 到 8 个字符", trigger: "blur" }
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'},
          {min: 6, max: 18, message: "长度在 6 到 18 个字符", trigger: "blur"}
        ]
      }
    };
  },
  methods: {
    submit() {
      //利用element-ui组件提供的表单验证方法
      this.$refs.ruleForm.validate(async valid => {
        if(valid) {
          // alert('submit')
          // this.$http.post('login', this.form)
          // .then(res => {
          //   console.log(res)
          // })
          // const res = await this.$http.post('login', this.form)
          // if ( res.data.meta.status !== 200) {

          //利用axios优化和对象解构简写成该形式[上面的为原始形式],第二个data表示sessionStorage中的token值
          const {data: {data, meta}} = await this.$http.post('login', this.form)
          if ( meta.status !== 200) {
            // alert(meta.msg)
            //elemen-ui组件提供的提示框信息
            this.$message.error(meta.msg);
          }
          //利用sessionStorage来记录用户登录信息
          sessionStorage.setItem('token', data.token);
          this.$router.push('/home')
        }
      })
    }
  }
};
</script>

<style>
.login_container {
  height: 100%;
  background: linear-gradient(45deg, #fff, rgb(3, 126, 89));
}
.login_container .box {
  width: 400px;
  height: 250px;
  box-shadow: 0 0 10px #efefef;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -60%);
  background: linear-gradient(45deg, rgb(195, 252, 235), #eee);
  padding: 0px 20px;
}
.login_container .box img {
  display: block;
  margin: 15px auto;
}
</style>
