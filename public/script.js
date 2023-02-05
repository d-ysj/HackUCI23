const options = { method: 'GET' };

function callAPI(searchInput) {
    fetch('')
        .then(response => { response.json() });
}

function searchRecipes() {
    let searchInput = document.getElementById('search').value;

    let node = document.getElementById('result');
    while (node != undefined) {
        document.getElementById('result').remove();
        node = document.getElementById('result');
    }

    let x;

    fetch('./api?ingr=' + searchInput, options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            let i = 0;
            document.body.innerHTML += '<id="result br>';
            document.body.innerHTML += '<id="result br>';
            document.body.innerHTML += '<id="result br>';

            while (i < 5) {
                document.body.innerHTML +=
                    '<article id="result" class="anarticle">' +
                    '<h2>' +
                    '<a id="lnk" href="' + response[i].spoonacularSourceUrl + '" target="_blank">' + response[i].title + '</a>' +
                    '</h2>' +
                    '<br>' + '<br>' + '<br>' +
                    // '<h2>' + response[i].title + '</h2>' +
                    '<img src="' + response[i].image + '" />' +
                    '<p>' + response[i].summary + '" </p>' +

                    '<br>' + '<br>' + '<br>' + '<br>' + '<br>' + '<br>' + '<br>' +

                    '</article>';

                document.body.innerHTML += '<id="result" br>';
                document.body.innerHTML += '<id="result" br>';
                i += 1;
            }
        })
        .catch(err => console.error(err))
    window.scrollBy(0, 1000);
}
window.addEventListener("scroll", function () {
    var nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 0);
})