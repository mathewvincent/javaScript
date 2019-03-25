
console.log("hello");
function myfunction1() {
	// body...

    document.getElementById("heading").innerHTML = 
        "New Login Window " ;
    document.querySelector(".item").innerHTML = 
        "New Items 1" ;
    }
    function myfunction2() {
	// body...

    const text=document.querySelector(".items");
    //document.getElementById("list").innerHTML = 
    //    text ;
        console.log(text);

    //document.querySelectorAll(".item").innerHTML = 
    //   "New Items " ;
    text.lastElementChild.remove();
    text.firstElementChild.textContent='Still I am first child';
    text.lastElementChild.innerHTML='<h4>Now I am last child</h4>';
    }
const myform = document.querySelector('#myform');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const msg = document.querySelector('.msg');
const users = document.querySelector('#users');

myform.addEventListener('submit', onSubmit)

function onSubmit(e){
	e.preventDefault();

	if(name.value==="" || email.value===""){
      msg.innerHTML="Please Fill the Form Before submit";
       }
    else{
      
	  console.log("hello");
	  users.textContent=`${name.value}  :${email.value}`;
      }
}      
