/**
 * Created by wharris on 12/10/2014.
 */
var collars = [
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

var treats = [
    {
        name: "Bacon Treats",
        material: "Bacon",
        price: 5,
        description: "The classic that all dogs will gobble up"
    },
    {
        name: "Steak and Cheddar Treats",
        material: "Steak and cheddar",
        price: 10,
        description: "A higher end treat for the dogs with a taste for greatness"
    },
    {
        name: "Health Treat Grab Bag",
        material: "All things healthy",
        price: 15,
        description: "The best of the best, treats that your dog will love and that will prolong those doggy years!"
    }
];

var houses = [
    {
        name: "Dogloo",
        material: "Plastic and love",
        price: 150,
        description: "The simple classic dog house that will keep your pet safe from the elements"
    }
];

var beds = [
    {
        name: "Basic Bed",
        material: "Plush",
        price: 20,
        description: "Basic bed for warmth and comfort"
    }
];

<div class="container">
<table class="table table-striped">
    <thead>
        <tr>
            <th>Name</th>
            <th>Material</th>
            <th>Description</th>
            <th>Price</th>
        </tr>
    </thead>
    <tbody>
    <tr ng-repeat="treat in treats.treats">
        <td>{{treat.name}}</td>
        <td>{{treat.material}}</td>
        <td>{{treat.description}}</td>
        <td>{{"$" + treat.price + ".00"}}</td>
        <td>
            <button class="btn btn-default" ng-click="treats.addToCart(treat)">Add To Cart</button>
        </td>
    </tr>
    </tbody>
</table>
</div>