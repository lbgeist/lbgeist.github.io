// JavaScript Document

const about = document.getElementById('about');
const aboutArrow = document.getElementById('about-side-arrow');
const aboutMe = document.getElementsByClassName('about-me');
const projects = document.getElementById('projects');

const paragraph = document.createElement('p');
const paragraph2 = document.createElement('p');

const arrowChange = (arrow, hiddenClass) => {
  if(arrow.style.display === 'none') {
    arrow.style.display = 'inline-block';
    for (let i = 0; i < hiddenClass.length; i++) {
      hiddenClass[i].style.display = "none";
    }
  } else {
    arrow.style.display = "none";
    for (let i = 0; i < hiddenClass.length; i++) {
      hiddenClass[i].style.display = "inline-block";
    }
  } 
}







