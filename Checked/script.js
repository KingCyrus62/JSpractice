const checkBox = document.getElementById(`checkBox`);
const visaBtn = document.getElementById(`visaBtn`);
const masterCardBtn = document.getElementById(`masterCardBtn`);
const payPalBtn = document.getElementById(`payPalBtn`);
const submitBtn = document.getElementById(`submitBtn`);
const submitResult = document.getElementById(`subscribeResult`);
const paymentResult = document.getElementById(`paymentResult`);
submitBtn.onclick = function(){
    if(checkBox.checked){
        submitResult.textContent = `You are subscribed`;
    }
    else {
        submitResult.textContent = `You are not subscribed`;
    }

    if(visaBtn.checked){
        paymentResult.textContent = `you are paying with Visa`;
    }
    else if(masterCardBtn.checked){
        paymentResult.textContent = `you are paying with Mastercard`;
    }
    else if(payPalBtn.checked){
        paymentResult.textContent = `you are paying with PayPal`;
    }
    else{
        paymentResult.textContent=`Please select a payment option.`;
    }

}
