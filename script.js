
  // переменная, в которой хранится выбранное математическое действие
  var op; 

  // функция расчёта
  function func() {
  	// переменная для результата
    var result;
    // получаем первое и второе число
    var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);
    // смотрим, что было в переменной с действием, и действуем исходя из этого
    switch (op) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num1 / num2;
        break;
        case 'пашол нахуй':
        result = num1 * num1;
        break;
        
    }
  

    console.log(result);
    if (num1+num2==300){
      traktorist();
    } else {
      document.getElementById("result").innerHTML = result;
    }
  }
  function button_1() {
        document.getElementById('num1').value+="1";
  }
    
  function operatorLabel(operator) {
    op=operator;
    document.getElementById("lox").innerHTML = operator;
  }
  function pasholNaHui(message) {
   alert(message);
   document.getElementById("pasholNaHui").innerHTML = message;
  setTimeout(() => {
    pasholNaHui("пашол нахуй");
  }, 500);

  }
  function traktorist() {
    document.getElementById('traktorist').style.visibility = "visible"; // show

  }