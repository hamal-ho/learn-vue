import moment from 'moment';

const mixin = {
  data() {
    return {
      today: moment().format('YYYY-MM-DD')
    };
  }
};

export default mixin;
