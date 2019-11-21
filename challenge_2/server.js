const express = require('express');
const app = express();
const PORT = 3000;
const morgan = require('morgan');

app.use(express.static('public'))
app.use(express.json());
app.use(morgan('dev'));

app.listen(PORT, () => console.log(`App server listening on port ${PORT}`));
