

bankNumber.addEventListener("input", (event) => {
    if(bankNumber.validity.patternMismatch){
        bankNumber.setCustomValidity("Only numbers please");
    }else{
        bankNumber.setCustomValidity("");
    }
})

account.addEventListener("input", (event) => {
    if(account.validity.patternMismatch){
        account.setCustomValidity("Only numbers please");
    }else{
        account.setCustomValidity("");
    }
})

phone.addEventListener("input", (event) => {
    if(phone.validity.patternMismatch){
        phone.setCustomValidity("Please enter a correct phone number");
    }else{
        phone.setCustomValidity("");
    }
})

income.addEventListener("input", (event) => {
    if(income.validity.patternMismatch){
        income.setCustomValidity("Please enter a valid amount");
    }else{
        income.setCustomValidity("");
    }
})
