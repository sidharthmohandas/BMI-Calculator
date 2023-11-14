const heightInput = document.getElementById("height");
const weightInput = document.getElementById("weight");
const result = document.getElementById("result")

// function to calculate bmi
const calculateBMI = ()=>{
    let height = heightInput.value;
    let weight = weightInput.value;

    // validation

    if (!weight || !height) {
        result.innerText="Please enter some values";
        result.classList.add("error");
        return;
    }

    if (weight == 0 || weight < 0 || height == 0 || height < 0) {
    result.innerText="Negative values not valid!";
    result.classList.add("error");
    return;      
    }
    height =height/100;
    let bmi = weight/(height *height);// BMI formula
    bmi.toFixed(1);

    if (
        bmi <= 18.4
    ) {
        result.innerText=`Your BMI is ${bmi},you are underweight.`;
    }else if (bmi >= 18.5 && bmi <= 24.9) {
        result.innerText=`Your BMI is ${bmi},you are normal.`;
    }else if (bmi >= 25 && bmi <=29.9) {
        result.innerText=`Your BMI is ${bmi},you are overweight.`;
    }else if (bmi >= 30) {
        result.innerText=`Your BMI is ${bmi},you are obese.`;
    }

    result.classList.remove("error");
};