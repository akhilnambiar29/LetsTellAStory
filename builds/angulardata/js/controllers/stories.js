myApp.controller('StoriesController', ['$rootScope','$scope',
	'$firebaseAuth','$firebaseArray', '$routeParams' , '$firebaseObject',
	function($rootScope,$scope,$firebaseAuth,$firebaseArray,$routeParams,$firebaseObject) {

 	$scope.storypoints = [];

 	$scope.whichStory = $routeParams.uId;

 	ref = firebase.database().ref().child('story_content').child($scope.whichStory);
 	var storyMessage = $firebaseArray(ref);

 	$scope.initialise = function(){
 		console.log(storyMessage);
 		$scope.storypoints = storyMessage;
 	};

 	

 	

 	
    /*var storyNameRef = $firebaseObject(ref);
    var storyName = '';

    storyNameRef.$loaded().then(function(data) {
        //console.log(data.name);
        $scope.storyName = data.name;
        // DO WHATEVER
    }).catch(function(error) {
        console.error("Error:", error);
    });*/

    /*ref2 = firebase.database().ref()
    .child('users').child('stories').child($scope.whichStory).child('story'); // adding values to firebase*/


    /*var storypoints = $firebaseArray(ref2);
    console.log(storypoints);*/

    //console.log(storyName);

	$scope.submitStory = function(data,firstname){
			$scope.user.data = '';
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