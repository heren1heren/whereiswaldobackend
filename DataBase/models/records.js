import mongoose, { Schema } from 'mongoose';
const RecordSchema = new Schema({
  username: String,
  map: String,
  startTime: Date,
  endTime: Date,
  duration: Number, //string or number depends on which purpose I am gonna use this with
});

const Records = mongoose.model('Records', RecordSchema);

export default Records;
//mock database to test if the database is working or not
