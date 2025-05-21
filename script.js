function calculateBMI() {
    let weight = parseFloat(document.getElementById('weight').value);
    let height = parseFloat(document.getElementById('height').value);

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        document.getElementById('bmiResult').innerText = "Fadlan geli xog sax ah.";
        return;
    }

    let bmi = (weight / (height * height)).toFixed(2);
    document.getElementById('bmiResult').innerText = `BMI-gaaga waa: ${bmi}`;

    // Store BMI in sessionStorage
    sessionStorage.setItem("bmiResult", bmi);

    // Redirect based on BMI value
    if (bmi < 18.5) {
        window.location.href = "underweight.html";
    } else if (bmi >= 18.5 && bmi < 25) {
        window.location.href = "normal.html";
    } else if (bmi >= 25 && bmi < 30) {
        window.location.href = "overweight.html";
    } else {
        window.location.href = "obese.html";
    }
}

function resetForm() {
    document.getElementById('weight').value = '';
    document.getElementById('height').value = '';
    document.getElementById('bmiResult').innerText = '';
}

function retrieveData() {
    let bmiResult = sessionStorage.getItem("bmiResult");
    document.getElementById("result").innerText = "BMI gaagu waa  " + bmiResult;
}
