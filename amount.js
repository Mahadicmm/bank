document.getElementById('deposit-button').addEventListener('click', function(){
    let totalDeposit = document.getElementById('total-deposit');
    let totalDepositText = totalDeposit.innerText;
    let totalDepositNumber = parseFloat(totalDepositText);

    let depositInput = document.getElementById('deposit-input');
    let depositInputText = depositInput.value;
    let depositInputNumber = parseFloat(depositInputText);

    let addDeposit = depositInputNumber + totalDepositNumber;

    let totalAmount = document.getElementById('total-amount');
    let totalAmountText = totalAmount.innerText;
    let totalAmountNumber = parseFloat(totalAmountText);

    let lastDeposit = document.getElementById('last-deposit');
    let lastDepositText = lastDeposit.innerText;
    let lastDepositNumber = parseFloat(lastDepositText);
    lastDeposit.innerText = depositInput.value;
    

    let addTotalAmountNumber = totalAmountNumber + depositInputNumber;

    totalAmount.innerText = addTotalAmountNumber;

    totalDeposit.innerText = addDeposit;
    
    depositInput.value = '';
})

document.getElementById('withdraw-button').addEventListener('click', function(){
    let totalWithdraw = document.getElementById('total-withdraw');
    let totalWithdrawText = totalWithdraw.innerText;
    let totalWithdrawNumber = parseFloat(totalWithdrawText);

    let withdrawInput = document.getElementById('Withdraw-input');
    let WithdrawInputText = withdrawInput.value;
    let withdrawInputNumber = parseFloat(WithdrawInputText);

    let addTotalWithdraw = withdrawInputNumber + totalWithdrawNumber ;

    let totalAmount = document.getElementById('total-amount');
    let totalAmountText = totalAmount.innerText;
    let totalAmountNumber = parseFloat(totalAmountText);

    let minusTotalAmountNumber = totalAmountNumber - withdrawInputNumber;

    totalAmount.innerText = minusTotalAmountNumber;

    totalWithdraw.innerText = addTotalWithdraw;

    withdrawInput.value = '';

})