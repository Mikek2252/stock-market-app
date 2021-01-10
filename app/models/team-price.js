import Model, { attr, belongsTo } from '@ember-data/model';

export default class TeamPriceModel extends Model {
  @attr price;
  @belongsTo week;
  @belongsTo team;
}
