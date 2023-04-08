function getInputFieldValueById(inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseInt(inputFieldValueString);
    return inputFieldValue;
}
document.getElementById('calculate-btn').addEventListener('click', function(){
    // income 
    const income = getInputFieldValueById('income');
    // food, rent, clothes
    const food = getInputFieldValueById('food');
    const rent = getInputFieldValueById('rent');
    const clothes = getInputFieldValueById('clothes');
    // total expense
    const totalExpense = food + rent + clothes;
    const totalExpenseElement = document.getElementById('total-expense');
    totalExpenseElement.innerText = totalExpense;
    // total balance 
    const totalBalance = income - totalExpense;
    const balanceField = document.getElementById('balance');
    balanceField.innerText = totalBalance;
});