const mongoose = require('mogoose')

const DevSchema = new mongoose.Schema({
    name: String,
    github_username: String,
        bio: String,
        avatar_url: String,
        techs: [String],
});

module.exports = mongoose.module('Dev',DevSchema);