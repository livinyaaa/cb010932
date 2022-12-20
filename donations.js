
//add eventlistners

let btndonate = document.getElementById("donations");
btndonate.addEventListener("click" , donation);


function donation(){
    
    //get references: interactive elements

    const email = document.getElementById("donatorsemail").value;
    const name = document.getElementById("donatorsname").value;
    const cardnumber = document.getElementById("donatorscardnumber").value;
    const cvc = document.getElementById("cvc").value;
    const donateamount = document.getElementById("donateamount").value;
    
//makes sure that the form will not be submited if values aren't entered
    if(name=="" || name.length<5){
        alert("Please enter your full name");
        document.getElementById("donatorsname").focus();
        return false; 
    }



    if(email.indexOf("@")==-1 || email.indexOf(".")==-1){
        alert("Please enter valid email address");
        document.getElementById("donatorsemail").focus();
        return false;
    }
    if(cardnumber=="" || cardnumber.length<16){
        alert("Please enter valid card number");
        document.getElementById("donatorscardnumber").focus();
        return false;
    }
    if(cvc=="" || cvc.length<3){
        alert("Please enter valid cvc number");
        document.getElementById("cvc").focus();
        return false;
    }
    if(donateamount==""){
        alert("Please select your donation amount");
        document.getElementById("donateamount").focus();
        return false;
    }
    
    resetdonateform();
    
    alert("Thank you " + name + " you have succesfully donated");
    return;
}

//reset form

function resetdonateform(){
    document.getElementById("donate").reset();
}