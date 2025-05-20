export default async function decorate(block) {
  const container = block.parentElement.parentElement;
  const defaultContentWrappers = container.querySelectorAll('.default-content-wrapper');
  const lastWrapper = defaultContentWrappers[defaultContentWrappers.length - 1];
  const featuredProductsWrapper = container.querySelector('.featured-products-wrapper .featured-products');
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
      const productDivs = featuredProductsWrapper.querySelectorAll(':scope > div');
      if (productDivs.length > 2) {
        for (let i = 2; i < productDivs.length; i += 1) {
          productDivs[i].style.display = 'none';
        }
      }
      showMoreParagraph.addEventListener('click', () => {
        const isExpanded = symbolSpan.textContent.includes('-');
        if (isExpanded) {
          symbolSpan.textContent = ' +';
          if (productDivs.length > 2) {
            for (let i = 2; i < productDivs.length; i += 1) {
              productDivs[i].style.display = 'none';
            }
          }
        } else {
          symbolSpan.textContent = ' -';
          productDivs.forEach((div) => {
            div.style.display = '';
          });
        }
      });
    }
  }
}
