// jscs:disable
/* jshint ignore:start */
exports.commands = {
    /*********************************************************
     * TC'S HERE!
     *********************************************************/
     
    fender: 'fender',
    fender: function(target, room, user) {
        if (!this.canBroadcast()) return false;
        return this.sendReplyBox('Fender');
    },

    /*********************************************************
     * TC'S STOP HERE!
     *********************************************************/
};
/* jshint ignore:end */
