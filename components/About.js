export default function About(about) {
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

export function AboutSectionContainerBeginning(about) {
  return `
  <section id="${about.toLowerCase()}">
    <div class="container-fluid">
  `;
}

export function AboutSectionContainerEnd() {
  return `
    </div>
  </section>
  `;
}
