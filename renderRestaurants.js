
function renderRestaurants(restaurants) {
    // HINT: You can use <img /> tags that point to these playing card images: 
    // https://commons.wikimedia.org/wiki/Category:SVG_playing_cards
    function buildRestaurantCards(obj){
        let priceRatingDisplay = ""

        switch (obj.priceRating) {
            case 1: priceRatingDisplay = "$"
                break;
            case 2: priceRatingDisplay = "$$"
                break;
            case 3: priceRatingDisplay = "$$$"
                break;
            case 4: priceRatingDisplay = "$$$$"
                break;
            case 5: priceRatingDisplay = "$$$$$"
                break;
            default:
                break;
        }
        
        return `
        <div class="restaurantCard">
            <h3 class="restaurantName">${obj.name}</h3>
            <p class="restaurantType">${obj.type}</p>
            <p class="restaurantPriceRating">${priceRatingDisplay}</p>
        </div>
        `
    }

    let restaurantRatingCards = restaurants.map(buildRestaurantCards).join("");

    return `
    <div class="restaurantCardContainer">` + restaurantRatingCards + `</div>`
}

function restaurants() {
    var content = document.getElementById('content');

    var restaurantsAbstraction = [
        {
            name: "McDonald's",
            type: "Fast Food",
            priceRating: 1
        },
        {
            name: "Gunshow",
            type: "Date Night Dining",
            priceRating: 5
        },
        {
            name: "Iron Age",
            type: "Korean BBQ",
            priceRating: 4
        },
    ];

    content.innerHTML = renderRestaurants(restaurantsAbstraction);

}