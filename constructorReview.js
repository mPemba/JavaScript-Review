//Create a Animal Constructor that has the following parameters. species, name, legs, color, food (which is an array of foods they can eat).

var Animal = function(species, name, legs, color, food) {
  this.species = species;
  this.name = name; 
  this.legs = legs;
  this.color = color;
  this.food = [];
};


//Now create a person function that creates an object and returns it (not in constructor form) that has the following parameters. name, age, height, gender

var person = function(name, age, height, gender) {
  var obj = {};
    obj.name = name;
    obj.age = age;
    obj.height = height;
    obj.gender = gender;
    return obj;
};

//Create a animal array and a person array.

var animals = [];
var people = [];


//Create two instances of Animal and push those into your animal array

var bubba = new Animal('cat', 'bubba cat', 4, 'brown', ['chips, beers']);
var india = new Animal('dog', 'India', 4, 'black', ['pizza', 'buffalo wings']);

animals.push(bubba);
animals.push(india);

//Create two instances of person and push those into your person array.

var mike = person('mike', 24, 'this tall', 'M');
var ruth = person('red bowling ball ruth', 50, 5, 'F');

people.push(ruth);
people.push(mike);

//Now we want every instance of Animal to have a eat method. This method will choose a random item in that instances food array, then alert "(name) ' ate ' (whichever food was chosen)".

Animal.prototype.eat = function() {
  var rando = Math.floor(Math.random() * (2 - 0) + 0);
  for (var i = 0; i < food.length; i++) {
    if (food[i] === rando) {
        alert(this.name + ' ate ' + this.food[rando]);
    }
  }
};
/////////////////////////// NEED TO FIX THIS EAT GUY!!!!!!!!!!
bubba.eat();
//At this point, if we wanted to add something to every istance of person could we? 

  //Yes or no? and why or why not?



/*
  1) What happens when you use the 'new' keyword to call a Constructor function?
  2) What's a good way to describe the keyword 'this'
  3) Can a normal function which creates an object and then returns that object use the prototype?
  4) What happens if you forget to use 'new' when calling a constructor?
*/