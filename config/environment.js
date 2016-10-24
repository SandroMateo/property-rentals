/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'property-rentals',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

  firebase: {
    apiKey: "AIzaSyCR-7Hz1T_zb6H3dBXcDu_K1-tPmiYXO4k",
    authDomain: "property-rentals-6afb7.firebaseapp.com",
    databaseURL: "https://property-rentals-6afb7.firebaseio.com",
    storageBucket: "property-rentals-6afb7.appspot.com",
    messagingSenderId: "433794428108"
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
    ENV.baseURL = '/';
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
