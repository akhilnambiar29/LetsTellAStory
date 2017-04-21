myApp.controller('StoriesController', ['$rootScope','$scope',
	'$firebaseAuth','$firebaseArray', '$routeParams' , '$firebaseObject', '$anchorScroll','$location',
	function($rootScope,$scope,$firebaseAuth,$firebaseArray,$routeParams,$firebaseObject,$anchorScroll,$location) {

 	$scope.storypoints = [];

 	$scope.whichStory = $routeParams.uId;

 	$scope.glued = true;

 	ref = firebase.database().ref().child('story_content').child($scope.whichStory);
 	var storyMessage = $firebaseArray(ref);

 	$scope.value = 0;

 	$scope.initialise = function(){
 		console.log(storyMessage);
 		$scope.storypoints = storyMessage;
 	};

 	$scope.checkLoaded = function(){
 		if($scope.value ==1){
 			return true;
 		}
 	};

 	

 	

 	ref2 = firebase.database().ref().child("stories").child($scope.whichStory);
    var storyNameRef = $firebaseObject(ref2);
    var storyName = '';

    storyNameRef.$loaded().then(function(data) {
        //console.log(data.name);
        $scope.storyName = data.name;
        // DO WHATEVER
    }).catch(function(error) {
        console.error("Error:", error);
    });

    /*ref2 = firebase.database().ref()
    .child('users').child('stories').child($scope.whichStory).child('story'); // adding values to firebase*/


    /*var storypoints = $firebaseArray(ref2);
    console.log(storypoints);*/

    //console.log(storyName);

	$scope.submitStory = function(data,firstname){
			$scope.user.data = '';
			$location.hash('data');
			$anchorScroll();
		storyMessage.$add({
			content: data , 
     		sentBy: firstname ,
     		date: firebase.database.ServerValue.TIMESTAMP,
     	}).then(function(){
     		$scope.user.data = '';
     	});
	//	console.log(readvalues);
   // console.log(data);
    /*storypoints.child(1).set(
     		data
     		).then(function(){
     		$scope.user.data = '';
     	});//console.log(storypoints);*/
    
 	 };



	}]);