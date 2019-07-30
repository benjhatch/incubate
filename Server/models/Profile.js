const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    bio: {
        type: String,
        default: ''
    },
    vipIndex: {
        type: Number,
        default: 0
    },
    following: {
        type: Array,
        default: [],
    },
    followers: {
        type: Array,
        default: [],
    },
    posts: {
        type: Array,
        default: []
    },
    recent: {
        type: Array,
        default: []
    },
    library: {
        type: Array,
        default: []
    }
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);