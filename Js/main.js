document.addEventListener("DOMContentLoaded", () => {
    const stats = document.querySelectorAll(".stat-value");
  
    function animateStats() {
      stats.forEach(stat => {
        const statTop = stat.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
  
        if (statTop < windowHeight) {
          const value = parseInt(stat.getAttribute("data-value"));
          let currentValue = 0;
  
          const interval = setInterval(() => {
            if (currentValue < value) {
              currentValue++;
              stat.textContent = currentValue;
            } else {
              clearInterval(interval);
            }
          }, 10);
        }
      });
    }
  
    window.addEventListener("scroll", animateStats);
    animateStats(); // Para que las cifras se animen al cargar también
  });
  