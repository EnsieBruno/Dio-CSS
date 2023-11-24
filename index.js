document.addEventListener("DOMContentLoaded", function() {
  let radioInputs = document.querySelectorAll('#btn-radio input');
  let sliderBoxes = document.querySelectorAll('.slider-box');

  let currentSlide = 0;

  function showSlide(index) {
    for (let i = 0; i < sliderBoxes.length; i++) {
      sliderBoxes[i].style.display = 'none';
    }
    sliderBoxes[index].style.display = 'block';
  }

  function startSlider() {
    setInterval(function() {
      radioInputs[currentSlide].checked = true;
      showSlide(currentSlide);
      currentSlide++;

      if (currentSlide === radioInputs.length) {
        currentSlide = 0;
      }
    }, 3000); // Altere este valor para ajustar o tempo entre as imagens (em milissegundos)
  }

  startSlider();
});
