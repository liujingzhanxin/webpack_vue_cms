<template>
	<div class="app-contaier">	
<!--	这是app组件-->
	
		<mt-header fixed title="战新人才：vue项目实战"></mt-header>
		<!--<div>内容</div>-->
		<transition>
			<router-view></router-view>
		</transition>
		<!--内容区域是随着底部是个按钮的改变而改变  ：是使用路由进行处理-->
		<!--<div>底部</div>  mui的组件实现的：tabbar
			
			将router挂载到vm上之后，需要修改 tabbar的标签 将a标签改成router-link ，将href改成to
		-->
		<nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart">
					<span class="mui-badge">0</span>
					
				</span>
				<span class="mui-tab-label">购物信息</span>
			</router-link>
			<router-link class="mui-tab-item" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
	</div>
</template>

<script>
</script>

<style  scoped>
	.app-contaier{
		padding-top:40px;
		padding-bottom:50px;
		overflow-x: hidden;
	}


  /*动画效果*/
.v-enter,.v-leave-to{
		opacity: 0;
		transform: translateX(100%);
}
.v-leave-to{
	opacity: 0;
	transform: translateX(-100%);
	position: absolute;
}
			
.v-enter-active,.v-leave-active{
		transition: all 0.5s ease;
}
 


</style>