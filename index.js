const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
// const words = Object.keys(require('./words_dictionary.json'));
const words = Object(require('./test_dictionary.json'));
const translate = require('@iamtraction/google-translate');
let translation;



app.use(
    cors({
        credentials: true,
        origin: true
    })
);

app.get('/', async function (req, response) {
    await translate(req.query.q, {from:"en", to:"ru"}).then(res => {
        translation = res.text;
        console.log(translation, res.text);
    })
    console.log(translation);
    response.json(translation);
})

// app.get('/', function (req, res) {
//     const filteredWords = words
//         .filter(e => e.indexOf(req.query.q) === 0)
//         .splice(0,10);
//     res.json(filteredWords);
// })


const PORT = process.env.PORT || 3001;
app.listen(PORT, '0.0.0.0', () => console.log(`Server is live at http://localhost:${PORT}`));