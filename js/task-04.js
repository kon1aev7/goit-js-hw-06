const decrementBtn = document.querySelector('button[data-action="decrement"]');
console.log('decrementBtn', decrementBtn);
const incrementBtn = document.querySelector('button[data-action="increment"]');
console.log('incrementBtn', incrementBtn);

let counterValue = 0;
const counterRef = document.querySelector('#value');

console.log('counterRef', counterRef);


decrementBtn.addEventListener('click', ()=> {
    counterValue += Number(decrementBtn.textContent);
    counterRef.innerHTML = counterValue;
});

incrementBtn.addEventListener('click', ()=> {
    counterValue += Number(incrementBtn.textContent);
    counterRef.innerHTML = counterValue;
});