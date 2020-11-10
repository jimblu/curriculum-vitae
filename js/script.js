const about = document.querySelector('.about');
const xp = document.querySelector('.experience');
const education = document.querySelector('.education');
const skills = document.querySelector('.skills');
const interests = document.querySelector('.interests');

const aboutBtn = document.querySelector('.aboutBtn');
const xpBtn = document.querySelector('.xpBtn');
const educationBtn = document.querySelector('.educationBtn');
const skillsBtn = document.querySelector('.skillsBtn');
const interestsBtn = document.querySelector('.interestsBtn');

const burger = document.querySelector('.burger');

const scrollPage = (btn, element) => {
btn.addEventListener('click', () => {
    window.scroll(0, element.offsetTop)
})};

scrollPage(aboutBtn, about);
scrollPage(xpBtn, xp);
scrollPage(educationBtn, education);
scrollPage(skillsBtn, skills);
scrollPage(interestsBtn, interests);

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
});