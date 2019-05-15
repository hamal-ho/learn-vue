<template>
  <div>
    <h1>测试组件</h1>
    <ul>
      <li v-for="item of arr" :key="item">{{item}}</li>
    </ul>
    <ul>
      <li>{{obj.a}}</li>
      <li>{{obj['b']}}</li>
      <li>{{num}}</li>
      <li>{{str}}</li>
    </ul>
    <h1>数值长度{{arrLength}}</h1>
    <button @click="changeArr">改变数组</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [1, 2, 3],
      obj: {
        a: "a",
        b: "b"
      },
      num: 1,
      str: "str"
    };
  },
  computed: {
    arrLength() {
      return this.arr.length;
    }
  },
  methods: {
    changeArr() {
      this.arr.push(this.arrLength + 1);
    }
  },
  watch: {}
};
</script>
