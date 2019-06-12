import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const users = new Schema({
    name: {
        type: String,
        required: 'name is requerid',
    },
    email:{
        type: String,
        required: 'email is requerid',
    },
    password:{
        type: String,
        required: 'senha is requerid',  
    }
   
});

export default mongoose.model('users', users)
