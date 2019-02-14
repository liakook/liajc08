/* Hint, Pakai looping biasa untuk meneprint segitiga, 
sedangkan untuk menyimpan angka, bisa
memakai array 2 dimensi (matrix). array di dalam array. */

function segitigaPasc(num){
    let pasc = ''
for(let i = 0 ; i < 5; i++){
    for(let j = i; j < 4; j++){
        pasc += ' '
    }
    for(let k = 0; k <= i; k++){
        pasc += '*'
    }
    for(let l = 0; l <= i-1; l++){
        pasc += '*'
    }
    pasc += '\n'
}
}
console.log(segitigaPasc(5))