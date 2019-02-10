// No. 1
function ABbCcc(str){
    var a = str.toLowerCase().split('')
    var huruf = 'abcdefghijklmnopqrstuvwxyz'.split('')
    var newHuruf =''
    for(var i = 0 ; i < a.length ; i++){
        var indeks = (huruf.indexOf(a[i]))
        while(indeks > 25){
            indeks = indeks - 26
        }
        newHuruf += huruf[indeks]

    }
    return newHuruf
}
console.log(ABbCcc('fgji'))

// No. 2 -> (ES6 : Array Filtering)
var arr = [4,3,2,1,5]
var duplikatFilter = arr.filter((val) => val !==2)
console.log(duplikatFilter(arr,function(val){return val !==2}))

// No. 3 -> (sorting Array of Objects)
var a = [1,4,5,2,34,4,5,1,3,11]
a.sort(function(c,b){
    return c-b
})
console.log(sortDup(a,function(c,b){return c-b}))

