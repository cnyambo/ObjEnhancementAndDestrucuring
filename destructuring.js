//ES Array swap

var obj = {
    numbers: {
      a: 1,
      b: 2
    }
  };
  
  //var a = obj.numbers.a;
  //var b = obj.numbers.b;
// ES2015 Object Destructuring

let { numbers } = obj;
let{a,b} = numbers;

//ES Array swap
var arr = [1, 2];
var temp = arr[0];
arr[0] = arr[1];
arr[1] = temp;


// ES2015 Object Destructuring
var arrDest = [1, 2];
[arrDest[1],arrDest[0]] = [arrDest[0],arrDest[1]]


const raceResults = ([first,second,third, ...rest])=>{first, second, third, rest};
