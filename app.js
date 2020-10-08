(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

function LunchCheckController($scope,$injector) {
    $scope.name = "";
    var listName = $scope.name.split(',');
    $scope.message = "";

    $scope.displayMessage = function () {
        var count = 0;
        count = listName.length;
        if(count == 0){
            $scope.message =  "Empty!";
        } else if(count <= 3 && count > 0){
            $scope.message =  "Enjoy!";
        } else if(count > 3){
            $scope.message =  "Too much!";
        }
    };
    console.log($injector.annotate(LunchCheckController));
};

})();
