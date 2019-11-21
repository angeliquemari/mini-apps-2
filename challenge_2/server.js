const express = require('express');
const app = express();
const PORT = 3000;
const morgan = require('morgan');
const request = require('request');

app.use(express.static('public'))
app.use(express.json());
app.use(morgan('dev'));

app.get('/data', (req, res) => {
  let url = 'https://api.coindesk.com/v1/bpi/historical/close.json';
  request(url, (error, response, body) => {
    if (error) {
      console.log('Error:', error);
      return res.status(500).end();
    }
    let origData = JSON.parse(body).bpi;
    let labels = [];
    let data = [];
    for (let date in origData) {
      labels.push(date);
      data.push(origData[date]);
    }
    let newData = {
      labels: labels,
      data: data
    };
    res.send(newData);
  });
})

app.listen(PORT, () => console.log(`App server listening on port ${PORT}`));
