const config = require('../config.js');

const mainHandler = {
    'LaunchRequest': function () {
        this.response.cardRenderer(config.HELP_MESSAGE);
        this.response.speak(config.HELP_MESSAGE);
        this.response.listen(config.HELP_REPROMPT);
        this.emit(':responseReady');
    },

    'GetPriceIntent': function(){
    	const coinname = this.event.request.intent.slots.coinname.value;
		
		const RESPONSE_TEXT = "You have asked for the prices of "+ coinname;

		this.response.cardRenderer(RESPONSE_TEXT);
		this.response.speak(RESPONSE_TEXT);
		this.emit(':responseReady');
    },

    'Unhandled': function () {;
		this.response.speak("Sorry I didnt understand that. Say help if you need any assistance.");
        this.response.listen(config.HELP_REPROMPT);
		this.emit(':responseReady');
    }
};

module.exports = mainHandler;