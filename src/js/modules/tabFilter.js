
   const tabFilter = () => {
      const menu = document.querySelector('.portfolio-menu'),
            items = menu.querySelectorAll('li'),
            btnAll = menu.querySelector('.all'),
            btnLovers = menu.querySelector('.lovers'),
            btnChef = menu.querySelector('.chef'),
            btnGirl = menu.querySelector('.girl'),
            btnGuy = menu.querySelector('.guy'),
            wrapper = document.querySelector('.portfolio-wrapper'),
            markAll = wrapper.querySelectorAll('.all'),
            markGirl = wrapper.querySelectorAll('.girl'),
            markLovers = wrapper.querySelectorAll('.lovers'),
            markChef = wrapper.querySelectorAll('.chef'),
            markGuy = wrapper.querySelectorAll('.guy');


        function filter (tabType){
            markAll.forEach(mark => {
                mark.style.display = 'none';
                mark.classList.remove('animated', 'fadeIn');

            });

            if(tabType){
                tabType.forEach(tab => {
                tab.style.display = 'block';
                tab.classList.add('animated', 'fadeIn');  
                })
            }
        }
           
        btnAll.addEventListener('click',() => {
            filter(markAll);
        })


        btnLovers.addEventListener('click', () =>{
            filter(markLovers);
        })

        btnChef.addEventListener('click', () =>{
            filter(markChef);
        })

        btnGirl.addEventListener('click', () =>{
            filter(markGirl);
        })
        
        btnGuy.addEventListener('click', () =>{
            filter( markGuy );
        })


        menu.addEventListener('click',(e) => {
            let target = e.target;

            if(target && target.tagName == 'LI'){
                items.forEach(btn => btn.classList.remove('active'));
                target.classList.add('active');
            }
        })
        
   }


   export default tabFilter;