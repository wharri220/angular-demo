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

    $routeProvider.when("/treats", {
       templateUrl: "./views/_treats.html"
    });

    $routeProvider.when("/houses", {
       templateUrl: "./views/_houses.html"
    });

    $routeProvider.when("/beds", {
       templateUrl: "./views/_beds.html"
    });

    $routeProvider.when("/cart", {
        templateUrl: "./views/_cart.html"
    });

    $routeProvider.otherwise({
        redirectTo: "/"
    });
});

angular.module("DemoModule").controller("HomeController", function($location){
    this.navigateToCollars = function(){
        $location.path("/collars");
    };

    this.navigateToTreats = function(){
        $location.path("/treats");
    };

    this.navigateToHouses = function(){
        $location.path("/houses");
    };

    this.navigateToBeds = function(){
        $location.path("/beds");
    };

    this.navigateToCart = function(){
        $location.path("/cart");
    }
});

angular.module("DemoModule").controller("CollarsController", function(CartService){

   this.collars = [
       {
           name: "Basic Collar",
           material: "Nylon",
           price: 5,
           description: "A comfortable collar for any dog!"
       },
       {
           name: "Mid-Grade Collar",
           material: "Silk",
           price: 10,
           description: "A great collar for owners who want to give their dog that little extra bit of comfort and style!"
       },
       {
           name: "Premium Collar",
           material: "Some Space-Age Awesomeness",
           price: 15,
           description: "The best of the best, beats any other collar guaranteed!"
       }
   ];

   this.addToCart = function(item){
       CartService.cart.addItem(item);
       alert("Added item");
   }
});

angular.module("DemoModule").controller("TreatsController", function(CartService){
    this.treats = [
        {
            name: "Bacon Treats",
            Material: "Bacon",
            price: 5,
            description: "The classic that all dogs will gobble up"
        },
        {
            name: "Steak and Cheddar Treats",
            Material: "Steak and cheddar",
            price: 10,
            description: "A higher end treat for the dogs with a taste for greatness"
        },
        {
            name: "Health Treat Grab Bag",
            Material: "All things healthy",
            price: 15,
            description: "The best of the best, treats that your dog will love and that will prolong those doggy years!"
        }
    ];

    this.addToCart = function(item){
        CartService.cart.addItem(item);
        alert("Added item");
    }
});

angular.module("DemoModule").controller("HousesController", function(CartService){
   this.houses = [
       {
           name: "Dogloo",
           material: "Plastic and love",
           price: 150,
           description: "The simple classic dog house that will keep your pet safe from the elements"
       }
   ];

    this.addToCart = function(item){
        CartService.cart.addItem(item);
        alert("Added item");
    }
});

angular.module("DemoModule").controller("BedsController", function(CartService){
   this.beds = [
       {
           name: "Basic Bed",
           material: "Plush",
           price: 20,
           description: "Basic bed for warmth and comfort"
       }
   ];

    this.addToCart = function(item){
        CartService.cart.addItem(item);
        alert("Added item");
    }
});

angular.module("DemoModule").controller("CartController", function(CartService){
    this.cart = CartService.cart;
});

angular.module("DemoModule").service("CartService", function(){
   var cart = {};

    cart.cartItems = [];
    cart.getCartItems = function(){
        return cart.cartItems;
    };
    cart.addItem = function(item){
      cart.cartItems.push(item);
    };
    cart.deleteItem = function(targetItem){
        for(var i=0; i<cart.cartItems.length; i++){
            if(cart.cartItems[i] == targetItem){
                cart.cartItems[i].delete();
            }
        }
    };
    cart.getTotal = function(){
        var total = 0;
        for(var i=0; i<cart.cartItems.length; i++){
            total += parseInt(cart.cartItems[i].price);
        }
        return total;
    };

    return{
       cart: cart
   }
});
