const addFavorite = async (event) => {
    event.preventDefault();

    const recipe_name = document.querySelector('#recipe_name').textContent.trim();
    const time = document.querySelector('#recipe_time').textContent.trim();

    console.log(recipe_name)
    console.log(time)
    if (recipe_name && time) {
        const response = await fetch(`/api/recipe`, {
            method: 'POST',
            body: JSON.stringify({recipe_name, time}),
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
