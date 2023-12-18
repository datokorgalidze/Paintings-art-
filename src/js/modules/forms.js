 
        function forms () {
            const form = document.querySelectorAll('form'),
                inputs = document.querySelectorAll('input'),
                inputsForPhone = document.querySelectorAll('input[name="user_phone"]'),
                upload = document.querySelectorAll('[name="upload"]');


                inputsForPhone.forEach(elem => {
                    elem.addEventListener('input', () => {
                    elem.value = elem.value.replace(/[^\d+]/g, '');
                    })
                })
                
                
            const message = {
            loading:'Loading...',
            success:'Thank you! We will contact you soon',
            failure:'Something went wrong',
            spiner:'assets/img/spinner.gif',
            ok:'assets/img/ok.png',
            fail:'assets/img/fail.png'   
            };

            const path = {
                design:'assets/server.php',
                qestions:'assets/questions.php'
            }

            const clearInputs = () => {
                inputs.forEach(item => {
                item.value = '';
                })
                upload.forEach(elem => {
                  elem.previousElementSibling.textContent = 'Select a file';
                })
            }


            upload.forEach(elem => {
                elem.addEventListener('input', () => {
                    console.log(elem.files[0]);
                    let dots;
                    const arr = elem.files[0].name.split('.');
                    arr[0].length > 9 ? dots = '...' : dots = '.';
                    const name = arr[0].substring(0,9) + dots +  arr[1];
                    elem.previousElementSibling.textContent = name;
                })  
            })
            
            const postData = async (url,data) => {
                let res = await fetch(url,{
                method:'POST',
                body:data
                })
                return await res.text(); 
            }
            
            form.forEach(item => {
            item.addEventListener('submit', (e) => {
                e.preventDefault();

                const statusMessage = document.createElement('div');
                      statusMessage.classList.add('status');
                      item.parentNode.appendChild(statusMessage);
                      item.classList.add('animated', 'fadeOutUp');
                      setTimeout(() => {
                         item.style.display = 'none';
                      },400)

                const statusImg = document.createElement('img');
                      statusImg.setAttribute('src', message.spiner);
                      statusImg.classList.add('animated', 'fadeInUp');
                      statusMessage.appendChild(statusImg);
                    
                const textMessage = document.createElement('div');
                      textMessage.textContent = message.loading;
                      statusMessage.appendChild(textMessage);    

                const formData = new FormData(item);
                let api;
                    item.closest('.popup-design') || item.classList.contains('form-calc') ? api = path.design : api = path.qestions;
                    console.log(api);

                postData( api, formData )
                    .then (res => {
                        console.log(res);
                        textMessage.textContent = message.success;
                        statusImg.setAttribute('src', message.ok)
                    }).catch(() => {
                        textMessage.textContent = message.failure;
                        statusImg.setAttribute('src', message.fail)
                    })
                        .finally(() => {
                        clearInputs()
                        setTimeout(() => {
                            statusMessage.remove();
                            item.style.display = 'block';
                            item.classList.remove('fadeOutUp');
                            item.classList.add('fadeInUp');
                            item.reset();
                        },5000)
                        });
                    
               })
            })
        }


        export default forms;
        