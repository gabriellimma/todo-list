import { insertOnList } from '../public/shared/list-binder';

const jsdom = require('jsdom');
// mock
const dom = new jsdom.JSDOM(`
<!DOCTYPE html>
  <ul id="list"></ul>
<script src="./shared/list-binder.js"></script>
`);

/**
 * @jest-environment jsdom
 */

test('testing dom', () => {
  insertOnList('gabriel', dom.window.document, true);
  expect(dom.window.document.getElementById('list').firstChild.textContent).toBe('gabriel');
});
