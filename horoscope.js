const month = 3;
const day = 12;

if ((month == 12 && day >= 22) || (month == 1 && day <= 21)) {
    console.log("Oglak Burcusunuz.");
}
else if ((month == 1 && day >= 22) || (month == 2 && day <= 19)) {
    console.log("Kova Burcusunuz.");
}
else if ((month == 2 && day >= 20) || (month == 3 && day <= 20)) {
    console.log("Balik Burcusunuz.");
}
else if ((month == 3 && day >= 21) || (month == 4 && day <= 20)) {
    console.log("Koc Burcusunuz.");
}
else if ((month == 4 && day >= 21) || (month == 5 && day <= 21)) {
    console.log("Boga Burcusunuz.");
}
else if ((month == 5 && day >= 22) || (month == 6 && day <= 22)) {
    console.log("Ikizler Burcusunuz.");
}
else if ((month == 6 && day >= 23) || (month == 7 && day <= 22)) {
    console.log("Yengec Burcusunuz.");
}
else if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) {
    console.log("Aslan Burcusunuz.");
}
else if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) {
    console.log("Basak Burcusunuz.");
}
else if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) {
    console.log("Terazi Burcusunuz.");
}
else if ((month == 10 && day >= 23) || (month == 11 && day <= 21)) {
    console.log("Akrep Burcusunuz.");
}
else if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) {
    console.log("Yay Burcusunuz.");
}
else {
    console.log("Hatali giris yaptiniz");
}
