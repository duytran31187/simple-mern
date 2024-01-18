const mongoose = require('mongoose')
// https://mongoosejs.com/docs/guide.html


const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'must provide name'],
        trim: true,
        maxlength: [20, 'name can not be more than 20 characters'],
    },
    completed: {
        type: Boolean,
        default: false,
    },
});
module.exports = mongoose.model('Task', taskSchema);