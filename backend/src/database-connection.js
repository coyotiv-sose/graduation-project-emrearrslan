const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_CONNECTION_STRING).then(() => console.log('connected to mongoDB'))

// const Cat = mongoose.model('Cat', { name: String })

// const kitty = new Cat({ name: 'napolyon' })
// kitty.save().then(() => console.log('warwick'))
