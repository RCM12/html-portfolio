function renderOverallContainerBeginning() {
  return '<div class="overall-container">'
}

function renderOverallContainerEnd() {
  return '</div>'
}

function renderAboutSectionContainerBeginning(about) {
  return `
  <section id="${about.toLowerCase()}">
    <div class="container-fluid">
  `;
}

function renderAboutSectionContainerEnd() {
  return `
    </div>
  </section>
  `;
}

function renderSpecifiedProject(project) {
  if (project === 'bsa-project') {
    return `
    <section class="project-description">
      <h2>Scout Symposium: A BSA-Centered Social and Informational App</h2>
      <p>This project is still in development; the social features have not yet been implemented.</p>
      <p>Scout Symposium is an iOS app that includes both a social and informational component.
         The informational component focuses on the history of the BSA and as well as
         information about merit badges, ranks, leadership positions, popular campgrounds,
         and more. The social component, on the other hand, allows users to create their own accounts
         and interact with others inside and outside of their troop. Users can indicate their troop's
         location via Google Maps and contribute to their troop's Scout Symposium account.
      </p>
    </section>
    `;
  } else if (project === 'unity-project') {
    return `
    <section class="project-description">
      <h2>Paddle Ninja: A 2D Breakout-Style Game With Controller Support</h2>
      <p>
        Paddle Ninja is a 2D Breakout-style game in which the player controls a paddle and attempts to break bricks with one or more
        endlessly-moving steel balls. I created it using the Unity game engine and the C# programming language. I plan to add more features to the
        game in the future.
      </p>
      <p>
        In its current stage, the game consists of the following features:<br>
        <ul class="game-features">
          <li>A variety of screens including a main menu, an options menu, and a progress menu</li>
          <li>Eight different collectibles, which appear with a random chance upon breaking a brick and alter one of the following:</li>
          <ul>
            <li>The behavior of the ball(s) currently in play</li>
            <li>The player-controlled paddle</li>
          </ul>
          <li>Five different brick types, each with varying strength and difficulty to break, one of which is unbreakable and does not count towards
            a level's brick count</li>
          <li>A total of five heart containers per level, each representing one player life; the player starts with three at the beginning of each level
            but can gain (or lose!) more by collecting life-related collectibles</li>
        </ul>
      </p>
      <p>
        I created original sprites for the ball, paddle, bricks, hearts (player lives), and collectibles. I enjoyed being able to mesh programming and pixel
        art into an original game.
      </p>
      <p>
        I've been passionate about game design for as long as I can remember. I felt that creating this game would help me gain a better understanding
        of the game development process and object-oriented programming.
      </p>
    </section>
    `;
  }
}

function renderNavbar(page, items) {
  if (page === 'bsa-project' || page === 'unity-project') {
    return `
    <p class="go-back">
      <a href="../index.html">Go Back</a>
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

function renderMainPage(data) {
  document.querySelector('.overall-container').innerHTML = `
    ${renderOverallContainerBeginning()}
    ${renderAboutSectionContainerBeginning(Object.keys(data)[0])}
    ${renderNavbar('main', Object.keys(data))}
    ${renderAbout(data.About)}
    ${renderAboutSectionContainerEnd()}
    ${renderNews(data.News, Object.keys(data)[1])}
    ${renderProjects(data.Projects)}
    ${renderOverallContainerEnd()}
  `;
}

function renderProjectPage(project) {
  document.querySelector('.overall-container').innerHTML = `
    ${renderNavbar(project, null)}
    ${renderSpecifiedProject(project)}
  `;
}

function renderAbout(about) {
  return `
  <div class="about-container information-container container-fluid">
    <div class="row justify-content-lg-center">
      <div class="profile-column col-lg-auto">
        <img class="profile-pic" src="assets/${about.photo}" alt="Ronan Picture">
      </div>
      <div class="col-lg-7">
        <p>
          <strong>${about.title}</strong><br>
          Email: manvelia@bc.edu</br>
          <a href="https://linkedin.com/in/manvelian" target="">
            <i class="fab fa-linkedin"></i>
          </a> |
          <a href="https://github.com/RCM12">
            <i class="fab fa-github"></i>
          </a>
        </p>
        <p>
          Ronan C. Manvelian is a junior at Boston College majoring in Computer Science. He is a
          returning teaching assistant for the CSCI1101 course taught by Professor Naomi Bolotin.
          He also occassionally works as a lifeguard for campus recreation at the Margot Connell
          Recreation Center. His most notable projects include a social and informational iOS app
          pertaining to the Boy Scouts of America, and a 2D Breakout-style game created using the
          Unity game engine and the C# programming language.
        </p>
      </div>
    </div>
  </div>
  `;
}

function renderNews(news, newsKey) {
  return `
  <section id="${newsKey.toLowerCase()}">
    <div class="information-container container-fluid">
      <h1>${newsKey}</h1>
      <p>
        ${news[0].title}<br>
        ${news[0].date}
      </p>
      <p>
        ${news[1].title}<br>
        ${news[1].date}
      </p>
      <p>
        ${news[2].title}<br>
        ${news[2].date}
      </p>
      <p>
        ${news[3].title}<br>
        ${news[3].date}
      </p>
    </div>
  </section>
  `;
}

function renderProjectItems(projects) {
  return projects.map(project => `
    <a href="?project=${project.id}">${project.title}</a><br>
    `).join('');
}

function renderProjects(projects) {
  return `
  <section id="projects">
    <div class="information-container">
      <h1>Projects</h1>
      <p>
        ${renderProjectItems(projects)}
      </p>
    </div>
  </section>
  `;
}

fetch('assets/data.json')
.then(response => {
  return response.json();
})
.then(data => {
  console.log(data);
  const queryString = window.location.search;
  console.log(queryString);
  const urlParameter = new URLSearchParams(queryString);
  const project = urlParameter.get('project');
  console.log(project);
  if (project === 'bsa-project' || project === 'unity-project') {
    renderProjectPage(project);
  } else {
    renderMainPage(data);
  }
});
