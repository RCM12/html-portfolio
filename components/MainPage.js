import Navbar from './Navbar.js';
import About, {AboutSectionContainerBeginning, AboutSectionContainerEnd} from './About.js';
import News, {NewsItems} from './News.js';
import Projects, {ProjectItems} from './Projects.js';

export default function MainPage(data) {
    document.querySelector('.overall-container').innerHTML = `
      ${OverallContainerBeginning()}
      ${AboutSectionContainerBeginning(Object.keys(data)[0])}
      ${Navbar('main', Object.keys(data))}
      ${About(data.About)}
      ${AboutSectionContainerEnd()}
      ${News(data.News)}
      ${Projects(data.Projects)}
      ${OverallContainerEnd()}
    `;
    document.querySelector('.search input[name="news"]')
    .addEventListener("input", (event)=> {
      console.log(event.target.value);
      const keyword = event.target.value;
      const filtered = data.News.filter(newsItem=> {
        return newsItem.title.toLowerCase().includes(keyword.toLowerCase())
      });
      console.log(filtered);
      const informationContainer = document.querySelector(".news-items-container");
      console.log(informationContainer);
      informationContainer.innerHTML = NewsItems(filtered);
    })
    let buttons = document.querySelectorAll('.filter input[name="filter"]');
    const projectsContainer = document.querySelector('.project-items-container');
    buttons.forEach(cond=>cond.addEventListener('change', function(event) {
      console.log(cond.value);
      if (cond.value === "all") {
        projectsContainer.innerHTML = ProjectItems(data.Projects);
      } else if (cond.value === "bsa") {
        projectsContainer.innerHTML = ProjectItems(data.Projects[0])
      } else if (cond.value === "unity") {
        projectsContainer.innerHTML = ProjectItems(data.Projects[1])
      }
    }));
}

function OverallContainerBeginning() {
  return '<div class="overall-container">'
}

function OverallContainerEnd() {
  return '</div>'
}
