const btn = document.querySelectorAll("#btn");

const span = document.querySelector("span");

for (let bt in btn){
console.log(bt)
}

let value = 0;

btn[0].addEventListener('click', function (){
    value = value + 1;
    span.innerHTML = `${value}`;
});

btn[1].addEventListener('click', function () {
    value = 0;
    span.innerHTML = value;
});

btn[2].addEventListener('click', function (){
    value = value - 1;
    span.innerHTML = `${value}`;
});
