var selamFonksiyonu = function selam() {
    console.log("Merhaba");
}

selamFonksiyonu(); //bir değişkene atadık bu yüzden selam() olarak çağırınca error verdi

const selamFonksiyonu2 = () => {
    console.log("Merhaba 2");
}

//const selamFonksiyonu2 = () => console.log("Merhaba 2") şeklinde de yazılabiliyor

selamFonksiyonu2();

const selamFonksiyonu3 = (mesaj) => {
    console.log(mesaj);
}

selamFonksiyonu3("Merhaba 3");

var topla = (sayi1, sayi2) => {
    return sayi1 + sayi2;
}

let toplam = topla(3, 4);

//console.log(topla); //burada hata oluyor çünkü toplayı yazdırıyoruz değer atadığımız için toplamı yazdırmamız lazım

console.log(toplam);