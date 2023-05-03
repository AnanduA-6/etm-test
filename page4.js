const storeSelected = sessionStorage.getItem('storeSelected')
console.log(storeSelected);

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
const cancelationPolicyBtn=document.querySelector('.cancelationPolicyBtn')
const cancelationPolicy=document.querySelector('.cancelationPolicyAreaMain')
const closeCancelationPolicy=document.querySelector('.cancelationPolicyArea').querySelector('span')
let cancelationPolicyOpen=false
cancelationPolicyBtn.addEventListener('click',()=>{
    body.classList.add('bodyMinified')
    cancelationPolicy.classList.add('showSortArea')
    overLayShade.style.transitionDelay = '0s'
    overLayShade.classList.add('showOverLayShade')
    cancelationPolicyOpen=true;
})
closeCancelationPolicy.addEventListener('click',()=>{
    cancelationPolicy.classList.remove('showSortArea')
    overLayShade.style.transitionDelay = '0.3s'
    overLayShade.classList.remove('showOverLayShade')
    body.classList.remove('bodyMinified')
    cancelationPolicyOpen=false;
})


//  datepicker code

let today = new Date();
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

    if (!yearPickerOpen&&!cancelationPolicy) {
        if (!event.target.closest('.purposeOfTravelAreaMain')) {
            purposeOfTravel.classList.remove('showSortArea');
            overLayShade.style.transitionDelay = '0.3s'
            overLayShade.classList.remove('showOverLayShade')
            body.classList.remove('bodyMinified')
        }
    }


});
let purpose;
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

    }
})

document.querySelector('#paymentMethod').checked = 'true'
document.querySelector('#deliveryMode').checked = 'true'

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

document.querySelector('#netBanking').addEventListener('click', () => {
    document.querySelector('#paymentMethod').checked = 'true'
})
document.querySelector('#neft').addEventListener('click', () => {
    document.querySelector('#paymentMethod2').checked = 'true'
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
 let date=[day,month,year]

let datePickerValue={"date":date,"picked":false};

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
                        document.querySelector('.mm').textContent = '0'+monthActual;
                    }else{
                        document.querySelector('.mm').textContent =monthActual;
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
    datePickerValue.picked=false;
})
const datePickerDone = document.querySelector('.datePickerContinue')
datePickerDone.addEventListener('click', () => {
    showTravelDateFields(true);
    datePicker.classList.remove('showSortArea')
    overLayShade.style.transitionDelay = '0.3s'
    overLayShade.classList.remove('showOverLayShade')
    body.classList.remove('bodyMinified')
    yearPickerOpen = false;
    datePickerValue.picked=true;
    datePickerValue.date=[dayActual,monthActual,yearActual]
    console.log(datePickerValue.date);
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


