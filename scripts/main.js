// JavaScript Document
const about = document.getElementById('about');
const projects = document.getElementById('projects');

const paragraph = document.createElement('p');
const paragraph2 = document.createElement('p');


about.onclick = function() {
  about.style.backgroundColor = 'red';
  let aboutMe = document.getElementsByClassName('about-me');
  for (let i = 0; i < aboutMe.length; i++) {
    aboutMe[i].style.display = "inline-block";
  }
}

projects.onclick = function() {
  projects.style.backgroundColor = 'blue';
  paragraph2.id = 'projects-p';
  paragraph2.innerHTML = 'This is another test.';
  projects.appendChild(paragraph2);
}