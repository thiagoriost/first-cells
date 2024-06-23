import {
  html,
  fixture,
  assert,
  fixtureCleanup
} from '@open-wc/testing';
import '../ui-rigoberto-rios.js';
import { mockData } from './mock.js';

suite('UiRigobertoRios', () => {
  let el;

  teardown(() => fixtureCleanup());

  suite('default', () => {
    setup(async () => {
      el = await fixture(html`
        <ui-rigoberto-rios></ui-rigoberto-rios>
      `);
      await el.updateComplete;
    });

    test('a11y', async () => {
      await assert.isAccessible(el);
    });

    test('itemList property render each element', done => {
      el.addEventListener('check', () => {
        const elements = el.shadowRoot.querySelectorAll('bbva-list-card');
        assert.equal(elements.length, 2);
        done();
      });
      el.itemList = mockData;
      el.updateComplete.then(() => {
        el.dispatchEvent(new CustomEvent('check'));
      });
    });


  });

  suite('Events', () => {

    teardown(() => fixtureCleanup());

    setup(async () => {
      el.itemList = mockData;
      await el.updateComplete;
    });

    test('Click on each item dispatch event item-click with payload', done => {
      let count = 0;
      el.addEventListener('item-click', e => {
        assert.deepEqual(e.detail, mockData[ count ]);
        count++;
        if (count === mockData.length) {
          done();
        }
      });
      const fakeEvent = new CustomEvent('list-card-item-click');
      const items = el.shadowRoot.querySelectorAll('bbva-list-card');
      items.forEach(item => {
        item.dispatchEvent(fakeEvent);
      });
    });
  });
});
