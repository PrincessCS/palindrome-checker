const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");
const textInput = document.getElementById("text-input");
let cleanInput;



function cleanString(){
    // Cleaning the string in the input field by removing spaces and special characters
    cleanInput = textInput.value.toLowerCase().replace(/[^A-Z0-9]/ig, "");
   

}

function isAPalindrome(){
    cleanString()
    //Splitting, reversing, and joining the input from the cleaned string
    let reverseInput = cleanInput.split("").reverse().join("");

    if(textInput.value === ""){
        alert("Please Input a Value!")
    }else if(cleanInput === reverseInput){
        result.textContent = `${textInput.value} is a palindrome.`
    } else{
      result.textContent = `${textInput.value} is not a palindrome!`
    }

     textInput.value = "";
   

     
    
}
textInput.addEventListener("keydown", (e)=>{
    if(e.key === "Enter"){
        isAPalindrome();
    }
})
checkBtn.addEventListener("click", isAPalindrome);

