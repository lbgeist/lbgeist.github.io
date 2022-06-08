// JavaScript Document
const about = document.getElementById('about');
const aboutArrow = document.getElementById('about-side-arrow');
const projects = document.getElementById('projects');

const paragraph = document.createElement('p');
const paragraph2 = document.createElement('p');


about.onclick = function() {
  if(aboutArrow.style.display === 'none') {
    aboutArrow.style.display = 'inline-block';
    let aboutMe = document.getElementsByClassName('about-me');
    for (let i = 0; i < aboutMe.length; i++) {
      aboutMe[i].style.display = "none";
    }
  } else {
    aboutArrow.style.display = "none";
    let aboutMe = document.getElementsByClassName('about-me');
    for (let i = 0; i < aboutMe.length; i++) {
      aboutMe[i].style.display = "inline-block";
    }
  } 
}







