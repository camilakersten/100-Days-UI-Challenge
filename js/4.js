function calcBmi() {
    let weight = document.getElementById('weight').value
    let height = document.getElementById('height').value

    let bmi = weight / (height * height)
    
    document.getElementById('heading').innerHTML = 'Your BMI is: '
    document.getElementById('bmiOutput').innerHTML = bmi.toFixed(1)

    if (bmi < 16 ) {
        document.getElementById('message').innerHTML = "Your BMI indicates severe thinness."
    } else if (bmi < 17) {
        document.getElementById('message').innerHTML = "Your BMI falls into the moderate thinness category."
    } else if (bmi <= 18.5) {
        document.getElementById('message').innerHTML = "Your BMI suggests mild thinness."
    } else if (bmi < 25) {
        document.getElementById('message').innerHTML = "Congratulations! Your BMI falls within the normal weight range."
    } else if (bmi < 30){
        document.getElementById('message').innerHTML = "Your BMI indicates that you are in the overweight category."
    } else {
        document.getElementById('message').innerHTML = "Your BMI suggests severe obesity."
    }
}

