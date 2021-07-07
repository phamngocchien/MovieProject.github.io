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
})





