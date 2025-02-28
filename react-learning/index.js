var kullanicilar =  [
    {email: "yarenyazar@gmail.com", sifre: "12345"},
    {email: "tuanatekinel@gmail.com", sifre: "56789"}
]

var tweetler = [
    {email: "yarenyazar@gmail.com", tweet:"bugun hava cok guzel"},
    {email: "yarenyazar@gmail.com", tweet:"staj yapacak yer buldum"},
    {email: "tuanatekinel@gmail.com", tweet:"doktor oluyorum"}
]

var email = prompt("email?")
var sifre = prompt("sifre?")

function giris() {
    if((email == kullanicilar[0].email && sifre == kullanicilar[0].sifre) || (email == kullanicilar[1].email && sifre == kullanicilar[1].sifre)) {
       console.log(tweetler) 
    }
    else {
        console.log("kullanici adi veya sifresi hatali")
    }
}

giris(email, sifre)