// Map Method --->


let data = new Map([["BMW",100], ["Audi", 200], ["Toyoto", 300]]);
data.set("Alto", 500);
data.set("Neno", 600);
console.log(data);
console.log(data.size);
data.clear();
data.delete("Alto");
console.log(data.entries());
console.log(data.get("BMW"));
console.log(data.has("Bmw")); // console.log(data.keys());
console.log(data.values());

let txt = "";

data.forEach((val, str) => { txt = txt + str + " => "+ val + "\n";

});

console.log(txt);



// Set Method --->


// let arr = new Set(["BMW", "Audi", "Toyoto"]);
//  console.log(arr.size);
//  arr.add(10)
//  arr.add(100)

// arr.delete("Toyoto")
// console.log(arr.has("toyoto"));
// arr.clear()
// arr.keys();
// console.log(arr.keys());
// console.log(arr.values());
// console.log(arr.entries());

// let txt = "";
// arr.forEach((str) => {
// txt = txt + str + "\n";
// });
// console.log(txt);