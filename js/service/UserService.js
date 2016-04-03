myapp.factory('UserService', [ '$http',
    function($http) {
        var service = {};
        service.GetAll = GetAll
        service.GetByUsername = GetByUsername;
        return service;

        function GetAll() {
            return $http.get('api/users').then(handleSuccess, handleError('Error getting all user'))
        }

        function GetByUsername(username) {
            return $http.get('api/users/' + username).then(handleSuccess, handleError('Error getting user by username'))
        }

        function handleSuccess(res) {
            return res.data;
        }

        function handleError(error) {
            return function(){
                return {success: false, message: error};
            }
        }
    }   
])
