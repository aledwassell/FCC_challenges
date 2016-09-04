function makeCounter(noun) {    //function is declared with a ("parameter" ie noun) ie a noun.
  var count = 0;                //var containg the count.
  return function(){            //inside function accessing the outter functions scope and returned.
    count++;                    //counter adding 1 each time it is called.
    return count + ' ' + noun;  //returning the count concatenated with the noun parameter
  }
  // here I could return the inner function if it had a name like return counter.
}

var bananaCounter = makeCounter("banana");
bananaCounter();                //call the variables.

var gorillaCounter = makeCounter("gorilla");
gorillaCounter();

var mooseCounter = makeCounter("moose");
mooseCounter();
