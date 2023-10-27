const express = require('express');
const passport = require('passport');
const router = express.Router();
const GoogleStrategy = require('passport-google-oauth2').Strategy;
require('dotenv/config');
const User = require('../models/User');

const passportConfig = {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: 'http://localhost:3000/auth/google/callback',
    passReqToCallback: true,
};

passport.use(
    new GoogleStrategy(passportConfig, function (request, accessToken, refreshToken, profile, done) {

        done(null, profile)

    }
    )

);

passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (user, done) {
    done(null, user);
});

module.exports = router;
