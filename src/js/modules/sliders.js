
  function sliders (slides, direc ,prev ,next ){
     let sliderIndex = 1,
         paused = false;
     const items = document.querySelectorAll(slides);
          

      function showSlides(n){
          if (n > items.length){
            sliderIndex = 1;
          }

          if (n < 1 ){
            sliderIndex = items.length;
          }

          items.forEach(item => {
             item.classList.add('animated');
             item.style.display = 'none';
          });

          items[sliderIndex - 1].style.display ='block';
        
    
      }   
      
      showSlides(sliderIndex);

      function changeSlides(n) {
         showSlides(sliderIndex += n); 
      }


      try{
      const  btnPrev = document.querySelector(prev),
             btnNext = document.querySelector(next);

             btnPrev.addEventListener('click', () =>{
                changeSlides(-1);
                items[sliderIndex - 1].classList.remove('slideInLeft');
                items[sliderIndex - 1].classList.add('slideInRight');
               
             })

             btnNext.addEventListener('click', () => {
                changeSlides(1);
                items[sliderIndex - 1].classList.remove('slideInRight');
                items[sliderIndex - 1].classList.add('slideInLeft');
             })

      }catch(e){}


      function activatedSlider() {
         if(direc === 'vertical'){
             paused = setInterval(function(){
              changeSlides(1);
               // items[sliderIndex - 1].classList.add('slideInDown');
               items[sliderIndex - 1].classList.remove('slideInRight');
                items[sliderIndex - 1].classList.add('slideInLeft');
          },3000)    
         } else{
             paused = setInterval(function(){
              changeSlides(1);
               items[sliderIndex - 1].classList.remove('slideInRight');
                items[sliderIndex - 1].classList.add('slideInLeft');
          },3000)  
         }
         
      }

      activatedSlider();

      items[0].parentNode.addEventListener('mouseenter',() => {
          clearInterval(paused);
      })
      
       items[0].parentNode.addEventListener('mouseleave',() => {
          activatedSlider();
      })
  }


  export default sliders;