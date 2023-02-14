// add even handler with the withdraw button 
// get the withdraw ammouny=t from the withdraw input field 
// also make sure to convert the input into a number by using persfloat
// get privuse withdraw total
// step-1
document.getElementById('btn-withdraw').addEventListener('click', function(){
    // step-2
    const withdrawField = document.getElementById('withdraw-field')
    const newWithDrawAmmountString = withdrawField.value;
    const newWithdrawAmmount = parseFloat(newWithDrawAmmountString);
    // step-3 
    const withdrawtotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawtotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
    //step-4
    const currenrWithdrawTotal = previousWithdrawTotal + newWithdrawAmmount;
    // step-5
    withdrawtotalElement.innerText = currenrWithdrawTotal;
})