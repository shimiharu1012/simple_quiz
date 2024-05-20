const score=sessionStorage.getItem('quizScore')
const quizLength=sessionStorage.getItem('quizLength')
console.log(score)
console.log(quizLength)
const $buttonToIndex=document.querySelector('.js-button-to-index')
const $scoreSection=document.querySelector('.js-score-section')
const $url=document.querySelector('.js-xlink')
console.log($url)


$scoreSection.innerHTML=`正解数は${quizLength}問中<span style="color: red; font-size:40px;">${score}</span>問です！！`
$url.href+=`&text=私のスコアは${score}点でした！！`
console.log($url)


// const cat = document.getElementById(‘cat’);
// btn.href = btn.href + “?” + cat.innerHTML;

$buttonToIndex.addEventListener('click',(e)=>{
    window.location.href='index.html';
})

