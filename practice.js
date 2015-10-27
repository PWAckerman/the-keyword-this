//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?

      //Answer
      /*
      This allows us to reuse a function contextually without having to declare different variations.
      It is particularly useful in object constructors for declaring methods that can be reused on
      newly created objects.

  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

      //Answer
      This in the global scope will be applied to the window object (unless in strict mode where it will be undefined) or
      the appropriate global object of the run-time environment in backend javascript.

      When a method is invoked with dot notation, the object before the dot becomes the 'this' within the method.

      If a function constructor is used, the 'this' refers to the new object.

      When you use call or apply, 'this' is explicitly defined (passed in as an argument).

  // 3) What is the difference between call and apply?

      //Answer

      Call and apply are both methods of a function that get passed an object to be used as the context for 'this' as their first parameter.
      The difference is in their second parameters, in which call takes a series of arguments, while apply takes an array of values as one parameter.

  // 4) What does .bind do?

      //Answer
Bind allows you to explicitly declare the context for 'this' when invoking a method.


*/
//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the 'this' keyword*

    //Code Here

var user = {
  username: 'Patrick',
  email: 'patrickackerman@gmail.com',
  getUsername: function(){
    return this.username;
  }
}

//Now, invoke the getUsername method and verify you got the username of the object and not anything else.

user.getUsername();

//Next Problem


// Write the function definitions which will make the following function invocations function properly.

  //Function Invocations Here

  function Car(make, model, year){
      this.make = make;
      this.model = model;
      this.year = year;
      this.move = 0;
  }

  function moveCar(){
    return this.move = this.move + 10;
    }

  Car.prototype.moveCar = moveCar;

  var prius = new Car('Toyota', 'Prius', 2011);
  var mustang = new Car('Ford', 'Mustang', 2013);

  prius.moveCar(); //increments prius' move property by 10. Returns the new move property.
  mustang.moveCar(); //increments mustang' move property by 10. Returns the new move property.

  //Hint, you'll need to write a moveCar function which is added to every object that is being returned from the Car function. You'll also need to use the 'this' keyword properly in order to make sure you're invoking moveCar on the write object (prius vs mustang).






//Continuation of previous problem

var getYear = function(){
  return this.year;
};

//Above you're given the getYear function. Using your prius and mustang objects from above, use the proper syntax that will allow for you to call the getYear function with the prius then the mustang objects being the focal objects. *Don't add getYear as a property on both objects*.

  //Code Here

Car.prototype.getYear = getYear;

prius.getYear();
mustang.getYear();

//New Problem



var user = {
  username: 'iliketurtles',
  age: 13,
  email: 'iliketurtles@gmail.com'
};

var getUsername = function(){
  console.log(this.username);
};

setTimeout(getUsername.bind(user), 5000);

//Above you're given an object, a function, and a setTimeout invocation. After 5 seconds, what will the getUsername function return?

  //Answer Here

  //It will return undefined, because there is no username property on the window object.

//In the example above, what is the 'this keyword' bound to when getUsername runs?

  //Answer Here

  //The window object.

//Fix the setTimeout invocation so that the user object will be the focal object when getUsername is ran.
