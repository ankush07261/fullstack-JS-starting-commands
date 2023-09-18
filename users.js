const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
    street: String,
    city: String
})
const userSchema = new mongoose.Schema({
    name: {                                      //mongoose data validation.
        type: String,
        required: [true,"name needed"]
    },
    age: {               
        type: Number,
        min: 0,
        max: 100,
        // validate: {          to check if age is even
        //     validator: v => v % 2 ===0
        // }
    },
    email: {
        //minLength: 8
        type: String,
    },
    createdAt: {
        type: Date,
        immutable: true,
        default: ()=>Date.now(),
    },
    updatedAt: {
        type: Date,
        default: ()=>Date.now(),
    },
    bestFriend: mongoose.SchemaTypes.ObjectId,
    hobbies: [String],
    address: addressSchema
});

userSchema.methods.sayHI = function () {
    console.log(`hello my name is $(this.name)`);
}

userSchema.statics.findByName = function (name) {
    return this.where({name: new RegExp(name, 'i')}) // i -> case insensitive
}

//MIDDLEWARES
userSchema.pre('save', function (next) {
    this.updatedAt = Date.now()
    next()
    //throw new Error('Could not save')
})

userSchema.post('save', function (doc,next) {
    doc.sayHI()
    next()
})

module.exports = mongoose.model("User", userSchema)