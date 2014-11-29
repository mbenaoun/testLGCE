/* global angular */
angular.module('app')
    .controller('indexCtrl', [
        '$scope',
        'UserFactory',
        function ($scope, UserFactory) {
            'use strict ';
            $scope.users = UserFactory.getUsers();
			   
        }
    ])
    .controller('viewCtrl', [
        '$scope',
        '$stateParams',
        'UserFactory',
        function ($scope, $stateParams, UserFactory) {
            'use strict ';
			$leUser = UserFactory.getUser($stateParams.id);
			$scope.description = $leUser.description;
			$scope.photo = $leUser.photo;
			$scope.id = $leUser.id;
			$scope.prenom = $leUser.firstname;
			$scope.nom = $leUser.lastname;
			$scope.twitter = $leUser.twitter;
    }]);