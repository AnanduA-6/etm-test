if (sessionStorage.getItem('token') === 'null') {
    window.location.href = 'index.html'
}
if (sessionStorage.getItem('branchId') === 'null') {
    window.location.href = 'page3.html'
}

const overLayShade = document.querySelector('.overlayShade')
const purposeOfTravel = document.querySelector('.purposeOfTravelAreaMain')
const purposeList = document.querySelector('.purposeOfTravelArea')
const purposeOfTravelBtn = document.querySelector('.purposeOfTravelBtn')
const body = document.querySelector('body')
const travelDateBtn = document.querySelector('.travelDateBtn')
const datePicker = document.querySelector('.datePickerAreaMain')


purposeOfTravelBtn.addEventListener('click', () => {
    body.classList.add('bodyMinified')
    purposeOfTravel.classList.add('showSortArea')
    overLayShade.style.transitionDelay = '0s'
    overLayShade.classList.add('showOverLayShade')
})



const cancelationPolicyBtn = document.querySelector('.cancelationPolicyBtn')
const cancelationPolicy = document.querySelector('.cancelationPolicyAreaMain')
const closeCancelationPolicy = document.querySelector('.closeCancelation')

let cancelationPolicyOpen = false

cancelationPolicyBtn.addEventListener('click', () => {
    body.classList.add('bodyMinified')
    cancelationPolicy.classList.add('showSortArea')
    overLayShade.style.transitionDelay = '0s'
    overLayShade.classList.add('showOverLayShade')
    cancelationPolicyOpen = true;
})

closeCancelationPolicy.addEventListener('click', () => {
    cancelationPolicy.classList.remove('showSortArea')
    overLayShade.style.transitionDelay = '0.3s'
    overLayShade.classList.remove('showOverLayShade')
    body.classList.remove('bodyMinified')
    cancelationPolicyOpen = false;
})

const termsAndConditionsBtn = document.querySelector('.termsAndConditionBtn')
const termsAndConditions = document.querySelector('.termsAndConditionAreaMain')
const closeTermsAndConditions = document.querySelector('.closeTerms')

let termsAndConditionsOpen = false

termsAndConditionsBtn.addEventListener('click', () => {
    body.classList.add('bodyMinified')
    termsAndConditions.classList.add('showSortArea')
    overLayShade.style.transitionDelay = '0s'
    overLayShade.classList.add('showOverLayShade')
    termsAndConditionsOpen = true;
})

closeTermsAndConditions.addEventListener('click', () => {
    termsAndConditions.classList.remove('showSortArea')
    overLayShade.style.transitionDelay = '0.3s'
    overLayShade.classList.remove('showOverLayShade')
    body.classList.remove('bodyMinified')
    termsAndConditionsOpen = false;
})


//  datepicker code

let today = new Date();
today.setDate(today.getDate() + 2);
let yearActual = today.getFullYear();
let monthActual = today.getMonth() + 1;
let dayActual = today.getDate();


let yearPickerOpen = false;

travelDateBtn.addEventListener('click', () => {
    body.classList.add('bodyMinified')
    datePicker.classList.add('showSortArea')
    overLayShade.style.transitionDelay = '0s'
    overLayShade.classList.add('showOverLayShade')
    yearPickerOpen = true;
    initalDateView(dayActual, monthActual, yearActual);
})

