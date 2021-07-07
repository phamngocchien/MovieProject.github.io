document.addEventListener("DOMContentLoaded", function(){
    //hover moviegenre-list
    var moviegenreActive = document.querySelectorAll('.moviegenre-list-item');
    for (let i = 0; i < moviegenreActive.length; i++) { 
        moviegenreActive[i].onclick = function(){
            for (let j = 0; j < moviegenreActive.length; j++) {
                moviegenreActive[j].classList.remove('moviegenre--underline');
                
            }
            moviegenreActive[i].classList.add('moviegenre--underline');
        }
    }
    //Button: Movies__wrapper-btn
    var moviesBtn = document.querySelectorAll('.Movies__wrapper-btn div');
    for (let i = 0; i < moviesBtn.length; i++) {
        console.log(moviesBtn[i]);
        moviesBtn[i].onclick = function(){
            for (let j = 0; j < moviesBtn.length; j++) {
                moviesBtn[j].classList.remove('btn--white');
            }
            moviesBtn[i].classList.add('btn--white');

        }
        
    }
})

const loader = document.querySelector('.loader');
const app = document.querySelector('.app');
function init(){
    setTimeout(() => {
        loader.style.opacity = 0;
        loader.style.display = 'none';

        app.style.display = "block";
        setTimeout(() => app.style.opacity = 1, 50)
    }, 1000)
}
init();




