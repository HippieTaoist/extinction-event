let dinoCrossOlLi = document.querySelectorAll('ol li')
console.log(dinoCrossOlLi)
    // document.createElement()

// adds the class 'clicked and strikes the text
dinoCrossOlLi.forEach(liItem => {
    liItem.addEventListener('click', function() {
        liItem.className = 'clicked';
        liItem.style.textDecoration = 'line-through';

    })
});

let dinoCrossUlLi = document.querySelectorAll('ul li')
console.log(dinoCrossUlLi)
    // document.createElement()

// adds the class 'clicked and strikes the text
dinoCrossUlLi.forEach(liItem => {
    liItem.addEventListener('click', function() {
        liItem.className = 'clicked';
        liItem.style.opacity = '0%';

    })
});



// hen an item is clicked...
//     item.addEventListener('click', function () {

//         // If it's class is simply 'item', add the 'item-clicked' class
//         if (item.className === 'item') {
//             item.className = 'item item-clicked';
//         } 

//         // Otherwise, reset its class to simply 'item'
//         else {
//             item.className = 'item';