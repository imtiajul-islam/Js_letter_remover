let valuer = document.querySelector('#input');
let submit = document.querySelector('#submit');
let result = document.querySelector('#result');

submit.addEventListener('click', ()=>{
    let val = valuer.value;
        val = val.toLowerCase();
    let res = val.replaceAll('a', '').replaceAll('c', '').replaceAll('z', '');
    result.innerHTML = res;
})
