import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | week/team-values', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:week/team-values');
    assert.ok(route);
  });
});
