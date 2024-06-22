import mongoose, { Schema } from 'mongoose';
import 'dotenv/config';
import * as fs from 'node:fs';
import Records from './models/records.js';
import Coordinates from './models/waldoCoordinates.js';
import Images from './models/images.js';
const uri = process.env.mongoDB;
main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(uri);
  console.log(`successful connect to ${uri}`);
}
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongo connection error'));
//todo: testing if the models are working fine inside database

// Coordinates.create({
//   map: 'the gold',
//   array: [350, 529],
//   xCoordinate: 350,
//   yCoordinate: 529,
// });
// Coordinates.create({
//   map: 'the beach',
//   array: [1161, 430],
//   xCoordinate: 1161,
//   yCoordinate: 430,
// });
// Coordinates.create({
//   map: 'the maze',
//   array: [758, 332],
//   xCoordinate: 758,
//   yCoordinate: 332,
// });
// Coordinates.create({
//   map: 'the space',
//   array: [758, 775],
//   xCoordinate: 758,
//   yCoordinate: 775,
// });
// Coordinates.create({
//   map: 'the blue',
//   array: [1313, 517],
//   xCoordinate: 1313,
//   yCoordinate: 517,
// });
// Coordinates.create({
//   map: 'the white',
//   array: [1594, 885],
//   xCoordinate: 1594,
//   yCoordinate: 885,
// });
// Records.create({ username: 'hello' });
// const record = await Records.findOne({ username: 'hello' });
// console.log(record);
// const imgPath =
//   '/home/heren/project/whereswaldo/whereswaldofrontend/src/assets/theGold.jpg';

// const image = new Images();
// image.url = imgPath;
// image.img.data = fs.readFileSync(imgPath);
// image.img.contentType = 'image/jpg';
// image.save();
