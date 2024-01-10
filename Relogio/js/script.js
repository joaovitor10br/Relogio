const ponteiroHora = document.querySelector('.ponteiro_hora');
const ponteiroMinuto = document.querySelector('.ponteiro_minuto');
const ponteiroSegundo = document.querySelector('.ponteiro_segundo');

const getTime = () => {
    const date = new Date();
    return {
        horas: date.getHours(),
        minutos: date.getMinutes(),
        segundos: date.getSeconds(),
    };
}



setInterval(() => {

    const {segundos,
        minutos,
        horas
    } = getTime();

    ponteiroSegundo.style.transform = `translate(0, -50%) rotate(${segundos * 6}deg)`;
    ponteiroMinuto.style.transform = `translate(0, -50%) rotate(${minutos * 6}deg)`;
    ponteiroHora.style.transform = `translate(0, -50%) rotate(${horas * 30}deg)`;

}, 1000);