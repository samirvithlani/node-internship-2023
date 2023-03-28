const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FileUploadSchema = new Schema({
    userName:{
        type: String,
    },
    name: {
        type: String,
        required: true
    },
    size:{
        type: Number,
    },
    url:{
        type: String,
    },
    type:{
        type: String,
    }
},{
    timestamps: true
})
module.exports = mongoose.model('FileUpload', FileUploadSchema);