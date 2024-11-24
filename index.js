function calculateTax(income, expenses) {
    if(income>expenses){
        const tax= (income-expenses)*.20
        return tax
    }else{
         return'invalid'
    }
}



function sendNotification(email) { 
    const [username, domain] = email.split('@');
   
    if (!email.includes('@')) {
        return "Invalid Email";
    }

  
   else{
    return `${username} sent you an email from ${domain}`;
   }
}



function  checkDigitsInName(input){
    if (typeof input !== 'string') {
        return 'Invalid Input';
    }
    let str = String(input);
    for( let i = 0; i < str.length; i++){
              console.log(str.charAt(i));
        if(!isNaN(str.charAt(i))){           //if the string is a number, do the following
            return true;
        }
    }return false
}




function calculateFinalScore(obj) {
    if(typeof obj !=='object'){
        return "Invalid Input"
    }
    if(obj.isFFamily==true){
        totalScore=obj.testScore+obj.schoolGrade+20

        if(totalScore>=80){
            return true
        }else{
             return false
        }
    }
    else{
        totalScore=obj.testScore+obj.schoolGrade
        if(totalScore>=80){
            return true
        }else{
             return false
        }
    }
}



function  waitingTime(waitingTimes, serialNumber) {
    let sum=0
   for(let i=0; i<waitingTimes.length; i++){
   
    sum=sum+waitingTimes[i]
    
    let avarageTime=Math.round(sum/waitingTimes.length)
    
   const totalwaitingTime=avarageTime*(serialNumber-waitingTimes.length-1)
  
 return totalwaitingTime
   } 
    

}



function waitingTime(waitingTimes, serialNumber) {
   
    if(!Array.isArray(waitingTimes) || typeof serialNumber !=='number'){
return 'invalid input'
    }
    let sum = 0;
    
   
    for (let i = 0; i < waitingTimes.length; i++) {
        sum += waitingTimes[i];
    }
    
 
    let averageTime = Math.round(sum / waitingTimes.length);
    
   
    const totalWaitingTime = averageTime * (serialNumber - waitingTimes.length - 1);
    
    return totalWaitingTime;
}


