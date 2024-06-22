import mongoose, { Schema } from 'mongoose';
const CoordinateSchema = new Schema({
  map: String,
  array: Array,
  xCoordinate: Number,
  yCoordinate: Number,
});

const Coordinates = mongoose.model('waldoCoordinates', CoordinateSchema);

export default Coordinates;
