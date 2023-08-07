
var LIST = document.getElementsByTagName("li");
var i=0;

for( ; i<LIST.length ; i++)
    {
      var span = document.createElement("span"); //yeni span oluşturdu
      var text = document.createTextNode("x");  // x yazdırdı
      span.className = 'close'; //css'teki close classına bağladı
      span.appendChild(text); //texti span'e ekledi
      LIST[i].appendChild(span); //her li üyesi için span ekledi

    }


var close = document.getElementsByClassName("close"); //close classı olanları aldı
var i;

//kaç tane close classı olan varsa onları etkin hale getirecek
for (i = 0; i < close.length; i++) 
{
  close[i].onclick = function() {
    var div = this.parentElement; //üst elemente değişken atadı
    div.style.display = "none" //display none olarak değiştirilince artık gözükmeyecek
  }
}




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

