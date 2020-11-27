baguetteBox.run('.gallery');







document.getElementById('searchbar').addEventListener('keyup', myFunction);
function myFunction() {
    var x = document.getElementById('searchbar');
    x.value = x.value.toUpperCase();
    console.log(x.value)


}



