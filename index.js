//変数
let message='Hello World!!';
//message='hello world!!'


//定数
const message2='Hello JavaScript!!';

//配列
let fruitsArray=['apple','banana','orange'];
let countrysArray=['America','Japan','China'];

//forとwhile
// for (let i=0;i<fruitsArray.length;i++){
//     console.log(fruitsArray[i]);
// }

// let j=0
// while (j<countrysArray.length){
//     console.log(countrysArray[j]);
//     j++;
// }

//ifとelse



//関数
const myFunc=(bound)=>{
    if(fruitsArray.length>bound){
        console.log('MANY MANY FRUITS!!');
    }else{
        console.log('FEW FRUITS...');
    }
};

//オブジェクト
const fruit={
    name:'strawberry',
    color:'red',
    description:()=>{
        console.log(fruit.name+' is '+fruit.color);
    }
}

console.log(fruit.name);
fruit.description();



// window.alert('YOU DIED!!');

console.log(document.getElementsByTagName('button')[0].addEventListener('click',()=>{
    window.alert('hello!')
}))