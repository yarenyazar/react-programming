// [] === [] bu ifade false döner çünkü nesneler referans odaklıdır yani iki farklı dizi oluşturulduğunda, onların içeriği aynı olsa bile, bellek üzerinde farklı yerlerde saklanırlar

//console.log(this) this keywordu içinde bulunduğumuz nesnenin kendisini anlatır this === window ifadesi true döner

const urunServis = {
    ekle: function() {
        console.log(this);
    }
}

urunServis.ekle();