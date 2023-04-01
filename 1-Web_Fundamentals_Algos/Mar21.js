var pokemon = [
    { "id": 1, "name": "Bulbasaur", "types": ["poison", "grass"] },
    { "id": 5, "name": "Charmeleon", "types": ["fire"] },
    { "id": 9, "name": "Blastoise", "types": ["water"] },
    { "id": 12, "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16, "name": "Pidgey", "types": ["normal", "flying"] },
    { "id": 23, "name": "Ekans", "types": ["poison"] },
    { "id": 24, "name": "Arbok", "types": ["poison"] },
    { "id": 25, "name": "Pikachu", "types": ["electric"] },
    { "id": 37, "name": "Vulpix", "types": ["fire"] },
    { "id": 52, "name": "Meowth", "types": ["normal"] },
    { "id": 63, "name": "Abra", "types": ["psychic"] },
    { "id": 67, "name": "Machamp", "types": ["fighting"] },
    { "id": 72, "name": "Tentacool", "types": ["water", "poison"] },
    { "id": 74, "name": "Geodude", "types": ["rock", "ground"] },
    { "id": 87, "name": "Dewgong", "types": ["water", "ice"] },
    { "id": 98, "name": "Krabby", "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime", "types": ["psychic"] },
    { "id": 133, "name": "Eevee", "types": ["normal"] },
    { "id": 144, "name": "Articuno", "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos", "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres", "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair", "types": ["dragon"] }
];

console.log(pokemon[0].types[1])

// If we wanted to console.log the names of the pokemon who have an id greater than 99 we could...
console.log("\n Pokemon with an id greater than 99")
for(var i=0; i<pokemon.length; i++) {
    if(pokemon[i].id > 99) {
        console.log(pokemon[i].name);
    }
}

// console.log the **pokemon objects** whose id is evenly divisible by 3 <-- modulo returns!
console.log("\n pokemon objects with an id divisible by 3:")
//Your code here
for(var x = 0; x < pokemon.length; x++) {
    if(pokemon[x].id % 3 === 0) {
        console.log(pokemon[x]);
    }
}


// console.log the **pokemon objects** that have more than one type
console.log("\n pokemon objects with more than one type")
//Your code here
for(var x = 0; x < pokemon.length; x++) {
    if(pokemon[x].types.length > 1) {
        console.log(pokemon[x]);
    }
}


// console.log the **names** of the pokemon whose only type is "poison"
console.log("\n pokemon names with only one type, poison:")
//Your code here
for(var x = 0; x < pokemon.length; x++) {
    if(pokemon[x].types.length == 1 && pokemon[x].types[0] == "poison") {
        console.log(pokemon[x].name);
    }
}


// console.log the **first type** of all the pokemon whose second type is "flying"
console.log("\n First type of all pokemon whose second type is flying")
//Your code here
for(var x = 0; x < pokemon.length; x++) {
    if(pokemon[x].types.length > 1 && pokemon[x].types[1] == "flying") {
        console.log(pokemon[x].types[0]);
    }
}


//Bonus Challenge: console.log the reverse of the names of the pokemon whose only type is "poison"
// var test = "hello"
// var newString = "";
// for(var x = test.length - 1; x >= 0; x--) {
//     newString += test[x];
// }
// console.log(newString);

for(var x = 0; x < pokemon.length; x++) {
    var newString = "";
    if(pokemon[x].types.length == 1 && pokemon[x].types[0] == "poison") {
        for(var i = pokemon[x].name.length - 1; i >= 0; i--) {
            newString += pokemon[x].name[i];
        }
        console.log(newString);
    }
}