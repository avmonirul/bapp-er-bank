// step no- 1. add event listener to the deposit button 
document.getElementById('btn-deposit').addEventListener('click', function(){
    // step no- 2. get the deposit ammount from the diposit input field
    // for input field use .value to the value  inside the input field
    const depositField = document.getElementById('deposit-field');
    const depositAmmount = depositField.value;
    // step no- 3. get the deposit total ammount
    // for non input (element other than input,textarea)use inner text to get the text
    const depositTotalElement = document.getElementById('deposit-total');
    const depositTotal = depositTotalElement.innerText;
    depositTotalElement.innerText = depositAmmount;
})