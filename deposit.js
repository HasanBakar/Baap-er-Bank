/**
 * step-1: define a function for getting to input field value
 * step-2: define a function for getting to text field value
 */
document.getElementById('btn_deposit').addEventListener('click', function () {

    const inputValue = getInputFieldValue('deposit_field');
    const textValue = getTextFieldValue('current_deposit');
    const depositSum = inputValue + textValue;
    setValue('current_deposit', depositSum);
    const previousBalance = getTextFieldValue('previous_balance');
    const finalBalance = inputValue + previousBalance;
    setValue('previous_balance', finalBalance)

});




/**
 * step-1: add event handler
 * step-2: get input field value
 * step-3: get previous deposit amount
 * step-4: calculate previous and instant deposit than set total deposit
 * step-5: get previous balance
 * step-6: calculate current balance and set Total balance
 */
// step-1:

// document.getElementById('btn_deposit').addEventListener('click', function () {

//     //    step-2: get input field value
//     const depositField = document.getElementById('deposit_field');
//     const depositFieldValueString = depositField.value;
//     const depositFieldValue = Number(depositFieldValueString);

//     // step-3:
//     const previousDeposit = document.getElementById('current_deposit');
//     const previousDepositValueString = previousDeposit.innerText;
//     const previousDepositValue = Number(previousDepositValueString);

//     // step-4:
//     const totalDeposit = depositFieldValue + previousDepositValue;
//     previousDeposit.innerText = totalDeposit;


//     // step-5:
//     const previousBalance = document.getElementById('previous_balance');
//     const previousBalanceValueString = previousBalance.innerText;
//     const previousBalanceValue = Number(previousBalanceValueString);

//     // step-6:
//     const currentBalance = previousBalanceValue + depositFieldValue;
//     previousBalance.innerText = currentBalance;


//     // step-end
//     depositField.value = '';
// });