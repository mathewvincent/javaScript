const myform = document.querySelector('#myform');
const myprice = document.querySelector('#carprice');
const myapr = document.querySelector('#myapr');
const mymonth = document.querySelector('#mymonth');


myform.addEventListener('submit', onSubmit)

function onSubmit(e){
	e.preventDefault();

	if(myprice.value==="" || myapr.value===""){
      alert("Please Fill the Form Before submit");
       }
    else{
      
	  console.log("hello");
	  
}      
