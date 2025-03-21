const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        console.log(e);
        console.log(e.target.id);
        body.style.backgroundColor=e.target.id;
    })
})
// console.log(buttons)