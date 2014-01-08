angular.module("User", ["ngResource"])

function UserController($scope, $resource) {
  User = $resource("/users.json")
    $scope.users = User.query();
    
  $scope.addUser = function() {
    entry = User.save({name:$scope.newUser.name})
    $scope.users.push(entry);
    $scope.newUser.name = ';'
  };
}