'use strict';

const Alexa = require('alexa-sdk');

module.exports.handler = (event, context, callback) => {
  console.log("Alexa.main handler");

  var alexa = Alexa.handler(event, context);
  alexa.appId = undefined;

  console.log("Alexa.main: registerHandlers");

  alexa.registerHandlers(
    require('./handlers/defaultHandler'),
    require('./handlers/mainHandler')
  );
  
  console.log("Alexa.main: registerHandlers completed");
  alexa.execute();
  console.log("Alexa.main: registerHandlers executed");
};
