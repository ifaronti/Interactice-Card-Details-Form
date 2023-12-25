let nameInput = document.getElementById('name')
let cardNumber = document.getElementById('card-number')
let theBtn = document.querySelector('.form-btn')
let monthInput = document.getElementById('month')
let yearInput = document.getElementById('year')
let cvc = document.getElementById('cvc')
let nameError = document.getElementById('name-error')
let numberError = document.getElementById('number-error')
let dateError = document.getElementById('date-error')
let cvcError = document.getElementById('cvc-error')

nameInput.addEventListener('input', function(){
    let cardName = document.querySelector('.card-name')
    cardName.innerHTML = nameInput.value
})

cardNumber.addEventListener('input', function(){
    let cardValue = document.querySelector('.cardNumber')
    cardValue.innerHTML = cardNumber.value
})

monthInput.addEventListener('input', function(){
    let cardMonth = document.querySelector('.month')
    cardMonth.innerHTML = monthInput.value + "/"
})

yearInput.addEventListener('input', function(){
    let cardYear = document.querySelector('.year')
    cardYear.innerHTML = yearInput.value
})

cvc.addEventListener('input', function(){
    let cardCVC = document.querySelector('.cvc-number')
    cardCVC.innerHTML = cvc.value
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