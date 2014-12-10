/**
 * Created by wharris on 12/10/2014.
 */
angular.module("DemoModule", ["ngRoute"]);

angular.module("DemoModule").config(function($routeProvider){
    $routeProvider.when("/", {
        templateUrl: "./views/_home.html"
    });

    $routeProvider.when("/collars", {
        templateUrl: "./views/_collars.html"
    });

    $routeProvider.otherwise({
        redirectTo: "/"
    });
});

angular.module("DemoModule").controller("HomeController", function($location){
    this.navigateToCollars = function(){
        console.log("clicked it");
        $location.path("/collars");
    }
});

angular.module("DemoModule").controller("CollarsController", function(){
   this.collars = [
       {
           name: "Basic Collar",
           material: "Nylon",
           price: "$5.00",
           description: "A comfortable collar for any dog!"
       },
       {
           name: "Mid-Grade Collar",
           material: "Silk",
           price: "$10.00",
           description: "A great collar for owners who want to give their dog that little extra bit of comfort and style!"
       },
       {
           name: "Premium Collar",
           material: "Some Space-Age Awesomeness",
           price: "$15.00",
           description: "The best of the best, beats any other collar guaranteed!"
       }
   ]
});