const slider = document.querySelector(".slider1")
const innerslider = document.querySelector(".slider-inner")

let pressed = false;
let startX;
let x;

slider.addEventListener("mousedown", (e)=>{
    pressed = true;
    startX = (e.pageX || e.touches[0].pageX) - innerslider.offsetLeft;
    slider.style.cursor = "grabbing"
    console.log(innerslider.offsetLeft);
});
slider.addEventListener("touchstart", (e)=>{
    pressed = true;
    startX = (e.pageX || e.touches[0].pageX) - innerslider.offsetLeft;
    slider.style.cursor = "grabbing"
    console.log('keni prek ekranin');
   
});


slider.addEventListener('mouseenter', ()=>{
    slider.style.cursor = "grab"
})

slider.addEventListener('mouseup', ()=>{
    slider.style.cursor = "grab"
})

window.addEventListener('mouseup', ()=>{
    pressed = false;
})
window.addEventListener('touchend', ()=>{
    pressed = false;
})

slider.addEventListener('touchmove', (e)=>{
    if(!pressed) return;
    e.preventDefault();

    x = e.offsetX || e.touches[0].pageX;

    innerslider.style.left = `${x - startX}px`;
    checkBoundary()
})

slider.addEventListener('mousemove', (e)=>{
    if(!pressed) return;
    e.preventDefault();

    x = e.offsetX;

    innerslider.style.left = `${(x - startX)}px`;
    checkBoundary()
})

function checkBoundary(){
    let outer = slider.getBoundingClientRect();
    let inner = innerslider.getBoundingClientRect();

    if(parseInt(innerslider.style.left) > 0){
        innerslider.style.left = "0px"
    } else if(inner.right < outer.right){
        innerslider.style.left = `-${inner.width - outer.width}px`
    }
    
}
