import mongoose, { Schema } from 'mongoose';

import 'dotenv/config';

async function initializeTestingMongoServer() {
  const mongoUri = process.env.mongoDB;

  mongoose.connect(mongoUri);

  mongoose.connection.on('error', (e) => {
    if (e.message.code === 'ETIMEDOUT') {
      console.log(e);
      mongoose.connect(mongoUri);
    }
    console.log(e);
  });

  mongoose.connection.once('open', () => {
    console.log(`MongoDB successfully connected to ${mongoUri}`);
  });
}

export default initializeTestingMongoServer;
