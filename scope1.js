//try executing each for in isolation
//first i declared using var has scope of entire program,it can be acceses outside for
///second i declared using let has  block scope,it cannot be accesesed outside for
// for (var i = 0; i < 2; i++) {
//     console.log(i)
// }

// console.log('after first for',i)

for (i = 0; i < 2; i++) {try {
    
} catch (error) {
    
}
  console.log(i);
}

console.log("after second for ", i);

// for (const i = 0; i < 2; i++) {
//     console.log(i)
// }

// console.log('last ',i)
