import mongoose from "mongoose"

const DBConnect = async (): Promise<typeof mongoose> => {
  // check if we have a connection to the database or if it's currently
  // connecting or disconnecting (readyState 1, 2 and 3)
  if (mongoose.connection.readyState >= 1) {
    return
  }

  return mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  })
}

const getModel = (
  collectionName: string,
  schema: mongoose.Schema
  /* eslint-disable  @typescript-eslint/no-explicit-any */
): mongoose.Model<mongoose.Document<any>> => {
  try {
    return mongoose.model(collectionName)
  } catch (e) {
    return mongoose.model(collectionName, schema)
  }
}

export { DBConnect, getModel }
