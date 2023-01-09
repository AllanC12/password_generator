const form = document.getElementById("container-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const input_letters = document.getElementById("letters");
  const input_upperLetters = document.getElementById("upper_letters");
  const input_numbers = document.getElementById("numbers");
  const input_simbols = document.getElementById("simbols");
  const passwordElement = document.getElementById("password");
  const sizePassword = document.getElementById("quantity").value;
  const int_size_password = parseInt(document.getElementById("quantity").value);

  const char = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];
  const char_upper = [ "Z","Y","X","W","V","U","T","S","R","Q","P","O","N","M","L","K","J","I","H","G","F","E","D","C","B","A",];
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const simbol = ["#", "$", "%", "&", "*", "+"];

  let password = "";

  let checkSelected = 0;
  const checkbox = document.querySelectorAll(".check");
  //contando quantos checkbox estão selecionados para fazer a divisão pelo tamanho da senha no laço FOR
  function countCheck() {
    checkbox.forEach((check) => {
      if (check.checked) {
        checkSelected++;
      }
    });
    
  } countCheck();
     
      if (!sizePassword) {
         alert("Defina um tamanho para a senha");
         passwordElement.innerText = "";
         return;
      }

       if (checkSelected == 0) {
         alert("Defina os caracteres da senha!");
         passwordElement.innerText = "";
         return;
      }


  //o resultado da divisão entre o valor de input number e os checkbox selecionados
  //será o numero de vezes que o laço FOR deverá ser executado

  function generateRandomNumber(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

  for (i = 0; i < int_size_password / checkSelected; i++) {

    if (input_upperLetters.checked) {
      password += char_upper[generateRandomNumber(0,char_upper.length -1)];
    }

    if (input_letters.checked) {
      password += char[generateRandomNumber(0,char.length  - 1)];
    }

    if (input_numbers.checked) {
      password += numbers[generateRandomNumber(0,numbers.length - 1)];
    }

    if (input_simbols.checked) {
      password += simbol[generateRandomNumber(0,simbol.length - 1)];
    }
  }

  // limitando a senha ao tamanho do valor definido no input type number
  if (int_size_password % checkSelected != 0) {
    password = password.slice(0, int_size_password);
  }

  passwordElement.innerText = password;
});
