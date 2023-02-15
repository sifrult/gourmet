const ingredientInputHandler = async (event) => {
    event.preventDefault();

    const ingredient = document.querySelector('#ingredients').value.trim();

    if (ingredient) {
      const response = await fetch('/api/recipes/ingredient', {
        method: 'POST',
        body: JSON.stringify({ ingredient}),
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
.querySelector('.ingredientButton')
.addEventListener('click', ingredientInputHandler);
