// JavaScript goes here.

let GoOutButton = document.querySelector(".GoOutButton");
let ResultDiv = document.querySelector(".result");
let SubmitButton = document.querySelector(".SubmitButton")
let GoOutVariable = "no";
let StayInButton = document.querySelector(".StayInButton");
let StayInVariable = "no";

GoOutButton.addEventListener("click", function(){
    GoOutVariable = "yes";
    console.log("GoOut"+GoOutVariable);
})
StayInButton.addEventListener("click", function(){
    StayInVariable = "yes";
    console.log("StayIn"+StayInVariable);
})
SubmitButton.addEventListener("click", function(){
    let NumSiblingAnswer = Number(document.querySelector(".NumSiblingsAnswer").value);

    let DogCatAnswer = document.querySelector(".DogCatAnswer").value;
    
    console.log("Submit Button Works");
    console.log("NumSib"+ NumSiblingAnswer);
    console.log("Pet"+DogCatAnswer);

    if (NumSiblingAnswer <= 1 && DogCatAnswer === "dog" && GoOutVariable === "yes"){
        console.log("Harry");
        ResultDiv.innerHTML = "You matched with Harry Potter!";
    }else if(NumSiblingAnswer > 1 && DogCatAnswer === "dog" && GoOutVariable === "yes"){
        ResultDiv.innerHTML = "You matched with Ron Wesley!";
    }else if (NumSiblingAnswer <= 1 && DogCatAnswer === "cat" && GoOutVariable === "yes"){
        ResultDiv.innerHTML = "You matched with Cho Chang!";
    }else if (NumSiblingAnswer > 1 && DogCatAnswer === "cat" && GoOutVariable === "yes"){
        ResultDiv.innerHTML = "You matched with Fleur Delacour!";
    } else if (NumSiblingAnswer <= 1 && DogCatAnswer === "dog" && StayInVariable === "yes"){
        ResultDiv.innerHTML = "You matched with Nevil!";
    } else if(NumSiblingAnswer > 1 && DogCatAnswer === "dog" && StayInVariable === "yes"){
        ResultDiv.innerHTML = "You matched with Professor McGonagall!";
    }else if (NumSiblingAnswer <= 1 && DogCatAnswer === "cat" && StayInVariable === "yes"){
        ResultDiv.innerHTML = "You matched with Hermiony!";
    }else if (NumSiblingAnswer > 1 && DogCatAnswer === "cat" && StayInVariable === "yes"){
        ResultDiv.innerHTML = "You matched with Luna Lovegood!";
    }
    
});