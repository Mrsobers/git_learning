<template>
    <div class="login">
      <mt-header title="注册" class="mint-header">
        <router-link to="/" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
      <div class="input-group">
        <div class="input-item">
          <p>输入账号和密码</p>
        </div>
        <div class="input-item">
          <input type="text" placeholder="请输入正确的11位手机号码"/>
          <input type="text" placeholder="请输入验证码"/>
          <span>获取验证码</span>
        </div>
        <div class="input-item">
          <yd-button size="large" type="primary">下一步</yd-button>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Login"
    }
</script>

<style scoped>
.login{
  width: 100%;
  height: 100vh;
  background-color: #ebf5f0;
}
.mint-header{
  background-color: #04be02;
}
.input-group{
  width: 90%;
  margin: 50px auto 0;
  background-color: #fff;
  height: 300px;
}
.input-item{
  margin-top: 50px;
}
.input-item>p{
  padding-top: 48px;
  font-size: 20px;
  text-align: center;
}
.input-item>input{
  width: 90%;
  display: inline-block;
  margin: 10px 0 0 16px;
  border: none;
  border-bottom: 3px solid darkgreen;
  font-size: 16px;
}
.input-item>input:nth-of-type(2){
  width: 60%;
  margin: 10px 0 0 16px;
}
.input-item>span{
  font-size: 16px;
  color: green;
}
</style>
