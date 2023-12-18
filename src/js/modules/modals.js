  
   const modals = () => {
    let btnPressed = false;
    function modalBind(triggerSelector,selectorModal,selectorClose,destroy = false){
       const trigger = document.querySelectorAll(triggerSelector),
              modal = document .querySelector(selectorModal),
              close = document.querySelector(selectorClose),
              allModals = document.querySelectorAll('[data-modal]'),
              scroll = calcScroll();

       trigger.forEach(item =>{
           item.addEventListener('click',(e) =>{
               if(e.target){
                  e.preventDefault();
               }

               btnPressed = true;

               if(destroy){
                 item.remove();
               }

               allModals.forEach(item => {
                   item.style.display ='none';
                   item.classList.add('animated','fadeIn');
               })
    
               modal.style.display = 'block';
               document.body.style.overflow = 'hidden';
               document.body.style.marginRight = `${scroll}px`;
                   
            });
       })

       close.addEventListener('click', () => {
           allModals.forEach(item => {
               item.style.display ='none';
           }) 
          modal.style.display = 'none';
          document.body.style.overflow = '';
          document.body.style.marginRight = `0px`; 
       })

       modal.addEventListener('click', (e) => {
           if(e.target === modal){
               allModals.forEach(item => {
                   item.style.display ='none';
                   
               })

               modal.style.display = 'none';
               document.body.style.overflow = '';
               document.body.style.marginRight = `0px`;   
           }
       });
    }

    function showModalByTime(selector,time){
         setTimeout(function(){
           let display;
           document.querySelectorAll('[data-modal]').forEach(item => {
              if(getComputedStyle(item).display !== 'none')
               display = 'block';
           });

           if(!display){
            document.querySelector(selector).style.display ='block';
            document.body.style.overflow = 'hidden';
            let scroll = calcScroll();
            document.body.style.marginRight = `${scroll}`; 
           }   
         },time)
    }
    
    function openByScroll(selector){
          window.addEventListener('scroll', () =>{
            if(!btnPressed && (window.scrollY + document.documentElement.clientHeight >= 
                document.documentElement.scrollHeight)) {
                    document.querySelector(selector).click();
                } 
          });
    }


    function calcScroll(){
        let div = document.createElement('div');

        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();

        return scrollWidth;
    }
 

      modalBind('.button-design',' .popup-design', ' .popup-design .popup-close');
      modalBind('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close' );
      modalBind('.fixed-gift','.popup-gift', '.popup-gift .popup-close', true);
      openByScroll('.fixed-gift');
      showModalByTime('.popup-consultation',60000);
    //   modalBind('.burger',  '.burger-menu', '.burger-menu .popup-close');     
};

export default modals;