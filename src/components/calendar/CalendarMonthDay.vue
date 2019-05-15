<template>
  <div
    class="calendar-month-day"
    :class="{'active-item':isActive}"
    @click.stop="select"
  >{{day | formatter}}</div>
</template>

<script>
import moment from "moment";
import mixin from "./calendar-mixin";

export default {
  mixins: [mixin],
  props: {
    day: {
      type: String,
      required: true
    },
    activeDate: {
      type: String,
      required: true
    }
  },
  filters: {
    formatter(val) {
      return moment(val).format("D");
    }
  },
  computed: {
    isActive() {
      return this.day === this.activeDate;
    }
  },
  methods: {
    // 选择日期
    select() {
      this.$emit("select", this.day);
    }
  },
  mounted() {
    // console.log(this.today = '2332','===today-=======');
  }
  // updated(){
  //   console.log(this.activeDate,'==activeDate====');

  // }
};
</script>

<style lang="scss" scoped>
$daySize: 100vw / 7;

.active-item {
  background-color: red;
  color: #fff;
}

.calendar-month-day {
  width: $daySize;
  height: $daySize;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 200ms;
}
</style>

