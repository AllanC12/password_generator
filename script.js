const create = document.querySelector('.create');
const passwordElement = document.getElementById('password');
const size = document.getElementById('quantity')
const checkBoxes = document.querySelectorAll('.check');

 
create.addEventListener('click',(e)=>{
    e.preventDefault()
 
//valores que serão convertidos para string com base na tabela ASCII
    let fields = {
        letters: [97,122],
        upper_letters: [65,90],
        numbers:[48,57],
        simbols:[33,47]
    }
    
//checkeds guarda o id dos inputs selecionados e password guarda a senha que será gerada no laço for
    let checkeds = []
    let password = ''

//preenchendo checkeds com o id dos checkbox selecionados
    checkBoxes.forEach((checkbox)=>{
        if(checkbox.checked)
          checkeds.push(checkbox.id)
    })
 
//fazendo a conversão para string com base no campo aleatório escolhido dentro de checkeds
    for(let i = 0; i < size.value; i++){
        let fieldRandom = checkeds[generateRandomNumber(0,checkeds.length - 1)]
        password += String.fromCharCode(generateRandomNumber(...fields[fieldRandom])) 
    }

//colocando a senha ja gerada dentro do elemento HTML
    passwordElement.innerText = password

 
})

//função genérica que gera números aleatórios entre um valor minimo e um máximo
function generateRandomNumber(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}
