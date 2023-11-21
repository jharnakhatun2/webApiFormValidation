// function formValidation() {
//     const inputEle = document.getElementById('id1');

//     if(inputEle.checkValidity()) {
//         validationMessage;
//     }
// }


function formValidation() {
    const inputEle = document.getElementById('id1');
    
    if(inputEle.validity.rangeOverflow) {
        inputEle.setCustomValidity("You have made a range overflow error!");
    }else if(inputEle.validity.rangeUnderflow) {
        inputEle.setCustomValidity("You have made a range underflow error!");
    }else if(inputEle.validity.valueMissing) {
        inputEle.setCustomValidity("Value Missing error!");
    }else{
        validationMessage;
    }  
}