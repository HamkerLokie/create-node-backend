import mongoose from 'mongoose'
import { MONGO_URI, DB_NAME } from '../config/index.js'

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(`${MONGO_URI}/${DB_NAME}`)
    console.log(
      `Mongo DB Connection !! DB Host : ${connectionInstance.connection.host}`
    )
  } catch (error) {
    console.log('MongoDb Connection Error', error)
    // eslint-disable-next-line no-undef
    process.exit(1)
  }
}

export { connectDB }
