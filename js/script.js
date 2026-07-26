const input = document.querySelector('#range-bar')

const valuesPrice= [8.00, 12.00, 16.00, 24.00, 36.00]
// const valuesPriceDiscount= ['6.00', 9.00', 12.00', 18.00', 27.00']
const valuesProduct= ['10K', '50K', '100K', '500K', '1M']

const display = document.querySelector('#display')
const display2 = document.querySelector('#display2')

const toggle = document.querySelector('#checkbox')

input.max = valuesPrice.length - 1;
input.value= 2

function updateValue (){
    const index = parseInt(input.value, 10);
    display.textContent = valuesPrice[index].toFixed(2) 
}

function updateValueProduct () {
    const index = parseInt(input.value, 10)
    display2.textContent = valuesProduct[index]
}

function discount () {
    const index = parseInt(input.value, 10)
    display.textContent = ((valuesPrice[index])* 0.75).toFixed(2) 
}

function updateDisplay (){
    if(toggle.checked == true) {
        discount();
    } else {
        updateValue();
    }
    updateValueProduct()
}

input.addEventListener('input', updateDisplay)

toggle.addEventListener('change', updateDisplay)

updateDisplay()
// updateValueProduct()
