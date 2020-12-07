const slider = document.querySelector("input");
const bar = document.querySelector(".progress-bar");
const thumb = document.querySelector(".thumb");

slider.oninput = () =>{
    let value = slider.value;
    thumb.style.left = value + '%';
    bar.style.width = value + '%';
}