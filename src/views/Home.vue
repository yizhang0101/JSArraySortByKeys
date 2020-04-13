<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />

    <!-- <div class="p1">
      <div class="p2"></div>
      <div class="p4"></div>
    </div>
    <div class="p3"></div> -->
    <!-- <div style="height:100px;display:flex;align-items:center;padding: 0 30px;-webkit-backface-visibility: hidden; 
  -webkit-transform-style: preserve-3d;">

      <mt-swipe :auto="2000" :show-indicators="false"  style="width:33.33%">
        <mt-swipe-item v-for="(item,index) in imgUrls" :key="index">
          <img @touchstart="start" @touchend="end(item.imgUrl,index)" v-lazy="item.imgUrl" alt="">
        </mt-swipe-item>
        <mt-swipe-item>
          <mt-swipe :auto="2000" :show-indicators="false" style="width:100%">
            <mt-swipe-item v-for="(item,index) in imgUrls" :key="index">
              <img @tap="tap(index,item.imgUrl)" v-lazy="item.imgUrl" alt="">
            </mt-swipe-item>
          </mt-swipe>
        </mt-swipe-item>
      </mt-swipe>
      <mt-swipe :auto="0" :show-indicators="false" style="width:33.33%">
        <mt-swipe-item v-for="(item,index) in imgUrls" :key="index"  @tap="tap(index,item.imgUrl)">
          <img v-lazy="item.imgUrl" alt="">
        </mt-swipe-item>
      </mt-swipe>
       <mt-swipe :auto="0" :show-indicators="false" style="width:33.33%">
        <mt-swipe-item v-for="(item,index) in imgUrls" :key="index"  @tap="tap(index,item.imgUrl)">
          <img v-lazy="item.imgUrl" alt="">
        </mt-swipe-item>
      </mt-swipe>
      
    </div> -->

    <!-- <div style="height:100px;display:flex;align-items:center;padding: 0 30px;">

      <mt-swipe :auto="0" :show-indicators="false"  style="width:33.33%">
        <mt-swipe-item @tap="alert1('1_1')" v-for="(item,index) in imgUrls" :key="index">
          <mt-swipe v-if="index === 0"  :auto="2000" :show-indicators="false" style="width:100%">
            <mt-swipe-item v-for="(item,index) in imgUrls" :key="index" @tap="alert1(2)">
              <img @tap="tap(index,item.imgUrl)" v-lazy="item.imgUrl" alt="">
            </mt-swipe-item>
          </mt-swipe>
          <img v-else @tap="tap(index,item.imgUrl)" v-lazy="item.imgUrl" alt="">
        </mt-swipe-item>
        
      </mt-swipe>
      <mt-swipe :auto="0" :show-indicators="false" style="width:33.33%">
        <mt-swipe-item v-for="(item,index) in imgUrls" :key="index"  @tap="tap(index,item.imgUrl)">
          <img v-lazy="item.imgUrl" alt="">
        </mt-swipe-item>
      </mt-swipe>
       <mt-swipe :auto="0" :show-indicators="false" style="width:33.33%">
        <mt-swipe-item v-for="(item,index) in imgUrls" :key="index"  @tap="tap(index,item.imgUrl)">
          <img v-lazy="item.imgUrl" alt="">
        </mt-swipe-item>
      </mt-swipe>
      <mt-swipe :auto="0" :show-indicators="false" style="width:33.33%">
        <mt-swipe-item v-for="(item,index) in imgUrls" :key="index"  @tap="tap(index,item.imgUrl)">
          <img v-lazy="item.imgUrl" alt="">
        </mt-swipe-item>
      </mt-swipe>
    </div> -->

    <!-- <div v-for="(item,index) in imgUrls" :key="index">
      <img  :src="item.imgUrl" alt="">
    </div> -->
    <!-- <mt-swipe :auto="0" :show-indicators="false"  style="width:33.33%">
        <mt-swipe-item @tap="alert1('1_1')" v-for="(item,index) in imgUrls" :key="index">
          <mt-swipe v-if="index === 0"  :auto="2000" :show-indicators="false" style="width:100%">
            <mt-swipe-item v-for="(item,index) in imgUrls" :key="index" @tap="alert1(2)">
              <img @tap="tap(index,item.imgUrl)" v-lazy="item.imgUrl" alt="">
            </mt-swipe-item>
          </mt-swipe>
          <img v-else @tap="tap(index,item.imgUrl)" v-lazy="item.imgUrl" alt="">
        </mt-swipe-item> -->
        <!-- <mt-swipe-item v-for="(item,index) in imgUrls" :key="index" @tap="alert1(1)">
          <img v-lazy="item.imgUrl" alt="">
        </mt-swipe-item> -->
        
      <!-- </mt-swipe> -->

  <div style="height:100px;padding: 0 30px;overflow:hidden" v-for="i in [1,2]" :key="i" class="aaa">
    <mt-swipe v-if="false" :auto="0" :show-indicators="false"  style="width:50%">
      <mt-swipe-item @tap="alert1('1_1')" v-for="(item,index) in imgUrls" :key="index">
        
        <img v-lazy="item.imgUrl" alt="">
      </mt-swipe-item>
      
    </mt-swipe>
    <div v-else style="width:50%;height:100%;position: relative;overflow:hidden">
      <mt-swipe :auto="0" :show-indicators="false" >
        <mt-swipe-item @tap="alert1('a',item)" v-for="(item,index) in imgUrls" :key="index">
          <div v-if="index < 1"  style="height:50%;width:100%" >
            <div v-for="i in [1,2]" :key="i" style="height:100%;width:100%" class="aaa">
              <div v-for="i in [1,2]"  :key="i" style="height:100%;width:50%" >
                  <mt-swipe :auto="0" :show-indicators="false">
                    <mt-swipe-item  v-for="(item,index) in imgUrls" :key="index">
                      <img v-lazy="item.imgUrl"  @touchstart="start" @touchmove="move" @touchend="end(item.imgUrl,index,'sub')" alt="" >
                    </mt-swipe-item>
                  </mt-swipe>
              </div>
            </div>
          </div>
          <img v-else v-lazy="item.imgUrl" @touchstart="start" @touchmove="move" @touchend="end(item.imgUrl,index,'none')" alt="">
        </mt-swipe-item>
        
      </mt-swipe>
    </div>

    


  </div>





  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  },
  data() {
    return {
      objArr1: [
        {
          a: "a1",
          b: "b1",
          c: "c1",
          num: 1,
          time: "2019-02-05 11:12:12"
        },
        {
          a: "a2",
          b: "b2",
          c: "c2",
          num: 1,
          time: "2019-02-02 11:12:12"
        },
        {
          a: "a2",
          b: "b2",
          c: "c2",
          num: 6
        }
      ],
      objArr2: [
        {
          num: 1,
          time: "2019-02-04 11:12:12",
          children: [{ x1: "x1_1", x2: "x1_2" }, { x1: "x1_2", x2: "x2_2" }]
        },
        {
          num: 4,
          children: [{ x1: "x1_1", x2: "x1_2" }, { x1: "x1_2", x2: "x2_2" }]
        }
      ],
      imgUrls: [
        { imgUrl: "https://climg.mukewang.com/5e450a5e084ba43b03000170.jpg" },
        { imgUrl: "https://climg.mukewang.com/5e450a88083e4ca703000170.jpg" },
        // {
        //   imgUrl:
        //     "https://img2.mukewang.com/szimg/59c0f06e0001150805400300-360-202.jpg"
        // },
        // { imgUrl: "https://climg.mukewang.com/5e450a5e084ba43b03000170.jpg" },
        // { imgUrl: "https://climg.mukewang.com/5e450a88083e4ca703000170.jpg" },
        // {
        //   imgUrl:
        //     "https://img2.mukewang.com/szimg/59c0f06e0001150805400300-360-202.jpg"
        // }
      ],
      imgUrls1: [
        { imgUrl: "https://climg.mukewang.com/5e450a5e084ba43b03000170.jpg" }
         ],
      startTime: null,
      endTime: null,
      startLeft:0,
      currentLeft:0,
      startTop:0,
      currentTop:0,
    };
  },
  mounted() {
    this.arrSort();
  },
  methods: {
    keysrt(key, desc) {
      return function(a, b) {
        return desc ? ~~(a[key] < b[key]) : ~~(a[key] > b[key]);
      };
    },
    arrSort() {
      let arr = this.objArr1.concat(this.objArr2);
      // let retArr = arr.sort(this.keysrt('num',true));
      // console.log(retArr);
      let arr1 = arr;
      console.log(arr);
      // console.log(arr.sort(this.compare('num','time')))

      let c = arr1.sort(this.compare("num", "time")); //arr.sort(this.compare('num','time'))
      console.log(c);
    },
    compare(property, p1) {
      return function(a, b) {
        var value1 = a[property];
        var value2 = b[property];
        if (value1 === value2) {
          let at = new Date(a[p1]).getTime();
          let bt = new Date(b[p1]).getTime();
          return at - bt;
        }
        return value1 - value2;
      };
    },
    clk(a, b) {
      alert(`clk|${a}|${b}`);
    },
    start() {
      this.startTime = new Date();
      let touch = event.touches[0];
      this.startLeft = touch.pageX;
      this.startTop = touch.pageY;
      this.currentLeft = touch.pageX
      this.currentTop = touch.pageY;
    },
    move(){
      let touch = event.touches[0];
      this.currentLeft = touch.pageX
      this.currentTop = touch.pageY;
      event.preventDefault();
    },
    end(a, b,c) {
      this.endTime = new Date();
      console.log(Math.abs(this.currentLeft - this.startLeft))
      console.log("-----")
      console.log(Math.abs(this.currentTop - this.startTop))
      if (this.endTime - this.startTime < 300 && Math.abs(this.currentLeft - this.startLeft)<5 && Math.abs(this.currentTop - this.startTop)<5) {
        console.log(this.endTime - this.startTime);
        this.clk(a, b);
      }
      console.log(this.endTime - this.startTime);
      console.log(`end|${a}|${b}`);
      console.log(c)
    },
    tap(a, b) {
      console.log(`tap|${a}|${b}`);
    },
    alert1(a, b) {
      console.log(a);
      console.log(b);
    }
  }
};
</script>
<style scoped>
.home {
  -webkit-backface-visibility: hidden;
  -webkit-transform-style: preserve-3d;
}
.p1 {
  position: relative;
  border: 1px solid #f00;
}
.p1:after {
  content: "";
  /*转换为一个块元素*/
  display: block;
  /*清除两侧的浮动*/
  clear: both;
}
.p2 {
  position: absolute;
  width: 200px;
  height: 200px;
  border: 1px solid #0f0;
}
.p3 {
  width: 100%;
  height: 200px;
  position: relative;
}
.p3 img {
  width: 100%;
  height: 100%;
}
.p4 {
  border: 1px solid #00f;
  height: 210px;
}
img {
  height: 100%;
  width: 100%;
  display: block;
}
.aaa {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
}
</style>

