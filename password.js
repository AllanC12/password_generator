const create = document.querySelector('.create');
const passwordElement = document.getElementById('password');
const size = document.getElementById('quantity')
const checkBoxes = document.querySelectorAll('.check');

 
create.addEventListener('click',(e)=>{
    e.preventDefault()

    let fields = {
        letters: [97,122],
        upper_letters: [65,90],
        numbers:[48,57],
        simbols:[33,47]
    }

    let checkeds = []
    let password = ''

    checkBoxes.forEach((checkbox)=>{
        if(checkbox.checked)
        checkeds.push(checkbox.id)
    })

    let choosenField = []

    for(let i = 0; i < size.value; i++){
        let fieldRandom = checkeds[generateRandomNumber(0,checkeds.length - 1)]
        choosenField.push(generateRandomNumber(0,checkeds.length - 1))
        password += String.fromCharCode(generateRandomNumber(...fields[fieldRandom])) 
        checkeds.splice(choosenField[i],1)

        // console.log(checkeds)
     }
    passwordElement.innerText = password

 
})



 