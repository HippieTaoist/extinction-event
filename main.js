let dinoCrossLi = document.querySelectorAll('ol li')
console.log(dinoCrossLi)
    // document.createElement()


dinoCrossLi.forEach(liItem => {
    liItem.addEventListener('click', function() {
        liItem.className = 'clicked';
        liItem.style.textDecoration = 'line-through';

    })
});

strikeMe = document.getElementsByClassName('clicked')
strikeMe.style.textDecoration = 'line-through'


// hen an item is clicked...
//     item.addEventListener('click', function () {

//         // If it's class is simply 'item', add the 'item-clicked' class
//         if (item.className === 'item') {
//             item.className = 'item item-clicked';
//         } 

//         // Otherwise, reset its class to simply 'item'
//         else {
//             item.className = 'item';