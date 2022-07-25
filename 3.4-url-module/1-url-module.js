// 1-url-module

const url = require('url')

const reqUrl = 'http://localhose:9000/user?country=India&city=Delhi'
// '/user' = partName
// after '?' query parameter
//country is key, india is value

const urlObject = url.parse(reqUrl, true)

urlObject.host; // return localhose:9000
urlObject.pathname; // return /user
urlObject.search; // return ?country=India&city=Delhi

console.log(urlObject.host)
console.log(urlObject.pathname)
console.log(urlObject.search)

//how to get invididual parameter
const queryData = urlObject.query // { country: 'india', city: 'delhi' }

queryData.country //india
queryData.city // delhi

console.log(queryData.country)
console.log(queryData.city)

