const mySlider1 = document.getElementById('calculator-slider-1');
const mySlider2 = document.getElementById('calculator-slider-2');

function slider(slider) {
    const percent = (slider.value / slider.max)*100;
    slider.style.background = `linear-gradient(to right, #2980BA ${percent}%, #E9E9E9 ${percent}%)`;
}

mySlider1.addEventListener('input', () => slider(mySlider1));

slider(mySlider1);

mySlider2.addEventListener('input', () => slider(mySlider2));

slider(mySlider2);