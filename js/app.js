baguetteBox.run('.gallery');




let input;
let a;
let i;
let textValue;


document.getElementById('searchbar').addEventListener('keyup', myFunction);
function myFunction() {
    input = document.getElementById('searchbar');
    input.value = input.value.toLowerCase();
    // href = document.getElementsByClassName("gallery")
    // data = href.getElementsByTagName('a');
    console.log(input.value);


    // for (i = 0; i < data.length; i++) {
    //     a = data[i].getAttribute("data-caption")[0];
    //     textValue = a.textContent || a.innerText;
    //     if (textValue.toLowerCase().indexOf(input) > -1) {
    //         data[i].style.display = "";
    //     } else {
    //         data[i].style.display = "none"
    //     }
    // }



}
function myFunction2() {
    let cap = document.getElementsByTagName('a')[0].getAttribute('data-caption');
    cap.value
}



