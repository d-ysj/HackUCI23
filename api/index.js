// const request = require('request');
// const express = require('express');

// let ingrList = 'chicken,tomato,pepper,cheese';
// const app = express();

// //routes 
// app.get('/api', (req, res) => {

//     const options = {
//         method: 'GET',
//         url: 'https://api.spoonacular.com/recipes/findByIngredients',
//         qs: {
//             apiKey: '3eb087ca38c948188eb44e538c7f21ff',
//             ingredients: req.query.ingr,
//             ignorePantry: 'true',
//             ranking: '2'
//         }
//     };
//     request(options, function (error, response, body) {
//         if (error) throw new Error(error);
//         console.log(req);
//         console.log(body);

//         res.json(JSON.parse(body));
//     });
// });

// module.exports = app;

const request = require('request');
const express = require('express');

let ingrList = 'chicken,tomato,pepper,cheese';
const app = express();
let keyCount = 0;

//routes 
app.get('/api', (req, res) => {

    const options = {
        method: 'GET',
        url: 'https://api.spoonacular.com/recipes/findByIngredients',
        qs: {
            apiKey: '5b9e70cd3328410cb3e68f3a26212f08',
            ingredients: req.query.ingr,
            ignorePantry: 'true',
            ranking: '1',
            number: '10'
        }
    };
    let idString = '';
    request(options, function (error, response, body) {
        if (error) throw new Error(error);

        // console.log(req);
        // console.log("hello1");
        body = JSON.parse(body);

        console.log("hello2");
        console.log(body[0]);
        console.log(body[0]['id']);
        keyCount = Object.keys(body).length;

        for (let i = 0; i < keyCount; i++) {
            if ((i < keyCount) && (i > 0)) {
                idString += ',';
            }
            idString += body[i].id;
        }
        // idString = '' + body[0].id + ',' + body[1].id + ',' + body[2].id;
        //+ ',' + body[3].id + ',' + body[4].id + ',' + body[5].id + ',' + body[6].id + ','
        // + body[7].id + ',' + body[8].id + ',' + body[9].id;

        // body = idString;
        // res.json(JSON.parse(body));
        // console.log(idString);
        //res.json(JSON.parse(body));


        const options2 = {
            method: 'GET',
            url: 'https://api.spoonacular.com/recipes/informationBulk',
            qs: {
                apiKey: '5b9e70cd3328410cb3e68f3a26212f08',
                ids: idString,
                includeNutrition: 'false'
            }
        };

        request(options2, function (error, response, body) {
            if (error) throw new Error(error);
            // console.log("helloHEHE");
            console.log(JSON.parse(body));
            // console.log("bodyFinish");
            res.json(JSON.parse(body));
        });
    });


});

module.exports = app;
