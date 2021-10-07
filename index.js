const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const words = Object.keys(require('./words_dictionary.json'));

app.use(
    cors({
        credentials: true,
        origin: true
    })
);

app.get('/', function (req, res) {
    const filteredWords = words
        .filter(e => e.indexOf(req.query.q) === 0)
        .splice(0,10);
    res.json(filteredWords);
})

const PORT = process.env.PORT || 3001;
app.listen(PORT, '0.0.0.0', () => console.log(`Server is live at http://localhost:${PORT}`));