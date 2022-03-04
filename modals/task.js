const mongoose = require('mongoose');
// const { boolean } = require('webidl-conversions');

const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Must Provide A Name'],
        trim: true,
        maxlength: [21, 'Not More Than 21 Character'],
    },
    completed: {
        type: Boolean,
        default: false,
    },
})


module.exports = mongoose.model('Task', taskSchema)