const dateOfBirth=document.querySelector("#date-of-birth");
const luckyNumber=document.querySelector("#lucky-number");
const checkButton=document.querySelector("#check");
const outputBox=document.querySelector("#output");


function compareValues(sum, luckyNumber){
    if(sum%luckyNumber===0){
        outputBox.value="Your Birthday is lucky";
    }
    else{
        outputBox.value="Your Birthday is not lucky";
    }
}

function checkBirthdayIsLucky(){
    const dob=dateOfBirth.value;
    const sum= calculateSum(dob);
    compareValues(sum,luckyNumber.value); 

}

function calculateSum(dob){
 dob=dob.replaceAll("-","");
 let sum=0;
 for(let i=0; i<dob.length; i++ ){
     sum=sum+Number(dob.charAt(i))
 }
 return sum;
}


checkButton.addEventListener("click", checkBirthdayIsLucky);
