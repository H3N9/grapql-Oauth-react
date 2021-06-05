import mongoose from 'mongoose'

mongoose.Promise = Promise
mongoose.connect(
  'mongodb://localhost:27017',
  {
    dbName: 'graphql-Oauth-React',
    promiseLibrary: Promise,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  },
)
