const deleteBtn = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
        console.log(id)
      const response = await fetch(`/api/recipes/${id}`, {
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
