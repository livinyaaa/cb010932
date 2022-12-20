
//get references to interactive elements

const Form = document.getElementById("ticketForm");
const FirstName = document.getElementById("firstname");
const LastName = document.getElementById("lastname");
const EmailAddress = document.getElementById("emailAdd");
const LocalAdults = document.getElementById("Localadults");
const LocalChildrenU6 = document.getElementById("childrenunder6");
const LocalChildrenU15 = document.getElementById("childrenunder15");
const ForeignAdults = document.getElementById("Foreignadults");
const ForeignChildren = document.getElementById("Foreignchildren");
const FoodToken = document.getElementById("foodToken");
const AnnualPass = document.getElementById("annualPass");
const txtOutput = document.getElementById("output");

//add eventlistners
let btnAddOrder = document.getElementById("addToOrder");
btnAddOrder.addEventListener("click", AddtoOrder);
btnAddOrder.addEventListener("click", Additionals);
btnAddOrder.addEventListener("click", FinalTotal);

let btnPlaceOrder = document.getElementById("placeToOrder");
btnPlaceOrder.addEventListener("click",PlaceToOrder);

let bntReset = document.getElementById("reset");
bntReset.addEventListener("click" , Reset);

let additionals = 0;

function Reset(){
    location.reload()
}

function AddtoOrder(event){
        event.preventDefault();

        let name = name.value;
        let foreignadult = parseInt(ForeignAdults.value); 
        let foreignchild = parseInt(ForeignChildren.value); 
        let localadult = parseInt(LocalAdults.value); 
        let localchildu6 = parseInt(LocalChildrenU6.value);
        let localchildu15 = parseInt(LocalChildrenU15.value);  
        let annualpass = parseInt(AnnualPass.value); 
        let foodtoken = parseInt(FoodToken.value);

        let subtotal = fadult*3000 + fchild*2500 + ladult*2500 + lchildu6*500 + lchildu15*1000 + annualpass*5000 + foodtoken*500;

        document.getElementById("p1").innerText=`Name: ${name}`;
        document.getElementById("p2").innerText=`Number of Foreign Adults: ${foreignadult}`;
        document.getElementById("p3").innerText=`Number of Foreign Children: ${foreignchild}`;
        document.getElementById("p4").innerText=`Number of Local Adults: ${localadult}`;
        document.getElementById("p5").innerText=`Number of Local Children Under the Age of 6: ${localchildu6}`;
        document.getElementById("p6").innerText=`Number of Local Children Under the Age of 15: ${localchildu15}`;
        document.getElementById("p7").innerText=`Number of Annual Passes: ${annualpass}`;
        document.getElementById("p8").innerText=`Number of Food Token: ${foodtoken}`;

        document.getElementById("p9").innerText=`Sub Total: ${subtotal}`;

}

function Additionals(){


    let threehour=document.getElementById("3hours");
    let halfDay=document.getElementById("halfDay");
    let fullDay=document.getElementById("fullDay");
    let twodays=document.getElementById("2days");

    let foreignadult = parseInt(ForeignAdults.value); 
    let foreignchild = parseInt(ForeignChild.value); 
    let localadult = parseInt(LocalAdults.value); 
    let localchildu6 = parseInt(LocalChildU6.value);
    let localchildu15 = parseInt(LocalChildU15.value);

    if(halfDay.checked==true&&localadult!=0||localchildu6!=0||localchildu15!=0){
        additionals+=250
    }
    else if(fullDay.checked==true&&localadult!=0||localchildu6!=0||localchildu15!=0){
        additionals+=500
    }
    else if(twodays.checked==true&&localadult!=0||localchildu6!=0||localchildu15!=0){
        additionals+=1000
    }


    if(threehour.checked==true&&foreignadult!=0||foreignchild!=0){
        additionals+=1000
    }
    else if(halfDay.checked==true&&foreignadult!=0||foreignchild!=0){
        additionals+=500
    }
    else if(fullDay.checked==true&&foreignadult!=0||foreignchild!=0){
        additionals+=1000
    }
    else if(twodays.checked==true&&foreignadult!=0||foreignchild!=0){
        additionals+=2000
    }


    

    document.getElementById("p10").innerText=`Additional Charges: ${additionals}`;

}

function FinalTotal(){

    let foreignadult = parseInt(ForeignAdults.value); 
    let foreignchild = parseInt(ForeignChild.value); 
    let localadult = parseInt(LocalAdults.value); 
    let localchildu6 = parseInt(LocalChildU6.value);
    let localchildu15 = parseInt(LocalChildU15.value);  
    let annualpass = parseInt(AnnualPass.value); 
    let foodtoken = parseInt(FoodToken.value);

    let subtotal = foreignadult*3000 + foreignchild*2500 + localadult*2500 + localchildu6*500 + localchildu15*1000 + annualpass*5000 + foodtoken*500;

    let finalTotal=subtotal+additionals;
    document.getElementById("p11").innerText=`Final Total: ${finalTotal}`;
}

function PlaceToOrder(){

    let threehour=document.getElementById("3hours");
    let halfDay=document.getElementById("halfDay");
    let fullDay=document.getElementById("fullDay");
    let twodays=document.getElementById("2days");

    
    let foreignadult = parseInt(ForeignAdults.value); 
    let foreignchild = parseInt(ForeignChild.value); 
    let localadult = parseInt(LocalAdults.value); 
    let localchildu6 = parseInt(LocalChildU6.value);
    let localchildu15 = parseInt(LocalChildU15.value);  
    let annualpass = parseInt(AnnualPass.value); 
    let foodtoken = parseInt(FoodToken.value);

    let subtotal = foreignadult*3000 + foreignchild*2500 + localadult*2500 + localchildu6*500 + localchildu15*1000 + annualpass*5000 + foodtoken*500;

    let finalTotal=subtotal+additionals;


    
    if(threehour.checked==true||halfDay.checked==true||fullDay.checked==true||twodays.checked==true){
        alert(`Thank you for making a reservation with us!\nYour final amount is ${finalTotal}!\nYou will receive an email with your receipt shortly.\nYour Train ID: Upcountry Maiden 1015`);
    }
    else{
        alert("Order Incomplete")
    }

}