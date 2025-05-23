export default function decorate(block) {
  // 1. Add column classes (original unchanged behavior)
  const cols = [...block.firstElementChild.children];
  block.classList.add(`columns-${cols.length}-cols`);

  // 2. Process rows and columns
  [...block.children].forEach((row) => {
    [...row.children].forEach((col) => {
      // 3. Original image column handling (unchanged)
      const pic = col.querySelector('picture');
      if (pic) {
        const picWrapper = pic.closest('div');
        if (picWrapper && picWrapper.children.length === 1) {
          picWrapper.classList.add('columns-img-col');
          // 3a. Accessibility fix: Ensure images have alt text
          const img = pic.querySelector('img');
          if (img && !img.hasAttribute('alt')) {
            const fileName = img.src.split('/').pop().split('.')[0];
            img.setAttribute('alt', fileName.replace(/[-_]/g, ' '));
          }
        }
      }

      // 4. Scene7 URL handling (behavior-preserving enhancements)
      const links = col.querySelectorAll('a[href*="scene7.com"]');
      links.forEach((link) => {
        const url = link.href;
        const container = document.createElement('div');
        container.classList.add('scene7-container');

        // 4a. SEO & Accessibility improvements:
        const altText = link.textContent.trim()
                       || link.getAttribute('title')
                       || link.querySelector('img')?.alt
                       || 'Descriptive content';

        // 4b. Original URL transformation (unchanged)
        const optimizedUrl = `${url.split('?')[0]}?fit=constrain&wid=1200&hei=630`;

        container.innerHTML = `
          <img src="${optimizedUrl}" 
               class="scene7-image" 
               loading="lazy" 
               alt="${altText.replace(/"/g, '&quot;')}"
               width="1200" 
               height="630"
               aria-hidden="${!altText || altText === 'Descriptive content' ? 'true' : 'false'}">
        `;

        // 4c. Original replacement logic (unchanged)
        link.parentNode.replaceChild(container, link);
        col.classList.add('columns-scene7-col');
      });
    });
  });

  // 5. Non-visual accessibility enhancement
  if (!block.getAttribute('role')) {
    block.setAttribute('role', 'region');
    block.setAttribute('aria-label', 'Content columns');
  }
}
