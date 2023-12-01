const form = document.getElementById('form-valor');

function verificaNumero (vA, vB){
     const verificaValor = vA > vB; 
    return verificaValor ;
}

form.addEventListener('submit', function(e){
    e.preventDefault();

    const vFormA = document.getElementById('formA');
    const vFormB = document.getElementById('formB'); 

    if (!verificaNumero(vFormA.value, vFormB.value)){
        alert ("Número B é MAIOR que A");
    } else {
        alert ("Número B é MENOR que A");
    }    
})



