// dinoCrossOlLi takes the first ordered lists and crosses of the name as it clicked while also giving it a class of 'clicked'
let dinoCrossOlLi = document.querySelectorAll('ol li')
console.log(dinoCrossOlLi)
    // adds the class 'clicked and strikes the text
dinoCrossOlLi.forEach(liItem => {
    liItem.addEventListener('click', function() {
        liItem.className = 'clicked';
        liItem.style.textDecoration = 'line-through';

    })
});




// dinoFadeUlLi takes the unordered list and fades the dino name as it is clicked, as well as gaining a class of 'clicked'
let dinoFadeUlLi = document.querySelectorAll('ul li')
console.log(dinoFadeUlLi)
    // adds the class 'clicked' and fades out the dino name
dinoFadeUlLi.forEach(liItem => {
    liItem.addEventListener('click', function() {
        liItem.className = 'clicked';
        liItem.style.opacity = '0%';
    })
});



// dinoImgFader fades off every dinosaur that is clicked as well as giving it the class of clicked.
let dinoImgFader = document.querySelectorAll('img')
console.log(dinoImgFader)
    // adds the class 'clicked' and fades out the dino
dinoImgFader.forEach(liItem => {
    liItem.addEventListener('click', function() {
        liItem.className = 'clicked';
        liItem.style.width = '0px';
    })
});



// meteorMe takes care of it all and kills everything.
let meteorMe = document.querySelector('button')
console.log(meteorMe)

let meBody = document.querySelector('body')

meteorMe.addEventListener('click', function() {
    dinoImgFader.forEach(liItem => { liItem.style.width = '0px' })

    dinoFadeUlLi.forEach(liItem => { liItem.style.opacity = '0%' })
    dinoCrossOlLi.forEach(liItem => { liItem.style.textDecoration = 'line-through' })

    meBody.style.backgroundImage = 'url(./pictures/Asteroid-Strike-Animation.gif/)'
    meBody.style.backgroundRepeat = 'no-repeat'
    meBody.style.backgroundSize = '100%'

})






// hen an item is clicked...
//     item.addEventListener('click', function () {

//         // If it's class is simply 'item', add the 'item-clicked' class
//         if (item.className === 'item') {
//             item.className = 'item item-clicked';
//         } 

//         // Otherwise, reset its class to simply 'item'
//         else {
//             item.className = 'item';