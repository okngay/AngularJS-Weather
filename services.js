//SERVICE
weatherApp.service('cityService', function() {
    this.city = 'Ho Chi Minh';
});


weatherApp.service('weatherService', ['$resource', function($resource) {

    this.GetWeather = function(city, days) {
        var weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily?appid=d15916f168d63f0cd80a88159c7275df", {
            callback: "JSON_CALLBACK"
        }, { get: { method: "JSONP" } });

        return weatherResult = weatherAPI.get({ q: city, cnt: days });


    };
}]);
