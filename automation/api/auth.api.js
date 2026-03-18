const axios = require('axios')
const base = process.env.BASE_URL || 'http://localhost:4000'

module.exports.login = async (user) => {
  // placeholder - backend currently has no auth
  return axios.post(base + '/api/login', user)
}