overLayShade.addEventListener('click', (event) => {
    if (!yearPickerOpen && !cancelationPolicyOpen && !termsAndConditionsOpen) {

        if (!event.target.closest('.purposeOfTravelAreaMain')) {
            purposeOfTravel.classList.remove('showSortArea');
            overLayShade.style.transitionDelay = '0.3s'
            overLayShade.classList.remove('showOverLayShade')
            body.classList.remove('bodyMinified')
        }
    }


});
let purpose;
let purposeSelected = true;
purposeList.addEventListener('click', (event) => {

    if (event.target.tagName === 'P') {

        purpose = event.target.textContent;
        purposeOfTravelBtn.querySelector('span').textContent = event.target.textContent;
        setTimeout(() => {
            purposeOfTravel.classList.remove('showSortArea');
            overLayShade.style.transitionDelay = '0.3s'
            overLayShade.classList.remove('showOverLayShade')
            body.classList.remove('bodyMinified')
        }, 100)
        purposeSelected = true;
        makePlaceOrderActive()
        let documents=document.querySelectorAll('.uploadDocument')

        if(purpose==='Travel for Education'){
            let documentArray=['Valid Indian Passport (address & photo page)','Pan Card','Confirmed Air ticket','Valid Visa','University Admission Letter']
            documents.forEach((item,index)=>{
                item.querySelector('p').textContent=documentArray[index]
            })
        }
        if(purpose==='Immigration'){
            let documentArray=['Valid Indian Passport (address & photo page)','Pan Card','Confirmed Air ticket','Valid Visa','Immigration Letter']
            documents.forEach((item,index)=>{
                item.querySelector('p').textContent=documentArray[index]
            })
        }
        if(purpose==='Employment'){
            let documentArray=['Valid Indian Passport (address & photo page)','Pan Card','Confirmed Air ticket','Valid Visa','Letter of Appointment or Work Contract Letter']
            documents.forEach((item,index)=>{
                item.querySelector('p').textContent=documentArray[index]
            })
        }
        if(purpose==='Holiday/Leisure Trip'){
            let documentArray=['Valid Indian Passport (address & photo page)','Pan Card','Onward Air ticket showing travel within 60 days','Return Air Ticket','Valid Visa (Not required for Visa on Arrival)']
            documents.forEach((item,index)=>{
                item.querySelector('p').textContent=documentArray[index]
            })
        }
    }
})









document.querySelector('.summaryMain').querySelector('.sub2').querySelector('span').addEventListener('click', () => {
    let checked = document.querySelector('.whtspNotification').checked;
    document.querySelector('.whtspNotification').checked = !checked;
})

document.querySelector('.travelDateBtn').addEventListener('click', () => {
    showTravelDateFields(true)
})
function showTravelDateFields(val) {
    if (val) {
        document.querySelector('.travelDateBtn').querySelector('span').style.display = 'block'
        document.querySelector('.travelDateBtn').style.padding = '3px 0 16px 0'
        document.querySelector('.travelDateBtn').style.fontSize = '0.8rem'
    }
    if (!val) {
        document.querySelector('.travelDateBtn').querySelector('span').style.display = 'none'
        document.querySelector('.travelDateBtn').style.padding = '20px 0'
        document.querySelector('.travelDateBtn').style.fontSize = '0.8rem'
    }

}



const container = document.querySelector('.day');
const components = document.querySelector('.day').querySelectorAll('span');
const monthContainer = document.querySelector('.month')
const monthComponents = monthContainer.querySelectorAll('span')
const yearContainer = document.querySelector('.year')
const yearComponents = yearContainer.querySelectorAll('span')



let day = dayActual;
let month = monthActual;
let year = yearActual;
let date = [day, month, year]


container.addEventListener('scroll', () => {
    dateSelector(components, 'day')
})
monthContainer.addEventListener('scroll', () => {
    dateSelector(monthComponents, 'month')
})
yearContainer.addEventListener('scroll', () => {
    dateSelector(yearComponents, 'year')
})


function dateSelector(components, value) {

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const overlayRect = entry.boundingClientRect;
                const contentElements = Array.from(components);

                const closestElement = contentElements.reduce((closest, element) => {
                    const elementRect = element.getBoundingClientRect();
                    const distance = Math.abs(overlayRect.top - elementRect.top);

                    if (distance < closest.distance) {
                        return { distance: distance, element: element };
                    } else {
                        return closest;
                    }
                }, { distance: Infinity }).element;

                if (value === 'day') {
                    dayActual = closestElement.getAttribute('date');
                    document.querySelector('.dd').textContent = closestElement.textContent;
                    components.forEach(item => {
                        item.classList.add('dateFade')
                    })
                    closestElement.classList.remove('dateFade')

                }
                if (value === 'month') {
                    monthActual = closestElement.getAttribute('date');
                    if (monthActual < 10) {
                        document.querySelector('.mm').textContent = '0' + monthActual;
                    } else {
                        document.querySelector('.mm').textContent = monthActual;
                    }
                    monthComponents.forEach(item => {
                        item.classList.add('dateFade')
                    })
                    closestElement.classList.remove('dateFade')
                }
                if (value === 'year') {
                    yearActual = closestElement.textContent;

                    document.querySelector('.yy').textContent = closestElement.textContent;
                    yearComponents.forEach(item => {
                        item.classList.add('dateFade')
                    })
                    closestElement.classList.remove('dateFade')
                }
                observer.unobserve(entry.target);

                let todayDate = new Date();
                todayDate.setDate(todayDate.getDate() + 2);
                const dateString = `${monthActual}/${dayActual}/${yearActual}`;
                const dateTimeString = `${dateString} ${todayDate.getHours()}:${todayDate.getMinutes()}:${todayDate.getSeconds()}`;
                const tempDate = new Date(dateTimeString);

                if (tempDate.getTime() < todayDate.getTime() - 1000) {
                    setTimeout(() => {
                        initalDateView(day, month, year);   
                    }, 1000);
                }
            }
        });
    });

    const dateViewer = document.querySelector('.dateViewer');
    observer.observe(dateViewer);

}

