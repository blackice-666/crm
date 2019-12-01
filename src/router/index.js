import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Input from '../components/Input'
import Main from '../components/Main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children:[
        {
          path: 'Input',
          name: 'Input',
          component: Input
        },
        {
          path: 'Main',
          name: 'Main',
          component: Main
        }
      ]
    },
    
  ]
})
