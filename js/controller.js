angular.module('RouteControllers', [])
    .controller('HomeController', function($scope) {
        $scope.title = "Welcome To Waller Reviews!"
    })
    .controller('RegisterController', function($scope, $location, UserAPIService, store) {
        $scope.registrationUser = {}; 
        var URL = "https://morning-castle-91468.herokuapp.com/";

        $scope.login = function() {
            UserAPIService.callAPI(URL + "accounts/api-token-auth/", $scope.data).then(function(results) {
                $scope.token = results.data.token;
                store.set('username', $scope.registrationUser.username);
                store.set('authToken', $scope.token);
                $location.path("/review");
            }).catch(function(err) {
                console.log(err);
            })
        }

        $scope.submitForm = function() {
            if ($scope.registrationForm.$valid) {
                $scope.registrationUser.username = $scope.user.username;
                $scope.registrationUser.password = $scope.user.password;

                UserAPIService.callAPI(URL + "accounts/register/", $scope.registrationUser).then(function(results) {
                    $scope.data = results.data;
                    $scope.login();

                }).catch(function(err) {
                    console.log(err);
                    alert("Registration failed, username has already been taken.");

                });
            }
        }
    })

    .controller('LoginController', function($scope, $location, UserAPIService, store) {
        var URL = "https://morning-castle-91468.herokuapp.com/";
        $scope.loginUser = {};

        $scope.submitForm = function() {
            if ($scope.loginForm.$valid) {
                $scope.loginUser.username = $scope.user.username;
                $scope.loginUser.password = $scope.user.password;

                UserAPIService.callAPI(URL + "accounts/api-token-auth/", $scope.loginUser).then(function(results) {
                    $scope.token = results.data.token;
                    store.set('username', $scope.loginUser.username);
                    store.set('authToken', $scope.token);
                    console.log($scope.token);
                    $location.path("/review");
                }).catch(function(err) {
                    console.log(err)
                    alert("Login failed, the username or password you entered is incorrect.");
                });
          }
        }
    })

    .controller('LogoutController', function(store) {
        store.remove('username');
        store.remove('authToken');
    })


     .controller('ReviewController', function($scope, $location, store) {
        
        $scope.authToken = store.get('authToken');
        $scope.username = store.get('username');


        if (!store.get('authToken')) {
            $location.path("/pleaseregister");
        }
        
    })

     .controller('AboutController', function($scope){
        $scope.submitForm = function() {
            if ($scope.contactForm.$valid) {
                alert('Thank you for your query '+ $scope.contact.name + ', We will get back to you asap');
            }
            else {
                alert('Please complete the form correctly')
            }
        }
     });
    
