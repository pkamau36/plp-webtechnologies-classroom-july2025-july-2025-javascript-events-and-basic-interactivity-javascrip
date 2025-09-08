//toggle theme 
function toggleTheme(){
    document.body.classList.toggle("dark");
}
//event handling
let textArea = document.getElementById("myTextArea");

textArea.addEventListener("focus", function(){
    console.log("text area is focused");
});

textArea.addEventListener("input", function(){
    console.log("text area input changed to:" + this.value);
});

textArea.addEventListener("blur", function(){
    console.log("text area lost focus");
});

textArea.addEventListener("paste", function(){
    console.log("text area content pasted");
});


//FAQ TOGGLING

const questions = document.querySelectorAll(".faq-question");

questions.forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;

    // Toggle the clicked answer
    answer.style.display =
      answer.style.display === "block" ? "none" : "block";
  });
});


//form validation

document.getElementById("myForm").onsubmit = function(event){
    event.preventDefault(); // prevents form submission without validation 

    //fetch form values
    let username = document.getElementById("username").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    //clear previous errors
    document.getElementById("usernameError").innerText="";
    document.getElementById("emailError").innerText="";
    document.getElementById("passwordError").innerText="";

    let isvalid = true;

    //start validation
    if (username === ""){
        document.getElementById("usernameError").innerText="Username is required";
        isvalid = false;
    }else if (username.length < 3){
        document.getElementById("usernameError").innerText="Username must be at least 3 characters";
        isvalid = false;
    }


    //validate email
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email === ""){
        document.getElementById("emailError").innerText="Email is required";
        isvalid = false;
    }else if(!emailPattern.test(email)){
        document.getElementById("emailError").innerText="Invalid email format";
        isvalid = false;
    }

    //validate password
    let passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; // Minimum eight characters, at least one letter and one number
    if (password === ""){
        document.getElementById("passwordError").innerText="Password is required";
        isvalid = false;
    }else if(!passwordPattern.test(password)){
        document.getElementById("passwordError").innerText="Password must be at least 8 characters, include at least one letter and one number";
        isvalid = false;
    }
    if (isvalid){
        alert("Form submitted successfully!");
        document.getElementById("myForm").reset();
   
}
}
