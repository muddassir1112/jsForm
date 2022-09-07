function calculate() {
  num1 = document.getElementById("age").value;
  var num2 = document.getElementById("weight").value;

  if (num1 < 5 || num1 > 20) {
    alert("Enter The Value In Given Range");
  }
  if (num1 >= 5 && num1 <= 7) { //First Condition
    if(num2 >= 15 && num2 <= 20)
    {
      document.getElementById('res').value="Your Weight Is Perfect";
    }
    else if(num2 < 15)
    {
        document.getElementById('res').value="You are underweight";
    }
    else if(num2 > 20)
    {
        document.getElementById('res').value="You are overweight";
    }
  }
  if(num1 >= 8 && num1 <= 10){ //Second Condition
    if (num2 >= 21 && num2 <= 25)
    {
        document.getElementById('res').value="Your Weight Is Perfect";
    }
    else if(num2 < 21){
        document.getElementById('res').value="You are underweight";
    }
    else if(num2 > 25){
        document.getElementById('res').value="You are overweight";
    }
  }
  if(num1 >= 11 && num1 <= 15){ //Third Condition
    if (num2 >= 26 && num2 <= 30)
    {
        document.getElementById('res').value="Your Weight Is Perfect";
    }
    else if(num2 < 26){
        document.getElementById('res').value="You are underweight";
    }
    else if(num2 > 30){
        document.getElementById('res').value="You are overweight";
    }
  }
  if(num1 >= 16 && num1 <= 20){ //Fourth Condition
    if (num2 >= 31 && num2 <= 40)
    {
        document.getElementById('res').value="Your Weight Is Perfect";
    }
    else if(num2 < 31){
        document.getElementById('res').value="You are underweight";
    }
    else if(num2 > 40){
        document.getElementById('res').value="You are overweight";
    }
  }
}
