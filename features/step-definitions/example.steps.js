const { Given, Then } = require('@cucumber/cucumber');
const assert = require('assert');

Given('I open the example site', async () => {
    await browser.url('https://example.com');
});

Then('the page title contains {string}', async (expected) => {
    const title = await browser.getTitle();
    assert.ok(title.includes(expected), `Title "${title}" does not include "${expected}"`);
});
