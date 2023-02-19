//1. add even handler with the withdraw button 
//2. get the withdraw ammouny=t from the withdraw input field 
//3. also make sure to convert the input into a number by using persfloat
//4. get privuse withdraw total
//4.5 calculater total withdraw ammount
//5. get the previouse blance total
//6. calculate new balance total
//6.5 set the new balance total
//7. clear the input field
// step-1
document.getElementById('btn-withdraw').addEventListener('click', function(){
    // step-2
    const withdrawField = document.getElementById('withdraw-field')
    const newWithDrawAmmountString = withdrawField.value;
    const newWithdrawAmmount = parseFloat(newWithDrawAmmountString);
    

         //step-7
         withdrawField.value = '';

    if(isNaN(newWithdrawAmmount)){
        alert('Please provide valid number');
        return;
    }
    // step-3 
    const withdrawtotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawtotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
    
    //step-5
    const blanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = blanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    
    if(newWithdrawAmmount > previousBalanceTotal){
        alert('bap er bank e eto taka'); 
        return;
    }
    //step-4
    const currenrWithdrawTotal = previousWithdrawTotal + newWithdrawAmmount;
    withdrawtotalElement.innerText = currenrWithdrawTotal;

    //step-6
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmmount;
    blanceTotalElement.innerText = newBalanceTotal;

   
})