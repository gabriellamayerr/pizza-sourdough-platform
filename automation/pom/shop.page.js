const BasePage = require('./base.page')
module.exports = class ShopPage extends BasePage {
  get list () { return $('ul') }
}
