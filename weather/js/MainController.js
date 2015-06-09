app.controller('MainController', ['$scope', 'forecast', function($scope, forecast){
	forecast.success(function(data){
		$scope.sevenDays = data.list;
		$scope.weather = data.list.weather
		$scope.cityName = data.city.name;
		$scope.countryName = data.city.country;
	})
}])