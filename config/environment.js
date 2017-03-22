/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'darkblog',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
    },

    firebase: {
      apiKey: "AIzaSyCv2iMpEm4_ydaHUAqSS0OgKuy2eai_WiQ",
      authDomain: "darkblog-6a736.firebaseapp.com",
      databaseURL: "https://darkblog-6a736.firebaseio.com",
      storageBucket: "darkblog-6a736.appspot.com",
      messagingSenderId: "67406242521"
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
