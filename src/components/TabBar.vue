<template>
  <div>
    <yd-tabbar  class="yd-tabbar" :fixed="true">
      <yd-tabbar-item title="首页" link="/" :active="$route.path==='/'">
        <yd-icon name="home" slot="icon" size="1.6rem"></yd-icon>
      </yd-tabbar-item>
      <yd-tabbar-item title="分类" link="/classification" :active="$route.path==='/classification'">
        <yd-icon name="type" slot="icon" size="1.6rem"></yd-icon>
      </yd-tabbar-item>
      <yd-tabbar-item title="我的" link="/my" :active="$route.path==='/my'">
        <yd-icon name="ucenter-outline" slot="icon" size="1.6rem"></yd-icon>
      </yd-tabbar-item>
    </yd-tabbar>
  </div>
</template>

<script>
import 'vue-ydui/dist/ydui.base.css'
export default {
    name: "TabBar"
}
</script>

<style scoped>
.yd-tabbar{
  height: 50px;
  /*font-size: .6rem;*/
}
</style>
