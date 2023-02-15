const instructionInputHandler = async (event) => {
    event.preventDefault();

    const instruction = document.querySelector('#instructions').value.trim();

    if (instruction) {
      const response = await fetch('/api/recipes/newRecipe', {
        method: 'POST',
        body: JSON.stringify({ instruction}),
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
.querySelector('.instructionsButton')
.addEventListener('click', instructionInputHandler);
