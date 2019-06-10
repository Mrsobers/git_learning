<template>
    <div class="home">
      <yd-search v-model="value1"></yd-search>
      <yd-slider class="yd-slider" :autoplay="3000" :show-pagination="false">
        <yd-slider-item>
            <img src="../assets/images/swipe_1.jpg" width="100%" height="100%">
        </yd-slider-item>
        <yd-slider-item>
          <img src="../assets/images/swipe_2.jpg" width="100%" height="100%">
        </yd-slider-item>
        <yd-slider-item>
          <img src="../assets/images/swipe_3.jpg" width="100%" height="100%">
        </yd-slider-item>
      </yd-slider>

      <div class="recommend">
        <mt-cell title="优鲜推荐"  to="/" is-link value="全部"></mt-cell>
        <yd-flexbox class="yd-flexbox">
          <yd-flexbox-item class="yd-flexbox-item"><img :src="recommend[0].icoImage" :alt="recommend[0].icoName" style="width: 160px;height: 100px;margin: 0 auto"/></yd-flexbox-item>
          <yd-flexbox-item class="yd-flexbox-item"><img :src="recommend[1].icoImage" :alt="recommend[0].icoName" style="width: 160px;height: 100px;"/></yd-flexbox-item>
        </yd-flexbox>
        <yd-flexbox class="yd-flexbox">
          <yd-flexbox-item class="yd-flexbox-item"><img :src="recommend[2].icoImage" :alt="recommend[0].icoName" style="width: 160px;height: 100px;"/></yd-flexbox-item>
          <yd-flexbox-item class="yd-flexbox-item"><img :src="recommend[3].icoImage" :alt="recommend[0].icoName" style="width: 160px;height: 100px;"/></yd-flexbox-item>
        </yd-flexbox>
      </div>
      <TabBar></TabBar>
    </div>
</template>

<script>
import TabBar from '../components/TabBar'
export default {
  name: "Home",
  components:{TabBar},
  data(){
    return {
      model:[],
      value1:'',
      recommend:[]
    }
  },
  created(){
      fetch('../static/fruitslist.json')
        .then((res)=>{
          return res.json();
        })
        .then((data)=>{
          this.model = data.model;
          //console.log(this.model);
          this.recommend=data.model.splice(15,4);
          console.log(this.recommend)
          //console.log(data);
        })
  }
}
</script>

<style scoped>
.yd-slider{
  height: 200px;
}
.recommend{
  width: 100%;
  margin: 15px auto 0;
  background-color: #fff;
}
.yd-flexbox{
  margin: 0 auto;
  justify-content: space-between;
}
.yd-flexbox-item{
  border: 1px solid #fff;
  border-radius: 5px;
}
</style>
