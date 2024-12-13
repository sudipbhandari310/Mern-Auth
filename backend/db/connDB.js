import mongoose from 'mongoose';
// import dotenv from 'dotenv';
const uri = "mongodb+srv://sudipbhandari310:test123@cluster0.fxv6h.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
export const connDB = async () => {
  try {
    const conn = await mongoose.connect(uri);
    console.log('DB connected');
  } catch (error) {
    console.log('Error:', error.message);
    process.exit(1);
  }
};
