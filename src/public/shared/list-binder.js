const insertOnList = (listItem, DOM, isTest = false) => {
  let testDom;
  /* istanbul ignore next */
  if (isTest) {
    testDom = DOM;
  } else {
    testDom = document;
  }
  const listText = testDom.createTextNode(`${listItem}`);
  const li = testDom.createElement('li');
  li.appendChild(listText);
  testDom.getElementById('list').appendChild(li);
};

module.exports = { insertOnList };
