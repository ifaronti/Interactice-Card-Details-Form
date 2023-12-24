let nameInput = document.getElementById('name')
let cardNumber = document.getElementById('number')
let theBtn = document.querySelector('.form-btn')
let monthInput = document.getElementById('month') 

nameInput.addEventListener('input', function(){
    let cardName = document.querySelector('.card-name')
    cardName.innerHTML = nameInput.value
})

cardNumber.addEventListener('input', function(){
    let cardValue = document.querySelector('.cardNumber')
    cardValue.innerHTML = cardNumber.value
})

// theBtn.addEventListener('click', function(event){
//     event.preventDefault()
//     cardName.innerHTML = nameInput.value
// })

//  let abc = "123456789012";

// for (int i = 4, i < abc.length, i += 4){
//     abc = abc.Insert(i, " ");
//     i++;
// }