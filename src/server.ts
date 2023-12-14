import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import noteRouter from './router/note-router';
import storeRouter from './router/store-router';
var app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello Be3o!');
});

app.use('/api/v1', noteRouter);
app.use('/api/v1', storeRouter);
const port = 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
