// DESCRIZIONE:
//  Griglia 6x6, ad ogni click parte una richiesta AJAX che prende un numero random da 1 a 9.
// Se è <= 5 il quadrato diventa giallo,
// se è > di 5 il quadrato diventa verde.
// Il numero ottenuto appare al centro del quadrato





$(document).ready(function() {

$(".grid-item").click(function(){

//salvo una variabile esterna alla chiamata ajax altrimenti non vedrebbe il this
  var clicked= $(this);

    $.ajax({
      url : "https://ﬂynn.boolean.careers/exercises/api/random/int",
      method : "GET",
      success : function (data) {
        if (data.response <= 5 ) {
          clicked.css("background", "yellow");
          clicked.find(".num").text(data.response);
        }
        else {
          clicked.css("background", "green");
          clicked.find(".num").text(data.response);
        }
            console.log(data);
         },
      error : function (errore) {
           alert("E' avvenuto un errore. "+errore);
         }
       });


});


  });
