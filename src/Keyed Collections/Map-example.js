//Map merupakan adalah kumpulan item data yang dikunci, seperti halnya Objek. Namun perbedaan utamanya adalah Map mengizinkan kunci jenis apa pun.

//Berikut Penerapan Contoh dari Map

const firstMap = new Map();

firstMap.set("a", 1);
firstMap.set("b", 2);
firstMap.set("c", 3);

console.log(firstMap.get("a"));

firstMap.set("a", 97);

console.log(firstMap.get("a"));

console.log(firstMap.size);

firstMap.delete("b");

console.log(firstMap.size);
