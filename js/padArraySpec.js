// Write unit tests!
let pd = require('./padArray')

console.log(pd.pad([1,2,3], 5)) // == [1,2,3,None,None])
console.log(pd.pad([1,2,3], 5, 'apple')) // == [1,2,3,'apple','apple'])
console.log(pd.pad([1,2,3], 3)) // == [1,2,3])
console.log(pd.pad([1,2,3], 1)) // == [1,2,3])
console.log(pd.pad([1,2,3], 0, 'apple')) // == [1,2,3])