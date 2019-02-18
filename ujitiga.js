/* Hint, Pakai looping biasa untuk meneprint segitiga, 
sedangkan untuk menyimpan angka, bisa
memakai array 2 dimensi (matrix). array di dalam array. */

// function segitigaPasc(num){
//     let pasc = ''
// for(let i = 0 ; i < 5; i++){
//     for(let j = i; j < 4; j++){
//         pasc += ' '
//     }
//     for(let k = 0; k <= i; k++){
//         pasc += '*'
//     }
//     for(let l = 0; l <= i-1; l++){
//         pasc += '*'
//     }
//     pasc += '\n'
// }
// }
// console.log(segitigaPasc(5))

// Jawaban mas fikri:
// result = [
//     [1],
//     [1,1],
//     [1,2,1],
//     [1,3,3,1],
//     [1,4,6,4,1]

// result = []

function segitigaPasc(n=5){
    var result = [];
    result[0] = [1];
    result[1] = [1,1];
    for(var row = 2; row < n; row++){
        result[row] = [1];
        for(var col = 1; col <= row - 1; col++){
            result[row][col] = result[row-1][col] + result[row-1][col-1]
        }
        result[row].push(1);
    }
    return result
}

var print = segitigaPasc(5)
var output = ''
for(var i = 0; i<print.length; i++){
    for(var spasi = print.length; spasi > i; spasi--){
        output += ' '
    }
    output += print[i].join(' ')
    output += '\n'
}
console.log(output)