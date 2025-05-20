export default async function decorate(block) {
  const container = block.parentElement.parentElement;
  const defaultContentWrappers = container.querySelectorAll('.default-content-wrapper');
  const lastWrapper = defaultContentWrappers[defaultContentWrappers.length - 1];
  if (lastWrapper) {
    const showMoreParagraph = lastWrapper.querySelector('p');
    if (showMoreParagraph && showMoreParagraph.textContent.trim() === 'Show more') {
      showMoreParagraph.classList.add('show-more');
    }
  }
}
