const request = require('request');
const express = require('express');

let ingrList = 'chicken,tomato,pepper,cheese';
const app = express();

//routes 
app.get('/', (req, res) => {

    const options = {
        method: 'GET',
        url: 'https://api.spoonacular.com/recipes/findByIngredients',
        qs: {
            apiKey: '0ce380dcbd274d5b8203bbca9a7cb1b8',
            ingredients: req.query.ingr,
            ignorePantry: 'true',
            ranking: '2'
        }
    };
    request(options, function (error, response, body) {
        if (error) throw new Error(error);
        console.log(req);
        console.log(body);

        res.json(response);
    });
});

app.listen(5050, () => {
    console.log('Running project on port $(port)');
});