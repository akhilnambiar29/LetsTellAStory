myApp.controller('MeetingsController', ['$rootScope','$scope','$firebaseAuth','$firebaseArray', 
	function($rootScope,$scope,$firebaseAuth,$firebaseArray) {
  //$scope.message = "Success!!!";

  var ref = firebase.database().ref(); //this firebase variable is referred to in the index.html
  var auth = $firebaseAuth();

  auth.$onAuthStateChanged(function(authUser) {
    if(authUser) {
      var storyRef = ref.child('stories');
      var storyInfo = $firebaseArray(storyRef); //Get value as array or object.
    //  var userObj = $firebaseObject(userRef);
     // $rootScope.currentUser = userObj;

     $scope.stories = storyInfo;

     storyInfo.$loaded().then(function(data){

     	$rootScope.howManyMeetings = storyInfo.length;
     });

     storyInfo.$watch(function(data){

     	$rootScope.howManyMeetings = storyInfo.length;
     });

     $scope.addStory = function(){
      //console.log("Here");
     	storyInfo.$add({
     		name: $scope.storytitle ,
     		date: firebase.database.ServerValue.TIMESTAMP,
        userCreated : authUser.uid
     	}).then(function(){
     		$scope.storytitle='';
     	});
     };

     $scope.deleteMeeting = function(key){
     	storyInfo.$remove(key);
     };
    }
  });

}]);