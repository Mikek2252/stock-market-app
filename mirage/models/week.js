import { Model } from 'ember-cli-mirage';

export default Model.extend({
  weekNumber(i) {
    return i;
  }
});
