const button=document.querySelector('.menu-toggle');
const menu=document.querySelector('#menu');
if(button&&menu){button.addEventListener('click',()=>{const open=menu.classList.toggle('open');
    button.setAttribute('aria-expanded',String(open));});
    menu.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{menu.classList.remove('open');
        button.setAttribute('aria-expanded','false');}));}