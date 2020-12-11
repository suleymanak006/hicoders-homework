<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Suspect Train</title>
</head>

<body>
    <script>
        vagon = Math.floor(Math.random() * 10) + 1;
        count = 3;
        tahmin = 1;
        while (1) {
            sayi = prompt('Hirsizi yakalamak icin 1 ile 10 arasinda bir sayi giriniz:');
            if (count == 0) {
                alert('Hirsizi ilk hakkinizda bulamadiniz');
                break;
            }
            else if (sayi > vagon)
                alert('Tuttugunuz sayidan daha kucuk bir sayi giriniz ' + count + ' hakkiniz kaldi');

            else if (sayi < vagon)
                alert('Tuttugunuz sayidan daha buyuk bir sayi giriniz ' + count + ' hakkiniz kaldi');

            else if (sayi == vagon) {
                alert('Tebrikler hirsizi ' + tahmin + ' denemede yakaladiniz');
                break;
            }
        }
        count = count - 1;
        tahmin = tahmin + 1;


    </script>
</body>

</html>