// This file isn't transpiled, do must use CommonJHS and ES5

//Register babel to transpile before tests are run
require('babel-register')();

//Disable webpack features Mocha does not understand.
require.extensions['.css'] = function() {};
