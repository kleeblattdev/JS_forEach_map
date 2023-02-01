let getraenke = ["Coca-Cola","Apfelsaft","Pepsi","Traubensaft","Sprite","Orangensaft","Red Bull Energy Drink","Fanta"];

getraenke.sort();

function myDrinks(){
    getraenke.forEach((element) => document.write(`<p>${element}</p>`));
}

myDrinks();

///// CodeFlow Übung lev1_2: map()

const upperDrinks = getraenke.map((element) => {return element.toUpperCase();})

console.log(upperDrinks);