const Function = () => {
  //member variables
  const number = document.getElementById('number');
  const result = document.getElementById('output');

  let num = number.value;
  
  //edge cases
  if(num == ""){
    result.innerHTML = `Please enter a valid number`;
    return;
  }
  if(num <= -1){
    result.innerHTML = `Please enter a number greater than or equal to 1`;
    return;
  } 
  if(num >= 4000){
    result.innerHTML = `Please enter a number less than or equal to 3999`;
    return;
  } 
  
  //Functionality
  let res = "";
  if(num >= 1000){
    for(let i = 1000; i <= num; i += 1000) res += 'M';
    num %= 1000;
  }
  if(num >= 100){
    if(num >= 900) res += "CM";
    else if(num >= 500){
      res += 'D';
      for(let i = 600; i <= num; i += 100) res += 'C';
    } else{
      if(num >= 400) res += "CD";
      else{
        for(let i = 100; i <= num; i += 100) res += 'C';
      }
    }
    num %= 100;
  }
  if(num >= 10){
    if(num >= 90) res += "XC";
    else if(num >= 50){
      res += 'L';
      for(let i = 60; i <= num; i += 10) res += 'X';
    }
    else{
      if(num >= 40) res += "XL";
      else{
        for(let i = 10; i <= num; i += 10) res += 'X';
      }
    }
    num %= 10;
  }
  if(num >= 9) res += "IX";
  else if(num >= 5){
    res += 'V';
    for(let i = 6; i <= num; i += 1) res += 'I';
  }
  else{
    if(num >= 4) res += "IV";
    else{
      for(let i = 1; i <= num; i += 1) res += 'I';
    }
  }
  result.innerHTML = `${res}`;
}
