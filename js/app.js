let inputDni = document.querySelector('.dni input');
let log = document.getElementById('log');
let submit = document.querySelector('.btn');
if(log){
    log.innerHTML = 'Ingrese su documento de identidad';
}
if(submit){
    submit.disabled = true;
    submit.style.cursor = "initial";
}
if(inputDni){
    inputDni.onkeyup = function(e){
        if(e.target.value == ''){
            log.style.fontSize = '18px';
            inputDni.style.padding = "25px 20px";
            submit.style.backgroundColor = "#BABABC";
            submit.disabled = true;
            submit.style.cursor = "initial";

        }else{
            log.style.fontSize = '10px';
            inputDni.style.padding = "25px 20px";
            inputDni.style.padding = "35px 20px 15px 20px";
            submit.style.backgroundColor = "#0BC466";
            submit.disabled = false;
            submit.style.cursor = "pointer";

        }
    }
}

let buttonCard = document.querySelectorAll('.card button');
let greenButton = document.querySelector('.boton-votar');
let votoFinalizado = document.querySelector('.vota-finalizado');
if(greenButton){
    greenButton.style.display = 'none';
}
if(votoFinalizado){
    votoFinalizado.style.display = 'none';
}

for (let index = 0; index < buttonCard.length; index++) {
    const button = buttonCard[index];
    button.addEventListener('click', () => {
        greenButton.style.display = 'block';
        for (let index = 0; index < buttonCard.length; index++) {
            buttonCard[index].parentNode.parentNode.style.borderColor = "#F3F3F3";
            buttonCard[index].style.borderColor = "#7D7D81";
            
        }
        const padreSuperior = button.parentNode.parentNode;
        button.style.borderColor = "#0BC466";
        padreSuperior.style.borderColor = "#0BC466";
    });
    
}
if(greenButton){
    greenButton.addEventListener('click', () => {
        Swal.fire({
            title: '¡Voto realizado!',
            text: 'Muchas gracias por participar',
            imageUrl: 'img/ico_success@2x.png',
            imageWidth: 55,
            imageAlt: 'Custom image',
            showCloseButton: true,
            showConfirmButton: false,
            customClass: 'swal-voto-realizado',
            backdrop: `rgba(0,0,0,0.8)`
        }).then(() => {
            greenButton.style.display = 'none';
            votoFinalizado.style.display = 'block';
            for (let index = 0; index < buttonCard.length; index++) {
                buttonCard[index].style.display = 'none';
                
            }
            
            let d = new Date();
            let h = d.getHours();
            let m = d.getMinutes();
            votoFinalizado.innerHTML = `<p>Usted realizó su voto hoy a las ${h}:${m}</p>`;
            
        })
    });
}




