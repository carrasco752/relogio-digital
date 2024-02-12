const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");

const relogio = setInterval(function time() {
  let dateToday = new Date();
  let hr = dateToday.getHours();
  let min = dateToday.getMinutes();
  let sec = dateToday.getSeconds();

  if (hr < 10) hr = "0" + rh;
  if (min < 10) min = "0" + min;
  if (sec < 10) sec = "0" + sec;

  horas.textContent = hr;
  minutos.textContent = min;
  segundos.textContent = sec;

  if (segundos.textContent <= 1) sectxt.textContent = "Segundo";
  else sectxt.textContent = "Segundos";

  if (horas.textContent <= 1) hrtxt.textContent = "Hora";
  else hrtxt.textContent = "Horas";

  if (min.textContent <= 1) mintxt.textContent = "Minuto";
  else mintxt.textContent = "Minutos";
});
