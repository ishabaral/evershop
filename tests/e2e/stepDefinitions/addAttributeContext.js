const { When, Then } = require('@cucumber/cucumber');
const { expect } = require('playwright/test');
const { AddAttributePage } = require('../pageObjects/AddAttributePage');
const util = require('util');
const { ViewAttributePage } = require('../pageObjects/ViewAttributePage');

const addAttributePage = new AddAttributePage();
const viewAttributePage = new ViewAttributePage();
When(
  'user {string} creates new attribute with following details',
  async function (string, dataTable) {
    await addAttributePage.addAttributes(dataTable);
  }
);

Then(
  'user {string} should be able to edit attribute with name {string}',
  async function (string, name) {
    const editAttributeXPath = util.format(addAttributePage.editAttributeSelector, name);
    const attributeHandle = await page.waitForSelector(editAttributeXPath);

    // Get the text content of the edit attribute element
    const text = await page.evaluate(
      (element) => element.innerText,
      attributeHandle
    );
    expect(text).toEqual('Editing ' + name);
  }
);
