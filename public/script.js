const options = { method: 'GET' };

function callAPI(searchInput) {
    fetch('')
        .then(response => { response.json() });
}

function searchRecipes() {
    let searchInput = document.getElementById('search').value;

    //var searchList = searchInput.split(', ')

    fetch('./api?ingr=' + searchInput, options)
        .then(response => response.json())
        .then(response => {
            document.body.innerHTML += response[0].title;
            document.body.innerHTML += `<img src="${response[0].image}" />`;

        })
        .catch(err => console.error(err))
}



window.addEventListener("scroll", function () {
    var nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 0);
})