//memory cost segment
function updateMemoryCost(isBaseMemory) {
    let totalMemoryCost = document.getElementById('extra-memory-cost');
    if (isBaseMemory == '8gb') {
        totalMemoryCost.innerText = 0;
    } else if (isBaseMemory == '16gb') {
        totalMemoryCost.innerText = 180;
    }
    return totalMemoryCost;
}

// storage cost segment 
function updateStorageCost(isStorage) {
    let totalStorageCost = document.getElementById('extra-storage-cost');
    if (isStorage == '256gb-storage') {
        totalStorageCost.innerText = 0;
    } else if (isStorage == '512gb-storage') {
        totalStorageCost.innerText = 100;
    } else if (isStorage == '1tb-storage') {
        totalStorageCost.innerText = 180;
    }
    return totalStorageCost;
}

// delivery cost segment

function updateDeliveryCost(isDeliveryCharge) {
    let totalDeliveryCost = document.getElementById('extra-delivery-cost');
    if (isDeliveryCharge == 'without-charge') {
        totalDeliveryCost.innerText = 0;
    } else if (isDeliveryCharge == 'with-charge') {
        totalDeliveryCost.innerText = 20;
    }
    return totalDeliveryCost;
}

//Update memory cost 
document.getElementById('16gbMemory').addEventListener('click', function() {
    updateMemoryCost('16gb');
    calculate('16gb');
});
document.getElementById('8gbMemory').addEventListener('click', function() {
    updateMemoryCost('8gb');
    calculate('8gb');
});

//update Storage Cost 
document.getElementById('256gb-ssd').addEventListener('click', function() {
    updateStorageCost('256gb-storage');
    calculate('256gb-storage');
});
document.getElementById('512gb-ssd').addEventListener('click', function() {
    updateStorageCost('512gb-storage');
    calculate('512gb-storage');
});
document.getElementById('1tb-ssd').addEventListener('click', function() {
    updateStorageCost('1tb-storage');
    calculate('1tb-storage');
});
//update delivery cost
document.getElementById('without-delivery-charge').addEventListener('click', function() {
    updateDeliveryCost('without-charge');
    calculate('without-charge');
});
document.getElementById('with-delivery-charge').addEventListener('click', function() {
    updateDeliveryCost('with-charge');
    calculate('with-charge');
});
//promoCode
document.getElementById('code-entered').addEventListener('click', function() {
    calculate('stevekaku');
    document.getElementById('promo-code').value = '';
});

//calculate total amount
function calculate(memory, storage, deliverycharge, code) {

    let memoryCost = updateMemoryCost(memory).innerText;
    const finalMemoryCost = parseInt(memoryCost);
    let storageCost = updateStorageCost(storage).innerText;
    const finalStorageCost = parseInt(storageCost);
    let deliveryCost = updateDeliveryCost(deliverycharge).innerText;
    const finaldeliveryCost = parseInt(deliveryCost);

    let currentBalance = document.getElementById('best-cost').innerText;
    let totalBalance = document.getElementById('total-cost');
    totalBalance.innerText = finalMemoryCost + finalStorageCost + finaldeliveryCost + parseInt(currentBalance);
    //total cost
    let displayCost = document.getElementById('display-cost');
    displayCost.innerText = totalBalance.innerText;

    //promo code
    code = document.getElementById('promo-code').value;
    if (code == 'stevekaku') {
        const lessAmount = parseFloat(totalBalance.innerText) * .20;
        const updateCoast = totalBalance.innerText - parseFloat(lessAmount);
        displayCost.innerText = updateCoast;
    }
}