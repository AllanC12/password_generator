const form = document.getElementById('container-form')
const passwordElement = document.getElementById('password');
const size = document.getElementById('quantity')
const checkBoxes = document.querySelectorAll('.check');

 
form.addEventListener('submit',(e)=>{
    e.preventDefault()

    let fields = {
        letters: [97,122],
        upper_letters: [65,90],
        numbers:[48,57],
        simbols:[33,47]
    }

    let checkeds = []
    let password = ''
    let countChecked = 0;

    function generateRandomNumber(min,max){
        return Math.floor(Math.random() * (max - min + 1) + min)
      }

    function verifyCheckbox(){
        checkBoxes.forEach((checkbox)=>{
            if(checkbox.checked){
                checkeds.push(checkbox.id)
                countChecked++;
            }
        })
    }verifyCheckbox()


    function verifications(){
        if(countChecked == 0){
            alert('Defina os caracteres da senha')
            return;
        }

        if(!size.value){
            alert('Defina um tamanho para a senha')
        }
    }verifications()




    function addCharInPassword(){
        for(let i = 0; i < size.value; i++){
            let field = checkeds[i]
            checkeds.push(checkeds[generateRandomNumber(0,checkeds.length - 1)])

            password += String.fromCharCode(generateRandomNumber(...fields[field]))
    
        }
        passwordElement.innerText = password
    }addCharInPassword()


})
