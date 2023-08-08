
var LIST = document.getElementsByTagName("li");
var i=0;
var count=0;
var unfinished=0;


for( ; i<LIST.length ; i++)
    {
      var span = document.createElement("span"); //yeni span oluşturdu
      var text = document.createTextNode("x");  // x yazdırdı
      span.className = 'close'; //css'teki close classına bağladı
      span.appendChild(text); //texti span'e ekledi
      LIST[i].appendChild(span); //her li üyesi için span ekledi
      unfinished++;
      document.getElementById("unfinished").innerHTML = unfinished;



    }


var close = document.getElementsByClassName("close"); //close classı olanları aldı
var i;

//kaç tane close classı olan varsa onları etkin hale getirecek
for (i = 0; i < close.length; i++) 
{
  close[i].onclick = function() {
    var div = this.parentElement; //üst elemente değişken atadı
    div.style.display = "none" //çarpıya basarak sildiğimiz için tamamlanmış saymayacak yalnızca görev eksilmiş olacak
unfinished--
document.getElementById("unfinished").innerHTML = unfinished;
}
}

var list = document.querySelector('ul');
var li = document.querySelector('li')
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.style.display="none"; //sayaç için üstünü çizmek sorun çıkartıyor 
    //o yüzden tamamlanan görev üzerine basıldığında silinecek ve sayaçlar değişecek
    
    ev.target.classList.toggle('checked'); //checked class ile değiştirdiği için üstünü çiziyor
    count++;
    unfinished--;
    document.getElementById("unfinished").innerHTML = unfinished; //sayaç
    document.getElementById("count").innerHTML = count; //Sayaç
  }

}, false);


//kısaca görevin üzerine bastığımızda tamamlanmış kabul edip iki sayacı da değiştirecek
//çarpıya bastığımızda görevi sildiğimizi kabul edecek yalnızca görev sayısını değiştirecek


function newElement()
{
    var liDOM = document.createElement("li");
    var input= document.getElementById("task").value;
    var t = document.createTextNode(input);

    liDOM.appendChild(t);

    if (input === '' ) 
        {
            alert("Lütfen bir değer giriniz!");

        }
    
    else
        {
            var ulDOM=document.getElementById("list");
            ulDOM.appendChild(liDOM);
            unfinished++;
            document.getElementById("unfinished").innerHTML = unfinished;

        }


        input = " ";

        var span = document.createElement("span");
        var txt = document.createTextNode("x");
        span.className = "close";
        span.appendChild(txt);
        liDOM.appendChild(span);
      
        for (i = 0; i < close.length; i++) {
          close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
          }
        }

}

