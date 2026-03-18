const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

const DATA_DIR = path.join(__dirname, 'data');
const RECIPES_FILE = path.join(DATA_DIR, 'recipes.json');

function readRecipes(){
  try { return JSON.parse(fs.readFileSync(RECIPES_FILE,'utf8')); } catch(e){ return []; }
}

function writeRecipes(list){
  fs.mkdirSync(DATA_DIR, { recursive: true });
  fs.writeFileSync(RECIPES_FILE, JSON.stringify(list, null, 2));
}

app.get('/api/recipes', (req, res) => {
  res.json(readRecipes());
});

app.get('/api/recipes/:id', (req,res)=>{
  const recipes = readRecipes();
  const r = recipes.find(x=> x.id === req.params.id);
  if(!r) return res.status(404).json({ error: 'Not found' });
  res.json(r);
});

app.post('/api/recipes', (req,res)=>{
  const recipes = readRecipes();
  const id = (Date.now()).toString(36);
  const recipe = Object.assign({ id }, req.body);
  recipes.push(recipe);
  writeRecipes(recipes);
  res.status(201).json(recipe);
});

app.use('/', express.static(path.join(__dirname, '..', 'frontend', 'dist')));

// Fallback root page when frontend/dist is not built
app.get('/', (req, res) => {
  const indexPath = path.join(__dirname, '..', 'frontend', 'dist', 'index.html');
  if (fs.existsSync(indexPath)) return res.sendFile(indexPath);
  res.send(`<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <title>Sourdough Pizza & Bread</title>
  <style>body{font-family:Arial,Helvetica,sans-serif;padding:20px}label{display:block;margin-top:8px}</style>
</head>
<body>
  <h1>Sourdough Pizza & Bread</h1>
  <form id="recipeForm">
    <label>Name <input id="name" /></label>
    <label>Type <input id="type" value="dough"/></label>
    <label>Ingredients <input id="ingredients" /></label>
    <label>Notes <input id="notes" /></label>
    <button type="submit">Add</button>
  </form>
  <ul id="list"></ul>
  <script>
    async function load(){
      try{
        const res = await fetch('/api/recipes');
        const list = await res.json();
        const ul = document.getElementById('list');
        list.forEach(r=>{const li=document.createElement('li'); li.textContent = r.name; ul.appendChild(li);});
      }catch(e){console.error(e)}
    }
    document.getElementById('recipeForm').addEventListener('submit', async (e)=>{
      e.preventDefault();
      const body = {
        name: document.getElementById('name').value,
        type: document.getElementById('type').value,
        ingredients: document.getElementById('ingredients').value,
        notes: document.getElementById('notes').value
      };
      const r = await fetch('/api/recipes', { method: 'POST', headers: {'content-type':'application/json'}, body: JSON.stringify(body) });
      const json = await r.json();
      const li = document.createElement('li'); li.textContent = json.name; document.getElementById('list').appendChild(li);
      document.getElementById('name').value = '';
    });
    load();
  </script>
</body>
</html>`);
});

// Products & auth endpoints
const products = [
  { id: 1, name: 'Sourdough Starter', price: 12 },
  { id: 2, name: 'Pizza Dough Balls', price: 8 },
  { id: 3, name: 'Pizza Baking Class', price: 65 },
  { id: 4, name: 'Bread Lame', price: 15 }
];

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/products/search', (req, res) => {
  const q = (req.query.q || '').toLowerCase();
  const result = products.filter(p => p.name.toLowerCase().includes(q));
  res.json(result);
});

app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  if (email === 'admin@bakery.com' && password === '123456') {
    return res.json({ token: 'fake-jwt' });
  }
  res.status(401).json({ error: 'Invalid credentials' });
});

app.listen(PORT, () => console.log(`Backend listening http://localhost:${PORT}`));

module.exports = app;