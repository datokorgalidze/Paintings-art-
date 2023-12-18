
   const calc = (size, material, options, promo, result) => {
        
        const sizeBlock = document.querySelector(size),
              materialBlock = document.querySelector(material),
              optionsBlock = document.querySelector(options),
              promoBlock = document.querySelector(promo),
              resultBlock = document.querySelector(result),
              btnOrder = document.querySelector('#btn-id');

              let sum = 0;


            function calcfunction(){
                sum = Math.round((+sizeBlock.value) * (+materialBlock.value) + (+optionsBlock.value));
               
                
                if(sizeBlock.value =='' || materialBlock.value == ''){
                    resultBlock.textContent = 'Please select image size or material';

                } else if (promoBlock.value ==='IWANTPOPART'){
                    resultBlock.textContent = Math.round(sum * 0.7);
                }else{

                    resultBlock.textContent = `${sum}$`;
                }

               
                

            }

            btnOrder.addEventListener('click', () => {
                 resultBlock.textContent = '';
                       
            })
              
            sizeBlock.addEventListener('change', calcfunction);
            materialBlock.addEventListener('change', calcfunction);
            optionsBlock.addEventListener('change', calcfunction);
            promoBlock.addEventListener('input', calcfunction); 
            
    }


   export default calc;