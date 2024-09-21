const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://akshadsantoshjaiswal:rFw7NSxncTpSc7Bq@cluster0.yulixmn.mongodb.net/todo-app?")

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean,
})

const todo = mongoose.model('todos', todoSchema)
module.exports = {
    todo: todo
}