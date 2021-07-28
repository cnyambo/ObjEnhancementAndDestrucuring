function createInstructor(firstName, lastName){
    return {
      firstName: firstName,
      lastName: lastName
    }
  }

  //createInstructor to ES2015

  function createInstructorEnhanced(firstName,lastName){
    return {firstName, lastName};
  }

  //ES5 version
var favoriteNumber = 42;

var instructor = {
  firstName: "Colt"
}

instructor[favoriteNumber] = "That is my favorite!"

//ES2015 Version
let instructor_Enhanced = {
    [favoriteNumber]:"That is my favorite!",
    firstName:"Colt"
};
 

//ES5 version

var instructorObj = {
    firstName: "Colt",
    sayHi: function(){
      return "Hi!";
    },
    sayBye: function(){
      return this.firstName + " says bye!";
    }
  }

  //ES2015 Version

  var instructorObj_Enhanced = {
    firstName: "Colt",
    sayHi() {
      return "Hi!";
    },
    sayBye(){
        return this.firstName +" says bye!"
    }
  };

  function createAnimal(species, verb, noise){
    return{
        species,
        [verb]()
        {
            return noise;
        }
    } 
  }