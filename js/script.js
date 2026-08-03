const input = document.querySelector('#range-bar')

const valuesPrice= [8.00, 12.00, 16.00, 24.00, 36.00]
// const valuesPriceDiscount= ['6.00', 9.00', 12.00', 18.00', 27.00']
const valuesProduct= ['10K', '50K', '100K', '500K', '1M']

const display = document.querySelector('#display')
const display2 = document.querySelector('#display2')

const toggle = document.querySelector('#checkbox')

input.max = valuesPrice.length - 1;
input.value= 2

// To display basic price
function updateValue (){
    const index = parseInt(input.value, 10);
    display.textContent = valuesPrice[index].toFixed(2) 
}

// To display products
function updateValueProduct () {
    const index = parseInt(input.value, 10)
    display2.textContent = valuesProduct[index]
}

// To apply discount on basic price
function discount () {
    const index = parseInt(input.value, 10)
    display.textContent = ((valuesPrice[index])* 0.75).toFixed(2) 
}

// To change price with discount
function updateDisplay (){
    if(toggle.checked == true) {
        discount();
    } else {
        updateValue();
    }
    updateValueProduct()
}

// To change bar fill
function updateFill(){
    const fill = (input.value - input.min) / (input.max - input.min) * 100;
    input.style.background= `linear-gradient(to right, hsl(174, 86%, 45%) ${fill}%, hsl(224, 65%, 95%) ${fill}%)`
}

input.addEventListener('input', () => {
    updateDisplay(), 
    updateFill()
});

toggle.addEventListener('change', updateDisplay)

updateFill()
updateDisplay()
// updateValueProduct()