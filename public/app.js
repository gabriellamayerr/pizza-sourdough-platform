async function fetchRecipes() {
  const res = await fetch('/api/recipes');
  return res.json();
}

function render(recipes) {
  const ul = document.getElementById('recipes');
  ul.innerHTML = '';
  recipes.forEach(r => {
    const li = document.createElement('li');
    li.textContent = `${r.name} — ${r.type} — ${r.ingredients ? r.ingredients.join(', ') : ''}`;
    ul.appendChild(li);
  });
}

async function init() {
  const recipes = await fetchRecipes();
  render(recipes);

  document.getElementById('recipeForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const type = document.getElementById('type').value;
    const ingredients = document.getElementById('ingredients').value.split(',').map(s=>s.trim()).filter(Boolean);
    const notes = document.getElementById('notes').value;
    await fetch('/api/recipes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, type, ingredients, notes })
    });
    const newList = await fetchRecipes();
    render(newList);
    e.target.reset();
  });
}

window.addEventListener('load', init);
