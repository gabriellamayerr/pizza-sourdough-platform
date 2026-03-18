module.exports = class BasePage {
  constructor () {}
  async open (path) { await browser.url(path) }
}
