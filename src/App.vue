<template>
  <div id="app" v-on:mousedown.left="createLoves($event)" v-on:mouseup="removeSmallHert">
    <home></home>
    <mouse ref="mouse"></mouse>	
  </div>
</template>

<script>
import Home from "./views/Home";
import mouse from './components/mouse'
export default {
  name: "app",
  components: {
    Home,
    mouse
  },
  mounted() {
    /* 2d动画建模 */
    setTimeout(() => {
      window.L2Dwidget.init({
        pluginRootPath: "live2dw/",
        pluginJsPath: "lib/",
        pluginModelPath: "live2d-widget-model-z16/assets/",
        tagMode: false,
        debug: false,
        model: {
          jsonPath: "../live2dw/live2d-widget-model-z16/assets/z16.model.json",
        },
        display: { position: "left", width: 300, height: 500 },
        mobile: { show: true },
        log: false,
      });
    }, 1000);
  },
  methods:{
    	createLoves(){
				this.$refs.mouse.createLoves(event)
			},
			removeSmallHert(){
				this.$refs.mouse.removeSmallHert()
			}
  }
};
</script>

<style>
  *{
    cursor:normal;
    padding: 0;
    border: 0;
    margin: 0;
    cursor: url(https://cdn.calamus.xyz/cursor/ai2.png), default !important;
  }
  #app{
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}
/* body {  */
/* cursor:normal; /*使用系统默认指针，就是箭头*/ 
/* cursor:url(mouse1.cur); */ /*使用你自己提供是静态指针*/ 
/* cursor:url(mouse2.ani);  *//*使用你自己提供是动画指针
｝  */

</style>
