

// quiz.html内の処理
const quiz=[
    {
        question:'漫画「トリコ」の原作者は？',
        answers: ['久保帯人','島袋光年','空知英秋','松井優征'],
        correct: '島袋光年'
    },
    {
        question:'美食四天王ココのフルコースのうち，正しくないもはどれ？',
        answers: ['ブレオカジキ','エア','ネオトマト','毒草のポタージュ'],
        correct: '毒草のポタージュ'
    },
    {
        question:'美食四天王のうち，最も身長が高いのは誰？',
        answers: ['トリコ','ココ','サニー','ゼブラ'],
        correct: 'ゼブラ'
    },
    {
        question:'作中のクッキングフェス編において，世界料理人ランキング10位以内でないのは誰？',
        answers: ['あんよJr','クララマン','CMゴロン','倉影'],
        correct: 'クララマン'
    },
    {
        question:'主人公トリコの使用する必殺技のうち，１番初めに披露された技は？',
        answers: ['釘パンチ','ナイフ','フォーク','オートファジー'],
        correct: 'フォーク'
    },
    {
        question:'”神の料理人”フローゼが使用してた包丁の名前は',
        answers: ['白雪姫','シャングリラ','シンデレラ','滝唾'],
        correct: 'シンデレラ'
    },
    {
        question:'トリコ原作の最終話のラストに登場するスペースタイパンの捕獲レベルは？',
        answers: ['51万','52万','53万','54万'],
        correct: '53万'
    },
    {
        question:'「劇場版 トリコ 美食神の超食宝」に登場するラスボスは？',
        answers:['ギリム','ガラム','ゴラム','グリム'],
        correct:'ギリム'
    },
    {
        question:'トリコのフルコースに含まれない食材は次のうちどれ？',
        answers:['BBコーン','オゾン草','虹の実','ビリオンバードの卵'],
        correct:'ビリオンバードの卵'
    },
    {
        question:'次の美食會のメンバーのうち，副料理長でないものは誰か',
        answers:['アルファロ','スタージュン','グリンパーチ','トミーロッド'],
        correct:'アルファロ'
    },
    // {
    //     question:'',
    //     answers:,
    //     correct:
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



