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
        if (data.result === 'false') {
            window.location.href = 'index.html'
        } else {
            let dataArray = data.order_list
            dataArray.forEach(element => {
                let date = new Date(element.date);
                
                let monthName = date.toLocaleString('default', { month: 'long' }).substring(0, 3);
                let day = date.getDate();
                let year = date.getFullYear();
                let status;
                if(element.status==='1'){
                    status='<img src="assets/pendingOrder.svg" alt="">Pending Order Confirmation'
                }
                if(element.status==='2'){
                    status='<img src="assets/pendingOrder.svg" alt="">In Transit'
                }
                if(element.status==='3'){
                    status='<img src="assets/confirmedOrder (1).svg" alt="">Transaction Complete'
                }
                if(element.status==='4'){
                    status='<img src="assets/pendingOrder.svg" alt="">KYC Verification'
                }
                if(element.status==='5'){
                    status='<img src="assets/canceledOrder.svg" alt="">Cancelled'
                }
                document.querySelector('.orderCardContainer').innerHTML +=
                    `<div class="orderCard ">
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
            });
        }
    })

    function orderSummary(id){
        window.location.href=`trackOrderSingle.html?orderno=${id}`
    }