  
  import modals from "./modules/modals";
  import sliders from "./modules/sliders";
  import forms from "./modules/forms";
  import showCards from "./modules/showCards";
  import calc from "./modules/calc";
  import tabFilter from "./modules/tabFilter";
  import pictursOnMouse from "./modules/picturesOnMouse";
  import accordion from "./modules/accordion";
  import burgerMenu from "./modules/burgermenu";
  import dragDrop from "./modules/dragdrop";


   window.addEventListener('DOMContentLoaded', () =>{
       
      modals();
      sliders('.feedback-slider-item', '', '.main-prev-btn', '.main-next-btn');
      sliders('.main-slider-item', 'vertical');
      forms();
      showCards('.button-styles', '#styles .row');
      calc('#size', '#material', '#options', '.promocode', '.calc-price');
      tabFilter();
      pictursOnMouse('.sizes-block');
      accordion('.accordion-heading');
      burgerMenu('.burger-menu', '.burger', '.burger-close');
      dragDrop();

   });