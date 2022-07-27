// const listItems = document.querySelectorAll('.list-item')
// const lists = document.querySelectorAll('.list')
const mamaDiv = document.querySelector('.lists')

let draggedItem = null; 


   mamaDiv.addEventListener('dragstart', function (e) {
      draggedItem = e.target;

      e.dataTransfer.setData('text/plain', draggedItem)
      e.dataTransfer.effectAllowed='move'
      setTimeout(function () {
          e.target.style.display = 'none'

      },0)

  });



    mamaDiv.addEventListener('dragend', function (e) {
        setTimeout(function () {
            e.target.style.display = 'block'
            draggedItem = null;
        },0)

    });
///////////////////////////////////////////////////////////////////////

    mamaDiv.addEventListener('dragenter', function(e) {
        if (e.dataTransfer.types[0] === 'text/plain') {
            e.preventDefault();
          }
        
    });


    mamaDiv.addEventListener('dragover', function(e) {
        if (e.dataTransfer.types[0] === 'text/plain') {
            e.preventDefault();
          }
          e.target.closest('.lists').classList.add('dragenter')

    });


    mamaDiv.addEventListener('dragleave', function(e) {
        if (e.relatedTarget.closest('.list-item') !== draggedItem)
        e.target.closest('.lists').classList.remove('dragenter')

      })
  



    

    mamaDiv.addEventListener('drop', function(e) {
        e.preventDefault();
            if ( e.target !== e.target.closest('.list-item')) {
             e.target.append(draggedItem)
             e.target.closest('.lists').classList.add('drop')

            }
            



    });
    
