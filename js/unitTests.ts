/**
 * Created by wharris on 12/10/2014.
 */
var expect = chai.expect;

describe("Angular route tests", function(){

    var route, location;

    beforeEach(function(){
        module("DemoModule");
    });

    beforeEach(inject(function($route, $location){
        route = $route;
        location = $location;
    }));

    it("Should have a correct base route", function(){
        location.path("/");
        setTimeout(function(){
            expect(route.current.templateUrl).to.equal("./views/_home.html");
        });
    });

    it("Should have a correct collars route", function(){
        location.path("/collars");
        setTimeout(function(){
            expect(route.current.templateUrl).to.equal("./views/_collars.html");
        });
    });

    it("Should have a correct treats route", function(){
        location.path("/treats");
        setTimeout(function(){
            expect(route.current.templateUrl).to.equal("./views/_treats.html");
        });
    });

    it("Should redirect to home page if route is invalid", function(){
        location.path("/garbage");
        setTimeout(function(){
            expect(route.current.templateUrl).to.equal("./views/_home.html");
        });
    });
});

describe("CollarsController tests", function(){
   var scope, controller;

   beforeEach(function(){
       module("DemoModule");
   });

    beforeEach(inject(function($rootScope, $controller){
        scope = $rootScope.$new();
        controller = $controller("CollarsController");
        scope.$digest();
    }));

    it("Should have 3 collars", function(){
        expect(controller.collars.length).to.equal(3);
    });
});