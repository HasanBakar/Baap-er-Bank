document.getElementById('btn_withdraw').addEventListener('click', function () {

    const inputValue = getInputFieldValue('withdraw_field');
    const textValue = getTextFieldValue('Previous_withdraw');
    const depositSum = inputValue + textValue;
    setValue('Previous_withdraw', depositSum);
    const previousBalance = getTextFieldValue('previous_balance');
    const finalBalance = previousBalance - inputValue;
    setValue('previous_balance', finalBalance)

});


/**
 * step-1: add event handler with id
 * step-2:get input field value
 * step-3: get previous withdraw amount
 * step-4: calculate total withdraw amount and set the withdraw board
 * step-5: get total balance
 * step-6: Reduce balance and set new amount
 */
// step-1:
// document.getElementById('btn_withdraw').addEventListener('click', function () {
//     // step-2:
//     const inputField = document.getElementById('withdraw_field');
//     const inputFieldValueString = inputField.value;
//     const inputFieldValue = Number(inputFieldValueString);

//     // step-3:

//     const previousWithdraw = document.getElementById('Previous_withdraw');
//     const previousWithdrawValueString = previousWithdraw.innerText;
//     const previousWithdrawValue = Number(previousWithdrawValueString);

//     // step-4:
//     const currentWithdrawAmount = inputFieldValue + previousWithdrawValue;
//     previousWithdraw.innerText = currentWithdrawAmount;

//     // step-5:
//     const previousBalance = document.getElementById('previous_balance');
//     const previousBalanceValueString = previousBalance.innerText;
//     const previousBalanceValue = Number(previousBalanceValueString);

//     // step-6:
//     const currentBalanceThanReduce = previousBalanceValue - inputFieldValue;
//     previousBalance.innerText = currentBalanceThanReduce;


//     // step - end:
//     inputField.value = '';
// })