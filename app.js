console.log('app.js reporting for duty..');

// SECTION - Bindings
const btn = document.querySelector('input');

btn.addEventListener('click', printHello);

function printHello(event) {
    event.preventDefault();
    console.log('Why hello there!');
}