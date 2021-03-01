export default function Projects(projects) {
  return `
  <section id="projects">
    <div class="information-container">
      <h1>Projects</h1>
      <div class="filter">
        <label>
          <input type="radio" name="filter" value="all" checked>
          All
        </label>
        <label>
          <input type="radio" name="filter" value="bsa">
          BSA App
        </label>
        <label>
          <input type="radio" name="filter" value="unity">
          Breakout Game
        </label>
      </div>
      <div class="project-items-container">
        <p>
          ${ProjectItems(projects)}
        </p>
      </div>
    </div>
  </section>
  `;
}

export function ProjectItems(projects) {
  if (projects.length > 1) {
    return `
    <p>
      <p>
      ${projects.map(project => `
      <a href="?project=${project.id}">${project.title}</a><br>
      `).join('')}
      </p>
    </p>
    `;
  } else {
    return `
    <p>
      <p>
        <a href="?project=${projects.id}">${projects.title}</a>
      </p>
    </p>
    `;
  }
}
