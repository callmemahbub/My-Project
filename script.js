humbarger = document.querySelector(".humbarger");
humbarger.onclick = function(){
    navBar = document.querySelector("nav");
    navBar.classList.toggle("active");
}
window.addEventListener('scroll',reveal);
function reveal(){
    var reveal= document.querySelectorAll('.reveal');
    for(var i = 0; i< reveal.length; i++){
        var windowheight = window.innerHeight;
        var revealsto = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
    }
}