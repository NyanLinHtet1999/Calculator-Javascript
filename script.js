let btn=document.getElementById("btn");
let num1error=document.getElementById("firsterror");
let num2error=document.getElementById("seconderror");
let operationerror=document.getElementById("operationerror")

let num1Status,num2Status,operationStatus;

num1error.style.visibility="hidden";
num2error.style.visibility="hidden";
operationerror.style.visibility="hidden";


btn.addEventListener("click",function(){
    let num1=document.getElementById("firstnumber").value ;
    let num2=document.getElementById("secondnumber").value;
    let operation=document.getElementById("operation").value ;
    let finalresult;

    checkValidation(num1,num2,operation)
    
    console.log(num1Status);
    console.log(num2Status);
    console.log(operationStatus);


 if (num1Status=="yes" && num2Status=="yes" &&operationStatus=="yes"){
    num1=parseInt(num1);
    num2=parseInt(num2);
   
    switch (operation) {
        case "add":
            finalresult=num1+num2
            break;
            case "minus":
                finalresult=num1-num2
                break;
                case "mutiply":
                    finalresult=num1*num2
                    break;
                    case "divide":
                        finalresult=num1/num2
                        break;
       }
 } else {
    finalresult="Please fill correctly"
 }

   let result=document.getElementById("result");
   
   result.innerHTML=finalresult
})

function checkValidation(num1,num2,operation){
    if (num1=="") {
        num1error.style.visibility="visible";
        num1Status="no"
    } else{
        num1error.style.visibility="hidden";
        num1Status="yes"
    }
 

    if (num2=="") {
        num2error.style.visibility="visible";
        num2Status="no"
    } else{
        num2error.style.visibility="hidden";
        num2Status="yes"
    }
    if (operation=="empty") {
        operationerror.style.visibility="visible";
        operationStatus="no"
    } else{
        operationerror.style.visibility="hidden";
        operationStatus="yes"
    }
}