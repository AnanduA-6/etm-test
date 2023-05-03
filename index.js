



const value = sessionStorage.getItem('token');
console.log(value, 'got token in page 1');


const dropDown = document.querySelectorAll('.dropDownCurrency')
const dropDownList = document.querySelector('.dropDownList')
const body = document.querySelector('body')
const overLay = document.querySelector('.overlayShade')
const getRateBtn = document.querySelector('.getRateBtnSpan')

let currencyArray = [];
let amountArray = [];

// let currency1 = sessionStorage.getItem('currency1')
// let currency2 = sessionStorage.getItem('currency2')
// let currency3 = sessionStorage.getItem('currency3')

// let amount1 = sessionStorage.getItem('amount1')
// let amount2 = sessionStorage.getItem('amount2')
// let amount3 = sessionStorage.getItem('amount3')

let amountString;
let currencyString;



// function approxAmount(currencyString, amountString) {
//     console.log(amountString);
//     fetch('https://mvc.extravelmoney.com/pwa-functions/', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/x-www-form-urlencoded'
//         },
//         body: `action=approx_amount&currency=${currencyString}&amount=${amountString}`
//     })
//         .then(response => response.json())
//         .then(data => {
//             console.log(data.total);
//             changeApprox(data.total)
//             if (data.total !== 0) {
//                 getRateBtn.style.background = '#0E1226'
//             }
//             else{
//                 getRateBtn.style.background = '#C7CCCA'
//             }
//         })

//         .catch(error => console.error(error))

// }

// if (currency1) {
//     document.querySelector('.primaryDropDown1').textContent = currency1
//     currencyArray[0] = currency1.slice(0, 3);
// }
// if (currency2) {
//     document.querySelector('.currencySelectorMain2').style.display = 'flex'
//     document.querySelector('.addCurrency1').style.display = 'none'
//     document.querySelector('.addCurrency2').style.display = 'flex'
//     document.querySelector('.approxValueIndicator1').style.display = 'none'
//     document.querySelector('.approxValueIndicator2').style.display = 'flex'
//     document.querySelector('.primaryDropDown2').textContent = currency2
//     currencyArray[1] = currency2.slice(0, 3);
// }
// if (currency3) {
//     document.querySelector('.currencySelectorMain3').style.display = 'flex'
//     document.querySelector('.addCurrency2').style.display = 'none'
//     document.querySelector('.approxValueIndicator2').style.display = 'none'
//     document.querySelector('.approxValueIndicator3').style.display = 'flex'
//     document.querySelector('.primaryDropDown3').textContent = currency3
//     currencyArray[2] = currency2.slice(0, 3);
// }
// if (amount1) {
//     amountArray[0] = amount1
//     document.querySelector('.amountInput1').value = amount1
//     amountString = amountArray.join(',');
//     currencyString = currencyArray.join(',');
//     approxAmount(currencyString, amountString);
// }
// if (amount2) {
//     amountArray[2] = amount2
//     document.querySelector('.amountInput2').value = amount2
//     amountString = amountArray.join(',');
//     currencyString = currencyArray.join(',');
//     approxAmount(currencyString, amountString);
// }
// if (amount3) {
//     amountArray[3] = amount3
//     document.querySelector('.amountInput3').value = amount3
//     amountString = amountArray.join(',');
//     currencyString = currencyArray.join(',');
//     approxAmount(currencyString, amountString);
// }


let counter = 0;
function dropDownTrigger() {
    body.classList.add('bodyMinified')
    dropDownList.classList.add('showDropDownList')
    overLay.style.transitionDelay = '0s'
    overLay.classList.add('showOverLayShade')
}

document.querySelector('.dropDownCurrency1').addEventListener('click', () => {
    counter = 1;
})
document.querySelector('.dropDownCurrency2').addEventListener('click', () => {
    counter = 2;
})
document.querySelector('.dropDownCurrency3').addEventListener('click', () => {
    counter = 3;
})


dropDownList.addEventListener('click', (event) => {

    if (event.target.tagName === 'SPAN') {

        if (counter === 1) {
            document.querySelector('.primaryDropDown1').textContent = event.target.textContent
            currencyArray[0] = event.target.textContent.slice(0, 3);
            let value = event.target.textContent;
            sessionStorage.setItem('currency1', value)
        } else if (counter === 2) {
            document.querySelector('.primaryDropDown2').textContent = event.target.textContent
            currencyArray[1] = event.target.textContent.slice(0, 3);
            let value = event.target.textContent;
            sessionStorage.setItem('currency2', value)
        }
        else if (counter === 3) {
            document.querySelector('.primaryDropDown3').textContent = event.target.textContent
            currencyArray[2] = event.target.textContent.slice(0, 3);
            let value = event.target.textContent;
            sessionStorage.setItem('currency3', value)
        }
        dropDownList.classList.remove('showDropDownList');
        overLay.style.transitionDelay = '0.3s'
        overLay.classList.remove('showOverLayShade')
        body.classList.remove('bodyMinified')
    }
})


