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
}

$("form").on('key down', pressIt(key));