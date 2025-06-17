function runAll() {
    let result = "";

    result += "Addition (5 + 3): " + (5 + 3) + "\n";
    result += "Subtraction (10 - 4): " + (10 - 4) + "\n";
    result += "Multiplication (6 * 7): " + (6 * 7) + "\n";
    result += "Division (20 / 5): " + (20 / 5) + "\n";
    result += "Is 4 Even? " + (4 % 2 === 0) + "\n";
    result += "Is -2 Positive? " + (-2 > 0) + "\n";
    result += "Uppercase of 'learning': " + "learning".toUpperCase() + "\n";
    result += "Square of 9: " + (9 * 9) + "\n";
    result += "Current Date: " + new Date().toLocaleString() + "\n";
    result += "Reverse of 'world': " + "world".split('').reverse().join('') + "\n";

    document.getElementById("output").innerText = result;
  }

  function showBirthday() {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const date = new Date(2006, 4, 10); // May is month 4 (0-indexed)
    const dayName = days[date.getDay()];
    document.getElementById("output").innerText = "You were born on: " + dayName;
  }

  function checkDecimal() {
    const num = 99.99;
    const numStr = num.toString();
    let length = 0;
    if (numStr.includes(".")) {
      length = numStr.split(".")[1].length;
    }
    document.getElementById("output").innerText = "Decimal length of " + num + " is: " + length;
  }