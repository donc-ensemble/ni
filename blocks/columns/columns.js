export default function decorate(block) {
  // Add base column classes
  const cols = [...block.firstElementChild.children];
  block.classList.add(`columns-${cols.length}-cols`);

  // Process each row and column
  [...block.children].forEach((row, rowIndex) => {
    [...row.children].forEach((col) => {
      col.setAttribute('role', 'cell');
      if (rowIndex === 0) {
        col.setAttribute('role', 'columnheader');
      }

      const pic = col.querySelector('picture');
      if (pic) {
        const picWrapper = pic.closest('div');
        if (picWrapper && picWrapper.children.length === 1) {
          picWrapper.classList.add('columns-img-col');

          const img = pic.querySelector('img');
          if (img && !img.hasAttribute('alt')) {
            img.setAttribute('alt', '');
          }
        }
      }

      const links = col.querySelectorAll('a[href*="scene7.com"]');
      links.forEach((link) => {
        const url = link.href;
        const container = document.createElement('div');
        container.classList.add('scene7-container');

        const linkText = link.textContent.trim();
        const altText = linkText || 'Dynamic content';

        const optimizedUrl = `${url.split('?')[0]}?fit=constrain&wid=1200&hei=630`;
        container.innerHTML = `
          <img src="${optimizedUrl}" 
            class="scene7-image" 
            loading="lazy" 
            alt="${altText.replace(/"/g, '&quot;')}"
            width="1200"
            height="630"
          >
        `;

        link.parentNode.replaceChild(container, link);
        col.classList.add('columns-scene7-col');
      });
    });
  });

  block.setAttribute('role', 'table');
  block.firstElementChild?.setAttribute('role', 'row');
}
