const options = {method: 'GET'};

function callAPI(searchInput) {
    fetch('')
    .then(response => {response.json()});
}

function searchRecipes() {
    let searchInput = document.getElementById('search').value;
    /*searchInput.split(', ')
    for (i=0; searchInput.length; i++) {
        pass
    }
    //callAPI(searchInput);*/
    
    //fetch('https://api.edamam.com/api/recipes/v2?app_id=3780601a&app_key=410cafebce46de027659e5d8f0b7f695&type=public&q=' + searchInput, options)
    /*fetch('/api/(.*)')
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

    /*fetch('')
    .then(response => {return response.json();})
    .then(response => {return;})*/

    const options = {method: 'GET'};

    fetch('https://hack-uci-23.vercel.app/api/product', options)
        .ten(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err))
}



window.addEventListener("scroll", function () {
    var nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 0);
})