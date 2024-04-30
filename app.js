// const question_objects=[

// ]
const quiz=[
    {
        question:'美食四天王トリコのパートナーでもあり，グルメ界では八王の一角をなす伝説の狼は？',
        answers: ['オブサウルス','アシュラザウルス','トロルコング','バトルウルフ'],
        correct: 'バトルウルフ'
    },
    {
        question:'美食四天王の内，最も身長が高いのは誰？',
        answers: ['トリコ','ココ','サニー','ゼブラ'],
        correct: 'ゼブラ'
    },
    {
        question:'美食四天王のパートナーの猛獣のうち，唯一八王の子孫でないものは',
        answers: ['テリー','キッス','クイン','ダルマホース'],
        correct: 'ダルマホース'
    },
    {
        question:'作中でGTロボを運転していない美食會メンバーは？',
        answers: ['スタージュン','ベイ','バリーガモン','ギド'],
        correct: 'バリーガモン'
    },
    {
        question:'美食會副料理長スタージュンがつけているマスクの名前は？',
        answers: ['シバの仮面','シバの兜','シヴァの仮面','シヴァの兜'],
        correct: 'シバの兜'
    },
    {
        question:'トリコ原作の最終話のラストに登場するスペースタイパンの捕獲レベルは？',
        answers: ['51万','52万','53万','54万'],
        correct: '53万'
    },
];

// 定数，変数を定義

const $question=document.getElementById('js-question');
const $button=document.getElementsByTagName('button');
const buttonLength=$button.length;
let quizIndex=0;
let score=0;

let handlerIndex=0;
while(handlerIndex<buttonLength){
    $button[handlerIndex].addEventListener('click',(e)=>{clickHandler(e);})
    handlerIndex++;
}



//　関数を定義

const setupQuiz=()=>{
    $question.textContent=quiz[quizIndex].question;
    //各ボタン1-4にテキストを割り当てる
    for(let i=0; i<buttonLength; i++){
        $button[i].textContent=quiz[quizIndex].answers[i];
    }
}


const clickHandler=(e)=>{
    if(e.target.textContent===quiz[quizIndex]['correct']){
        window.alert('正解！!');
        score++;
    }else{
        window.alert('不正解...');
    };
    
    quizIndex++;
    
    if (quizIndex<quiz.length){
        setupQuiz();
    }else{
        window.alert('あなたの正解数は'+score+'です！！');
    }
    
}


// 処理

setupQuiz()

    

