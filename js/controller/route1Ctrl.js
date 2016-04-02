myapp.controller('route1Ctrl',[ '$scope', '$rootScope', 'smplObj',
    function($scope, $rootScope, smplObj) {
        $scope.items = ["A", "List", "Of", "Items"];
        $scope.simple = smplObj.value;
        console.log($scope.simple); 
    }
]);


