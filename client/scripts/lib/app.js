// Libs
import { Meteor } from 'meteor/meteor';

import angular from 'angular';
import 'angular-meteor';
import 'angular-ui-router';


// App
myapp = angular.module('App', [
    'angular-meteor',
    'angular-meteor.auth',
    'ionic'
]);




// Startup
if (Meteor.isCordova) {
    angular.element(document).on('deviceready', onReady);
} else {
    angular.element(document).ready(onReady);
}

function onReady() {
    angular.bootstrap(document, ['App']);
}

