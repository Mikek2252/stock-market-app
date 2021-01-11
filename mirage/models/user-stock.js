import { Model, belongsTo } from 'ember-cli-mirage';

export default Model.extend({
  teamPrice: belongsTo(),
  team: belongsTo(),
  week: belongsTo(),
});
