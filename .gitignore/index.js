const express = require('express')
const bodyParser = require('body-parser');
const app = express();
const pronounciation = require('./routes/pronounciation');
const yandex = require('./routes/yandex');
const owlbot = require('./routes/owlbot');
const port = process.env.PORT || 8000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.use(pronounciation);
app.use(yandex);
app.use(owlbot);

app.listen(port, () => {
  console.log(`App listening on port ${port}!`)
});
