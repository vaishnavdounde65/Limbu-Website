document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.custom-navbar');
    const homeSection = document.getElementById('home');
    let lastScrollPosition = 0;
    const homeHeight = homeSection.offsetHeight;

    window.addEventListener('scroll', function() {
        const currentScrollPosition = window.scrollY;
        
        // Show navbar only when in home section or scrolling up
        if (currentScrollPosition <= homeHeight || currentScrollPosition < lastScrollPosition) {
            navbar.classList.remove('hidden');
        } else {
            navbar.classList.add('hidden');
        }
        
        lastScrollPosition = currentScrollPosition;
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const scroller = document.querySelector('.products-scroller');
    const prevBtn = document.querySelector('.btn-scroll.prev');
    const nextBtn = document.querySelector('.btn-scroll.next');
    const itemWidth = 200; // Width + gap of each product card
  
    if (scroller && prevBtn && nextBtn) {
      prevBtn.addEventListener('click', () => {
        scroller.scrollBy({ left: -itemWidth, behavior: 'smooth' });
      });
  
      nextBtn.addEventListener('click', () => {
        scroller.scrollBy({ left: itemWidth, behavior: 'smooth' });
      });
  
      // Hide arrows when at extremes
      const checkArrows = () => {
        prevBtn.style.visibility = scroller.scrollLeft > 0 ? 'visible' : 'hidden';
        nextBtn.style.visibility = scroller.scrollLeft < 
          (scroller.scrollWidth - scroller.clientWidth) ? 'visible' : 'hidden';
      };
  
      scroller.addEventListener('scroll', checkArrows);
      window.addEventListener('resize', checkArrows);
      checkArrows();
    }
  });
