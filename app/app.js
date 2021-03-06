var app = angular.module('app', []);

app.controller('todoCtrl', ['$scope', function($scope){

    $scope.todos = [];
    
    $scope.add = function(){
        if($scope.newToDo){
        $scope.todos.push($scope.newToDo);
        $scope.newToDo = null;
        }
    };
    
    $scope.delete = function(i){
        $scope.todos.splice(i, 1);
    };
    
    $scope.edit = function(i){
        if($scope.todos[i].description){
        $scope.todos[i].done = false;
        delete $scope.todos[i].edit;
        }
    };
}]);