if(sessionStorage.getItem('orderConfirmation')==='null'){
    window.location.href='page4.html'
}else{
let urlParams = new URLSearchParams(window.location.search);
let orderno = urlParams.get('orderno');
sessionStorage.setItem('confirmation',true);
const readMoreBtn=document.querySelector('.alertMessage').querySelector('span')
readMoreBtn.addEventListener('click',()=>{
    document.querySelector('.alertMessage').querySelector('small').style.display='initial'
    readMoreBtn.style.display='none'
})
document.querySelector('.succesPageMain').querySelector('.orderNo').textContent=orderno;
sessionStorage.setItem('token',null);
sessionStorage.setItem('storesData',null)
sessionStorage.setItem('branchId',null);
sessionStorage.setItem('orderConfirmation',null)
document.querySelector('.trackMyOrderBtn').addEventListener('click',()=>{
    window.location.href=`trackOrderSingle.html?orderno=${orderno}`
})
}
