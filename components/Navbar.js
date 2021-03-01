export default function Navbar(page, items) {
  if (page === 'bsa-project' || page === 'unity-project') {
    return `
    <p class="go-back">
      <a href="index.html">Go Back</a>
    </p>
    `;
  } else {
    return `
    <nav class="navbar navbar-expand-lg navbar-dark">
      <div class="container-fluid">
        <span class="navbar-brand mb-0 h1 animate__animated animate__infinite animate__pulse " href="#">Ronan C. Manvelian</span>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto">
          ${items.map(key =>
          ` <li class="nav-item">
              <a class="nav-link" href="#${key.toLowerCase()}">${key}</a>
            </li>
          `).join('')}
          </ul>
        </div>
      </div>
    </nav>
    `;
  }
}
