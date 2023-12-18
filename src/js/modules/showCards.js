
  const showCards = (trigger, wrraper) => {
        const  btn = document.querySelector(trigger);

          

           const getData = async (url,) => {
            let res = await fetch(url)
            
            if(!res.ok){
              throw new Error(`could not fetch ${url}`);
            } 

            return await res.json(); 
        }


          btn.addEventListener('click', function (){
              getData('assets/db.json')
              .then(res => creatCards(res.styles))
              .catch(error => console.log(error));

              this.remove();
          })


          function creatCards(respons){
              respons.forEach(({src,title,link}) => {
                 
               const card = document.createElement('div');
               card.classList.add('animated' , 'fadeInUp', 'col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
               
               card.innerHTML = ` 
                 
               <div class="styles-block">
                  <img src= ${src} alt>
                  <h4>${title} </h4>
                  <a href="${link}">More details</a>
              </div>

               `;
               
               document.querySelector(wrraper).appendChild(card)

              });
          }
                 
    }

    export default showCards;