const closeBtn = document.querySelector('.closeDatePicker')
closeBtn.addEventListener('click', () => {
    showTravelDateFields(false);
    datePicker.classList.remove('showSortArea')
    overLayShade.style.transitionDelay = '0.3s'
    overLayShade.classList.remove('showOverLayShade')
    body.classList.remove('bodyMinified')
    yearPickerOpen = false;

    dateSelected = false;
    makePlaceOrderActive();
})
let dateSelected = false;
const datePickerDone = document.querySelector('.datePickerContinue')

datePickerDone.addEventListener('click', () => {
    
    let todayDate = new Date();
    todayDate.setDate(todayDate.getDate() + 2);
    const dateString = `${monthActual}/${dayActual}/${yearActual}`;
    const dateTimeString = `${dateString} ${todayDate.getHours()}:${todayDate.getMinutes()}:${todayDate.getSeconds()}`;
    const tempDate = new Date(dateTimeString);

    if (tempDate.getTime() > todayDate.getTime() - 1000) {
        
        showTravelDateFields(true);
    datePicker.classList.remove('showSortArea')
    overLayShade.style.transitionDelay = '0.3s'
    overLayShade.classList.remove('showOverLayShade')
    body.classList.remove('bodyMinified')
    yearPickerOpen = false;

    dateSelected = true;
    makePlaceOrderActive();
    
    }
                
})


function initalDateView(dayActual, monthActual, yearActual) {
    yearContainer.scrollTop = 0;
    monthContainer.scrollTop = 0;
    container.scrollTop = 0;

    components.forEach(item => {
        const day = dayActual.toString()
        if (item.getAttribute('date') === day) {
            const containerRect = container.getBoundingClientRect();
            const componentRect = item.getBoundingClientRect();

            const position = {
                x: componentRect.left - containerRect.left,
                y: componentRect.top - containerRect.top
            };
            container.scrollTop = position.y - 30;

        }
    })
    monthComponents.forEach(item => {

        const month = monthActual.toString()
        if (item.getAttribute('date') === month) {
            const containerRect = monthContainer.getBoundingClientRect();
            const componentRect = item.getBoundingClientRect();

            const position = {
                x: componentRect.left - containerRect.left,
                y: componentRect.top - containerRect.top
            };
            monthContainer.scrollTop = position.y - 30;

        }
    })
    yearComponents.forEach(item => {

        const year = yearActual.toString()
        if (item.getAttribute('date') === year) {
            const containerRect = yearContainer.getBoundingClientRect();
            const componentRect = item.getBoundingClientRect();

            const position = {
                x: componentRect.left - containerRect.left,
                y: componentRect.top - containerRect.top
            };
            yearContainer.scrollTop = position.y - 30;

        }
    })


}

const changeStoreBtn = document.querySelector('.changeStore')
changeStoreBtn.addEventListener('click', () => {
    window.location.href = "page3.html";
})



