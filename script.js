const dateOfBirth=document.querySelector("#date-of-birth");
const luckyNumber=document.querySelector("#lucky-number");
const checkButton=document.querySelector("#check");

function checkBirthdayIsLucky(){
    const dob=dateOfBirth.value;
    const sum= calculateSum(dob);
    console.log(sum);

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
