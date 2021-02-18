  const d = document;
export default function cuentaRegresiva(id,limitDate,finalMesage) {
const $contdown = d.getElementById(id),
  $contdownDate = new Date(limitDate).getTime();

  let contdownTempo = setInterval(() => {
    let now = new Date().getTime(),
      limitTime= $contdownDate - now,
      days = Math.floor(limitTime / (1000 * 60 * 60 *24)),
      hours = Math.floor(limitTime % (1000 * 60 * 60 *24) / (1000 * 60 * 60)),
      minutes  = Math.floor(limitTime % (1000 * 60 * 60) / (1000 * 60)),
      seconds = Math.floor(limitTime % (1000 * 60) / (1000));
    
      $contdown.innerHTML = `<h3>Faltan  ${days} Dias - ${hours} Horas - ${minutes} Minutos -  ${seconds} Segundos</h3>`;

      if (limitTime < 0 ){
        clearInterval(contdownTempo);
        $contdown.innerHTML = `<h3> ${finalMesage} </h3>`;
      }

  }, 1000);
}