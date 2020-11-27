baguetteBox.run('.gallery');




let input;
let a;
let i;
let textValue;
let title;


document.getElementById('searchbar').addEventListener('keyup', myFunction);
function myFunction() {
    input = document.getElementById('searchbar');
    filter = input.value.toLowerCase();
    a = document.getElementsByTagName('a');
    console.log(input.value);


    for (i = 0; i < a.length; i++) {
        title = a[i].getAttribute('data-caption');
        if (title.toLowerCase().indexOf(filter) > -1) {
            a[i].style.display = '';
        } else {
            a[i].style.display = 'none';
        }
    }




}


