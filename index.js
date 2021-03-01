import MainPage from './components/MainPage.js';
import ProjectPage from './components/ProjectPage.js';

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
    ProjectPage(project);
  } else {
    MainPage(data);
  }
});
