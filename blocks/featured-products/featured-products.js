/* eslint-disable no-lonely-if */
export default async function decorate(block) {
  const container = block.parentElement.parentElement;
  const defaultContentWrappers = container.querySelectorAll('.default-content-wrapper');
  const lastWrapper = defaultContentWrappers[defaultContentWrappers.length - 1];
  const featuredProductsWrapper = container.querySelector('.featured-products-wrapper .featured-products');

  // Track expanded state across viewport changes
  let isExpanded = false;

  // Function to apply appropriate display based on viewport and expanded state
  const applyDisplayState = () => {
    const isCarouselViewport = window.innerWidth >= 1024 && window.innerWidth <= 1200;
    const productDivs = featuredProductsWrapper.querySelectorAll(':scope > div');

    if (isCarouselViewport) {
      // In carousel mode, all items are visible regardless of expanded state
      productDivs.forEach((div) => {
        div.style.display = '';
      });
    } else {
      // In non-carousel mode, apply expanded/collapsed state
      if (isExpanded) {
        // Show all products
        productDivs.forEach((div) => {
          div.style.display = '';
        });
      } else {
        // Show only first two products
        productDivs.forEach((div, index) => {
          div.style.display = index < 2 ? '' : 'none';
        });
      }
    }
  };

  // Function to handle carousel navigation
  const setupCarousel = () => {
    // Check if we're in the carousel viewport range
    const isCarouselViewport = window.innerWidth >= 1024 && window.innerWidth <= 1200;

    if (isCarouselViewport) {
      // Create carousel navigation if it doesn't exist
      if (!container.querySelector('.carousel-navigation')) {
        // Make sure all product divs are visible in carousel mode
        const productDivs = featuredProductsWrapper.querySelectorAll(':scope > div');
        productDivs.forEach((div) => {
          div.style.display = '';
        });

        // Create navigation container
        const carouselNav = document.createElement('div');
        carouselNav.className = 'carousel-navigation';

        // Create previous button
        const prevBtn = document.createElement('button');
        prevBtn.className = 'carousel-btn prev';
        prevBtn.setAttribute('aria-label', 'Previous slide');

        // Create next button
        const nextBtn = document.createElement('button');
        nextBtn.className = 'carousel-btn next';
        nextBtn.setAttribute('aria-label', 'Next slide');

        // Add buttons to navigation
        carouselNav.appendChild(prevBtn);
        carouselNav.appendChild(nextBtn);

        // Add navigation to the featured products wrapper
        container.querySelector('.featured-products-wrapper').appendChild(carouselNav);

        // Set up button event listeners
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
      // Remove carousel navigation if we're not in carousel viewport
      const carouselNav = container.querySelector('.carousel-navigation');
      if (carouselNav) {
        carouselNav.remove();
      }

      // Apply the correct show/hide state when leaving carousel mode
      applyDisplayState();
    }

    // Update visibility of show more button based on viewport
    if (lastWrapper) {
      const showMoreParagraph = lastWrapper.querySelector('p.show-more');
      if (showMoreParagraph) {
        showMoreParagraph.style.display = isCarouselViewport ? 'none' : '';
      }
    }
  };

  // Setup show more functionality
  if (lastWrapper && featuredProductsWrapper) {
    const showMoreParagraph = lastWrapper.querySelector('p');
    if (showMoreParagraph && showMoreParagraph.textContent.trim() === 'Show more') {
      // Setup show more button
      const symbolSpan = document.createElement('span');
      symbolSpan.textContent = ' +';
      symbolSpan.style.color = '#006b46';
      symbolSpan.style.fontSize = '1.2em';
      symbolSpan.style.marginLeft = '4px';
      showMoreParagraph.textContent = 'Show more';
      showMoreParagraph.appendChild(symbolSpan);
      showMoreParagraph.classList.add('show-more');

      // Initially collapsed
      isExpanded = false;

      // Apply initial state
      applyDisplayState();

      // Handle show more/less click
      showMoreParagraph.addEventListener('click', () => {
        // Toggle expanded state
        isExpanded = !isExpanded;

        // Update button text and icon
        if (isExpanded) {
          symbolSpan.textContent = ' -';
          showMoreParagraph.textContent = 'Show less';
          showMoreParagraph.appendChild(symbolSpan);
        } else {
          symbolSpan.textContent = ' +';
          showMoreParagraph.textContent = 'Show more';
          showMoreParagraph.appendChild(symbolSpan);
        }

        // Apply the display state based on current viewport and expanded state
        applyDisplayState();
      });
    }
  }

  // Initial setup
  setupCarousel();

  // Re-setup carousel on window resize
  window.addEventListener('resize', setupCarousel);
}
