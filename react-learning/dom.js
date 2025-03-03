//document.getElementById("bio").innerHTML = "Yaren Yazar: 2002"

// var intro1 = document.getElementById("intro1");

// var mesaj = document.getElementById("mesaj");

// mesaj.innerHTML = intro1.innerHTML;

// var liste = document.getElementsByTagName("ul"); //butun ul etiketinde olanları alır
// var sehirler = liste[0]

// tumElemanlar = sehirler.getElementsByTagName("li");

// for(i = 0; i < tumElemanlar.length; i++) {
//     alert(tumElemanlar[i].innerHTML);
// }

// var classElemalari = document.getElementsByClassName("intro1");

// alert(classElemalari[0].innerHTML);
// alert(classElemalari.length); //burada 2 veriyor çünkü intro1 kullananları al dedik

// var queryElemanlari = document.querySelectorAll("p.intro1");

// alert(queryElemanlari.length); //burada ise 1 verir çünkü p etiketinde olup intro1 kullananları ver diyoruz

// var isimElemanlari = document.getElementsByName("musteriAdi");

// alert(isimElemanlari[0].value);

// var tuana = document.getElementById("tuana").addEventListener("click",rengiDegistir);

// function rengiDegistir() {
//     document.getElementById("div1").style.color = "red";
//     var isimElemanlari = document.getElementsByName("musteriAdi");
//     isimElemanlari[0].value = "Hatice"
// }

// var node = document.getElementById("agac");
// alert(node.childNodes[0].nodeValue);

var baslik = document.createElement("h2");
var node = document.createTextNode("Merhaba JavaScript");
baslik.appendChild(node);

var div1 = document.getElementById("div1")
var p2 = document.getElementById("p2")

div1.insertBefore(baslik, p2)

alert("p2 siliniyor")
div1.removeChild(p2); //p2'yi silmiş olduk

alert("degistiriliyor");
var p1 = document.getElementById("p1")
div1.replaceChild(baslik, p1) //başlığı p1'in yerine koymuş olduk

