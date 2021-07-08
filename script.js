
function calcular(){
		
    var num1   = parseFloat(document.getElementById("num1").value); 
    var num2   = parseFloat(document.getElementById("num2").value); 
    var operacao  = document.getElementById("operacao").value; 
    var result = document.getElementById("result"); 

    if(operacao == "+") result.value = num1 + num2;
    if(operacao == "-") result.value = num1 - num2;
    if(operacao == "*") result.value = num1 * num2;
    if(operacao == "/") result.value = num1 / num2;
    if(operacao == "**") result.value = num1 ** num2;
    if(operacao == "Math.sqrt(num1)") result.value = Math.sqrt(num1);



    if (num1 && num2 != parseFloat){
    if(operacao == "+") result.value = num1 + num2;
    if(operacao == "-") result.value = num1 - num2;
    if(operacao == "*") result.value = num1 * num2;
    if(operacao == "/") result.value = num1 / num2;
    if(operacao == "**") result.value = num1 ** num2;
    if(operacao == "Math.sqrt(num1)") result.value = Math.sqrt(num1);
  
}

}	
function clean()
{
    document.getElementById('result').innerHTML = "";
}

