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
    <CalendarMonth/>
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
      // dattInstance: {
      // }
    };
  },
  model: {
    prop: "date",
    event: "change"
  },
  created() {
    console.log(this.today, "====today");
  },
  methods: {}
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
