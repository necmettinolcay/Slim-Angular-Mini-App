myapp.factory('AthService', [ '$http',
    '$rootScope',
    '$timeout',
    'UserService',
    function($http, $rootScope, $timeout, UserService) {
        var service = {};

        service.Login = Login;
        service.User = User;

        return service;

        function Login(username, password, callback) {
           $timeout(function () {
                var response;
                UserService.GetByUsername(username)
                    .then(function(user) {
                        if (user !== null && user.password === password) {
                            response = { success: true, email: username };
                        } else {
                            response = { success: false, message: 'Username or password is incorrect' };
                        }
                        callback(response);
                    });
           }, 1000);      
        }

        function User(username, callback) {
            $timeout(function(){
                var response;
                UserService.GetByUsername(username)
                    .then(function(user) {
                        response = user;
                        callback(response)
                    })
            
            }, 1000);
        }
    }
])
