<template>
	
	<div>
		
		<!--HomeContainer 加载轮播图  mint-ui轮播图
			
			获取轮播图的API地址    请求方式 Get      请求地址  /api/getlunbo
			http://www.liulongbin.top:3005/api/getlunbo   vue-resource  vue的ajax
			npm i  vue-resource -S
			
			
		-->
	<!--	HomeContainer.vue-->
		
		   <mt-swipe :auto="4000">
		 <!-- <mt-swipe-item>1</mt-swipe-item>
		  <mt-swipe-item>2</mt-swipe-item>
		  <mt-swipe-item>3</mt-swipe-item>-->
		  <!--vue for
		  -->
		  <mt-swipe-item v-for="item in lunbotuList" :key="item.url">
		  	
		  	     <img  :src="item.img">
		  	
		  </mt-swipe-item>
		</mt-swipe>
		
		
	</div>
</template>

<script>
	import { Toast } from 'mint-ui';
	//组件一加载就发送ajax请求
	export default{
		data(){
			return{
				lunbotuList:[]
			}
		},
		created(){
			this.getLunbotu();//生命周期的方法
		},
		methods:{
			//获取轮播图
			getLunbotu(){
				this.$http.get("api/getlunbo").then(result=>{
					if(result.body.status==0){//成功
						this.lunbotuList=result.body.message;
					}else{//失败
						Toast("轮播图加载失败...");
					}
				})
			}
		}
		
	}
	
	
</script>

<style lang="less" scoped>
	
	.mint-swipe{
		 height: 200px;
	}
	img{
		width: 100%;
		height:100%;
	}
</style>