//项目的入口文件
//1、引入vue
import Vue from "vue";
//2、加载app组件
import app from "./app.vue";


//5、加载页面的头部  16.加载轮播图
import { Header,Swipe, SwipeItem  } from 'mint-ui';

Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
//17、设置vue的ajax请求获取轮播图的图片
import VueResource from 'vue-resource';
Vue.use(VueResource);
//18、设置请求的根路径（域名+端口）
Vue.http.options.root="http://www.liulongbin.top:3005";
//6引入mint-ui样式
import "mint-ui/lib/style.css";
//7引入 mui的样式
import "../../lib/mui/css/mui.min.css";
//8 引入mui icons-extra.css
import "../../lib/mui/css/icons-extra.css";

//9 安装路由
import VueRouter from 'vue-router';
Vue.use(VueRouter);
//14 将路由router.js  引入main.js
import router from './router.js';




//3、创建vue实例，加载app组件
var vm=new Vue({
	 el:"#app",
	 render:c=>c(app),
	router//15 将路由对象挂载到vm实例
})
//4、执行npm run dev


