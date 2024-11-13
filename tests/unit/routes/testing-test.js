import { module, test } from 'qunit';
import { setupTest } from 'my-ember-test/tests/helpers';

module('Unit | Route | testing', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:testing');
    assert.ok(route);
  });
});
