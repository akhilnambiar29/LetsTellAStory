myApp.controller('StoriesController', ['$rootScope','$scope','$firebaseAuth','$firebaseArray', '$routeParams' ,
	function($rootScope,$scope,$firebaseAuth,$firebaseArray,$routeParams) {

 	$scope.storypoints = [];


 	$scope.whichStory = $routeParams.uId;

	$scope.submitStory = function(data){
    console.log(data);
    $scope.storypoints.push(data);
    //console.log(storypoints);
    $scope.user.data = '';
 	 };



	}]);