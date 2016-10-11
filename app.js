(function(){
'use strict';

angular.module("myFirstApp", [])
.controller("myFirstController", function($scope){

$scope.name = "Alex";
$scope.sayHello = function()
{
  return "Hello "+this.name;
}
});

})();
