import { Model, hasMany } from 'ember-cli-mirage';

export default Model.extend({
  weekNumber(i) {
    return i;
  },
  teamPrice: hasMany(),
});
