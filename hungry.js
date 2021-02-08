const searchBtn = document.getElementById('search-button');
const foodArea = document.getElementById('show-food');
const detailsArea = document.getElementById('single-food-details');
searchBtn.addEventListener('click', function() {
    const foodName = document.getElementById('food-name').value;
    const message = document.getElementById('message');
    if(foodName===""){
        message.innerHTML=`
        <h1> please search first </h1>
        `
        foodArea.style.display='none'
        detailsArea.style.display='none'

    }
    displayFood(foodName)
})





function displayFood(food) {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${food}`)
        .then(res => res.json())
        .then(data => {

            let previousHTML = foodArea.innerHTML;
            document.getElementById('food-name').innerText = food.strMeal || "No food found";

            data.meals
                .map(food => {
                    const singleFood = `
                    <div class="col-md-3" id="single-food" onclick='displayFoodIngredients("${food.strMeal}")'>
                    
            
                    <div class="card">
                    <img src="${food.strMealThumb}">
                    <div class="card-body">
                        <h5 class="card-title">${food.strMeal}</h5>
                        
                    </div>
                    </div>
            </div>
            `;
                    previousHTML += singleFood;
                })

            foodArea.innerHTML = previousHTML;

        })

}

const displayFoodIngredients = food => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${food}`;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            displayFoodIngredient(data.meals[0]);
            console.log(data.meals[0]);
        });
};

const displayFoodIngredient = food => {
    const foodIngredientDiv = document.getElementById('single-food-details');



    foodIngredientDiv.innerHTML = `
        <img src="${food.strMealThumb}">
        <h4>${food.strMeal}</h4>
        
        <ul >
            <li>${food.strIngredient1}</li>
            <li>${food.strIngredient2}</li>
            <li>${food.strIngredient3}</li>
            <li>${food.strIngredient4}</li>
            <li>${food.strIngredient5}</li>
            <li>${food.strIngredient6}</li>
            <li>${food.strIngredient7}</li>
            <li>${food.strIngredient8}</li>
            <li>${food.strIngredient9}</li>
            <li>${food.strIngredient10}</li>
          
        </ul>
    `;
};

