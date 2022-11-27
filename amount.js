document.getElementById('deposit-button').addEventListener('click', function(){

    let depositInput = document.getElementById('deposit-input');
    let depositInputText = depositInput.value;
    let depositInputNumber = parseFloat(depositInputText);

    if(depositInput.value > 0){
        let totalDeposit = document.getElementById('total-deposit');
    let totalDepositText = totalDeposit.innerText;
    let totalDepositNumber = parseFloat(totalDepositText);

   

    let addDeposit = depositInputNumber + totalDepositNumber;

    let totalAmount = document.getElementById('total-amount');
    let totalAmountText = totalAmount.innerText;
    let totalAmountNumber = parseFloat(totalAmountText);

    let lastDeposit = document.getElementById('last-deposit');
    let lastDepositText = lastDeposit.innerText;
    lastDepositNumber = parseFloat(lastDepositText);
    lastDeposit.innerText = depositInput.value

    
    

    let addTotalAmountNumber = totalAmountNumber + depositInputNumber;

    totalAmount.innerText = addTotalAmountNumber;

    totalDeposit.innerText = addDeposit;
    
    depositInput.value = '';
    }
    depositInput.value = '';
    
})

document.getElementById('withdraw-button').addEventListener('click', function(){

    let withdrawInput = document.getElementById('Withdraw-input');
    let WithdrawInputText = withdrawInput.value;
    let withdrawInputNumber = parseFloat(WithdrawInputText);

    let totalAmount = document.getElementById('total-amount');
    let totalAmountText = totalAmount.innerText;
    let totalAmountNumber = parseFloat(totalAmountText);

    if(withdrawInput.value < totalAmountNumber && withdrawInput.value > 0){
        let totalWithdraw = document.getElementById('total-withdraw');
    let totalWithdrawText = totalWithdraw.innerText;
    let totalWithdrawNumber = parseFloat(totalWithdrawText);

    

    let addTotalWithdraw = withdrawInputNumber + totalWithdrawNumber ;

   

    let minusTotalAmountNumber = totalAmountNumber - withdrawInputNumber;

    totalAmount.innerText = minusTotalAmountNumber;

    totalWithdraw.innerText = addTotalWithdraw;

    withdrawInput.value = '';
    }

    
    withdrawInput.value = '';

})
