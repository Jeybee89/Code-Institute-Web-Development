angular.module('collegeControllers',[]).controller('StudentController',function($scope) {
//  create stubent object
  $scope.results=true;
  var student = {
        firstName: "Rich",
        lastName: "Richie",
        fees: 500,
        subjects: [{
            name: 'Physics',
            marks: 70
        }, {
            name: 'Chemistry',
            marks: 80
        }, {
            name: 'Math',
            marks: 65
        }, {
            name: 'English',
            marks: 75
        }, {
            name: 'Hindi',
            marks: 67
        }],

        fullName: function () {
            var studentObject;
            studentObject = student;
            return studentObject.firstName + " " + studentObject.lastName;
        }
    };
    //create greeting
  $scope.student = student;
  $scope.greeting = function(){
    return "Greetings " + $scope.student.fullName();
  };


  

//for the toggle effect on buttons 
$scope.showResults = function(){
    return ($scope.results ? $scope.results=false : $scope.results=true)
  }


});


  