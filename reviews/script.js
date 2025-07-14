import {person} from "./person.js";

const btns = document.querySelectorAll("#btn");

const image = document.getElementById('image');
const name = document.getElementById("name");
const about = document.getElementById('about');


let count = 0;

//render html content

function render(count) {
   image.src = person[count].imageUrl;
    name.textContent = person[count].name;
    about.textContent = person[count].about;
}

window.addEventListener('DOMContentLoaded', function (){
   render(count);
   count++;
})

btns[0].addEventListener('click', function () {
   render(count);
    count++;
   if(count > person.length -1){
      count = 0;
   }
});

btns[2].addEventListener('click', function () {
   render(count);
    count--;
   if(count < 0){
      count = person.length - 1;
   }
});
