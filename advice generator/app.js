const get_quto = async()=>{
    const res = await fetch('https://api.adviceslip.com/advice');
    const data = await res.json();

    
    let id = document.querySelector('.id');
    let msg = document.querySelector('.msg');
    id.innerHTML = data.slip.id;
    msg.innerHTML = data.slip.advice;
    
    
}
get_quto();
let quato_button = document.querySelector('.btn');

quato_button.addEventListener('click', get_quto)
