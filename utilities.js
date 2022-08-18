function getInputFieldValue(inputId) {
    const element = document.getElementById(inputId);
    const elementValueString = element.value;
    const elementValue = Number(elementValueString);
    element.value = '';
    return elementValue;
};

function getTextFieldValue(textId) {
    const textField = document.getElementById(textId);
    const textFieldValueString = textField.innerText;
    const textFieldValue = Number(textFieldValueString);
    return textFieldValue;
};

function setValue(elementId, value) {
    const totalDeposit = document.getElementById(elementId);
    totalDeposit.innerText = value;
};
