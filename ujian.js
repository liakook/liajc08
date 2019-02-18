// No. 1
// n = jumlah penduduk awal
// p = persentase penduduk melahirkan = 5%
// v = pendatang
// t = target = 1200 penduduk
// console.log(berapatahun(1000,5,50,1200)) // 2tahun
// console.log(berapatahun(1500000,2.5,10000,2000000))

// function berapatahun(n,p,v,t){
//     var tahun = t/(n + (v + (n * (p/100) )))
//     return tahun
// }
// console.log(berapatahun(1500000,2.5,10000,2000000))

// jawaban ujian No. 1: Monday, 18 Feb 2019
var berapatahun = (awal,percent,visitor,target) => {
    var tahun = 0
    percent = percent / 100
    do{
        awal = awal + (awal*percent) + visitor
        tahun ++
    }
    while(awal < target)
    return ' Kota akan mencapai ' + target + ' dalam ' + tahun + ' tahun '
}
console.log(berapatahun(1500000,2.5,10000,2000000))
console.log(berapatahun(10,50,5,50))