overLay.addEventListener('click', (event) => {
    if (!event.target.closest('.dropDownList')) {
        dropDownList.classList.remove('showDropDownList');
        overLay.style.transitionDelay = '0.3s'
        overLay.classList.remove('showOverLayShade')
        body.classList.remove('bodyMinified')
    }

});

document.querySelector('.addCurrency1').addEventListener('click', () => {
    document.querySelector('.currencySelectorMain2').style.display = 'flex'
    document.querySelector('.addCurrency1').style.display = 'none'
    document.querySelector('.addCurrency2').style.display = 'flex'
    document.querySelector('.approxValueIndicator1').style.display = 'none'
    document.querySelector('.approxValueIndicator2').style.display = 'flex'
})
document.querySelector('.addCurrency2').addEventListener('click', () => {
    document.querySelector('.currencySelectorMain3').style.display = 'flex'
    document.querySelector('.addCurrency2').style.display = 'none'
    // document.querySelector('.addCurrency3').style.display = 'flex'
    document.querySelector('.approxValueIndicator2').style.display = 'none'
    document.querySelector('.approxValueIndicator3').style.display = 'flex'
})

document.querySelector('.amountInput1').addEventListener('input', (e) => {
    let value = e.target.value;
    if (!isNaN(value)) {
        amountArray[0] = value;
        if (currencyArray.length != 0) {
            sessionStorage.setItem('amount1', value)
        }
    }
})
document.querySelector('.amountInput2').addEventListener('input', (e) => {
    let value = e.target.value;
    if (!isNaN(value)) {
        amountArray[1] = value;
        if (currencyArray.length != 0) {
            sessionStorage.setItem('amount2', value)
        }
    }
})
document.querySelector('.amountInput3').addEventListener('input', (e) => {
    let value = e.target.value;
    if (!isNaN(value)) {
        amountArray[2] = value;
        if (currencyArray.length != 0) {
            sessionStorage.setItem('amount3', value)
        }
    }
})

const inputListener = document.querySelectorAll('.amountInput')
inputListener.forEach(item => {
    item.addEventListener('input', () => {
        if (amountArray.length != 0 && currencyArray.length != 0) {
            getRateBtn.style.background = '#0E1226'
            amountString = amountArray.join(',');
            currencyString = currencyArray.join(',');
            fetch('https://mvc.extravelmoney.com/pwa-functions/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `action=approx_amount&currency=${currencyString}&amount=${amountString}`
            })
                .then(response => response.json())
                .then(data => changeApprox(data.total))
                .catch(error => console.error(error))
        }
        else {
            getRateBtn.style.background = '#C7CCCA'
            console.log('null');
        }
    })
})

dropDownList.addEventListener('click', (event) => {
    if (event.target.tagName === 'SPAN') {
        if (amountArray.length != 0 && currencyArray.length != 0) {
            getRateBtn.style.background = '#0E1226'

            amountString = amountArray.join(',');
            currencyString = currencyArray.join(',');
            fetch('https://mvc.extravelmoney.com/pwa-functions/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `action=approx_amount&currency=${currencyString}&amount=${amountString}`
            })
                .then(response => response.json())
                .then(data => changeApprox(data.total))

                .catch(error => console.error(error))
        }
        else {
            getRateBtn.style.background = '#C7CCCA'
            console.log('null');
        }
    }
})

const approxAll = document.querySelectorAll('.approx')
function changeApprox(data) {
    approxAll.forEach(item => {
        item.textContent = data
    })
}

getRateBtn.addEventListener('click', () => {
    if (amountArray.length != 0 && currencyArray.length != 0) {


        fetch('https://mvc.extravelmoney.com/pwa-functions/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `action=initial_data&currency=${currencyString}&amount=${amountString}`
        })
            .then(response => response.json())
            .then(data => {
                let status = data.status
                let token = data.token
                if (status === 1) {
                    console.log(token);
                    sessionStorage.setItem('token', token);
                    const value = sessionStorage.getItem('token');
                    console.log(value, 'got token');
                    const inputElements = document.querySelectorAll('input');

                    inputElements.forEach((input) => {
                        input.value = '';
                    });
                    window.location.href = "page2.html";
                } else {
                    console.log('under maintenance');
                }
            })
            .catch(error => console.error(error))
    }
    else {
        console.log('not accessible');
    }
})





