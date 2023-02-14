const recipeInputHandler = async (event) => {
  event.preventDefault();

  const recipe_name = document.querySelector('#recipe_title').value.trim();
  const ingredient = document.querySelector('#ingredients').value.trim();
  const instruction = document.querySelector('#instructions').value.trim();

  if (recipe_name && ingredient && instruction) {
    const response = await fetch('/api/recipes/newRecipe', {
      method: 'POST',
      body: JSON.stringify({ recipe_name, ingredient, instruction }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector('.button')
  .addEventListener('click', recipeInputHandler);
