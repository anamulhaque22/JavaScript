const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    userName: { type: String },
    todoSubject: { type: String },
    todoDescription: { type: String },
    todoStatus: { type: String },
    todoCreateDate: { type: Date },
    todoUpdateDate: { type: Date }
}, { versionKey: false });

const todoModel = mongoose.model('Todo', todoSchema);

module.exports = todoModel;