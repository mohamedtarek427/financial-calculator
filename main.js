const brex = document.querySelector('.brex');
const stripe = document.querySelector('.stripe');
const amex = document.querySelector('.amex');

document.querySelector('.brex').addEventListener('click', 

function bradReward(e) {
    const vendorBills = document.querySelector('.vendorBillsValue');
    const vendorBillsValue = parseFloat(vendorBills.value);
    
    const corpSpend = document.querySelector('.corpSpend');
    const corpSpendValue = parseFloat(corpSpend.value);
    
    const mediaAD = document.querySelector('.mediaAD');
    const mediaADValue = parseFloat(mediaAD.value);
    
    const teamProject = document.querySelector('.teamProject');
    const teamProjectValue = parseFloat(teamProject.value);
    
    const sum = vendorBillsValue + corpSpendValue + mediaADValue + teamProjectValue;
    document.querySelector('.brexRewardValue').innerHTML = sum * 0.3
    e.preventDefault()
    }
)
