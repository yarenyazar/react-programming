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

function kullaniciVarmi(email, sifre) {
    for(i = 0; i < kullanicilar.length; i++) {
        if(kullanicilar[i].email == email && kullanicilar[i].sifre == sifre) {
            return true;
        }
    }
    return false;
}

function giris() {
    if((kullaniciVarmi(email, sifre))) {
       console.log(tweetler) 
    }
    else {
        console.log("kullanici adi veya sifresi hatali")
    }
}

giris(email, sifre)