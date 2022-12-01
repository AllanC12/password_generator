 const form = document.getElementById('container-form')

 form.addEventListener('submit',(e)=>{
    e.preventDefault();

    const input_letters = document.getElementById('letters')
    const input_upperLetters = document.getElementById('upper-letters')
    const input_numbers = document.getElementById('numbers')
    const input_simbols = document.getElementById('simbols')
    const passwordElement = document.getElementById('password')
    const length = parseInt(document.getElementById('quantity').value);

    const char = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    const char_upper = ['Z','Y','X','W','V','U','T','S','R','Q','P','O','N','M','L','K','J','I','H','G','F','E','D','C','B','A']
    const numbers = [0,1,2,3,4,5,6,7,8,9];
    const simbol = ['#','$','%','&','*','+']

    let password = ''
   
    let checkSelected = 0;
    const checkbox = document.querySelectorAll('.check')
    //contando quantos checkbox estão selecionados para fazer a divisão pelo tamanho da senha no laço FOR
    function countCheck(){
       checkbox.forEach(check => {
          if(check.checked){
             checkSelected++;
          } 
       });
    }countCheck()

    //o resultado da divisão entre o valor de input number e os checkbox selecionados 
    //será o numero de vezes que o laço FOR deverá ser executado

    for(i = 0; i < length / checkSelected; i++){
      let randChar = Math.floor(Math.random() * char.length)
      let randSimbol = Math.floor(Math.random() * simbol.length)
      let randnumber = Math.floor(Math.random() * numbers.length)

       if(input_upperLetters.checked){
          password += char_upper[randChar];
          
       }

       if(input_letters.checked){
         password += char[randChar]
         }

       if(input_numbers.checked){
          password += numbers[randnumber];
       }

       if(input_simbols.checked){
          password += simbol[randSimbol];
       }
     }  

   // limitando a senha ao tamanho do valor definido no input type number
    if(length % checkSelected != 0){
      password = password.slice(0,length)
     }

       passwordElement.innerText = password
 
   })