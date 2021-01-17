import Model, { attr, belongsTo } from '@ember-data/model';

export default class UserStockModel extends Model {
  @attr quantity;
  @attr currentPrice;
  @belongsTo teamPrice;
  @belongsTo user;
}
