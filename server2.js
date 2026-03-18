const express = require('express');
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const DATA_FILE = path.join(__dirname, 'data', 'recipes.json');

function readData() {
  try {
    return JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
  } catch (e) {
    return [];
  }
}

function writeData(data) {
  fs.mkdirSync(path.join(__dirname, 'data'), { recursive: true });
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
}

app.get('/api/recipes', (req, res) => {
  res.json(readData());
});

app.get('/api/recipes/:id', (req, res) => {
  const recipes = readData();
  const recipe = recipes.find(r => r.id === req.params.id);
  if (!recipe) return res.status(404).json({ error: 'Not found' });
  res.json(recipe);
});

app.post('/api/recipes', (req, res) => {
  const recipes = readData();
  const recipe = Object.assign({}, req.body);
  recipe.id = uuidv4();
  recipes.push(recipe);
  writeData(recipes);
  res.status(201).json(recipe);
});

app.listen(PORT, () => console.log(`Server listening on http://localhost:${PORT}`));

module.exports = app;
