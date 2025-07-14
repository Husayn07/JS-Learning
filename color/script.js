let colors = ["red", "orange", "yellow", "green", "blue", 
"pink", "purple"];
let color = 0;
const body = document.getElementById("bgColor");

body.addEventListener('click', function (){
    
    body.style.backgroundColor = colors[color]
    let text = document.getElementById('text');
    text.textContent = `${colors[color]}`
    if (color < (colors.length-1)) {
        color++
    } else(color = 0);
   
});


