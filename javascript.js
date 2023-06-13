
 
 function strikethroughText() {
   var texto = document.getElementById("texto");
   var checkbox = document.getElementById("checkbox");

   if (checkbox.checked) {
     texto.classList.add("strikethrough");
   } else {
     texto.classList.remove("strikethrough");
   }
 }