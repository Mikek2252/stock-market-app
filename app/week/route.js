import Route from '@ember/routing/route';

export default class WeekRoute extends Route {
  model(params) {
    let weekId = params.week_id;
    return this.store.findRecord('week', weekId);
  }
}
