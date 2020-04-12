<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />

    <!-- <div class="p1">
      <div class="p2"></div>
      <div class="p4"></div>
    </div>
    <div class="p3"></div> -->
    <div style="height:100px;display:flex;align-items:center;padding: 0 30px;-webkit-backface-visibility: hidden; 
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
      <!-- <div class="p3">
        <img :src="imgUrls[1].imgUrl" alt="">
      </div> -->
    </div>

    <div style="height:100px;display:flex;align-items:center;padding: 0 30px;">

      <mt-swipe :auto="0" :show-indicators="false"  style="width:33.33%">
        <mt-swipe-item @tap="alert1('1_1')" v-for="(item,index) in imgUrls" :key="index">
          <mt-swipe v-if="index === 0"  :auto="2000" :show-indicators="false" style="width:100%">
            <mt-swipe-item v-for="(item,index) in imgUrls" :key="index" @tap="alert1(2)">
              <img @tap="tap(index,item.imgUrl)" v-lazy="item.imgUrl" alt="">
            </mt-swipe-item>
          </mt-swipe>
          <img v-else @tap="tap(index,item.imgUrl)" v-lazy="item.imgUrl" alt="">
        </mt-swipe-item>
        <!-- <mt-swipe-item v-for="(item,index) in imgUrls" :key="index" @tap="alert1(1)">
          <img v-lazy="item.imgUrl" alt="">
        </mt-swipe-item> -->
        
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
    </div>

    <div v-for="(item,index) in imgUrls" :key="index">
      <img  :src="item.imgUrl" alt="">
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
          time:'2019-02-05 11:12:12'
        },
        {
          a: "a2",
          b: "b2",
          c: "c2",
          num: 1,
          time:'2019-02-02 11:12:12'
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
          time:'2019-02-04 11:12:12',
          children: [
            { x1: "x1_1", x2: "x1_2" },
            { x1: "x1_2", x2: "x2_2" }
          ]
        },
        {
          num: 4,
          children: [
            { x1: "x1_1", x2: "x1_2" },
            { x1: "x1_2", x2: "x2_2" }
          ]
        }
      ],
      imgUrls:[
        {imgUrl:"https://climg.mukewang.com/5e450a5e084ba43b03000170.jpg"},
        {imgUrl:"https://climg.mukewang.com/5e450a88083e4ca703000170.jpg"},
        {imgUrl:"https://img2.mukewang.com/szimg/59c0f06e0001150805400300-360-202.jpg"},
        {imgUrl:"https://climg.mukewang.com/5e450a5e084ba43b03000170.jpg"},
        {imgUrl:"https://climg.mukewang.com/5e450a88083e4ca703000170.jpg"},
        {imgUrl:"https://img2.mukewang.com/szimg/59c0f06e0001150805400300-360-202.jpg"},

      ],
      startTime:null,
      endTime:null,
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
    arrSort(){
      let arr = this.objArr1.concat(this.objArr2)
      // let retArr = arr.sort(this.keysrt('num',true));
      // console.log(retArr);
      let arr1 = arr
      console.log(arr)
      // console.log(arr.sort(this.compare('num','time')))

      let c = arr1.sort(this.compare('num','time'))//arr.sort(this.compare('num','time'))
      console.log(c)
    
    },
    compare(property,p1){
      return function(a,b){
          var value1 = a[property];
          var value2 = b[property];
          if(value1 === value2){
            let at = (new Date(a[p1])).getTime()
            let bt = (new Date(b[p1])).getTime()
            return at - bt
          }
          return value1 - value2;
      }
    },
    clk(a,b){
      alert(`clk|${a}|${b}`)
    },
    start(){
      this.startTime = new Date()
    },
    end(a,b){
      this.endTime = new Date()
      if(this.endTime - this.startTime < 60){
        console.log(this.endTime - this.startTime)
        this.clk(a,b)
      }
      console.log(this.endTime - this.startTime)
      console.log(`end|${a}|${b}`)

    },
    tap(a,b){
      console.log(`tap|${a}|${b}`)
    },
    alert1(a){
      alert(a)
    }

  }
};
</script>
<style scoped>
  .home { -webkit-backface-visibility: hidden; 
  -webkit-transform-style: preserve-3d; }
  .p1{
    position: relative;
    border: 1px solid #f00
  }
  .p1:after{
            content: "";
            /*转换为一个块元素*/
            display: block;
            /*清除两侧的浮动*/
            clear: both;
        }
  .p2{
    position: absolute;
    width: 200px;
    height: 200px;
    border: 1px solid #0f0
  }
  .p3{
    width: 100%;
    height: 200px;
    position:relative;
  }
  .p3 img{
    width: 100%;
    height: 100%;
  }
  .p4{
    border: 1px solid #00f;
    height: 210px;
  }
  img{
    height: 100%;
    width: 100%;
    /* display: block; */
  }
</style>

