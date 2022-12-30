const mongoose= require('mongoose');

try {
    mongoose.connect('mongodb+srv://amarjeet:123456789abc@cluster0.undy9fl.mongodb.net/e-commerce?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true}, () =>
    console.log("connected"));    
    }catch (error) { 
    console.log("could not connect");    
    }




// mongoose.connect("mongodb://localhost:27017/e-commerce")