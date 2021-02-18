const d = document;
let x = 0, y = 0;
export function moveBall(e,ball,stage) {
const $ball = d.querySelector(ball), $stage = d.querySelector(stage), limitsBall = $ball.getBoundingClientRect(),
limitsStage = $stage.getBoundingClientRect();

//const move = (direction) = > {
  
//if(){

//}

//};

switch (e.keyCode) {
  // Izquierda 37, Arriba 38, Abajo 40, Derecha 39 
  case 37:
    e.preventDefault();
    //move("left");
    if(limitsBall.left > limitsStage.left)x--;
    break;
    
  case 38:
    //move("up");
    e.preventDefault();
   if(limitsBall.top > limitsStage.top) y--;
    break;

  case 39:
    //move("right");
    e.preventDefault();
    if(limitsBall.right < limitsStage.right)x++;
    break;
    
  case 40:
    //move("down");
    e.preventDefault();
    if(limitsBall.bottom < limitsStage.bottom)
    y++;
    break;    

  default:
    break;
}
$ball.style.transform = `translate(${x*10}px, ${y*10}px)`;
}

 export function shortcuts(e) {
  //    console.log(e);
//    console.log(e.code);
//    console.log(e.key)
//   console.log(e.keyCode);
//   console.log(e.ctrlKey);
//   console.log(e.altKey);
//   console.log(e.shiftKey);


//   if (e.key === "a" && e.ctrlKey ===true)
//   alert("Hola esto es una alerta");
}