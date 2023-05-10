


sessionStorage.setItem('confirmation', false);
const value = sessionStorage.getItem('token');
// console.log(value, 'got token in page 1');


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
        if (amountArray.length != 0 && currencyArray.length != 0&&amountArray[0]!="") {
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
    console.log(data);
    approxAll.forEach(item => {
        item.textContent = data
    })
}

getRateBtn.addEventListener('click', () => {
    getRateFunction();
})

function getRateFunction() {
    console.log('hey');
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
                    sessionStorage.setItem('token', token);
                    const value = sessionStorage.getItem('token');
                    // console.log(value, 'got token');
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
}




let uid = 34799;
fetch('https://mvc.extravelmoney.com/pwa-functions/', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: `action=order_list&uid=${uid}`
})
    .then(response => response.json())
    .then(data => {
        if (data.result === 'true') {

            document.querySelector('.scrollAreaContainer').style.display = 'none'
            document.querySelector('.getRateBtnContainer').classList.add('whgetRateBtnContainer')
            document.querySelector('.main').classList.add('withHistory')
            document.querySelectorAll('.currencyAddingSection').forEach(item => {
                item.innerHTML = '<img src="assets/addBtnRound.svg" alt="" style="width:1rem;"><span class="currencyAdding">Add currency</span>'
                item.classList.add('wh_currencyAddingSection')
            })
            document.querySelector('.wh_divider').style.display = 'block'
            document.querySelector('.withHistory').querySelector('.trackOrderMain').style.display = 'flex'

            let element=data.order_list[0];
            let date = new Date(element.date);

            let monthName = date.toLocaleString('default', { month: 'long' }).substring(0, 3);
            let day = date.getDate();
            let year = date.getFullYear();
            let status;
            if (element.status === '1') {
                status = '<img src="assets/pendingOrder.svg" alt="">Pending Order Confirmation'
            }
            if (element.status === '2') {
                status = '<img src="assets/pendingOrder.svg" alt="">In Transit'
            }
            if (element.status === '3') {
                status = '<img src="assets/confirmedOrder (1).svg" alt="">Transaction Complete'
            }
            if (element.status === '4') {
                status = '<img src="assets/pendingOrder.svg" alt="">KYC Verification'
            }
            if (element.status === '5') {
                status = '<img src="assets/canceledOrder.svg" alt="">Cancelled'
            }

            document.querySelector('.withHistory').querySelector('.orderCardContainer').innerHTML =
                `<div class="orderCard " style="width:95%;">
                <div class="orderCrdSubDiv1 pendingOrder">
                    <span>Currency</span>
                    <span>
                        ${status}
                    </span>
                </div>
                ${element.currency.map((item, index) => {
                    return `<div class="orderCrdSubDiv2"><p>${item}</p><h4>${element.amount[index]}</h4><span>(₹${element.exch_value[index].toLocaleString('en-US')})</span></div>`
                }).join("")}
                <div class="orderCrdSubDiv3">
                    <span>Total Exchange Value</span>
                    <span>Booked On</span>
                    <span>₹${element.total_value.toLocaleString('en-US')} <small>(${element.currency.join('+')})</small></span>
                    <span>${day} ${monthName} ${year}</span>
                </div>
                <div class="orderCrdSubDiv4">
                    <span>Forex Order ID: <p>${element.invoiceid}</p></span>
                    <img onclick=orderSummary(${element.invoiceid}) src="assets/CTA HOME.svg" alt="">
                </div>
            </div>`
        }
        else{
            document.querySelector('.whTrackOrderMain').style.display='none'
            document.querySelector('.whFooter').style.display='none'
        }
    })

    document.querySelector('.seeAllBtn').addEventListener('click',()=>{
        window.location.href='trackOrder.html'
    })
    function orderSummary(id){
        window.location.href=`trackOrderSingle.html?orderno=${id}`
    }