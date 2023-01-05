const form = document.querySelector('.quiz-form');
const respCorrectas = ['A', 'A', 'A', 'A'];
const resultado = document.querySelector('.result');
form.addEventListener('submit', e => {
    //console.log(e);
    e.preventDefault();

    // obtener la data de las respuestas
    //console.log(form.q1);
    //console.log(form.q2);
    //console.log(form.q3);
    //console.log(form.q4);
    const respUsuario = [
        form.q1.value,
        form.q3.value,
        form.q3.value,
        form.q4.value
    ];
    //console.log(respUsuario);
    let puntaje = 0;
    respUsuario.forEach((valor, indice) => {
        //console.log(indice, valor);
        if(valor === respCorrectas[indice]){
            console.log(`La respuesta de la pregunta ${indice + 1} es correcta`);
            puntaje += 25;
        } else {
            console.log(`La respuesta de la pregunta ${indice + 1} es errones`);
        }
    });
    //console.log(puntaje);
    let posicionEjeY = scrollY;
    // setInterval(function(){
    //     console.log('soy un mensaje');
    // }, 100);

    let animacionTop = setInterval(() => {
        if(posicionEjeY <= 0){
            clearInterval(animacionTop);
        } else {
            scrollTo(0, posicionEjeY);
            posicionEjeY =posicionEjeY - 7;
        }
    }, 5);


    //console.log(posicionEjeY);
    resultado.classList.remove('d-none');
    //resultado.querySelector('span').textContent = `${puntaje}%`;

    let sumaPuntajeTotal = 0;
    let velocidad = 40;

    let timer = setInterval(() => {
        if(sumaPuntajeTotal === puntaje){
            clearInterval(timer);
        } else {
            sumaPuntajeTotal++;
        }
        resultado.querySelector('span').textContent = `${sumaPuntajeTotal}%`;
    }, velocidad);
});
