//define a module named starter.services with a dependency on ngResource
angular.module('starter.services', ['ngResource'])

//define a service named Session that uses the Angular resource module to provide access to the REST services at the specified endpoint
//NOTE : In a real-life application, you would typically externalize the server parameters in a config module.
//Angular resource module is not added by default, add this in index.html

.factory('Session', function ($resource) {
    return $resource('http://localhost:5000/sessions/:sessionId');
});
