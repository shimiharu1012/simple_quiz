

// quiz.html内の処理
const quiz=[
    {
        question:'漫画「トリコ」の原作者は？',
        answers: ['久保帯人','島袋光年','空知英秋','松井優征'],
        correct: '島袋光年'
    },
    // {
    //     question:'美食四天王トリコのパートナーでもあり，グルメ界では八王の一角をなす伝説の狼は？',
    //     answers: ['A オブサウルス','B アシュラザウルス','C トロルコング','D バトルウルフ'],
    //     correct: 'D バトルウルフ'
    // },
    // {
    //     question:'美食四天王の内，最も身長が高いのは誰？',
    //     answers: ['トリコ','ココ','サニー','ゼブラ'],
    //     correct: 'ゼブラ'
    // },
    // {
    //     question:'美食四天王のパートナーの猛獣のうち，唯一八王の子孫でないものは',
    //     answers: ['テリー','キッス','クイン','ダルマホース'],
    //     correct: 'ダルマホース'
    // },
    // {
    //     question:'作中でGTロボを運転していない美食會メンバーは？',
    //     answers: ['スタージュン','ベイ','バリーガモン','ギド'],
    //     correct: 'バリーガモン'
    // },
    // {
    //     question:'美食會副料理長スタージュンがつけているマスクの名前は？',
    //     answers: ['シバの仮面','シバの兜','シヴァの仮面','シヴァの兜'],
    //     correct: 'シバの兜'
    // },
    // {
    //     question:'トリコ原作の最終話のラストに登場するスペースタイパンの捕獲レベルは？',
    //     answers: ['51万','52万','53万','54万'],
    //     correct: '53万'
    // },
];
sessionStorage.setItem('quizLength',String(quiz.length))    //resultにおいて，問題数を使用する
//　要素を取得

const $question=document.querySelector('.js-quiz-question');
console.log($question)
// const $button=document.getElementsByTagName('button');
const $buttons=document.querySelectorAll('.js-quiz-button');
const buttonLength=$buttons.length;
const $buttonsText=document.querySelectorAll('.js-button-text');
console.log($buttonsText)




const $modal = document.querySelector('.js-modal');
const $result=document.querySelector('.js-modal-result');
console.log($result)

const $next = document.querySelector('.js-modal-next');


let quizIndex=0;
let score=0;

// ボタンに対してイベントを発行する
$buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        clickHandler(e);
    });
});

$next.addEventListener('click',(e)=>{nextTo(e);})

// 問題文，および選択肢をセットアップする
const buttonMarker=['A','B','C','D']
const setupQuiz=()=>{
    $question.textContent=`第${quizIndex+1}問`+" "+quiz[quizIndex].question;
    // 各ボタン内のテキスト部分に問題を割り当てる
    for(let i=0; i<buttonLength; i++){
        $buttonsText[i].textContent=buttonMarker[i]+' '+quiz[quizIndex].answers[i];
    }
    
}

//「開くボタン」をクリックしてモーダルを開く
const modalOpen=()=> {
    // $modalのクラスのリストに”is-active"を追加
    $modal.classList.add('is-active');
  }

  // モーダルを閉じる
const modalClose=()=> {
    // $modalのクラスのリストから”is-active"を削除
    $modal.classList.remove('is-active');
  }



// ボタンがクリックされた時の処理
const clickHandler=(e)=>{
    console.log(e.target)
    console.log(e.currentTarget)
    // 正解なら，スコアを加算し，正解の場合のモーダルを表示
    //　不正解なら，不正解の場合のモーダルを表示
    console.log(e.currentTarget.textContent.slice(2))
    if(e.currentTarget.querySelector('.js-button-text').textContent.slice(2)===quiz[quizIndex]['correct']){
        score++;
        $result.setAttribute("src","assets/correct.svg");
        
        modalOpen()
    }else{
        $result.setAttribute("src","assets/incorrect.svg");
        modalOpen()
    };
    
    // ボタンを非活性化する
    $buttons.forEach((button)=>{
        button.disabled=true
    })
    console.log('非活性化')
}



// 「次の問題」ボタンを押して，①モーダルを閉じ，②次の問題を表示する
const nextTo=()=>{
    // ①
    modalClose()
    //②
    quizIndex++;
    
    // ボタンを活性化する
    $buttons.forEach((button)=>{
        button.disabled=false
    })
    console.log('活性化')

    if (quizIndex<quiz.length){
        setupQuiz();
    }else{
        sessionStorage.setItem('quizScore', score);
        window.location.href = 'result.html'; // 通常の遷移

    };
}



setupQuiz()



