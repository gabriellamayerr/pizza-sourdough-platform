const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

Given('I open the app', async () => {
  await browser.url('/');
});

Then('I see {string}', async (text) => {
  const body = await $('body').getText();
  assert.ok(body.includes(text), `Body does not include ${text}`);
});

When('I add a recipe named {string}', async (name) => {
  await $('#name').setValue(name);
  await $('#type').setValue('dough');
  await $('#ingredients').setValue('flour, water');
  await $('#notes').setValue('ci');
  await $('button[type="submit"]').click();
  // wait for new item
  await browser.pause(500);
});
