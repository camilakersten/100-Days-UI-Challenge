function birthdayValidation() {
    var birthDate = document.getElementById("birthday").value;
    console.log(birthDate);
    if ((2024 - birthDate) < 180) {
        alert("This site is only for +180 years, did you input your age correctly?")
    } else {
        alert("Welcome to our website!")
    }
   
}