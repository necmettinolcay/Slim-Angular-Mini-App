myapp.controller('userCtrl',[ '$scope',
    '$stateParams',
    'AthService',
    function($scope, $stateParams, AthService) {
        //console.log($stateParams.email);
        AthService.User($stateParams.email, function (response) {
            $scope.user = response;
            console.log($scope.user);
        });
    }
]);

