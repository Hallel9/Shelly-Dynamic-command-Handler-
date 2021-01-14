const mongoose = require('mongoose')
const mongoPath = process.env.MONGO

module.exports = async () => {
  await mongoose.connect(mongoPath, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).catch(err => {
    console.log('error occured while connecting to mongodb')

    
    })

  return mongoose
}