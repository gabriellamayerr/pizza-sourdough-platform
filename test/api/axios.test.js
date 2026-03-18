const axios = require('axios');

const base = process.env.BASE_URL || 'http://localhost:4000';

async function run() {
  try {
    // Get list
    const list = await axios.get(base + '/api/recipes');
    console.log('GET /api/recipes status', list.status);

    // Create a recipe
    const newRecipe = { name: 'Test Loaf', type: 'dough', ingredients: ['starter','flour'], notes: 'test' };
    const create = await axios.post(base + '/api/recipes', newRecipe);
    console.log('POST /api/recipes status', create.status);

    // Read created
    const id = create.data.id;
    const getOne = await axios.get(base + '/api/recipes/' + id);
    console.log('GET /api/recipes/:id status', getOne.status);

    console.log('\nAPI tests passed');
    process.exit(0);
  } catch (err) {
    console.error('API tests failed');
    console.error(err && err.response ? err.response.data : err.message);
    process.exit(1);
  }
}

if (require.main === module) run();

module.exports = run;
