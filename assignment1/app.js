(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);
LunchCheckController.$inject=['$scope'];
function LunchCheckController($scope) {
    $scope.name = "";
    $scope.message = "";

    $scope.displayMessage = function () {
        var count = noItem();
        if(count === 0){
            $scope.message =  "Please enter data first";
        } else if(count <= 3 && count > 0){
            $scope.message =  "Enjoy!";
        } else if(count > 3){
            $scope.message =  "Too much!";
        }
    };
    function noItem(){
    var itemarray = $scope.name.split(",");
    var no_of_item =  itemarray.length;
    for(var i=0;i<itemarray.length;i++){
        if(itemarray[i]==="")
            no_of_item--;
    }
    return no_of_item;
}
};

})();
