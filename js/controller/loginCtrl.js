myapp.controller('loginCtrl', ['$scope',
    '$state',
    'AthService',
    'UserService',
    function($scope, $state, AthService, UserService) {
        
        this.user = {
            email:'',
            password: ''
        };
        $scope.email = this.user.email;
        this.login = function(){
            AthService.Login(this.user.email, this.user.password, function (response) {
                if (response.success) {
                    $state.go('user', {email: response.email});
                } 
                else {
                    alert(response.message)
                }
            });
        }
    }
])
