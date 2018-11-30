const mongoose = require('mongoose');
 
const TextSchema = mongoose.Schema({
    type: String,
    data: Buffer
});
 
module.exports = mongoose.model('Text', TextSchema);