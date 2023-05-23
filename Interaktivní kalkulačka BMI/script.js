function calculateBMI() {
    var weight = document.getElementById('weight').value;
    var height = document.getElementById('height').value / 100; // převést výšku na metry
  
    var bmi = weight / (height * height);
    var result = document.getElementById('result');
  
    if (isNaN(bmi)) {
      result.textContent = 'Prosím zadejte platné hodnoty váhy a výšky.';
    } else {
      result.textContent = 'Vaše BMI je ' + bmi.toFixed(2);
    }
  }
  