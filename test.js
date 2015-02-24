'use strict';

function debug(str) {
  dump(' -*- ServiceWorkers -*-: ' + str + '\n');
}

// Register action
navigator.serviceWorker.register('service-worker.js', {scope: 'something'}).then(function(registration) {
  debug('Service-worker register success');

  navigator.serviceWorker.getRegistration('somethingelse').then(function(registration) {
    debug(registration);
    debug('Scope: ' + registration.scope);
    var sw = registration.installing || registration.waiting || registration.active;
    if (sw) {
      debug('Script URL: ' + sw.scriptURL);
    }
  });
}).catch(function(error) {
  debug('Error during registration: ' + error);
});
