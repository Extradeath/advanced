var Q = require('q');
var mongoose = require('mongoose');
var fs = require('fs')
var secret = fs.readFileSync('../config/secret.txt');

/**
 * Connect to MongoDB Database.
 *
 * @param {String} db
 */

 exports.connect = function(db) {
    if (!db) db = secret;
     var url = process.env.MONGODB || db;
     mongoose.connect(url);
     mongoose.connection.on('error', function() {
        console.error('MongoDB Connection Error. Make sure MongoDB is running.');
    });
};

var userSchema = new mongoose.Schema({
    name: { type: String, lowercase: true, unique: true },
    money: { type: Number, default: 0 },
    symbol: String,
    seen: Date,
    cards: Array
});

var User = exports.userModel = mongoose.model('user', userSchema);

exports.User = {
    /**
     * Promise wrapper for User.findOne.
     * 
     * @param {Object} query
     * @return {Promise}
     */
    findOne: function(query) {
        var deferred = Q.defer();
        User.findOne(query, function(err, result) {
            if (err) return deferred.reject(new Error(err));
            deferred.resolve(result);
        });
        return deferred.promise;
    },
    /**
     * Promise wrapper for User.find.
     * 
     * @param {Object} query
     * @return {Promise}
     */
    find: function(query) {
        var deferred = Q.defer();
        User.find(query, function(err, result) {
            if (err) return deferred.reject(new Error(err));
            deferred.resolve(result);
        });
        return deferred.promise;
    }
};
