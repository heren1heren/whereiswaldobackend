import mongoose, { Schema } from 'mongoose';
const ImgSchema = new Schema({
  img: { data: Buffer, contentType: String },
  url: String,
});

const Images = mongoose.model('Images', ImgSchema);
// store an img in binary in mongo

export default Images;
//mock database to test if the database is working or not
