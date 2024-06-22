import { body, ExpressValidator, validationResult } from 'express-validator';
import asyncHandler from 'express-async-handler';

import Records from '../DataBase/models/records.js';
import Coordinates from '../DataBase/models/waldoCoordinates.js';
//*Get
export const indexGet = asyncHandler(async (req, res, next) => {
  res.json({ text: 'main page' });
});

//*post
export const startRecordPost = asyncHandler(async (req, res, next) => {
  // name it differently
  // when user load a gamePage
  // store it inside database with id hence we can take it out inside endTimeGet
  const record = await Records.create({
    startTime: new Date(),
    _id: req.params.id,
  });
  res.json({ text: 'successfully start timer', record });
});

export const RecordsGet = asyncHandler(async (req, res, next) => {
  // connect with database
  const records = await Records.find({}, { _id: 0 });

  res.json({ records });
});
export const CoordinatesGet = asyncHandler(async (req, res, next) => {
  // connect with database
  const coordinates = await Coordinates.find({}, { _id: 0 });

  res.json({ coordinates });
});

//*Delete
// if not username update -> delete the record on front end trigger
//*Update
export const endRecordUpdate = asyncHandler(async (req, res, next) => {
  // when user found waldo
  const record = await Records.findById(req.params.id);
  console.log(record);
  record.endTime = new Date();
  record.duration = record.endTime - record.startTime; // something like this
  await record.save();

  // store duration inside Record Post
  res.json({ text: 'successfully end timer', record });
});
export const RecordUsernameUpdate = [
  body('username')
    .isLength({ min: 3 })
    .withMessage('name can not be empty')
    .escape(),
];

asyncHandler(async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty) {
    console.log('error');
    res.json({ errors });
    return;
  }

  // how to get time and map?
  // get map by :id
  // get time by ?
  const record = await Records.findById(req.params.id);
  record.username = req.body.username;
  await record.save();
  res.json({ text: 'successful post', record });
});
