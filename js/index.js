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



// document.querySelectorAll('.btn').forEach(el => {
//     el.addEventListener('keydown', () => {
//         el.style.background = red;
//     })
// })




// resize

const body = document.querySelector('body');
window.addEventListener('resize', () => {
    console.log('If you are seeing this, that means the the window is resized ');
    body.style.background = '#FFA07A';
})


//scroll

const bodyDouble = document.querySelectorAll('body');
window.addEventListener('scroll', () => {
    console.log('If you are seeing this, that means you scrolled.');
    body.style.background = '#B0E0E6';
})


//click
const navbarLink = document.querySelectorAll('a');
navbarLink.forEach(a=>{
    a.addEventListener('click', function(event) {
        event.preventDefault();
        console.log(a);
    });
});

// const paragraphs = document.querySelectorAll('p');
// paragraphs.forEach(a=> {
//     paragraphs.addEventListener('click', function() {
//         p.style.background = 'red';
//     })
// })



// mouseenter
const mapImage = document.querySelector('.mapImg');
console.log(mapImage);

mapImage.addEventListener('mouseenter', () => {
    mapImage.style.transform = 'scale(1.2)';
    mapImage.style.transition = 'all 0.4s'
})