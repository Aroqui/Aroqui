function renderPage(data) {
  const projectEl = document.getElementById('project');
  if (!projectEl || !data) return;

  const metaItems = data.meta
    .map(
      (item) => `
      <div class="meta__item">
        <span class="meta__label">${item.label}</span>
        <span class="meta__value">${item.value}</span>
      </div>
    `,
    )
    .join('');

  const sectionsHtml = data.sections
    .map(
      (section) => `
      <section class="case-section" id="${section.id}">
        <h3 class="case-section__title">${section.title}</h3>
        <div class="case-section__body">
          ${section.paragraphs.map((p) => `<p>${p}</p>`).join('')}
        </div>
        ${section.media ? `<div class="case-section__media" role="img" aria-label="Placeholder media"></div>` : ''}
      </section>
    `,
    )
    .join('');

  const tocHtml = data.sections
    .map((section) => `<li><a href="#${section.id}">${section.title}</a></li>`)
    .join('');

  projectEl.innerHTML = `
    <section class="project-hero container">
      <p class="eyebrow">${data.eyebrow || 'Case Study'}</p>
      <h1 class="project-hero__title">${data.title}</h1>
      <p class="project-hero__subtitle">${data.subtitle}</p>
      <div class="meta">
        ${metaItems}
      </div>
      <div class="project-intro">
        <p>${data.intro}</p>
        <a class="project-cta" href="${data.cta.href}" target="_blank" rel="noreferrer">${data.cta.label}</a>
      </div>
    </section>

    <aside class="toc container" aria-label="Table of contents">
      <p class="toc__title">Contents</p>
      <ol class="toc__list">${tocHtml}</ol>
    </aside>

    <section class="case container">
      ${sectionsHtml}
    </section>
  `;
}

// Render if pageData exists in the page
if (typeof pageData !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => renderPage(pageData));
}
