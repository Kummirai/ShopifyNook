// script.js
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const loginToggle = document.getElementById('login-toggle');
const signupToggle = document.getElementById('signup-toggle');

loginToggle.addEventListener('click', () => {
  loginForm.classList.add('active');
  signupForm.classList.remove('active');
});

signupToggle.addEventListener('click', () => {
  signupForm.classList.add('active');
  loginForm.classList.remove('active');
});