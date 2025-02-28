/* for (i = 1; i <= 10; i++) {
    console.log(i);
} */

var sehirler = ["Ankara", "Ordu", "Zonguldak", "Konya"]

/* for(i = 0; i < sehirler.length; i++) {
    console.log(sehirler[i])
}

var i = 1;
while(i <= 10) {
    console.log(i);
    i++;
} 

var i = 1;
do {
    console.log(i);
    i++;
} while(i <= 10); */

sehirler.forEach(function(sehir) {
    console.log(sehir);
})

