<template>
  <div class="calendar-month-day" @click.stop="select">{{day | formatter}}</div>
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
    }
    // currentDate: {
    //   type: String,
    //   required: true
    // }
  },
  filters: {
    formatter(val) {
      return moment(val).format("D");
    }
  },
  methods: {
    select() {
      console.log("===select==", this.day);

      this.$emit("select", this.day);
    }
  },
  mounted() {
    // console.log(this.today = '2332','===today-=======');
  }
};
</script>

<style lang="scss" scoped>
$daySize: 100vw / 7;

.calendar-month-day {
  width: $daySize;
  height: $daySize;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

