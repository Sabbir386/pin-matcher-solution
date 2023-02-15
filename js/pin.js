function generatePin(){
    const random=Math.round(Math.random()*10000);
    return random
}
function getPinByInputId(){
    const randomPin=generatePin();
    const pinField=document.getElementById('input-pin-field');
    const pinString=randomPin+'';
    if(pinString.length!=4){
        getPinByInputId();
    }
    else{
        pinField.value=randomPin;
    }
    return pinField.value;
    
}

function inputFieldPinById(inputId,targetValue){
    const formPinnumber=document.getElementById(inputId);
    const previousInputValue=formPinnumber.value;
    const currentPinNumber= previousInputValue+targetValue;
    formPinnumber.value=currentPinNumber;
}

document.getElementById('btn-pin').addEventListener('click',function(){
    const currentPin=getPinByInputId();
})

document.getElementById('number-pin').addEventListener('click',function(e){
    const targetValue=e.target.innerText;
    if(isNaN(targetValue)){
        const FormPinValue=document.getElementById('form-pin-field');
        if(targetValue==='C'){
            FormPinValue.value='';
        }
        else if(targetValue==='<'){
            const cutValue=FormPinValue.value;
            const cutvalueSplit=cutValue.split('');
            cutvalueSplit.pop();
            const cutvalueJoin=cutvalueSplit.join('');
            FormPinValue.value=cutvalueJoin
        }
    }
    else{
        const singlePinNumber=inputFieldPinById('form-pin-field',targetValue);
    }
     
})
document.getElementById('btn-pin-match').addEventListener('click', function(){
    const randomPinGenerate=document.getElementById('input-pin-field');
    const randomCurrentPin= randomPinGenerate.value;

    const typedPinNumber=document.getElementById('form-pin-field');
    const typedPin=typedPinNumber.value;

    const pinSuccessMessage = document.getElementById('pin-success');
    const pinFailureMessage = document.getElementById('pin-failure');
    
    if(typedPin===randomCurrentPin){
        pinSuccessMessage.style.display='block';
        pinFailureMessage.style.display='none';
    }
    else{
        pinSuccessMessage.style.display='none';
        pinFailureMessage.style.display='block';
    }
})
   
