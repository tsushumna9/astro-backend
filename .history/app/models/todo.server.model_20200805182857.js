var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var ToDoSchema = new Schema({
    title: {
        type: String,
        trim: true,
        default: '',
    },
    description: {
        type: String,
        trim: true,
        default: '',
    }
});
UserSchema.set('versionKey', 'userVersionKey');
mongoose.model('User', UserSchema);