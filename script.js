let isTrue=''
function getInput(id){
    
    if(id!=='C' && id!=='=' && id!=='D'){

        document.getElementById('input').innerHTML += id;

        isTrue += checkNum(id)?id:(checkOpr(id)?id:'');
         
    }

    if(id==='C')
       clearInput(id);

    if(id==='='){
       result(isTrue);
    }
    if(id==='D'){
       isTrue = deleteVal(isTrue);
       console.log(isTrue);
    }
    
}

function checkNum(id){

    switch(id){
            
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
                return true;
         
    }

    return false;
}

function checkOpr(id){

    switch(id){
        case '+':
        case '-':
        case '*':
        case '/':
        case '%':
        case 'D':
        case '.':return true;
    }

    return false;
}

function clearInput(){

    document.getElementById('input').innerHTML = '';
    document.getElementById('output').innerHTML = '';
    isTrue='';
}

function result(inputs){

    const regex = /\d+(\s*[-+*/%]\s*\d+)+$/
    let isValid = regex.test(inputs)?'valid':'invalid';

    if(isValid==='invalid'){
        const regex = /^(0|[-+][1-9]\d*|[1-9]\d*)$/
        isValid = regex.test(inputs)?'valid':'invalid';
        //console.log(isValid);
    }
    //console.log(isValid);
    final_result(inputs, isValid);
}

function final_result(inputs, isValid){

    if(isValid==='invalid'){

        document.getElementById('output').innerHTML = 'invalid';
        clearInput();
    }

    else{

        calculate(inputs);
    }
}

function calculate(inputs){

    let result = eval(inputs);
    console.log(inputs, result);
    document.getElementById('output').innerHTML = result;
}

function deleteVal(isTrue){

    let inputVal = isTrue.slice(0,isTrue.length-1);
    document.getElementById('input').innerHTML = inputVal;
    return inputVal;
}

