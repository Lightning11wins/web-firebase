import { module, test } from 'qunit';
import { setupTest } from 'my-ember-test/tests/helpers';

module('Unit | Service | Auth', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:auth');
    assert.ok(service);
  });
});
