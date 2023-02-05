const request = require('request');
const express = require('express');

//let ingrList = 'chicken,tomato,pepper,cheese';
const app = express();
var keyCount = 0;

//routes 
app.get('/api', (req, res) => {
    console.time("test_timer");
    const options = {
        method: 'GET',
        url: 'https://api.spoonacular.com/recipes/findByIngredients',
        qs: {
            apiKey: '5298b25d78094e3780dbad4688ea4cc6',
            ingredients: req.query.ingr,
            ignorePantry: 'true',
            ranking: '1',
            number: '5'
        }
    };
    console.timeEnd("test_timer");
    let idString = '';
    request(options, function (error, response, body) {
        if (error) throw new Error(error);

        // console.log(req);
        // console.log("hello1");
        body = JSON.parse(body);
        keyCount = Object.keys(body).length;
        console.log(body);
        // console.log(body[0]['id']);
        console.log(keyCount);

        for (let i = 0; i < keyCount; i++) {
            if ((i < keyCount) && (i > 0)) {
                idString += ',';
            }
            idString += body[i].id;
        }

        console.time("test_timer");
        const options2 = {
            method: 'GET',
            url: 'https://api.spoonacular.com/recipes/informationBulk',
            qs: {
                apiKey: '5298b25d78094e3780dbad4688ea4cc6',
                ids: idString,
                includeNutrition: 'false'
            }
        };

        request(options2, function (error, response, body) {
            if (error) throw new Error(error);
            // console.log("helloHEHE");
            //console.log(JSON.parse(body));
            // console.log("bodyFinish");
            res.json(JSON.parse(body));
            console.timeEnd("test_timer");
        });
    });




});

module.exports = app;

// export

