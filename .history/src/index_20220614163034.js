const init = () => {
    const inputForm = document.querySelector('form');

    inputForm.addEventListener('submit', (event)=>{
        event.preventDefault();

        const input = document.querySelector('input#searchByID');

        console.log(input.value);

        fetch('http://localhost:3000/movies')
            .then(respon)
    });
  
}

document.addEventListener('DOMContentLoaded', init);