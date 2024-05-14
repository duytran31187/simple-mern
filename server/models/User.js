const mongoose = require('mongoose')
const { schema } = require('./Task')
// https://mongoosejs.com/docs/guide.html
// we just need define a schema, model here
// we dont need to manual create table on mongo

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: false,
        },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        age: {
            type: Number,
            required: false
        },
    },
    {
        methods: {
            findUsersSameAge(cb) {
                return mongoose.model('User').find({ age: this.age }, cb);
            }
        },
        statics: {
            findByEmail(email) {
                return mongoose.model('User').find({ email: email });
            }
        }
    }
);
UserSchema.statics.findByPassword = function(password) {
    return mongoose.model('User').find({ password: password });
}

UserSchema.query.byEmail = function(email) {
    return this.where({email: email})
}
const UserModel = mongoose.model('User', UserSchema);
module.exports = {
    UserModel,
    UserSchema
};