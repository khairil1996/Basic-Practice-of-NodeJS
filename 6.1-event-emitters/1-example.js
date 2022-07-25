// 1-example

// const EventEmitter = require('events');
// const myEmitter = new EventEmitter();
// myEmitter.emit('TEST-EVENT')
// myEmitter.on('TEST-EVENT' , ()=>{
// 	console.log('test event was fired')
// })
// myEmitter.on('TEST-EVENT' , ()=>{
// 	console.log('test event was fired')
// })
// myEmitter.on('TEST-EVENT' , ()=>{
// 	console.log('test event was fired')
// })

// result = nothing

// const EventEmitter = require('events');
// const myEmitter = new EventEmitter();
// myEmitter.on('TEST-EVENT' , ()=>{
// 	console.log('test event was fired')
// })
// myEmitter.on('TEST-EVENT' , ()=>{
// 	console.log('test event was fired')
// })
// myEmitter.on('TEST-EVENT' , ()=>{
// 	console.log('test event was fired')
// })
// myEmitter.emit('TEST-EVENT')

// result = test event was fired x3

//solution

const EventEmitter = require('events');

const myEmitter = new EventEmitter();

setImmediate(()=>{
	myEmitter.emit('TEST-EVENT')
});

myEmitter.on('TEST-EVENT' , ()=>{
	console.log('test event was fired')
})
myEmitter.on('TEST-EVENT' , ()=>{
	console.log('test event was fired')
})
myEmitter.on('TEST-EVENT' , ()=>{
	console.log('test event was fired')
})