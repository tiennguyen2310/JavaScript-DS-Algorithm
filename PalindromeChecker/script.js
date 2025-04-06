const Function = () => {
  //member variables
  const textInput = document.getElementById('text-input');
  const result = document.getElementById('result');

  //edge case
  if(textInput.value.trim() === ''){
    alert("Please input a value");
  }
  
  //process text
  const validText = textInput.value.replace(/[^a-zA-Z0-9]/g, '');
  console.log(validText);
  const lowerCase = validText.toLowerCase();
  const reversedLowerCase = lowerCase.split("").reverse().join("");

  //result
  if(lowerCase === reversedLowerCase){
    result.innerHTML = `${textInput.value} is a palindrome!`;
  } else {
    result.innerHTML = `${textInput.value} is not a palindrome!`;
  }
}
