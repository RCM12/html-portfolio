import Navbar from './Navbar.js';

export default function ProjectPage(project) {
  document.querySelector('.overall-container').innerHTML = `
    ${Navbar(project, null)}
    ${SpecifiedProject(project)}
  `;
}

function SpecifiedProject(project) {
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
