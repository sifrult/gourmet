const addFavorite = async (event) => {
    event.preventDefault();

    const recipe_name = document.querySelector('#recipe_name').textContent.trim();
    const time = document.querySelector('#recipe_time').textContent.trim();
    const url = document.getElementById('recipe_img').src;

    if (recipe_name && time && url) {
        const response = await fetch(`/api/recipes/favorite`, {
            method: 'POST',
            body: JSON.stringify({recipe_name, time, url}),
            headers: {
                'Content-Type': 'application/json',
              },
        });
        if (response.ok) {
            document.location.replace('/myRecipes');
        } else {
            alert('Failed to favorite')
        }
    }
}

document.querySelector('#favorite').addEventListener('click', addFavorite)
