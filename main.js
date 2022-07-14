const brex = document.querySelector('.brex');
const stripe = document.querySelector('.stripe');
const amex = document.querySelector('.amex');

document.querySelector('.brex').addEventListener('click', 

function brexReward(e) {
    const vendorBills = document.querySelector('.vendorBillsValue');
    const vendorBillsValue = parseFloat(vendorBills.value);
    
    const corpSpend = document.querySelector('.corpSpend');
    const corpSpendValue = parseFloat(corpSpend.value);
    
    const mediaAD = document.querySelector('.mediaAD');
    const mediaADValue = parseFloat(mediaAD.value);
    
    const teamProject = document.querySelector('.teamProject');
    const teamProjectValue = parseFloat(teamProject.value);
    
    const sum = vendorBillsValue + corpSpendValue + mediaADValue + teamProjectValue;
    document.querySelector('.brandRewardValue').innerHTML = sum * 0.3;
    document.querySelector('.unlimitedRewards').innerHTML = sum * 1.1;
    document.querySelector('.lifetimeRewards').innerHTML = sum * 1.2;
    e.preventDefault()
    }
)


document.querySelector('.stripe').addEventListener('click', 

function stripeReward(e) {
    const vendorBills = document.querySelector('.vendorBillsValue');
    const vendorBillsValue = parseFloat(vendorBills.value);
    
    const corpSpend = document.querySelector('.corpSpend');
    const corpSpendValue = parseFloat(corpSpend.value);
    
    const mediaAD = document.querySelector('.mediaAD');
    const mediaADValue = parseFloat(mediaAD.value);
    
    const teamProject = document.querySelector('.teamProject');
    const teamProjectValue = parseFloat(teamProject.value);
    
    const sum = vendorBillsValue + corpSpendValue + mediaADValue + teamProjectValue;
    document.querySelector('.brandRewardValue').innerHTML = sum * 2.9
    document.querySelector('.unlimitedRewards').innerHTML = sum * 1.1;
    document.querySelector('.lifetimeRewards').innerHTML = sum * 1.2;
    e.preventDefault()
    }
)

document.querySelector('.amex').addEventListener('click', 

function amexReward(e) {
    const vendorBills = document.querySelector('.vendorBillsValue');
    const vendorBillsValue = parseFloat(vendorBills.value);
    
    const corpSpend = document.querySelector('.corpSpend');
    const corpSpendValue = parseFloat(corpSpend.value);
    
    const mediaAD = document.querySelector('.mediaAD');
    const mediaADValue = parseFloat(mediaAD.value);
    
    const teamProject = document.querySelector('.teamProject');
    const teamProjectValue = parseFloat(teamProject.value);
    
    const sum = vendorBillsValue + corpSpendValue + mediaADValue + teamProjectValue;
    document.querySelector('.brandRewardValue').innerHTML =  sum * 1.3
    document.querySelector('.unlimitedRewards').innerHTML = sum * 1.1;
    document.querySelector('.lifetimeRewards').innerHTML = sum * 1.2;
    e.preventDefault()
    }
)
function textHandlerBrex () {
   document.querySelector('.brand-name').innerHTML = "Brex Business Card"
}

function textHandlerStripe () {
    document.querySelector('.brand-name').innerHTML = "stripe Business Card"
 }

 function textHandlerAmex () {
    document.querySelector('.brand-name').innerHTML = "amex Business Card"
 }

