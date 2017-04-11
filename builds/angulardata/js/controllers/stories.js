myApp.controller('StoriesController', ['$rootScope','$scope',
	'$firebaseAuth','$firebaseArray', '$routeParams' , '$firebaseObject',
	function($rootScope,$scope,$firebaseAuth,$firebaseArray,$routeParams,$firebaseObject) {

 	$scope.storypoints = [];


 	$scope.whichStory = $routeParams.uId;

 	ref = firebase.database().ref()
    .child('users').child('stories').child($scope.whichStory);

    var storyNameRef = $firebaseObject(ref);
    var storyName = '';

    storyNameRef.$loaded().then(function(data) {
        console.log(data.name);
        $scope.storyName = data.name;
        // DO WHATEVER
    }).catch(function(error) {
        console.error("Error:", error);
    });

    //console.log(storyName);

	$scope.submitStory = function(data){
    console.log(data);
    $scope.storypoints.push(data);
    //console.log(storypoints);
    $scope.user.data = '';
 	 };



	}]);