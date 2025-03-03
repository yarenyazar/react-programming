const dizi = [1, 2, 3, 4]

const kareDizisi = []

dizi.forEach(sayi => {
    kareDizisi.push(sayi * sayi);
})

console.log(kareDizisi);

//map: bir dizi üzerinde iterasyon yaparak her öğe için belirli bir işlemi uygulayan ve sonuçları yeni bir dizi olarak döndüren bir fonksiyon

const mapDizi = dizi.map(sayi => sayi * 3) //map kullanımında yukarıdaki gibi süslü parantezle yazmak karışıklığa sebep oluyor bu yüzden tek satırda yazım isteniyor

console.log(mapDizi);

//filter: bir dizi içerisindeki elemanları belirli bir koşula göre filtreleyerek, yalnızca bu koşulu sağlayan elemanlardan oluşan yeni diziyi döndürür

const filtreliDizi = dizi.filter(sayi => sayi > 2)

console.log(filtreliDizi);

//reduce: bir dizi üzerindeki tüm elemanları belirli bir işlemden geçirerek tek bir değer üretmek için kullanılır (toplam, ortalama vs)

const toplam = dizi.reduce((acc, sayi) => {  //acc başlangıç değeridir defaultu 0'dır
    return acc + sayi;
}) //burada ise başlangıç değeri 0 belirlediğimiz için toplamı 10 sonucunu verdi

console.log(toplam);

const toplam2 = dizi.reduce((acc, sayi) => {  
    return acc + sayi;
}, 10) //burada başlangıç değeri 10 yaptık ve üzerine ekleme yaptığımız için sonucu 20 verir

console.log(toplam2);