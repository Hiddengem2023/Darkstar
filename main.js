//navbar control//
let exit = document.getElementById('exit');
let navbar = document.getElementById('nav-toggler');
let menu = document.getElementById('navbar');
navbar.addEventListener('click',function () {
  menu.style.display ='flex';
  menu.style.justifyContent = 'center';
  menu.style.position ='fixed';
  
})
exit.addEventListener('click',function () {
  menu.style.display ='none';
});
//themes//
let body = document.getElementById('body');
let intro = document.getElementById('intro');
let green = document.getElementById('green');
let black = document.getElementById('black');
let purple = document.getElementById('purple');
let white = document.getElementById('white');
let blue = document.getElementById('blue');
let comment = document.getElementById('comment');
let link = document.getElementById('link');
let blog = document.getElementById('blog');
navy.addEventListener('click',function () {
  body.style.background ='#032b44';
  body.style.color ='var(--skin-color)';
  intro.style.color ='white';
  comment.style.color = 'var(--skin-color)';
  blog.style.color = 'white';
});
black.addEventListener('click',function () {
  body.style.background ='#000000';
  body.style.color ='var(--skin3-color)';
  intro.style.color ='var(--skin3-color)';
  comment.style.color ='var(--skin3-color)';
  blog.style.color = 'var(--skin3-color)';
});
purple.addEventListener('click',function () {
  body.style.background ='#3b0b37';
  body.style.color ='var(--skin4-color)';
  intro.style.color ='var(--skin4-color)';
  comment.style.color = 'var(--skin4-color)';
  blog.style.color ='var(--skin4-color)';
});
grey.addEventListener('click',function () {
  body.style.background ='#333333';
  body.style.color ='var(--skin5-color)';
  intro.style.color ='var(--skin5-color)';
  comment.style.color = 'var(--skin5-color)';
  blog.style.color ='var(--skin5-color)';
})
white.addEventListener('click',function () {
  body.style.background ='white';
  body.style.color ='black';
  intro.style.color ='black'
  comment.style.color = 'black';
  blog.style.color = 'black';
})