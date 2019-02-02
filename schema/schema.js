var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var blogSchema = new Schema({
    title:  { 
        type: String,
        required: [true, 'Why no title!']
    },
    author: { 
        type: String,
        required: [true, 'Wait! What who\'s the author?']
    },
    body:   { 
        type: String,
        required: true,
        min: [50, 'Too few words']
    },
    comments: [{ body: String, date: Date }],
    date: { type: Date, default: Date.now },
    hidden: Boolean,
    meta: {
        votes: Number,
        favs:  Number
    }
});


module.exports = mongoose.model('Blog', blogSchema);
