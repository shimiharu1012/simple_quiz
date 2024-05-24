

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
        correct:'オゾン草'
    },
    {
        question:'次の美食會のメンバーのうち，副料理長でないものは誰か',
        answers:['アルファロ','スタージュン','グリンパーチ','トミーロッド'],
        correct:'アルファロ'
    },
    {
        question:'作中において，生物の状態変化や動作を始め，あらゆるものを止める特殊技能は？',
        answers:['ピッキング','スタッキング','シバリング','ノッキング'],
        correct:'ノッキング'
    },
    {
        question:'作中世界の暦では，ある出来事を境に「ビフォアグルメエイジ/グルメエイジ」という時代区分が定義されている．その出来事は？',
        answers:['グルメ戦争の終結','グルメ細胞の発見','巨大隕石の衝突','美食神アカシアの誕生'],
        correct:'グルメ戦争の終結'
    },
    {
        question:'エリア8の八王，馬王の種族である幻獣ヘラクの主食は？',
        answers:['火','水','土','空気'],
        correct:'空気'
    },
    {
        question:'料理人ランキング15位，「繊細料理の千流」が料理長を務める割烹の名前は？',
        answers:['霧隠れ割烹','雲隠れ割烹','木隠れ割烹','影隠れ割烹'],
        correct:'雲隠れ割烹'
    },
    {
        question:'IGOの精鋭部隊「第０ビオトーオプ」の職員の中に存在しないのは？',
        answers:['整体師','小説家','音楽家','マジシャン'],
        correct:'音楽家'
    },
    {
        question:'次の四人のうち，「美食人間国宝」の称号を持つのは誰',
        answers:['メリスマン','ザウス','千代','初代メルク'],
        correct:'メリスマン'
    },
    {
        question:'美食會が使用する遠隔操作型のロボット，「GTロボ」の”T”はなんの略か',
        answers:['tele-existance','transformation','target-tracking','trigger-pulled'],
        correct:''
    },
];

//　要素を取得

const $question=document.querySelector('.js-quiz-question');
const $buttons=document.querySelectorAll('.js-quiz-button');
const buttonLength=$buttons.length;
const $buttonsText=document.querySelectorAll('.js-button-text');
const $modal = document.querySelector('.js-modal');
const $result=document.querySelector('.js-modal-result');
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
buttonMarker=['A','B','C','D']
const setupQuiz=()=>{
    $question.textContent=`第${quizIndex+1}問`+" "+quiz[randomIndeces[quizIndex]].question;
    // 各ボタン内のテキスト部分に問題を割り当てる
    optionRandmIndices=generateUniqueRandomIndeces(4,4)
    for(let i=0; i<buttonLength; i++){
        $buttonsText[i].textContent=buttonMarker[i]+' '+quiz[randomIndeces[quizIndex]].answers[optionRandmIndices[i]];
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
    
    // 正解なら，スコアを加算し，正解の場合のモーダルを表示
    //　不正解なら，不正解の場合のモーダルを表示
    
    if(e.currentTarget.querySelector('.js-button-text').textContent.slice(2)===quiz[randomIndeces[quizIndex]]['correct']){
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
    

    if (quizIndex<quiz.length){
        setupQuiz();
    }else{
        sessionStorage.setItem('quizScore', score);
        window.location.href = 'result.html'; // 通常の遷移

    };
}

// 長さupperBoundの配列から，arrayLength個を持ってきてランダムに並べるためのインデックスを生成
const generateUniqueRandomIndeces=(upperBound, arrayLength)=> {
    const indeces = Array.from({ length: upperBound},(_,i)=>i);
    for (let i = indeces.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [indeces[i], indeces[j]] = [indeces[j], indeces[i]];
    }
    return indeces.slice(0, arrayLength);
}


const proposingQuizLength=quiz.length    // クイズの出題数
const randomIndeces = generateUniqueRandomIndeces(quiz.length,proposingQuizLength);
setupQuiz()
sessionStorage.setItem('quizLength',String(proposingQuizLength))    //resultにおいて，出題数を使用する



