let inp = document.getElementById("progress-value");
let hide = document.getElementById('progress-hide');
let anim = document.getElementById('progress-animate')
let bar = document.querySelector('.progress-bar');

inp.addEventListener("input",()=>{
    inp.value = inp.value.replace(/[^\d]/g,"");
    if(inp.value>100) inp.value = 100;
    if(inp.value<0) inp.value = 0;
    document.documentElement.style.setProperty('--pg-bar',`${inp.value}%`)
})

hide.addEventListener('click',()=>{
    bar.classList.toggle('hidden');
})

anim.addEventListener('click',()=>{
    bar.classList.toggle('animated');
})