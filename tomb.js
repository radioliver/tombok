let tomb = new Array(100);
for (let index = 0; index < 100; index++) {
    tomb[index] = Math.round(Math.random() * 101) - 50;
    
}
console.log("a) feladat:")
console.log(`   A legnagyobb: ${Math.max(...tomb)}\n`);
console.log(`A szám indexe: {${tomb.indexOf(Math.max(...tomb))}}\n`);

console.log("b) feladat:")
let osszeg = 0;
for (let i = 0; i < tomb.length; i++) {
    osszeg += tomb[i];   
}
console.log(`   Az összeg: ${osszeg}\n`);    

console.log("c) feladat:")
let paros = 0;
let paratlan = 0;
for (let i = 0; i < tomb.length; i++) {
    if (tomb[i] % 2 == 0) {
        paros += 1;
    } else {
        paratlan += 1;
    }
}
console.log(`   Páros: ${paros}`);
console.log(`   Páratlan: ${paratlan}\n`);

console.log("d) feladat:")
let van = false;
ii = 0;
while (!van) {
    if (tomb[ii] % 7 == 0) {
        van = true;
    }
    else if (ii == tomb.length - 1) {
        break;
    }
    ii++;
}
console.log(van)


