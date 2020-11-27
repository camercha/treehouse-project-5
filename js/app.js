baguetteBox.run('.gallery');


let input;
let a;
let i;
let filter;
let data;


document.getElementById('searchbar').addEventListener('keyup', myFunction);
function myFunction() {
    input = document.getElementById('searchbar');
    filter = input.value.toLowerCase();
    data = document.getElementsByTagName('a');


    for (i = 0; i < data.length; i++) {
        a = data[i].getAttribute("data-caption");
        if (a.toLowerCase().indexOf(filter) > -1) {
            data[i].style.display = "";
        } else {
            data[i].style.display = "none"
        }
    }



}





