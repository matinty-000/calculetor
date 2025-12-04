var n1 = '';
var action = '';
var isNew = false;

function addNum(x) {
    var display = document.getElementById('result');
    
    if (isNew) {
        display.value = '';
        isNew = false;
    }
    
    if (display.value == '0' && x != '.') {
        display.value = x;
    } else {
        display.value = display.value + x;
    }
}

function setOp(op) {
    var display = document.getElementById('result');
    n1 = display.value;
    action = op;
    isNew = true;
}

function clr() {
    document.getElementById('result').value = '0';
    n1 = '';
    action = '';
}

function del() {
    var display = document.getElementById('result');
    display.value = display.value.slice(0, -1);
}

function mathFunc(type) {
    var display = document.getElementById('result');
    var val = parseFloat(display.value);
    var javab = 0;

    if (type == 'sin') {
        javab = Math.sin(val * Math.PI / 180);
    } else if (type == 'cos') {
        javab = Math.cos(val * Math.PI / 180);
    } else if (type == 'tan') {
        javab = Math.tan(val * Math.PI / 180);
    } else if (type == 'sq') {
        javab = Math.sqrt(val);
    } else if (type == 'log') {
        javab = Math.log10(val);
    }

    display.value = javab;
    isNew = true;
}

function calc() {
    var display = document.getElementById('result');
    var n2 = display.value;
    var javab = 0;
    
    var a = parseFloat(n1);
    var b = parseFloat(n2);

    if (action == '+') {
        javab = a + b;
    } else if (action == '-') {
        javab = a - b;
    } else if (action == '*') {
        javab = a * b;
    } else if (action == '/') {
        javab = a / b;
    } else if (action == '^') {
        javab = Math.pow(a, b);
    }

    display.value = javab;
    isNew = true;
    action = '';
}

function doConvert() {
    var adad = document.getElementById('numMabna').value;
    var az = parseInt(document.getElementById('fromM').value);
    var be = parseInt(document.getElementById('toM').value);
    
    if(adad == "") {
        alert("لطفا عدد وارد کنید");
        return;
    }

    var temp = parseInt(adad, az); 
    var natije = temp.toString(be); 

    document.getElementById('resMabna').innerHTML = "جواب: " + natije.toUpperCase();
}

function toggleHelp() {
    var box = document.getElementById('help-text');
    if (box.style.display === 'none') {
        box.style.display = 'block';
    } else {
        box.style.display = 'none';
    }
}