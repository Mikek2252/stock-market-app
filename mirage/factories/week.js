import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  weekNumber(i) {
    return 1+i;
  }
});
