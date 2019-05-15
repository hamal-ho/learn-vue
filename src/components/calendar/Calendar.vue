<template>
  <div class="calendar-container">
    <ul class="calendar-header">
      <li>日</li>
      <li>一</li>
      <li>二</li>
      <li>三</li>
      <li>四</li>
      <li>五</li>
      <li>六</li>
    </ul>
    <CalendarMonth :activeDate="activeDate" @select="changeDate"/>
  </div>
</template>

<script>
import CalendarMonth from "./CalendarMonth";
import moment from "moment";
import mixin from "./calendar-mixin";

export default {
  components: {
    CalendarMonth
  },
  mixins: [mixin],
  data() {
    return {
      // 当前时间
      activeDate: ""
    };
  },
  props: {
    date: {
      type: String,
      required: true
    }
  },

  model: {
    prop: "date",
    event: "change"
  },
  created() {
    // 默认是今天
    this.activeDate = this.today;
  },
  methods: {
    changeDate(date) {
      this.activeDate = date;
      this.$emit("change", this.activeDate);
      // console.log(this.activeDate, "activeDate======activeDate");
    }
  },
  watch: {
    date(val, oldVal) {


      console.log(val, oldVal, "=======oldVal");
    }
  }
};
</script>

<style lang="scss" scoped>
.calendar-header {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  > li {
    flex-grow: 1;
    text-align: center;
  }
}
</style>
