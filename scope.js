var a = 1; //a has global scope

function hello() {
  console.log(a);
  console.log("before", b);
  if (true) {
    var b = 10; //b has function scope
    console.log(b);
  } else {
    console.log(a);
  }

  console.log(b);
}

console.log(a);
hello();
console.log(a);
// console.log(b);
