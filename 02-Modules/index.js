const math =require("./math.js")

console.log(math)
// console.log(math(2,4)) --math use (when one funtion import)

console.log("Addtion",math.add(2,3))
console.log("Substratcion",math.sub(2,3))

//Most use Way -Destructured

// const {add ,sub} =require("./math.js")

// console.log("Addtion",add(2,3))
// console.log("Substratcion",sub(2,3))