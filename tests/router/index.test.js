import indexRouter from '../../Routes/usersRoutes/index.js';
import express from 'express';
import request from 'supertest';
const app = express();
const __dirname = import.meta.dirname;
app.use(express.urlencoded({ extended: false }));
app.use('/', indexRouter);
app.use(express.static('public'));
app.use('/images', express.static(__dirname + '/public/images'));
// testing route
test('index route works', (done) => {
  request(app)
    .get('/')
    .expect('Content-Type', /json/)
    .expect({ text: 'main page' })
    .expect(200, done);
});

test('testing route works', (done) => {
  request(app)
    .post('/test')
    .type('form')
    .send({ item: 'hello' })
    .then(() => {
      request(app)
        .get('/test')
        .expect({ array: ['hello'] }, done);
    });
});

// serving static resource tests
test('testing maze image', (done) => {
  request(app)
    .get('/images/maze.jpg')
    .expect('Content-Type', /image/)
    .expect(200, done);
});

test('testing white image', (done) => {
  request(app)
    .get('/images/white.jpg')
    .expect('Content-Type', /image/)
    .expect(200, done);
});
test('testing gold image', (done) => {
  request(app)
    .get('/images/gold.jpg')
    .expect('Content-Type', /image/)
    .expect(200, done);
});
test('testing space image', (done) => {
  request(app)
    .get('/images/space.jpg')
    .expect('Content-Type', /image/)
    .expect(200, done);
});
test('testing blue image', (done) => {
  request(app)
    .get('/images/blue.jpg')
    .expect('Content-Type', /image/)
    .expect(200, done);
});
test('testing waldo image', (done) => {
  request(app)
    .get('/images/waldo.gif')
    .expect('Content-Type', /image/)
    .expect(200, done);
});
test('testing beach image', (done) => {
  request(app)
    .get('/images/beach.jpg')
    .expect('Content-Type', /image/)
    .expect(200, done);
});
