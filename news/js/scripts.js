//https://newsapi.org/

var app = angular.module('newsFeed', []);

app.controller('NewsFeedController', function($scope, $http) {
    $http({
        method: 'GET',
        url: 'https://newsapi.org/v1/articles?source=abc-news-au&sortBy=top&apiKey=9fe55db7f0b347ce9635368a52e298c0'
    }).then(function successCallback(response) {
        // this callback will be called asynchronously
        // when the response is available
        displayNews(response);

    }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        console.log('error'+response);
    });

    function displayNews(response) {
        $scope.articles = response.data.articles;
    }

});