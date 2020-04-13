<template>
<div>
  <div class="about">
    <h1>This is an about page</h1>
  </div>

  <div class="show">
     <transition name="slide-fade">
    <div ref="move_div" v-if="a"  @touchstart="down" @touchmove="move" @touchend="end" :style="{left:`${left1}px`}" class="showAll">
      <img v-for="(item,index) in imgList1"  :src="item.imgUrl" alt="" :key="index">
    </div>
     </transition>
  </div>


    <div class="aaa" @click="fun('a')" style="width:100px;height:100px;border:1px solid #ccc;">
      <div class="aaa" style="width:100px;height:100px;border:1px solid #ccc;">
        <div style="width:100px;height:100px;border:1px solid #ccc;" @click="fun('b')"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      imgList:[
        {imgUrl:"https://climg.mukewang.com/5e450a5e084ba43b03000170.jpg"},
        {imgUrl:"https://climg.mukewang.com/5e450a88083e4ca703000170.jpg"},
        {imgUrl:"https://img2.mukewang.com/szimg/59c0f06e0001150805400300-360-202.jpg"},
        {imgUrl:"https://climg.mukewang.com/5e450a5e084ba43b03000170.jpg"},
        {imgUrl:"https://climg.mukewang.com/5e450a88083e4ca703000170.jpg"},
        {imgUrl:"https://img2.mukewang.com/szimg/59c0f06e0001150805400300-360-202.jpg"},
      ],
      position: {x: 0, y: 0, left: 0, top: 0},
      left1:'0',
      top: 0,
      left: 0,
      index:0,
      imgList1:[],
      a:true
    }
  },
  mounted(){
    let _this = this
    setInterval(()=>{

      _this.a = false
      // for(let i = 0;i<10;i++){
      //   _this.left1 -= 340
      // }
      if(this.index === this.imgList.length-2)
      _this.index = 0
      
      _this.imgList1 = [_this.imgList[_this.index],_this.imgList[_this.index+1]]
      _this.index +=1
      this.$nextTick(() => {

      _this.a = true
      })
      
    },2000)
  },
  methods:{
     down () { // 拖动开始的操作
      this.flags = true
      const refs = this.$refs.move_div.getBoundingClientRect()
      let touch = event
      if (event.touches) {
        touch = event.touches[0]
      }
      this.position.x = touch.clientX
      this.position.y = touch.clientY
      console.log(touch.clientX)
      this.position.left = refs.left
      this.position.top = refs.top
    },
    move () { // 拖动中的操作
      if (this.flags) {
        let touch = event
        if (event.touches) {
          touch = event.touches[0]
        }

        console.log(touch.clientX)
        
        const xPum = this.position.left + touch.clientX - this.position.x
        const yPum = this.position.top + touch.clientY - this.position.y
        this.left = xPum
        this.top = yPum
        this.left1 = xPum
        this.banOut()
        // 阻止页面的滑动默认事件
        document.addEventListener('touchmove', function () {
          event.preventDefault()
        }, {passive: false})
      }
    },
    end () { // 拖动结束的操作
      this.flags = false
      this.banOut()
    },
    banOut () { // 避免拖动出界的限制
      const refs = this.$refs.move_div.getBoundingClientRect()
      if (this.left < 0) {
        this.left = 0
      } else if (this.left > this.width - refs.width) {
        this.left = this.width - refs.width
      }
      if (this.top < 0) {
        this.top = 0
      } else if (this.top > this.height - refs.height) {
        this.top = this.height - refs.height
      }
    },
    fun(a){
      console.log(a)
    }
  }
}
</script>
<style scoped>
  .show{
    width: 400px;
    height: 200px;
    position: relative;
    overflow: hidden;
  }
  .showAll{
    width: 1200px;
    height: 100%;
    position: absolute;
    left: 0;
  }
  img{
    display: inline-block;
    float: left;
    margin-right: 20px;
    width: 300px;
    height: 100%;
  }

  /* .slide-fade-enter-active {
  transition: all 3s ease;
}
.slide-fade-leave-active {
  transition: all 3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
} */
/* .slide-fade-enter, .slide-fade-leave-to */
/* .slide-fade-leave-active for below version 2.1.8 { */
  /* transform: translateX(-220px);
  opacity: 1; */
/* } */

.aaa{
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between
  }
</style>
