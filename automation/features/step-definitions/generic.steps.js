const { Given, Then } = require('@cucumber/cucumber');
const assert = require('assert');

Given('I open the app', async () => {
  await browser.url('/');
});

Then('I see {string}', async (text) => {
  const body = await $('body').getText();
  assert.ok(body.includes(text), `Body does not include ${text}`);
});
