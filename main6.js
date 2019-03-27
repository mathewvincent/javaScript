let myform = document.querySelector('#myform');
let myprice = document.querySelector('#carprice');
let myapr = document.querySelector('#myapr');
let mymonth = document.querySelector('#mymonth');

//let x ,y z;
myform.addEventListener('submit', onSubmit)

function onSubmit(e){
	e.preventDefault();
    u= (myapr.value*0.01);
    w=(u*myprice.value)/(1-((1+u)**(-mymonth.value)));

    x= (myapr.value*0.01)/12;
    y=x*myprice.value;
    z=1+x;
    p=1-z;
    q=p**(-mymonth.value);
    r=1+q;
    s=z/r;
    console.log(s);
    document.querySelector('.myclass1').innerHTML=`Payment is $ ${w}`;
	  
}      