// getting summaryData.......
let summaryData;
function summaryGenerate() {
    if (sessionStorage.getItem('confirmation') === 'true') {
        window.location.href = 'index.html'
    } else {
        console.log('not yet confirmed');
    }

    const token = sessionStorage.getItem('token');
    const storeSelected = sessionStorage.getItem('branchId')
    // console.log(token,storeSelected);
    fetch('https://mvc.extravelmoney.com/pwa-functions/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `action=summary&token=${token}&branchid=${storeSelected}`
    })
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            summaryData = data
            sessionStorage.setItem('summaryData', data)
            document.querySelector('.productTotal').textContent = '₹' + summaryData.product_total.toLocaleString('en-US') + `${summaryData.product_total % 1 === 0 ? '.00' : ''}`;
            document.querySelector('.serviceTax').textContent = '₹' + summaryData.service_tax.toLocaleString('en-US') + `${summaryData.service_tax % 1 === 0 ? '.00' : ''}`;
            document.querySelector('.transactionFee').textContent = '₹' + summaryData.txn_fee.toLocaleString('en-US') + `${summaryData.txn_fee % 1 === 0 ? '.00' : ''}`
            document.querySelector('.roundOff').textContent = '₹' + summaryData.roundoff.toLocaleString('en-US');
            let total = summaryData.ftotal;
            document.querySelector('.fTotal').textContent = '₹' + total.toLocaleString('en-US') + `${total % 1 === 0 ? '.00' : ''}`;
            if (!summaryData.paymode[2]) {
                document.querySelector('#paymentMethod').checked = 'false'
                document.querySelector('#paymentMethod').disabled = 'true'
                document.querySelector('#paymentMethod2').checked = 'true'
                document.querySelector('#netBanking').style.opacity = '0.3'
            } else {
                document.querySelector('#paymentMethod').checked = 'true'
                document.querySelector('#netBanking').addEventListener('click', () => {
                    document.querySelector('#paymentMethod').checked = 'false'
                })
            }
            let doorDelivery;
            function checkDoorDelivery() {
                if (summaryData.storedd[0] === '0') {
                    doorDelivery = 0;
                    // no door delivery
                } else if (summaryData.storedd[0] === '1') {
                    if (summaryData.product_total < summaryData.storedd[1]) {
                        doorDelivery = 0;
                        // no door delivery
                    }
                    else if (summaryData.product_total > summaryData.storedd[1]) {
                        // if (summaryData.product_total > summaryData.storedd[3]) {
                        //     doorDelivery = 1;
                        //     // free door delivery

                        // } 
                        // else {
                        //     // door delivery available at certain rate
                        //     doorDelivery = 2;
                        // }
                        doorDelivery=2;
                    }
                }
            }
            checkDoorDelivery();
            if (doorDelivery === 0) {
                document.querySelector('.doorDeliveryDetail').textContent = 'Door delivery not available'
                document.querySelector('.doorDeliveryDetail2').style.display = 'none'
            }
            // if (doorDelivery === 1) {
            //     document.querySelector('.doorDeliveryDetail').textContent = `Free door delivery(${summaryData.storedd[4]}km)`
            // }
            if (doorDelivery === 2) {
                document.querySelector('.doorDeliveryDetail').innerHTML = `Door delivery available (within 6km)<b>&nbsp; &nbsp;  Fee: ₹200</b>`
            }
            if (doorDelivery === 1 || doorDelivery === 2) {
                document.querySelector('#storePicup').addEventListener('click', () => {
                    document.querySelector('#deliveryMode').checked = 'true'
                    document.querySelector('#doorDelivery').querySelector('.doorDeliverySub').style.background = "#F4F6F5";
                    document.querySelector('#storePicup').querySelector('.storePicupSub').style.background = "#D9FCF3";
                })
                document.querySelector('#doorDelivery').addEventListener('click', () => {
                    document.querySelector('#deliveryMode2').checked = 'true'
                    document.querySelector('#storePicup').querySelector('.storePicupSub').style.background = "#F4F6F5";
                    document.querySelector('#doorDelivery').querySelector('.doorDeliverySub').style.background = "#D9FCF3";
                })
            } else {
                document.querySelector('#doorDelivery').style.opacity = '0.3'
                document.querySelector('#deliveryMode2').disabled = 'true'
            }


            document.querySelector('.storeId').textContent = `Store #${summaryData.branchid}`;
            document.querySelector('.storeAddress').textContent = `${summaryData.area}, ${summaryData.dist}`

            document.querySelector('.userName').value = summaryData.name
            document.querySelector('.userEmail').value = summaryData.email



        })

    let timerInterval;
    let seconds = 1200;
    const timer = document.querySelector('.rateTimer').querySelector('span');

    function startTimer() {
        timerInterval = setInterval(updateTimer, 1000);
    }

    function stopTimer() {
        clearInterval(timerInterval);
        seconds = 1200; // reset to 10 minutes
        startTimer();
        timer.style.color = '#49A27A';
        location.reload();
    }


    function updateTimer() {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;

        const displaySeconds = remainingSeconds < 10 ? '0' + remainingSeconds : remainingSeconds;

        timer.textContent = `${minutes}:${displaySeconds} mins`;

        if (seconds === 60) {
            timer.style.color = 'red';
        }

        if (seconds === 0) {
            clearInterval(timerInterval);
            stopTimer();
        } else {
            seconds--;
        }
    }
    startTimer();

}
summaryGenerate();

