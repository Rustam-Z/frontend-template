var nav = document.querySelector('nav.homepage');
  
window.addEventListener('scroll', function () {
    if (window.pageYOffset > 100) {
        nav.classList.add('bg-blue', 'shadow');
        nav.classList.add('navbar-dark');        
    } else {
        nav.classList.remove('bg-blue', 'shadow');
        nav.classList.add('navbar-dark');
    }
});


// var div = document.querySelector("nav"),
//     toggle = false;
    
// div.onclick = function() {
//     toggle = !toggle;                                     // invert toggle
//     div.style.background = toggle? "#0077B6": "";  // change background color depending on the value of toggle
// }
