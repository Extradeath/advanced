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
    
    serperiorette: 'serperiorette',
    serperiorette: function(target, room, user) {
        if (!this.canBroadcast()) return;
        this.sendReplyBox('<center><img src="http://puu.sh/hVfrz/cf838762ec.png" width="378" height="430"><br><font size="3" color="black"><b>Ace(s):</b> <font color="cyan">Suicune</font> and <font color="green">Serperior</font></font><br>"You'll be the water that helps me grow stronger."  
')
    },

    /*********************************************************
     * TC'S STOP HERE!
     *********************************************************/
};
/* jshint ignore:end */
