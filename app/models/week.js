import Model, { attr, hasMany } from '@ember-data/model';

export default class WeekModel extends Model {
  @attr weekNumber;
  @hasMany teamPrice;
}
