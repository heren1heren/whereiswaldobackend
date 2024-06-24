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
  const record = await Records.create({
    startTime: new Date().getTime(),
    map: req.body.map,
    id: req.body.id,
  });

  res.json({ text: 'successfully start timer', record });
});

export const RecordsGet = asyncHandler(async (req, res, next) => {
  const records = await Records.find({ username: { $exists: 1 } }, { _id: 0 })
    .sort({ duration: 1 })
    .exec();
  res.json({ records });
});
export const CoordinatesGet = asyncHandler(async (req, res, next) => {
  const coordinates = await Coordinates.find({}, { _id: 0 }).exec();
  res.json({ coordinates });
});

//*Delete
export const deleteIncompleteRecords = asyncHandler(async (req, res, next) => {
  await Records.deleteMany({ username: { $exists: false } });
  await Records.deleteMany({ username: '' });
  const records = await Records.find({});
  console.log(records);
  res.json({
    text: 'successfully delete  incomplete records',
    records,
  });
});

//*Update
export const endRecordUpdate = asyncHandler(async (req, res, next) => {
  const record = await Records.findOne({ id: req.body.id });

  record.endTime = new Date().getTime();
  record.duration = +Math.round((record.endTime - record.startTime) / 1000);

  await record.save();

  res.json({ text: 'successfully end timer', record });
});
export const usernameRecordUpdate = [
  body('username')
    .isLength({ min: 3 })
    .withMessage('name can not be empty')
    .escape(),

  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty) {
      console.log('error');
      res.json({ errors });
      return;
    }

    const record = await Records.findOne({ id: req.body.id });
    record.username = req.body.username;
    console.log(record);
    await record.save();
    res.json({ text: 'successful post', record });
  }),
];
