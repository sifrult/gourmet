const deleteBtn = async (event) => {
    if (event.target.hasAttribute('data-recipe-name')) {
      const recipe_name = event.target.getAttribute('data-recipe-name');
      const response = await fetch(`/api/recipes/${recipe_name}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        document.location.replace('/myRecipes');
      } else {
        alert('Failed to delete project');
      }
    }
  };


const element = document.querySelectorAll('.delete')
element.forEach(function(el){
  el.addEventListener('click', deleteBtn);
});
