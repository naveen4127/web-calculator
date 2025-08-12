let firstNumber="";
let SecondNumber="";
let operator="";

function append(number){
    if(operator===""){
        firstNumber+=number;
        document.getElementById('res').value=firstNumber;

    }
    else{
        SecondNumber+=number;
        document.getElementById('res').value=SecondNumber;
    }
}
function operate(op){
    operator=op;
}
function calculate(){
    let result;
    switch(operator){
        case'+':
        result=parseInt(firstNumber)+parseInt(SecondNumber);
        break;
         case'-':
        result=parseInt(firstNumber)-parseInt(SecondNumber);
        break;
         case'*':
        result=parseInt(firstNumber)*parseInt(SecondNumber);
        break;
         case'/':
        result=parseInt(firstNumber)/parseInt(SecondNumber);
        break;
    }
    document.getElementById('res').value=result;
}
function clearresult(){
    firstNumber="";
    SecondNumber="";
    operator="";
   document.getElementById('res').value="";
}
const clickSound = document.getElementById("clickSound");

function playSound() {
    clickSound.currentTime = 0;
    clickSound.play().catch(e => console.log("Audio play error:", e));
}
document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {
        playSound();
        button.classList.add('button-pressed');
        setTimeout(() => button.classList.remove('button-pressed'), 200);
    });
});
