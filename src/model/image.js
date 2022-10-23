const mongoose = require('mongoose');
const imageSchema = mongoose.Schema({
    title: {
        type: String,
        default: ""
    },
    image: {
        type: String,
        default: ""
    },
},
    { timestamps: true }
)

module.exports = mongoose.model('images', imageSchema);