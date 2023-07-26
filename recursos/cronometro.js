let milliseconds = 0, seconds = 0, minutes = 0, hours = 0;
let display = document.getElementById('display');
let interval = null;
let running = false;

function leadZero(time) {
  return time < 10 ? "0" + time : time;
}

function startStop() {
  if (!running) {
    interval = setInterval(cronometro, 10); // Atualiza a cada 10 milissegundos
    document.getElementById('startStop').innerHTML = 'Pausar';
    running = true;
  } else {
    clearInterval(interval);
    document.getElementById('startStop').innerHTML = 'Iniciar';
    running = false;
  }
}

function cronometro() {
  milliseconds++;
  if (milliseconds / 100 === 1) {
    milliseconds = 0;
    seconds++;
    if (seconds / 60 === 1) {
      seconds = 0;
      minutes++;
      if (minutes / 60 === 1) {
        minutes = 0;
        hours++;
      }
    }
  }
  display.innerHTML = `${leadZero(hours)}:${leadZero(minutes)}:${leadZero(seconds)}:${leadZero(milliseconds)}`;
}

function reset() {
  clearInterval(interval);
  display.innerHTML = "00:00:00:00";
  document.getElementById('startStop').innerHTML = 'Iniciar';
  milliseconds = 0; seconds = 0; minutes = 0; hours = 0;
  running = false;
}

document.getElementById('startStop').addEventListener('click', startStop);
document.getElementById('reset').addEventListener('click', reset);
