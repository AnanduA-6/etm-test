const searchBar = document.querySelector('.searchBar')
const clearBtn = document.querySelector('.clearBtn')
const locationListing = document.querySelector('.locationListing')

const value = sessionStorage.getItem('token');

let controller=null;

searchBar.addEventListener('input', (e) => {


    let input = e.target.value.replace(/\s/g, '');

    input.toString()
    if (input.length > 2) {
        locationListing.style.display='flex'
        setTimeout(() => {
            fetch('https://mvc.extravelmoney.com/pwa-functions/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `action=loc_dropdown&keyword=${input}`
        })
            .then(response => response.json())
            .then(data => {
                    console.log(data);
                    if (data.noStores==='false') {
                        locationListing.innerHTML=''
                        data.total.length!=0?locationListing.innerHTML = `<p class="locationListingItems" all=all data-area=${data.total.area} data-district=${data.total.area} onclick="selectLoc(event,this)">All around ${data.total.area} &nbsp;&nbsp;<span>(${data.total.stores} Forex Stores)</span></p>`:'';
   
                      
                      data.list.forEach(item => {
                          let htmlString = `<p class="locationListingItems" onclick="selectLoc(event,this)" all="" data-area=${item.area} data-district=${item.district}>${item.area}  &nbsp;&nbsp;<span>(${item.stores} Forex Stores)</span></p>`

                          locationListing.innerHTML += htmlString;
                      })
                  }
                  if(data.noStores==='true'){
                      locationListing.innerHTML = `<p style="border:none">Sorry, No tied-up stores at this location</p>`; 
                      
                  }
            })
            .catch(error => console.error(error))
        }, 200);
        
    } 
    if (input.length <= 2) {
        locationListing.style.display='none';
       
    }
    if (input.length) {
        clearBtn.style.display = 'block'
    }
    else {
        clearBtn.style.display = 'none'
    }
    
})





clearBtn.addEventListener('click', () => {
    searchBar.value = '';
    clearBtn.style.display = 'none'
    locationListing.innerHTML = ''
})



// page 3 js

function selectLoc(event,element){
    // console.log(element.getAttribute("data-area"));
    // console.log(element.getAttribute("data-district"));
    // console.log(value);
    const area=element.getAttribute("data-area")
    const district=element.getAttribute("data-district")
    const token=value;
    const all=element.getAttribute("all")

    fetch('https://mvc.extravelmoney.com/pwa-functions/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `action=store_list&area=${area}&token=${token}&all=${all}&district=${district}`
        })
            .then(response => response.json())
            .then(data=>{
                console.log(token);
                console.log(data);
                const storesData=JSON.stringify(data)
                sessionStorage.setItem('storesData',storesData)
                
                window.location.href = "page3.html";
                searchBar.value='';
            })
            .catch(error => console.error(error))

}

