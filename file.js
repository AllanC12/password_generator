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

    checkBoxes.forEach(checkbox=>{
        if(checkbox.checked)
          checkeds.push(checkbox.id)
    })

    for(let i = 0; i < size.value; i++){
        let fieldRand = checkeds[generateNumberRand(0,checkeds.length - 1)];
        password += String.fromCharCode(generateNumberRand(...fields[fieldRand]))
    }

    passwordElement.innerText = password

 })

 function generateNumberRand(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min)
 }