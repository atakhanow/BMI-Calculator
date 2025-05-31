function calculateBMI() {
  const height = parseFloat(document.getElementById("height").value);
  const weight = parseFloat(document.getElementById("weight").value);
  const heightUnit = document.querySelector(
    'input[name="heightUnit"]:checked'
  ).value;
  const weightUnit = document.querySelector(
    'input[name="weightUnit"]:checked'
  ).value;

  if (!height || !weight || height <= 0 || weight <= 0) {
    alert("Please enter valid height and weight values.");
    return;
  }

  // Convert to metric units
  let heightInMeters = height;
  let weightInKg = weight;

  if (heightUnit === "ft") {
    heightInMeters = height * 0.3048; // Convert feet to meters
  } else {
    heightInMeters = height / 100; // Convert cm to meters
  }

  if (weightUnit === "lbs") {
    weightInKg = weight * 0.453592; // Convert pounds to kg
  }

  // Calculate BMI
  const bmi = weightInKg / (heightInMeters * heightInMeters);

  // Display result
  displayResult(bmi);
}

function displayResult(bmi) {
  const resultDiv = document.getElementById("result");
  const bmiValue = document.getElementById("bmiValue");
  const bmiCategory = document.getElementById("bmiCategory");
  const bmiDescription = document.getElementById("bmiDescription");

  bmiValue.textContent = bmi.toFixed(1);

  // Remove existing classes
  resultDiv.className = "result show";

  if (bmi < 18.5) {
    resultDiv.classList.add("underweight");
    bmiCategory.textContent = "Underweight";
    bmiDescription.textContent =
      "You may need to gain some weight. Consult with a healthcare provider.";
  } else if (bmi >= 18.5 && bmi < 25) {
    resultDiv.classList.add("normal");
    bmiCategory.textContent = "Normal Weight";
    bmiDescription.textContent =
      "Great! You have a healthy weight. Keep maintaining your lifestyle.";
  } else if (bmi >= 25 && bmi < 30) {
    resultDiv.classList.add("overweight");
    bmiCategory.textContent = "Overweight";
    bmiDescription.textContent =
      "Consider a balanced diet and regular exercise to reach a healthy weight.";
  } else {
    resultDiv.classList.add("obese");
    bmiCategory.textContent = "Obese";
    bmiDescription.textContent =
      "It's recommended to consult with a healthcare provider for guidance.";
  }
}

// Allow Enter key to calculate
document.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    calculateBMI();
  }
});
