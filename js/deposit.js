// step no- 1. add event listener to the deposit button 
document.getElementById('btn-deposit').addEventListener('click', function(){
    // step no- 2. get the deposit ammount from the diposit input field
    // for input field use .value to the value  inside the input field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmmountString = depositField.value;
    const newDepositAmmount = parseFloat(newDepositAmmountString);
    
    // step no- 3. get the deposit total ammount
    // for non input (element other than input,textarea)use inner text to get the text
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalStrung = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalStrung);
    console.log(typeof previousDepositTotal);
    const currentDepositTotal = previousDepositTotal + newDepositAmmount;

    depositTotalElement.innerText = currentDepositTotal;

    // step no- 4. clear thre deposit field
    depositField.value = '';
})