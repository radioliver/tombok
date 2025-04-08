let a = new Set();
let b = new Set();

for (let index = 0; index < 20; index++) {
    a.add(Math.round(Math.random() * 101));
    b.add(Math.round(Math.random() * 101));
}
 
console.log(a.difference(b));
console.log(a.intersection(b));
console.log(a.union(b));
console.log(a.isSubsetOf(b));

