import hamburgerMenu from "./menu_hamburguesa.js"
import { digitalClock, Alarm } from  "./reloj.js"
import {shortcuts, moveBall} from "./teclado.js"
import cuentaRegresiva from "./cuenta_regresiva.js"
import scrollTopButton from "./boton-scroll.js";
import darkTheme from "./dark-light.js";
import responsiveMedia from "./objeto_responsive.js";
import responsiveTester from "./prueba_responsive.js";
import userDeviceInfo from "./deteccion_dispositivos.js";
import networkStatus from "./deteccion_red.js";
import webCam from './deteccion_webcam.js';
import geoLocate from "./geo-locate.js";
import searchFilters from "./filtro_busquedas.js";
import sorteo from "./sorteo.js";
import slider from "./responsive-slider.js";



const d = document;
d.addEventListener("DOMContentLoaded", (e)=> {
hamburgerMenu(".panel-btn", ".panel", ".menu a");
digitalClock("#reloj", "#activar-reloj","#desactivar-reloj");
Alarm("assets/alarma.mp3", "#activar-alarma","#desactivar-alarma");
cuentaRegresiva("countdown","Jan 1,2022 00:00:00","Feliz Cumpleaños Mauricio");
scrollTopButton(".scroll-top-button");
responsiveMedia("gmaps", "(min-width: 1024px)" , `<a href="https://goo.gl/maps/FsubMEzsQJcbdSqo8" target= "_blank">Ver Mapa</a>` , `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.4332551912726!2d-99.1611801845508!3d19.393677646948312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1fedcb94a9a79%3A0x418cf5a495722067!2sAvaluos%20Anepsa%20S.A%20de%20C.V.!5e0!3m2!1ses!2smx!4v1612380392892!5m2!1ses!2smx" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>`);
responsiveMedia("youtube", "(min-width: 1024px)" , `<a href="https://www.youtube.com/watch?v=6IwUl-4pAzc&feature=emb_title&ab_channel=jonmircha" target= "_blank"> Ver video</a>`,
 `<iframe width="560" height="315" src="https://www.youtube.com/embed/6IwUl-4pAzc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media gyroscope; picture-in-picture"allowfullscreen></iframe>`);
 responsiveTester("responsive-tester");
 userDeviceInfo("user-device");
 webCam("webcam");
 geoLocate();
 searchFilters(".card-filter", ".card");
 sorteo();
 slider();
});

d.addEventListener("keydown", e =>{
  shortcuts(e);
  moveBall(e,".ball",".stage");
});

darkTheme(".dark-theme-btn", "dark-mode");
networkStatus();


