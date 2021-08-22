document.getElementById('nairainput').addEventListener('input', function(e){
let naira = e.target.value;
document.getElementById('poundsOutput').innerHTML= naira/569.79;
document.getElementById('euroOutput').innerHTML= naira/483.19;
document.getElementById('dollarOutput').innerHTML= naira/411.42;
document.getElementById('output').style.visibility='visible'


})
document.getElementById('output').style.visibility='hidden'