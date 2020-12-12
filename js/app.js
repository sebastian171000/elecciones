document.querySelector('.dni').onkeyup = function(e){
    document.getElementById('log').innerHTML = 'Ingrese su documento de identidad';
    document.querySelector('.dni input').style.padding = "35px 20px 15px 20px";
    if(e.target.value == ''){
        document.getElementById('log').innerHTML = '';
        document.querySelector('.dni input').style.padding = "25px 20px";
    }
}