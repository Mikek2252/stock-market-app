import Model, { attr, belongsTo } from '@ember-data/model';

export default class UserStockModel extends Model {
  @attr quantity;
  @belongsTo teamPrice;
  @belongsTo team;
  @belongsTo user;
}
