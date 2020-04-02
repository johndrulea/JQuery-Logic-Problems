var mathy = require('./mathy');

/** 
function homework(){
    //print the first 20 even numbers
}
*/

function init() {
    /** 
    console.log('hello world!');

    let age = 90;
    console.log(age);

    let name = "Dru";
    console.log("My name is " + name);

    mathy.sayHello("a parameter val!!");
    */
    var res = mathy.sum(20,20);
    console.log(res);

    var more = mathy.greater(32154, 684684);
    console.log(more);

    console.log(mathy.greater(-1, -2));

    console.log("Is even:: " + mathy.isEven(40));
    console.log("Is even:: " + mathy.isEven(533));
    console.log("Is even:: " + mathy.isEven(0));

   var count = mathy.counter();
   console.log(count);
}


init();