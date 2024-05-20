// index.html内の処理
const $buttonToQuiz=document.querySelector('.js-start-button')
console.log($buttonToQuiz)

$buttonToQuiz.addEventListener('click',(e)=>{
    window.location.href='quiz.html';
})