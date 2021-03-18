const getTiempoRestante = fechaLimite => {
    let tiempoPresente = new Date(),
        tiempoRestante = (new Date(fechaLimite) - tiempoPresente + 1000) / 1000,
        segundosRestantes = ('0' + Math.floor(tiempoRestante % 60)).slice(-2),
        minutosRestantes = ('0' + Math.floor(tiempoRestante / 60 % 60)).slice(-2),
        horasRestantes = ('0' + Math.floor(tiempoRestante / 3600 % 24)).slice(-2),
        diasRestantes = Math.floor(tiempoRestante / (3600 * 24));

        return {
            tiempoRestante,
            segundosRestantes,
            minutosRestantes,
            horasRestantes,
            diasRestantes
        }
};

const conteo = (fechaLimite) => {
    let dias = document.getElementById('dias'),
        horas = document.getElementById('horas'),
        minutos = document.getElementById('minutos'),
        segundos = document.getElementById('segundos');

    const actualizarTiempo = setInterval(() => {
        let tiempo = getTiempoRestante(fechaLimite);
        dias.innerHTML = `${tiempo.diasRestantes}`;
        horas.innerHTML = `${tiempo.horasRestantes}`;
        minutos.innerHTML = `${tiempo.minutosRestantes}`;
        segundos.innerHTML = `${tiempo.segundosRestantes}`;

        if(tiempo.tiempoRestante <= 1) {
            clearInterval(actualizarTiempo);
        }

    }, 1000);
};

conteo('Jan 1 2022 00:00:00 GMT-0300');

// Sacar los separadores ":" para el mobile
let mediaqueryList = window.matchMedia("(max-width: 420px)"),
    separador = document.querySelectorAll(".container .container-numbers p");

const screenTest = () => {
    if (mediaqueryList.matches) {
        for (const i in separador) {
            separador[i].innerHTML = "";
        }
    } else {
        for (const i in separador) {
            separador[i].innerHTML = ":";
        }
    }
}

screenTest();
mediaqueryList.addListener(screenTest);