import express from 'express';
import 'dotenv/config';
import logger from 'morgan';
import './DataBase/mongoConfig.js';
import indexRouter from './Routes/usersRoutes/index.js';

import './Passportjs/strategies.js';
import cors from 'cors';

const app = express();
const __dirname = import.meta.dirname;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

//Serves all the request which includes /images in the url from Images folder
app.options('*', cors());
app.all('*', function (req, res, next) {
  res.header(
    'Access-Control-Allow-Origin',
    'https://whereswaldofrontend-a51pepc7f-herens-projects.vercel.app/'
  ); //! allow my website only when deploy

  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
app.use('/', indexRouter);
app.use('/images', express.static(__dirname + '/public/images'));

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  console.log(err);

  res.status(err.status || 500).send(err);
});

app.listen(3000, () => console.log('app listening on port 3000!'));
