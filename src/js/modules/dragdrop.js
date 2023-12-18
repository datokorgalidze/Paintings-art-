
    const dragDrop = () => {
          const inputFiles = document.querySelectorAll('[name="upload"]');


          ['dragenter', 'dragleave', 'dragover', 'drop'].forEach(eventName => {
             inputFiles.forEach(input => {
                input.addEventListener(eventName, preventDefaults, false);
             })

          })
         
        function preventDefaults (e){
            e.preventDefault();
            e.stopPropagation();
        }


        function highlight (elem){
            elem.closest('.file_upload').style.border = '5px solid yellow';
            elem.closest('.file_upload').style.backgroundColor = "rgba(0,0,0, .7)";
        }

        function unhighlight (elem){
             elem.closest('.file_upload').style.border = "none";
             elem.closest('.file_upload').style.backgroundColor = "#ededed";
        }


        ['dragenter', 'dragover'].forEach(eventName => {
            inputFiles.forEach(input => {
               input.addEventListener(eventName, ()=> highlight(input), false);
            });

         });


         ['dragleave', 'drop'].forEach(eventName => {
            inputFiles.forEach(input => {
               input.addEventListener(eventName, ()=> unhighlight(input), false);
            })

         })
           
        inputFiles.forEach(input => {
            input.addEventListener('drop', (e) => {
                e.preventDefault();
                console.log('File dropped');
                const droppedFiles = e.dataTransfer.files;
                if (droppedFiles.length > 0) {
                  let dots;  
                  const arr = droppedFiles[0].name.split('.');
                  arr[0].length > 6 ? dots = "..." : dots = '.';
                  const name = arr[0].substring(0, 6) + dots + arr[1];
                  console.log('File name:', name);
                  input.previousElementSibling.textContent = name;
                  console.log('Updated element with file name:', input.previousElementSibling);
                }
              });
              
        })
          

    }


    export default dragDrop;