function func1(opts) {
  /*TODO a todo */
    /*TODO a todo */
  /*FIXME asdasd*/
  console.log(opts)
  console.log('hello')  
  console.log('world')
  console.log('goodbye')
  console.log('world')
}

function func1(opts) {  //unused param on function declaration line
  console.log('hello'); //good line 
  console.log('world')  //issue line
  
  while(true){
    var x = new function(unusedParam){
      console.log('inside a function')  //nested issue line
    }
  }
  
  var bert, ernie
  var fred, wilma
}
