document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".carousel");
  const items = document.querySelectorAll(".carousel-item");
  const prevButton = document.getElementById("prev");
  const nextButton = document.getElementById("next");
  const totalItems = items.length;
  let currentIndex = 0;

  // Define quantos itens devem ser exibidos de acordo com a largura da tela
  function getVisibleItems() {
    if (window.innerWidth <= 800) {
      return 1;
    } else if (window.innerWidth <= 1150) {
      return 2;
    } else {
      return 3;
    }
  }

  function updateCarousel() {
    const visibleItems = getVisibleItems();
    const offset = -currentIndex * (100 / visibleItems);
    carousel.style.transform = `translateX(${offset}%)`;
  }

  function nextSlide() {
    const visibleItems = getVisibleItems();
    if (currentIndex < totalItems - visibleItems) {
      currentIndex++;
    } else {
      currentIndex = 0; // Retorna ao início
    }
    updateCarousel();
  }

  function prevSlide() {
    const visibleItems = getVisibleItems();
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = totalItems - visibleItems; // Vai para a última posição válida
    }
    updateCarousel();
  }

  nextButton.addEventListener("click", nextSlide);
  prevButton.addEventListener("click", prevSlide);

  setInterval(nextSlide, 5000); // Avança automaticamente a cada 5 segundos

  // Atualiza a exibição ao redimensionar a janela
  window.addEventListener("resize", updateCarousel);
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

/* ENBEDING CONTATO */
(function (C, A, L) {
  let p = function (a, ar) {
    a.q.push(ar);
  };
  let d = C.document;
  C.Cal =
    C.Cal ||
    function () {
      let cal = C.Cal;
      let ar = arguments;
      if (!cal.loaded) {
        cal.ns = {};
        cal.q = cal.q || [];
        d.head.appendChild(d.createElement("script")).src = A;
        cal.loaded = true;
      }
      if (ar[0] === L) {
        const api = function () {
          p(api, arguments);
        };
        const namespace = ar[1];
        api.q = api.q || [];
        if (typeof namespace === "string") {
          cal.ns[namespace] = cal.ns[namespace] || api;
          p(cal.ns[namespace], ar);
          p(cal, ["initNamespace", namespace]);
        } else p(cal, ar);
        return;
      }
      p(cal, ar);
    };
})(window, "https://app.cal.com/embed/embed.js", "init");
Cal("init", "discoverycall", { origin: "https://cal.com" });

Cal.ns.discoverycall("inline", {
  elementOrSelector: "#my-cal-inline",
  config: { layout: "month_view", theme: "light" },
  calLink: "protomind/discoverycall",
});

Cal.ns.discoverycall("ui", {
  theme: "light",
  cssVarsPerTheme: { light: { "cal-brand": "#3c5e8b" } },
  hideEventTypeDetails: false,
  layout: "month_view",
});
