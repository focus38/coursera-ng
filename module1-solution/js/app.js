(function(){

"use strict";

angular.module("LunchCheck", [])
.controller("LunchCheckController", LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope){

  $scope.lunchItems = "";
  $scope.messageResult = "";
  $scope.messageClass = "";
  $scope.inputClass = "";

  $scope.checkLunchItems = function(){

    if($scope.lunchItems == null || $scope.lunchItems === ""){

      $scope.messageResult = "Please enter data first";
      $scope.messageClass = "alert";
      $scope.inputClass = "alert";
      return;
    }

    var items = $scope.lunchItems.split(",").filter(checkEmpty);
    if(items.length === 0){

      $scope.messageResult = "Please enter data first";
      $scope.messageClass = "alert";
      $scope.inputClass = "alert";
      return;
    }

    $scope.messageResult = "Too much!";
    $scope.messageClass = "success";
    $scope.inputClass = "success";

    if(items.length <= 3){
      $scope.messageResult = "Enjoy!";
    }
  }

  function checkEmpty(value) {

    if(value == null || value === ""){
      return false;
    }
    return true;
  }

}

})();
