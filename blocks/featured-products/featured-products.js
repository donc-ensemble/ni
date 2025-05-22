/* eslint-disable no-lonely-if */
export default async function decorate(block) {
  const container = block.parentElement.parentElement;
  const defaultContentWrappers = container.querySelectorAll('.default-content-wrapper');
  const lastWrapper = defaultContentWrappers[defaultContentWrappers.length - 1];
  const featuredProductsWrapper = container.querySelector('.featured-products-wrapper .featured-products');

  let isExpanded = false;

  const applyDisplayState = () => {
    const isCarouselViewport = window.innerWidth >= 1024 && window.innerWidth <= 1200;
    const productDivs = featuredProductsWrapper.querySelectorAll(':scope > div');

    if (isCarouselViewport) {
      productDivs.forEach((div) => {
        div.style.display = '';
      });
    } else {
      if (isExpanded) {
        productDivs.forEach((div) => {
          div.style.display = '';
        });
      } else {
        productDivs.forEach((div, index) => {
          div.style.display = index < 2 ? '' : 'none';
        });
      }
    }
  };

  const setupCarousel = () => {
    const isCarouselViewport = window.innerWidth >= 1024 && window.innerWidth <= 1200;

    if (isCarouselViewport) {
      if (!container.querySelector('.carousel-navigation')) {
        const productDivs = featuredProductsWrapper.querySelectorAll(':scope > div');
        productDivs.forEach((div) => {
          div.style.display = '';
        });

        const carouselNav = document.createElement('div');
        carouselNav.className = 'carousel-navigation';

        const prevBtn = document.createElement('button');
        prevBtn.className = 'carousel-btn prev';
        prevBtn.setAttribute('aria-label', 'Previous slide');
        const nextBtn = document.createElement('button');
        nextBtn.className = 'carousel-btn next';
        nextBtn.setAttribute('aria-label', 'Next slide');

        carouselNav.appendChild(prevBtn);
        carouselNav.appendChild(nextBtn);

        container.querySelector('.featured-products-wrapper').appendChild(carouselNav);

        prevBtn.addEventListener('click', () => {
          featuredProductsWrapper.scrollBy({
            left: -featuredProductsWrapper.offsetWidth * 0.4,
            behavior: 'smooth',
          });
        });

        nextBtn.addEventListener('click', () => {
          featuredProductsWrapper.scrollBy({
            left: featuredProductsWrapper.offsetWidth * 0.4,
            behavior: 'smooth',
          });
        });
      }
    } else {
      const carouselNav = container.querySelector('.carousel-navigation');
      if (carouselNav) {
        carouselNav.remove();
      }

      applyDisplayState();
    }

    if (lastWrapper) {
      const showMoreParagraph = lastWrapper.querySelector('p.show-more');
      if (showMoreParagraph) {
        showMoreParagraph.style.display = isCarouselViewport ? 'none' : '';
      }
    }
  };

  if (lastWrapper && featuredProductsWrapper) {
    const showMoreParagraph = lastWrapper.querySelector('p');
    if (showMoreParagraph && showMoreParagraph.textContent.trim() === 'Show more') {
      const symbolSpan = document.createElement('span');
      symbolSpan.textContent = ' +';
      symbolSpan.style.color = '#006b46';
      symbolSpan.style.fontSize = '1.2em';
      symbolSpan.style.marginLeft = '4px';
      showMoreParagraph.textContent = 'Show more';
      showMoreParagraph.appendChild(symbolSpan);
      showMoreParagraph.classList.add('show-more');

      isExpanded = false;

      applyDisplayState();

      showMoreParagraph.addEventListener('click', () => {
        isExpanded = !isExpanded;

        if (isExpanded) {
          symbolSpan.textContent = ' -';
          showMoreParagraph.textContent = 'Show less';
          showMoreParagraph.appendChild(symbolSpan);
        } else {
          symbolSpan.textContent = ' +';
          showMoreParagraph.textContent = 'Show more';
          showMoreParagraph.appendChild(symbolSpan);
        }

        applyDisplayState();
      });
    }
  }

  // --- START: Optimized JavaScript for href transformation ---
  const productCards = block.querySelectorAll(':scope > div');

  productCards.forEach((card) => {
    const anchorElement = card.querySelector('div > p > a[href]');

    if (anchorElement) {
      const url = anchorElement.href;
      card.dataset.href = url;

      const divToHide = anchorElement.closest('div');
      if (divToHide) {
        divToHide.classList.add('hidden-link-container');
      }

      card.classList.add('clickable-card');
    }
  });

  block.addEventListener('click', (event) => {
    const clickedCard = event.target.closest('.clickable-card');

    if (clickedCard && clickedCard.dataset.href) {
      window.location.href = clickedCard.dataset.href;
    }
  });
  // --- END: Optimized JavaScript for href transformation ---

  setupCarousel();

  window.addEventListener('resize', setupCarousel);
}
