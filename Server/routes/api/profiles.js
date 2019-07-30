const express = require('express');
const router  = express.Router();

//Profile Model
const Profile = require('../../models/Profile');

// @route   GET /api/profiles
// @desc    Get All Profiles
// @access  Public
router.get('/', (req, res) => {
    Profile.find()
        .sort({ vipIndex: 1 })
        .then(profiles => res.json(profiles));
});

// @route   POST /api/profiles
// @desc    Create Profile
// @access  Public
router.post('/', (req, res) => {
    const newProfile = new Profile(req.body);
    newProfile.save().then(profile => res.json(profile));
});

module.exports = router;