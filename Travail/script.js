'use strict';
let card_slider = document.getElementsByClassName('card');

let etape = 0;

let nbr_card = card_slider.length;

let right = document.querySelector('.right')
let left = document.querySelector('.left')

function enleverActiveCard(params) {
    for(let i = 0 ; i < nbr_card ; i++)
        card_slider[i].classList.remove('active');
}

right.addEventListener('click', function() {
    etape++;
    if(etape >= nbr_card) {
        etape = 0;
    }
    enleverActiveCard();
    card_slider[etape].classList.add('active');
})
left.addEventListener('click', function() {
    etape--;
    if(etape < 0) {
        etape = nbr_card -1;
    }
    enleverActiveCard();
    card_slider[etape].classList.add('active');
})

// setInterval(function() {
//     etape++;
//     if(etape >= nbr_card) {
//         etape = 0;
//     }
//     enleverActiveCard();
//     card_slider[etape].classList.add('active');
// }, 3000)