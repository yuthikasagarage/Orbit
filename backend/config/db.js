import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewParser: true,
      useCreateIndex: true,
    });

    console.log(`Mongo Connected: ${connect.connection.host}`.cyan.underline);
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
};

export default connectDB;
