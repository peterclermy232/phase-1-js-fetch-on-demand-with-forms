const init = () => {
    const inputForm = document.querySelector('form');

    inputForm.addEventListener('submit', (event)=>{
        event.preventDefault();

        const input = document.querySelector('input#searchByID');

        console.log(input.value);
    });
  
}

document.addEventListener('DOMContentLoaded', init);