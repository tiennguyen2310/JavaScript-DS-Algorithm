let price = 19.5;
let cid = [
  ['PENNY', 0.01],
  ['NICKEL', 0],
  ['DIME', 0],
  ['QUARTER', 0],
  ['ONE', 1],
  ['FIVE', 0],
  ['TEN', 0],
  ['TWENTY', 0],
  ['ONE HUNDRED', 0]
];
let vals = [
  ['PENNY', 0.01],
  ['NICKEL', 0.05],
  ['DIME', 0.1],
  ['QUARTER', 0.25],
  ['ONE', 1],
  ['FIVE', 5],
  ['TEN', 10],
  ['TWENTY', 20],
  ['ONE HUNDRED', 100]
];
let taken = [
  ['PENNY', 0],
  ['NICKEL', 0],
  ['DIME', 0],
  ['QUARTER', 0],
  ['ONE', 0],
  ['FIVE', 0],
  ['TEN', 0],
  ['TWENTY', 0],
  ['ONE HUNDRED', 0]
];

let result;

function insufficient(value){
  let sum = 0;
  for(const i of cid){
    sum += i[1];
  }
  if(sum < value - price){
    result.innerHTML = "Status: INSUFFICIENT_FUNDS";
    return true;
  }
  return false;
}

const Function = () => {
  //variables
  const textInput = document.getElementById('cash');
  result = document.getElementById('change-due');

  //edge cases
  if(textInput.value < price){
    alert("Customer does not have enough money to purchase the item");
    return;
  }
  if(textInput.value == price){
    result.innerHTML = "No change due - customer paid with exact cash";
    return;
  }
  
  //process text
  let val = textInput.value;
  if(insufficient(val)){
    return;
  }

  let change = val - price;
  let flag = false;
  for(let i = vals.length - 1; i >= 0; i--){
    if(change == 0)
      break;
    let units;
    if(change >= cid[i][1]){
      units = cid[i][1] / vals[i][1];
    } else{
      //change < cid[i][1]
      units = Math.floor(change / vals[i][1]);
      flag = true;
    }
    taken[i][1] = (units);
    change -= (units * vals[i][1]);
    change = (Math.round(change * 100)) / 100;
  }

  if(Math.abs(change) > 0.001){
    result.innerHTML = "Status: INSUFFICIENT_FUNDS";
    return;
  }

  result.innerHTML = "Status: ";

  if(!flag)
    result.innerHTML += "CLOSED ";
  else 
    result.innerHTML += "OPEN ";

  for(let i = taken.length - 1; i >= 0; i--){
    if(taken[i][1] > 0){
      console.log((taken[i][0] + ": " + "$" + (vals[i][1] * taken[i][1]) + " "));
      result.innerHTML += (taken[i][0] + ": " + "$" + (vals[i][1] * taken[i][1]) + " ");
    }
  }
}
