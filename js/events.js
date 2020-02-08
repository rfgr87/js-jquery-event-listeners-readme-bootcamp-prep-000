//define functions here

function getIt(){
  alert("Hey!")
}

$('p').on("click", getIt());

function frameIt(){
  
}

function pressIt(){
  $("input").on("keydown", function(e){
    if (e.which === 71){
      window.alert("G was pressed.");
    }
  });
}


$(document).on('keydown', pressIt(key));

function submitIt(){
  alert('Your form is going to be submitted now.')
}

$("form").on("submit", submitIt());