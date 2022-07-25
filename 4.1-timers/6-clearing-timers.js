// 6-clearing-timers

const myFunc = () => console.log('you will not see this one!')

const timerID = setTimeout(myFunc,0) //excute after all is over 
//= setImmediate(myFunc)

//mode core

clearTimeout(timerID); //this time our program end immediately, console above does not show

//const timerID = setImmediate(myFunc)
//clearImmediate(timerID) -> to cancel timer

//const intervalID = setInterval (myFunc, delay)
//clearInterval(intervalID)