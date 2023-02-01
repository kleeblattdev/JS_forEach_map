let array = [18, 16, 80, 51, 47, 38, 95, 42, 68, 61, 34, 51, 20, 17, 56, 31, 100, 6, 5, 30, 74, 97, 28, 99, 91, 27, 73, 12, 92, 6, 27, 71, 26, 15, 78];

const multiplyArrayTwo = () => {
    let multiply = array.map(element => element * 2);
    console.log(multiply);
    multiply.sort(function(a, b){return a-b});
    console.log(multiply);
}
console.log(array);

multiplyArrayTwo();

//////////////////////////////

let checkNumber = [18, 16, 80, 51, 47, 38, 95, 42, 68, 61, 34, 51, 20, 17, 56, 31, 100, 6, 5, 30, 74, 97, 28, 99, 91, 27, 73, 12, 92, 6, 27, 71, 26, 15, 78];

const divideThreeAdd = () =>{
    let divideThree = checkNumber.map(element => {
        if((element % 3 == 0)){
            return element + 100;
        }else{
            return element;
        }
    })
    console.log(divideThree);
} 

divideThreeAdd();
