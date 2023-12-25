let nameInput = document.getElementById('name')
let cardNumber = document.getElementById('card-number')
let theBtn = document.querySelector('.form-btn')
let monthInput = document.getElementById('month')
let yearInput = document.getElementById('year')
let cvcInput = document.getElementById('cvc')
let nameError = document.getElementById('name-error')
let numberError = document.getElementById('number-error')
let dateError = document.getElementById('date-error')
let cvcError = document.getElementById('cvc-error')

let theForm = document.querySelector('.form')
let confirmation = document.querySelector('.confirmation')
let confirmationBtn = document.querySelector('.confirmation-btn')

nameInput.addEventListener('input', function(){
    let cardName = document.querySelector('.card-name')
    cardName.innerHTML = nameInput.value
})

cardNumber.addEventListener('input', function(){
    let cardValue = document.querySelector('.cardNumber')
    let split = cardNumber.value.replace(/.{4}/g, '$& ')
    cardValue.innerHTML = split
})

monthInput.addEventListener('input', function(){
    let cardMonth = document.querySelector('.month')
    cardMonth.innerHTML = monthInput.value + "/"
})

yearInput.addEventListener('input', function(){
    let cardYear = document.querySelector('.year')
    cardYear.innerHTML = yearInput.value
})

cvcInput.addEventListener('input', function(){
    let cardCVC = document.querySelector('.cvc-number')
    cardCVC.innerHTML = cvcInput.value
})

theBtn.addEventListener('click', function(event){
    let regex = (/\d+/g)
    let name
    let number
    let month
    let year
    let cvc
    event.preventDefault()
    if(nameInput.value === '' || nameInput.value.match(regex)){
        nameError.style.visibility = 'visible'
        nameError.innerHTML = 'Please enter valid name on card'
        nameInput.style.borderColor = 'red'
    }
    else{
       name = true
       nameInput.style.borderColor = 'hsl(270, 3%, 87%)'
    }

    if(!isFinite(cardNumber.value) || (cardNumber.value.length != 16)){
        numberError.style.visibility = 'visible'
        numberError.innerHTML = 'Wrong format, 16 numbers only'
        cardNumber.style.borderColor = 'red'
    }
    else{
        number = true
        cardNumber.style.borderColor = 'hsl(270, 3%, 87%)'
    }
    if((monthInput.value.length > 2) || (monthInput.value.length < 2) || (monthInput.value > 12) || (!isFinite(monthInput.value))){
        dateError.style.visibility = 'visible'
        dateError.innerHTML = 'two digits only'
        monthInput.style.borderColor = 'red'
    }
    else{
        if(monthInput.value === ''){
            dateError.style.visibility = 'visible'
            dateError.innerHTML =`can't be empty`
            monthInput.style.borderColor = 'red'
        }
        else{
             month = true
             monthInput.style.borderColor = 'hsl(270, 3%, 87%)'
        }
    }
    if((yearInput.value.length > 2) || (yearInput.value.length < 2) || (!isFinite(yearInput.value))){
        dateError.style.visibility = 'visible'
        dateError.innerHTML = 'Must be two digits'
        yearInput.style.borderColor = 'red'
    }
    else{
        if(yearInput.value < 23){
            dateError.style.visibility = 'visible'
            dateError.innerHTML = 'Card has expired'
            yearInput.style.borderColor = 'red'
        }
        else{
            if( yearInput.value === ''){
                dateError.style.visibility = 'visible'
                dateError.innerHTML = `can't be empty`
                yearInput.style.borderColor = 'red'
            }
            else{
                 year = true
                 yearInput.style.borderColor = 'hsl(270, 3%, 87%)'
            }
        }
    }
    if((cvcInput.value.length < 3) || (cvcInput.value.length > 4) || (!isFinite(cvcInput.value))){
        cvcError.style.visibility = 'visible'
        cvcError.innerHTML = `please enter 3 or 4 digits only`
        cvcInput.style.borderColor = 'red'
    }
    else{
        if(cvcInput.value === ''){
            cvcError.style.visibility = 'visible'
            cvcError.innerHTML = `can't be empty`
            cvcInput.style.borderColor = 'red'
        }
        else{
             cvc = true
        }
    }
    if(cvc == true && number == true && name == true && month == true && year == true){
        theForm.style.display = 'none'
        confirmation.style.display = 'flex'
    }
})

confirmationBtn.addEventListener('click', function(){
    cvcInput.value = ''
    nameInput.value = ''
    cardNumber.value = ''
    monthInput.value =''
    yearInput.value = ''
    location.reload()
})