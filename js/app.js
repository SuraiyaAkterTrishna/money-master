function getInputFieldValueById(inputId) {
    const inputField = document.getElementById(inputId);
    const inputFieldValueString = inputField.value;
    
    // Validate the input field
    if (inputFieldValueString === "" || isNaN(inputFieldValueString) || Number(inputFieldValueString) === 0) {
      return null;
    }
    
    const inputFieldValue = parseInt(inputFieldValueString);
    return inputFieldValue;
  }

function updateElementTextFieldById(elementId, value){
    const elementField = document.getElementById(elementId);
    elementField.innerText = value;
}

// expense
document.getElementById('calculate-btn').addEventListener('click', function(){
    const income = getInputFieldValueById('income');
    const food = getInputFieldValueById('food');
    const rent = getInputFieldValueById('rent');
    const clothes = getInputFieldValueById('clothes');
  
    // Check if any input fields are invalid
    if (income === null || food === null || rent === null || clothes === null) {
      return; // exit the function if any input is invalid
    }
  
    const expense = food + rent + clothes;
    updateElementTextFieldById('total-expense', expense);
  
    const balance = income - expense;
    updateElementTextFieldById('balance', balance);
  });

// saving amount
document.getElementById('btn-save').addEventListener('click', function(){
    const income = getInputFieldValueById('income');
    const saveRate = getInputFieldValueById('save');
    const save = (saveRate * income) / 100;
    updateElementTextFieldById('saving-amount', save);

    const previousBalanceField = document.getElementById('balance');
    const previousBalanceString = previousBalanceField.innerText;
    const previousBalance = parseInt(previousBalanceString);
    
    const remainingBalance = previousBalance - save;
    updateElementTextFieldById('remaining-balance', remainingBalance);
});