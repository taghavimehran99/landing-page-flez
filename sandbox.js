// const closeBttn=document.getElementById('close-btn')



// addEventListener('click'(e)=>{

// })


const toggleLink = document.getElementById('mor-faq');
const targetElement = document.getElementById('btn-faq');

toggleLink.addEventListener('click', function(event) {
    event.preventDefault(); 

    
    if (targetElement.classList.contains('highlight')) {
       
        targetElement.classList.remove('highlight');
    } else {
      
        targetElement.classList.add('highlight');
    }
});