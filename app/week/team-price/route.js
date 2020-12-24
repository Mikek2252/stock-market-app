import Route from '@ember/routing/route';

export default class WeekTeamValuesRoute extends Route {
  model() {
    let { id: weekId } = this.modelFor('week');
    return this.store.query('team-price', { weekId });
  }
}
