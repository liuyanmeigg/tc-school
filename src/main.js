import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
// import "./utils/rem";
import "./style/common.less"
/*引入elementui组件*/
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
