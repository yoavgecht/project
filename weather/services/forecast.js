app.factory('forecast', ['$http', function($http){
	return $http.get('http://api.openweathermap.org/data/2.5/forecast/daily?lat=32.08&lon=34.78&mode=json&units=metric&cnt=7&callback=')
	.success(function(data){
		console.log(data);
		return data;
	}).error(function(err){
		return err;
	})
}]);

