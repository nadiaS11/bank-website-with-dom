//Bank statement
const btnDeposit = document.getElementById("btn-deposit");
btnDeposit.addEventListener("click", function () {
  //get the deposit input
  let depositInputField = document.getElementById("deposit-input");
  if(isNaN(parseFloat(depositInputField.value))){
    alert("Please provide an amount")
    depositInputField.value = ''
    return;
}

  const newDepositAmount = parseFloat(depositInputField.value);

  // get  deposit total
  let depositTotalElement = document.getElementById("deposit-amount");
  const previousDepositTotal = parseFloat(depositTotalElement.innerText);
  const currentDepositTotal = previousDepositTotal + newDepositAmount;

  depositTotalElement.innerText = currentDepositTotal;

  // Balance Amount
  let previousBalance = document.getElementById("balance-amount");
  const newBalance =
    parseFloat(previousBalance.innerText) + currentDepositTotal;
  previousBalance.innerText = newBalance;

  depositInputField.value = "";
});

const btnWithdraw = document.getElementById("btn-withdraw");
btnWithdraw.addEventListener("click", function () {
    //get the withdraw input
    let withdrawInput = document.getElementById("withdraw-input")

    if(isNaN(parseFloat(withdrawInput.value))){
        alert("Please provide an amount")
        withdrawInput.value = ''
        return;
    }

    // Balance Amount
  let previousBalance = document.getElementById("balance-amount");
  
  if(parseFloat(withdrawInput.value)>parseFloat(previousBalance.innerText)){
    alert("Chaall futt fakirrr")
  }
  else{
    // get the previous withdraw
    const previousWithdraw = document.getElementById("withdraw-amount")
    const newWithdraw = parseFloat(previousWithdraw.innerText) + parseFloat(withdrawInput.value)

    previousWithdraw.innerText = newWithdraw
    const newBalance =
    parseFloat(previousBalance.innerText) - parseFloat(withdrawInput.value);
  previousBalance.innerText = newBalance;
  }


  

  withdrawInput.value = ''
 

});
