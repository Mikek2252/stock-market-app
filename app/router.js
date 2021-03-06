import EmberRouter from '@ember/routing/router';
import config from 'stock-trader-app/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('week', { path: '/weeks/:week_id' }, function () {
    this.route('team-price');
  });
  this.route('user', { path: '/user/:user_id' });
});
