// fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
// .then(res => res.json())
// .then(data => displayFood(data))

// const displayFood = foods =>{
//     console.log(foods.meals[0].strMeal);
// }

const searchBtn = document.getElementById('search-button');
searchBtn.addEventListener('click', () => {
    const foodName = document.getElementById('food-name').value;
    displayFood(foodName)
})


const foodArea = document.getElementById('show-food');

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
    //.catch(err => console.log(err.message))
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
        </ul>
    `;
};



    // .then(res=> res.json())
    // .then(data=> {
    //     data.meals
    //     .map(singleFood => {
    //         foodIngredient.innerHTML=`
    //         <img src="${singleFood.strMealThumb}">
    // //         `
    //     })

    // })





// fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${food}`)