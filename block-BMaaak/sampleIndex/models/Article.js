const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    title : {type : String},
    description :{type : String},
    tags : [String]
});

// 1. Add multikey indexes on tags which is an array of strings
// 2. Add text indexes on title as users will search for texts present in an article's title.
// 3. Update text indexes to include descriptions as well. Implement text indexes on both title and description.

articleSchema.index({tags : 1});
articleSchema.index({title : "text"});
articleSchema.find({$text : {$search : "hello"}});
articleSchema.index({title : "text"},{description : "text"});

module.exports = mongoose.model('Article', articleSchema);