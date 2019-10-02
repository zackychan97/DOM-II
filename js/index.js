// Your code goes here

// 1
const logo = document.querySelector('.logo-heading');
console.log(logo);

logo.addEventListener('dblclick', function(e){
    console.log('logo was double clicked');
});






//mouse over

//2
const bus = document.querySelector('.busImg');
console.log(bus);
bus.addEventListener('mouseenter', () => {
    bus.style.transform = 'scale(1.16)';
    bus.style.transition = 'all 0.2s'
})

bus.addEventListener('mouseleave', () => {
    bus.style.transform = 'scale(1.0';
    bus.style.transition = 'all 0.2s'
})

//3
const tropicalBoat = document.querySelector('.boatTropic');
console.log(tropicalBoat);
tropicalBoat.addEventListener('mouseenter', () => {
tropicalBoat.style.transform = 'scale(1.1)';
tropicalBoat.style.transition = 'all 0.2s';
})
tropicalBoat.addEventListener('mouseleave', () => {
    tropicalBoat.style.transform = 'scale(1.0';
    tropicalBoat.style.transition = 'all 0.2s'
})











// keydown
//4
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
//5
const body = document.querySelector('body');
window.addEventListener('resize', () => {
    console.log('If you are seeing this, that means the the window is resized ');
    body.style.background = '#FFA07A';
})


// const text = document.querySelectorAll('.text-content');
// window.addEventListener('resize', () => {
//     console.log('Another console log you should see if you resize');
//     textContent.style.background = 'red';
// })





//scroll
//6
const bodyDouble = document.querySelectorAll('body');
window.addEventListener('scroll', () => {
    console.log('If you are seeing this, that means you scrolled.');
    body.style.background = '#B0E0E6';
})


//click & prevent default // maybe nested??
//7
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



// mouseenter // mouse leave // might be nesting?
//8
const mapImage = document.querySelector('.mapImg');
console.log(mapImage);

mapImage.addEventListener('mouseenter', () => {
    mapImage.style.transform = 'scale(1.2)';
    mapImage.style.transition = 'all 0.2s'
})

mapImage.addEventListener('mouseleave', () => {
    mapImage.style.transform = 'scale(1.0';
    mapImage.style.transition = 'all 0.2s'
})


// mouse enter // mouse leave // might be nesting?
//9
const boatImage = document.querySelector('.boatImg');
console.log(boatImage);

boatImage.addEventListener('mouseenter', () => {
    boatImage.style.transform = 'scale(1.2)';
    boatImage.style.transition = 'all 0.2s'
})
boatImage.addEventListener('mouseleave', () => {
    boatImage.style.transform = 'scale(1.0)';
    boatImage.style.transition = 'all 0.2s'
})





// more click, i believe this is the nesting asked?
//10

const anotherBody = document.querySelector('body');

anotherBody.addEventListener('click', () => {
    body.style.backgroundColor='yellow';
})
//11
const textContent = document.querySelector('.text-content');
textContent.addEventListener('click', () => {
    textContent.style.background = 'purple';
})