// const summaryData=JSON.parse(sessionStorage.getItem('summaryData'))
// console.log(summaryData)








document.querySelector('#neft').addEventListener('click', () => {
    document.querySelector('#paymentMethod2').checked = 'true'
})





document.querySelector('#deliveryMode').checked = 'true';



let radios = document.querySelectorAll('.storePicup')
const radio1 = document.querySelector('#store')
const radio2 = document.querySelector('#deliveryMode2')
let ddEnabled = 'no';

radios.forEach(item => {
    item.addEventListener('click', () => {

        if (item.querySelector('input').value === 'storePickup') {
            total = summaryData.ftotal;
            document.querySelector('.fTotal').textContent = '₹' + total.toLocaleString('en-US') + `${total % 1 === 0 ? '.00' : ''}`;
        }
        if (item.querySelector('input').value === 'doorDelivery') {
            total = summaryData.ftotal + Number(summaryData.storedd[2]);
            document.querySelector('.fTotal').textContent = '₹' + total.toLocaleString('en-US') + `${total % 1 === 0 ? '.00' : ''}`;
            ddEnabled = 'yes';
        }

    })
})


function rateChange() {

}



const placeOrderBtn = document.querySelector('.placeOrderBtn').querySelector('span')
let token = null;
let travelDate = null;
let wa_notify = null;
let dd_opted = null;
let pmethod = null;
let travelPurpose = 'Holiday/Leisure Trip';
let agreementPolicy = false;


document.querySelector('#agreementPolicy').addEventListener('change', () => {
    if (document.querySelector('#agreementPolicy').checked) {
        agreementPolicy = true
    } else {
        agreementPolicy = false;
    }
    makePlaceOrderActive()
})

let makePlaceOrderBtnActive = false;

function makePlaceOrderActive() {
    if (dateSelected) {
        travelDate = `${dayActual}/${monthActual}/${yearActual}`;
    } else {
        travelDate = null
    }
    if (purposeSelected) {
        travelPurpose = purposeOfTravelBtn.textContent
    } else {
        travelPurpose = null;
    }
    if (travelDate != null && travelPurpose != null && agreementPolicy) {
        placeOrderBtn.style.background = '#0E1226'
        makePlaceOrderBtnActive = true;
    } else {
        placeOrderBtn.style.background = '#C7CCCA'
        makePlaceOrderBtnActive = false;
    }
}

placeOrderBtn.addEventListener('click', () => {

    if (makePlaceOrderBtnActive) {
        token = sessionStorage.getItem('token');

        if (document.querySelector('.whtspNotification').checked) {
            wa_notify = '1'
        } else {
            wa_notify = '0'
        }
        if (document.querySelector('#deliveryMode').checked) {
            dd_opted = 'no';
        }
        if (document.querySelector('#deliveryMode2').checked) {
            dd_opted = 'yes';
        }
        if (document.querySelector('#paymentMethod').checked) {
            pmethod = 'pg';
        }
        if (document.querySelector('#paymentMethod2').checked) {
            pmethod = 'bank1';
        }



        if (token != null && travelDate != null && wa_notify != null && dd_opted != null && pmethod != null && travelPurpose != null) {
            // console.log(`action=place_order&token=${token}&traveldate=${travelDate}&wa_notify=${wa_notify}&dd_opted=${dd_opted}&pmethod=${pmethod}&travelp=${travelPurpose}`)
            fetch('https://mvc.extravelmoney.com/pwa-functions/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `action=place_order&token=${token}&traveldate=${travelDate}&wa_notify=${wa_notify}&dd_opted=${dd_opted}&pmethod=${pmethod}&travelp=${travelPurpose}`
            })
                .then(response => response.json())
                .then(data => {
                    // console.log(data);
                    if (data.result) {
                        sessionStorage.setItem('orderConfirmation', true)
                        window.location.href = `page5.html?orderno=${data.orderno}`;
                    }
                })
        } else {
            console.log('null values');
        }
    } else {
        console.log('not active');
    }
})

// timer code 



