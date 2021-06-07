let btnmeter = document.getElementById('meter');
let btnfeet = document.getElementById('feet');


btnmeter.addEventListener('click', function(){
    let input = document.getElementById('input').value;
    let result =  (input / 3.28084) + ' meters';
    document.getElementById('output').value = result;
})


btnfeet.addEventListener('click', function(){
    let input = document.getElementById('input.value');
    let result =  input * 3.28084 + ' feet';
    document.getElementById('output').value = result;
})