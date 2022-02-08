let min = 1;
let max = 9;
let lvl = document.querySelector('#lvl');
let correctAnswer = 0;
let wrongAnswer = 0;
let showStats = document.querySelector('#showStats');
let resetStats = document.querySelector('#resetStats');
let add = document.querySelector('#add');
add.onclick = function(){
    let numberA = getRandomInt(min,max)
    let numberB = getRandomInt(min,max)
    let correctNumber = numberA + numberB
    let userNumber = prompt(numberA + '+' + numberB + '=', '');
    checkAnswer(correctNumber, userNumber)
}
let subtract = document.querySelector('#subtract');
subtract.onclick = function(){
    let numberA = getRandomInt(min,max)
    let numberB = getRandomInt(min,max)
    let correctNumber = numberA - numberB
    let userNumber = prompt(numberA + '-' + numberB + '=', '');
    checkAnswer(correctNumber, userNumber)
}
let multiplay = document.querySelector('#multiplay');
multiplay.onclick = function(){
    let numberA = getRandomInt(min,max)
    let numberB = getRandomInt(min,max)
    let correctNumber = numberA * numberB 
    let userNumber = prompt(numberA + '*' + numberB + '=', '');
    checkAnswer(correctNumber, userNumber)
}
let divide = document.querySelector('#divide');
divide.onclick = function(){
    let numberA = getRandomInt(min,max)
    let numberB = getRandomInt(min,max)
    let correctNumber = Math.round(numberA / numberB) 
    let userNumber = prompt('Округлите ответ до целого числа' + '\n' + numberA + '/' + numberB + '=', '');
    checkAnswer(correctNumber, userNumber)
}
function getRandomInt(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function checkAnswer(correctNumber, userNumber){
    if(correctNumber == userNumber){
        correctAnswer = correctAnswer + 1;
        alert('Молодец! Ты ответил правильно!')
    }else{
        wrongAnswer = wrongAnswer + 1;
        alert('Неверно! Правильный ответ ' + correctNumber)
    }
}
showStats.onclick = function(){
    alert('Правильных ответов - ' + correctAnswer + '\n' + 'Неправильных ответов - ' + wrongAnswer);
}
resetStats.onclick = function(){
    alert('Статистика обнулена!')
    correctAnswer = 0;
    wrongAnswer = 0; 
}
lvl.onchange = function(){
    let value = lvl.value;
    console.log(value)
    switch(value){
        case 'easy': {
            min = 1;
            max = 9;
            break;
        }
        case 'medium': {
            min = 10;
            max = 99;
            break;
        }
        case 'hard': {
            min = 100;
            max = 999;
            break;
        }
    }
}