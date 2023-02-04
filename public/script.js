const options = { method: 'GET' };

function callAPI(searchInput) {
    fetch('')
        .then(response => { response.json() });
}

function searchRecipes() {
    let searchInput = document.getElementById('search').value;

    //var searchList = searchInput.split(', ')

    fetch('https://hack-uci-23.vercel.app/api/product?ingr=' + searchInput, options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err))
}



window.addEventListener("scroll", function () {
    var nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 0);
})