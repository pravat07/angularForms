angularFormsApp.controller('efController', ["$scope", "efService", function efContoller($scope, efService) {
    $scope.employee = efService.employee;


}])