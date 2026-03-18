const BasePage = require('./base.page')
module.exports = class LoginPage extends BasePage {
  get username () { return $('#username') }
  get password () { return $('#password') }
  get submit () { return $('button[type=submit]') }
}
