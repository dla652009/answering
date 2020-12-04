<template>
  <div class="login">
    <div class="login-main">
      <el-form
        ref="loginForm"
        :model="loginForm"
        :rules="loginRules"
        class="login-form"
        auto-complete="on"
        label-position="left"
      >
        <div class="login-title">
          <h3>答题登录页面</h3>
        </div>

        <el-form-item prop="stuCode" class="login-item">
          <span class="svg-container">
            <i class="login-icon"></i>
          </span>
          <el-input
            ref="stuCode"
            v-model="loginForm.stuCode"
            placeholder="请输入学号"
            @input="inputChange"
            name="stuCode"
            type="text"
            tabindex="1"
            auto-complete="on"
            @keyup.enter.native="handleLogin"
          />
        </el-form-item>

        <el-form-item prop="stuName" class="login-item">
          <span class="svg-container">
            <i class="login-icon pwd"></i>
          </span>
          <el-input
            ref="stuName"
            v-model="loginForm.stuName"
            placeholder="请输入姓名"
            @input="inputChange"
            name="stuName"
            tabindex="2"
            auto-complete="on"
            @keyup.enter.native="handleLogin"
          />
        </el-form-item>
        <el-button
          type="primary"
          class="login-btn"
          :disabled="btnDisabled"
          @click.native.prevent="handleLogin"
        >开始答题</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    const validateCode = (rule, value, callback) => {
      if (!value) {
        callback(new Error("学号不能为空"));
      } else if (value.length > 10) {
        callback(new Error("学号长度不能超过10"));
      } else {
        callback();
      }
    };
    const validateName = (rule, value, callback) => {
      if (!value) {
        callback(new Error("姓名不能为空"));
      } else if (value.length > 10) {
        callback(new Error("姓名长度不能超过10"));
      } else {
        callback();
      }
    };
    return {
      btnDisabled: true, //按钮状态
      loginForm: {
        stuCode: "",
        stuName: ""
      },
      loginRules: {
        stuCode: [{ required: true, trigger: "blur", validator: validateCode }],
        stuName: [{ required: true, trigger: "blur", validator: validateName }]
      }
    };
  },
  created() {},
  methods: {
    inputChange(val) {
      //输入框改变事件

      if (this.loginForm.stuCode && this.loginForm.stuName) {
        this.btnDisabled = false; //如果绑定值存在更改按钮状态
      } else {
        this.btnDisabled = true;
      }
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.$store.commit("system/SAVE_USERINFO", this.loginForm);
           this.$router.push({ path: "/home" });
          this.$notify({
            title: "成功",
            message: "登录成功！",
            type: "success"
          });
        } else {
          return false;
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.login {
  height: 100%;
  width: 100%;
  position: absolute;
  background-image: url("~@/assets/images/loginBg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: center;
  overflow: hidden;
  .login-main {
    width: 450px;
    padding: 30px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .login-item {
      margin-bottom: 30px;
    }
    .login-btn {
      width: 100%;
    }
  }
  .login-title {
    font-size: 30px;
    text-align: center;
    margin-bottom: 30px;
  }
}
</style>
