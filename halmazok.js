//halmazok létrehozása, kiíratása:
let betuk = new Set(['a', 'b', 'c', 'd']);
for (let elem of betuk) {
    console.log(elem);
}
console.log("\n");

betuk.add('e');
let fBetu = "f";
betuk.add(fBetu);


for (let elem of betuk){
    console.log(elem);
}
console.log("\n");

betuk.forEach(function(ertek) {
    console.log(ertek);
});


let keresettBetu = "c";
if (betuk.has(keresettBetu)) {
    console.log(`${keresettBetu} szerepel a halmazban!`);
    }
else console.log(`${keresettBetu} nincs a halmazban!`);    

betuk.delete("e");
for (let elem of betuk){
    console.log(elem);
}
console.log("\n");

let interator = betuk.values();
console.log(interator)

for (let index = 0; index < 5; index++) {
    console.log(interator.next().value);    
}