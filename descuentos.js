
function offPrice(price, discount){

    const percentagePrice = 100 - discount;
    const offPrice = (price * percentagePrice) / 100;
    return offPrice;
};

function calcOffPrice(){
    
    const priceInput = document.getElementById("priceInput");
    const priceValue = priceInput.value;

    const discountInput = document.getElementById("discountInput");
    const discountValue = discountInput.value;

    const output = offPrice(priceValue, discountValue);
    
    const outputText = document.getElementById("resultValue");
    outputText.innerHTML = `El precio con descuento es $${output}`

}


   
