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

    let today = new Date();
    let yearActual = today.getFullYear();
    let monthActual = today.getMonth() + 1;
    let dayActual = today.getDate();


    let yearPickerOpen=false;

travelDateBtn.addEventListener('click', () => {
    body.classList.add('bodyMinified')
    datePicker.classList.add('showSortArea')
    overLayShade.style.transitionDelay = '0s'
    overLayShade.classList.add('showOverLayShade')
    initalDateView(dayActual,monthActual,yearActual);
    yearPickerOpen=true;
})

overLayShade.addEventListener('click', (event) => {

    if(!yearPickerOpen){
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



let day=dayActual;
let month=monthActual;
let year=yearActual;
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
                    day = closestElement.textContent;
                    document.querySelector('.dd').textContent=day;
                    components.forEach(item => {
                        item.classList.add('dateFade')
                    })
                    closestElement.classList.remove('dateFade')

                }
                if (value === 'month') {
                    month = closestElement.getAttribute('date');
                    if(month<10){
                        month='0'+month;
                    }
                    document.querySelector('.mm').textContent=month;
                    monthComponents.forEach(item => {
                        item.classList.add('dateFade')
                    })
                    closestElement.classList.remove('dateFade')
                }
                if (value === 'year') {
                    year = closestElement.textContent;
                    
                    document.querySelector('.yy').textContent=year;
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




function initalDateView(dayActual,monthActual,yearActual) {

    

    components.forEach(item => {
        const day = dayActual.toString()
        if (item.getAttribute('date') === day) {
            const viewArea = document.querySelector('.dateViewer');
            const targetComponent = item;
            const viewAreaRect = viewArea.getBoundingClientRect();
            const targetComponentRect = targetComponent.getBoundingClientRect();
            const containerRect = container.getBoundingClientRect();
            const scrollPosition = targetComponentRect.top - viewAreaRect.top - containerRect.height / 10;
            container.scrollTop = scrollPosition;
        }
    })
    monthComponents.forEach(item => {
        const month = monthActual.toString()
        if (item.getAttribute('date') === month) {
            const viewArea = document.querySelector('.dateViewer');
            const targetComponent = item;
            const viewAreaRect = viewArea.getBoundingClientRect();
            const targetComponentRect = targetComponent.getBoundingClientRect();
            const containerRect = monthContainer.getBoundingClientRect();
            const scrollPosition = targetComponentRect.top - viewAreaRect.top - containerRect.height / 10;
            monthContainer.scrollTop = scrollPosition;
        }
    })
    yearComponents.forEach(item => {
        const year = yearActual.toString()
        if (item.getAttribute('date') === year) {
            const viewArea = document.querySelector('.dateViewer');
            const targetComponent=item;
            const viewAreaRect = viewArea.getBoundingClientRect();
            const targetComponentRect = targetComponent.getBoundingClientRect();
            const containerRect = yearContainer.getBoundingClientRect();
            const scrollPosition = targetComponentRect.top - viewAreaRect.top - containerRect.height / 10;
            yearContainer.scrollTop = scrollPosition;
        }
    })

}

const closeBtn=document.querySelector('.closeDatePicker')
closeBtn.addEventListener('click',()=>{
        showTravelDateFields(false);
        datePicker.classList.remove('showSortArea')
        overLayShade.style.transitionDelay = '0.3s'
        overLayShade.classList.remove('showOverLayShade')
        body.classList.remove('bodyMinified')
})
const datePickerDone=document.querySelector('.datePickerContinue')
datePickerDone.addEventListener('click',()=>{
    let day=document.querySelector('.dd').textContent
    let month=document.querySelector('.mm').textContent
    let year=document.querySelector('.yy').textContent
    dayActual=day;
    monthActual=month;
    yearActual=year;
    showTravelDateFields(true);
        datePicker.classList.remove('showSortArea')
        overLayShade.style.transitionDelay = '0.3s'
        overLayShade.classList.remove('showOverLayShade')
        body.classList.remove('bodyMinified')
})

