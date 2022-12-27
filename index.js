// Q 1. Write the code to access element which is having id as "text"
const idcall=document.getElementById("text")
console.log(idcall.innerText)


// Q 2.Write the code to access element which is having tag as "h1"
const tagname=document.getElementsByTagName("h1")
console.log(tagname[0].innerText)

// Q 3.Write the code to access element which is having class as "box"
const classname1=document.getElementsByClassName("box")
console.log(classname1[0].innerText)

// Q 4. <h1>Hello </h1>
// Change the heading from ""Hello"" to ""Hello World"" using DOM functions
const tagname1=document.getElementsByTagName("h1")
const changename1=tagname1[0].innerText="Hello word"
console.log(tagname1[0].innerText)

// Q 5.Create three cards on HTML page and arrange them using flex property in row or horizontal direction and also create button at the bottom named "Change Flex direction". When user clicks on this button, the cards arrangement should be changed to vertical direction.
  
function changeflexdirection() {
const parent=document.getElementsByClassName("flexparent")
parent[0].style.flexDirection = "column";
}

// Q 7. <h1>Hello </h1>
// Add one style attribute and give text color as red and id attribute and give the id value as ""heading"" in the above given h1 tag using DOM functions"
// Answer 7.
const elecolor=document.getElementsByTagName("h1")
elecolor[2].innerText="Hello PrepBytes World"
elecolor[2].style.color="red"
elecolor[2].setAttribute("id","heading")


// Q 8.Create an HTML page having content as Hello world and a button named Replace Text. When user will click on this button page content should be changed to "Welcome to Elevation academy"
function changehello2prepbyte(){
const tagname2=document.getElementsByTagName("h1")
const changename2=tagname2[4].innerText="Welcome to Elevation academy"
console.log(tagname1[4].innerText)
}

// Q 9. Write code to implement timer clock using JS -- display HH:MM:SS -- the time should keep updating every second
// Answer 9.
const clock=setInterval(function time(){
    let dateToday =new Date();
  let hr=dateToday.getHours();
  let min=dateToday.getMinutes();
  let sec=dateToday.getSeconds();
  
  if(hr<10){
  hr='0'+hr;
  }
  if(min<10){
      min='0'+min;
  }
  if(sec<10){
      sec='0'+sec;
  }
     
  const time3=document.getElementById("time").innerHTML=`${hr}:${min}:${sec}` 
        
  },1000);
// Q 10. Create a select drop down for selecting Year 20-21, 21-22 etc. Print the item text selected  
// Answer 10.
function getOption(){
document.querySelector("#syear")
const a=document.getElementById("syear").value;

document.querySelector('.dis').textContent = a;
}
// Q 11.Create a form having name ,email, phone no. , birth year 
// Add validations - phone no. should start with 91 , it should be 10 digits
// email should be domain prepbytes.com
// birth year should be > 95
  
  function myfun(){
    var a=document.getElementById("phone").value;
    var b=document.getElementById("email").value;
   
    if(a==""){
       document.getElementById("message").innerHTML="* Please Fill Phone Number"; 
       document.getElementById("emailmessage").innerHTML="* Please Fill the Email Address"; 
   return false;
    }
    if(isNaN(a)){
        document.getElementById("message").innerHTML="* Enetr Numeric Number"; 
        return false;
    }
    if(a.length<10){
        document.getElementById("message").innerHTML="* phone number must be 10 digit"; 
        return false;
    }
    if(a.length>10){
        document.getElementById("message").innerHTML="* phone number must be 10 digit on"; 
        return false;
    }
    if((a.charAt(0)!=9) && (a.charAt(1)!=1)){
        document.getElementById("message").innerHTML="* phone number must be start with 91"; 
        return false;
    }
  }     
