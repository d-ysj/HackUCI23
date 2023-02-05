const options = { method: 'GET' };
let keyCount = 0;
let numdiets = 0;
let DietBlobs = '';

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

            keyCount = Object.keys(response).length;


            if (keyCount == 0) {
                document.body.innerHTML += '<article id="result" class="anarticle">' +

                    '<p style="display:block; text-align: center;"> No results found. Lets try again! </p>' +

                    '</article>';

            }

            while ((i < 5) && (i < keyCount)) {

                numdiets = Object.keys(response[i].diets).length;
                console.log(response[i].diets);
                for (let j = 0; j < numdiets; j++) {
                    DietBlobs += '<button class="blob" >' + response[i].diets[j] + '</button>';
                }

                document.body.innerHTML +=
                    '<article id="result" class="anarticle">' +
                    '<h2>' +
                    '<a id="lnk" href="' + response[i].spoonacularSourceUrl + '" target="_blank">' + response[i].title + '</a>' +
                    '</h2>' +
                    '<br>' + '<br>' + '<br>' +
                    // '<h2>' + response[i].title + '</h2>' +
                    '<img src="' + response[i].image + '" />' +
                    '<p>' + response[i].summary + '" </p>' + DietBlobs +

                    '<br>' + '<br>' + '<br>' + '<br>' +

                    '</article>';

                document.body.innerHTML += '<id="result" br>';
                document.body.innerHTML += '<id="result" br>';

                DietBlobs = '';
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

