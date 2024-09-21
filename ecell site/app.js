var igbutton=document.getElementById("igbutton");
igbutton.addEventListener("click",function(){
    window.open("https://www.instagram.com/ecell_gcoe_kolhapur/","_blank");
    
})
var xbutton=document.getElementById("xbutton");
xbutton.addEventListener("click",function(){
    window.open("https://www.x.com/ECell_GCOEK/","_blank");
})
var igbutton=document.getElementById("igbutton2");
igbutton.addEventListener("click",function(){
    window.open("https://www.instagram.com/ecell_gcoe_kolhapur/","_blank");
    
})
var xbutton=document.getElementById("xbutton2");
xbutton.addEventListener("click",function(){
    window.open("https://www.x.com/ECell_GCOEK/","_blank");
})
var typed = new Typed('#element',
    {
      strings: ['Where Creativity, Meets Commerce'],
      typeSpeed: 60,
    });
var galbtn=document.getElementById("galbtn");
galbtn.addEventListener("click",function(){
    window.location.href="gallery.html";
})
const scriptURL='https://script.google.com/macros/s/AKfycbzahl1Gw0PtSgxlsNANsRU12a_SFzbPaMb9VFu8uh3KalHy8yAsSYG7fSD4oQiehWM/exec'
const form =document.forms['form1']
form.addEventListener('submit',e=>{
    e.preventDefault()
    fetch(scriptURL,{method:'post',body:new FormData(form)})
    .then(Response=>alert("Thankyou!!! your form is submitted successfully.!!!"))
    .then(()=>{window.location.reload();})
    .catch(error=> console.error('Error!',error.message));
})
