// import World from './world'

// const root = document.getElementById('root')
// const world = new World('Hello World')
// world.sayHello(root)

//基本の型定義
// import { primitiveSample } from './basic'
// primitiveSample()
// import { notExistSample } from './basic'
// notExistSample()
// import { anySample } from './basic'
// anySample()
// import { unknownSample } from './basic'
// unknownSample()
import { logMessage } from './function/basic'
logMessage('Hello TypeScript')
import { isUserSignedIn, isUserSignedIn2, productsPrice } from './function/parameters'
isUserSignedIn('ABC', 'pkpk')
isUserSignedIn2('ABC', 'pkpk')
const sum = productsPrice(100, 200, 300)
console.log('Function parameters sample', sum)
