function checkValid(str){
  const num1 = /^\d\d\d-\d\d\d-\d\d\d\d$/; //555-555-5555
  const num2 = /^\(\d\d\d\)\d\d\d-\d\d\d\d$/; //(555)555-5555
  const num3 = /^\(\d\d\d\)\s\d\d\d-\d\d\d\d$/; //(555) 555-5555
  const num4 = /^\d\d\d\s\d\d\d\s\d\d\d\d$/; //555 555 5555
  const num5 = /^\d\d\d\d\d\d\d\d\d\d$/; // 5555555555
  const num6 = /^1\s\d\d\d\s\d\d\d\s\d\d\d\d$/; // 1 555 55555555
  const num7 = /^1\s\(\d\d\d\)\s\d\d\d-\d\d\d\d$/; // 1 (555) 555-5555
  const num8 = /^1\(\d\d\d\)\d\d\d-\d\d\d\d$/; // 1(555)555-5555
  const num9 = /^1\s\d\d\d-\d\d\d-\d\d\d\d$/; // 1 555-555-5555
  const nums = [num1, num2, num3, num4, num5, num6, num7, num8, num9];

  for(const i of nums){
    if(i.test(str))
      return true;
  }
  return false;
}

const Function = () => {
  //member variables
  const textInput = document.getElementById('user-input');
  const result = document.getElementById('results-div');

  //edge case
  if(textInput.value.trim() === ''){
    alert("Please provide a phone number");
  }
  
  //process text
  const text = textInput.value;
  if(checkValid(text)){
    result.innerHTML = 'Valid US number: ' + text;
  } else{
    result.innerHTML = 'Invalid US number: ' + text;
  }
}

const Clear = () => {
  const result = document.getElementById('results-div');
  result.innerHTML = '';
}
