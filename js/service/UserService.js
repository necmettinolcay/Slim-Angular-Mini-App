myapp.factory('UserService', [ '$http',
    function($http) {
        var service = {};

        service.GetAll = GetAll;
        //service.GetById = GetById;
        service.GetByUsername = GetByUsername;
        //service.Create = Create;
        //service.Update = Update;
        //service.Delete = Delete;

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
