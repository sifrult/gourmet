const recipeInputHandler = async (event) => {
  event.preventDefault();

  const recipe_name = document.querySelector('#recipe_title').value.trim();
  const ingredient = document.querySelector('#ingredients').value.trim().split("\n");
  const instruction = document.querySelector('#instructions').value.trim().split("\n");
  const url = document.querySelector('#recipe_url').value.trim();
  const time = document.querySelector('#recipe_time').value.trim();

  if (recipe_name && ingredient && instruction && url && time) {
    const response = await fetch('/api/recipes/newRecipe', {
      method: 'POST',
      body: JSON.stringify({ recipe_name, ingredient, instruction, url, time}),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      document.location.replace('/myRecipes');
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector('.button')
  .addEventListener('click', recipeInputHandler);
