const input = document.querySelector('#range-bar')
const values= ['$8.00', '$12.00', '$16.00', '$24.00', '$36.00']
const display = document.querySelector('#display')

input.max = values.length - 1;
input.value= 2

function updateValue (){
    const index = parseInt(input.value, 10);
    display.textContent = values[index] 
}

input.addEventListener('input', updateValue)

updateValue()