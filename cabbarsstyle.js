Cabbar(2, "VW", 2010, "kirmizi");

function Cabbar(musteriYil, model, yas, renk) {
    if (musteriYil >= 5) {
        console.log("Aracinizin bakimi yapilacaktir");
    }
    else if (model == "bmw") {
        if (yas >= 2020 && renk == "siyah") {
            console.log("Aracinizin bakimi yapilacaktir");
        }
        else if (yas > 2010 && yas < 2019) {
            if (renk == "kirmizi") {
                console.log("Aracinizin bakimi yapilacaktir");
            }
            else {
                console.log("Uzgunuz. Suan icin tum servislerimiz doludur. ");
            }
        }
        else {
            console.log("Uzgunuz. Suan icin tum servislerimiz doludur. ");
        }
    }
    else if (model == "audi") {
        if ((yas > 2005 && yas < 2010) || (yas > 2014 && yas < 2020)) {
            console.log("Aracinizin bakimi yapilacaktir");
        }
        else {
            console.log("Uzgunuz. Suan icin tum servislerimiz doludur. ");
        }
    }
    else if (model == "VW") {
        if (yas > 2001 && yas < 2018 && renk == "siyah") {
            console.log("Aracinizin bakimi yapilacaktir");
        }
        else {
            console.log("Uzgunuz. Suan icin tum servislerimiz doludur. ");
        }

    }
    else {
        console.log("Uzgunuz. Suan icin tum servislerimiz doludur. ");
    }
}


