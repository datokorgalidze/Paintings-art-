  
   const burgerMenu = (selectorMenu, selectorBurger,selectorClose) => {
         const menu = document.querySelector(selectorMenu),
               burger = document.querySelector(selectorBurger),
               close = document.querySelector(selectorClose)


            menu.style.display = 'none';
            
            burger.addEventListener('click', () => {

                if(menu.style.display == 'none' && window.screen.availWidth < 993){
                    menu.style.display = 'block';
                    

                }else {
                    menu.style.display = 'none';
                }
            });

            close.addEventListener('click', () => {
                menu.style.display = 'none';
               
            })

            window.addEventListener('resize', () => {
                if(window.screen.availWidth > 992){
                    menu.style.display = 'none';
                   
                }
            })
   }

    
    export default burgerMenu;