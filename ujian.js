// No. 1
// n = jumlah penduduk awal
// p = persentase penduduk melahirkan = 5%
// v = pendatang
// t = target = 1200 penduduk
// console.log(berapatahun(1000,5,50,1200)) // 2tahun
// console.log(berapatahun(1500000,2.5,10000,2000000))

function berapatahun(n,p,v,t){
    var tahun = t/(n + (v + (n * (p/100) )))
    return tahun
}
console.log(berapatahun(1500000,2.5,10000,2000000))