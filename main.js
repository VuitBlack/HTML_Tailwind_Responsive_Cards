const submitBtn = document.querySelector('#submit-btn');
const ratingCard = document.querySelector('#rating');
const gratitudeCard = document.querySelector('#gratitude');
const circlesBtn = document.querySelectorAll('.circle');
const scoreElement = document.querySelector('#score');

circlesBtn.forEach(circleBtn => {
    circleBtn.addEventListener('click', (e) => {
        //Resetear el estilo de todos los botones
        circlesBtn.forEach(circleBtn =>{
            circleBtn.classList.remove('bg-Gris-Claro');
            circleBtn.classList.remove('text-Blanco');
        })

        //Cambio el estilo del boton seleccionado
        circleBtn.classList.add('bg-Gris-Claro');
        circleBtn.classList.add('text-Blanco');

        //Actualiza el valor del score en el HTML deontro de span
        scoreElement.innerText = e.target.innerText;

        //Activar el boton de submit
        submitBtn.addEventListener('click', () => {
            ratingCard.classList.add('hidden');
            gratitudeCard.classList.remove('hidden');
        });
    })
});

