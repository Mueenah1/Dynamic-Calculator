function history(){
    return document.getElementById('history').innerHTML
}

function getHistory(num){
    document.getElementById('history').innerHTML = num
}

function input(){
    return document.getElementById('input').innerHTML;
}
function getInput(num){
    if(num == ''){
        document.getElementById('input').innerHTML = num;
    }else{
        document.getElementById('input').innerHTML = getFormattedNumber(num);
    }
}
function getFormattedNumber(val){
    if(val == '-'){
        return ''
    }
    var n = Number(val);
    var value = n.toLocaleString('en')
    return value
}

function reverseNumberFormat(num){
    return Number(num.replace(/,/g, ''));
}

var operators = document.getElementsByClassName('operator');
for (var eachOperator = 0; eachOperator < operators.length; eachOperator++){
    operators[eachOperator].addEventListener('click', function(){
        if(this.id =='clear'){
            getHistory(0);
            getInput('')
        } else if(this.id == 'delete'){
            var output = reverseNumberFormat(input()).toString()
            var currentInput = input()
            var currentHistory =  history()
            if(currentInput.length =='1' && currentHistory.length =='0'){
                getHistory(0)
                getInput('')
                // currentInput= ''
            }
            if (output){
                output = output.substring(0,output.length-1)
                getInput(output)
            }
        }else{
            var output = input();
            var myHistory = history();
            if(output == '' && myHistory!=''){
                if(isNaN(myHistory[myHistory.length-1])){
                    myHistory = myHistory.substring(0, myHistory.length-1)
                }
            }else if(output == '' && myHistory =='0'){
                myHistory = ''
            }else if(output != '' && myHistory =='0'){
                myHistory =''
            }

            if (output != '' || myHistory !=''){
                output = output ==''? output : reverseNumberFormat(output)
                myHistory = myHistory + output
                if(this.id == 'equal'){
                    console.log(myHistory)
                    var result = eval(myHistory);
                    getInput(result);
                    getHistory('');
                }else{
                    myHistory = myHistory + this.innerHTML;
                    getHistory(myHistory)
                    getInput('')
                }
            }
        }
    })
}

var numbers = document.getElementsByClassName('number');
for (var eachNumber = 0; eachNumber < numbers.length; eachNumber++){
    numbers[eachNumber].addEventListener('click', function(){
        var output = reverseNumberFormat(input())
        if(output !=NaN) {
            output = output + this.innerHTML;
            getInput(output)
        }
    })
}

