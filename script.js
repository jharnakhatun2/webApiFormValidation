function formValidation() {
    const inputEle = document.getElementById('id1');

    if(inputEle.checkValidity()) {
        inputEle.validationMessage;
    }
}