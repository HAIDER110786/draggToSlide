const slider = document.querySelector('.slider');
let isMouseDown = false;
let mouseStartPosition;
let amountScrolled;

slider.addEventListener("mousedown",handleDown);
slider.addEventListener("mouseleave",handleLeave);
slider.addEventListener("mouseup",handleUp);
slider.addEventListener("mousemove",handleMove);

function handleDown(e){
    isMouseDown = true;
    mouseStartPosition = e.pageX - slider.offsetLeft;
    this.classList.add('active');
}

function handleLeave(e){
    isMouseDown = false; 
    this.classList.remove('active');
}

function handleUp(e){
    isMouseDown = false;
    this.classList.remove('active');
}

function handleMove(e){
    if(!isMouseDown) return;
    e.preventDefault();
    const currentMouseDraggedPosition = e.pageX - slider.offsetLeft;
    scrollAmount = slider.scrollLeft - (currentMouseDraggedPosition - mouseStartPosition);
    slider.scrollLeft = scrollAmount;  
}