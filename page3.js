

const searchInput = document.querySelector('.searchInput')
const clearBtn = document.querySelector('.clearBtn')

searchInput.addEventListener('input', (e) => {
    if (e.target.value) {
        clearBtn.style.display = 'block'
    }
    else {
        clearBtn.style.display = 'none'
    }
})

clearBtn.addEventListener('click', () => {
    searchInput.value = '';
    clearBtn.style.display = 'none'
})
const sortBtn = document.querySelector('.sortBtn')
const filterBtn = document.querySelector('.filterBtn')
const overLayShade = document.querySelector('.overlayShade')
const sortList = document.querySelector('.sortAreaMain')
const body = document.querySelector('body')
const FilterList = document.querySelector('.filterAreaMain')
const kycList=document.querySelector('.kycAreaMain')

sortBtn.addEventListener('click', () => {
    body.classList.add('bodyMinified')
    sortList.classList.add('showSortArea')
    overLayShade.style.transitionDelay = '0s'
    overLayShade.classList.add('showOverLayShade')
})

filterBtn.addEventListener('click', () => {
    body.classList.add('bodyMinified')
    FilterList.classList.add('showSortArea')
    overLayShade.style.transitionDelay = '0s'
    overLayShade.classList.add('showOverLayShade')
})
function showKyc(){
    body.classList.add('bodyMinified')
    kycList.classList.add('showSortArea')
    overLayShade.style.transitionDelay = '0s'
    overLayShade.classList.add('showOverLayShade')
}

overLayShade.addEventListener('click', (event) => {
    if (!event.target.closest('.sortAreaMain') && !event.target.closest('.filterAreaMain')&& !event.target.closest('.kycAreaMain')) {
        sortList.classList.remove('showSortArea');
        FilterList.classList.remove('showSortArea');
        kycList.classList.remove('showSortArea');
        overLayShade.style.transitionDelay = '0.3s'
        overLayShade.classList.remove('showOverLayShade')
        body.classList.remove('bodyMinified')
    }

});


// sorting.........
let sortOption;
function setLowToHigh() {
    sortOption = 'lh'
}
function setHighToLow() {
    sortOption = 'hl'
}
function sortCardsByPrice() {
    if (sortOption === 'lh') {
        const cards = document.querySelectorAll('.storeCard');

        const cardsArray = Array.from(cards);
        cardsArray.sort((a, b) => a.dataset.price - b.dataset.price);
        cards.forEach(card => card.remove());

        const cardContainer = document.querySelector('.storeListing');
        cardsArray.forEach(card => cardContainer.appendChild(card));

        sortList.classList.remove('showSortArea');
        overLayShade.style.transitionDelay = '0.3s'
        overLayShade.classList.remove('showOverLayShade')
        body.classList.remove('bodyMinified')
    }
    if (sortOption === 'hl') {
        const cards = document.querySelectorAll('.storeCard');

        const cardsArray = Array.from(cards);
        cardsArray.sort((a, b) => b.dataset.price - a.dataset.price);
        cards.forEach(card => card.remove());

        const cardContainer = document.querySelector('.storeListing');
        cardsArray.forEach(card => cardContainer.appendChild(card));

        sortList.classList.remove('showSortArea');
        overLayShade.style.transitionDelay = '0.3s'
        overLayShade.classList.remove('showOverLayShade')
        body.classList.remove('bodyMinified')
    }

}
function sortDefault() {
    console.log('defaultSort');
}


const storesData = sessionStorage.getItem('storesData')
const newData = (JSON.parse(storesData));
// console.log(newData);
const cardContainer = document.querySelector('.storeListing');
newData.branch_id.forEach((item, index) => {
    cardContainer.innerHTML+= `<div class="storeCard" data-price="83282">
   <h2>${newData.area[index]}</h2>
   <div class="storeCardChild">
       <p>Store # ${newData.branch_id[index]}</p>
       <div class="toolTipContainer">
           <button class="toolTipIcon"><img  src="assets/Icon.svg" alt=""></button>  
           <div class="toolTipBox">
               <img  src="assets/tooltip.svg" alt="">
               <p>Forex outlet name & exact address will be shared after placing order</p>
           </div>
       </div>
       
       <span>${newData.cat[index]}</span>
       
   </div>
   <div  class="storeCardChild">
       <img src="assets/delivery.svg" alt="">
       <p>Door Delivery (10Km) - <b>₹150</b></p>
   </div>
   <div  class="storeCardChild">
       <img src="assets/storeFee.svg" alt="">
       <p>Zero Store Fees</p>
   </div>
   <p style="font-size:0.9rem;">Payment Methods:</p>
   <div  class="storeCardChild">
       <span>UPI</span>
       <span>Net Banking</span>
       <span>Debit Card</span>
       <span>NEFT/RTGS</span>
   </div>
   <div  class="storeCardChild">
       <small>₹</small>
       <p>83,282</p>
       <span>INR</span>
   </div>
   <div  class="storeCardChild">
       <span>Buying USD (Notes) @</span>
       <p>₹ 83.28</p>
   </div>
   <span class="selectBtn" onclick="selectStore('${[newData.area[index],newData.branch_id[index]]}')">Select</span>
</div>`
})

const toolTipIcon = document.querySelectorAll('.toolTipIcon')
const toolTipBox = document.querySelectorAll('.toolTipBox')

let counter = 0;
toolTipIcon.forEach((item, index) => {
    item.addEventListener('mouseover', (e) => {
        toolTipBox[index].classList.add('disableToolTipBox')
    })
    item.addEventListener('mouseout', (e) => {
        toolTipBox[index].classList.remove('disableToolTipBox')
        counter = 0;
    })
})
let storeSelected;
function selectStore(value){
     storeSelected=value; 
    showKyc();
}


function summaryGenerate(){
    console.log(storeSelected);
    sessionStorage.setItem('storeSelected',storeSelected)
                
    window.location.href = "page4.html";
}

