var buttons = document.getElementsByClassName('button');
var display1 = document.getElementsByClassName('display');

display1[0].textContent = "";
var operand1 = 0;
var operand2 = null;
var operator = null;


function isOperator(value) {
    return value == "+" || value == "-" || value == "*" || value == "/";
}
for(var i=0;i<buttons.length;i++){
    buttons[i].addEventListener('click',function(){
        var value = this.getAttribute("data-value");
        var text = display1[0].textContent;
        if (isOperator(value)) {
            operator = value;
            operand1 = parseFloat(text);
            display1[0].textContent = "";
        }
        if (value == "sign") {
            console.log('clicked ',value);
            operand1 = parseFloat(text);
            operand1 = -1 * operand1;
            display1[0].textContent = operand1;
        } else if (value == ".") {
            console.log('clicked ',value);
            if (text.length && !text.includes('.')) {
                display1[0].textContent = text + '.';
            }
        }else if (value == "%") {
            console.log('clicked ',value);
            operand1 = parseFloat(text);
            operand1 = operand1 / 100;
            display1[0].textContent = operand1;
        } else if (value == "AC") {
            console.log('clicked ',value);
            operand1=0;
            operand2=null;
            result=null;
            display1[0].textContent = "";
        }else if (value == "=") {
            display1[0].textContent = " ";
            console.log('clicked ',value);
            operand2 = parseFloat(text.substring(1));
            
            var result = eval(operand1+''+operator+''+ operand2);
            if(operand2=='0'){
                result="Error!";
            }
            if (result) {
                display1[0].textContent = " ";
                display1[0].textContent = result;
                console.log(result);
                if( result!="Error!"){
                    operand1 = result;
                }
                operand2 = null;
                operator = null;
            }
        }else{
            console.log('clicked ',value);
            display1[0].textContent+=value;
        }
    });
}
