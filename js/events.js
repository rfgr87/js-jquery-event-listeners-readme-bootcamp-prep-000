//define functions here

function getIt(){
  alert("Hey!")
}

$('p').on("click", getIt());

function frameIt(){
  
}

function pressIt(key){
  if(key.which == 71){
  alert("G key was pressed")
}
else{
  alert("another key was pressed")
}
}

$(document).on('keydown', pressIt(key));

function submitIt(){
  alert('Your form is going to be submitted now.')
}

$("form").on("submit", submitIt());