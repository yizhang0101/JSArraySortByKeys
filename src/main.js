import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'mint-ui/lib/style.css'
import Mint from 'mint-ui'
Vue.use(Mint);


import Vconsole from 'vconsole';
let vConsole = new Vconsole();
vConsole.setOption('maxLogNumber', 5000);
Vue.use(vConsole)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  directives:{
    drag(el){
        el.onmousedown = function(e){
            console.log(e)
            var disx = e.pageX - el.offsetLeft;
            var disy = e.pageY - el.offsetTop;
            document.onmousemove = function (e){
                el.style.left = e.pageX - disx+'px';
                el.style.top = e.pageY - disy+'px';
            }
            document.onmouseup = function(){
                document.onmousemove = document.onmouseup = null;
            }
        }
    }
},
  render: h => h(App)
}).$mount('#app')
