function makeCounter() {
    function counter() {
      return counter.currentCount++;
    };
    counter.currentCount = 1;
  
    return counter;
  }
  
  var counter = makeCounter();
  console.log(counter()) 
  console.log(counter()) 
  
  var counter2 = makeCounter();
  console.log(counter2()) 
  console.log(counter2()) 
