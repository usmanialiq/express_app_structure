const mongoose = require('mongoose');
let colors = require('colors');

// mLab Connection
mongoose.connect(`mongodb://${process.env.USER}:${process.env.PASS}@ds133632.mlab.com:33632/locale`, { useNewUrlParser: true }, (err) => {
    if(err) {
        console.log(err);
    }
    else {
        console.log('Connection with mLab established!'.rainbow)
    }
});


module.exports = mongoose;