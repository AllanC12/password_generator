const button = document.querySelector('.create')
const display = document.querySelector('#password')
const size = document.querySelector('#quantity')
const checkBoxes = document.querySelectorAll('.check')

let methods = {
    letters: [97, 122],
    upper_letters: [65, 90],
    numbers: [48, 57],
    simbols: [33, 47],
}

 
button.addEventListener('click', (e) => {
    e.preventDefault()

    let checkeds = []
    let password = ''

     checkBoxes.forEach(checkBox => {
           if(checkBox.checked){
               checkeds.push(checkBox.id)
             }
        }
    )

    
     for(let i = 0; i < size.value; i++) {
        let method = checkeds[randomInRange(0,checkeds.length - 1)]
        password += String.fromCharCode(randomInRange(...methods[method]))
    }

    display.innerText = password
 })

function randomInRange(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}
