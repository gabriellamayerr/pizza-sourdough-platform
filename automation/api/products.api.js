const axios = require('axios')
const base = process.env.BASE_URL || 'http://localhost:4000'

module.exports.list = async () => {
  const r = await axios.get(base + '/api/recipes')
  return r.data
}
