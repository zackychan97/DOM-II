// Your code goes here

const logo = document.querySelector('.logo-heading');
console.log(logo);

logo.addEventListener('dblclick', function(e){
    console.log('logo was double clicked');
});






//mouse over


const bus = document.querySelector('.bus-img');
console.log(bus);

bus.addEventListener('mouseover', (event) => {
    console.log('moused over img');
    bus.style.height = '100%';
    // bus.style.width = '50%';
})



// keydown

const pressKey = document.querySelector('body');
console.log(pressKey);
pressKey.addEventListener('keydown', () => {
    console.log('User has pressed a key on their board');
    pressKey.style.background = '#DDA0DD';
})

// const keyPress = document.querySelectorAll('.btn');
// console.log(keyPress);
// keyPress.addEventListener('keydown', () => {
//     console.log('User has pressed a key on their board');
//     keyPress.style.background = '#DDA0DD';
// })






// wheel

