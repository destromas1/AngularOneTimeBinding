app.controller('profileCtrl' , ['$scope' , function($scope){
	console.log('profileCtrl is running...');

	$scope.profiles = [
					{ Id: 1, Name: 'Masoom', Address: 'Dhaka1' },
					{ Id : 2 , Name : 'Talukdar' , Address : 'Dhaka2' },
					{ Id: 3, Name: 'Shahjada', Address: 'Dhaka3' }
	];


	$scope.addProfiles = function () {
	    var id = $scope.profiles.length + 1;
	    $scope.profiles.push({ Id: id, Name: 'AAAA' + id, Address: 'Dhaka' + id });
    };


	$scope.getWatchers = function () {
	    var watchers = ($scope.$$watchers) ? $scope.$$watchers.length : 0;
        var child = $scope.$$childHead;
        while (child) {
            watchers += (child.$$watchers) ? child.$$watchers.length : 0;
            child = child.$$nextSibling;
        }
        $scope.totalWatchers = watchers;
    };

}]);