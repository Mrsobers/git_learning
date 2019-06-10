<template>
    <div class="classification">
      <yd-search ></yd-search>
      <div class="classification_content">
          <div class="classification_list" v-for="item in classification" @click="toDetail(item.icoName)">
            <img :src="item.icoImage"/>
            <p>{{item.icoName}}</p>
          </div>
      </div>
      <TabBar></TabBar>
    </div>
</template>

<script>
  import TabBar from '../components/TabBar'
    export default {
        name: "Classification",
      components:{TabBar},
      data(){
          return {
            classification:[],
            types:[
              '/bargainproduct/fruits',
              '/bargainproduct/ingredient',
              '/bargainproduct/meat',
              '/bargainproduct/rice',
              '/bargainproduct/seafood',
              '/bargainproduct/specialty',
              '/bargainproduct/tea',
              '/bargainproduct/vegetables'
            ]
          }
      },
      created() {
          fetch('../static/fruitslist.json')
            .then(res=>{
              return res.json();
            })
            .then(data=>{
              this.classification=data.model.splice(4,8);
              console.log(this.classification)
            })
      },
      methods:{
          toDetail(value){
            console.log(value);
            this.$router.push(`/${value}`);
          }
      }
    }
</script>

<style scoped>
.classification{
  height: 100vh;
  background-color: #fff;
}
.classification_content{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.classification_list{
  width: 30%;
  margin-top: 30px;
}
.classification_list>img{
  width: 80%;
  display: block;
  margin: 0 auto;
}
.classification_list>p{
  text-align: center;
  font-size: 16px;
  color: #666;
}
</style>
