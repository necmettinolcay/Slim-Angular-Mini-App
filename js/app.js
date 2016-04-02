var myapp = angular.module('myapp', ['ui.router'])

myapp.config(function($stateProvider, $urlRouterProvider){
      
      // For any unmatched url, send to /route1
    $urlRouterProvider.otherwise("/public")
      
    $stateProvider
        .state('public', {
            url: "/public",
            templateUrl: "partials/public.html"
         })
        .state('login',{
            url: "/login",
            templateUrl: "partials/login.html",
            controller: 'loginCtrl'
        })
        .state('route1', {
            url: "/route1",
            templateUrl: "partials/route1.html",
            resolve: {
                smplObj: function() {
                    return {value: 'sipmle'};
                }
            },
            data:{
                customData1:  "Hello",
                customData2:  "World!"
            }
        })
        .state('route1.list', {
            url: "/list",
            templateUrl: "partials/route1.list.html",
            controller: 'route1Ctrl',
            data:{
                customData1:  "foo-bar",
            }   
        })
        .state('route2', {
            url: "/route2",
            templateUrl: "partials/route2.html"
        })
        .state('route2.list', {
            url: "/list",
            templateUrl: "partials/route2.list.html",
            controller: 'route2Ctrl'
        })
        .state('user', {
            url: "/user",
            templateUrl: "partials/user.html",
            controller: 'userCtrl',
            params: {email: null}
        })
    })
myapp.run(function($rootScope, $state){
    $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
        if (toState.url === '/route1' || toState.url == '/list') {
            var greeting = toState.data.customData1 + " " + toState.data.customData2;
            console.log(greeting);
        }
       // else if (toState.url === '/user') {
            
       // }
    })       
})
  
    
