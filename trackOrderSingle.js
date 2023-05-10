let urlParams = new URLSearchParams(window.location.search);
let orderno = urlParams.get('orderno');
let uid = 34799;
fetch('https://mvc.extravelmoney.com/pwa-functions/', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: `action=order_detail&uid=${uid}&orderid=${orderno}`
})
    .then(response => response.json())
    .then(data => {
        if (data.result === 'false') {
            window.location.href ='index.html'
        } else {
            let dataArray = data.order_detail
            document.querySelector('.orderId').textContent = orderno;
            let currencyList = dataArray.currency.join(',')
            document.querySelector('.currenciesList').textContent = currencyList
            let date = new Date(dataArray.date);
            let monthName = date.toLocaleString('default', { month: 'long' }).substring(0, 3);
            let day = date.getDate();
            let year = date.getFullYear();
            document.querySelector('.date').textContent = `${day} ${monthName} ${year}`

            dataArray.amount.forEach((element, index) => {
                document.querySelector('.currencies').innerHTML +=
                    `<div class="orderCrdSubDiv3">
            <span>Currencies Booked</span>
            <span>${element} @ ${dataArray.exch_rate[index]}</span>
            <span>Value</span>
            <span>₹${dataArray.exch_value[index].toLocaleString('en-US')}</span>
            </div>`;
            });
            document.querySelector('.summaryTitle').querySelector('p').textContent = `Summary (${currencyList})`
            document.querySelector('.productTotal').textContent += dataArray.prod_total.toLocaleString('en-US') + `${dataArray.prod_total % 1 === 0 ? '.00' : ''}`;
            document.querySelector('.serviceTax').textContent += dataArray.gst;
            document.querySelector('.transactionFee').textContent += dataArray.txn_fee.toLocaleString('en-US') + `${dataArray.txn_fee % 1 === 0 ? '.00' : ''}`
            document.querySelector('.roundOff').textContent += dataArray.roundoff_sign + dataArray.roundoff.toLocaleString('en-US');
            document.querySelector('.fTotal').textContent += dataArray.grand_total.toLocaleString('en-US') + `${dataArray.grand_total % 1 === 0 ? '.00' : ''}`;


            if (dataArray.status === '1') {
                document.querySelector('.status').innerHTML = '<img src="assets/pendingOrder.svg" alt="">Pending Order Confirmation'
            }
            else if (dataArray.status === '2') {
                document.querySelector('.status').innerHTML = '<img src="assets/pendingOrder.svg" alt="">In Transit'
            }
            else if (dataArray.status === '3') {
                document.querySelector('.status').innerHTML = '<img src="assets/confirmedOrder (1).svg" alt="">Transaction Complete'
            }
            else if (dataArray.status === '4') {
                document.querySelector('.status').innerHTML = '<img src="assets/pendingOrder.svg" alt="">KYC Verification'
            }
            else if (dataArray.status === '5') {
                document.querySelector('.status').innerHTML = '<img src="assets/canceledOrder.svg" alt="">Cancelled'
            }

        }

    })
document.querySelector('.homeNav').addEventListener('click',()=>{
    window.location.href='index.html'
})


document.querySelector('.cancelAlertBtn').addEventListener('click',()=>{
    document.querySelector('.cancellationPopUp').style.display='flex'
    document.querySelector('.main').style.height='100vh';
    document.querySelector('.main').style.overflow='hidden'
})
document.querySelector('.cancellationButtons').querySelector('.no').addEventListener('click',()=>{
    document.querySelector('.cancellationPopUp').style.display='none'
    document.querySelector('.main').style.height='fit-content';
    document.querySelector('.main').style.overflow='auto'
})

document.querySelector('.cancellationButtons').querySelector('.yes').addEventListener('click',()=>{
    document.querySelector('.cancellationPopUpSub').innerHTML='<p>Cancellation request sent to money changer. Waiting for clearance from the money changer.<p/><span onclick="closeAlert()">Ok<span/>'

})
function closeAlert(){
    document.querySelector('.cancellationPopUp').style.display='none'
    document.querySelector('.main').style.height='fit-content';
    document.querySelector('.main').style.overflow='auto'
    
}