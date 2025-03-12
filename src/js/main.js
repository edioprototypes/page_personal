document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".carousel");
  const items = document.querySelectorAll(".carousel-item");
  const prevButton = document.getElementById("prev");
  const nextButton = document.getElementById("next");
  const totalItems = items.length;
  let currentIndex = 0;

  function updateCarousel() {
    const offset = -currentIndex * (100 / 3); // Move a cada 1/3 da largura total
    carousel.style.transform = `translateX(${offset}%)`;
  }

  function nextSlide() {
    if (currentIndex < totalItems - 3) {
      currentIndex++;
    } else {
      currentIndex = 0; // Retorna ao primeiro vídeo quando chegar ao último
    }
    updateCarousel();
  }

  function prevSlide() {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = totalItems - 3; // Volta para a última posição válida
    }
    updateCarousel();
  }

  nextButton.addEventListener("click", nextSlide);
  prevButton.addEventListener("click", prevSlide);

  setInterval(nextSlide, 5000); // Avança automaticamente a cada 5 segundos
});

// Animação do FAQ
const faqArrows = document.querySelectorAll(".questions");

faqArrows.forEach((arrow) => {
  arrow.addEventListener("click", (event) => {
    event.stopPropagation();

    const questionItem = arrow.closest(".questions");
    questionItem.classList.toggle("active");
  });
});
