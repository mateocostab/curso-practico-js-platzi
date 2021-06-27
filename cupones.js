const coupons = 
[
{coupon: "CUPON10", discount: 10}, 
{coupon: "CUPON20", discount: 20}, 
{coupon: "CUPON30", discount: 30},
];

function offPrice(price, discount){
    const percentagePrice = 100 - discount;
    const offPrice = (price * percentagePrice) / 100;
    return offPrice;
}

function calcDiscount(){
    const priceInput = document.getElementById("priceInput");
    const priceValue = priceInput.value;
    
    const couponInput = document.getElementById("couponInput");
    const couponValue = couponInput.value;
    const discountText = document.getElementById("resultValue");
    
    const couponValid = function(coupons){
        return coupons.coupon === couponValue;
    }

    const userCoupon = coupons.find(couponValid);

    if(!userCoupon){
        discountText.innerHTML = `El cupón ${couponValue} no es valído`;
    }

    else{

        const discount = userCoupon.discount;
        const output = offPrice(priceValue, discount);
        
        discountText.innerHTML = `El precio con descuento es de ${output}`;
    }
    

}