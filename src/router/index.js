import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home'
import Classification from '../pages/Classification'
import Login from '../pages/Login'
import My from '../pages/My'
import Fruits from '../pages/Fruits'
import Seafood from '../pages/Seafood'
import Meat from '../pages/Meat'
import Rice from '../pages/Rice'
import Vegetables from '../pages/Vegetables'
import Tea from '../pages/Tea'
import Ingredient from '../pages/Ingredient'
import Specialty from '../pages/Specialty'

Vue.use(Router);

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path:'/classification',
      name:'classification',
      component:Classification
    },
    {
      path:'/my',
      name:'my',
      component:My
    },{
      path:'/login',
      name:'login',
      component:Login
    },
    {
      path:'/水果',
      component:Fruits
    },{
      path:'/海鲜',
      component:Seafood
    },{
      path:'/蛋肉',
      component:Meat
    },{
      path:'/大米',
      component:Rice
    },{
      path:'/蔬菜',
      name:'vegetables',
      component:Vegetables
    },{
      path:'/茶叶',
      component:Tea
    },{
      path:'/配料',
      component:Specialty
    },{
      path:'/特产',
      component:Ingredient
    }
  ]
})
