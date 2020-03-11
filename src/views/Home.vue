<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
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
      ]
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
    }

  }
};
</script>
