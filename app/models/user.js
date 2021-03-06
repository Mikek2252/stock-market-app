import Model, { attr, hasMany } from '@ember-data/model';

export default class UserModel extends Model {
  @attr name;
  @attr code;
  @attr money;
  @hasMany userStocks;
}
