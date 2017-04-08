myApp.controller('RegistrationController', 
  ['$scope', 'Authentication', 
  function($scope, Authentication) {

    $scope.storypoints = [];

  $scope.login = function() {
    Authentication.login($scope.user);
  };

  $scope.logout = function() {
    Authentication.logout();
  };

  $scope.register = function() {
    Authentication.register($scope.user);
  }; //register

  $scope.forgotPassword = function() {
    Authentication.forgotPassword($scope.user);
  };

  $scope.submitStory = function(data){
    //console.log(data);
    $scope.storypoints.push(data);
    //console.log(storypoints);
    $scope.user.data = '';
  };


}]); //Controller