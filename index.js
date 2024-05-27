// const a =document.querySelector("#slider");
// const b =document.querySelector("#length");

// b.innerHTML = 10; 
// a.value = 10;
// b.innerHTML = a.value ;
// let password=10;
// function handleslider()
// {   a.value = password;
//     b.innerText =password; 
// }

// a.addEventListener("input" , (e) =>
// {
//     password=e.target.value;
//   handleslider(); 

// }); 




let cheaklist=1; 
let password=10;
const uppercase=document.querySelector("#uppercase");
const lowercase=document.querySelector("#lowercase");
const numbers=document.querySelector("#numbers");
const  symbols=document.querySelector("#symbols");
const sliber =document.querySelector("#slider");
 const passwordLength =document.querySelector("#length");
  const display=document.querySelector("#showpassword");
  const generateButton=document.querySelector("[password-genrated-button]");
  const copyUpdate=document.querySelector("#copyUpdate");
  const copyButtom = document.querySelector("#copyButtom");
//slider

function handleslider()
{   sliber.value = password;
    passwordLength.innerText =password; 
}



sliber.addEventListener("input" , (e) =>
{
    password=e.target.value;
    console.log(  "headslider"+" "+password);
  handleslider(); 

});






//cheakBoX event
uppercase.addEventListener('change',()=>{if(uppercase.checked===true){
   
    cheaklist++;
}
else
{
    cheaklist--;
    console.log("ok:"+cheaklist);
}

});
lowercase.addEventListener('change',()=>{if(lowercase.checked===true)
    {
        cheaklist++; 
    } 
    else{
        cheaklist--;
        console.log("ok:"+cheaklist);
    }
    }
 );
numbers.addEventListener('change',()=>{if(numbers.checked===true)
    {
        cheaklist++;
    }
    else{
        cheaklist--;
        console.log("ok: "+cheaklist);
    }
    }
);
symbols.addEventListener("change",()=>{ if(symbols.checked===true){
  cheaklist++;

}
else{
    cheaklist--;

    console.log("ok:"+cheaklist);

}   }); 


// password Genrator 

function generateRandomNumber(min,max)
{
  return  Math.floor(Math.random() * (max - min)) + min;
  

}

function randomNumders()
{
    return generateRandomNumber(0,9);
} 

function randomUppercase()
{
    return String.fromCharCode(generateRandomNumber(65,91));
}
 
function randomLowercase()
{
 return String.fromCharCode(generateRandomNumber(97,123));

} 

const specialChar = '~`!@#$%^&*()_-+={[}]|:;"<,>.?/';

function randomSymbols()
{ let a=generateRandomNumber(0,specialChar.length);
  return specialChar.charAt(a);

}

async function copyPassword()
{ if(display.value=="")
    {
        return ;
    } 
else 
  {
  try{
     await navigator.clipboard.writeText(display.value);
     copyUpdate.innerText = "Copied";
   
  }
catch(e){

    copyUpdate.innerText = "Fail";
  }



}

}


// password Genrated

function randomPassword()
{ 
    
    if(cheaklist==0)
    {
        return ;
    }

else
{let  passwordCreate =""; 

display.value=passwordCreate; 
let i=1;  
console.log(password+" "+cheaklist);
handleslider();
 if(password < cheaklist)
    {  
        password=cheaklist;
     
        console.log(password);
    }
while(i<=password)
 { 
    let j= generateRandomNumber(1,5);
    
   if(j===1 && uppercase.checked==true)
    {
        passwordCreate=passwordCreate+randomUppercase();
        i++;
    }

    if(j===2 && lowercase.checked===true)
        {
            passwordCreate=passwordCreate+randomLowercase();
        i++;
        }

        if(j===3 && numbers.checked===true)
            {
                passwordCreate=passwordCreate+(randomNumders() );
                i++;
            }

            if(j===4 && symbols.checked===true)
                {
                    passwordCreate=passwordCreate+randomSymbols();
                    i++;
                }

            

 }   



 password=sliber.value;

 display.value=passwordCreate; 

}




} 


generateButton.addEventListener('click', randomPassword);
copyButtom.addEventListener('click', copyPassword);
