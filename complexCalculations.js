
dizim = [3, 7, 6, 11, 8, 2, 9, 4, 1, 10];

for (let i = 0; i < dizim.length; i++) {                //Dizi icindeki sayilarin karekokunu bulma
    let karekok = Math.sqrt(dizim[i]);
    console.log("Dizi icindeki " + (i + 1) + ".inci sayinin karekoku  " + karekok);
}

for (let i = 0; i < dizim.length; i++) {             //Dizi icindeki sayilarin karesini bulma
    let karesi = Math.pow(dizim[i], 2);
    console.log("Dizi icindeki " + (i + 1) + ".inci sayinin karesi  " + karesi);
}

let toplam = 0;
for (let i = 0; i < dizim.length; i++) {                //Dizi icindeki sayilarin toplamini bulma
    toplam += dizim[i];
    console.log("Dizi icindeki sayilarin toplami = " + toplam);
}

let ortalama = toplam / dizim.length;                   //Dizi icindeki sayilarin ortalamasini bulma
console.log("Dizi icindeki sayilarin ortalamasi = " + ortalama);

let min = dizim[0];
let max = dizim[0];                                   //Dizi icindeki en buyuk sayiyi bulma
for (let i = 0; i < dizim.length; i++) {
    if (dizim[i] > max) {
        max = dizim[i];
    }
    if (dizim[i] < min) {
        min = dizim[i];
    }                                                 //Dizi icindeki en kucuk sayiyi bulma
}
console.log("Dizi icindeki en kucuk sayi = " + min);
console.log("Dizi icindeki en buyuk sayi = " + max);