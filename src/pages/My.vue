<template>
    <div class="my">
      <div class="header">
        <img src="../assets/images/user_img.jpg" style="width: 70px; height: 70px; border-radius: 100%;display: block;margin-bottom: -16px;margin-left: 10px;"/>
        <div class="login_register">
          <p>登录</p>
          <p>注册</p>
        </div>
      </div>
      <div class="nav">
        <mt-cell title="邀请新朋友" class="mint-cell">
          <span>立即邀请</span>
          <img slot="icon" src="../assets/images/invite.png" style="width: 80px;"/>
        </mt-cell>
      </div>
      <div class="content">
        <mt-cell title="我的订单" value="我的订单"></mt-cell>
        <div class="content-main">
          <div class="content-list">
            <img src="../assets/images/obligation.png"/>
            <p>待付款</p>
          </div>
          <div class="content-list">
            <img src="../assets/images/backorders.png"/>
            <p>待发货</p>
          </div>
          <div class="content-list">
            <img src="../assets/images/received.png"/>
            <p>待收货</p>
          </div>
          <div class="content-list">
            <img src="../assets/images/evaluate.png"/>
            <p>待评价</p>
          </div>
        </div>
      </div>
      <div class="footer">
        <div class="content-list">
          <img src="../assets/images/address.png"/>
          <p>地址管理</p>
        </div>
        <div class="content-list">
          <img src="../assets/images/security.png"/>
          <p>账户安全</p>
        </div>
        <div class="content-list">
          <img src="../assets/images/Opinion.png"/>
          <p>意见反馈</p>
        </div>
        <div class="content-list">
          <img src="../assets/images/Customer.png"/>
          <p>联系客户</p>
        </div>
      </div>
      <div class="click-effect" @click="toLogin">登录 / 注册</div>
      <TabBar></TabBar>
    </div>
</template>

<script>
  import TabBar from '../components/TabBar'
export default {
    name: "My",
  components: {TabBar},
  created() {
      fetch('../static/fruitslist.json')
        .then(res=>{
          return res.json();
        })
        .then(data=>{
          console.log(data)
        })
    },
  methods:{
      toLogin(){
        this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
.header{
  height: 200px;
  background-image: url("../assets/images/vip.jpg") ;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
.login_register{
  height: 80px;
  background-color: #fff;
  display: flex;
}
.login_register>p{
  font-size: 16px;
  margin: 30px 0 0 15px;
  height: 20px;
  line-height: 20px;
  border-right: 1px solid #666;
}
.login_register>p:nth-of-type(2n){
  border-right: none;
  margin-left: 0;
}
.nav{
  width: 95%;
  margin: 30px auto;
}
.content{
  width: 95%;
  margin: 0 auto;
  /*background-color: #fff;*/
}
.content-main{
  margin:2px ;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  height: 100px;
}
.content-list{
  margin-top: 10px;
  width: 25%;
  text-align: center;
}
.content-list>img{
  width: 45px;
}
.content-list>p{
  font-size: 14px;
  color:#666;
}
.footer{
  width: 95%;
  background-color: #fff;
  margin:20px auto 0;
  display: flex;
  height: 100px;
}
.click-effect{
  width: 100%;
  height: 100px;
  text-align: center;
  font-size: 16px;
  color: green;
  /*line-height: 100px;*/
  margin-top: 20px;
}
</style>
