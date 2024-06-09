import {
  html,
  fixture,
  assert,
  fixtureCleanup
} from '@open-wc/testing';
import '../primer-litelement.js';

suite('PrimerLitelement', () => {
  let el;

  teardown(() => fixtureCleanup());

  suite('default', () => {
    setup(async () => {
      el = await fixture(html`
        <primer-litelement></primer-litelement>
      `);
      await el.updateComplete;
    });

    test('a11y', async () => {
      await assert.isAccessible(el);
    });
  });
});
