// 7-no-guarantees

setTimeout(
() => console.log('hello after 0.5 seconds. maybe!'),
500,
)

for (let i = 0; i<1e10; i++){
	//block node synchronously
}