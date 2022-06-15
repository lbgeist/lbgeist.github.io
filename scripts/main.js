// JavaScript Document

//const about = document.getElementById('about');
const aboutArrow = document.getElementById('about-side-arrow');
const aboutMe = document.getElementsByClassName('about-me');
//const projects = document.getElementById('projects');
const proj1Title = document.getElementById('proj-1-title');
const proj1TitleOpen = document.getElementsByClassName('proj-1-title-open');
const proj2Title = document.getElementById('proj-2-title');
const proj2TitleOpen = document.getElementsByClassName('proj-2-title-open');
const proj3Title = document.getElementById('proj-3-title');
const proj3TitleOpen = document.getElementsByClassName('proj-3-title-open');

const paragraph = document.createElement('p');
const paragraph2 = document.createElement('p');

const arrowChange = (arrow, hiddenClass) => {
  if(arrow.style.display === 'none') {
    arrow.style.display = 'block';
    for (let i = 0; i < hiddenClass.length; i++) {
      hiddenClass[i].style.display = "none";
    }
  } else {
    arrow.style.display = "none";
    for (let i = 0; i < hiddenClass.length; i++) {
      hiddenClass[i].style.display = "block";
    }
  } 
}







