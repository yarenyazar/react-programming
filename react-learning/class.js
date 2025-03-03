class Personel { //classların baş harfi büyük harfle başlar

    constructor(ad, soyad) {
        this.ad = ad;
        this.soyad = soyad;
    }

    kaydet() {
        console.log(`personel kaydedildi: ${this.ad}`);
    }

    // kaydet() {
    //     console.log("personel kaydedildi")
    // }
}

const personel = new Personel("Yaren", "Yazar");

personel.kaydet();
// personel.ad = "Yaren"
// console.log(personel.ad); //buradaki ad ile constructordaki ad ifadesinin bir bağı yok fakat this ifadesini kullandıktan sonra constructor içinde artık bağlantılı olmuş oluyor

