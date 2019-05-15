<template>
  <div id="app">
    <h1>日历</h1>
    <Calendar v-model="today" @change="changeDate"/>
  </div>
</template>

<script>
import Test from "./components/Test";
import Calendar from "./components/calendar/Calendar";

export default {
  data() {
    return {
      today: "123"
    };
  },
  components: {
    Test,
    Calendar
  },
  methods: {
    changeDate() {
      // console.log(this.today, "=====today");
    }
  }
};
</script>

<style lang="scss">
@import "./variables.scss";

*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  margin: 0;
}

#app {
  width: 100vw;
  margin: 0;
  padding: 0;
  //   margin: 0 auto;
  line-height: 1.4;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $vue-blue;
}

h1 {
  text-align: center;
}
</style>