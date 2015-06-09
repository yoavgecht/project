app.factory('forecast', ['$http', function($http){
	return $http.get('http://api.openweathermap.org/data/2.5/forecast/daily?q=London&mode=json&units=metric&cnt=7')
	.success(function(data){
		console.log(data);
		return data;
	}).error(function(err){
		return err;
	})
}]);

